import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { x as ArrowRight, a2 as Target, a6 as UserPlus, a0 as Compass, a7 as CloudUpload, $ as Cpu, y as FileText, j as Lightbulb, m as Sparkles, C as Check, h as CircleQuestionMark, P as Phone } from "../_libs/lucide-react.mjs";
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
function Home() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const stepsData = [{
    title: ar ? "أنشئ حسابك" : "Create your account",
    desc: ar ? "سجل كمستخدم أو مؤسسة بمرونة وسرعة تامة للوصول إلى لوحة التحكم." : "Sign up as a user or organization to access the dashboard securely.",
    icon: UserPlus
  }, {
    title: ar ? "حدد المرحلة" : "Select Phase",
    desc: ar ? "اختر محاكاة الحملة والتنبؤ بأدائها مسبقاً (قبل الإطلاق)، أو قياس نتائجك الإعلانية الحقيقية (بعد الإطلاق)." : "Choose to simulate and predict performance beforehand (pre-launch), or measure active metrics (post-launch).",
    icon: Compass
  }, {
    title: ar ? "ارفع البيانات اللازمة" : "Upload necessary data",
    desc: ar ? "اكتب تفاصيل حملتك وميزانيتك أو ارفع لقطة شاشة للوحة إحصائياتك لتعبئتها تلقائياً بالكامل." : "Enter campaign text and budget, or upload an insights screenshot to auto-fill metrics.",
    icon: CloudUpload
  }, {
    title: ar ? "معالجة فورية بالذكاء الاصطناعي" : "Instant AI processing",
    desc: ar ? "يقوم محرك جيميناي المتطور بفحص النصوص والذكاء الثقافي المحلي وتحليل المشاعر الإيجابية فوراً." : "Gemini analyzes local dialects, visual dashboard logs, and emotional sentiment levels instantly.",
    icon: Cpu
  }, {
    title: ar ? "أحصل على تقرير مفصل" : "Get a detailed report",
    desc: ar ? "عرض تقييم شامل، وتوقع دقيق للأداء ونقاط القوة والضعف والفرص المناسبة لتسهيل اتخاذ القرارات." : "Access a robust structured breakdown of performance forecasts and audience responses.",
    icon: FileText
  }, {
    title: ar ? "توجيهات وتوصيات ذكية" : "Smart guidance & recommendations",
    desc: ar ? "الحصول على توصيات مالية واستراتيجية بسيطة واضحة وقابلة للتطبيق فورياً لضمان نجاح الحملة." : "Gain straightforward, actionable advice to cut costs and maximize target reach.",
    icon: Lightbulb
  }];
  const valueProps = [ar ? "كشف الأثر الخفي لحملتك" : "Revealing the hidden impact of your campaign", ar ? "تحويل ضجيج البيانات إلى رؤى عميقة وفورية" : "Transforming data noise into deep and instant insights", ar ? "سد الفجوة الثقافية في السوق العربي" : "Bridging the cultural gap in the Arab market", ar ? "توصيات وتوجيهات ذكية مدعومة بالذكاء الاصطناعي" : "Smart recommendations and guidance powered by AI"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: t("home"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "text-center mb-10 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold text-gradient mb-3", children: "Public Insight" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/90 mb-2", children: t("tagline") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md mx-auto", children: t("description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/analyze", className: "inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-semibold glow-ring hover:scale-[1.02] transition mt-6", children: [
        t("analyzeNow"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "glass-card p-6 md:col-span-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: [
                "⚙️ ",
                ar ? "من التسجيل إلى الرؤية" : "From Registration to Insight"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: ar ? "رحلة معالجة حملتك الذكية" : "Your Smart Campaign Journey" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6", children: stepsData.map((s, idx) => {
            const IconComponent = s.icon;
            const isSelected = activeStep === idx;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActiveStep(idx), className: `p-2.5 rounded-xl border transition text-center flex flex-col items-center gap-1.5 cursor-pointer relative ${isSelected ? "bg-primary/10 border-primary text-primary font-bold shadow-sm" : "bg-surface border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-7 w-7 rounded-lg flex items-center justify-center transition ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] leading-tight block truncate w-full", children: s.title }),
              isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layoutId: "activeIndicator", className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-full" })
            ] }, idx);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-surface/50 border border-border/60 rounded-2xl p-5 min-h-[120px] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: ar ? 15 : -15
          }, animate: {
            opacity: 1,
            x: 0
          }, exit: {
            opacity: 0,
            x: ar ? -15 : 15
          }, transition: {
            duration: 0.2
          }, className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 mt-0.5", children: (() => {
              const StepIcon = stepsData[activeStep].icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-5 w-5 text-primary" });
            })() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-sm text-foreground mb-1", children: [
                activeStep + 1,
                ". ",
                stepsData[activeStep].title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: stepsData[activeStep].desc })
            ] })
          ] }, activeStep) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-6 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: ar ? `الخطوة ${activeStep + 1} من 6` : `Step ${activeStep + 1} of 6` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: activeStep === 0, onClick: () => setActiveStep((prev) => prev - 1), className: "px-3 py-1 text-xs rounded-lg border border-border bg-surface hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer", children: ar ? "السابق" : "Prev" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: activeStep === 5, onClick: () => setActiveStep((prev) => prev + 1), className: "px-3 py-1 text-xs rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer", children: ar ? "التالي" : "Next" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "glass-card p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: [
                "⭐ ",
                ar ? "ما يميزنا" : "What Makes Us Unique"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: ar ? "الذكاء والتأثير الإيجابي" : "Our Ultimate Value" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 text-sm mt-2", children: valueProps.map((text, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
            opacity: 0,
            x: -10
          }, whileInView: {
            opacity: 1,
            x: 0
          }, transition: {
            delay: idx * 0.1
          }, viewport: {
            once: true
          }, className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-primary/15 grid place-items-center shrink-0 mt-0.5 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium leading-normal text-xs", children: text })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", className: "w-full py-2.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/5 transition text-xs font-semibold flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ar ? "سجل وجرب بنفسك" : "Sign Up & Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 rtl:rotate-180" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: t("stat_avgScore"), value: "84", suffix: "/100" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: t("stat_engagement"), value: "+38%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: t("stat_campaigns"), value: "1.2k" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: t("stat_aiInsights"), value: "∞" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq", className: "glass-card p-6 md:col-span-3 hover:border-primary/50 transition group flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: t("faq") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: t("questionsAnswered") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-surface-elevated grid place-items-center group-hover:gradient-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "glass-card p-6 md:col-span-3 hover:border-primary/50 transition group flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: t("contact") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: t("reachTheTeam") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-surface-elevated grid place-items-center group-hover:gradient-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) })
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value,
  suffix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, className: "glass-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-3xl text-gradient", children: [
      value,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground", children: suffix })
    ] })
  ] });
}
export {
  Home as component
};
