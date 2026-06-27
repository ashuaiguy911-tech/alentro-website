import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// ── Framer Motion mock ────────────────────────────────────────────────────────
jest.mock("framer-motion", () => {
  const React = require("react");
  type Props = { children?: React.ReactNode; [key: string]: unknown };
  const strip = ({
    children, initial, animate, exit, variants, transition,
    whileHover, whileTap, whileInView, custom, layout, layoutId,
    onMouseMove, onMouseLeave, ...rest
  }: Props) => ({ children, ...rest });
  const makeEl = (tag: string) =>
    React.forwardRef((props: Props, ref: React.Ref<unknown>) =>
      React.createElement(tag, { ...strip(props), ref }, props.children));
  return {
    motion: { div: makeEl("div") },
    AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
      children ?? null,
    useReducedMotion: () => false,
  };
});

// ── next/link mock ────────────────────────────────────────────────────────────
jest.mock("next/link", () => {
  const ML = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  ML.displayName = "MockLink";
  return ML;
});

// ── useChat mock ──────────────────────────────────────────────────────────────
const mockSendMessage = jest.fn();
const mockClearChat = jest.fn();

type Msg = { id: string; role: "user" | "assistant"; content: string; timestamp: number };

const defaultState = {
  messages: [] as Msg[],
  sendMessage: mockSendMessage,
  isLoading: false,
  error: null as string | null,
  messageCount: 0,
  clearChat: mockClearChat,
};

jest.mock("@/components/chat/useChat", () => ({
  useChat: jest.fn(),
  MAX_MESSAGES: 10,
}));

import { ChatWidget } from "@/components/chat/ChatWidget";
import { useChat } from "@/components/chat/useChat";

function setup(overrides: Partial<typeof defaultState> = {}) {
  (useChat as jest.Mock).mockReturnValue({ ...defaultState, ...overrides });
}

describe("ChatWidget", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    setup();
  });

  it("renders the chat toggle button", () => {
    render(<ChatWidget />);
    expect(screen.getByRole("button", { name: /open chat/i })).toBeInTheDocument();
  });

  it("chat window is hidden initially", () => {
    render(<ChatWidget />);
    expect(screen.queryByTestId("chat-window")).not.toBeInTheDocument();
  });

  it("clicking toggle opens the chat window", () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByTestId("chat-window")).toBeInTheDocument();
  });

  it("clicking the header close button closes the chat window", () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByTestId("chat-window")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /close chat window/i }));
    expect(screen.queryByTestId("chat-window")).not.toBeInTheDocument();
  });

  it("toggle aria-label switches to 'Close chat' when open", () => {
    render(<ChatWidget />);
    const btn = screen.getByRole("button", { name: /open chat/i });
    fireEvent.click(btn);
    // ChatToggle shows "Close chat" when open
    const allButtons = screen.getAllByRole("button");
    const closeButtons = allButtons.filter((b) =>
      b.getAttribute("aria-label")?.toLowerCase().includes("close chat")
    );
    expect(closeButtons.length).toBeGreaterThan(0);
  });

  it("displays welcome message when there are no messages", () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
    expect(screen.getByText(/Hi! I'm Alentro AI\./i)).toBeInTheDocument();
    expect(
      screen.getByText(/How can I help you with IT services today/i)
    ).toBeInTheDocument();
  });

  it("renders message list correctly", () => {
    setup({
      messages: [
        { id: "1", role: "user", content: "What is AMC?", timestamp: Date.now() },
        {
          id: "2",
          role: "assistant",
          content: "AMC is Annual Maintenance Contract.",
          timestamp: Date.now(),
        },
      ],
      messageCount: 2,
    });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByText("What is AMC?")).toBeInTheDocument();
    expect(
      screen.getByText("AMC is Annual Maintenance Contract.")
    ).toBeInTheDocument();
    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();
  });

  it("shows loading indicator when isLoading is true", () => {
    setup({ isLoading: true });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(
      screen.getByRole("status", { name: /loading response/i })
    ).toBeInTheDocument();
  });

  it("disables input when max messages reached (messageCount === 10)", () => {
    setup({ messageCount: 10 });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(
      screen.getByRole("textbox", { name: /message input/i })
    ).toBeDisabled();
    expect(screen.getByTestId("limit-message")).toBeInTheDocument();
  });

  it("disables input while loading", () => {
    setup({ isLoading: true });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(
      screen.getByRole("textbox", { name: /message input/i })
    ).toBeDisabled();
  });

  it("shows error message returned by useChat", () => {
    setup({
      error: "Sorry, I'm having trouble connecting. Please try again.",
    });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(/trouble connecting/i);
  });

  it("calls clearChat when Clear button is clicked", () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    fireEvent.click(screen.getByRole("button", { name: /clear chat history/i }));
    expect(mockClearChat).toHaveBeenCalledTimes(1);
  });

  it("calls sendMessage with trimmed input on submit", () => {
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    fireEvent.change(
      screen.getByRole("textbox", { name: /message input/i }),
      { target: { value: "Test message" } }
    );
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(mockSendMessage).toHaveBeenCalledWith("Test message");
  });

  it("saves messages to localStorage (widget reflects stored state)", () => {
    const storedMsg: Msg = {
      id: "s1",
      role: "user",
      content: "Stored message",
      timestamp: Date.now(),
    };
    localStorage.setItem(
      "alentro-chat-history",
      JSON.stringify([storedMsg])
    );
    // useChat mock returns these as if loaded from storage
    setup({ messages: [storedMsg], messageCount: 1 });
    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    expect(screen.getByText("Stored message")).toBeInTheDocument();
  });

  it("loads messages from localStorage on mount (widget shows them)", async () => {
    const existing: Msg[] = [
      {
        id: "e1",
        role: "assistant",
        content: "Previous reply from storage",
        timestamp: Date.now(),
      },
    ];
    localStorage.setItem("alentro-chat-history", JSON.stringify(existing));
    setup({ messages: existing, messageCount: 1 });

    render(<ChatWidget />);
    fireEvent.click(screen.getByRole("button", { name: /open chat/i }));

    await waitFor(() => {
      expect(
        screen.getByText("Previous reply from storage")
      ).toBeInTheDocument();
    });
  });
});
