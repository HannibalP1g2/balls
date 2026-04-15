"use client";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: "⚖",
    title: "Contract Review",
    desc: "Upload any contract and get a plain-English breakdown of risks, red flags, and key clauses in under 60 seconds.",
  },
  {
    icon: "📋",
    title: "Compliance Checks",
    desc: "Stay ahead of federal and state regulations. Apollo monitors your business structure and flags compliance issues before they become fines.",
  },
  {
    icon: "✉",
    title: "Legal Document Drafting",
    desc: "Generate NDAs, operating agreements, employment contracts, and more from templates refined by legal professionals.",
  },
  {
    icon: "🔍",
    title: "Dispute Analysis",
    desc: "Describe your situation and get an honest assessment of your legal standing, likely outcomes, and recommended next steps.",
  },
  {
    icon: "💼",
    title: "IP Protection",
    desc: "Understand trademark, copyright, and patent basics for your products and brand — no law degree required.",
  },
  {
    icon: "📌",
    title: "Instant Legal Memos",
    desc: "Ask any legal question and receive a structured, cited memo you can act on or bring to an attorney for review.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            What Apollo Does
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Everything a small business needs
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Apollo Lawyer covers the full spectrum of legal needs that trip up growing businesses — without the $400/hour rate.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
      }}>
        {features.map((f) => (
          <div
            key={f.title}
            className="feature-card"
            style={{
              background: "var(--bg-card)",
              padding: "2rem",
              transition: "background 0.25s",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              width: 48, height: 48,
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.14)",
              borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem",
              marginBottom: "1.2rem",
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "0.6rem", fontWeight: 500 }}>
              {f.title}
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      </ScrollReveal>
      <style>{`
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover { background: var(--bg-card-hover) !important; }
        .feature-card:hover::before { opacity: 1; }
      `}</style>
    </section>
  );
}
