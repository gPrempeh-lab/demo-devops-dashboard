export default function StatusCard({ title, value, colour }) {
  return (
    <section className="status-card" style={{ borderTop: `4px solid ${colour}` }}>
      <h2>{title}</h2>
      <p>{value}</p>
    </section>
  );
}
