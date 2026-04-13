"use client";
import { useState, useRef, useEffect, useCallback } from "react";

type Message = { role: "user" | "assistant"; content: string };

function renderMarkdown(raw: string): string {
  const esc = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const inline = (s: string) =>
    s
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
      .replace(/`([^`\n]+)`/g, '<code style="background:rgba(255,255,255,.08);border-radius:3px;padding:1px 5px;font-family:monospace;font-size:.82em">$1</code>');

  const lines = esc.split("\n");
  const out: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (listType) { out.push(`</${listType}>`); listType = null; }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const heading = line.match(/^(#{1,3})\s+(.*)/);
    const bullet  = line.match(/^[-*]\s+(.*)/);
    const ordered = line.match(/^\d+\.\s+(.*)/);

    if (heading) {
      closeList();
      const sizes = ["1rem", ".925rem", ".875rem"];
      const sz = sizes[heading[1].length - 1];
      out.push(`<div style="font-weight:600;font-size:${sz};margin:.8rem 0 .25rem;color:#eeeef5">${inline(heading[2])}</div>`);
    } else if (bullet) {
      if (listType !== "ul") { closeList(); out.push('<ul style="margin:.35rem 0 .35rem 1.1rem;padding:0">'); listType = "ul"; }
      out.push(`<li style="margin:.2rem 0">${inline(bullet[1])}</li>`);
    } else if (ordered) {
      if (listType !== "ol") { closeList(); out.push('<ol style="margin:.35rem 0 .35rem 1.1rem;padding:0">'); listType = "ol"; }
      out.push(`<li style="margin:.2rem 0">${inline(ordered[1])}</li>`);
    } else if (line.trim() === "") {
      closeList();
      if (out.length && out[out.length - 1] !== "<br/>") out.push("<br/>");
    } else {
      closeList();
      out.push(inline(line) + (i < lines.length - 1 ? "<br/>" : ""));
    }
  }

  closeList();
  return out.join("");
}

const suggestions = [
  "Review this clause: 'All IP created during employment belongs to the company.'",
  "What do I need to form an LLC in Texas?",
  "Draft a simple NDA for a contractor",
  "My commercial landlord is entering without notice — is that legal?",
];

export default function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello. I'm Apollo, your AI legal assistant.\n\nI can help with contract review, compliance questions, document drafting, and general legal guidance for your business.\n\nWhat can I help you with today?\n\n**Note:** I provide legal information, not legal advice. For formal representation, consult a licensed attorney.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (text?: string) => {
    const content = text || input.trim();
    if (!content || loading) return;

    const userMsg: Message = { role: "user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    if (textareaRef.current) { textareaRef.current.style.height = "auto"; }
    setSidebarOpen(false);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Connection error. Please try again." }]);
    } finally {
      setLoading(false);
      textareaRef.current?.focus();
    }
  }, [input, loading, messages]);

  return (
    <div style={{ display: "flex", height: "100vh", background: "#07070d", overflow: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 10, background: "rgba(0,0,0,.5)" }}
          className="sidebar-overlay"
        />
      )}

      {/* Sidebar */}
      <aside style={{ width: 240, borderRight: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", padding: "1.2rem", flexShrink: 0, background: "rgba(10,10,18,.8)", zIndex: 11, transition: "transform .25s ease" }} className={`sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.6rem" }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#e8c97a,#8a6020)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", fontWeight: 700, fontSize: 13, color: "#07070d" }}>A</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#eeeef5" }}>Apollo Lawyer</span>
        </div>

        <button
          onClick={() => setMessages([{ role: "assistant", content: "New session. How can I help?" }])}
          style={{ background: "linear-gradient(135deg,#c9a84c,#8a6020)", color: "#07070d", border: "none", borderRadius: 8, padding: "10px 14px", fontSize: ".82rem", fontWeight: 500, cursor: "pointer", marginBottom: "1.4rem", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}
        >
          + New Conversation
        </button>

        <p style={{ fontSize: ".65rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#3a3a5a", marginBottom: ".8rem" }}>Quick Actions</p>

        {[
          ["⚖", "Contract Review", "Help me review a contract"],
          ["✉", "Draft Document", "I need to draft a legal document"],
          ["📋", "Compliance Check", "Run a compliance check for my business"],
          ["🔍", "Dispute Analysis", "I have a business dispute I need help with"],
          ["💼", "IP Protection", "How do I protect my intellectual property?"],
        ].map(([icon, label, prompt]) => (
          <button
            key={label}
            onClick={() => send(prompt)}
            style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(255,255,255,.06)", color: "#8080a0", fontSize: ".8rem", padding: "9px 0", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "color .15s" }}
            onMouseOver={e => (e.currentTarget.style.color = "#eeeef5")}
            onMouseOut={e => (e.currentTarget.style.color = "#8080a0")}
          >
            <span style={{ width: 18, height: 18, borderRadius: 4, background: "rgba(201,168,76,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".65rem", flexShrink: 0 }}>{icon}</span>
            {label}
          </button>
        ))}

        <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <p style={{ color: "#3a3a5a", fontSize: ".7rem", lineHeight: 1.6 }}>Apollo provides legal information, not formal legal advice. Consult a licensed attorney for representation.</p>
        </div>
      </aside>

      {/* Chat */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ height: 58, borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.6rem", flexShrink: 0, background: "rgba(7,7,13,.9)", backdropFilter: "blur(20px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setSidebarOpen(o => !o)}
              className="hamburger"
              aria-label="Toggle sidebar"
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 4 }}
            >
              {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 18, height: 1.5, background: "#8080a0", borderRadius: 2 }} />)}
            </button>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: ".95rem", color: "#eeeef5" }}>Legal Assistant</span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,.6)" }} />
          </div>
          <a href="/" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", color: "#8080a0", padding: "7px 16px", borderRadius: 7, fontSize: ".8rem", textDecoration: "none" }}>← Back to site</a>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1.6rem", display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          {messages.length === 1 && (
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 28, flexShrink: 0 }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem" }}>
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{ background: "rgba(14,14,24,.8)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 8, padding: "7px 12px", color: "#8080a0", fontSize: ".77rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", maxWidth: 260, lineHeight: 1.4, textAlign: "left", transition: "all .18s" }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,.3)"; e.currentTarget.style.color = "#eeeef5"; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; e.currentTarget.style.color = "#8080a0"; }}
                  >{s}</button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", gap: 10, alignItems: "flex-start" }}>
              {msg.role === "assistant" && (
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#8a6020)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", fontWeight: 700, fontSize: 12, color: "#07070d", flexShrink: 0, marginTop: 2 }}>A</div>
              )}
              <div
                style={{
                  maxWidth: "62%",
                  padding: "12px 16px",
                  borderRadius: msg.role === "user" ? "12px 12px 3px 12px" : "12px 12px 12px 3px",
                  background: msg.role === "user" ? "rgba(201,168,76,.09)" : "rgba(14,14,24,.8)",
                  border: msg.role === "user" ? "1px solid rgba(201,168,76,.15)" : "1px solid rgba(255,255,255,.06)",
                  fontSize: ".875rem",
                  lineHeight: 1.72,
                  color: "#eeeef5",
                }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
              />
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#8a6020)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", fontWeight: 700, fontSize: 12, color: "#07070d", flexShrink: 0 }}>A</div>
              <div style={{ background: "rgba(14,14,24,.8)", border: "1px solid rgba(255,255,255,.06)", borderRadius: "12px 12px 12px 3px", padding: "14px 18px", display: "flex", gap: 5 }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#8a6020", animation: `bns .9s ease ${i * .15}s infinite` }} />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{ padding: "1rem 1.4rem", borderTop: "1px solid rgba(255,255,255,.06)", display: "flex", gap: 9, alignItems: "flex-end", flexShrink: 0, background: "rgba(7,7,13,.6)", backdropFilter: "blur(10px)" }}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 130) + "px";
            }}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Ask Apollo a legal question..."
            rows={1}
            style={{ flex: 1, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 10, padding: "12px 15px", color: "#eeeef5", fontSize: ".875rem", resize: "none", outline: "none", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}
          />
          <button
            onClick={() => send()}
            disabled={loading || !input.trim()}
            style={{ background: loading || !input.trim() ? "rgba(255,255,255,.06)" : "linear-gradient(135deg,#c9a84c,#8a6020)", color: loading || !input.trim() ? "#3a3a5a" : "#07070d", border: "none", borderRadius: 10, padding: "12px 20px", fontSize: ".875rem", fontWeight: 500, cursor: loading || !input.trim() ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}
          >
            Send
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes bns { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#07070d} ::-webkit-scrollbar-thumb{background:#3a3a5a;border-radius:2px}
        @media(max-width:640px){
          .sidebar { position:fixed; top:0; left:0; bottom:0; transform:translateX(-100%); }
          .sidebar.sidebar-open { transform:translateX(0); }
          .sidebar-overlay { display:block; }
          .hamburger { display:flex !important; }
        }
      `}</style>
    </div>
  );
}
