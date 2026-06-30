import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { g as generateMockAnalysis } from "./mock-analysis-B4vBjjXP.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, $ as Cpu, m as Sparkles, Z as Zap, a0 as Compass, O as TrendingUp, a1 as CircleCheckBig, t as Clock, L as Layers } from "../_libs/lucide-react.mjs";
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
function getLocalizedRec(rec, isAr) {
  if (!isAr) return rec;
  const hasArabic = /[\u0600-\u06FF]/.test(rec.title);
  if (hasArabic) return rec;
  let title = rec.title;
  let detail = rec.detail;
  const tLower = rec.title.toLowerCase();
  const dLower = rec.detail.toLowerCase();
  if (tLower.includes("hyper-localized") || tLower.includes("targeting") || tLower.includes("استهداف")) {
    title = "استهداف النصوص الإعلانية الديناميكية المحلية بدقة عالية";
    if (dLower.includes("dialect") || dLower.includes("sub-dialect") || dLower.includes("لهج")) {
      detail = "اعتماد لهجات فرعية متخصصة أو شعارات محلية مصممة خصيصًا لتناسب الفئة المستهدفة لزيادة معدلات النقر والتحويل والاندماج الثقافي.";
    } else {
      detail = "استغلال خطافات المحادثات الحوارية المألوفة والمناسبة للفئة الديموغرافية المستهدفة لتجاوز تجاهل الإعلانات التقليدي وجلب انتباه فوري.";
    }
  } else if (tLower.includes("interactive retention") || tLower.includes("triggers") || tLower.includes("محفزات")) {
    title = "محفزات الاحتفاظ التفاعلية بالجمهور";
    if (dLower.includes("3-second") || dLower.includes("attention-retention") || dLower.includes("ثوان")) {
      detail = "تطبيق حلقات تفاعلية للاحتفاظ بالانتباه في أول 3 ثوانٍ باستخدام أسئلة وثيقة الصلة بالهوية المحلية في خطافات الإعلانات.";
    } else {
      detail = "إدراج رسوم متحركة سريعة الإيقاع ومزودة بنصوص توضيحية لزيادة نسبة إكمال الفيديوهات، مما يرفع من ظهور الإعلان تلقائياً على منصات النشر.";
    }
  } else if (tLower.includes("audience-matched") || dLower.includes("retargeting") || tLower.includes("مسارات")) {
    title = "مسارات إعادة الاستهداف المتوافقة مع اهتمامات الجمهور";
    detail = "بناء نماذج تسلسلية عالية التكرار لعرض الإعلانات تستهدف حصرياً المشاهدين الأكثر تفاعلاً والذين أظهروا معدلات احتفاظ عالية ومتابعة مستمرة للفيديو.";
  }
  return {
    ...rec,
    title,
    detail
  };
}
function getLocalizedRoadmapStep(act, isAr) {
  if (!isAr) return act;
  const hasArabic = /[\u0600-\u06FF]/.test(act);
  if (hasArabic) return act;
  const actLower = act.toLowerCase();
  if (actLower.includes("brand positioning") || actLower.includes("local dialect") || actLower.includes("تموضع")) {
    return "المرجلة الأولى: تموضع العلامة التجارية - نشر محتوى ثقافي عالي الثقة باستخدام اللهجة المحلية المألوفة والواثقة لربط العلامة التجارية بالمجتمع.";
  }
  if (actLower.includes("a/b test") || actLower.includes("performance champions") || actLower.includes("مقارن")) {
    return "إجراء اختبارات مقارنة وموسعة (A/B) للنصوص الإعلانية والابتكارية الأولية لتحديد الصيغ الأكثر تحقيقاً للمبيعات والتحويلات المباشرة.";
  }
  if (actLower.includes("dialogue triggering") || actLower.includes("custom surveys") || actLower.includes("حوار")) {
    return "المرحلة الثانية: تحفيز الحوار والتفاعل - إطلاق استطلاعات رأي مخصصة وملصقات تفاعلية واستفتاءات لبناء صدى مجتمعي مباشر وقوي.";
  }
  if (actLower.includes("refresh ad visual") || actLower.includes("fatigue") || actLower.includes("تجديد")) {
    return "تحديث وتجديد الأصول البصرية والمواد الإبداعية للإعلانات بانتظام لتفادي التراجع المعتاد في تفاعل الجمهور بعد مرور 14 يوماً.";
  }
  if (actLower.includes("community conversion") || actLower.includes("advocates") || actLower.includes("تحويل")) {
    return "المرحلة الثالثة: تحويل المجتمع للمبيعات والولاء - تحويل شرائح الجمهور الأكثر تفاعلاً وسعادة إلى سفراء ومدافعين مخلصين عن علامتكم.";
  }
  if (actLower.includes("analytics telemetry") || actLower.includes("post-click") || actLower.includes("تحليلات")) {
    return "نشر أدوات قياس وتحليلات متقدمة ومخصصة لتتبع ورسم خريطة دقيقة لسلوك المستخدمين على المدى الطويل بعد النقر والاتصال.";
  }
  return act;
}
function Recommendations() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const nav = useNavigate();
  const [r, setR] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const raw = sessionStorage.getItem("pi-result");
    const rawCamp = sessionStorage.getItem("pi-campaign");
    const campaignObj = rawCamp ? JSON.parse(rawCamp) : null;
    const rawMode = sessionStorage.getItem("pi-campaignMode") || "pre";
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (!parsed.advancedRecommendations || !parsed.longTermRoadmap) {
          const resultData = generateMockAnalysis(parsed.campaignName || "Sample Campaign", campaignObj, rawMode === "pre", ar);
          setR(resultData);
          sessionStorage.setItem("pi-result", JSON.stringify(resultData));
        } else {
          setR(parsed);
        }
      } catch (err) {
        console.error("Error parsing pi-result:", err);
        const resultData = generateMockAnalysis("Sample Campaign", campaignObj, rawMode === "pre", ar);
        setR(resultData);
        sessionStorage.setItem("pi-result", JSON.stringify(resultData));
      }
    } else {
      const resultData = generateMockAnalysis("Sample Campaign", campaignObj, rawMode === "pre", ar);
      setR(resultData);
      sessionStorage.setItem("pi-result", JSON.stringify(resultData));
    }
  }, []);
  if (!r) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: L("AI Recommendations", "توصيات الذكاء الاصطناعي"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: t("loading") }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: L("Expert AI System", "النظام الاستشاري الذكي"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "max-w-4xl mx-auto space-y-8 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => nav({
      to: "/results"
    }), className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
      L("Back to Main Report", "العودة للتقرير الرئيسي")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-start space-y-2 border-b border-border/40 pb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-center md:justify-start gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
        L("ADVANCED STRATEGIC SYNTHESIS", "تركيب استراتيجي متقدم")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-extrabold text-foreground tracking-tight", children: L("Deep-Dive AI Recommendations & Slogan Roadmap", "التوصيات الإستراتيجية العميقة وخريطة الطريق") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-2xl", children: L(`Tailored optimization blueprints computed exclusively for "${r.campaignName}". These models are designed to maximize target demographic engagement.`, `خطط تحسين مخصصة تم حسابها بالكامل لحملة "${r.campaignName}". تم تطوير هذه النماذج لتعزيز وصول وتأثير المحتوى الاستراتيجي.`) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 15
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.1
    }, className: "glass-card p-6 md:p-8 border-primary/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-24 w-24 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 animate-pulse" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-primary uppercase tracking-widest block", children: L("STRATEGIC OPTIMIZATIONS", "تحسينات ذكية") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: L("Smart Recommendations", "توصيات ذكية") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: (r.advancedRecommendations || []).map((rawRec, i) => {
        const rec = getLocalizedRec(rawRec, ar);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.15 + i * 0.08
        }, className: "bg-surface hover:bg-surface-elevated border border-border/50 hover:border-primary/25 rounded-2xl p-5 transition-all duration-300 relative flex flex-col justify-between group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-1.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] uppercase font-bold text-success bg-success/10 px-2 py-0.5 rounded-full font-sans", children: [
                "Impact: ",
                rec.impactScore,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground mb-2 leading-snug group-hover:text-primary transition duration-300", children: rec.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: rec.detail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-muted-foreground mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Expected Impact Score", "تأثير القوة المتوقع") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground font-sans", children: [
                rec.impactScore,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full bg-gradient-to-r from-primary to-primary-glow", initial: {
              width: 0
            }, animate: {
              width: `${rec.impactScore}%`
            }, transition: {
              duration: 1.2,
              delay: 0.3 + i * 0.1
            } }) })
          ] })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 15
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.2
    }, className: "glass-card p-6 md:p-8 border-indigo-500/10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-24 w-24 text-indigo-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-indigo-400 uppercase tracking-widest block", children: L("EXECUTION PLAN", "خطة التنفيذ والعمل") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: L("Long-Term Execution Roadmap", "خريطة الطريق والجدول العملي طويل الأجل") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-primary/30 via-amber-500/30 to-success/30 z-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -10
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 0.25
        }, className: "bg-surface border border-border/40 hover:border-primary/20 p-5 rounded-2xl relative z-10 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/15 text-primary text-xs font-extrabold flex items-center justify-center border border-primary/25 shrink-0", children: "01" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase text-primary tracking-widest block", children: L("IMMEDIATE ACTION", "تنفيذ عاجل") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: L("Short-Term (0-30 Days)", "قصير المدى (0 - 30 يوم)") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: (r.longTermRoadmap?.shortTerm || []).map((rawAct, index) => {
            const act = getLocalizedRoadmapStep(rawAct, ar);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act })
            ] }, index);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.3
        }, className: "bg-surface border border-border/40 hover:border-amber-500/20 p-5 rounded-2xl relative z-10 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-amber-500/15 text-amber-500 text-xs font-extrabold flex items-center justify-center border border-amber-500/25 shrink-0", children: "02" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase text-amber-500 tracking-widest block", children: L("GROWTH STAGE", "مرحلة التطوير") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: L("Mid-Term (1-3 Months)", "متوسط المدى (1 - 3 أشهر)") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: (r.longTermRoadmap?.midTerm || []).map((rawAct, index) => {
            const act = getLocalizedRoadmapStep(rawAct, ar);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-amber-500 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act })
            ] }, index);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 10
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 0.35
        }, className: "bg-surface border border-border/40 hover:border-success/20 p-5 rounded-2xl relative z-10 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-success/15 text-success text-xs font-extrabold flex items-center justify-center border border-success/25 shrink-0", children: "03" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase text-success tracking-widest block", children: L("STABILIZATION", "مرحلة الاستقرار") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: L("Long-Term (3+ Months)", "طويل المدى (أكثر من 3 أشهر)") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: (r.longTermRoadmap?.longTerm || []).map((rawAct, index) => {
            const act = getLocalizedRoadmapStep(rawAct, ar);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4 text-success shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act })
            ] }, index);
          }) })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Recommendations as component
};
