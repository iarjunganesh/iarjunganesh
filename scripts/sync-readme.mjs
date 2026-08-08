#!/usr/bin/env node
// Regenerates the marked sections of README.md from the live data in
// ../portfolio/app/page.tsx (arjunganesh.dev). Run this whenever the
// portfolio's projects/career/certifications/tech stack change.
//
// Usage: node scripts/sync-readme.mjs [--portfolio <path-to-page.tsx>] [--check]
//   --check   exit 1 if README.md would change, without writing (CI-friendly)

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const portfolioFlagIdx = args.indexOf("--portfolio");
const PORTFOLIO_PAGE =
  portfolioFlagIdx !== -1 && args[portfolioFlagIdx + 1]
    ? path.resolve(args[portfolioFlagIdx + 1])
    : path.resolve(REPO_ROOT, "..", "portfolio", "app", "page.tsx");
const README_PATH = path.resolve(REPO_ROOT, "README.md");

// ---------------------------------------------------------------------------
// 1. Extract plain-data array literals out of the portfolio's page.tsx.
//    These consts are pure JS literals (no JSX/functions inside them), so
//    once isolated they can be safely evaluated.
// ---------------------------------------------------------------------------

function extractConstExpression(source, name) {
  const declRe = new RegExp(`const\\s+${name}\\s*(:[^=]*)?=\\s*`);
  const m = declRe.exec(source);
  if (!m) throw new Error(`Could not find "const ${name}" in ${PORTFOLIO_PAGE}`);
  let i = m.index + m[0].length;

  let parenDepth = 0;
  let braceDepth = 0;
  let bracketDepth = 0;
  let inString = null;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;
  const start = i;

  for (; i < source.length; i++) {
    const ch = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (ch === "\n") inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (ch === "*" && next === "/") {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === inString) inString = null;
      continue;
    }

    if (ch === "/" && next === "/") {
      inLineComment = true;
      i++;
      continue;
    }

    if (ch === "/" && next === "*") {
      inBlockComment = true;
      i++;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inString = ch;
      continue;
    }

    if (ch === "(") parenDepth++;
    else if (ch === ")") parenDepth--;
    else if (ch === "{") braceDepth++;
    else if (ch === "}") braceDepth--;
    else if (ch === "[") bracketDepth++;
    else if (ch === "]") bracketDepth--;
    else if (ch === ";" && parenDepth === 0 && braceDepth === 0 && bracketDepth === 0) {
      break;
    }
  }

  return source.slice(start, i).trim();
}

function tryEvalExpression(expression, scope) {
  const keys = Object.keys(scope);
  const values = Object.values(scope);
  // eslint-disable-next-line no-new-func
  return Function(...keys, `"use strict"; return (${expression});`)(...values);
}

function evalExpression(expression, source, scope, cache) {
  try {
    return tryEvalExpression(expression, scope);
  } catch (err) {
    const originalErr = err;
    const ref = /([A-Za-z_$][\w$]*) is not defined/.exec(err?.message || "")?.[1];
    if (!ref || ref in scope || cache.inProgress.has(ref)) {
      throw err;
    }

    const declRe = new RegExp(`const\\s+${ref}\\s*(:[^=]*)?=\\s*`);
    if (!declRe.test(source)) {
      throw originalErr;
    }

    cache.inProgress.add(ref);
    try {
      const refExpr = extractConstExpression(source, ref);
      const refValue = evalExpression(refExpr, source, scope, cache);
      scope[ref] = refValue;
    } catch {
      throw originalErr;
    } finally {
      cache.inProgress.delete(ref);
    }

    return tryEvalExpression(expression, scope);
  }
}

