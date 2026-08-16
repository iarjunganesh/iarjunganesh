<h1 align="center">Hi 👋, I'm Arjun Ganesh</h1>

---

## About

Senior engineer, 13+ years in distributed systems. I build anti-financial-crime systems at a Nordic bank by day, and solo-ship agentic-AI products — and win hackathons — by night.

I care about AI that explains its reasoning, leaves an audit trail, and actually works in production.

- 🏦 Software Engineer @ Swedbank — anti-financial crime & AML
- 🤖 Building agentic AI on Azure AI Foundry, A2A, and MCP
- 🧮 Researching GPU & quantum compute — q1729, the quantum taxicab

---

## Selected Work

<!-- SYNC:selected-work:START -->
<table>
  <tr>
    <td width="50%" valign="top">

### 🛡️ [ARGUS](https://github.com/iarjunganesh/argus)
**Multi-agent compliance intelligence**

[Microsoft Agents League — AI Skills Fest 2026 · Reasoning Agents track ↗](https://info.microsoft.com/Agents-League-Hackathon-Registration.html)
![Active](https://img.shields.io/badge/Active-58A6FF?style=flat-square) ![🏆 Winner · Microsoft Agents League 2026 · Hack for Good (1 of 3)](https://img.shields.io/badge/🏆_Winner_·_Microsoft_Agents_League_2026_·_Hack_for_Good_(1_of_3)-FFB000?style=flat-square)

problem> Manual KYC/AML review doesn't scale, and unaudited AI decisions don't survive a regulator's audit.

approach> Five specialist agents coordinated over A2A on Azure AI Foundry. Every finding is cited via Foundry IQ. Full audit trail. All decisions are explainable, reproducible, and regulatory-proof.

impact> 100% auditable, citation-grounded regulatory lookups replacing manual screenings.

![Python 3.11](https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Azure OpenAI GPT-4o](https://img.shields.io/badge/Azure_OpenAI_GPT--4o-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Semantic Kernel](https://img.shields.io/badge/Semantic_Kernel-5C2D91?style=flat-square&logo=microsoft&logoColor=white)
![A2A](https://img.shields.io/badge/A2A-00C7B7?style=flat-square&logo=probot&logoColor=white)
![Azure AI Search](https://img.shields.io/badge/Azure_AI_Search-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Cosmos DB](https://img.shields.io/badge/Cosmos_DB-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![RAG hybrid search](https://img.shields.io/badge/RAG_hybrid_search-FF6F00?style=flat-square&logo=elasticsearch&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-00C7B7?style=flat-square&logo=protocolsdotio&logoColor=white)
![Gradio](https://img.shields.io/badge/Gradio-F97316?style=flat-square&logo=gradio&logoColor=white)

[Code ↗](https://github.com/iarjunganesh/argus) · [Demo video ↗](https://youtu.be/yaTNCgCwX4s) · [Write-up ↗](https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074)

</td>
    <td width="50%" valign="top">

### 🏰 [BASTION](https://github.com/iarjunganesh/bastion)
**A governed institutional-agent fleet for continuous access review**

[All Things Agentic Hackathon 2026 · Fortified Enterprise Fleet track ↗](https://allthingsagentichackathon.devpost.com/)
![In development](https://img.shields.io/badge/In_development-FFB000?style=flat-square)

problem> Access review is quarterly work performed on continuously changing permissions. Automating the scan isn't enough — an institutional agent must remember prior human decisions, survive asynchronous retries, prove why it acted, and remain unable to turn suspicious input into a privileged write.

approach> Read-only IAM review against the GCP project that runs it, including its own service identities. Deterministic code detects and scores findings; Gemini explains and routes already-minimized risk. Three institutional agents, one durable investigation identity — no raw IAM binding crosses the model or human-notification boundary.

impact> Humans receive counts and allowlisted categories, never bindings. 161 tests at 100% statement and branch coverage.

![Python 3.12](https://img.shields.io/badge/Python_3.12-3776AB?style=flat-square&logo=python&logoColor=white)
![Google ADK 2.7](https://img.shields.io/badge/Google_ADK_2.7-4285F4?style=flat-square&logo=google&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Cloud Run](https://img.shields.io/badge/Cloud_Run-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Agent Runtime](https://img.shields.io/badge/Agent_Runtime-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Memory Bank](https://img.shields.io/badge/Memory_Bank-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![A2A Gateway](https://img.shields.io/badge/A2A_Gateway-00C7B7?style=flat-square&logo=probot&logoColor=white)
![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Pub/Sub](https://img.shields.io/badge/Pub/Sub-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Eventarc](https://img.shields.io/badge/Eventarc-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Model Armor](https://img.shields.io/badge/Model_Armor-4285F4?style=flat-square&logo=googlecloud&logoColor=white)

[Code ↗](https://github.com/iarjunganesh/bastion)

</td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 📡 [DRIFT](https://github.com/iarjunganesh/drift)
**GPU & AI infrastructure release intelligence**

[OpenAI Build Week · Devpost ↗](https://openai.devpost.com/)
![Live in production](https://img.shields.io/badge/Live_in_production-2EA043?style=flat-square)

problem> Raw changelogs are noisy, unstructured, and full of false positives. Teams miss critical AI infrastructure updates.

approach> High-precision release aggregation. Raw data → dependency checks → bounded, technical summaries. Built with FastAPI + pgvector semantic deduplication.

impact> Converts raw, noisy changelogs into actionable release intelligence.

![Python 3.14](https://img.shields.io/badge/Python_3.14-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![PostgreSQL 17](https://img.shields.io/badge/PostgreSQL_17-336791?style=flat-square&logo=postgresql&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-336791?style=flat-square&logo=postgresql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)
![Vercel Edge Networks](https://img.shields.io/badge/Vercel_Edge_Networks-000000?style=flat-square&logo=vercel&logoColor=white)

[Code ↗](https://github.com/iarjunganesh/drift) · [Live app ↗](https://dr1ftless.vercel.app) · [API docs ↗](https://drift-api-prod.up.railway.app/docs) · [Demo video ↗](https://youtu.be/6sbIz0ZR8Hw) · [Devpost ↗](https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams)

</td>
    <td width="50%" valign="top">

### 🧠 [CONTINUUM](https://github.com/iarjunganesh/continuum)
**Durable incident memory for cold-started agents**

[CockroachDB × AWS Hackathon 2026 — Build with Agentic Memory ↗](https://cockroachdb-ai.devpost.com/)
![Live in production](https://img.shields.io/badge/Live_in_production-2EA043?style=flat-square)

problem> Cold-started agents lose execution state. Multi-step workflows restart from zero, wasting compute and losing context.

approach> Distributed checkpoint engine on CockroachDB. Restores 100% of execution state without pipeline restart. Mission-critical runtime guarantees.

impact> Restores full execution state across distributed orchestration.

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![CockroachDB](https://img.shields.io/badge/CockroachDB-6933FF?style=flat-square&logo=cockroachlabs&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)
![Amazon Bedrock](https://img.shields.io/badge/Amazon_Bedrock-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-00C7B7?style=flat-square&logo=protocolsdotio&logoColor=white)

[Code ↗](https://github.com/iarjunganesh/continuum) · [Live app ↗](https://huggingface.co/spaces/iarjunganesh/continuum) · [Demo video ↗](https://youtu.be/LwD8__sKqa0) · [Devpost ↗](https://devpost.com/software/continuum-w4c3mr)

</td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 🎁 [BANKERS' WRAPPED](https://github.com/iarjunganesh/bankers-wrapped)
**Year-in-review intelligence for financial workflows**

[Backblaze Generative Media · Devpost ↗](https://backblaze-generative-media.devpost.com/)
![Live in production](https://img.shields.io/badge/Live_in_production-2EA043?style=flat-square)

problem> Data-centric fintech teams want year-in-review insights. Existing tools are generic, not built for financial workflows.

approach> Spotify Wrapped but for banking. Extracts transaction intelligence, generates insights, creates shareable year-end summaries.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

[Code ↗](https://github.com/iarjunganesh/bankers-wrapped) · [Live app ↗](https://bankers-wrapped.arjunganesh.dev) · [API docs ↗](https://bankers-wrapped-api-production.up.railway.app/docs) · [Demo video ↗](https://youtu.be/eTw1TCcYFk4) · [Devpost ↗](https://devpost.com/software/banker-s-wrapped)

</td>
    <td width="50%" valign="top">



</td>
  </tr>
</table>
<!-- SYNC:selected-work:END -->

---

## Press & Recognition

### What others said

<!-- SYNC:press:START -->
- [ARGUS: Compliance Infrastructure That Believes Financial Access Is a Human Right](https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074) — techcommunity.microsoft.com · Guest post (July 2026)

  Microsoft published my full write-up on the Educator Developer Blog, including how ARGUS coordinates five agents over A2A with citation-grounded risk scoring.



<a href="https://arjunganesh.dev/press">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://arjunganesh.dev/argus-agents-league-recognition-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://arjunganesh.dev/argus-agents-league-recognition-light.png">
    <img alt="Microsoft Foundry Discord recognition for ARGUS after Agents League Hack for Good" src="https://arjunganesh.dev/argus-agents-league-recognition-light.png">
  </picture>
</a>



_Lee Stott · Microsoft in `#agentsleague` (theme-aware image)_
<!-- SYNC:press:END -->

---

## What I Work On

**🧩 Agentic AI & Enterprise Intelligence**
I design AI systems with Azure AI Foundry, Foundry IQ, multi-agent orchestration, Agent-to-Agent (A2A) communication, and RAG with hybrid search — built to be explainable, grounded, and production-ready.

**🏗️ Distributed Systems & Backend Architecture**
13+ years building scalable platforms with Java (Spring Boot, Quarkus) and Python (FastAPI) — microservices, NoSQL, event-driven systems, and hybrid cloud across AWS, Azure, and OpenShift.

**⚙️ AI Infrastructure, Performance & Compute**
I work at the infrastructure layer behind modern AI — GPU computing, NVIDIA CUDA, model serving, vector search, and performance engineering.

**📡 Reliability, Observability & Platform Engineering**
I build resilient systems with Azure Functions, Service Bus, OpenTelemetry, Application Insights, and KQL — telemetry pipelines that hold up to enterprise-grade reliability and governance.

---

## Tech Stack

<!-- SYNC:tech-stack:START -->
**Languages & frameworks**
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Quarkus](https://img.shields.io/badge/Quarkus-4695EB?style=flat-square&logo=quarkus&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)

**Agentic AI & LLM**
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Semantic Kernel](https://img.shields.io/badge/Semantic_Kernel-5C2D91?style=flat-square&logo=microsoft&logoColor=white)
![RAG hybrid search](https://img.shields.io/badge/RAG_hybrid_search-FF6F00?style=flat-square&logo=elasticsearch&logoColor=white)
![A2A](https://img.shields.io/badge/A2A-00C7B7?style=flat-square&logo=probot&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-00C7B7?style=flat-square&logo=protocolsdotio&logoColor=white)
![NVIDIA NIM](https://img.shields.io/badge/NVIDIA_NIM-76B900?style=flat-square&logo=nvidia&logoColor=white)
![Amazon Bedrock](https://img.shields.io/badge/Amazon_Bedrock-232F3E?style=flat-square&logo=amazonaws&logoColor=white)

**Cloud & infrastructure**
![Microsoft Azure](https://img.shields.io/badge/Microsoft_Azure-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![OpenShift](https://img.shields.io/badge/OpenShift-EE0000?style=flat-square&logo=redhatopenshift&logoColor=white)
![CockroachDB](https://img.shields.io/badge/CockroachDB-6933FF?style=flat-square&logo=cockroachlabs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**AI infra, GPU & observability**
![CUDA C++](https://img.shields.io/badge/CUDA_C%2B%2B-76B900?style=flat-square&logo=nvidia&logoColor=white)
![CUDA-Q](https://img.shields.io/badge/CUDA--Q-76B900?style=flat-square&logo=nvidia&logoColor=white)
![cuQuantum](https://img.shields.io/badge/cuQuantum-76B900?style=flat-square&logo=nvidia&logoColor=white)
![NVIDIA CUDA](https://img.shields.io/badge/NVIDIA_CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-336791?style=flat-square&logo=postgresql&logoColor=white)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-000000?style=flat-square&logo=opentelemetry&logoColor=white)
![KQL](https://img.shields.io/badge/KQL-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
<!-- SYNC:tech-stack:END -->

---

## Career Journey

<!-- SYNC:career:START -->
**2025 – Present · Software Engineer · Swedbank** — Stockholm, Sweden
Anti-financial crime · AML platforms · 95%+ test coverage across unified multi-module architecture

**2021 – 2025 · Senior Java Developer · Viaplay Group** — Stockholm, Sweden
Media & streaming on AWS + Kubernetes · ~30% perf gains · ~40% delivery-speed acceleration

**Mar–Sep 2021 · Software Developer · Expleo Technology Nordic** — Gothenburg, Sweden
Domain-driven microservices · ~50% faster onboarding via docs & workflow diagrams

**2012 – 2021 · Senior Software Engineer · IBM** — Sydney & Pune
Regulated banking APIs for Westpac · ~25% response-time gains · Jenkins/Bamboo modernization
<!-- SYNC:career:END -->

---

## Also on GitHub

### Experiments & learning

<!-- SYNC:experiments:START -->
- **[q1729](https://github.com/iarjunganesh/q1729)** — Ramanujan optimization via bare-metal GPU. CUDA-Q + cuQuantum + NVIDIA NIM Nemotron
- **[llm-qlab](https://github.com/iarjunganesh/llm-qlab)** — LLM quantization benchmarks on consumer GPUs. Speed, VRAM, accuracy trade-offs
- **[pythonic-algorithms-lab](https://github.com/iarjunganesh/pythonic-algorithms-lab)** — CPU vs GPU profiling with empirical Big-O analysis. CuPy + Numba CUDA
- **[iq-series](https://github.com/iarjunganesh/iq-series)** — Hands-on Microsoft IQ notebooks. Foundry IQ, Work IQ, Fabric IQ
<!-- SYNC:experiments:END -->

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=iarjunganesh&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub stats" width="44%" />
  &nbsp;
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=iarjunganesh&layout=compact&theme=tokyonight&hide_border=true" alt="Top languages" width="34%" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=iarjunganesh&theme=tokyonight&hide_border=true" width="44%" />
  &nbsp;
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=iarjunganesh&theme=tokyo-night&hide_border=true&area=true" width="50%" />
</p>

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=iarjunganesh&theme=tokyonight&no-frame=true&row=1&column=6" alt="GitHub Trophies" />
</p>

---

## Certifications & training

<!-- SYNC:certifications:START -->
- [NVIDIA Certified Professional: Agentic AI](https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd) — *NVIDIA*
- [Machine Learning and AI Foundations](https://www.linkedin.com/learning/certificates/762902fe70c1d3b8f90eea011889a6d505aaf3aeff11cc72c0fe3f69cb96830a) — *LinkedIn Learning Community*
- [IBM Machine Learning Essentials](https://www.credly.com/badges/fe045d02-8b3e-46b6-9d2b-c331627c6803) — *IBM*
- [Python for Data Science](https://www.credly.com/badges/fbef61ad-8c64-4c1a-a556-2da36664da8e) — *IBM*
- [Kubernetes Administration](https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9e8e7f08-3f88-45a0-b0be-694276f9d2c6-arjun-ganesh-ac140df6-e13a-4ab9-978e-a78345e96415-certificate.pdf) — *The Linux Foundation*
<!-- SYNC:certifications:END -->

Full certification list on [LinkedIn](https://linkedin.com/in/iarjunganesh) ↗

---

## Let's Connect

<p align="center">
  <a href="https://linkedin.com/in/iarjunganesh"><img src="https://img.shields.io/badge/LinkedIn-iarjunganesh-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  &nbsp;
  <a href="https://github.com/iarjunganesh"><img src="https://img.shields.io/badge/GitHub-iarjunganesh-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  &nbsp;
  <a href="https://discord.com/users/1468742414851248301"><img src="https://img.shields.io/badge/Discord-iarjunganesh-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Agentic_AI-open_to_discuss-58A6FF?style=flat-square" />
  <img src="https://img.shields.io/badge/AI_Governance-open_to_discuss-58A6FF?style=flat-square" />
  <img src="https://img.shields.io/badge/Azure_AI_Foundry-open_to_discuss-58A6FF?style=flat-square" />
  <img src="https://img.shields.io/badge/Banking_Technology-open_to_discuss-58A6FF?style=flat-square" />
  <img src="https://img.shields.io/badge/Distributed_Systems-open_to_discuss-58A6FF?style=flat-square" />
  <img src="https://img.shields.io/badge/Generative_Media-open_to_discuss-58A6FF?style=flat-square" />
</p>

<p align="center">
  Building trustworthy AI systems that explain their reasoning, leave an audit trail, and actually work in production.<br/>
  If that's the kind of problem you're working on — I'd love to talk.
</p>

<p align="center"><sub>github.com/iarjunganesh · arjunganesh.dev</sub></p>
