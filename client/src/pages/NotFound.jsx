import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("404 — Page Not Found");
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <div className="not-found-glyph">404</div>
        <div className="not-found-emoji">🔎</div>
        <h1 className="not-found-heading">This page doesn't exist</h1>
        <p className="not-found-text">
          The page you're looking for may have moved, been renamed, or never existed in the first place.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">← Back to Home</Link>
          <Link to="/dashboard" className="btn btn-outline">Go to Dashboard</Link>
        </div>
        <div className="not-found-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/demo">View Demo</Link>
        </div>
      </div>
    </div>
  );
}
