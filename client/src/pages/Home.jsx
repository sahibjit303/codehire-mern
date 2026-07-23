import { Link } from "react-router-dom";
import FadeUp from "../components/FadeUp.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { TABS, WHY, STEPS, TESTIMONIALS, HERO_CANDIDATES, BETA_CARDS } from "../data/homeData.js";

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
              const isWide = i === 0 || i === 3;
              return (
                <FadeUp key={t.key} delay={i * 0.06}>
                  <div className={`feature-bento-card${isWide ? " feature-bento-wide" : ""}`}>
                    <div className="feature-bento-num">{t.num}</div>
                    <span className="feature-bento-icon">{BENTO_ICONS[t.key]}</span>
                    <h3>{t.heading}</h3>
                    <p>{t.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
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
