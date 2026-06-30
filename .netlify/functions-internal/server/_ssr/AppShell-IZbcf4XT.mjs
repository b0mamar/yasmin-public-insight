import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, L as LANGS } from "./router-LT1YDNfL.mjs";
import { A as AppLogo } from "./AppLogo-BHEYbuH1.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CvNDXdWm.mjs";
import { H as House, i as ChartColumn, j as Lightbulb, k as MessageSquare, S as Settings, l as Bot, X, m as Sparkles, n as CircleDot, o as Send } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType, a as anyType, b as arrayType, e as enumType } from "../_libs/zod.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const generateCampaignReport = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  campaignData: anyType(),
  language: stringType().default("en")
})).handler(createSsrRpc("05fcbd90a800e6b8c7467d461972b06c1f3d6972ad52c7b32d94246990ff5094"));
const getChatbotResponse = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  messages: arrayType(objectType({
    role: enumType(["user", "model"]),
    text: stringType()
  })),
  language: stringType().default("en")
})).handler(createSsrRpc("797b608c0307735fa0b000541cfd06b460184d8f120ec6b795f304986089d851"));
const simulateABTest = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  copyA: stringType(),
  copyB: stringType(),
  language: stringType().default("en")
})).handler(createSsrRpc("8ebb6dc42575072b88991d85c764bf2829b85729e3e03d6e6f0e862b15012b29"));
const checkCampaignSuitability = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  budget: stringType(),
  platforms: arrayType(stringType()),
  durationValue: stringType(),
  durationUnit: stringType().default("days"),
  language: stringType().default("en")
})).handler(createSsrRpc("0a00acb20f1e0b7fd78330d3278c7f5382bdaac1a61a29d4de1f1aaf26d097d4"));
const parseScreenshotData = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  imageBase64: stringType(),
  mimeType: stringType().default("image/png"),
  language: stringType().default("en")
})).handler(createSsrRpc("eb681e496ce1a09726f89f56ab0e4d774f6a4c58d7d0c12c117914db1f033853"));
function ChatbotWidget() {
  const { t, lang, dir } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const scrollRef = reactExports.useRef(null);
  const suggestions = ar ? [
    "كيف يمكنني تحليل حملة جديدة؟",
    "ما هو الفرق بين تحليل قبل وبعد الإطلاق؟",
    "كيف يُقاس معدل التفاعل؟",
    "ما هي التوصيات المدعومة بالذكاء الاصطناعي؟"
  ] : [
    "How do I analyze a campaign?",
    "Difference between Pre and Post launch?",
    "How is Engagement Rate measured?",
    "What are AI recommendations?"
  ];
  reactExports.useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: L(
            "Hello! I am your Public Insight intelligent assistant. Ask me anything about how to use public insight, campaign metrics, or launch predictions!",
            "مرحباً بك! أنا مساعدك الذكي لتطبيق ببليك إنسايت (Public Insight). يمكنني الإجابة على أي استفسارات تخص كيفية استخدام التطبيق، مقاييس الحملات الإعلانية، أو التنبؤات قبل الإطلاق!"
          )
        }
      ]);
    }
  }, [lang]);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);
  const handleSend = async (textToSend) => {
    if (!textToSend.trim() || loading) return;
    const userMsg = { role: "user", text: textToSend };
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
      setMessages((prev) => [...prev, { role: "model", text: res.text }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: ar ? "عذراً، واجهت مشكلة في الاتصال بالمساعد الذكي للذكاء الاصطناعي. يرجى مراجعة إعدادات الخادم والمحاولة مجدداً." : "Sorry, I encountered an issue reaching the AI service. Please verify server configurations."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed bottom-6 z-50 flex flex-col items-end",
      style: { right: dir === "ltr" ? "24px" : "auto", left: dir === "rtl" ? "24px" : "auto" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.9, y: 20 },
            className: "w-[360px] sm:w-[400px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 gradient-primary text-primary-foreground flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-white/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-white animate-pulse" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm tracking-tight", children: "Public Insight AI" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-primary-foreground/80 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success inline-block" }),
                      L("Online Assistant", "مساعد متصل")
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setIsOpen(false),
                    className: "hover:bg-white/10 p-1.5 rounded-lg transition",
                    "aria-label": "Close Chat",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex-1 overflow-y-auto p-4 space-y-3.5 bg-surface-elevated/40",
                  ref: scrollRef,
                  children: [
                    messages.map((m, idx) => {
                      const isModel = m.role === "model";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `flex items-start gap-2.5 ${isModel ? "justify-start" : "justify-end"}`,
                          children: [
                            isModel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-primary/15 grid place-items-center border border-primary/20 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: `p-3 rounded-2xl text-xs max-w-[80%] leading-relaxed whitespace-pre-line shadow-sm border ${isModel ? "bg-surface border-border/80 text-foreground rounded-tl-sm font-sans" : "gradient-primary border-primary text-primary-foreground rounded-tr-sm"}`,
                                children: m.text
                              }
                            )
                          ]
                        },
                        idx
                      );
                    }),
                    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 justify-start", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-primary/15 grid place-items-center border border-primary/20 shrink-0 mt-0.5 animate-bounce", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-surface border border-border/80 rounded-2xl rounded-tl-sm text-xs text-muted-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-3 w-3 animate-ping text-primary" }),
                        L("AI is thinking...", "المساعد الذكي يكتب...")
                      ] })
                    ] })
                  ]
                }
              ),
              messages.length <= 2 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border-t border-border flex flex-col gap-1.5 bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-semibold text-muted-foreground px-1.5", children: L("Try asking:", "جرب طرح سؤال:") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: suggestions.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleSend(s),
                    className: "text-[11px] text-start bg-surface border border-border/80 hover:border-primary px-2.5 py-1.5 rounded-lg text-foreground hover:bg-surface-elevated transition max-w-full text-ellipsis overflow-hidden whitespace-nowrap",
                    children: s
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: (e) => {
                    e.preventDefault();
                    handleSend(input);
                  },
                  className: "p-3 border-t border-border bg-background flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        value: input,
                        onChange: (e) => setInput(e.target.value),
                        placeholder: L("Type your question...", "اسأل المساعد الذكي..."),
                        className: "flex-1 bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary transition"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: !input.trim() || loading,
                        className: "h-8 w-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition disabled:opacity-40 disabled:scale-100",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setIsOpen(!isOpen),
            className: "h-14 w-14 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:brightness-110 active:scale-95 transition glow-ring cursor-pointer",
            "aria-label": "Toggle AI Chatbot",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6" })
          }
        )
      ]
    }
  );
}
function AppShell({ children, title }) {
  const { t, lang, setLang } = useI18n();
  const ar = lang === "ar";
  const navItems = [
    { to: "/home", icon: House, label: t("home") },
    { to: "/analyze", icon: AppLogo, label: t("analyzeNow") },
    { to: "/reports", icon: ChartColumn, label: t("reports") },
    { to: "/recommendations", icon: Lightbulb, label: t("recommendations") },
    { to: "/chat", icon: MessageSquare, label: ar ? "المساعد الذكي" : "Smart AI" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between px-5 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AppLogo, { className: "h-9 w-9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm", children: "Public Insight" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground tracking-wider uppercase", children: title ?? t("analytics") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: lang,
            onChange: (e) => setLang(e.target.value),
            className: "bg-surface border border-border rounded-lg px-2 py-1.5 text-xs",
            "aria-label": t("language"),
            children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: l.code, children: [
              l.flag,
              " ",
              l.label
            ] }, l.code))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/settings",
            className: "h-9 w-9 grid place-items-center rounded-xl bg-surface border border-border hover:bg-surface-elevated transition",
            title: ar ? "الإعدادات" : "Settings",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-4 w-4 text-foreground" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-5xl mx-auto px-5 py-6", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card flex items-center gap-1 p-2", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.to,
        className: "px-3 py-2 rounded-xl flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition",
        activeProps: {
          className: "px-3 py-2 rounded-xl flex items-center gap-2 text-xs text-primary-foreground gradient-primary"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: item.label })
        ]
      },
      item.to
    )) }) })
  ] });
}
export {
  AppShell as A,
  getChatbotResponse as a,
  checkCampaignSuitability as c,
  generateCampaignReport as g,
  parseScreenshotData as p,
  simulateABTest as s
};
