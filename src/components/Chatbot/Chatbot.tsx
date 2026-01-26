// components/Chatbot/Chatbot.tsx
import { useState } from "react";
import { chatbotReplies } from "./chatbotData";

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<string[]>([
    "👋 Hi! I'm SolarAI Assistant. Ask me anything about solar."
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;

    const userMsg = input.toLowerCase();
    const match = chatbotReplies.find(r =>
      r.keywords.some(k => userMsg.includes(k))
    );

    setMessages(prev => [
      ...prev,
      `🧑 ${input}`,
      `🤖 ${match?.reply || "Please try asking about cost, panels or estimator."}`
    ]);

    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-card border border-border rounded-xl shadow-xl z-50">
      
      {/* 🔝 HEADER WITH CLOSE BUTTON */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold text-sm">Solar Assistant 🤖</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-destructive text-lg"
        >
          ✕
        </button>
      </div>

      {/* 💬 MESSAGES */}
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-sm">
        {messages.map((m, i) => (
          <div key={i}>{m}</div>
        ))}
      </div>

      {/* ⌨️ INPUT */}
      <div className="flex border-t">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2 text-sm outline-none"
          placeholder="Ask about solar..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 text-primary font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
