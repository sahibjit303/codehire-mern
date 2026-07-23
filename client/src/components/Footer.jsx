import { Link } from "react-router-dom";

const SOCIAL = [
  { label: "𝕏", href: "https://x.com/codehire", ariaLabel: "Follow CodeHire on X (Twitter)" },
  { label: "in", href: "https://linkedin.com/company/codehire", ariaLabel: "CodeHire on LinkedIn" },
  { label: "gh", href: "https://github.com/codehire", ariaLabel: "CodeHire on GitHub" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand footer-brand-link">
              <div className="brand-mark">HC</div>
              CodeHire
            </div>
            <p>AI-powered technical hiring for engineering teams that refuse to compromise on quality. Find engineers who build — not just prompt.</p>
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} className="social-icon" aria-label={s.ariaLabel} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/#features">Screen Candidates</Link>
            <Link to="/#features">Assess Technically</Link>
            <Link to="/#features">Interview Consistently</Link>
            <Link to="/#features">Automate Pipeline</Link>
            <Link to="/#features">Integrations</Link>
          </div>

          <div className="footer-col">
            <h4>Use Cases</h4>
            <Link to="/register">Startups & Scale-ups</Link>
            <Link to="/register">Engineering Leads</Link>
            <Link to="/demo">Anti-AI Detection</Link>
            <Link to="/demo">Skills-Based Hiring</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/register">Create Account</Link>
            <Link to="/demo">Live Demo</Link>
            <Link to="/login">Sign In</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CodeHire. All rights reserved.</span>
          <span className="mono footer-tagline">// Hire engineers. Not vibecoders.</span>
        </div>
      </div>
    </footer>
  );
}
