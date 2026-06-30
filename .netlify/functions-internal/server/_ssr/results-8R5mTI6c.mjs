import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, s as simulateABTest } from "./AppShell-IZbcf4XT.mjs";
import { g as generateMockAnalysis } from "./mock-analysis-B4vBjjXP.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, p as Printer, D as Download, q as Award, Z as Zap, r as CircleCheck, F as Flame, m as Sparkles, R as RefreshCw, s as ThumbsUp, t as Clock, E as Eye, u as Heart, k as MessageSquare, v as Share2, w as TriangleAlert, j as Lightbulb, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, L as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Legend, b as Line, B as BarChart, c as Bar, d as Cell, P as PieChart, e as Pie } from "../_libs/recharts.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function AnimatedCounter({
  value,
  duration = 1200
}) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = 0;
    const end = Math.floor(value);
    if (end === 0) {
      setCount(0);
      return;
    }
    if (start === end) {
      setCount(end);
      return;
    }
    const stepTime = Math.max(12, Math.floor(duration / Math.max(1, end)));
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: Intl.NumberFormat().format(count) });
}
function Results() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  const nav = useNavigate();
  const [result, setResult] = reactExports.useState(null);
  const [isPreLaunch, setIsPreLaunch] = reactExports.useState(false);
  const [copyA, setCopyA] = reactExports.useState("");
  const [copyB, setCopyB] = reactExports.useState("");
  const [abLoading, setAbLoading] = reactExports.useState(false);
  const [abResult, setAbResult] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const rawMode = sessionStorage.getItem("pi-campaignMode");
    const preMode = rawMode === "pre";
    setIsPreLaunch(preMode);
    const raw = sessionStorage.getItem("pi-campaign");
    const campaignObj = raw ? JSON.parse(raw) : null;
    const name = campaignObj?.name || "";
    const r = generateMockAnalysis(name, campaignObj, preMode, lang === "ar");
    setResult(r);
    sessionStorage.setItem("pi-result", JSON.stringify(r));
    const runId = sessionStorage.getItem("pi-current-run-id");
    if (runId) {
      const historyRaw = localStorage.getItem("pi-campaign-history");
      let history = [];
      try {
        history = historyRaw ? JSON.parse(historyRaw) : [];
      } catch (err) {
        history = [];
      }
      const exists = history.some((item) => item.id === runId);
      if (!exists) {
        const userType = localStorage.getItem("pi-profile-type") || "user";
        const newRecord = {
          id: runId,
          name: r.campaignName,
          mode: preMode ? "pre" : "post",
          userType,
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          budget: campaignObj?.budget || "1000",
          platforms: campaignObj?.platforms || ["instagram"],
          dialect: campaignObj?.dialect || "standard",
          score: r.score,
          status: r.status,
          engagementRate: r.engagementRate,
          sentiment: r.sentiment,
          metrics: r.metrics,
          campaignObj,
          resultObj: r,
          aiReport: {
            reportDescription: r.reportDescription,
            campaignEvaluation: r.campaignEvaluation,
            performanceForecast: r.performanceForecast,
            audienceBehaviorAnalysis: r.audienceBehaviorAnalysis,
            platformAnalysis: r.platformAnalysis,
            strengths: r.strengths,
            weaknesses: r.weaknesses,
            recommendations: r.recommendations,
            advancedAIRecommendations: r.advancedRecommendations,
            longTermMap: {
              shortTerm: r.longTermRoadmap.shortTerm,
              midTerm: r.longTermRoadmap.midTerm,
              longTerm: r.longTermRoadmap.longTerm
            }
          }
        };
        history.unshift(newRecord);
        localStorage.setItem("pi-campaign-history", JSON.stringify(history));
      }
    }
  }, []);
  const multiLineTimeline = reactExports.useMemo(() => {
    if (!result) return [];
    return result.timeline.map((item) => ({
      ...item,
      clicks: Math.floor(item.views * 0.08)
      // Simulating Clicks
    }));
  }, [result]);
  const platformBarData = reactExports.useMemo(() => {
    if (!result) return [];
    const platformsPreset = [
      {
        name: "Instagram",
        reach: isPreLaunch ? 8500 : 124500,
        engagement: 5.2,
        color: "oklch(0.6 0.23 250)"
      },
      // Blue Accent
      {
        name: "Facebook",
        reach: isPreLaunch ? 4500 : 92300,
        engagement: 3.8,
        color: "oklch(0.5 0.18 240)"
      },
      {
        name: "TikTok",
        reach: isPreLaunch ? 14e3 : 164e3,
        engagement: 6.1,
        color: "oklch(0.68 0.18 155)"
      },
      // Green Success
      {
        name: "X",
        reach: isPreLaunch ? 3200 : 41200,
        engagement: 2.9,
        color: "oklch(0.62 0.24 25)"
      },
      // Red Orange Risk
      {
        name: "LinkedIn",
        reach: isPreLaunch ? 1500 : 28e3,
        engagement: 4.1,
        color: "oklch(0.55 0.12 210)"
      },
      {
        name: "YouTube",
        reach: isPreLaunch ? 6e3 : 89e3,
        engagement: 4.5,
        color: "oklch(0.65 0.2 30)"
      }
    ];
    const raw = sessionStorage.getItem("pi-campaign");
    if (raw) {
      try {
        const camp = JSON.parse(raw);
        if (camp.platforms && camp.platforms.length > 0) {
          const lowerSelected = camp.platforms.map((p) => p.toLowerCase());
          const filtered = platformsPreset.filter((p) => lowerSelected.includes(p.name.toLowerCase()));
          if (filtered.length > 0) return filtered;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return platformsPreset.slice(0, 3);
  }, [result, isPreLaunch]);
  const handleDownloadReport = () => {
    if (!result) return;
    const content = `========================================================
PUBLIC INSIGHT - CAMPAIGN ANALYSIS REPORT
========================================================
Campaign Name: ${result.campaignName}
Status: ${result.status.toUpperCase()}
Overall Success Score: ${result.score}/100
Engagement Rate: ${result.engagementRate}% (${result.engagementGrade.toUpperCase()})
Positive Sentiment: ${result.sentiment.positive}%
Neutral Sentiment: ${result.sentiment.neutral}%
Negative Sentiment: ${result.sentiment.negative}%
Peak Timing: ${result.peakTime.from} - ${result.peakTime.to}

--------------------------------------------------------
ESTIMATED METRICS
--------------------------------------------------------
Views: ${Intl.NumberFormat().format(result.metrics.views)}
Likes: ${Intl.NumberFormat().format(result.metrics.likes)}
Comments: ${Intl.NumberFormat().format(result.metrics.comments)}
Shares: ${Intl.NumberFormat().format(result.metrics.shares)}

--------------------------------------------------------
STRENGTHS & SUCCESS PATHS
--------------------------------------------------------
${result.strengths.map((s, i) => `${i + 1}. ${s}`).join("\n")}

--------------------------------------------------------
RISKS & CAUSES OF FAILURE (Worst-Case)
--------------------------------------------------------
${result.weaknesses.map((w, i) => `${i + 1}. ${w}`).join("\n")}

--------------------------------------------------------
ACTIONABLE RECOMMENDATIONS
--------------------------------------------------------
${result.recommendations.map((r, i) => `${i + 1}. [${r.category.toUpperCase()}] ${r.title}: ${r.detail}`).join("\n")}

========================================================
Generated by Public Insight AI on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
`;
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${result.campaignName.replace(/\s+/g, "_")}_campaign_report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  if (!result) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: t("loading") }) });
  }
  const isStrong = result.score >= 80;
  const isWeak = result.score < 60;
  const statusColor = isStrong ? "text-success border-success/30 bg-success/5" : isWeak ? "text-destructive border-destructive/30 bg-destructive/5" : "text-warning border-warning/30 bg-warning/5";
  const statusDot = isStrong ? "bg-success" : isWeak ? "bg-destructive" : "bg-warning";
  const sentimentData = [
    {
      key: "sentiment_positive",
      value: result.sentiment.positive,
      color: "oklch(0.68 0.18 155)"
    },
    // Success Green
    {
      key: "sentiment_neutral",
      value: result.sentiment.neutral,
      color: "oklch(0.68 0.03 270)"
    },
    {
      key: "sentiment_negative",
      value: result.sentiment.negative,
      color: "oklch(0.62 0.24 25)"
    }
    // Risk Red/Orange
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("reports"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "space-y-6 pb-16 print:p-0", id: "campaign-report-capture", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
      __html: `
          @media print {
            body {
              background-color: black !important;
              color: white !important;
            }
            aside, nav, header, button, .no-print, #chatbot-floating-trigger {
              display: none !important;
            }
            .print\\:p-0 {
              padding: 0 !important;
              margin: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
            .glass-card {
              background: #0f0f15 !important;
              border: 1px solid #222 !important;
              box-shadow: none !important;
              color: white !important;
            }
          }
        `
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 no-print", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => nav({
        to: "/analyze"
      }), className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        L("Back to Campaign Settings", "العودة لتعديل البيانات")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5" }),
          L("Export PDF", "تصدير التقرير PDF")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleDownloadReport, className: "flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-90 transition bg-primary/15 hover:bg-primary/25 px-3 py-1.5 rounded-lg border border-primary/20 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
          L("Download Data", "تحميل البيانات TXT")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-ping" }),
          isPreLaunch ? L("PRE-LAUNCH AI SIMULATION REPORT", "تنبؤات الذكاء الاصطناعي قبل الإطلاق") : L("CAMPAIGN REAL-TIME INSIGHTS", "النتائج الفعلية والتحليلات للحملة")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-extrabold text-foreground tracking-tight", children: result.campaignName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5" }),
        isPreLaunch ? L("Simulation Engined", "محرك المحاكاة نشط") : L("Direct Platform Integration", "ربط مباشر بالمنصات")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 flex flex-col justify-between relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-12 w-12 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: isPreLaunch ? L("PREDICTED READINESS SCORE", "درجة الجاهزية المتوقعة") : t("overallScore") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: L("Calculated based on target demographic alignment, budget efficiency, and cultural dialect matching.", "محسوبة بناءً على توافق الجمهور المستهدف، كفاءة الميزانية، وملاءمة اللهجة الثقافية.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-7xl text-gradient leading-none tracking-tighter flex items-baseline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: result.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground font-normal ml-1", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 ${statusColor}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${statusDot} animate-pulse` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isPreLaunch ? result.score >= 80 ? L("Optimal Readiness Level", "جاهزية استراتيجية كاملة") : L("Improvements Recommended", "يوصى ببعض التعديلات") : t(`status_${result.status}`) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 border-success/20 bg-success/5 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-success font-bold", children: L("CAMPAIGN SUCCESS PROBABILITY", "مؤشر احتمالية النجاح") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold text-xl text-foreground", children: isStrong ? L("Highly Recommended Fit", "توافق ممتاز ومثالي") : L("Refinement Advised", "يحتاج إلى إعادة توجيه") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-sm", children: L("Reflects the probability of achieving visual network resonance and stable conversions under standard market loads.", "يمثل احتمالية تحقيق انتشار عضوي قوي ومعدل تحويل مستقر في ظل ظروف السوق الحالية.") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24 flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "48", r: "40", className: "stroke-muted/10", strokeWidth: "6", fill: "transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "48", cy: "48", r: "40", className: "stroke-success", strokeWidth: "6", fill: "transparent", strokeDasharray: 251.2, initial: {
                strokeDashoffset: 251.2
              }, animate: {
                strokeDashoffset: 251.2 - 251.2 * result.score / 100
              }, transition: {
                duration: 1.4,
                ease: "easeOut"
              } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-2xl text-success", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: result.score }),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] uppercase tracking-widest text-muted-foreground", children: L("Success", "نسبة النجاح") })
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 border-blue-500/25 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-12 w-12 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: L("Ad Copy A/B Performance Simulator", "محاكي أداء الشعارات والنصوص الإعلانية A/B") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: L("Compare two ad headlines or campaign slogans. Public Insight AI evaluates behavioral scores to discover the champion copy.", "أدخل نسختين إعلانيتين لمقارنتهما وتوقع الأداء النفسي والعاطفي ودرجة الجذب ومعدل النقر المتوقع.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-bold", children: L("Headline Variant A", "الخيار أ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: copyA, onChange: (e) => setCopyA(e.target.value), className: "w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 mt-1.5", placeholder: L("e.g. Stop wasting money. Save big and join the elite today!", "مثال: وفّر أموالك اليوم ووظّف ميزانيتك بالطريقة الذكية معنا!") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] text-muted-foreground uppercase tracking-widest font-bold", children: L("Headline Variant B", "الخيار ب") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: copyB, onChange: (e) => setCopyB(e.target.value), className: "w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 mt-1.5", placeholder: L("e.g. Build positive habits that pay off. Let's make every dollar count.", "مثال: ابدأ عادات جديدة ومستدامة. دعنا نساعدك في إدارة ميزانيتك.") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: abLoading || !copyA || !copyB, onClick: async () => {
        setAbLoading(true);
        try {
          const res = await simulateABTest({
            data: {
              copyA,
              copyB,
              language: lang
            }
          });
          setAbResult(res);
        } catch (e) {
          console.error(e);
        } finally {
          setAbLoading(false);
        }
      }, className: "w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50", children: [
        abLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 text-orange-500 animate-pulse" }),
        L("Simulate Performance champion", "بدء محاكاة الأداء والمقارنة بالذكاء الاصطناعي")
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
      }, className: "mt-4 pt-4 border-t border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-success", children: L("Champion Copy Variant", "الشعار المتفوق") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-sm text-success flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-4 w-4" }),
              abResult.winner === "A" ? L("Variant A is Superior", "الخيار أ يحقق تأثيراً وجذباً أكبر") : L("Variant B is Superior", "الخيار ب يحقق تأثيراً وجذباً أكبر")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground", children: L("AI Confidence", "دقة المحاكاة") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-extrabold text-primary", children: [
              abResult.confidence,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed italic bg-surface-elevated/45 p-3 rounded-xl border border-border", children: abResult.verdict })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: t("engagementTrend") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base mb-4", children: L("Daily Media Views & Clicks Trends", "اتجاهات المشاهدات اليومية مقابل النقرات") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: multiLineTimeline, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "oklch(1 0 0 / 0.05)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", stroke: "oklch(0.68 0.03 270)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.68 0.03 270)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.12 0.035 270)",
            border: "1px solid oklch(1 0 0 / 0.1)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { verticalAlign: "top", height: 36, iconType: "circle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Line,
            {
              type: "monotone",
              dataKey: "views",
              name: t("views"),
              stroke: "oklch(0.6 0.23 250)",
              strokeWidth: 3,
              dot: {
                fill: "oklch(0.6 0.23 250)",
                r: 4
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Line,
            {
              type: "monotone",
              dataKey: "clicks",
              name: t("clicks"),
              stroke: "oklch(0.68 0.18 155)",
              strokeWidth: 3,
              dot: {
                fill: "oklch(0.68 0.18 155)",
                r: 4
              }
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: L("PLATFORM PENETRATION RATE", "معدل نفاذ المنصات الإعلانية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base mb-4", children: L("Projected Audience Reach per Channel", "مستوى الوصول المتوقع للجمهور عبر كل منصة") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: platformBarData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "oklch(1 0 0 / 0.05)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "oklch(0.68 0.03 270)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.68 0.03 270)", fontSize: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.12 0.035 270)",
            border: "1px solid oklch(1 0 0 / 0.1)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { verticalAlign: "top", height: 36, iconType: "square" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "reach", name: L("Total Audience Reach", "إجمالي الوصول المتوقع للجمهور"), fill: "oklch(0.6 0.23 250)", radius: [6, 6, 0, 0], children: platformBarData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, `cell-${index}`)) })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: t("sentiment") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base mb-4", children: t("audienceResponse") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: sentimentData, dataKey: "value", innerRadius: 50, outerRadius: 65, paddingAngle: 3, children: sentimentData.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.12 0.035 270)",
            border: "1px solid oklch(1 0 0 / 0.1)",
            borderRadius: 12
          } })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center flex-wrap gap-4 text-[10px] font-semibold mt-3", children: sentimentData.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
            background: s.color
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            t(s.key),
            " ",
            s.value,
            "%"
          ] })
        ] }, s.key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: t("engagementRate") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-5xl text-gradient", children: [
              result.engagementRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warning font-bold mb-2", children: t(`grade_${result.engagementGrade}`) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-surface-elevated overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-primary-glow", style: {
            width: `${Math.min(100, result.engagementRate * 12)}%`
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-3 leading-relaxed", children: t("aboveBenchmark") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-4 mt-6 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
              " ",
              t("peakTime")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-base", children: [
              result.peakTime.from,
              " – ",
              result.peakTime.to
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1 font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5 text-success" }),
              " ",
              L("Audit Verdict", "التصنيف والتقييم")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-success", children: isStrong ? L("Highly Cohesive", "محسنة وفعالة جداً") : L("Needs Adjustments", "تحتاج لضبط التفاصيل") })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricTile, { Icon: Eye, label: t("views"), value: result.metrics.views, color: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricTile, { Icon: Heart, label: t("likes"), value: result.metrics.likes, color: "text-rose-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricTile, { Icon: MessageSquare, label: t("comments"), value: result.metrics.comments, color: "text-amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricTile, { Icon: Share2, label: t("shares"), value: result.metrics.shares, color: "text-emerald-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 rounded-2xl border border-success/20 bg-success/5 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-success uppercase tracking-widest", children: L("Strategic Strengths", "عوامل القوة والنجاح") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.strengths.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-xs text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 shrink-0 rounded bg-success/15 grid place-items-center text-[10px] font-bold text-success", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 rounded-2xl border border-destructive/20 bg-destructive/5 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-destructive uppercase tracking-widest", children: L("Identified Campaign Risks", "نقاط الضعف والمخاطر الإعلانية") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: result.weaknesses.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-xs text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 shrink-0 rounded bg-destructive/15 grid place-items-center text-[10px] font-bold text-destructive", children: "!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: w })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 border-blue-500/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-0 font-bold", children: L("Actionable Expert Recommendations", "توصيات الخبراء المباشرة للتطبيق") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: result.recommendations.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm p-4 rounded-xl bg-surface border border-border/40 hover:border-primary/30 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase font-bold text-primary mb-1", children: [
            "Category: ",
            rec.category.toUpperCase()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm mb-1 leading-snug", children: rec.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: rec.detail })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4 no-print justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/reports", className: "flex-1 max-w-sm gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring text-center flex items-center justify-center gap-2", children: [
        L("Go to Reports Section", "الدخول لخانة التقارير"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/recommendations", className: "flex-1 max-w-sm py-4 rounded-2xl font-semibold border border-style bg-surface text-center hover:bg-surface-elevated transition", children: t("recommendations") })
    ] })
  ] }) });
}
function MetricTile({
  Icon,
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 mb-2 ${color || "text-primary"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value }) })
  ] });
}
export {
  Results as component
};
