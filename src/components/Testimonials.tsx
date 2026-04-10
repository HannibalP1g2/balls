"use client";

const testimonials = [
  {
    quote: "We used to spend $3,000 a month on our business attorney reviewing contracts. Apollo handles 90% of that work instantly. It's genuinely changed how we operate.",
    name: "Marcus T.",
    role: "Founder, Helix Studio",
  },
  {
    quote: "I uploaded an NDA from a new client and Apollo flagged three clauses that would've been dangerous for my IP. Saved me from a serious mistake.",
    name: "Priya K.",
    role: "Independent Software Consultant",
  },
  {
    quote: "As a food truck owner, I had no idea about local health compliance law. Apollo walked me through everything in plain English. Actually incredible.",
    name: "Derek M.",
    role: "Owner, Street Grind Co.",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          From Our Users
        </p>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>What businesses are saying</h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}>
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
            }}
          >
            <div style={{ color: "var(--gold)", fontSize: "1.5rem", marginBottom: "1rem", opacity: 0.6 }}>"</div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic" }}>
              {t.quote}
            </p>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
              <p style={{ fontWeight: 500, fontSize: "0.875rem" }}>{t.name}</p>
              <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
