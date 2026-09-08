const features = [
  {
    icon: "⌁",
    title: "Identify patterns",
    desc: "Surface unusual consumption trends for human review.",
  },
  {
    icon: "✦",
    title: "Explain decisions",
    desc: "Show clear, non-technical reasons behind every risk signal.",
  },
  {
    icon: "▦",
    title: "Plan demand",
    desc: "Support capacity planning with load forecasts.",
  },
];

const team = [
  { name: "Yashit Arora" },
  { name: "Aarushi Gahlawat" },
];

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <label>ABOUT METERIQ</label>
        <h1>Explainable smart-meter intelligence.</h1>
        <p>
          MeterIQ brings consumption monitoring, anomaly-risk assessment, and
          short-term forecasting into one utility operations workspace.
        </p>
      </div>
      <div className="about-features">
        {features.map((f) => (
          <article key={f.title} className="about-feature-card">
            <div className="about-feature-icon">{f.icon}</div>
            <h2>{f.title}</h2>
            <p>{f.desc}</p>
          </article>
        ))}
      </div>
      <div className="about-tech">
        <h2>Built with</h2>
        <div className="tech-tags">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Vite</span>
          <span className="tech-tag">Recharts</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">scikit-learn</span>
          <span className="tech-tag">PyTorch</span>
        </div>
      </div>
      <div className="about-team">
        <h2>Team</h2>
        <div className="about-team-grid">
          {team.map((m) => (
            <article key={m.name} className="about-member">
              <div className="about-avatar">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <strong>{m.name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
