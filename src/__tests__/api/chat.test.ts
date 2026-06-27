/**
 * @jest-environment node
 */
import { POST, GET } from "@/app/api/chat/route";
import { NextRequest } from "next/server";

const mockFetch = jest.fn();
global.fetch = mockFetch;

function makeRequest(body: unknown) {
  return new NextRequest("http://localhost/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function geminiReply(text: string) {
  return {
    ok: true,
    json: async () => ({
      candidates: [{ content: { parts: [{ text }] } }],
    }),
  };
}

function geminiError(status = 400) {
  return {
    ok: false,
    status,
    text: async () => `{"error":{"message":"API error ${status}"}}`,
  };
}

describe("POST /api/chat", () => {
  const originalKey = process.env.GEMINI_API_KEY;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    process.env.GEMINI_API_KEY = "test-gemini-key";
  });

  afterEach(() => {
    process.env.GEMINI_API_KEY = originalKey;
    jest.restoreAllMocks();
  });

  it("returns 200 and reply for valid POST", async () => {
    mockFetch.mockResolvedValueOnce(
      geminiReply("Hello! I can help with IT services.")
    );

    const req = makeRequest({ messages: [{ role: "user", content: "Hello" }] });
    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.reply).toBe("Hello! I can help with IT services.");
  });

  it("calls v1 Gemini endpoint with gemini-1.5-flash first", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Test" }] });
    await POST(req);

    const calledUrl: string = mockFetch.mock.calls[0][0];
    expect(calledUrl).toMatch(
      /generativelanguage\.googleapis\.com\/v1\/models\/gemini-1\.5-flash:generateContent/
    );
    expect(calledUrl).toContain("key=test-gemini-key");
  });

  it("falls back to gemini-pro when gemini-1.5-flash fails", async () => {
    mockFetch
      .mockResolvedValueOnce(geminiError(404))  // flash fails
      .mockResolvedValueOnce(geminiReply("Fallback response"));  // pro succeeds

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.reply).toBe("Fallback response");

    const fallbackUrl: string = mockFetch.mock.calls[1][0];
    expect(fallbackUrl).toContain("gemini-pro");
  });

  it("returns 500 when both models fail", async () => {
    mockFetch
      .mockResolvedValueOnce(geminiError(404))
      .mockResolvedValueOnce(geminiError(429));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  it("logs Gemini error response when API call fails", async () => {
    mockFetch
      .mockResolvedValueOnce(geminiError(400))
      .mockResolvedValueOnce(geminiError(400));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    expect(console.error).toHaveBeenCalledWith(
      "Gemini error:",
      400,
      expect.any(String)
    );
  });

  it("sends system instruction and correct Gemini body format", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Test" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.systemInstruction.parts[0].text).toMatch(/Alentro/);
    expect(callBody.systemInstruction.parts[0].text).toMatch(/\+91-7045400592/);
    expect(callBody.contents[0]).toEqual({
      role: "user",
      parts: [{ text: "Test" }],
    });
  });

  it("maps assistant role to 'model' for Gemini", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({
      messages: [
        { role: "user", content: "Hi" },
        { role: "assistant", content: "Hello!" },
        { role: "user", content: "Thanks" },
      ],
    });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.contents[1].role).toBe("model");
    expect(callBody.contents[0].role).toBe("user");
    expect(callBody.contents[2].role).toBe("user");
  });

  it("includes generationConfig with maxOutputTokens and temperature", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.generationConfig.maxOutputTokens).toBe(300);
    expect(callBody.generationConfig.temperature).toBe(0.7);
  });

  it("returns 400 for missing messages field", async () => {
    const req = makeRequest({ invalid: "payload" });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBeDefined();
  });

  it("returns 400 when messages is not an array", async () => {
    const req = makeRequest({ messages: "not an array" });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 500 when fetch throws a network error", async () => {
    mockFetch.mockRejectedValue(new Error("Network failure"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBeDefined();
  });

  it("returns 500 when GEMINI_API_KEY is not set", async () => {
    delete process.env.GEMINI_API_KEY;

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  it("does not send an Authorization header (key is in URL)", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("Done"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    const callHeaders = mockFetch.mock.calls[0][1].headers;
    expect(callHeaders.Authorization).toBeUndefined();
  });
});

describe("GET /api/chat", () => {
  it("returns 405 Method Not Allowed", async () => {
    const res = await GET();
    expect(res.status).toBe(405);
    const data = await res.json();
    expect(data.error).toMatch(/method not allowed/i);
  });
});
