export default function RiskDonut({ high, medium, low }) {
  const total = high + medium + low;
  const highPct = (high / total) * 100;
  const medPct = (medium / total) * 100;
  const lowPct = (low / total) * 100;

  return (
    <div className="risk">
      <div className="donut">
        <b>{total}</b>
        <small>flagged</small>
      </div>
      <p>
        <i className="high" /> High risk <b>{high}</b>
        <br />
        <i className="medium" /> Medium risk <b>{medium}</b>
        <br />
        <i className="low" /> Low risk <b>{low}</b>
      </p>
    </div>
  );
}
