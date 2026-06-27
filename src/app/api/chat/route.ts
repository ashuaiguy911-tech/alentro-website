import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT =
  "You are Alentro, the AI assistant for Alentro Global Services, an IT solutions company in India. You help visitors with questions about IT infrastructure, AMC services, cloud services (AWS, Azure, GCP), cybersecurity, helpdesk, and network management. Be professional, concise, and helpful. If asked about pricing, suggest they visit the Contact page or call +91-7045400592. Keep responses under 150 words.";

function buildGeminiUrl(model: string, apiKey: string) {
  return `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`;
}

function buildGeminiBody(messages: Array<{ role: string; content: string }>) {
  return JSON.stringify({
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    systemInstruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    generationConfig: {
      maxOutputTokens: 300,
      temperature: 0.7,
    },
  });
}

async function callGemini(model: string, apiKey: string, messages: Array<{ role: string; content: string }>) {
  const response = await fetch(buildGeminiUrl(model, apiKey), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: buildGeminiBody(messages),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gemini error:", response.status, errorText);
    return null;
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body: messages array required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Try gemini-1.5-flash first, fall back to gemini-pro
    let reply = await callGemini("gemini-1.5-flash", apiKey, messages);

    if (!reply) {
      console.warn("gemini-1.5-flash failed, trying gemini-pro fallback");
      reply = await callGemini("gemini-pro", apiKey, messages);
    }

    if (!reply) {
      return NextResponse.json(
        { error: "Failed to get response from Gemini" },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
