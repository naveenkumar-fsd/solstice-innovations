import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Estimator from "./pages/Estimator";
import Panels from "./pages/Panels";
import Compare from "./pages/Compare";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Chatbot from "@/components/Chatbot/Chatbot";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/estimator" element={<Estimator />} />
                  <Route path="/panels" element={<Panels />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* 🤖 CHATBOT – GLOBAL */}
            {chatOpen && <Chatbot onClose={() => setChatOpen(false)} />}
            <ChatbotButton onClick={() => setChatOpen(true)} />

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
