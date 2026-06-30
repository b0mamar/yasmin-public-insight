import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Sparkles, Bot, CornerDownLeft, CircleDot } from "lucide-react";
import { getChatbotResponse } from "@/lib/api/gemini.functions";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export function ChatbotWidget() {
  const { t, lang, dir } = useI18n();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggested prompts
  const suggestions = ar
    ? [
        "كيف يمكنني تحليل حملة جديدة؟",
        "ما هو الفرق بين تحليل قبل وبعد الإطلاق؟",
        "كيف يُقاس معدل التفاعل؟",
        "ما هي التوصيات المدعومة بالذكاء الاصطناعي؟",
      ]
    : [
        "How do I analyze a campaign?",
        "Difference between Pre and Post launch?",
        "How is Engagement Rate measured?",
        "What are AI recommendations?",
      ];

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: L(
            "Hello! I am your Public Insight intelligent assistant. Ask me anything about how to use public insight, campaign metrics, or launch predictions!",
            "مرحباً بك! أنا مساعدك الذكي لتطبيق ببليك إنسايت (Public Insight). يمكنني الإجابة على أي استفسارات تخص كيفية استخدام التطبيق، مقاييس الحملات الإعلانية، أو التنبؤات قبل الإطلاق!",
          ),
        },
      ]);
    }
  }, [lang]);

  // Handle scrolling to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const chatHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await getChatbotResponse({
        data: {
          messages: chatHistory,
          language: lang,
        },
      });

      setMessages((prev) => [...prev, { role: "model", text: res.text }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: ar
            ? "عذراً، واجهت مشكلة في الاتصال بالمساعد الذكي للذكاء الاصطناعي. يرجى مراجعة إعدادات الخادم والمحاولة مجدداً."
            : "Sorry, I encountered an issue reaching the AI service. Please verify server configurations.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-6 z-50 flex flex-col items-end"
      style={{ right: dir === "ltr" ? "24px" : "auto", left: dir === "rtl" ? "24px" : "auto" }}
    >
      {/* Expanded chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[360px] sm:w-[400px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-4 gradient-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center">
                  <Bot className="h-5 w-5 text-white animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight">Public Insight AI</div>
                  <div className="text-[10px] text-primary-foreground/80 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-success inline-block" />
                    {L("Online Assistant", "مساعد متصل")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-lg transition"
                aria-label="Close Chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Pane */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-surface-elevated/40"
              ref={scrollRef}
            >
              {messages.map((m, idx) => {
                const isModel = m.role === "model";
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 ${
                      isModel ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isModel && (
                      <div className="h-7 w-7 rounded-lg bg-primary/15 grid place-items-center border border-primary/20 shrink-0 mt-0.5">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-xs max-w-[80%] leading-relaxed whitespace-pre-line shadow-sm border ${
                        isModel
                          ? "bg-surface border-border/80 text-foreground rounded-tl-sm font-sans"
                          : "gradient-primary border-primary text-primary-foreground rounded-tr-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="h-7 w-7 rounded-lg bg-primary/15 grid place-items-center border border-primary/20 shrink-0 mt-0.5 animate-bounce">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="p-3 bg-surface border border-border/80 rounded-2xl rounded-tl-sm text-xs text-muted-foreground flex items-center gap-1">
                    <CircleDot className="h-3 w-3 animate-ping text-primary" />
                    {L("AI is thinking...", "المساعد الذكي يكتب...")}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 2 && !loading && (
              <div className="p-2 border-t border-border flex flex-col gap-1.5 bg-background">
                <span className="text-[10px] uppercase font-semibold text-muted-foreground px-1.5">
                  {L("Try asking:", "جرب طرح سؤال:")}
                </span>
                <div className="flex flex-wrap gap-1">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(s)}
                      className="text-[11px] text-start bg-surface border border-border/80 hover:border-primary px-2.5 py-1.5 rounded-lg text-foreground hover:bg-surface-elevated transition max-w-full text-ellipsis overflow-hidden whitespace-nowrap"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-border bg-background flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={L("Type your question...", "اسأل المساعد الذكي...")}
                className="flex-1 bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition disabled:opacity-40 disabled:scale-100"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:brightness-110 active:scale-95 transition glow-ring cursor-pointer"
        aria-label="Toggle AI Chatbot"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
