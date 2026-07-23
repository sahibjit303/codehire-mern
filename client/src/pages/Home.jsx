import { useState } from "react";
import { Link } from "react-router-dom";
import FadeUp from "../components/FadeUp.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { TABS, WHY, STEPS, TESTIMONIALS, HERO_CANDIDATES, BETA_CARDS } from "../data/homeData.js";

/* ── Tab visual components ───────────────────────── */

function MiniCandRow({ name, sub, score, bg, color, pct }) {
  return (
    <div className="mini-cand-row">
      <div className="mini-cand-avatar" style={{ background: bg, color }}>{name.slice(0, 2)}</div>
      <div className="mini-cand-info">
        <div className="mini-cand-name">{name}</div>
        <div className="mini-cand-sub">{sub}</div>
        <div className="mini-cand-bar">
          <div className="mini-cand-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="mini-cand-score">{score}</div>
    </div>
  );
}

function ScreenVisual() {
  return (
    <div className="tab-visual">
      <div className="tab-visual-label">Live Candidate Ranking</div>
      <MiniCandRow name="Arjun K." sub="Go · Kubernetes · Postgres" score={94} pct={94} bg="#E0E7FF" color="#4F46E5" />
      <MiniCandRow name="Sofia R." sub="React · Node · TypeScript" score={88} pct={88} bg="#FEF3C7" color="#D97706" />
      <MiniCandRow name="Marcus L." sub="Rust · Distributed Systems" score={82} pct={82} bg="#ECFDF5" color="#059669" />
    </div>
  );
}

