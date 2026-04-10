"use client";

const steps = [
  { num: "01", title: "Describe your situation", desc: "Type your legal question or upload a document. Apollo understands plain English — no legal jargon needed." },
  { num: "02", title: "Apollo analyzes instantly", desc: "Our AI cross-references your input against legal databases, case law, and regulatory frameworks in real time." },
  { num: "03", title: "Get actionable guidance", desc: "Receive a clear breakdown: what the law says, what your options are, and what to do next." },
  { num: "04", title: "Save, share, or escalate", desc: "Download your legal memo, share it with your team, or use it as a brief when speaking to a human attorney." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "100px 2rem",
      background: "linear-gradient(180deg, var(--bg) 0%, rgba(201,168,76,0.02) 50%, var(--bg) 100%)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            The Process
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>How it works</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
                padding: "2.5rem 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontFamily: "'Playfair Display', serif",
                color: "var(--border-bright)",
                lineHeight: 1,
                minWidth: "80px",
                fontWeight: 700,
              }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", marginBottom: "0.6rem", fontWeight: 500 }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "500px" }}>{step.desc}</p>
              </div>
              <div style={{
                marginLeft: "auto",
                width: "48px", height: "48px",
                border: "1px solid var(--border-bright)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--gold)", fontSize: "1.2rem", flexShrink: 0,
              }}>
                {i === 0 ? "✎" : i === 1 ? "◎" : i === 2 ? "✓" : "↗"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
