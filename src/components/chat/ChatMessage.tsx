"use client";

export interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

export function ChatMessage({ role, content, isLoading }: ChatMessageProps) {
  const isUser = role === "user";

  if (isLoading) {
    return (
      <div className="flex items-start gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold text-indigo-600">AI</span>
        </div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
          <div
            className="flex gap-1 items-center"
            role="status"
            aria-label="Loading response"
          >
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start gap-2 mb-3 ${isUser ? "flex-row-reverse" : ""}`}
      data-role={role}
    >
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <span className="text-[10px] font-bold text-indigo-600">AI</span>
        </div>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-indigo-600 text-white rounded-tr-none"
            : "bg-gray-100 text-gray-800 rounded-tl-none"
        }`}
      >
        {content.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}
