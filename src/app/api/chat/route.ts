import { NextRequest, NextResponse } from "next/server";
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
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { content: "API key not configured. Add ANTHROPIC_API_KEY to your Vercel environment variables." },
        { status: 200 }
      );
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const content =
      response.content[0]?.type === "text"
        ? response.content[0].text
        : "Unable to generate a response. Please try again.";

    return NextResponse.json({ content });
  } catch (error: unknown) {
    console.error("Anthropic error:", error);
    return NextResponse.json(
      { content: "I encountered an error. Please try again." },
      { status: 200 }
    );
  }
}
