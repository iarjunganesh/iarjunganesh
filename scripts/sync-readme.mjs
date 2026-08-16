#!/usr/bin/env node
// Regenerates the marked sections of README.md from the live data in the
// portfolio repo (arjunganesh.dev). Run this whenever the portfolio's
// projects/career/certifications/tech stack change.
//
// Usage: node scripts/sync-readme.mjs [--portfolio <path-to-data.ts>] [--check]
//   --check   exit 1 if README.md would change, without writing (CI-friendly)
//
// The portfolio moved its content out of app/page.tsx into app/data.ts, which
// is a plain data module with no runtime imports. Node strips the type
// annotations on import, so this script reads the real exported values instead
// of scraping source text — if the portfolio renames or reshapes a field, this
// fails loudly at import rather than silently emitting a stale README.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const portfolioFlagIdx = args.indexOf("--portfolio");
const PORTFOLIO_DATA =
  portfolioFlagIdx !== -1 && args[portfolioFlagIdx + 1]
    ? path.resolve(args[portfolioFlagIdx + 1])
    : path.resolve(REPO_ROOT, "..", "portfolio", "app", "data.ts");
const README_PATH = path.resolve(REPO_ROOT, "README.md");
const SITE = "https://arjunganesh.dev";

async function loadPortfolioData() {
  try {
    const mod = await import(pathToFileURL(PORTFOLIO_DATA).href);
    const required = [
      "projects",
      "experiments",
      "techStack",
      "career",
      "certifications",
      "ARGUS_BLOG_URL",
    ];
    const missing = required.filter((k) => mod[k] === undefined);
    if (missing.length) {
      throw new Error(`data.ts is missing expected export(s): ${missing.join(", ")}`);
    }
    return mod;
  } catch (err) {
    throw new Error(
      `Could not load portfolio data from ${PORTFOLIO_DATA}\n` +
        `Pass --portfolio <path-to-data.ts> if the portfolio repo lives somewhere else.\n${err.message}`
    );
  }
}

// ---------------------------------------------------------------------------
// Presentation config — deliberately lives here, not in the portfolio data.
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
  "Vercel Edge Networks": { color: "000000", logo: "vercel" },
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
  Framer: { color: "0055FF", logo: "framer" },
  // Google Cloud / Gemini — added with Bastion.
  "Google ADK": { color: "4285F4", logo: "google" },
  Gemini: { color: "8E75B2", logo: "googlegemini" },
  "Vertex AI": { color: "4285F4", logo: "googlecloud" },
  "Cloud Run": { color: "4285F4", logo: "googlecloud" },
  "Agent Runtime": { color: "4285F4", logo: "googlecloud" },
  "Memory Bank": { color: "4285F4", logo: "googlecloud" },
  "A2A Gateway": { color: "00C7B7", logo: "probot" },
  Firestore: { color: "FFCA28", logo: "firebase", logoColor: "black" },
  "Pub/Sub": { color: "4285F4", logo: "googlecloud" },
  Eventarc: { color: "4285F4", logo: "googlecloud" },
  "Model Armor": { color: "4285F4", logo: "googlecloud" },
};

// Card emoji per project key. Presentation only — the portfolio data has no
// emoji field, so new projects fall back to a neutral marker.
const PROJECT_EMOJI = {
  argus: "🛡️",
  bastion: "🏰",
  drift: "📡",
  continuum: "🧠",
  "bankers-wrapped": "🎁",
};

