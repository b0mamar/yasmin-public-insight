import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { O as TrendingUp, a2 as Target, m as Sparkles, r as CircleCheck, w as TriangleAlert, a3 as CircleX, N as Info } from "../_libs/lucide-react.mjs";
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
const has = (s) => s.trim().length > 0;
function predict(d) {
  let score = 40;
  const reasonsAr = [];
  const reasonsEn = [];
  const objClear = d.objectives.trim().length >= 20;
  if (objClear) {
    score += 8;
    reasonsAr.push("أهداف واضحة ومحددة.");
    reasonsEn.push("Clear, specific objectives.");
  } else {
    score -= 6;
    reasonsAr.push("الأهداف غير واضحة بالقدر الكافي.");
    reasonsEn.push("Objectives are not specific enough.");
  }
  const audienceCount = [d.age, d.gender, d.location, d.education, d.interests].filter(has).length;
  if (audienceCount >= 4) {
    score += 8;
    reasonsAr.push("تعريف دقيق للجمهور المستهدف.");
    reasonsEn.push("Well-defined target audience.");
  } else if (audienceCount <= 2) {
    score -= 5;
    reasonsAr.push("الجمهور المستهدف غير محدد بدقة.");
    reasonsEn.push("Target audience under-defined.");
  }
  const msgLen = d.message.trim().length;
  if (msgLen >= 20 && msgLen <= 160) {
    score += 8;
    reasonsAr.push("رسالة اتصالية موجزة ومؤثرة.");
    reasonsEn.push("Concise, impactful message.");
  } else if (msgLen === 0) {
    score -= 8;
    reasonsAr.push("لا توجد رسالة رئيسية.");
    reasonsEn.push("Main message is missing.");
  } else if (msgLen > 240) {
    score -= 4;
    reasonsAr.push("الرسالة طويلة، يفضل تكثيفها.");
    reasonsEn.push("Message is too long — condense it.");
  }
  const hasVideo = d.contentTypes.includes("video");
  const hasImage = d.contentTypes.includes("image");
  const contentVariety = d.contentTypes.length;
  if (contentVariety >= 3) {
    score += 6;
    reasonsAr.push("تنوع جيد في أنواع المحتوى.");
    reasonsEn.push("Good content variety.");
  }
  if (hasVideo) score += 6;
  if (!hasVideo && !hasImage) {
    score -= 6;
    reasonsAr.push("غياب المحتوى المرئي يضعف التأثير.");
    reasonsEn.push("Missing visual content weakens impact.");
  }
  const plats = d.platforms;
  if (plats.length === 0) {
    score -= 15;
    reasonsAr.push("لم يتم اختيار أي منصة.");
    reasonsEn.push("No platforms selected.");
  } else if (plats.length >= 3) {
    score += 6;
    reasonsAr.push("تنوع المنصات يوسّع الوصول.");
    reasonsEn.push("Multi-platform mix broadens reach.");
  }
  const goodMatch = d.type === "commercial" && (plats.includes("instagram") || plats.includes("facebook")) || d.type === "awareness" && (plats.includes("tiktok") || plats.includes("instagram")) || d.type === "informational" && (plats.includes("x") || plats.includes("linkedin") || plats.includes("youtube")) || d.type === "electoral" && (plats.includes("facebook") || plats.includes("x")) || d.type === "social" && (plats.includes("instagram") || plats.includes("tiktok"));
  if (goodMatch) {
    score += 6;
    reasonsAr.push("توافق ممتاز بين نوع الحملة والمنصات.");
    reasonsEn.push("Strong campaign-platform alignment.");
  }
  if (has(d.slogans)) score += 3;
  if (has(d.organizer)) score += 2;
  if (d.description.trim().length >= 30) score += 4;
  const durDays = (Number(d.durationValue) || 0) * (d.durationUnit === "weeks" ? 7 : 1);
  if (durDays >= 14 && durDays <= 60) score += 5;
  else if (durDays > 0 && durDays < 7) {
    score -= 4;
    reasonsAr.push("مدة الحملة قصيرة جداً.");
    reasonsEn.push("Campaign duration is too short.");
  }
  if (has(d.budget)) score += 2;
  score = Math.max(15, Math.min(98, Math.round(score)));
  const status = score >= 80 ? "ready" : score >= 60 ? "almost" : "weak";
  const reachLevel = score >= 75 ? "high" : score >= 55 ? "medium" : "low";
  const engagementLevel = hasVideo && score >= 65 ? "high" : score >= 55 ? "medium" : "low";
  const platformsAr = plats.length ? plats.join("، ") : "—";
  const missingGroups = [];
  if (!has(d.age) || d.age.toLowerCase().includes("all"))
    missingGroups.push("الفئات العمرية غير المحددة");
  if (!has(d.location)) missingGroups.push("سكان المناطق غير المذكورة");
  if (!has(d.education)) missingGroups.push("بعض المستويات التعليمية");
  if (!plats.includes("tiktok") && !plats.includes("instagram"))
    missingGroups.push("الشريحة الشابة على TikTok/Instagram");
  if (!plats.includes("linkedin")) missingGroups.push("الجمهور المهني على LinkedIn");
  const bestTimes = d.type === "commercial" ? "20:00 – 22:00" : d.type === "informational" ? "08:00 – 10:00 و 19:00 – 21:00" : "18:00 – 22:00";
  const bestPlatforms = goodMatch ? platformsAr : hasVideo ? "Instagram Reels و TikTok" : "Facebook و Instagram";
  const report = [
    {
      id: 1,
      titleAr: "وضوح أهداف الحملة",
      titleEn: "Clarity of campaign objectives",
      bodyAr: objClear ? "الأهداف صيغت بوضوح وتسمح بقياس النتائج." : "الأهداف عامة وتحتاج إلى صياغة محددة قابلة للقياس (SMART).",
      bodyEn: objClear ? "Objectives are clearly stated and measurable." : "Objectives are too generic — make them SMART.",
      tone: objClear ? "good" : "warn"
    },
    {
      id: 2,
      titleAr: "ملاءمة الجمهور المستهدف",
      titleEn: "Target audience fit",
      bodyAr: audienceCount >= 4 ? `الجمهور محدد جيداً (${d.age} • ${d.gender} • ${d.location}).` : "تعريف الجمهور ناقص؛ أضف الفئة العمرية والموقع والاهتمامات بدقة.",
      bodyEn: audienceCount >= 4 ? `Audience is well-defined (${d.age} • ${d.gender} • ${d.location}).` : "Audience definition is incomplete — refine age, location, and interests.",
      tone: audienceCount >= 4 ? "good" : "warn"
    },
    {
      id: 3,
      titleAr: "قوة الرسالة الاتصالية وتأثيرها المتوقع",
      titleEn: "Strength & expected impact of the message",
      bodyAr: msgLen >= 20 && msgLen <= 160 ? "الرسالة مركزة وتحمل قدرة جيدة على التأثير العاطفي." : msgLen === 0 ? "لا توجد رسالة أساسية واضحة." : msgLen > 240 ? "الرسالة طويلة وقد تفقد تركيز المتلقي." : "الرسالة قصيرة جداً، توسع قليلاً.",
      bodyEn: msgLen >= 20 && msgLen <= 160 ? "Message is focused with strong emotional impact." : msgLen === 0 ? "No main message defined." : msgLen > 240 ? "Message is too long; condense it." : "Message is too short.",
      tone: msgLen >= 20 && msgLen <= 160 ? "good" : msgLen === 0 ? "bad" : "warn"
    },
    {
      id: 4,
      titleAr: "توافق المحتوى مع الأهداف",
      titleEn: "Content–objective alignment",
      bodyAr: hasVideo && contentVariety >= 2 ? "مزيج المحتوى (فيديو + صور/تصاميم) يخدم الأهداف بفعالية." : "أضف محتوى فيديو وتصاميم بصرية لتعزيز خدمة الأهداف.",
      bodyEn: hasVideo && contentVariety >= 2 ? "Content mix (video + visuals) supports the objectives." : "Add video and visual designs to better serve objectives.",
      tone: hasVideo && contentVariety >= 2 ? "good" : "warn"
    },
    {
      id: 5,
      titleAr: "تقييم اختيار المنصات الرقمية",
      titleEn: "Digital platform selection",
      bodyAr: plats.length === 0 ? "لم يتم اختيار أي منصة." : goodMatch ? `الاختيار مناسب لنوع الحملة (${platformsAr}).` : `المنصات المختارة (${platformsAr}) قد لا تكون الأنسب لنوع الحملة.`,
      bodyEn: plats.length === 0 ? "No platform selected." : goodMatch ? `Selection fits the campaign type (${platformsAr}).` : `Selected platforms (${platformsAr}) may not be optimal.`,
      tone: plats.length === 0 ? "bad" : goodMatch ? "good" : "warn"
    },
    {
      id: 6,
      titleAr: "نقاط القوة",
      titleEn: "Strengths",
      bodyAr: reasonsAr.filter(
        (_, i) => reasonsEn[i].toLowerCase().includes("good") || reasonsEn[i].toLowerCase().includes("strong") || reasonsEn[i].toLowerCase().includes("clear") || reasonsEn[i].toLowerCase().includes("well") || reasonsEn[i].toLowerCase().includes("concise") || reasonsEn[i].toLowerCase().includes("multi")
      ).join(" • ") || "تنظيم جيد لعناصر الحملة.",
      bodyEn: reasonsEn.filter((r) => /good|strong|clear|well|concise|multi/i.test(r)).join(" • ") || "Good overall campaign structure.",
      tone: "good"
    },
    {
      id: 7,
      titleAr: "نقاط الضعف والمخاطر المحتملة",
      titleEn: "Weaknesses & potential risks",
      bodyAr: reasonsAr.filter((_, i) => /not|missing|too|under|no /i.test(reasonsEn[i])).join(" • ") || "لا توجد مخاطر جوهرية مرصودة.",
      bodyEn: reasonsEn.filter((r) => /not|missing|too|under|no /i.test(r)).join(" • ") || "No major risks detected.",
      tone: "warn"
    },
    {
      id: 8,
      titleAr: "الفئات التي قد لا تصل إليها الحملة",
      titleEn: "Audience segments at risk of being missed",
      bodyAr: missingGroups.length ? missingGroups.join("، ") : "تغطية جيدة لمختلف الفئات.",
      bodyEn: missingGroups.length ? "Underserved: " + missingGroups.join(", ") : "Good cross-segment coverage.",
      tone: missingGroups.length >= 2 ? "warn" : "neutral"
    },
    {
      id: 9,
      titleAr: "اقتراح تحسينات عملية لزيادة فرص النجاح",
      titleEn: "Practical improvements",
      bodyAr: [
        !hasVideo ? "أضف مقاطع فيديو قصيرة (15–30 ث)." : null,
        msgLen > 160 ? "اختصر الرسالة الرئيسية إلى أقل من 160 حرف." : null,
        !goodMatch ? "أعد توزيع المنصات بما يخدم نوع الحملة." : null,
        audienceCount < 4 ? "حدّد الجمهور بدقة (عمر/موقع/اهتمامات)." : null,
        !has(d.slogans) ? "أضف شعاراً جذاباً يسهل تذكره." : null
      ].filter(Boolean).join(" • ") || "حافظ على الزخم وراقب الأداء بشكل أسبوعي.",
      bodyEn: "Refine targeting, add short-form video, and align platforms with campaign type.",
      tone: "neutral"
    },
    {
      id: 10,
      titleAr: "أفضل أوقات النشر والمنصات الأكثر فعالية",
      titleEn: "Best posting times & most effective platforms",
      bodyAr: `أفضل الأوقات: ${bestTimes}. أكثر المنصات فعالية: ${bestPlatforms}.`,
      bodyEn: `Best times: ${bestTimes}. Most effective platforms: ${bestPlatforms}.`,
      tone: "good"
    },
    {
      id: 11,
      titleAr: "توقع مستوى الوصول المحتمل",
      titleEn: "Expected reach level",
      bodyAr: reachLevel === "high" ? "وصول مرتفع متوقع بفضل التنوع وقوة المحتوى." : reachLevel === "medium" ? "وصول متوسط؛ يمكن تحسينه برفع جودة المحتوى وتنويع المنصات." : "وصول منخفض متوقع، تحتاج تعزيز الاستهداف والمحتوى.",
      bodyEn: reachLevel === "high" ? "High reach expected." : reachLevel === "medium" ? "Medium reach — improve content and mix." : "Low reach — strengthen targeting and content.",
      tone: reachLevel === "high" ? "good" : reachLevel === "low" ? "bad" : "warn"
    },
    {
      id: 12,
      titleAr: "توقع مستوى التفاعل المحتمل",
      titleEn: "Expected engagement level",
      bodyAr: engagementLevel === "high" ? "تفاعل مرتفع متوقع، خاصة على المحتوى المرئي القصير." : engagementLevel === "medium" ? "تفاعل متوسط؛ شجع التعليقات والمشاركة بأسئلة مباشرة." : "تفاعل ضعيف متوقع؛ راجع نبرة الرسالة وجودة التصاميم.",
      bodyEn: engagementLevel === "high" ? "High engagement expected." : engagementLevel === "medium" ? "Medium engagement — encourage interaction." : "Low engagement — revisit tone and visuals.",
      tone: engagementLevel === "high" ? "good" : engagementLevel === "low" ? "bad" : "warn"
    },
    {
      id: 13,
      titleAr: "التأثير على صورة المؤسسة والرأي العام",
      titleEn: "Impact on institutional image & public opinion",
      bodyAr: score >= 75 ? `${d.organizer || "المؤسسة"} ستحقق تأثيراً إيجابياً وتعزيزاً لصورتها لدى الجمهور.` : score >= 55 ? "تأثير إيجابي معتدل مع فرصة لبناء سمعة أقوى عند ضبط المحتوى." : "هناك مخاطر على الصورة إذا لم تُعالج نقاط الضعف قبل الإطلاق.",
      bodyEn: score >= 75 ? "Positive brand impact expected." : score >= 55 ? "Moderate positive impact." : "Reputational risk unless weaknesses are fixed.",
      tone: score >= 75 ? "good" : score >= 55 ? "neutral" : "warn"
    },
    {
      id: 14,
      titleAr: "درجة النجاح المتوقعة",
      titleEn: "Predicted success score",
      bodyAr: `الدرجة: ${score}/100 — ${status === "ready" ? "جاهزة للإطلاق" : status === "almost" ? "شبه جاهزة" : "تحتاج تحسينات"}. السبب: ${reasonsAr.slice(0, 3).join(" • ")}`,
      bodyEn: `Score: ${score}/100 — ${status}. Reason: ${reasonsEn.slice(0, 3).join(" • ")}`,
      tone: status === "ready" ? "good" : status === "weak" ? "bad" : "warn"
    }
  ];
  return { score, status, reachLevel, engagementLevel, reasonsAr, reasonsEn, report };
}
function Predict() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const nav = useNavigate();
  const [input, setInput] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const raw = sessionStorage.getItem("pi-prelaunch");
    if (!raw) {
      nav({
        to: "/analyze"
      });
      return;
    }
    setInput(JSON.parse(raw));
  }, [nav]);
  const prediction = reactExports.useMemo(() => input ? predict(input) : null, [input]);
  if (!input || !prediction) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: t("loading") }) });
  }
  const statusLabel = prediction.status === "ready" ? L("Ready to launch", "جاهزة للإطلاق") : prediction.status === "almost" ? L("Almost ready", "شبه جاهزة") : L("Needs work", "تحتاج تحسينات");
  const statusColor = prediction.status === "ready" ? "text-success" : prediction.status === "almost" ? "text-warning" : "text-destructive";
  const statusDot = prediction.status === "ready" ? "bg-success" : prediction.status === "almost" ? "bg-warning" : "bg-destructive";
  const toneIcon = (tone) => tone === "good" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }) : tone === "warn" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-warning" }) : tone === "bad" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground" });
  const reachLabel = prediction.reachLevel === "high" ? L("High", "مرتفع") : prediction.reachLevel === "medium" ? L("Medium", "متوسط") : L("Low", "منخفض");
  const engLabel = prediction.engagementLevel === "high" ? L("High", "مرتفع") : prediction.engagementLevel === "medium" ? L("Medium", "متوسط") : L("Low", "منخفض");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: L("Pre-launch Report", "تقرير ما قبل الإطلاق"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "space-y-5 pb-10 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: L("Campaign", "الحملة") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold", children: input.name || L("Untitled", "بدون اسم") }),
        input.organizer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: input.organizer })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => nav({
        to: "/analyze"
      }), className: "text-xs px-3 py-2 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition", children: L("Back to setup", "العودة للنموذج") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
        background: "radial-gradient(circle at 50% 0%, oklch(0.55 0.24 275 / 0.5), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: L("Predicted success score", "درجة النجاح المتوقعة") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-7xl text-gradient leading-none", children: [
          prediction.score,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-muted-foreground", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-border ${statusColor}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${statusDot}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: statusLabel })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
          " ",
          L("Expected reach", "مستوى الوصول المتوقع")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl text-gradient", children: reachLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3 w-3" }),
          " ",
          L("Expected engagement", "مستوى التفاعل المتوقع")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl text-gradient", children: engLabel })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: L("Full analysis report", "التقرير التحليلي الكامل") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: prediction.report.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-surface border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 shrink-0 rounded-lg bg-surface-elevated grid place-items-center text-xs font-bold text-primary", children: p.id }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
            toneIcon(p.tone),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: ar ? p.titleAr : p.titleEn })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ar ? p.bodyAr : p.bodyEn })
        ] })
      ] }) }, p.id)) })
    ] })
  ] }) });
}
export {
  Predict as component
};