function loadPortfolioData() {
  let source;
  try {
    source = readFileSync(PORTFOLIO_PAGE, "utf8");
  } catch (err) {
    throw new Error(
      `Could not read portfolio page.tsx at ${PORTFOLIO_PAGE}\n` +
        `Pass --portfolio <path> if the portfolio repo lives somewhere else.\n${err.message}`
    );
  }
  const names = ["projects", "research", "experiments", "techGroups", "career", "certifications", "ARGUS_BLOG_URL"];
  const data = {};
  const scope = {};
  const cache = { inProgress: new Set() };
  for (const name of names) {
    const expr = extractConstExpression(source, name);
    data[name] = evalExpression(expr, source, scope, cache);
    scope[name] = data[name];
  }
  return data;
}

// ---------------------------------------------------------------------------
// 2. Badge rendering helpers
// ---------------------------------------------------------------------------

// Exact-label -> {logo, color} lookup for shields.io badges. Extend this as
// the portfolio picks up new stack items — anything missing falls back to a
// plain grey badge (with a console warning) so the sync never hard-fails.
const BADGE_META = {
  "Azure AI Foundry": { color: "0089D0", logo: "microsoftazure" },
  "Azure OpenAI GPT-4o": { color: "0089D0", logo: "microsoftazure" },
  "Foundry IQ": { color: "0078D4", logo: "microsoft" },
  "Semantic Kernel": { color: "5C2D91", logo: "microsoft" },
  A2A: { color: "00C7B7", logo: "probot" },
  "Azure AI Search": { color: "0089D0", logo: "microsoftazure" },
  "Cosmos DB": { color: "0089D0", logo: "microsoftazure" },
  "RAG hybrid search": { color: "FF6F00", logo: "elasticsearch" },
  "RAG Hybrid Search": { color: "FF6F00", logo: "elasticsearch" },
  MCP: { color: "00C7B7", logo: "protocolsdotio" },
  Gradio: { color: "F97316", logo: "gradio" },
  "Microsoft Azure": { color: "0089D0", logo: "microsoftazure" },
  "Amazon AWS": { color: "FF9900", logo: "amazonaws" },
  OpenShift: { color: "EE0000", logo: "redhatopenshift" },
  "NVIDIA CUDA": { color: "76B900", logo: "nvidia" },
  OpenTelemetry: { color: "000000", logo: "opentelemetry" },
  KQL: { color: "0078D4", logo: "microsoftazure" },
  Java: { color: "ED8B00", logo: "openjdk" },
  "Spring Boot": { color: "6DB33F", logo: "springboot" },
  Quarkus: { color: "4695EB", logo: "quarkus" },
  FastAPI: { color: "009688", logo: "fastapi" },
  TypeScript: { color: "3178C6", logo: "typescript" },
  React: { color: "61DAFB", logo: "react", logoColor: "black" },
  "Next.js": { color: "000000", logo: "nextdotjs" },
  "asyncio agents": { color: "3776AB", logo: "python" },
  Pydantic: { color: "E92063", logo: "pydantic" },
  PostgreSQL: { color: "336791", logo: "postgresql" },
  pgvector: { color: "336791", logo: "postgresql" },
  Vercel: { color: "000000", logo: "vercel" },
  Railway: { color: "0B0D0E", logo: "railway" },
  "CUDA C++": { color: "76B900", logo: "nvidia" },
  "CUDA-Q": { color: "76B900", logo: "nvidia" },
  cuQuantum: { color: "76B900", logo: "nvidia" },
  "NVIDIA NIM": { color: "76B900", logo: "nvidia" },
  Nemotron: { color: "76B900", logo: "nvidia" },
  Python: { color: "3776AB", logo: "python" },
  CockroachDB: { color: "6933FF", logo: "cockroachlabs" },
  "CockroachDB MCP": { color: "6933FF", logo: "cockroachlabs" },
  "Amazon Bedrock": { color: "232F3E", logo: "amazonaws" },
  "AWS Lambda": { color: "FF9900", logo: "awslambda" },
  pytest: { color: "0A9EDC", logo: "pytest" },
  "Backblaze B2": { color: "E21C2A", logo: "backblaze" },
  "Genblaze SDK": { color: "7C3AED" },
  "GMI Cloud Seedream": { color: "0066CC" },
  "OpenAI TTS-1": { color: "412991", logo: "openai" },
  FFmpeg: { color: "007808", logo: "ffmpeg" },
  "Plaid Sandbox": { color: "111111", logo: "plaid" },
};

