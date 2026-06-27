"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatToggle } from "./ChatToggle";
import { useChat, MAX_MESSAGES } from "./useChat";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, isLoading, error, messageCount, clearChat } =
    useChat();

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const limitReached = messageCount >= MAX_MESSAGES;

  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3"
      data-testid="chat-widget"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            style={{ height: "520px", maxHeight: "calc(100dvh - 120px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Alentro AI chat window"
            data-testid="chat-window"
          >
            {/* Header */}
            <div className="bg-indigo-600 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">
                    Alentro AI Assistant
                  </p>
                  <p className="text-indigo-200 text-xs">
                    IT services &amp; solutions
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearChat}
                  className="text-indigo-200 hover:text-white text-xs transition-colors cursor-pointer"
                  aria-label="Clear chat history"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-indigo-200 hover:text-white transition-colors cursor-pointer rounded p-0.5 focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label="Close chat window"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message list */}
            <div
              className="flex-1 overflow-y-auto p-4"
              role="log"
              aria-label="Chat messages"
              aria-live="polite"
              data-testid="message-list"
            >
              {messages.length === 0 && !isLoading && (
                <div
                  className="flex flex-col items-center justify-center h-full text-center gap-3 py-8"
                  data-testid="empty-state"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium text-sm">
                      Hi! I&apos;m Alentro AI.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      How can I help you with IT services today?
                    </p>
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  role={msg.role}
                  content={msg.content}
                />
              ))}

              {isLoading && (
                <ChatMessage role="assistant" content="" isLoading />
              )}

              {error && (
                <p
                  className="text-xs text-red-500 text-center py-2"
                  role="alert"
                  data-testid="error-message"
                >
                  {error}
                </p>
              )}

              {limitReached && (
                <p
                  className="text-xs text-gray-500 text-center py-2 bg-gray-50 rounded-lg mt-2"
                  data-testid="limit-message"
                >
                  Message limit reached. Clear chat to continue.
                </p>
              )}

              <div ref={messagesEndRef} />
            </div>

            <ChatInput
              onSend={sendMessage}
              disabled={isLoading || limitReached}
              placeholder={
                limitReached
                  ? "Message limit reached"
                  : "Ask about IT services..."
              }
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ChatToggle
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
    </div>
  );
}
