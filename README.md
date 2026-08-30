<h1 align="center">Hi 👋, I'm Arjun Ganesh</h1>

---

## About

<!-- SYNC:about:START -->
Senior engineer, 14+ years in distributed systems. I build anti-financial-crime systems at a Nordic bank by day, and solo-ship agentic-AI products — and win hackathons — by night.

I care about AI that explains its reasoning, leaves an audit trail, and actually works in production.

- 🏦 Software Engineer @ Swedbank — anti-financial crime & AML
- 🤖 Building governed agent fleets on Azure AI Foundry, Google ADK, A2A and MCP
- 🧮 Researching GPU & quantum compute — q1729, the quantum taxicab
<!-- SYNC:about:END -->

---

## Selected Work

<!-- SYNC:selected-work:START -->
<table>
  <tr>
    <td width="33.33%" valign="top">

### 🛡️ [ARGUS](https://github.com/iarjunganesh/argus)
**Multi-agent compliance intelligence**

[Microsoft Agents League — AI Skills Fest 2026 · Reasoning Agents track ↗](https://info.microsoft.com/Agents-League-Hackathon-Registration.html)
![Active](https://img.shields.io/badge/Active-58A6FF?style=flat-square) ![🏆 Winner · Microsoft Agents League 2026 · Hack for Good (1 of 3)](https://img.shields.io/badge/🏆_Winner_·_Microsoft_Agents_League_2026_·_Hack_for_Good_(1_of_3)-FFB000?style=flat-square)

problem> Manual KYC/AML review doesn't scale, and unaudited AI decisions don't survive a regulator's audit.

approach> Five specialist agents coordinated over A2A on Azure AI Foundry. Findings are cited via Foundry IQ, with an audit trail designed for regulatory scrutiny.

impact> Citation-grounded regulatory lookups with reproducible audit trails.

![Python 3.11](https://img.shields.io/badge/Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)
![Foundry IQ](https://img.shields.io/badge/Foundry_IQ-0078D4?style=flat-square&logo=microsoft&logoColor=white)
![Azure OpenAI GPT-4o](https://img.shields.io/badge/Azure_OpenAI_GPT--4o-0089D0?style=flat-square&logo=microsoftazure&logoColor=white)

[Case study →](https://arjunganesh.dev/work/argus) · [Code ↗](https://github.com/iarjunganesh/argus) · [Demo video ↗](https://youtu.be/yaTNCgCwX4s) · [Write-up ↗](https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074)

</td>
    <td width="33.33%" valign="top">

### 🏰 [BASTION](https://github.com/iarjunganesh/bastion)
**A governed institutional-agent fleet for continuous access review**

[All Things Agentic Hackathon 2026 · Fortified Enterprise Fleet track ↗](https://allthingsagentichackathon.devpost.com/)
![Live](https://img.shields.io/badge/Live-2EA043?style=flat-square)

problem> Access review is quarterly work performed on continuously changing permissions. Automating the scan isn't enough — an institutional agent must audit the real policy rather than fixture rows, survive asynchronous retries, prove why it acted, and remain unable to turn suspicious input into a privileged write.

approach> Read-only IAM review against the GCP project that runs it, including its own service identities. Deterministic code detects and scores findings; Gemini explains and routes already-minimized risk. Three institutional agents, one durable investigation identity — no raw IAM binding crosses the model or human-notification boundary.

impact> Human review receives minimized risk categories rather than raw IAM bindings.

![Python 3.12](https://img.shields.io/badge/Python_3.12-3776AB?style=flat-square&logo=python&logoColor=white)
![Google ADK 2.8](https://img.shields.io/badge/Google_ADK_2.8-4285F4?style=flat-square&logo=google&logoColor=white)
![Gemini 3.5 Flash](https://img.shields.io/badge/Gemini_3.5_Flash-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-4285F4?style=flat-square&logo=googlecloud&logoColor=white)

[Case study →](https://arjunganesh.dev/work/bastion) · [Code ↗](https://github.com/iarjunganesh/bastion) · [Live app ↗](https://bastion.arjunganesh.dev/) · [Demo video ↗](https://youtu.be/Xpj8YmzFfpk) · [Devpost ↗](https://devpost.com/software/bastion-pfuy71) · [Write-up ↗](https://dev.to/arjunganesh/what-100-test-coverage-missed-state-across-google-adk-a2a-boundaries-29i1)

</td>
    <td width="33.33%" valign="top">

### 🧠 [CONTINUUM](https://github.com/iarjunganesh/continuum)
**Durable incident memory for cold-started agents**

[CockroachDB × AWS Hackathon 2026 — Build with Agentic Memory ↗](https://cockroachdb-ai.devpost.com/)
![Live](https://img.shields.io/badge/Live-2EA043?style=flat-square)

problem> The conditions that cause production incidents — resource exhaustion, node failure, rollbacks, autoscaling churn — are the same conditions that kill the agent responding to them. An agent holding its working state in process memory does not degrade when that happens: it stops, and a human restarts the incident from zero without knowing which remediation actions already ran.

approach> Every state transition is committed to CockroachDB before and after it happens. Kill the process mid-step — no graceful shutdown, no checkpoint call — and the next cold invocation reads the durable state, sees a step frozen in `executing`, and resumes that exact step.

impact> Resumes an interrupted incident from the exact step it was killed on.

![Python 3.14](https://img.shields.io/badge/Python_3.14-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![CockroachDB](https://img.shields.io/badge/CockroachDB-6933FF?style=flat-square&logo=cockroachlabs&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat-square&logo=awslambda&logoColor=white)

[Case study →](https://arjunganesh.dev/work/continuum) · [Code ↗](https://github.com/iarjunganesh/continuum) · [Live app ↗](https://huggingface.co/spaces/iarjunganesh/continuum) · [Demo video ↗](https://youtu.be/LwD8__sKqa0) · [Devpost ↗](https://devpost.com/software/continuum-w4c3mr)

</td>
  </tr>
</table>

**Archived** — hosting retired; the source, recordings and submissions remain.

- 📡 **[DRIFT](https://github.com/iarjunganesh/drift)** — GPU & AI infrastructure release intelligence. [case study](https://arjunganesh.dev/work/drift) · [code](https://github.com/iarjunganesh/drift) · [demo video](https://youtu.be/6sbIz0ZR8Hw) · [devpost](https://devpost.com/software/drift-release-intelligence-for-gpu-ai-infrastructure-teams)
- 🎁 **[BANKERS' WRAPPED](https://github.com/iarjunganesh/bankers-wrapped)** — A narrated financial recap video, generated end to end. [case study](https://arjunganesh.dev/work/bankers-wrapped) · [code](https://github.com/iarjunganesh/bankers-wrapped) · [demo video](https://youtu.be/eTw1TCcYFk4) · [devpost](https://devpost.com/software/banker-s-wrapped)
<!-- SYNC:selected-work:END -->

---

## Press & Recognition

### What others said

<!-- SYNC:press:START -->
- [Agents League — celebrating the builders](https://techcommunity.microsoft.com/blog/educatordeveloperblog/%F0%9F%8F%86-agents-league-celebrating-the-builders-who-made-agents-battle-for-glory/4538007) — techcommunity.microsoft.com · Microsoft's winners announcement, ARGUS named 1 of 3 for Hack for Good

- [ARGUS: Compliance Infrastructure That Believes Financial Access Is a Human Right](https://techcommunity.microsoft.com/blog/educatordeveloperblog/argus-compliance-infrastructure-that-believes-financial-access-is-a-human-right/4539074) — techcommunity.microsoft.com · Guest post

  Microsoft published my full write-up on the Educator Developer Blog, including how ARGUS fans four specialist agents out over A2A and fans their findings in to a fifth, with citation-grounded risk scoring.



<a href="https://arjunganesh.dev/press">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://arjunganesh.dev/argus-recognition-quote-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://arjunganesh.dev/argus-recognition-quote-light.png">
    <img alt="Microsoft Foundry Discord recognition for ARGUS after Agents League Hack for Good" src="https://arjunganesh.dev/argus-recognition-quote-light.png">
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
![Foundry IQ](https://img.shields.io/badge/Foundry_IQ-0078D4?style=flat-square&logo=microsoft&logoColor=white)
![Semantic Kernel](https://img.shields.io/badge/Semantic_Kernel-5C2D91?style=flat-square&logo=microsoft&logoColor=white)
![Google ADK](https://img.shields.io/badge/Google_ADK-4285F4?style=flat-square&logo=google&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
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
![Backblaze B2](https://img.shields.io/badge/Backblaze_B2-E21C2A?style=flat-square&logo=backblaze&logoColor=white)
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
- **[q1729](https://github.com/iarjunganesh/q1729)** — On an RTX 5070 Laptop GPU, the CUDA implementation reached double-precision saturation (~16 digits) in ~2.6 ms, while simulated QAE reached ~5 digits in ~0.44 s. No crossover was observed on this hardware.
- **[llm-qlab](https://github.com/iarjunganesh/llm-qlab)** — Across three 7B model families, decode throughput fell monotonically as quantized weight size increased. Full Llama-2 offload measured 6.2x CPU-only decode throughput.
- **[pythonic-algorithms-lab](https://github.com/iarjunganesh/pythonic-algorithms-lab)** — In the published sweep, radix sort is the strongest GPU result, while BFS and reductions remain slower than their CPU baselines at the tested sizes.
- **[iq-series](https://github.com/iarjunganesh/iq-series)** — Completed Microsoft IQ learning cookbooks with executed Foundry IQ notebook outputs.
<!-- SYNC:experiments:END -->

---

## Certifications & training

<!-- SYNC:certifications:START -->
- [NVIDIA Certified Professional: Agentic AI](https://www.credly.com/badges/9bd97539-00ed-40e7-990e-829e8592b1bd) — *NVIDIA*
- [Kubernetes Administration](https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9e8e7f08-3f88-45a0-b0be-694276f9d2c6-arjun-ganesh-ac140df6-e13a-4ab9-978e-a78345e96415-certificate.pdf) — *The Linux Foundation*
- [IBM Machine Learning Essentials](https://www.credly.com/badges/fe045d02-8b3e-46b6-9d2b-c331627c6803) — *IBM*
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
