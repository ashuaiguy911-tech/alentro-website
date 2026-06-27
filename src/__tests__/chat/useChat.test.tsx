import { renderHook, act, waitFor } from "@testing-library/react";
import { useChat, MAX_MESSAGES } from "@/components/chat/useChat";

const mockFetch = jest.fn();
global.fetch = mockFetch;

function mockSuccessResponse(reply: string) {
  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ reply }),
  });
}

function mockErrorResponse() {
  mockFetch.mockResolvedValueOnce({
    ok: false,
    status: 500,
    json: async () => ({ error: "Server error" }),
  });
}

describe("useChat", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("initializes with empty messages", () => {
    const { result } = renderHook(() => useChat());
    expect(result.current.messages).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.messageCount).toBe(0);
  });

  it("adds user message immediately on send", async () => {
    mockSuccessResponse("I can help!");
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Hello");
    });

    expect(result.current.messages[0].role).toBe("user");
    expect(result.current.messages[0].content).toBe("Hello");
  });

  it("adds assistant reply after API responds", async () => {
    mockSuccessResponse("Sure, I can help with IT!");
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Help me");
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const lastMsg = result.current.messages[result.current.messages.length - 1];
    expect(lastMsg.role).toBe("assistant");
    expect(lastMsg.content).toBe("Sure, I can help with IT!");
  });

  it("calls /api/chat with correct POST body", async () => {
    mockSuccessResponse("Response");
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("What services do you offer?");
    });

    expect(mockFetch).toHaveBeenCalledWith(
      "/api/chat",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );
    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.messages[0]).toEqual({ role: "user", content: "What services do you offer?" });
  });

  it("sets isLoading true while waiting for response", async () => {
    let resolvePromise!: (v: unknown) => void;
    mockFetch.mockReturnValueOnce(
      new Promise((resolve) => { resolvePromise = resolve; })
    );

    const { result } = renderHook(() => useChat());

    act(() => {
      result.current.sendMessage("Loading test");
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      resolvePromise({ ok: true, json: async () => ({ reply: "Done" }) });
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it("sets error message on API failure", async () => {
    mockErrorResponse();
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Test");
    });

    await waitFor(() => {
      expect(result.current.error).toMatch(/trouble connecting/i);
    });
  });

  it("sets error message when fetch throws", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Test");
    });

    await waitFor(() => {
      expect(result.current.error).toMatch(/trouble connecting/i);
    });
  });

  it("does not send when message count is at MAX_MESSAGES", async () => {
    // Pre-fill localStorage with MAX_MESSAGES messages
    const fullHistory = Array.from({ length: MAX_MESSAGES }, (_, i) => ({
      id: `msg-${i}`,
      role: i % 2 === 0 ? "user" : "assistant",
      content: `Message ${i}`,
      timestamp: Date.now(),
    }));
    localStorage.setItem("alentro-chat-history", JSON.stringify(fullHistory));

    const { result } = renderHook(() => useChat());

    await waitFor(() => {
      expect(result.current.messageCount).toBe(MAX_MESSAGES);
    });

    const countBefore = result.current.messageCount;
    await act(async () => {
      result.current.sendMessage("This should not send");
    });

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.current.messageCount).toBe(countBefore);
  });

  it("does not send empty or whitespace-only messages", async () => {
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("   ");
    });

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.current.messages).toHaveLength(0);
  });

  it("saves messages to localStorage after sending", async () => {
    mockSuccessResponse("Response");
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Save me");
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    const stored = localStorage.getItem("alentro-chat-history");
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored!);
    expect(parsed.length).toBeGreaterThan(0);
    expect(parsed[0].content).toBe("Save me");
  });

  it("loads messages from localStorage on mount", async () => {
    const existing = [
      { id: "1", role: "user", content: "Stored message", timestamp: Date.now() },
      { id: "2", role: "assistant", content: "Stored reply", timestamp: Date.now() },
    ];
    localStorage.setItem("alentro-chat-history", JSON.stringify(existing));

    const { result } = renderHook(() => useChat());

    await waitFor(() => {
      expect(result.current.messages).toHaveLength(2);
    });

    expect(result.current.messages[0].content).toBe("Stored message");
    expect(result.current.messages[1].content).toBe("Stored reply");
  });

  it("clears chat and removes from localStorage", async () => {
    mockSuccessResponse("Hi");
    const { result } = renderHook(() => useChat());

    await act(async () => {
      result.current.sendMessage("Hello");
    });
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.messages.length).toBeGreaterThan(0);

    act(() => {
      result.current.clearChat();
    });

    expect(result.current.messages).toHaveLength(0);
    expect(result.current.error).toBeNull();
    expect(localStorage.getItem("alentro-chat-history")).toBeNull();
  });
});
