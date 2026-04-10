"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled || menuOpen ? "rgba(10,10,15,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 32, height: 32,
            background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
            borderRadius: "6px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px", fontWeight: 700,
            fontFamily: "serif", color: "#0a0a0f",
          }}>A</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--text)", letterSpacing: "0.02em" }}>
            Apollo Lawyer
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {["Features", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {item}
            </a>
          ))}
          <Link
            href="/dashboard"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
              color: "#0a0a0f",
              padding: "8px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: "block", height: "1.5px", background: "var(--text)",
            borderRadius: "2px",
            width: menuOpen ? "22px" : "22px",
            transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
            transition: "transform 0.25s",
          }} />
          <span style={{
            display: "block", height: "1.5px", background: "var(--text)",
            borderRadius: "2px", width: "16px",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.25s",
          }} />
          <span style={{
            display: "block", height: "1.5px", background: "var(--text)",
            borderRadius: "2px", width: "22px",
            transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            transition: "transform 0.25s",
          }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(10,10,15,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}>
          {["Features", "How It Works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "1rem",
                padding: "1rem 0",
                borderBottom: "1px solid var(--border)",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </a>
          ))}
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              background: "linear-gradient(135deg, var(--gold), var(--gold-dim))",
              color: "#0a0a0f",
              padding: "14px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              marginTop: "1.5rem",
            }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
