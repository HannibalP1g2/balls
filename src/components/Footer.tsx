"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "60px 2rem 40px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem", marginBottom: "3rem" }}>
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{
                width: 28, height: 28,
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                borderRadius: "5px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", fontWeight: 700,
                fontFamily: "serif", color: "#0a0a0f",
              }}>A</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>Apollo Lawyer</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              AI-powered legal guidance for small businesses. Professional clarity, without the hourly rate.
            </p>
          </div>

          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Dashboard", "API"] },
              { heading: "Legal", links: ["Terms of Service", "Privacy Policy", "Disclaimer", "Cookie Policy"] },
              { heading: "Company", links: ["About", "Blog", "Contact", "Press"] },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1rem" }}>
                  {col.heading}
                </p>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{
                      display: "block",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      marginBottom: "0.6rem",
                      transition: "color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
            © 2026 Apollo Lawyer. Not a law firm. AI outputs are for informational purposes only.
          </p>
          <p style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
            Part of the <span style={{ color: "var(--gold-dim)" }}>Apollo AI</span> ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
}
