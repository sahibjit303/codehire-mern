import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import api from "../api/axios.js";

export default function ResetPassword() {
  usePageTitle("Reset Password");
  const { token } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (form.password.length < 8) {
      return setError("Password must be at least 8 characters.");
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/reset-password", {
        token,
        password: form.password,
      });
      showToast(res.data.message, "success");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
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
        <div className="eyebrow" style={{ marginTop: 24 }}>Almost there</div>
        <h2>Set New Password</h2>
        <p className="sub">Enter your new password below.</p>

        {error && (
          <div className="error-box error-box-icon">
            <span>⚠</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>New password</label>
            <div className="input-pw-wrap">
              <input
                name="password" type={showPw ? "text" : "password"}
                value={form.password} onChange={handleChange}
                placeholder="Min. 8 characters" required
                autoFocus
              />
              <button type="button" className="pw-toggle" onClick={() => setShowPw((v) => !v)} tabIndex={-1}>
                {showPw ? "🙈" : "👁"}
              </button>
            </div>
          </div>
          <div className="field">
            <label>Confirm password</label>
            <input
              name="confirmPassword" type="password"
              value={form.confirmPassword} onChange={handleChange}
              placeholder="Repeat new password" required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={loading} style={{ marginTop: 4 }}>
            {loading ? <><span className="btn-spinner" /> Resetting…</> : "Reset Password →"}
          </button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <div className="auth-foot">
          <Link to="/login">← Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
