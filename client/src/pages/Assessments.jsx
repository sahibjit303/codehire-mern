import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import usePageTitle from "../hooks/usePageTitle.js";
import { useToast } from "../context/ToastContext.jsx";
import api from "../api/axios.js";

function DeleteAssessmentModal({ title, onConfirm, onCancel, loading }) {
  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-card modal-card-sm" onClick={(e) => e.stopPropagation()}>
        <div className="delete-icon">🗑️</div>
        <h3 className="modal-title" style={{ textAlign: "center" }}>Delete Assessment?</h3>
        <p className="delete-text">
          "<strong>{title}</strong>" and all its submissions will be permanently deleted.
        </p>
        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onCancel}>Cancel</button>
          <button className="btn btn-danger" onClick={onConfirm} disabled={loading}>
            {loading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

const diffColors = {
  easy: { bg: "#DCFCE7", color: "#16A34A" },
  medium: { bg: "#FEF3C7", color: "#D97706" },
  hard: { bg: "#FEF2F2", color: "#DC2626" },
};

export default function Assessments() {
  usePageTitle("Assessments");
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", language: "javascript", difficulty: "medium", timeLimit: 45 });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState("all"); // "all" | "templates"
  const [search, setSearch] = useState("");
  const [diffFilter, setDiffFilter] = useState("all");
  const [langFilter, setLangFilter] = useState("all");

  useEffect(() => {
    api.get("/assessments")
      .then((res) => setAssessments(res.data.assessments))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const copyInviteLink = (assessment) => {
    const url = `${window.location.origin}/test/${assessment._id}`;
    navigator.clipboard.writeText(url);
    showToast(`Test invite link copied to clipboard!`, "success");
  };

  const filtered = assessments
    .filter((a) => (tab === "templates" ? a.isTemplate : true))
    .filter((a) => (diffFilter === "all" ? true : a.difficulty === diffFilter))
    .filter((a) => (langFilter === "all" ? true : (a.language || "").toLowerCase() === langFilter.toLowerCase()))
    .filter((a) =>
      search === ""
        ? true
        : a.title.toLowerCase().includes(search.toLowerCase()) ||
          (a.description || "").toLowerCase().includes(search.toLowerCase())
    );

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await api.post("/assessments", form);
      navigate(`/dashboard/assessments/${res.data.assessment._id}`);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create assessment");
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await api.delete(`/assessments/${deleteTarget._id}`);
      setAssessments((prev) => prev.filter((a) => a._id !== deleteTarget._id));
      showToast(`"${deleteTarget.title}" deleted`, "success");
      setDeleteTarget(null);
    } catch (err) {
      showToast("Failed to delete assessment", "error");
    } finally {
      setDeleteLoading(false);
    }
  };

  const toggleTemplate = async (assessment) => {
    try {
      const res = await api.put(`/assessments/${assessment._id}`, {
        isTemplate: !assessment.isTemplate,
      });
      setAssessments((prev) =>
        prev.map((a) => (a._id === assessment._id ? res.data.assessment : a))
      );
      showToast(
        res.data.assessment.isTemplate
          ? `"${assessment.title}" saved as template`
          : `"${assessment.title}" removed from templates`,
        "success"
      );
    } catch (err) {
      showToast("Failed to update", "error");
    }
  };

  const cloneFromTemplate = async (template) => {
    try {
      const res = await api.post("/assessments", {
        title: `${template.title} (Copy)`,
        description: template.description,
        language: template.language,
        difficulty: template.difficulty,
        timeLimit: template.timeLimit,
        problems: template.problems,
      });
      navigate(`/dashboard/assessments/${res.data.assessment._id}`);
    } catch (err) {
      showToast("Failed to create from template", "error");
    }
  };

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <div className="assess-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="assess-list-card">
                <div className="skeleton skeleton-title" style={{ marginBottom: 12 }} />
                <div className="skeleton skeleton-line" />
                <div className="skeleton skeleton-line short" style={{ marginTop: 8 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dash-header">
          <div>
            <Link to="/dashboard" className="profile-back">← Back to Dashboard</Link>
            <h1 style={{ marginTop: 12 }}>Assessments</h1>
            <div className="dash-header-sub">Create coding challenges and send them to candidates</div>
          </div>
          <div className="dash-header-actions">
            <Link to="/ai-builder" className="btn btn-ai-gen">
              ✨ Generate with AI
            </Link>
            <button className="btn btn-primary" onClick={() => setShowCreate(true)}>+ New Assessment</button>
          </div>
        </div>

        {/* Tab Toggle & Search Filters */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <div className="assess-tabs" style={{ marginBottom: 0 }}>
            <button
              className={`assess-tab ${tab === "all" ? "active" : ""}`}
              onClick={() => setTab("all")}
            >
              All ({assessments.length})
            </button>
            <button
              className={`assess-tab ${tab === "templates" ? "active" : ""}`}
              onClick={() => setTab("templates")}
            >
              📋 Templates ({assessments.filter((a) => a.isTemplate).length})
            </button>
          </div>

          {/* Filter Bar */}
          <div className="assess-filter-group">
            <input
              type="text"
              className="search-input"
              style={{ padding: "6px 14px", fontSize: 13, width: 200 }}
              placeholder="🔍 Search assessments…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="filter-pill"
              style={{ padding: "6px 12px", fontSize: 13 }}
              value={diffFilter}
              onChange={(e) => setDiffFilter(e.target.value)}
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <select
              className="filter-pill"
              style={{ padding: "6px 12px", fontSize: 13 }}
              value={langFilter}
              onChange={(e) => setLangFilter(e.target.value)}
            >
              <option value="all">All Languages</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="typescript">TypeScript</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">{tab === "templates" ? "📋" : "📝"}</div>
            <h3>{search ? `No assessments matching "${search}"` : tab === "templates" ? "No templates yet" : "No assessments yet"}</h3>
            <p>
              {tab === "templates"
                ? "Save an existing assessment as a template to reuse it across roles and candidates."
                : "Create your first coding challenge to evaluate candidates with real engineering problems."}
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
              {tab === "all" && (
                <>
                  <Link to="/ai-builder" className="btn btn-ai-gen">✨ Generate with AI</Link>
                  <button className="btn btn-outline" onClick={() => setShowCreate(true)}>+ Manual Create</button>
                </>
              )}
              {tab === "templates" && (
                <button className="btn btn-outline" onClick={() => setTab("all")}>View All Assessments</button>
              )}
            </div>
          </div>
        ) : (
          <div className="assess-grid">
            {filtered.map((a, idx) => (
              <div
                key={a._id}
                className={`assess-list-card diff-${a.difficulty || "medium"}`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="assess-list-header">
                  <h3 className="assess-list-title">
                    {a.isTemplate && <span className="template-badge" title="Template">📋</span>}
                    {a.title}
                  </h3>
                  <span className="assess-diff-pill" style={{ background: diffColors[a.difficulty]?.bg, color: diffColors[a.difficulty]?.color }}>
                    {a.difficulty}
                  </span>
                </div>
                {a.description && <p className="assess-list-desc">{a.description}</p>}
                <div className="assess-list-meta">
                  <span>💻 {a.language}</span>
                  <span>⏱ {a.timeLimit}min</span>
                  <span>📝 {a.problems?.length || 0} problems</span>
                  <span>📊 {a.submissionCount || 0} submissions</span>
                  {a.avgScore > 0 && <span>⭐ Avg: {a.avgScore}/100</span>}
                </div>
                <div className="assess-list-actions">
                  <Link to={`/dashboard/assessments/${a._id}`} className="btn btn-outline">Edit / View</Link>
                  <button
                    className="btn btn-outline"
                    onClick={() => copyInviteLink(a)}
                    title="Copy candidate invite link"
                  >
                    🔗 Invite Link
                  </button>
                  <button
                    className="btn btn-outline"
                    onClick={() => toggleTemplate(a)}
                    title={a.isTemplate ? "Remove from templates" : "Save as template"}
                  >
                    {a.isTemplate ? "★ Untemplate" : "☆ Save Template"}
                  </button>
                  <button
                    className="btn btn-outline"
                    style={{ color: "var(--danger)", borderColor: "var(--danger)", flex: "0 0 auto", minWidth: 40 }}
                    onClick={() => setDeleteTarget(a)}
                    title="Delete assessment"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Create Modal */}
        {showCreate && (
          <div className="modal-backdrop" onClick={() => setShowCreate(false)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3 className="modal-title">New Assessment</h3>
                <button onClick={() => setShowCreate(false)} className="icon-close">✕</button>
              </div>
              {error && <div className="error-box">{error}</div>}
              <form onSubmit={handleCreate}>
                <div className="field"><label>Title *</label><input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Senior React Assessment" required autoFocus /></div>
                <div className="field"><label>Description</label><textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} placeholder="Assessment overview for the candidate…" rows={3} /></div>
                <div className="modal-grid-2">
                  <div className="field">
                    <label>Language</label>
                    <select value={form.language} onChange={(e) => setForm((f) => ({ ...f, language: e.target.value }))}>
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="typescript">TypeScript</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Difficulty</label>
                    <select value={form.difficulty} onChange={(e) => setForm((f) => ({ ...f, difficulty: e.target.value }))}>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="field"><label>Time Limit (minutes)</label><input type="number" value={form.timeLimit} onChange={(e) => setForm((f) => ({ ...f, timeLimit: Number(e.target.value) }))} min={5} max={180} /></div>
                <div className="modal-actions">
                  <button type="button" className="btn btn-outline" onClick={() => setShowCreate(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? "Creating…" : "Create & Add Problems"}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteTarget && (
          <DeleteAssessmentModal
            title={deleteTarget.title}
            onConfirm={handleDelete}
            onCancel={() => setDeleteTarget(null)}
            loading={deleteLoading}
          />
        )}
      </div>
    </div>
  );
}
