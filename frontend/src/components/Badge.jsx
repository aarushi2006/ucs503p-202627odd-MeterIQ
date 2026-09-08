export default function Badge({ risk }) {
  return (
    <span className={`badge ${risk.toLowerCase()}`}>
      {risk} risk
    </span>
  );
}