// Strip a trailing version number ("Python 3.11" -> "Python") to widen
// lookups without needing every version pinned in BADGE_META.
function baseLabel(label) {
  return label.replace(/\s+[\d.]+$/, "").trim();
}

function badgeMeta(label) {
  return BADGE_META[label] || BADGE_META[baseLabel(label)] || null;
}

function shieldEncode(text) {
  return text
    .replace(/-/g, "--")
    .replace(/_/g, "__")
    .replace(/ /g, "_")
    .replace(/\+/g, "%2B")
    .replace(/#/g, "%23");
}

function stackBadge(label) {
  const meta = badgeMeta(label);
  if (!meta) {
    console.warn(`[sync-readme] no badge mapping for "${label}" — using a plain grey badge`);
  }
  const color = meta?.color ?? "555555";
  const logoParam = meta?.logo ? `&logo=${meta.logo}&logoColor=${meta.logoColor ?? "white"}` : "";
  const url = `https://img.shields.io/badge/${shieldEncode(label)}-${color}?style=flat-square${logoParam}`;
  return `![${label}](${url})`;
}

const TONE_COLOR = { gold: "FFB000", green: "2EA043", accent: "58A6FF", muted: "30363D" };

function statusBadge(badge) {
  const color = TONE_COLOR[badge.tone] ?? TONE_COLOR.muted;
  const url = `https://img.shields.io/badge/${shieldEncode(badge.label)}-${color}?style=flat-square`;
  const image = `![${badge.label}](${url})`;
  return badge.href ? `[${image}](${badge.href})` : image;
}

// ---------------------------------------------------------------------------
// 3. Section renderers
// ---------------------------------------------------------------------------

function renderProjectCard(p) {
  const lines = [];
  lines.push(`### ${p.emoji} [${p.name}](${p.href})`);
  lines.push(`**${p.tagline}**`);
  lines.push("");
  if (p.context) {
    const contextText = p.contextHref ? `[${p.context} ↗](${p.contextHref})` : `\`${p.context}\``;
    lines.push(contextText);
  }
  if (p.statusBadges?.length) {
    lines.push(p.statusBadges.map(statusBadge).join(" "));
  }
  lines.push("");
  if (p.angle) {
    lines.push(`problem> ${p.angle}`);
    lines.push("");
  }
  lines.push(`approach> ${p.description}`);
  // ARGUS's credentials box carries a sentence hardcoded in the portfolio's
  // JSX (not in the data array) — special-cased here since it isn't
  // derivable from `projects` alone.
  if (p.key === "argus" && p.credentials?.length) {
    lines.push("");
    lines.push(
      "Studied Foundry IQ before building ARGUS, then competed in the Agents League Reasoning Agents track — and won Hack for Good (1 of 3)."
    );

    const credentialLinks = p.credentials
      .map((c) => `[${c.label} ${c.sub} ↗](${c.href})`)
      .join(" · ");
    if (credentialLinks) {
      lines.push("");
      lines.push(credentialLinks);
    }
  }
  lines.push("");
  lines.push(p.stack.flat().map(stackBadge).join("\n"));
  lines.push("");
  const links = [`[Repository ↗](${p.href})`];
  if (p.demoHref) links.push(`[Watch demo ↗](${p.demoHref})`);
  for (const l of p.liveLinks ?? []) links.push(`[${l.label} ↗](${l.href})`);
  lines.push(links.join(" · "));
  return lines.join("\n");
}

function renderSelectedWork(projects) {
  const cards = projects.map(renderProjectCard);
  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push([cards[i], cards[i + 1] ?? ""]);
  }
  const rowsHtml = rows
    .map(
      ([left, right]) =>
        `  <tr>\n    <td width="50%" valign="top">\n\n${left}\n\n</td>\n    <td width="50%" valign="top">\n\n${right}\n\n</td>\n  </tr>`
    )
    .join("\n");
  return `<table>\n${rowsHtml}\n</table>`;
}

