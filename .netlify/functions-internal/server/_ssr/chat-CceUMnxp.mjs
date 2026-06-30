import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, a as getChatbotResponse } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { l as Bot, b as Lock, a0 as Compass, m as Sparkles, n as CircleDot, o as Send } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./AppLogo-BHEYbuH1.mjs";
import "./server-CvNDXdWm.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ChatPage() {
  const {
    t,
    lang,
    dir
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const suggestions = ar ? ["كيف يمكنني تحليل حملة جديدة في التطبيق؟", "ما الفرق بين مرحلة قبل الإطلاق ومرحلة بعد الإطلاق؟", "كيف يعمل محاكي اختبار A/B الذكي؟", "كيف أقرأ مؤشر توافق الميزانية والمنصات؟", "ما هي توصيات IA وكيف تساهم في نجاح حملتي؟", "كيف أقوم بتصدير التقارير بصيغة PDF؟"] : ["How do I analyze a new campaign in the app?", "Difference between Pre-Launch and Post-Launch phases?", "How does the Smart A/B Copy Test Simulator work?", "How to read Platform & Budget Suitability Index?", "What are IA Recommendations and how do they help?", "How do I export/download reports as PDF?"];
  reactExports.useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: "model",
        text: L("Welcome! I am the Public Insight Intelligent AI Assistant. I am specialized ONLY in answering questions, queries, and details related to this application, campaign analytics, budget metrics, and marketing predictions. How can I help you optimize your campaign strategy today?", "مرحباً بك! أنا المساعد الذكي لتطبيق ببليك إنسايت (Public Insight). أنا مخصص ومبرمج للإجابة فقط على الأسئلة والاستفسارات المتعلقة بالتطبيق ومميزاته، مقاييس الحملات الإعلانية، مواءمة الميزانية، والتحليلات التسويقية. كيف يمكنني مساعدتك في تطوير حملتك اليوم؟")
      }]);
    }
  }, [lang]);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);
  const handleSend = async (textToSend) => {
    if (!textToSend.trim() || loading) return;
    const userMsg = {
      role: "user",
      text: textToSend
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const chatHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        text: m.text
      }));
      const res = await getChatbotResponse({
        data: {
          messages: chatHistory,
          language: lang
        }
      });
      setMessages((prev) => [...prev, {
        role: "model",
        text: res.text
      }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [...prev, {
        role: "model",
        text: ar ? "عذراً، واجهت مشكلة في الاتصال بالمساعد الذكي للذكاء الاصطناعي. يرجى مراجعة إعدادات الخادم والمحاولة مجدداً." : "Sorry, I encountered an issue reaching the AI service. Please verify your internet connection or try again."
      }]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: L("Smart AI Assistant", "المساعد الذكي"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto pb-10 text-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-primary-foreground animate-pulse" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: L("INTELLIGENT BOT", "مساعد مخصص للتطبيق") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: L("Public Insight AI Assistant", "مساعد ببليك إنسايت الذكي") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Bot Parameters", "معايير المساعد") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed text-justify", children: L("This smart assistant is trained specifically and exclusively on Public Insight features and marketing benchmarks. It will reject generic unrelated questions.", "تم تدريب وبرمجة هذا المساعد الذكي خصيصاً لخدمتك في استفسارات تطبيق ببليك إنسايت ومقاييس التسويق الرقمي. المساعد سيرفض بأدب الإجابة على أي أسئلة عامة خارجة عن نطاق هذا التطبيق.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border/40 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-success animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-success font-bold uppercase", children: L("Ready to assist", "جاهز ومستعد للرد") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground font-bold text-xs uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Quick Suggestions", "طرح أسئلة سريعة") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: suggestions.slice(0, 4).map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleSend(s), className: "text-[11px] text-start p-2.5 rounded-xl bg-surface border border-border/60 hover:border-primary text-foreground hover:bg-surface-elevated transition leading-normal text-ellipsis overflow-hidden", children: s }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 h-[580px] flex flex-col glass-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3.5 bg-surface border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-success animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: L("Public Insight AI v1.0", "محرك الذكاء الاصطناعي نشط") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded uppercase", children: L("APP SUPPORT ONLY", "أسئلة التطبيق فقط") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-4 bg-surface-elevated/20", ref: scrollRef, children: [
          messages.map((m, idx) => {
            const isModel = m.role === "model";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 10
            }, animate: {
              opacity: 1,
              y: 0
            }, className: `flex items-start gap-3 ${isModel ? "justify-start" : "justify-end"}`, children: [
              isModel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/15 border border-primary/20 grid place-items-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4.5 w-4.5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm max-w-[85%] border ${isModel ? "bg-surface border-border text-foreground rounded-tl-sm text-justify font-sans" : "gradient-primary border-primary text-primary-foreground rounded-tr-sm"}`, children: m.text })
            ] }, idx);
          }),
          loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/15 border border-primary/20 grid place-items-center shrink-0 mt-0.5 animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4.5 w-4.5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-surface border border-border rounded-2xl rounded-tl-sm text-xs text-muted-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3.5 w-3.5 animate-ping text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("AI Assistant is formulation response...", "يجري تحرير الإجابة المناسبة...") })
            ] })
          ] })
        ] }),
        messages.length <= 2 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-3 border-t border-border bg-surface flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground", children: L("Click to ask:", "انقر لطرح السؤال فوراً:") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 max-h-[80px] overflow-y-auto", children: suggestions.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleSend(s), className: "text-[11px] bg-background hover:bg-surface-elevated border border-border px-3 py-1.5 rounded-lg text-foreground hover:border-primary transition max-w-full text-ellipsis overflow-hidden whitespace-nowrap", children: s }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          handleSend(input);
        }, className: "p-4 border-t border-border bg-surface flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: L("Ask about Public Insight features, metrics, budget compatibility...", "اسأل المساعد عن خصائص التطبيق، قياس الميزانية، أو محاكاة الحملات..."), className: "flex-1 bg-background border border-border rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: !input.trim() || loading, className: "h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 active:scale-95 transition disabled:opacity-40 disabled:scale-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ChatPage as component
};