function AssessVisual() {
  return (
    <div className="tab-visual">
      <div className="tab-visual-label">Assessment Environment</div>
      <div className="code-preview">
        <div className="code-preview-bar">assessment_2847.py</div>
        <div className="code-preview-body">
          <div><span className="tok-keyword">def </span><span className="tok-fn">process_orders</span>(orders):</div>
          <div className="code-indent-1">result = []</div>
          <div className="code-indent-1"><span className="tok-keyword">for</span> o in orders:</div>
          <div className="code-indent-2"><span className="tok-keyword">if</span> o[<span className="tok-string">'status'</span>] == <span className="tok-string">'active'</span>:</div>
          <div className="code-indent-3">result.append(o)</div>
          <div className="code-indent-1"><span className="tok-keyword">return</span> result</div>
        </div>
      </div>
      <div className="assess-metrics">
        {[["Paste events", "0 flagged"], ["Edit pattern", "✓ organic"]].map(([l, v]) => (
          <div key={l} className="assess-metric-card">
            <div className="assess-metric-label">{l}</div>
            <div className="assess-metric-value">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InterviewVisual() {
  return (
    <div className="tab-visual">
      <div className="tab-visual-label">Interview Session</div>
      {[["System Design", "Design a rate limiter for a REST API handling 10k req/s."], ["Algorithms", "Optimize a function to find duplicates in a 1M-row dataset."]].map(([type, q]) => (
        <div key={type} className="interview-question-card">
          <div className="interview-question-type">{type}</div>
          <div className="interview-question-text">{q}</div>
        </div>
      ))}
      <div className="interview-score-card">
        <span className="interview-score-label">Candidate score</span>
        <span className="interview-score-value">91 / 100</span>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  const stages = [
    ["Screen", "248 applicants", "#E0E7FF", "#4F46E5", "✓"],
    ["Assess", "42 candidates", "#ECFDF5", "#059669", "→"],
    ["Interview", "8 finalists", "#FEF3C7", "#D97706", "◎"],
  ];
  return (
    <div className="tab-visual">
      <div className="tab-visual-label">Pipeline Stages</div>
      {stages.map(([label, sub, bg, color, icon]) => (
        <div key={label} className="workflow-stage-row">
          <div className="workflow-stage-icon" style={{ background: bg, color }}>{icon}</div>
          <div className="workflow-stage-label">
            <span className="workflow-stage-name">{label}</span> — <span className="workflow-stage-sub">{sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function IntegrationsVisual() {
  const tools = [
    ["🌿", "Greenhouse", "Connected", true],
    ["📅", "Google Cal", "Connected", true],
    ["💬", "Slack", "Connected", true],
    ["🔗", "Webhooks", "Configure", false],
  ];
  return (
    <div className="tab-visual">
      <div className="tab-visual-label">Connected Tools</div>
      <div className="integrations-grid">
        {tools.map(([icon, name, status, active]) => (
          <div key={name} className="integration-card">
            <div className="integration-icon">{icon}</div>
            <div className="integration-name">{name}</div>
            <div className={`integration-status ${active ? "active" : ""}`}>
              {active ? "● " : "○ "}{status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TAB_VISUALS = {
  screen: ScreenVisual,
  assess: AssessVisual,
  interview: InterviewVisual,
  workflow: WorkflowVisual,
  integrations: IntegrationsVisual,
};

const BENTO_ICONS = {
  screen: "🎯",
  assess: "🔬",
  interview: "💬",
  workflow: "⚡",
  integrations: "🔗",
};

/* ── Hero Card ──────────────────────────────────── */
function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card-head">
        <span className="hero-card-title">Top Candidates</span>
        <span className="tag">12 ranked</span>
      </div>
      {HERO_CANDIDATES.map((c) => (
        <div key={c.initials} className="cand-row">
          <div className="cand-avatar" style={{ background: c.bg, color: c.color }}>{c.initials}</div>
          <div className="cand-info">
            <div className="cand-name">{c.name}</div>
            <div className="cand-role">{c.role}</div>
          </div>
          <div className="cand-score">{c.score}</div>
        </div>
      ))}
      <div className="hero-card-footer">
        <span className="mono">avg. score</span>
        <span className="mono hero-card-avg">88.0</span>
      </div>
    </div>
  );
}

/* ── Home Page ──────────────────────────────────── */
export default function Home() {
  usePageTitle(null);
  const [activeTab, setActiveTab] = useState("screen");
  const Visual = TAB_VISUALS[activeTab];
  const current = TABS.find((t) => t.key === activeTab);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <FadeUp>
              <div className="eyebrow">Start hiring smarter — sign up free</div>
              <h1>Hire Engineers Who <span className="italic">Actually Build.</span><br />Not Just Prompt AI.</h1>
              <p className="hero-sub">
                Technical hiring is broken. AI tools let anyone look qualified on paper.
                CodeHire gives you the tools to find engineers who can genuinely think,
                architect, and deliver — with proof.
              </p>
              <div className="hero-ctas">
                <Link to="/register" className="btn btn-primary">
                  Get Started Free
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href="#how" className="btn btn-outline">See how it works</a>
              </div>
              <p className="hero-note mono">// No credit card required · Set up in minutes</p>

              <div className="hero-stats">
                <div>
                  <div className="hero-stat-val">70%</div>
                  <div className="hero-stat-label">Faster screening</div>
                </div>
                <div>
                  <div className="hero-stat-val">3×</div>
                  <div className="hero-stat-label">Better signal</div>
                </div>
                <div>
                  <div className="hero-stat-val">24h</div>
                  <div className="hero-stat-label">To first assessment</div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <HeroCard />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container">
          <p className="mono trust-text">
            USED BY ENGINEERING TEAMS WHO CARE ABOUT CODE QUALITY · STARTUPS · SCALE-UPS · TECH LEADS
          </p>
        </div>
      </div>

      {/* ── FEATURES BENTO ── */}
      <section className="section-alt" id="features">
        <div className="container">
          <FadeUp>
            <div className="section-head">
              <div className="eyebrow">Platform</div>
              <h2>Everything your team needs — from first application to final hire</h2>
              <p>One integrated platform. Screen smarter, assess authentically, interview consistently, and close faster — without stitching five tools together.</p>
            </div>
          </FadeUp>

          <div className="feature-bento">
            {TABS.map((t, i) => {
              const V = TAB_VISUALS[t.key];
              const isWide = i === 0 || i === 3;
              return (
                <FadeUp key={t.key} delay={i * 0.06}>
                  <div
                    className={`feature-bento-card${activeTab === t.key ? " active" : ""}${isWide ? " feature-bento-wide" : ""}`}
                    onClick={() => setActiveTab(t.key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveTab(t.key)}
                  >
                    <div className="feature-bento-num">{t.num}</div>
                    <span className="feature-bento-icon">{BENTO_ICONS[t.key]}</span>
                    <h3>{t.heading}</h3>
                    <p>{t.body}</p>
                    {activeTab === t.key && (
                      <div className="feature-bento-visual">
                        <V />
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Feature detail for active tab — point list */}
          {current && (
            <FadeUp>
              <div style={{ marginTop: 32, padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius)" }}>
                <ul className="point-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0 24px" }}>
                  {current.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── WHY ── */}
      <section id="why">
        <div className="container">
          <FadeUp>
            <div className="section-head">
              <div className="eyebrow">Why CodeHire</div>
              <h2>The four things that make the difference</h2>
            </div>
          </FadeUp>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <FadeUp key={w.num} delay={i * 0.08}>
                <div className="why-card">
                  <div className="why-num">{w.num}</div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-alt" id="how">
        <div className="container">
          <FadeUp>
            <div className="section-head">
              <div className="eyebrow">How It Works</div>
              <h2>From open role to confident hire — in three steps</h2>
              <p>A simple, repeatable process. Strong signal at every stage. Faster decisions you can defend.</p>
            </div>
          </FadeUp>
          <div className="steps">
            {STEPS.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.12}>
                <div className="step">
                  <div className="step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <div className="container">
          <FadeUp>
            <div className="section-head">
              <div className="eyebrow">What Teams Are Saying</div>
              <h2>Built for teams that take engineering quality seriously</h2>
            </div>
          </FadeUp>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.10}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">❝</div>
                  <p className="testimonial-body">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="cand-avatar" style={{ background: t.bg, color: t.color, width: 38, height: 38, fontSize: 13 }}>{t.initials}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="beta">
        <div className="container">
          <FadeUp>
            <div className="beta-box">
              <div className="eyebrow">Start Today</div>
              <h2>Built for teams that hire<br />on merit, not instinct.</h2>
              <p>Sign up free and get your first assessment running in minutes. No credit card required — just bring your hiring pipeline.</p>
              <div className="beta-ctas">
                <Link to="/register" className="btn btn-primary">Create Free Account</Link>
                <a href="#how" className="btn btn-outline">See How It Works</a>
              </div>
              <div className="beta-grid">
                {BETA_CARDS.map(({ icon, title, body }) => (
                  <div key={title} className="beta-card">
                    <span className="beta-card-icon">{icon}</span>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta section-alt">
        <div className="container">
          <FadeUp>
            <div className="eyebrow">Free to Start</div>
            <h2>Stop guessing.<br /><span className="final-cta-highlight">Start knowing.</span></h2>
            <p>Give your hiring team the signal it needs to make confident decisions — fast. Built for engineering-led companies who refuse to compromise on talent quality.</p>
            <div className="final-ctas">
              <Link to="/register" className="btn btn-primary">
                Get Started Free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/login" className="btn btn-outline">Sign In</Link>
            </div>
            <p className="mono final-cta-note">// No credit card required · Set up in minutes</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
