import Badge from "../components/Badge";
import CardHeader from "../components/CardHeader";
import ConsumptionChart from "../charts/ConsumptionChart";
import { forecastData } from "../data/mockData";

export default function MeterAnalysis({ meter, onBack }) {
  const forecastWithNull = forecastData.map((d, i) => ({
    ...d,
    forecast: d.type === "forecast" ? d.kwh : null,
    kwh: d.type === "actual" ? d.kwh : null,
  }));

  return (
    <>
      <section className="analysis-title">
        <button onClick={onBack}>← Back to dashboard</button>
        <label>OPERATIONS / METER ANALYSIS</label>
        <h1>Meter analysis</h1>
        <p>Explainable insights for a single smart-meter profile.</p>
      </section>

      <section className="meter-top">
        <div>
          <Badge risk={meter.risk} />
          <h2>{meter.id}</h2>
          <p>
            ⌖ {meter.city} · {meter.area}
          </p>
        </div>
        <button className="secondary">Export report</button>
      </section>

      <section className="details">
        <article className="card score">
          <p>Risk level</p>
          <h2>
            {meter.risk}
            <span style={{ "--score": meter.score }}>
              {meter.score.toFixed(2)}
              <small>score</small>
            </span>
          </h2>
          <small>Risk signal for human review</small>
        </article>
        <article className="card">
          <p>Recent consumption</p>
          <h2>
            {meter.kwh} <small>kWh</small>
          </h2>
          <div className="bar">
            <i style={{ width: `${Math.min(100 + meter.delta, 100)}%` }} />
          </div>
          <small className="danger">
            ↓ {Math.abs(meter.delta)}% compared with baseline
          </small>
        </article>
        <article className="card">
          <p>Forecast status</p>
          <h2>Available</h2>
          <div className="forecast">↗ Stable demand expected</div>
          <small>Next 24 hours · refreshed now</small>
        </article>
      </section>

      <section className="grid2">
        <article className="card">
          <CardHeader
            title="Consumption & load forecast"
            text="Last 24 hours with next 12-hour forecast"
          />
          <ConsumptionChart data={forecastWithNull} showForecast />
          <div className="notice">
            ✦ <b>Forecast insight</b> A gradual recovery is expected, but usage
            remains below usual range.
          </div>
        </article>
        <article className="card explain">
          <span className="icon">✦</span>
          <h2>Why was this meter flagged?</h2>
          <p>
            The system found a meaningful change from this meter's normal
            consumption pattern.
          </p>
          <ul>
            {meter.why.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <div className="notice">
            Review threshold <b>0.65</b>
            <strong>Current score: {meter.score.toFixed(2)}</strong>
          </div>
        </article>
      </section>

      <section className="meter-meta">
        <article className="card">
          <h3>Meter Details</h3>
          <div className="meta-grid">
            <div>
              <p>Status</p>
              <strong>{meter.status}</strong>
            </div>
            <div>
              <p>Type</p>
              <strong>{meter.type}</strong>
            </div>
            <div>
              <p>Provider</p>
              <strong>{meter.provider}</strong>
            </div>
            <div>
              <p>Installed</p>
              <strong>{meter.installed}</strong>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
