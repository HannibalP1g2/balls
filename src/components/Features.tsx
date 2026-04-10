"use client";

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
            style={{
              background: "var(--bg-card)",
              padding: "2rem",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--bg-card)")}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{f.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", marginBottom: "0.6rem", fontWeight: 500 }}>
              {f.title}
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
