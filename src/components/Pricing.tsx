"use client";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    desc: "For solo founders and freelancers",
    features: [
      "50 AI legal queries/month",
      "Contract review (up to 10 pages)",
      "Basic document templates",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    desc: "For growing small businesses",
    features: [
      "Unlimited AI legal queries",
      "Unlimited contract review",
      "Full document library",
      "Compliance monitoring",
      "Priority support",
      "Team access (up to 5)",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams with complex needs",
    features: [
      "Everything in Business",
      "Dedicated legal AI model",
      "Custom integrations",
      "SLA guarantee",
      "Unlimited team seats",
      "White-glove onboarding",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Pricing
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>Simple, honest pricing</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto" }}>
          No retainer fees. No hourly surprises. Pay for what you actually use.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        alignItems: "start",
      }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: plan.highlighted ? "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))" : "var(--bg-card)",
              border: plan.highlighted ? "1px solid var(--gold-dim)" : "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
              position: "relative",
            }}
          >
            {plan.highlighted && (
              <div style={{
                position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                color: "#0a0a0f",
                padding: "4px 16px",
                borderRadius: "100px",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>Most Popular</div>
            )}

            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {plan.name}
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.4rem" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 500 }}>{plan.price}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{plan.period}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>{plan.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.9rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{f}</span>
                </div>
              ))}
            </div>

            <Link
              href="/dashboard"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                background: plan.highlighted ? "linear-gradient(135deg, var(--gold), var(--gold-dim))" : "transparent",
                color: plan.highlighted ? "#0a0a0f" : "var(--text)",
                border: plan.highlighted ? "none" : "1px solid var(--border-bright)",
                transition: "opacity 0.2s",
              }}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
