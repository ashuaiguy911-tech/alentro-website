import { NextRequest, NextResponse } from "next/server";
const SYSTEM_PROMPT = "You are Alentro AI assistant for Alentro Global Services, an IT solutions company in India. Help with IT infrastructure, AMC, cloud services, cybersecurity, helpdesk. For pricing call +91-7045400592. Keep responses under 150 words.";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;
    if (!messages || !Array.isArray(messages)) return NextResponse.json({ error: "Invalid" }, { status: 400 });
    if (!process.env.ANTHROPIC_API_KEY) return NextResponse.json({ reply: "No API key configured" });
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-haiku-4-5-20251001", max_tokens: 300, system: SYSTEM_PROMPT, messages: messages.map((m: {role: string; content: string}) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })) }),
    });
    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic error:", response.status, errText);
      return NextResponse.json({ reply: `API error ${response.status}: ${errText}` });
    }
    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "No reply generated";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Caught error:", err);
    return NextResponse.json({ reply: `Error: ${err}` });
  }
}
export async function GET() { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
