"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2,400+", label: "Businesses protected" },
  { value: "$4.2M", label: "Saved in legal fees" },
  { value: "60s", label: "Average analysis time" },
  { value: "97%", label: "Satisfaction rate" },
];

function parseValue(val: string) {
  const m = val.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!m) return null;
  const numStr = m[2].replace(/,/g, "");
  const num = parseFloat(numStr);
  return { prefix: m[1], num, suffix: m[3], hasComma: m[2].includes(","), hasDecimal: numStr.includes(".") };
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const parsed = parseValue(value);
    if (!parsed) { setDisplay(value); return; }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return;
      animated.current = true;

      const duration = 1800;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const cur = parsed.num * eased;
        const fmt = parsed.hasDecimal
          ? cur.toFixed(1)
          : parsed.hasComma
          ? Math.round(cur).toLocaleString()
          : Math.round(cur).toString();
        setDisplay(parsed.prefix + fmt + parsed.suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 4vw, 2.8rem)",
        fontWeight: 500,
        color: "var(--gold)",
        lineHeight: 1,
        marginBottom: "0.5rem",
      }}>
        {display}
      </div>
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "rgba(201,168,76,0.02)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "3rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "2rem",
      }}>
        {stats.map(s => <AnimatedStat key={s.label} value={s.value} label={s.label} />)}
      </div>
    </section>
  );
}
