import { render, screen } from "@testing-library/react";
import { ChatMessage } from "@/components/chat/ChatMessage";

describe("ChatMessage", () => {
  it("renders user message right-aligned with indigo bubble", () => {
    render(<ChatMessage role="user" content="Hello there" />);
    const wrapper = document.querySelector("[data-role='user']");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).toMatch(/flex-row-reverse/);
    // bubble is the first child (after flex-reverse the bubble is the direct child)
    const bubble = screen.getByText("Hello there").parentElement;
    expect(bubble?.className).toMatch(/bg-indigo-600/);
    expect(bubble?.className).toMatch(/text-white/);
  });

  it("renders assistant message left-aligned with gray bubble", () => {
    render(<ChatMessage role="assistant" content="I can help you." />);
    const wrapper = document.querySelector("[data-role='assistant']");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.className).not.toMatch(/flex-row-reverse/);
    const bubble = screen.getByText("I can help you.").parentElement;
    expect(bubble?.className).toMatch(/bg-gray-100/);
    expect(bubble?.className).toMatch(/text-gray-800/);
  });

  it("renders loading state with three typing dots", () => {
    render(<ChatMessage role="assistant" content="" isLoading />);
    expect(
      screen.getByRole("status", { name: /loading response/i })
    ).toBeInTheDocument();
    const dots = document.querySelectorAll(".animate-bounce");
    expect(dots.length).toBe(3);
  });

  it("loading state has no data-role wrapper (no text bubble)", () => {
    render(<ChatMessage role="assistant" content="" isLoading />);
    expect(document.querySelector("[data-role]")).not.toBeInTheDocument();
  });

  it("handles multiline content with line breaks", () => {
    render(
      <ChatMessage role="assistant" content={"Line one\nLine two\nLine three"} />
    );
    expect(screen.getByText("Line one")).toBeInTheDocument();
    expect(screen.getByText("Line two")).toBeInTheDocument();
    expect(screen.getByText("Line three")).toBeInTheDocument();
  });

  it("shows AI avatar for assistant messages", () => {
    render(<ChatMessage role="assistant" content="Hello" />);
    expect(screen.getByText("AI")).toBeInTheDocument();
  });

  it("does not show AI avatar for user messages", () => {
    render(<ChatMessage role="user" content="Hello" />);
    expect(screen.queryByText("AI")).not.toBeInTheDocument();
  });

  it("renders content inside the bubble", () => {
    render(<ChatMessage role="user" content="My question" />);
    expect(screen.getByText("My question")).toBeInTheDocument();
  });
});
