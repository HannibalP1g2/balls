"use client";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthly: "$29",
    annual: "$23",
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
    monthly: "$79",
    annual: "$63",
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
    monthly: "Custom",
    annual: "Custom",
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
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" style={{ padding: "100px 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Pricing
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>Simple, honest pricing</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto" }}>
          No retainer fees. No hourly surprises. Pay for what you actually use.
        </p>
      </div>

      {/* Billing toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "52px" }}>
        <span style={{ fontSize: "0.875rem", color: billing === "monthly" ? "var(--text)" : "var(--text-muted)", transition: "color 0.2s" }}>
          Monthly
        </span>
        <button
          onClick={() => setBilling(b => b === "monthly" ? "annual" : "monthly")}
          aria-label="Toggle billing period"
          style={{
            width: 50, height: 28,
            borderRadius: 14,
            background: billing === "annual" ? "var(--gold)" : "var(--border-bright)",
            border: "none",
            cursor: "pointer",
            position: "relative",
            transition: "background 0.3s",
            flexShrink: 0,
          }}
        >
          <div style={{
            position: "absolute",
            top: 4,
            left: billing === "annual" ? 26 : 4,
            width: 20, height: 20,
            borderRadius: "50%",
            background: billing === "annual" ? "#0a0a0f" : "var(--text-muted)",
            transition: "left 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
          }} />
        </button>
        <span style={{ fontSize: "0.875rem", color: billing === "annual" ? "var(--text)" : "var(--text-muted)", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "8px" }}>
          Annual
          <span style={{
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "100px",
            padding: "2px 9px",
            fontSize: "0.68rem",
            color: "var(--gold)",
            letterSpacing: "0.04em",
            opacity: billing === "annual" ? 1 : 0.4,
            transition: "opacity 0.3s",
          }}>
            Save 20%
          </span>
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        alignItems: "center",
      }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={plan.highlighted ? "pricing-card pricing-card--featured" : "pricing-card"}
            style={{
              background: plan.highlighted
                ? "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))"
                : "var(--bg-card)",
              border: plan.highlighted ? "1px solid var(--gold-dim)" : "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
              position: "relative",
              transform: plan.highlighted ? "scale(1.03)" : "none",
              boxShadow: plan.highlighted
                ? "0 0 0 1px rgba(201,168,76,0.2), 0 0 50px rgba(201,168,76,0.1), 0 24px 60px rgba(0,0,0,0.4)"
                : "none",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
          >
            {plan.highlighted && (
              <div style={{
                position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                color: "#0a0a0f", padding: "4px 18px", borderRadius: "100px",
                fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                Most Popular
              </div>
            )}

            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {plan.name}
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.4rem" }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5rem",
                fontWeight: 500,
                transition: "all 0.3s",
              }}>
                {billing === "annual" ? plan.annual : plan.monthly}
              </span>
              {plan.period && (
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{plan.period}</span>
              )}
            </div>

            {billing === "annual" && plan.name !== "Enterprise" && (
              <p style={{ fontSize: "0.75rem", color: "var(--gold-dim)", marginBottom: "0.3rem" }}>
                Billed annually — 2 months free
              </p>
            )}

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
              className="pricing-cta"
              style={{
                display: "block", textAlign: "center", padding: "12px",
                borderRadius: "8px", textDecoration: "none",
                fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.02em",
                transition: "opacity 0.2s",
                background: plan.highlighted ? "linear-gradient(135deg, var(--gold), var(--gold-dim))" : "transparent",
                color: plan.highlighted ? "#0a0a0f" : "var(--text)",
                border: plan.highlighted ? "none" : "1px solid var(--border-bright)",
              }}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        .pricing-card:not(.pricing-card--featured):hover {
          border-color: rgba(201,168,76,0.2) !important;
          box-shadow: 0 8px 30px rgba(0,0,0,0.25) !important;
        }
        .pricing-cta:hover { opacity: 0.85; }
      `}</style>
    </section>
  );
}
