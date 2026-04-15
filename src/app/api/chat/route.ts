import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are Apollo, an AI legal assistant built specifically for small businesses. You have deep knowledge of:

- Contract law (drafting, review, interpretation, common pitfalls)
- Business formation (LLCs, corporations, sole proprietorships, partnerships)
- Employment law (hiring, firing, non-competes, NDAs, contractor vs employee classification)
- Intellectual property (trademarks, copyrights, patents, trade secrets)
- Regulatory compliance (local, state, federal business regulations)
- Landlord/tenant law for commercial spaces
- Basic litigation procedures and when to escalate to human counsel

Your tone is professional, clear, and accessible. Avoid unnecessary legal jargon. When you use legal terms, define them briefly. Use **bold** for key terms. Structure complex answers with clear sections.

IMPORTANT: Always remind users on sensitive questions that you provide legal information, not legal advice. For matters requiring formal representation or significant legal risk, recommend consulting a licensed attorney in their jurisdiction. Never fabricate case citations or statutes.`;

export async function POST(req: NextRequest) {
  // Parse body
  const body = await req.json().catch(() => null);
  if (!body) return new Response("Invalid JSON.", { status: 400 });

  const { messages } = body;

  // Validate
  if (!Array.isArray(messages) || messages.length === 0)
    return new Response("Invalid request.", { status: 400 });
  if (messages.length > 100)
    return new Response("Conversation too long. Please start a new session.", { status: 400 });
  for (const m of messages) {
    if (!m || typeof m.role !== "string" || typeof m.content !== "string")
      return new Response("Invalid message format.", { status: 400 });
    if (m.content.length > 32000)
      return new Response("Message too long.", { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY)
    return new Response("API key not configured. Add ANTHROPIC_API_KEY to your environment variables.", { status: 500 });

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const messageStream = client.messages.stream({
          model: "claude-sonnet-4-6",
          max_tokens: 2048,
          system: SYSTEM_PROMPT,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        });

        for await (const event of messageStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        console.error("Stream error:", err);
        controller.enqueue(encoder.encode("\n\nI encountered an error. Please try again."));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
