"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section style={{
      padding: "120px 2rem",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Border box */}
      <div style={{
        maxWidth: "740px",
        margin: "0 auto",
        border: "1px solid var(--border-bright)",
        borderRadius: "16px",
        padding: "64px 48px",
        background: "rgba(17,17,24,0.6)",
        backdropFilter: "blur(12px)",
        position: "relative",
      }}>
        {/* Corner accents */}
        {[
          { top: -1, left: -1, borderRadius: "16px 0 0 0", borderTop: "2px solid var(--gold-dim)", borderLeft: "2px solid var(--gold-dim)" },
          { top: -1, right: -1, borderRadius: "0 16px 0 0", borderTop: "2px solid var(--gold-dim)", borderRight: "2px solid var(--gold-dim)" },
          { bottom: -1, left: -1, borderRadius: "0 0 0 16px", borderBottom: "2px solid var(--gold-dim)", borderLeft: "2px solid var(--gold-dim)" },
          { bottom: -1, right: -1, borderRadius: "0 0 16px 0", borderBottom: "2px solid var(--gold-dim)", borderRight: "2px solid var(--gold-dim)" },
        ].map((style, i) => (
          <div key={i} style={{ position: "absolute", width: 28, height: 28, ...style }} />
        ))}

        <p style={{
          color: "var(--gold)",
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1.2rem",
        }}>
          Start today — free
        </p>

        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          marginBottom: "1.2rem",
          lineHeight: 1.2,
        }}>
          Stop leaving your business<br />legally exposed
        </h2>

        <p style={{
          color: "var(--text-muted)",
          fontSize: "1rem",
          maxWidth: "480px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
        }}>
          Every day without legal coverage is a day your contracts, IP, and compliance are at risk. Apollo has you covered in seconds.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/dashboard"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
              color: "#0a0a0f",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get started free
          </Link>
          <a
            href="#pricing"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "1px solid var(--border-bright)",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--gold-dim)")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border-bright)")}
          >
            View pricing
          </a>
        </div>

        <p style={{
          marginTop: "2rem",
          fontSize: "0.78rem",
          color: "var(--text-dim)",
          letterSpacing: "0.04em",
        }}>
          No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
