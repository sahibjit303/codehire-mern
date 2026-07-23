<div align="center">

# ⚡ CodeHire

### Next-Gen Technical Hiring & AI-Powered Candidate Assessment Platform

**Evaluate engineers with authentic coding challenges · AI-graded evaluations · Anti-cheat telemetry · Automated hiring pipelines**

[![Gemini AI](https://img.shields.io/badge/AI_Engine-Gemini_3.5_Flash-7C3AED?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![React](https://img.shields.io/badge/Frontend-React_18_%2B_Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![NodeJS](https://img.shields.io/badge/Backend-Node.js_%2B_Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Editor](https://img.shields.io/badge/Editor-Monaco_(VS_Code)-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://microsoft.github.io/monaco-editor/)

</div>

---

## 📌 Table of Contents
- [✨ Overview](#-overview)
- [🚀 Key Features](#-key-features)
- [🤖 Gemini 3.5 AI Integration](#-gemini-35-ai-integration)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [⚡ Quick Start Guide](#-quick-start-guide)
- [📡 API Endpoint Reference](#-api-endpoint-reference)
- [⚙️ Environment Variables](#️-environment-variables)
- [📄 License](#-license)

---

## ✨ Overview

**CodeHire** is an end-to-end technical recruitment platform designed for engineering teams that prioritize talent quality over resume buzzwords. 

Instead of generic multiple-choice quizzes, CodeHire gives candidates **real-world coding problems** in a browser-based Monaco editor (the engine behind VS Code) and leverages **Google Gemini 3.5 Flash** to analyze code correctness, structural quality, computational efficiency, and anti-cheat indicators.

```
       Candidate Application / Link Invite
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

## 🚀 Key Features

<details open>
<summary><strong>🎯 1. Interactive Candidate Pipeline & Dashboard</strong></summary>

- **6-Stage Hiring Pipeline**: Drag-and-drop or status-select candidates across `Screen`, `Assess`, `Interview`, `Offer`, `Hired`, and `Rejected`.
- **Real-Time Signal Banner**: AI highlights top-performing candidates ready for immediate review.
- **Bulk Actions & Filtering**: Instant candidate search, score range slider, CSV import/export, and stage migration.
- **Interactive Kanban Board**: Visual stage columns with score indicators and candidate cards.

</details>

<details open>
<summary><strong>💻 2. Online Code Editor & Web Worker Sandbox</strong></summary>

- **Monaco Code Editor**: VS Code keybindings, syntax highlighting, autocompletion, and multi-language support (`JavaScript`, `Python`, `TypeScript`).
- **Zero-Server Execution**: Candidate code runs safely in a browser Web Worker sandbox, testing custom inputs against automated test suites.
- **Timed Invites**: Candidates access assessment sessions via unique 7-day tokens without needing an account.

</details>

<details open>
<summary><strong>🤖 3. AI Assessment Builder & Generator</strong></summary>

- **Interactive AI Prompting**: Generate tailored coding problems by entering role titles, difficulty levels, and required technologies.
- **Auto-Generated Test Cases**: AI creates visible test cases and hidden edge-case suites automatically.
- **Template Manager**: Save assessments as reusable organizational templates.

</details>

<details open>
<summary><strong>🛡️ 4. Anti-Cheat Telemetry Engine</strong></summary>

- **Tab Switch Tracking**: Detects `visibilitychange` events and window focus loss.
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

## 🤖 Gemini 3.5 AI Integration

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

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used |
|---|---|
| **Frontend** | React 18, Vite, React Router 6, Vanilla CSS (Design Tokens) |
| **Code IDE** | Monaco Editor, Web Workers |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **AI Services** | Google Gemini 3.5 Flash SDK (`@google/genai`) |
| **Auth & Security** | JWT (JSON Web Tokens), bcryptjs, Express Rate Limiting |
| **Files & Mail** | Multer (Resume Storage), Nodemailer |

---

## ⚡ Quick Start Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **MongoDB**: Local instance or MongoDB Atlas URI
- **Gemini API Key**: Free key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone Repository
```bash
git clone https://github.com/sahibjit303/codehire-mern.git
cd codehire-mern
```

### 2. Configure Environment Variables
Create `.env` in the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/codehire
JWT_SECRET=your_super_secret_jwt_key
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash
```

### 3. Install Dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 4. Run Development Servers
```bash
# Start backend server (port 5000)
cd server
npm run dev

# Start frontend dev server (port 5173)
cd client
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📡 API Endpoint Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new recruiter account | ❌ |
| `POST` | `/api/auth/login` | Authenticate recruiter & get token | ❌ |
| `GET` | `/api/candidates` | Get all pipeline candidates | 🔒 |
| `POST` | `/api/candidates` | Create new candidate profile | 🔒 |
| `PUT` | `/api/candidates/:id` | Update candidate stage, score, or info | 🔒 |
| `DELETE` | `/api/candidates/:id` | Remove candidate | 🔒 |
| `POST` | `/api/candidates/import` | Bulk import candidates via CSV | 🔒 |
| `GET` | `/api/assessments` | Get all assessments & templates | 🔒 |
| `POST` | `/api/assessments` | Create new assessment challenge | 🔒 |
| `POST` | `/api/ai-builder/generate` | Generate assessment using Gemini 3.5 | 🔒 |
| `POST` | `/api/compare` | AI side-by-side candidate comparison | 🔒 |
| `POST` | `/api/submissions/:id/evaluate` | Run Gemini 3.5 evaluation on candidate code | ❌ |

---

## ⚙️ Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `PORT` | Optional | `5000` | Express server port |
| `MONGO_URI` | **Yes** | — | MongoDB connection string |
| `JWT_SECRET` | **Yes** | — | Secret string for signing auth tokens |
| `CLIENT_URL` | Optional | `http://localhost:5173` | Allowed CORS origin |
| `GEMINI_API_KEY` | Optional | — | Google AI Studio API key |
| `GEMINI_MODEL` | Optional | `gemini-3.5-flash` | Gemini model target |

---

<div align="center">

### Built with ❤️ for Engineering Teams Who Hire on Merit

[![GitHub](https://img.shields.io/badge/GitHub-sahibjit303/codehire--mern-181717?style=flat-square&logo=github)](https://github.com/sahibjit303/codehire-mern)

</div>
