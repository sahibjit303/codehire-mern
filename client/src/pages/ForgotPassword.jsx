import { useState } from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";
import api from "../api/axios.js";

export default function ForgotPassword() {
  usePageTitle("Forgot Password");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", { email });
      setSent(true);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-mark" style={{ marginBottom: 0 }}>HC</div>
          <span>CodeHire</span>
        </div>

        {sent ? (
          <>
            <div className="eyebrow" style={{ marginTop: 24 }}>Check your email</div>
            <h2>Reset Link Sent</h2>
            <p className="sub">
              If an account with <strong>{email}</strong> exists, we've sent a password reset link. Check your inbox (and spam folder).
            </p>
            <div className="success-box" style={{ marginTop: 16 }}>
              📧 Reset link sent! It expires in 1 hour.
            </div>
            <div className="auth-foot" style={{ marginTop: 24 }}>
              <Link to="/login">← Back to Login</Link>
            </div>
          </>
        ) : (
          <>
            <div className="eyebrow" style={{ marginTop: 24 }}>Forgot password?</div>
            <h2>Reset Your Password</h2>
            <p className="sub">Enter your email and we'll send you a reset link.</p>

            {error && (
              <div className="error-box error-box-icon">
                <span>⚠</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email address</label>
                <input
                  type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@startup.com"
                  autoFocus required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={loading} style={{ marginTop: 4 }}>
                {loading ? <><span className="btn-spinner" /> Sending…</> : "Send Reset Link →"}
              </button>
            </form>

            <div className="auth-divider"><span>or</span></div>

            <div className="auth-foot">
              Remember your password? <Link to="/login">Sign in →</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
