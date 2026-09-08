export default function Stat({ icon, title, value, sub, tone }) {
  return (
    <article className="stat">
      <div className="stat-top">
        <span className="stat-icon">{icon}</span>
        <span className="stat-label">{title}</span>
      </div>
      <h2>{value}</h2>
      <small className={tone || ""}>{sub}</small>
    </article>
  );
}