// Status string -> shields colour. Keep in step with the portfolio's status
// vocabulary; unknown values render neutral grey rather than failing.
const STATUS_COLOR = {
  "Live in production": "2EA043",
  "In development": "FFB000",
  Active: "58A6FF",
  Submitted: "58A6FF",
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

function plainBadge(label, color, href) {
  const url = `https://img.shields.io/badge/${shieldEncode(label)}-${color}?style=flat-square`;
  const image = `![${label}](${url})`;
  return href ? `[${image}](${href})` : image;
}

// ---------------------------------------------------------------------------
// Section renderers
// ---------------------------------------------------------------------------

function renderProjectCard(p) {
  const lines = [];
  const emoji = PROJECT_EMOJI[p.key] ?? "▪️";
  lines.push(`### ${emoji} [${p.name}](${p.href})`);
  lines.push(`**${p.tagline}**`);
  lines.push("");

  if (p.context) {
    lines.push(p.contextHref ? `[${p.context} ↗](${p.contextHref})` : `\`${p.context}\``);
  }

  const badges = [plainBadge(p.status, STATUS_COLOR[p.status] ?? "30363D")];
  if (p.flag) badges.push(plainBadge(`🏆 ${p.flag}`, "FFB000"));
  lines.push(badges.join(" "));
  lines.push("");

  lines.push(`problem> ${p.problem}`);
  lines.push("");
  lines.push(`approach> ${p.solution}`);
  if (p.impact) {
    lines.push("");
    lines.push(`impact> ${p.impact}`);
  }
  lines.push("");
  lines.push(p.stack.map(stackBadge).join("\n"));
  lines.push("");
  lines.push((p.links ?? []).map((l) => `[${l.label} ↗](${l.href})`).join(" · "));
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

function renderTechStack(techStack) {
  return techStack
    .map((g) => `**${g.label}**\n${g.items.map(stackBadge).join("\n")}`)
    .join("\n\n");
}

function renderCareer(career) {
  return career
    .map((c) => `**${c.period} · ${c.title} · ${c.company}** — ${c.location}\n${c.note}`)
    .join("\n\n");
}

function renderExperiments(experiments) {
  return experiments.map((e) => `- **[${e.name}](${e.href})** — ${e.desc}`).join("\n");
}

function renderCertifications(certifications) {
  return certifications.map((c) => `- [${c.name}](${c.href}) — *${c.issuer}*`).join("\n");
}

function renderPress(data) {
  const lines = [];
  lines.push(
    `- [ARGUS: Compliance Infrastructure That Believes Financial Access Is a Human Right](${data.ARGUS_BLOG_URL}) — techcommunity.microsoft.com · Guest post (July 2026)`
  );
  lines.push(
    "  Microsoft published my full write-up on the Educator Developer Blog, including how ARGUS coordinates five agents over A2A with citation-grounded risk scoring."
  );
  lines.push("");
  // Theme switching must use <picture>, not the older #gh-dark-mode-only URL
  // fragment: GitHub camo-proxies externally hosted images and the rewritten
  // src drops the fragment (it survives only in data-canonical-src), so the
  // theme CSS never matches and BOTH images render. The media query on
  // <source> is camo-safe because it is an attribute, not part of the URL.
  //
  // The portfolio is route-based now, so press lives at /press, not #press.
  const alt = "Microsoft Foundry Discord recognition for ARGUS after Agents League Hack for Good";
  lines.push(
    [
      `<a href="${SITE}/press">`,
      `  <picture>`,
      `    <source media="(prefers-color-scheme: dark)" srcset="${SITE}/argus-agents-league-recognition-dark.png">`,
      `    <source media="(prefers-color-scheme: light)" srcset="${SITE}/argus-agents-league-recognition-light.png">`,
      `    <img alt="${alt}" src="${SITE}/argus-agents-league-recognition-light.png">`,
      `  </picture>`,
      `</a>`,
    ].join("\n")
  );
  lines.push("");
  lines.push("_Lee Stott · Microsoft in `#agentsleague` (theme-aware image)_");
  return lines.join("\n\n");
}

// ---------------------------------------------------------------------------
// Marker-based splice into README.md
// ---------------------------------------------------------------------------

const SECTIONS = [
  { name: "selected-work", render: (d) => renderSelectedWork(d.projects) },
  { name: "press", render: (d) => renderPress(d) },
  { name: "tech-stack", render: (d) => renderTechStack(d.techStack) },
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

async function main() {
  const data = await loadPortfolioData();
  const original = readFileSync(README_PATH, "utf8");
  let readme = original;
  for (const { name, render } of SECTIONS) {
    readme = spliceSection(readme, name, render(data));
  }

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

await main();
