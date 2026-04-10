"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 2rem 80px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Background radial glow */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "900px",
        height: "900px",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        opacity: 0.3,
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
      }} />

      <div className="animate-fade-up" style={{ position: "relative", maxWidth: "820px", width: "100%" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "100px",
          padding: "6px 16px",
          marginBottom: "2rem",
          fontSize: "0.78rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--gold)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "pulse 2s infinite" }} />
          AI-Powered Legal Intelligence
        </div>

        <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
          Legal expertise,<br />
          <span className="shimmer-text">without the bill.</span>
        </h1>

        <p className="animate-fade-up-delay-1" style={{
          fontSize: "1.15rem",
          color: "var(--text-muted)",
          maxWidth: "520px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Apollo Lawyer gives small businesses instant access to AI-powered legal guidance — contracts, compliance, disputes — in seconds.
        </p>

        <div className="animate-fade-up-delay-2" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/dashboard"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
              color: "#0a0a0f",
              padding: "14px 32px",
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
            Start for free
          </Link>
          <a
            href="#how-it-works"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "1px solid var(--border-bright)",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--gold-dim)")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border-bright)")}
          >
            See how it works
          </a>
        </div>

        <p className="animate-fade-up-delay-3" style={{
          marginTop: "2rem",
          fontSize: "0.78rem",
          color: "var(--text-dim)",
          letterSpacing: "0.04em",
        }}>
          No credit card required · Cancel anytime · SOC 2 compliant
        </p>

        {/* Mock chat preview */}
        <div className="animate-fade-up-delay-4" style={{
          marginTop: "4rem",
          background: "rgba(14,14,24,0.7)",
          border: "1px solid var(--border-bright)",
          borderRadius: "16px",
          overflow: "hidden",
          maxWidth: "680px",
          margin: "4rem auto 0",
          backdropFilter: "blur(12px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.05)",
          textAlign: "left",
        }}>
          {/* Window chrome */}
          <div style={{
            background: "rgba(10,10,18,0.8)",
            borderBottom: "1px solid var(--border)",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a3a4a" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a3a4a" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a3a4a" }} />
            </div>
            <div style={{ flex: 1, textAlign: "center", fontSize: "0.72rem", color: "var(--text-dim)", letterSpacing: "0.04em" }}>
              apollo — Legal Assistant
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.6)" }} />
              <span style={{ fontSize: "0.65rem", color: "var(--text-dim)" }}>Live</span>
            </div>
          </div>

          {/* Conversation */}
          <div style={{ padding: "20px 20px 16px" }}>
            {/* User message */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px" }}>
              <div style={{
                background: "rgba(201,168,76,0.09)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "12px 12px 3px 12px",
                padding: "10px 14px",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                color: "var(--text)",
                maxWidth: "80%",
              }}>
                My contractor NDA has a clause that gives them ownership of all work product. Is that normal?
              </div>
            </div>

            {/* Apollo message */}
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "serif", fontWeight: 700, fontSize: 11,
                color: "#07070d", flexShrink: 0,
              }}>A</div>
              <div style={{
                background: "rgba(10,10,18,0.6)",
                border: "1px solid var(--border)",
                borderRadius: "12px 12px 12px 3px",
                padding: "12px 14px",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                flex: 1,
              }}>
                <span style={{ color: "var(--text)", fontWeight: 500 }}>That clause is a significant red flag.</span>
                {" "}Standard contractor NDAs should protect confidentiality — not transfer IP ownership to the contractor. That would mean{" "}
                <span style={{ color: "var(--gold)" }}>you don't own what you paid for.</span>
                <br /><br />
                I'd recommend striking that clause and replacing it with a standard work-for-hire provision. Want me to draft the replacement language?
              </div>
            </div>

            {/* Input bar */}
            <div style={{
              marginTop: "14px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "10px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>Ask Apollo a legal question…</span>
              <div style={{
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                borderRadius: "5px",
                padding: "5px 12px",
                fontSize: "0.72rem",
                fontWeight: 500,
                color: "#0a0a0f",
              }}>Send</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating legal terms decoration */}
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        color: "var(--text-dim)", fontSize: "0.7rem",
        letterSpacing: "0.15em", textTransform: "uppercase",
        transform: "rotate(-90deg)", transformOrigin: "left center",
        opacity: 0.4,
      }}>
        Contracts · Compliance · IP · Employment
      </div>
    </section>
  );
}
