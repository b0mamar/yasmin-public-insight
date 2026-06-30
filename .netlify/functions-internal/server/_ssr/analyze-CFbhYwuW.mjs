import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, s as simulateABTest, c as checkCampaignSuitability, p as parseScreenshotData } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { ab as Rocket, i as ChartColumn, m as Sparkles, R as RefreshCw, F as Flame, s as ThumbsUp, ac as Facebook, ad as Instagram, ae as Linkedin, af as Youtube, G as CircleAlert, y as FileText, ag as Image, ah as Video, ai as Palette, x as ArrowRight, C as Check, aj as Upload } from "../_libs/lucide-react.mjs";
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
function Analyze() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const nav = useNavigate();
  const [mode, setMode] = reactExports.useState(null);
  const [copyA, setCopyA] = reactExports.useState("");
  const [copyB, setCopyB] = reactExports.useState("");
  const [abLoading, setAbLoading] = reactExports.useState(false);
  const [abResult, setAbResult] = reactExports.useState(null);
  const [suitabilityLoading, setSuitabilityLoading] = reactExports.useState(false);
  const [suitabilityResult, setSuitabilityResult] = reactExports.useState(null);
  const [ocrLoading, setOcrLoading] = reactExports.useState(false);
  const [ocrMessage, setOcrMessage] = reactExports.useState("");
  const [pre, setPre] = reactExports.useState({
    name: "",
    type: ["awareness"],
    organizer: "",
    description: "",
    objectives: "",
    age: "",
    gender: "both",
    location: "",
    education: "",
    interests: "",
    message: "",
    slogans: "",
    platforms: [],
    durationValue: "",
    durationUnit: "days",
    budget: "",
    contentTypes: [],
    dialect: "standard"
    // Cultural dialect setting
  });
  const setP = (k, v) => setPre((p) => ({
    ...p,
    [k]: v
  }));
  const togglePre = (k, id) => setPre((p) => ({
    ...p,
    [k]: p[k].includes(id) ? p[k].filter((x) => x !== id) : [...p[k], id]
  }));
  const [post, setPost] = reactExports.useState({
    name: "",
    type: "Awareness",
    goal: "Awareness",
    age: "25-34",
    gender: "All",
    location: "",
    start: "",
    end: "",
    budget: "",
    platforms: ["instagram"],
    postUrl: "",
    views: "",
    likes: "",
    comments: "",
    shares: "",
    saves: "",
    clicks: "",
    followersBefore: "",
    followersAfter: "",
    topLocation: "",
    topAge: "",
    dialect: "standard",
    // Cultural dialect setting
    competitor: ""
    // Competitor reference
  });
  const [postStep, setPostStep] = reactExports.useState(0);
  const setPo = (k, v) => setPost((d) => ({
    ...d,
    [k]: v
  }));
  const togglePoPlat = (id) => setPo("platforms", post.platforms.includes(id) ? post.platforms.filter((p) => p !== id) : [...post.platforms, id]);
  const submitPre = () => {
    sessionStorage.setItem("pi-campaignMode", "pre");
    sessionStorage.setItem("pi-campaign", JSON.stringify(pre));
    sessionStorage.setItem("pi-current-run-id", `run_${Date.now()}`);
    nav({
      to: "/analyzing"
    });
  };
  const submitPost = () => {
    sessionStorage.setItem("pi-campaignMode", "post");
    sessionStorage.setItem("pi-campaign", JSON.stringify(post));
    sessionStorage.setItem("pi-current-run-id", `run_${Date.now()}`);
    nav({
      to: "/analyzing"
    });
  };
  if (!mode) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("analyzeNow"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-2", children: t("chooseAnalysisMode") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8", children: t("chooseAnalysisModeIntro") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeCard, { Icon: Rocket, title: t("preLaunch"), desc: t("preLaunchDesc"), onClick: () => setMode("pre"), highlight: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ModeCard, { Icon: ChartColumn, title: t("postLaunch"), desc: t("postLaunchDesc"), onClick: () => setMode("post") })
      ] })
    ] }) }) });
  }
  if (mode === "pre") {
    const typeOptions = [{
      id: "awareness",
      label: L("Awareness", "توعوية")
    }, {
      id: "informational",
      label: L("Informational", "إعلامية")
    }, {
      id: "electoral",
      label: L("Electoral", "انتخابية")
    }, {
      id: "social",
      label: L("Social", "اجتماعية")
    }, {
      id: "commercial",
      label: L("Commercial", "تجارية")
    }, {
      id: "other",
      label: L("Other", "أخرى")
    }];
    const platformOptions = [{
      id: "facebook",
      label: "Facebook",
      Icon: Facebook
    }, {
      id: "instagram",
      label: "Instagram",
      Icon: Instagram
    }, {
      id: "tiktok",
      label: "TikTok",
      Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "TT" })
    }, {
      id: "linkedin",
      label: "LinkedIn",
      Icon: Linkedin
    }, {
      id: "x",
      label: "X",
      Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "X" })
    }, {
      id: "youtube",
      label: "YouTube",
      Icon: Youtube
    }];
    const contentOptions = [{
      id: "text",
      label: L("Text posts", "منشورات نصية"),
      Icon: FileText
    }, {
      id: "image",
      label: L("Images", "صور"),
      Icon: Image
    }, {
      id: "video",
      label: L("Videos", "فيديوهات"),
      Icon: Video
    }, {
      id: "design",
      label: L("Designs", "تصاميم"),
      Icon: Palette
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("analyzeNow"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode(null), className: "text-xs text-muted-foreground hover:text-foreground mb-3", children: [
        "← ",
        t("preLaunch")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-2", children: L("Pre-launch campaign analysis", "تحليل الحملة قبل الإطلاق") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: L("Fill in the campaign details to generate a full pre-launch report.", "املأ تفاصيل الحملة لإنشاء تقرير تحليلي كامل قبل الإطلاق.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: L("Campaign basics", "بيانات الحملة"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Campaign name", "اسم الحملة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.name, onChange: (e) => setP("name", e.target.value), className: inputCls, placeholder: L("Campaign name", "اسم الحملة") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 mb-6 p-5 rounded-2xl border border-primary/20 bg-primary/5 text-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm", children: L("Smart A/B Copy Test Simulator", "محاكي اختبار A/B الذكي للنصوص الإعلانية") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: L("Compare two ad headlines or slogans. Public Insight AI evaluates each copy using consumer behavioral metrics.", "أدخل نسختين من النص الإعلاني لمقارنتهما ومعرفة أيهما سيحقق أداءً أفضل بناءً على العوامل السيكولوجية والروحية.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-muted-foreground uppercase tracking-wider font-semibold", children: L("Version A Copy", "النسخة أ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: copyA, onChange: (e) => setCopyA(e.target.value), className: `${inputCls} text-xs mt-1`, placeholder: L("e.g. Save money today and join the elite!", "مثال: وفّر أموالك اليوم وانضم إلى النخبة!") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-muted-foreground uppercase tracking-wider font-semibold", children: L("Version B Copy", "النسخة ب") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: copyB, onChange: (e) => setCopyB(e.target.value), className: `${inputCls} text-xs mt-1`, placeholder: L("e.g. Build better habits that pay off over time.", "مثال: ابنِ عادات أفضل تثمر فائدتها بمرور الوقت.") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: abLoading || !copyA || !copyB, onClick: async () => {
            setAbLoading(true);
            try {
              const res = await simulateABTest({
                copyA,
                copyB,
                language: lang
              });
              setAbResult(res);
            } catch (e) {
              console.error(e);
            } finally {
              setAbLoading(false);
            }
          }, className: "w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: [
            abLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 text-orange-500" }),
            L("Simulate A/B Performance", "توقع النسخة الأفضل بالذكاء الاصطناعي")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: abResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            height: 0
          }, animate: {
            opacity: 1,
            height: "auto"
          }, exit: {
            opacity: 0,
            height: 0
          }, className: "mt-5 pt-4 border-t border-border overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-emerald-500", children: L("Predicted Champion", "النسخة المتفوقة") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { className: "font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-4 w-4" }),
                  abResult.winner === "A" ? L("Version A Winner", "النسخة أ هي الفائزة") : L("Version B Winner", "النسخة ب هي الفائزة")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground", children: L("AI Confidence", "نسبة ثقة الذكاء") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-extrabold text-primary", children: [
                  abResult.confidence,
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-4 text-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-surface border border-border rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-bold text-xs", children: L("Copy A Psychological Breakdown", "التحليل النفسي للنسخة أ") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Emotion", "العاطفة") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-rose-500 rounded-full", style: {
                      width: `${abResult.copyA.emotion}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyA.emotion,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Urgency", "الإلحاح") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-amber-500 rounded-full", style: {
                      width: `${abResult.copyA.urgency}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyA.urgency,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Clarity", "الوضوح") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-blue-500 rounded-full", style: {
                      width: `${abResult.copyA.clarity}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyA.clarity,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Impact", "التأثير") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-indigo-500 rounded-full", style: {
                      width: `${abResult.copyA.impact}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyA.impact,
                      "/100"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground italic leading-relaxed", children: abResult.copyA.psychologyAnalysis })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-surface border border-border rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-bold text-xs", children: L("Copy B Psychological Breakdown", "التحليل النفسي للنسخة ب") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Emotion", "العاطفة") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-rose-500 rounded-full", style: {
                      width: `${abResult.copyB.emotion}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyB.emotion,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Urgency", "الإلحاح") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-amber-500 rounded-full", style: {
                      width: `${abResult.copyB.urgency}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyB.urgency,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Clarity", "الوضوح") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-blue-500 rounded-full", style: {
                      width: `${abResult.copyB.clarity}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyB.clarity,
                      "/100"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px]", children: L("Impact", "التأثير") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-indigo-500 rounded-full", style: {
                      width: `${abResult.copyB.impact}%`
                    } }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[10px]", children: [
                      abResult.copyB.impact,
                      "/100"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground italic leading-relaxed", children: abResult.copyB.psychologyAnalysis })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-primary/10 rounded-xl border border-primary/20 text-xs text-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary block mb-1", children: L("Expert Verdict Summary & Advice", "الخلاصة وتوجيهات الخبراء") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-muted-foreground text-[11px]", children: abResult.verdict })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Campaign Type (Multi-select)", "نوع الحملة (تحديد متعدد)"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: typeOptions.map((o) => {
          const isSelected = pre.type.includes(o.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { active: isSelected, onClick: () => {
            const updated = pre.type.includes(o.id) ? pre.type.filter((t2) => t2 !== o.id) : [...pre.type, o.id];
            setP("type", updated.length > 0 ? updated : [o.id]);
          }, children: o.label }, o.id);
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Organizing entity", "الجهة المنظمة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.organizer, onChange: (e) => setP("organizer", e.target.value), className: inputCls, placeholder: L("Institution name", "اسم المؤسسة") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Campaign description", "وصف الحملة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: pre.description, onChange: (e) => setP("description", e.target.value), className: inputCls, placeholder: L("Brief description", "وصف مختصر") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Campaign objectives", "أهداف الحملة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: pre.objectives, onChange: (e) => setP("objectives", e.target.value), className: inputCls, placeholder: L("List the main objectives", "اذكر الأهداف الرئيسية") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: L("Target audience", "الجمهور المستهدف"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Age range", "الفئة العمرية"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.age, onChange: (e) => setP("age", e.target.value), className: inputCls, placeholder: "18-24, 25-34…" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Gender", "الجنس"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
          id: "male",
          label: L("Male", "ذكور")
        }, {
          id: "female",
          label: L("Female", "إناث")
        }, {
          id: "both",
          label: L("Both", "كلاهما")
        }].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { active: pre.gender === g.id, onClick: () => setP("gender", g.id), children: g.label }, g.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Location", "الموقع الجغرافي"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.location, onChange: (e) => setP("location", e.target.value), className: inputCls, placeholder: L("Region / city", "المنطقة / المدينة") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Education level", "المستوى التعليمي"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.education, onChange: (e) => setP("education", e.target.value), className: inputCls, placeholder: L("e.g. University", "مثال: جامعي") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Interests", "الاهتمامات"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.interests, onChange: (e) => setP("interests", e.target.value), className: inputCls, placeholder: L("Sports, tech, fashion…", "رياضة، تقنية، موضة…") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Cultural dialect & local identity", "الذكاء الثقافي والمحلي"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: pre.dialect, onChange: (e) => setP("dialect", e.target.value), className: `${inputCls} dark:bg-zinc-900 border-border rounded-xl px-3 py-2 text-sm`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "standard", children: L("Standard Arabic (Fusha)", "العربية الفصحى (فصحى)") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "algerian", children: L("Algerian Dialect", "لهجة جزائرية (دارجة وعامية)") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "egyptian", children: L("Egyptian Dialect", "لهجة مصرية") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "gulf", children: L("Gulf Dialect", "لهجة خليجية") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "levantine", children: L("Levantine Dialect", "لهجة شامية") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "english", children: L("English (Universal)", "الإنجليزية (العالمية)") })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: L("Message & slogans", "الرسالة والشعارات"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: L("Main message", "الرسالة الرئيسية للحملة"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: pre.message, onChange: (e) => setP("message", e.target.value), className: inputCls, placeholder: L("The main message", "الرسالة الرئيسية") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground text-end", children: [
            pre.message.length,
            " / 240"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Slogans used", "الشعارات المستخدمة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.slogans, onChange: (e) => setP("slogans", e.target.value), className: inputCls, placeholder: L("Slogans separated by commas", "افصل بين الشعارات بفواصل") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: L("Channels, duration & budget", "المنصات والمدة والميزانية"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Target platforms", "المنصات المستهدفة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: platformOptions.map(({
          id,
          label,
          Icon
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => togglePre("platforms", id), className: `p-3 rounded-xl border flex items-center justify-center gap-2 text-sm transition ${pre.platforms.includes(id) ? "bg-primary/15 border-primary" : "bg-surface border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
          " ",
          label
        ] }, id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Campaign duration", "مدة الحملة"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, value: pre.durationValue, onChange: (e) => setP("durationValue", e.target.value), className: inputCls, placeholder: "0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [{
              id: "days",
              label: L("Days", "أيام")
            }, {
              id: "weeks",
              label: L("Weeks", "أسابيع")
            }].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setP("durationUnit", u.id), className: `px-3 rounded-xl text-xs border ${pre.durationUnit === u.id ? "bg-primary/15 border-primary" : "bg-surface border-border"}`, children: u.label }, u.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Available budget", "الميزانية المتاحة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: pre.budget, onChange: (e) => setP("budget", e.target.value), className: inputCls, placeholder: "$" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-xl border border-border bg-surface/50 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: L("Budget and Platform Cohesion Checker", "مؤشر توافق الميزانية والمنصات") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", disabled: suitabilityLoading || !pre.budget || pre.platforms.length === 0 || !pre.durationValue, onClick: async () => {
            setSuitabilityLoading(true);
            try {
              const res = await checkCampaignSuitability({
                data: {
                  budget: pre.budget,
                  platforms: pre.platforms,
                  durationValue: pre.durationValue,
                  durationUnit: pre.durationUnit,
                  language: lang
                }
              });
              setSuitabilityResult(res);
            } catch (e) {
              console.error(e);
            } finally {
              setSuitabilityLoading(false);
            }
          }, className: "self-start px-4 py-1.5 rounded-lg bg-surface border border-border text-xs hover:border-primary transition cursor-pointer disabled:opacity-50", children: suitabilityLoading ? L("Calculating with AI...", "جاري الحساب بالذكاء الاصطناعي...") : L("Analyze Compatibility", "تحليل التوافق") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: suitabilityResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            height: 0
          }, animate: {
            opacity: 1,
            height: "auto"
          }, exit: {
            opacity: 0,
            height: 0
          }, className: "pt-2 border-t border-border text-xs overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: L("Compatibility Rating", "مستوى التوافق") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-primary", children: [
                suitabilityResult.score,
                "/100"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold uppercase ${suitabilityResult.status === "insufficient" ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" : suitabilityResult.status === "tight" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"}`, children: suitabilityResult.status === "insufficient" ? L("Insufficient Budget", "الميزانية غير كافية للمنصات المختارة") : suitabilityResult.status === "tight" ? L("Tight Budget Bounds", "الميزانية محدودة") : L("Adequate & Optimized", "الميزانية مناسبة ومُحسّنة") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[11px] text-foreground", children: suitabilityResult.message })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed mb-2 italic bg-muted/30 p-2.5 rounded-lg border border-border/50", children: suitabilityResult.explanation }),
            suitabilityResult.recommendations && suitabilityResult.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-bold", children: L("AI Financial Counsel", "توصيات ذكية للميزانية") }),
              suitabilityResult.recommendations.map((rec, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rec })
              ] }, idx))
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: L("Proposed content", "المحتوى المقترح للحملة"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: contentOptions.map(({
        id,
        label,
        Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => togglePre("contentTypes", id), className: `p-4 rounded-xl border flex flex-col items-center gap-2 text-sm transition ${pre.contentTypes.includes(id) ? "bg-primary/15 border-primary" : "bg-surface border-border"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
        " ",
        label
      ] }, id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: submitPre, className: "w-full mt-8 gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring flex items-center justify-center gap-2", children: [
        t("submit"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
      ] })
    ] }) }) });
  }
  const stepLabels = ["step_campaign", "step_platforms", "step_metrics"];
  const lastStep = stepLabels.length - 1;
  const metricFields = [["views", "views"], ["likes", "likes"], ["comments", "comments"], ["shares", "shares"], ["saves", "saves"], ["clicks", "clicks"], ["followersBefore", "followersBefore"], ["followersAfter", "followersAfter"], ["topLocation", "topLocation"], ["topAge", "topAge"]];
  const platformsPost = [{
    id: "facebook",
    label: "Facebook",
    Icon: Facebook
  }, {
    id: "instagram",
    label: "Instagram",
    Icon: Instagram
  }, {
    id: "tiktok",
    label: "TikTok",
    Icon: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: "TT" })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("analyzeNow"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 10
  }, animate: {
    opacity: 1,
    y: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode(null), className: "text-xs text-muted-foreground hover:text-foreground mb-3", children: [
      "← ",
      t("postLaunch")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-2", children: t("newAnalysis") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8", children: t("analyzeIntro") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-8", children: stepLabels.map((label, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 w-8 grid place-items-center rounded-full text-xs font-semibold transition ${i <= postStep ? "gradient-primary text-primary-foreground" : "bg-surface border border-border text-muted-foreground"}`, children: i < postStep ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs hidden sm:block", children: t(label) }),
      i < stepLabels.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 h-px ${i < postStep ? "bg-primary" : "bg-border"}` })
    ] }, label)) }),
    postStep === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: t("step_campaign"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("campaignName"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.name, onChange: (e) => setPo("name", e.target.value), className: inputCls, placeholder: t("campaignNamePh") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("targetAudience"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.age, onChange: (e) => setPo("age", e.target.value), placeholder: t("age"), className: inputCls }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.gender, onChange: (e) => setPo("gender", e.target.value), placeholder: t("gender"), className: inputCls }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.location, onChange: (e) => setPo("location", e.target.value), placeholder: t("location"), className: inputCls })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("duration"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: post.start, onChange: (e) => setPo("start", e.target.value), className: inputCls }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: post.end, onChange: (e) => setPo("end", e.target.value), className: inputCls })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("budgetOptional"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.budget, onChange: (e) => setPo("budget", e.target.value), className: inputCls, placeholder: "$" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Competitor reference / Page URL", "مرجع صفحة المنافس"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.competitor || "", onChange: (e) => setPo("competitor", e.target.value), className: inputCls, placeholder: "e.g. competitor-brand.com" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: L("Local Dialect", "اللهجة الثقافية المحلية"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: post.dialect, onChange: (e) => setPo("dialect", e.target.value), className: `${inputCls} dark:bg-zinc-900 border-border rounded-xl px-3 py-2 text-sm`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "standard", children: L("Standard Arabic (Fusha)", "العربية الفصحى (فصحى)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "algerian", children: L("Algerian Dialect", "لهجة جزائرية (دارجة وعامية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "egyptian", children: L("Egyptian Dialect", "لهجة مصرية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "gulf", children: L("Gulf Dialect", "لهجة خليجية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "levantine", children: L("Levantine Dialect", "لهجة شامية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "english", children: L("English (Universal)", "الإنجليزية (العالمية)") })
      ] }) })
    ] }),
    postStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: t("step_platforms"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("platformsLabel"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: platformsPost.map(({
        id,
        label,
        Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => togglePoPlat(id), className: `p-4 rounded-xl border flex flex-col items-center gap-2 text-sm transition ${post.platforms.includes(id) ? "bg-primary/15 border-primary" : "bg-surface border-border"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
        " ",
        label
      ] }, id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("postUrl"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post.postUrl, onChange: (e) => setPo("postUrl", e.target.value), placeholder: "https://…", className: inputCls }) })
    ] }),
    postStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: t("step_metrics"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-primary/75 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold block mb-1", children: L("Auto-Extract Metrics from Screenshot", "استخراج الإحصائيات تلقائياً من لقطة شاشة") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground max-w-sm mb-3", children: L("Upload clean campaign graph or insights report (FB/IG/TikTok Manager). Gemini extracts data to auto-fill form values instantly.", "ارفع صورة للوحة الإحصائيات من مدير الإعلانات وسيقوم محرك جيميناي باستخراج الأرقام وتعبئتها بالكامل يدوياً.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", id: "ocr-uploader-file", className: "hidden", onChange: (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = async () => {
              const base64 = reader.result;
              setOcrLoading(true);
              setOcrMessage(L("Google Gemini is executing OCR details extraction...", "جاري فك تشفير الصورة واستخراج الأرقام بالذكاء الاصطناعي..."));
              try {
                const res = await parseScreenshotData({
                  data: {
                    imageBase64: base64,
                    mimeType: file.type,
                    language: lang
                  }
                });
                if (res) {
                  if (res.views !== void 0 && res.views !== null) setPo("views", String(res.views));
                  if (res.likes !== void 0 && res.likes !== null) setPo("likes", String(res.likes));
                  if (res.comments !== void 0 && res.comments !== null) setPo("comments", String(res.comments));
                  if (res.shares !== void 0 && res.shares !== null) setPo("shares", String(res.shares));
                  if (res.saves !== void 0 && res.saves !== null) setPo("saves", String(res.saves));
                  if (res.clicks !== void 0 && res.clicks !== null) setPo("clicks", String(res.clicks));
                  setOcrMessage(L("Data extracted successfully and populated below!", "تم استخراج البيانات وتعبئتها في النموذج أدناه بنجاح!") + " (" + res.extractedMeta + ")");
                }
              } catch (err) {
                console.error(err);
                setOcrMessage(L("Failed to scan visual elements. Fill metrics manually instead.", "تعذر مسح الصورة، يرجى كتابة البيانات يدوياً بمرونة."));
              } finally {
                setOcrLoading(false);
              }
            };
            reader.readAsDataURL(file);
          }
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "ocr-uploader-file", className: "px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 cursor-pointer flex items-center gap-1 transition", children: [
          ocrLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-3 w-3" }),
          L("Upload Dashboard Image", "ارفع صورة الإحصائيات")
        ] }),
        ocrMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] text-primary bg-primary/10 px-3 py-1.5 rounded-lg font-medium", children: ocrMessage })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: metricFields.map(([k, lk]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lk), children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: post[k], onChange: (e) => setPo(k, e.target.value), className: inputCls }) }, k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8", children: [
      postStep > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPostStep(postStep - 1), className: "flex-1 py-3.5 rounded-2xl border border-border bg-surface font-medium hover:bg-surface-elevated transition", children: t("back") }),
      postStep < lastStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPostStep(postStep + 1), className: "flex-1 gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold glow-ring flex items-center justify-center gap-2", children: [
        t("continue"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: submitPost, className: "flex-1 gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold glow-ring", children: t("submit") })
    ] })
  ] }) }) });
}
const inputCls = "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 space-y-5 mb-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", children: title }),
    children
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mb-1.5 font-medium", children: label }),
    children
  ] });
}
function Pill({
  active,
  onClick,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, type: "button", className: `px-3 py-2.5 rounded-xl text-sm border transition ${active ? "bg-primary/15 border-primary text-foreground" : "bg-surface border-border text-muted-foreground hover:text-foreground"}`, children });
}
function ModeCard({
  Icon,
  title,
  desc,
  onClick,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `text-start glass-card p-6 hover:scale-[1.01] transition relative overflow-hidden group ${highlight ? "ring-1 ring-primary/40" : ""}`, children: [
    highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40 pointer-events-none", style: {
      background: "radial-gradient(circle at 100% 0%, oklch(0.55 0.24 275 / 0.4), transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl gradient-primary grid place-items-center glow-ring mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg mb-1", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1.5 text-xs text-primary font-medium", children: [
        title,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 rtl:rotate-180" })
      ] })
    ] })
  ] });
}
export {
  Analyze as component
};
