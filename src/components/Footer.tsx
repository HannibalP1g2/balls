"use client";
import Link from "next/link";

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "60px 2rem 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{
                width: 28, height: 28,
                background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
                borderRadius: "5px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px", fontWeight: 700, fontFamily: "serif", color: "#0a0a0f",
              }}>A</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}>Apollo Lawyer</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              AI-powered legal guidance for small businesses. Professional clarity, without the hourly rate.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { href: "https://twitter.com", Icon: TwitterIcon, label: "Twitter" },
                { href: "https://linkedin.com", Icon: LinkedInIcon, label: "LinkedIn" },
                { href: "https://github.com", Icon: GithubIcon, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social"
                  style={{
                    width: 34, height: 34,
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
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
                    style={{ display: "block", color: "var(--text-muted)", textDecoration: "none", fontSize: "0.875rem", marginBottom: "0.6rem", transition: "color 0.2s" }}
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

      <style>{`
        .footer-social:hover {
          border-color: rgba(201,168,76,0.3) !important;
          color: var(--gold) !important;
          background: rgba(201,168,76,0.06) !important;
        }
      `}</style>
    </footer>
  );
}
