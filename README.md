<div align="center">

# ⚡ CodeHire

### Next-Gen Technical Hiring & AI-Powered Candidate Assessment Platform

**Evaluate engineers with authentic coding challenges · AI-graded evaluations · Anti-cheat telemetry · Automated hiring pipelines**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Website-codehire--gamma.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://codehire-gamma.vercel.app/)
[![Gemini AI](https://img.shields.io/badge/AI_Engine-Gemini_3.5_Flash-7C3AED?style=for-the-badge&logo=google&logoColor=white)](https://codehire-gamma.vercel.app/)
[![License](https://img.shields.io/badge/License-Proprietary_%26_Confidential-DC2626?style=for-the-badge)](https://codehire-gamma.vercel.app/)

<br />

### 🔗 **Live Website**: [https://codehire-gamma.vercel.app/](https://codehire-gamma.vercel.app/)

</div>

---

> [!CAUTION]
> **PROPRIETARY & CONFIDENTIAL SOURCE CODE**
>
> All rights reserved. This repository contains confidential and proprietary source code belonging to **CodeHire**. 
> Unauthorized copying, cloning, downloading, modification, redistribution, or commercial reproduction of any part of this codebase is strictly prohibited without explicit written permission.

---

## 📌 Table of Contents
- [✨ Overview](#-overview)
- [🚀 Platform Features](#-platform-features)
- [🤖 Gemini 3.5 AI Engine](#-gemini-35-ai-engine)
- [🛡️ Anti-Cheat Telemetry](#️-anti-cheat-telemetry)
- [🌐 Live Web Application](#-live-web-application)

---

## ✨ Overview

**CodeHire** is an enterprise-grade technical recruitment platform designed for engineering teams that prioritize talent quality over resume claims.

Instead of generic multiple-choice quizzes, CodeHire gives candidates **real-world coding problems** in a browser-based Monaco editor (the engine behind VS Code) and leverages **Google Gemini 3.5 Flash** to analyze code correctness, structural quality, computational efficiency, and anti-cheat telemetry.

```
       Candidate Invite / Application Link
                        │
                        ▼
         ┌───────────────────────────────┐
         │ Monaco In-Browser IDE Sandbox │
         │   (Web Worker Test Runner)    │
         └──────────────┬────────────────┘
                        │
                        ▼
         ┌───────────────────────────────┐
         │    Anti-Cheat Telemetry       │
         │ (Tab Switch, Copy/Paste, Speed)│
         └──────────────┬────────────────┘
                        │
                        ▼
         ┌───────────────────────────────┐
         │ Gemini 3.5 Flash AI Engine    │
         │  (Multi-Axis Evaluation)      │
         └──────────────┬────────────────┘
                        │
                        ▼
    ┌─────────────────────────────────────────┐
    │ Kanban Pipeline & Automated Hire Rules │
    └─────────────────────────────────────────┘
```

---

## 🚀 Platform Features

<details open>
<summary><strong>🎯 1. Interactive Candidate Pipeline & Dashboard</strong></summary>

- **6-Stage Hiring Pipeline**: Drag-and-drop or stage-select candidates across `Screen`, `Assess`, `Interview`, `Offer`, `Hired`, and `Rejected`.
- **Real-Time AI Signal Banner**: Highlights top-scoring candidates ready for immediate evaluation.
- **Bulk Actions & Filtering**: Instant candidate search, score filter ranges, CSV import/export, and stage migration.
- **Interactive Kanban Board**: Visual columns with score indicators and candidate cards.

</details>

<details open>
<summary><strong>💻 2. Online Code Editor & Web Worker Sandbox</strong></summary>

- **Monaco Code Editor**: VS Code keybindings, syntax highlighting, autocompletion, and multi-language support (`JavaScript`, `Python`, `TypeScript`).
- **Zero-Server Execution**: Candidate code runs safely in a browser Web Worker sandbox, testing custom inputs against automated test suites.
- **Timed Link Invites**: Candidates access assessment sessions via unique 7-day tokens without needing account registration.

</details>

<details open>
<summary><strong>🤖 3. AI Assessment Generator & Builder</strong></summary>

- **Interactive AI Prompting**: Generate tailored coding problems by specifying role titles, difficulty levels, and tech stacks.
- **Auto-Generated Test Cases**: AI creates visible test cases and hidden edge-case suites automatically.
- **Template Manager**: Save assessments as reusable organizational templates.

</details>

<details open>
<summary><strong>🛡️ 4. Anti-Cheat Telemetry Engine</strong></summary>

- **Tab Switch Detection**: Detects `visibilitychange` events and window focus loss.
- **Clipboard Auditing**: Logs copy and paste frequency with exact timestamps.
- **Typing Velocity Anomaly**: Measures characters per minute to flag copy-paste block insertions.
- **Idle Period Monitoring**: Logs 30s+ periods of inactivity.

</details>

<details open>
<summary><strong>👥 5. Multi-Candidate AI Comparison</strong></summary>

- **Side-by-Side Matrix**: Select 2–4 candidates to compare side-by-side.
- **SVG Radar Charts**: Multi-dimensional visual mapping for Correctness, Quality, Efficiency, and Originality.
- **🏆 Top Match Identification**: AI flags top-ranking candidates and generates hiring recommendations.

</details>

<details open>
<summary><strong>📈 6. Pipeline Analytics & Conversion Funnel</strong></summary>

- **Interactive Donut Distribution**: Visual stage distribution ring chart with live metrics.
- **Conversion Funnel**: Cumulative pipeline progression tracking.
- **Technology Stack Breakdown**: Frequency distribution of candidate tech stacks.

</details>

---

## 🤖 Gemini 3.5 AI Engine

CodeHire uses **Google Gemini 3.5 Flash** across four core hiring workflows:

1. **Code Evaluation & Grading**:
   - **Correctness (40%)**: Pass/fail test verification and edge-case execution logic.
   - **Code Quality (20%)**: Clean code practices, modular naming, and readability.
   - **Efficiency (20%)**: Time ($O(N)$) and Space complexity evaluation.
   - **Originality (20%)**: Detection of AI-generated boilerplate or external copy-pasting.

2. **Automated AI Challenge Generation**:
   Generates complete problem descriptions, starter code templates, and test cases in seconds.

3. **Candidate Comparison & Executive Summaries**:
   Generates actionable candidate comparison summaries for hiring managers.

---

## 🌐 Live Web Application

Experience CodeHire in action on our live production website:

👉 **[https://codehire-gamma.vercel.app/](https://codehire-gamma.vercel.app/)**

---

<div align="center">

© 2026 CodeHire. All Rights Reserved. Proprietary and Confidential.

</div>
