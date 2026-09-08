export default function Sidebar({ page, setPage }) {
  return (
    <aside>
      <div className="brand">
        <img src="/logo-full.svg" alt="MeterIQ" className="brand-logo" />
      </div>
      <nav>
        {[
          ["dashboard", "▦", "Dashboard"],
          ["analysis", "⌁", "Meter Analysis"],
          ["about", "✦", "About MeterIQ"],
        ].map(([id, icon, label]) => (
          <button
            key={id}
            className={page === id ? "active" : ""}
            onClick={() => setPage(id)}
          >
            <span className="nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <div className="mode">
        <i /> Demo environment
        <small>Mock data · API-ready</small>
      </div>
      <div className="team">
        <div className="team-label">TEAM</div>
        <div className="team-member">
          <b>YA</b>
          <span>Yashit Arora</span>
        </div>
        <div className="team-member">
          <b>AG</b>
          <span>Aarushi Gahlawat</span>
        </div>
      </div>
    </aside>
  );
}
