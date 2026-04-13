"use client";

const testimonials = [
  {
    quote: "We used to spend $3,000 a month on our business attorney reviewing contracts. Apollo handles 90% of that work instantly. It's genuinely changed how we operate.",
    name: "Marcus T.",
    role: "Founder, Helix Studio",
    initials: "MT",
  },
  {
    quote: "I uploaded an NDA from a new client and Apollo flagged three clauses that would've been dangerous for my IP. Saved me from a serious mistake.",
    name: "Priya K.",
    role: "Independent Software Consultant",
    initials: "PK",
  },
  {
    quote: "As a food truck owner, I had no idea about local health compliance law. Apollo walked me through everything in plain English. Actually incredible.",
    name: "Derek M.",
    role: "Owner, Street Grind Co.",
    initials: "DM",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }}
            className="testimonial-card"
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "3px", marginBottom: "1.2rem" }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: "var(--gold)", fontSize: "0.85rem" }}>★</span>
              ))}
            </div>

            {/* Quote mark */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              lineHeight: 0.6,
              color: "var(--gold)",
              opacity: 0.25,
              marginBottom: "0.8rem",
              userSelect: "none",
            }}>
              &ldquo;
            </div>

            {/* Quote text */}
            <p style={{
              color: "var(--text-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              flex: 1,
              marginBottom: "1.8rem",
              fontStyle: "italic",
            }}>
              {t.quote}
            </p>

            {/* Attribution */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
              <div style={{
                width: 38, height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(138,111,46,0.1))",
                border: "1px solid var(--gold-dim)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--gold)",
                letterSpacing: "0.04em",
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <p style={{ fontWeight: 500, fontSize: "0.875rem", marginBottom: "2px" }}>{t.name}</p>
                <p style={{ color: "var(--text-dim)", fontSize: "0.78rem" }}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .testimonial-card:hover {
          border-color: rgba(201,168,76,0.25) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
