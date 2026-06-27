import { NextRequest, NextResponse } from "next/server";
const SYSTEM_PROMPT = "You are Alentro AI assistant for Alentro Global Services, an IT solutions company in India. Help with IT infrastructure, AMC, cloud services, cybersecurity, helpdesk. For pricing call +91-7045400592. Keep responses under 150 words.";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;
    if (!messages || !Array.isArray(messages)) return NextResponse.json({ error: "Invalid" }, { status: 400 });
    if (!process.env.GROQ_API_KEY) return NextResponse.json({ reply: "No API key configured" });
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        max_tokens: 300,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: {role: string; content: string}) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }))
        ]
      }),
    });
    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({ reply: `API error ${response.status}: ${errText}` });
    }
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "No reply generated";
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ reply: `Error: ${err}` });
  }
}
export async function GET() { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
