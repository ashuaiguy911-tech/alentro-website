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

  it("calls v1beta Gemini endpoint with gemini-1.5-flash", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Test" }] });
    await POST(req);

    const calledUrl: string = mockFetch.mock.calls[0][0];
    expect(calledUrl).toMatch(
      /generativelanguage\.googleapis\.com\/v1beta\/models\/gemini-1\.5-flash-latest:generateContent/
    );
    expect(calledUrl).toContain("key=test-gemini-key");
  });

  it("prepends system prompt as first user message in contents", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.contents[0].role).toBe("user");
    expect(callBody.contents[0].parts[0].text).toMatch(/Alentro/);
    expect(callBody.contents[0].parts[0].text).toMatch(/\+91-7045400592/);
  });

  it("includes model acknowledgement as second message", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.contents[1].role).toBe("model");
    expect(callBody.contents[1].parts[0].text).toMatch(/Understood/i);
  });

  it("appends user messages after the system preamble", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "What is AMC?" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    // indices 0=system user, 1=model ack, 2=actual user message
    expect(callBody.contents[2].role).toBe("user");
    expect(callBody.contents[2].parts[0].text).toBe("What is AMC?");
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
    // offset by 2 for preamble
    expect(callBody.contents[2].role).toBe("user");
    expect(callBody.contents[3].role).toBe("model");
    expect(callBody.contents[4].role).toBe("user");
  });

  it("does not include systemInstruction field", async () => {
    mockFetch.mockResolvedValueOnce(geminiReply("OK"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    await POST(req);

    const callBody = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(callBody.systemInstruction).toBeUndefined();
  });

  it("includes generationConfig", async () => {
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

  it("returns 500 and logs error when Gemini API returns non-ok", async () => {
    mockFetch.mockResolvedValueOnce(geminiError(429));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    expect(res.status).toBe(500);
    expect(console.error).toHaveBeenCalledWith(
      "Gemini error:",
      429,
      expect.any(String)
    );
  });

  it("returns 500 when fetch throws a network error", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network failure"));

    const req = makeRequest({ messages: [{ role: "user", content: "Hi" }] });
    const res = await POST(req);
    expect(res.status).toBe(500);
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
