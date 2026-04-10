"use client";

const stats = [
  { value: "2,400+", label: "Businesses protected" },
  { value: "$4.2M", label: "Saved in legal fees" },
  { value: "60s", label: "Average analysis time" },
  { value: "97%", label: "Satisfaction rate" },
];

export default function Stats() {
  return (
    <section style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "rgba(201,168,76,0.02)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2rem",
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
              color: "var(--gold)",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
