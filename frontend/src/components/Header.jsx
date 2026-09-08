export default function Header({ page }) {
  const titles = {
    dashboard: "Operations dashboard",
    analysis: "Meter analysis",
    about: "About MeterIQ",
  };

  return (
    <header className="top">
      <div>
        <div className="breadcrumb">
          <span> MeterIQ</span> / <span className="current">{titles[page]}</span>
        </div>
        <h2>{titles[page]}</h2>
      </div>
      <div className="top-right">
        <div className="top-status">
          <span className="status-dot" />
          System online
        </div>
        <div className="top-date">
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
    </header>
  );
}
