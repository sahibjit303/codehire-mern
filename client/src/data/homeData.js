/* ─── Home Page Content ─────────────────────────────────────────────────────
   All user-facing copy lives here. Edit this file to update text on the site.
   ─────────────────────────────────────────────────────────────────────────── */

export const TABS = [
  {
    key: "screen",
    label: "Screen",
    num: "01",
    heading: "Surface top engineers in minutes, not weeks",
    body: "Set your role, seniority, and tech stack. CodeHire's AI reads every application and produces an explainable ranked shortlist — based on genuine engineering depth, not resume polish.",
    points: [
      "Semantic stack-matching across 20+ engineering signals",
      "Explainable scores — see exactly why each candidate ranked",
      "Bias-resistant evaluation grounded in skill, not presentation",
      "One-click sync with Greenhouse, Lever, and Ashby",
    ],
  },
  {
    key: "assess",
    label: "Assess",
    num: "02",
    heading: "Every candidate gets a challenge they can't Google",
    body: "CodeHire generates a fresh, role-specific coding assessment for every candidate. No shared test banks. No recycled questions. No way to cheat with a browser tab open.",
    points: [
      "Unique AI-generated assessments per candidate and role",
      "Real-time capture of paste events, edit rhythm, and authorship signals",
      "Time-boxed, production-style problem scenarios",
      "Auto-graded with detailed, human-readable evaluation reports",
    ],
  },
  {
    key: "interview",
    label: "Interview",
    num: "03",
    heading: "Structured interviews that remove subjectivity",
    body: "Run consistent, high-signal technical interviews with AI-generated question guides calibrated to your exact role and seniority. Every interviewer asks the same quality of questions — every time.",
    points: [
      "Role and seniority-tailored question banks",
      "Integrated live coding environment for technical rounds",
      "Automated scoring rubrics and evidence summaries",
      "Interviewer calibration reports for long-term hiring consistency",
    ],
  },
  {
    key: "workflow",
    label: "Pipeline",
    num: "04",
    heading: "Automate the manual work between decisions",
    body: "Build hiring workflows that move candidates forward automatically — from first application to final offer — without spreadsheets, Slack pings, or dropped follow-ups.",
    points: [
      "Drag-and-drop pipeline builder with stage automation",
      "Score-threshold rules that auto-advance top performers",
      "Bulk email templates and calendar scheduling built in",
      "Complete audit trail for compliance and team transparency",
    ],
  },
  {
    key: "integrations",
    label: "Integrations",
    num: "05",
    heading: "Works with the tools your team already uses",
    body: "CodeHire connects to your existing ATS, calendar, and communication stack. Your hiring data stays in sync — no context-switching, no manual exports, no broken workflows.",
    points: [
      "Native connectors for Greenhouse, Lever, and Ashby",
      "Google Calendar and Outlook scheduling sync",
      "Slack notifications, approvals, and candidate summaries",
      "Open REST API and webhooks for custom integrations",
    ],
  },
];

export const WHY = [
  {
    num: "01",
    title: "Assessments That Cannot Be Faked",
    body: "Every test is generated from scratch for each candidate. Our AI tracks paste events, typing cadence, and edit patterns — so you always know who actually wrote the code.",
  },
  {
    num: "02",
    title: "Scores Your Team Can Trust and Explain",
    body: "Every ranking includes a full breakdown. See exactly why a candidate scored 87 — down to the specific skills, patterns, and signals that drove the decision.",
  },
  {
    num: "03",
    title: "One Platform, End to End",
    body: "Screening, assessments, interviews, scheduling, and reporting — unified in a single workflow. No more stitching together five different tools across three browser tabs.",
  },
  {
    num: "04",
    title: "Built for the AI-Era Hiring Problem",
    body: "When any candidate can generate passing code with ChatGPT, skills-based hiring breaks. CodeHire is purpose-built to identify engineers who can genuinely think — not just prompt.",
  },
];

export const STEPS = [
  {
    num: "01",
    title: "Define the role — CodeHire builds the assessment",
    body: "Set the title, required stack, and difficulty level. CodeHire generates a unique, tailored coding challenge in seconds — not a generic template pulled from a bank.",
  },
  {
    num: "02",
    title: "Candidates complete a verifiable challenge",
    body: "Each candidate works in a real coding environment. CodeHire captures behavioral signals — paste activity, edit patterns, time on task — alongside the actual code output.",
  },
  {
    num: "03",
    title: "Receive a scored report and make a confident decision",
    body: "Get a clear AI evaluation with a recommendation and supporting evidence for every submission. Move the right engineer forward with data the whole team can stand behind.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "We cut initial screening from three weeks to four days. CodeHire's assessments exposed two candidates who looked excellent on paper but couldn't write a function without AI assistance.",
    name: "Priya Mehta",
    role: "CTO, Stacklane (YC W24)",
    initials: "PM",
    bg: "#E6EEF7",
    color: "#2563EB",
  },
  {
    quote: "The behavioural detection is the real differentiator. We used to spend hours in interviews realising the candidate had no real depth. That simply doesn't happen with CodeHire.",
    name: "Jordan Wu",
    role: "Founder, Relaybase (YC S25)",
    initials: "JW",
    bg: "#F1E6D2",
    color: "#D97706",
  },
  {
    quote: "What I value most is that the scores are explainable. My engineers trust the rankings because we can see exactly what was evaluated and why — no black box.",
    name: "Ade Okonkwo",
    role: "Engineering Lead, Klippa (YC W25)",
    initials: "AO",
    bg: "#ECFDF5",
    color: "#059669",
  },
];

export const HERO_CANDIDATES = [
  { initials: "AK", name: "Arjun Kapoor",  role: "Senior Backend Engineer", score: 94, bg: "#E6EEF7", color: "#2563EB" },
  { initials: "SR", name: "Sofia Ruiz",    role: "Full Stack Engineer",     score: 88, bg: "#F1E6D2", color: "#D97706" },
  { initials: "ML", name: "Marcus Lee",    role: "Systems Engineer",        score: 82, bg: "#ECFDF5", color: "#059669" },
];

export const BETA_CARDS = [
  {
    icon: "🚀",
    title: "Instant Access",
    body: "Sign up and start building assessments immediately. No approval process, no waitlist — your account is ready within seconds.",
  },
  {
    icon: "📊",
    title: "Signal, Not Just Data",
    body: "We don't hand you a dashboard full of metrics. We give you a clear recommendation — who to advance, who to pass, and the evidence behind every decision.",
  },
  {
    icon: "🤝",
    title: "Hands-On from Day One",
    body: "Our team works directly with you to configure assessments for your stack and standards. Your first live assessment will be running within 24 hours of onboarding.",
  },
];
