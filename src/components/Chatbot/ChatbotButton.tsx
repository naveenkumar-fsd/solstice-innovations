// components/Chatbot/ChatbotButton.tsx
import { MessageCircle } from "lucide-react";

export default function ChatbotButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full 
                 bg-primary text-primary-foreground shadow-lg
                 hover:scale-105 transition"
    >
      <MessageCircle className="w-6 h-6 mx-auto" />
    </button>
  );
}
