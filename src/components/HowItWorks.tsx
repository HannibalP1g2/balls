"use client";
import ScrollReveal from "./ScrollReveal";

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
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
              The Process
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>How it works</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
        <div>
          {steps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              {/* Timeline column */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: "50%",
                  border: "1px solid var(--gold-dim)",
                  background: "rgba(201,168,76,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  color: "var(--gold)",
                  fontWeight: 600,
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    width: 1,
                    height: 64,
                    background: "linear-gradient(to bottom, var(--gold-dim), transparent)",
                    marginTop: 6,
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? "1rem" : 0, paddingTop: "10px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", marginBottom: "0.5rem", fontWeight: 500 }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "0.9rem", maxWidth: "520px" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
