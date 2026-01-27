// components/Chatbot/Chatbot.tsx
import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { chatbotReplies } from "./chatbotData";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hi! I’m SolarAI Assistant",
    },
    {
      id: 2,
      sender: "bot",
      text: "⚡ Ask me about solar cost, panels or estimator",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 🔽 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.toLowerCase();

    // 🧑 User message
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // 🤖 Bot reply (delay like WhatsApp)
    setTimeout(() => {
      const match = chatbotReplies.find(r =>
        r.keywords.some(k => userText.includes(k))
      );

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          match?.reply ||
          "🤔 I didn’t understand. Try asking about price, panels or estimator.",
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 h-[460px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col overflow-hidden">

      {/* 🔝 HEADER */}
      <div className="flex items-center justify-between px-4 py-3 bg-green-500 text-white">
        <h3 className="font-semibold text-sm">💬 SolarAI Assistant</h3>
        <button
          onClick={onClose}
          className="text-white text-lg hover:opacity-80"
        >
          ✕
        </button>
      </div>

      {/* 💬 CHAT BODY */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-100">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed
                ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none shadow"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="text-xs text-gray-500 italic">
            SolarAI is typing<span className="animate-pulse">...</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ⌨️ INPUT BAR */}
      <div className="flex items-center gap-2 border-t p-2 bg-white">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-sm border rounded-full outline-none"
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