function renderResearch(research) {
  return renderSelectedWork(research);
}

function renderTechStack(techGroups) {
  return techGroups
    .map((g) => `**${g.label}**\n${g.items.map(stackBadge).join("\n")}`)
    .join("\n\n");
}

function renderCareer(career) {
  return career
    .map((c) => `**${c.period} · ${c.role} · ${c.company}** — ${c.location}\n${c.note}`)
    .join("\n\n");
}

function renderExperiments(experiments) {
  return experiments.map((e) => `- **[${e.name}](${e.href})** — ${e.desc}`).join("\n");
}

function renderCertifications(certifications) {
  return certifications.map((c) => `- [${c.name}](${c.href}) — *${c.issuer}*`).join("\n");
}

function renderPress(data) {
  const argusBlogUrl = data.ARGUS_BLOG_URL;
  const lines = [];
  lines.push(`- [ARGUS: Compliance Infrastructure That Believes Financial Access Is a Human Right](${argusBlogUrl}) — techcommunity.microsoft.com · Guest post (July 2026)`);
  lines.push("  Microsoft published my full write-up on the Educator Developer Blog, including how ARGUS coordinates five agents over A2A with citation-grounded risk scoring.");
  lines.push("");
  lines.push("[![Microsoft Foundry Discord recognition for ARGUS after Agents League Hack for Good](https://arjunganesh.dev/argus-agents-league-recognition-dark.png#gh-dark-mode-only)](https://arjunganesh.dev/#press)");
  lines.push("[![Microsoft Foundry Discord recognition for ARGUS after Agents League Hack for Good](https://arjunganesh.dev/argus-agents-league-recognition-light.png#gh-light-mode-only)](https://arjunganesh.dev/#press)");
  lines.push("");
  lines.push("_Lee Stott · Microsoft in `#agentsleague` (theme-aware image)_");
  return lines.join("\n\n");
}

// ---------------------------------------------------------------------------
// 4. Marker-based splice into README.md
// ---------------------------------------------------------------------------

const SECTIONS = [
  { name: "selected-work", render: (d) => renderSelectedWork(d.projects) },
  { name: "press", render: (d) => renderPress(d) },
  { name: "research", render: (d) => renderResearch(d.research) },
  { name: "tech-stack", render: (d) => renderTechStack(d.techGroups) },
  { name: "career", render: (d) => renderCareer(d.career) },
  { name: "experiments", render: (d) => renderExperiments(d.experiments) },
  { name: "certifications", render: (d) => renderCertifications(d.certifications) },
];

function spliceSection(readme, name, content) {
  const start = `<!-- SYNC:${name}:START -->`;
  const end = `<!-- SYNC:${name}:END -->`;
  const startIdx = readme.indexOf(start);
  const endIdx = readme.indexOf(end);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(`Markers for section "${name}" not found in README.md`);
  }
  const before = readme.slice(0, startIdx + start.length);
  const after = readme.slice(endIdx);
  return `${before}\n${content}\n${after}`;
}

function main() {
  const data = loadPortfolioData();
  let readme = readFileSync(README_PATH, "utf8");
  for (const { name, render } of SECTIONS) {
    readme = spliceSection(readme, name, render(data));
  }

  const original = readFileSync(README_PATH, "utf8");
  if (readme === original) {
    console.log("README.md is already in sync with the portfolio.");
    return;
  }

  if (checkOnly) {
    console.error("README.md is OUT OF SYNC with the portfolio. Run: node scripts/sync-readme.mjs");
    process.exit(1);
  }

  writeFileSync(README_PATH, readme, "utf8");
  console.log("README.md synced from portfolio data.");
}

main();
