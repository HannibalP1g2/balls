"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Is Apollo Lawyer a real attorney?",
    a: "No. Apollo is an AI-powered legal information tool, not a licensed attorney or law firm. It provides general legal information to help you understand your situation — this does not constitute legal advice. For matters requiring formal representation, always consult a licensed attorney in your jurisdiction.",
  },
  {
    q: "What types of legal questions can Apollo help with?",
    a: "Apollo covers contracts (review, drafting, red flags), business formation (LLCs, corporations, sole proprietorships), employment law (NDAs, contractor classification, hiring/firing), intellectual property (trademarks, copyrights, patents), regulatory compliance, commercial lease disputes, and general business legal guidance.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes. Apollo is SOC 2 compliant — all data is encrypted in transit and at rest. We do not sell your data to third parties or use your queries to train AI models. Your legal questions and documents are treated with the confidentiality you'd expect from any professional service.",
  },
  {
    q: "Can I use Apollo's output in legal proceedings?",
    a: "Apollo's outputs are for informational purposes only and are not a substitute for advice from a licensed attorney. Do not rely solely on Apollo's responses in formal legal proceedings. However, our memos and summaries are useful starting points when briefing a human attorney.",
  },
  {
    q: "What jurisdictions does Apollo cover?",
    a: "Apollo is optimized for U.S. federal law and all 50 state jurisdictions. It has working knowledge of Canadian and UK business law but is most reliable for U.S.-based legal questions. Always verify jurisdiction-specific details with a local attorney.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes — no contracts, no cancellation fees. Cancel at any time from your account dashboard. You retain full access until the end of your current billing period.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "80px 2rem", maxWidth: "760px", margin: "0 auto" }}>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>Common questions</h2>
        </div>
      </ScrollReveal>

      <div>
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 50}>
            <div style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "1.4rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                  color: "var(--text)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  color: "var(--gold)",
                  fontSize: "1.3rem",
                  fontWeight: 300,
                  flexShrink: 0,
                  display: "inline-block",
                  transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? "360px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}>
                <p style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  paddingBottom: "1.4rem",
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
