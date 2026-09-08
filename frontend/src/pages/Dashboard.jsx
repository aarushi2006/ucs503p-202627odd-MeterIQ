import Stat from "../components/Stat";
import CardHeader from "../components/CardHeader";
import MeterSearch from "../components/MeterSearch";
import MeterTable from "../components/MeterTable";
import ConsumptionChart from "../charts/ConsumptionChart";
import RiskDonut from "../charts/RiskDonut";
import { weeklyConsumption, cityStats, meters } from "../data/mockData";

export default function Dashboard({ onSelectMeter, onSelectMeterById }) {
  const highRisk = meters.filter((m) => m.risk === "High").length;
  const medRisk = meters.filter((m) => m.risk === "Medium").length;
  const lowRisk = meters.filter((m) => m.risk === "Low").length;

  return (
    <>
      <section className="hero">
        <div>
          <label>
            <i /> LIVE OPERATIONAL SNAPSHOT <em>Updated just now</em>
          </label>
          <h1>Electricity intelligence, at a glance.</h1>
          <p>
            Monitor smart-meter activity across Mathura and Bareilly from one
            secure workspace.
          </p>
        </div>
        <div>
          <button
            className="secondary"
            onClick={() => onSelectMeterById("MTR1005")}
          >
            Priority queue <b>{highRisk}</b>
          </button>
          <button
            className="primary"
            onClick={() => onSelectMeterById("MTR1001")}
          >
            Analyze a meter →
          </button>
        </div>
      </section>

      <MeterSearch meters={meters} onSelect={onSelectMeter} />

      <section className="stats">
        <Stat
          icon="⌁"
          title="Total meters"
          value="12,480"
          sub="↑ 4.8% vs last month"
        />
        <Stat
          icon="✓"
          title="Meters analyzed"
          value="9,842"
          sub="↑ 12.4% this week"
        />
        <Stat
          icon="△"
          title="Anomaly signals"
          value="184"
          sub="1.9% of analyzed meters"
        />
        <Stat
          icon="!"
          title="Priority reviews"
          value="27"
          sub="Human review needed"
          tone="danger"
        />
      </section>

      <section className="grid2">
        <article className="card">
          <CardHeader
            title="Consumption overview"
            text="Daily aggregate consumption across monitored meters"
            right="Last 7 days ⌄"
          />
          <div className="metric">
            <b>86.4</b> MWh <strong>↑ 6.2%</strong>
            <small>vs. previous week</small>
          </div>
          <ConsumptionChart data={weeklyConsumption} />
        </article>
        <article className="card">
          <CardHeader
            title="Risk distribution"
            text="Latest analysis outcomes"
          />
          <RiskDonut high={highRisk} medium={medRisk} low={lowRisk} />
          <div className="notice">
            ✦ Signals support investigation —{" "}
            <b>not confirmed theft findings.</b>
          </div>
        </article>
      </section>

      <section className="grid2">
        <article className="card">
          <CardHeader
            title="City operations pulse"
            text="Meter network health by service area"
            right="● All systems reporting"
          />
          <div className="cities">
            {Object.entries(cityStats).map(([city, stats]) => (
              <div className="city" key={city}>
                <div className="city-header">
                  <b>⌖ {city}</b>
                  <small>{stats.meters.toLocaleString()} meters</small>
                </div>
                <h2>
                  {stats.mwh} <em>MWh today</em>
                </h2>
                <div className="bar">
                  <i
                    style={{
                      width: `${Math.min((stats.analyzed / stats.meters) * 100 * 20, 100)}%`,
                    }}
                  />
                </div>
                <div className="city-stats">
                  <span className="city-stat">
                    <span className="city-stat-dot analyzed" />
                    {stats.analyzed} analyzed
                  </span>
                  <span className="city-stat">
                    <span className="city-stat-dot flagged" />
                    {stats.flagged} flagged
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="availability">
            Network availability
            <span>99.7%</span>
            <b>All smart meters reporting</b>
          </div>
        </article>
        <article className="card queue">
          <CardHeader
            title="Investigation queue"
            text="Priority meters requiring human review"
            right={`${highRisk + medRisk} pending`}
          />
          {meters
            .filter((m) => m.risk === "High" || m.risk === "Medium")
            .map((m) => (
              <button key={m.id} onClick={() => onSelectMeter(m)}>
                <span className={`queue-dot ${m.risk.toLowerCase()}`} />
                <span>
                  <b>{m.id}</b>
                  <small>
                    {m.city} · {m.area} · {m.reason}
                  </small>
                </span>
                <em>{m.score.toFixed(2)}</em>
              </button>
            ))}
        </article>
      </section>

      <article className="card table">
        <CardHeader
          title="Recent meter analysis"
          text="Latest completed anomaly and forecasting assessments"
          right="View all meters →"
        />
        <MeterTable meters={meters} onSelect={onSelectMeter} />
      </article>
    </>
  );
}
