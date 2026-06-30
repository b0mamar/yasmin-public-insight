import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { generateMockAnalysis, type AnalysisResult } from "@/lib/mock-analysis";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  MessageSquare,
  Heart,
  Share2,
  Eye,
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Zap,
  Compass,
  Printer,
  Download,
  ThumbsUp,
  RefreshCw,
} from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";
import { simulateABTest } from "@/lib/api/gemini.functions";

// Animated Counter component
function AnimatedCounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

  return <>{Intl.NumberFormat().format(count)}</>;
}

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "Results — Public Insight" }] }),
  component: Results,
});

function Results() {
  const { t, lang } = useI18n();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);
  const nav = useNavigate();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isPreLaunch, setIsPreLaunch] = useState(false);

  // States for A/B Test Simulator
  const [copyA, setCopyA] = useState("");
  const [copyB, setCopyB] = useState("");
  const [abLoading, setAbLoading] = useState(false);
  const [abResult, setAbResult] = useState<any>(null);

  useEffect(() => {
    const rawMode = sessionStorage.getItem("pi-campaignMode");
    const preMode = rawMode === "pre";
    setIsPreLaunch(preMode);

    const raw = sessionStorage.getItem("pi-campaign");
    const campaignObj = raw ? JSON.parse(raw) : null;
    const name = campaignObj?.name || "";
    const r = generateMockAnalysis(name, campaignObj, preMode, lang === "ar");
    setResult(r);
    sessionStorage.setItem("pi-result", JSON.stringify(r));

    // Save to campaign history
    const runId = sessionStorage.getItem("pi-current-run-id");
    if (runId) {
      const historyRaw = localStorage.getItem("pi-campaign-history");
      let history: any[] = [];
      try {
        history = historyRaw ? JSON.parse(historyRaw) : [];
      } catch (err) {
        history = [];
      }

      const exists = history.some((item) => item.id === runId);
      if (!exists) {
        const userType = (localStorage.getItem("pi-profile-type") as "user" | "org") || "user";
        const newRecord = {
          id: runId,
          name: r.campaignName,
          mode: preMode ? "pre" : "post",
          userType: userType,
          date: new Date().toISOString().split("T")[0],
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
              longTerm: r.longTermRoadmap.longTerm,
            },
          },
        };
        history.unshift(newRecord);
        localStorage.setItem("pi-campaign-history", JSON.stringify(history));
      }
    }
  }, []);

  // Multi-line timeline data
  const multiLineTimeline = useMemo(() => {
    if (!result) return [];
    return result.timeline.map((item) => ({
      ...item,
      clicks: Math.floor(item.views * 0.08), // Simulating Clicks
    }));
  }, [result]);

  // Platform performance Bar Chart data
  const platformBarData = useMemo(() => {
    if (!result) return [];
    const platformsPreset = [
      {
        name: "Instagram",
        reach: isPreLaunch ? 8500 : 124500,
        engagement: 5.2,
        color: "oklch(0.6 0.23 250)",
      }, // Blue Accent
      {
        name: "Facebook",
        reach: isPreLaunch ? 4500 : 92300,
        engagement: 3.8,
        color: "oklch(0.5 0.18 240)",
      },
      {
        name: "TikTok",
        reach: isPreLaunch ? 14000 : 164000,
        engagement: 6.1,
        color: "oklch(0.68 0.18 155)",
      }, // Green Success
      {
        name: "X",
        reach: isPreLaunch ? 3200 : 41200,
        engagement: 2.9,
        color: "oklch(0.62 0.24 25)",
      }, // Red Orange Risk
      {
        name: "LinkedIn",
        reach: isPreLaunch ? 1500 : 28000,
        engagement: 4.1,
        color: "oklch(0.55 0.12 210)",
      },
      {
        name: "YouTube",
        reach: isPreLaunch ? 6000 : 89000,
        engagement: 4.5,
        color: "oklch(0.65 0.2 30)",
      },
    ];

    // Filter by selected platforms if any
    const raw = sessionStorage.getItem("pi-campaign");
    if (raw) {
      try {
        const camp = JSON.parse(raw);
        if (camp.platforms && camp.platforms.length > 0) {
          const lowerSelected = camp.platforms.map((p: string) => p.toLowerCase());
          const filtered = platformsPreset.filter((p) =>
            lowerSelected.includes(p.name.toLowerCase()),
          );
          if (filtered.length > 0) return filtered;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return platformsPreset.slice(0, 3); // Default to top 3
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
Generated by Public Insight AI on ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
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
    return (
      <AppShell>
        <div className="py-20 text-center text-muted-foreground">{t("loading")}</div>
      </AppShell>
    );
  }

  const isStrong = result.score >= 80;
  const isWeak = result.score < 60;

  const statusColor = isStrong
    ? "text-success border-success/30 bg-success/5"
    : isWeak
      ? "text-destructive border-destructive/30 bg-destructive/5"
      : "text-warning border-warning/30 bg-warning/5";

  const statusDot = isStrong ? "bg-success" : isWeak ? "bg-destructive" : "bg-warning";

  const sentimentData = [
    {
      key: "sentiment_positive" as TKey,
      value: result.sentiment.positive,
      color: "oklch(0.68 0.18 155)",
    }, // Success Green
    {
      key: "sentiment_neutral" as TKey,
      value: result.sentiment.neutral,
      color: "oklch(0.68 0.03 270)",
    },
    {
      key: "sentiment_negative" as TKey,
      value: result.sentiment.negative,
      color: "oklch(0.62 0.24 25)",
    }, // Risk Red/Orange
  ];

  return (
    <AppShell title={t("reports")}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 pb-16 print:p-0"
        id="campaign-report-capture"
      >
        {/* Style block for clean PDF printing outputs */}
        <style
          dangerouslySetInnerHTML={{
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
        `,
          }}
        />

        {/* Back and PDF Export Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 no-print">
          <button
            onClick={() => nav({ to: "/analyze" })}
            className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {L("Back to Campaign Settings", "العودة لتعديل البيانات")}
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              {L("Export PDF", "تصدير التقرير PDF")}
            </button>
            <button
              onClick={handleDownloadReport}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-90 transition bg-primary/15 hover:bg-primary/25 px-3 py-1.5 rounded-lg border border-primary/20 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              {L("Download Data", "تحميل البيانات TXT")}
            </button>
          </div>
        </div>

        {/* Campaign Header Profile */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
              {isPreLaunch
                ? L("PRE-LAUNCH AI SIMULATION REPORT", "تنبؤات الذكاء الاصطناعي قبل الإطلاق")
                : L("CAMPAIGN REAL-TIME INSIGHTS", "النتائج الفعلية والتحليلات للحملة")}
            </div>
            <h1 className="text-3xl font-display font-extrabold text-foreground tracking-tight">
              {result.campaignName}
            </h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
            <Award className="h-3.5 w-3.5" />
            {isPreLaunch
              ? L("Simulation Engined", "محرك المحاكاة نشط")
              : L("Direct Platform Integration", "ربط مباشر بالمنصات")}
          </div>
        </div>

        {/* Dashboard Grid - Score and Success Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Circular Overall Score Card */}
          <div className="glass-card p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Zap className="h-12 w-12 text-primary" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
                {isPreLaunch
                  ? L("PREDICTED READINESS SCORE", "درجة الجاهزية المتوقعة")
                  : t("overallScore")}
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {L(
                  "Calculated based on target demographic alignment, budget efficiency, and cultural dialect matching.",
                  "محسوبة بناءً على توافق الجمهور المستهدف، كفاءة الميزانية، وملاءمة اللهجة الثقافية.",
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <div className="font-display font-extrabold text-7xl text-gradient leading-none tracking-tighter flex items-baseline">
                <AnimatedCounter value={result.score} />
                <span className="text-xl text-muted-foreground font-normal ml-1">/100</span>
              </div>
              <div
                className={`px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 ${statusColor}`}
              >
                <span className={`h-2 w-2 rounded-full ${statusDot} animate-pulse`} />
                <span>
                  {isPreLaunch
                    ? result.score >= 80
                      ? L("Optimal Readiness Level", "جاهزية استراتيجية كاملة")
                      : L("Improvements Recommended", "يوصى ببعض التعديلات")
                    : t(`status_${result.status}` as TKey)}
                </span>
              </div>
            </div>
          </div>

          {/* Success Rate with animated green progress */}
          <div className="glass-card p-6 border-success/20 bg-success/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <CheckCircle2 className="h-12 w-12 text-success" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 h-full">
              <div className="space-y-2 text-center md:text-left">
                <div className="text-[10px] uppercase tracking-widest text-success font-bold">
                  {L("CAMPAIGN SUCCESS PROBABILITY", "مؤشر احتمالية النجاح")}
                </div>
                <h3 className="font-display font-extrabold text-xl text-foreground">
                  {isStrong
                    ? L("Highly Recommended Fit", "توافق ممتاز ومثالي")
                    : L("Refinement Advised", "يحتاج إلى إعادة توجيه")}
                </h3>
                <p className="text-xs text-muted-foreground max-w-sm">
                  {L(
                    "Reflects the probability of achieving visual network resonance and stable conversions under standard market loads.",
                    "يمثل احتمالية تحقيق انتشار عضوي قوي ومعدل تحويل مستقر في ظل ظروف السوق الحالية.",
                  )}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="relative h-24 w-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      className="stroke-muted/10"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      className="stroke-success"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={251.2}
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{ strokeDashoffset: 251.2 - (251.2 * result.score) / 100 }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="font-display font-extrabold text-2xl text-success">
                      <AnimatedCounter value={result.score} />%
                    </span>
                    <span className="block text-[8px] uppercase tracking-widest text-muted-foreground">
                      {L("Success", "نسبة النجاح")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Copy A/B Performance Simulator */}
        <div className="glass-card p-6 border-blue-500/25 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Flame className="h-12 w-12 text-primary" />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <h3 className="font-display font-bold text-lg text-foreground">
              {L("Ad Copy A/B Performance Simulator", "محاكي أداء الشعارات والنصوص الإعلانية A/B")}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            {L(
              "Compare two ad headlines or campaign slogans. Public Insight AI evaluates behavioral scores to discover the champion copy.",
              "أدخل نسختين إعلانيتين لمقارنتهما وتوقع الأداء النفسي والعاطفي ودرجة الجذب ومعدل النقر المتوقع.",
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                {L("Headline Variant A", "الخيار أ")}
              </label>
              <textarea
                rows={2}
                value={copyA}
                onChange={(e) => setCopyA(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 mt-1.5"
                placeholder={L(
                  "e.g. Stop wasting money. Save big and join the elite today!",
                  "مثال: وفّر أموالك اليوم ووظّف ميزانيتك بالطريقة الذكية معنا!",
                )}
              />
            </div>
            <div>
              <label className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                {L("Headline Variant B", "الخيار ب")}
              </label>
              <textarea
                rows={2}
                value={copyB}
                onChange={(e) => setCopyB(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 mt-1.5"
                placeholder={L(
                  "e.g. Build positive habits that pay off. Let's make every dollar count.",
                  "مثال: ابدأ عادات جديدة ومستدامة. دعنا نساعدك في إدارة ميزانيتك.",
                )}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={abLoading || !copyA || !copyB}
            onClick={async () => {
              setAbLoading(true);
              try {
                const res = await simulateABTest({ data: { copyA, copyB, language: lang } });
                setAbResult(res);
              } catch (e) {
                console.error(e);
              } finally {
                setAbLoading(false);
              }
            }}
            className="w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {abLoading ? (
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Flame className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
            )}
            {L("Simulate Performance champion", "بدء محاكاة الأداء والمقارنة بالذكاء الاصطناعي")}
          </button>

          <AnimatePresence>
            {abResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-border overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-success">
                      {L("Champion Copy Variant", "الشعار المتفوق")}
                    </span>
                    <h4 className="font-bold text-sm text-success flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {abResult.winner === "A"
                        ? L("Variant A is Superior", "الخيار أ يحقق تأثيراً وجذباً أكبر")
                        : L("Variant B is Superior", "الخيار ب يحقق تأثيراً وجذباً أكبر")}
                    </h4>
                  </div>
                  <div className="text-end">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      {L("AI Confidence", "دقة المحاكاة")}
                    </span>
                    <div className="text-lg font-extrabold text-primary">
                      {abResult.confidence}%
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic bg-surface-elevated/45 p-3 rounded-xl border border-border">
                  {abResult.verdict}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Multi-Line Engagement Trend */}
          <div className="glass-card p-6">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
              {t("engagementTrend")}
            </div>
            <div className="font-display font-bold text-base mb-4">
              {L("Daily Media Views & Clicks Trends", "اتجاهات المشاهدات اليومية مقابل النقرات")}
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={multiLineTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                  <XAxis dataKey="day" stroke="oklch(0.68 0.03 270)" fontSize={11} />
                  <YAxis stroke="oklch(0.68 0.03 270)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.12 0.035 270)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                    }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                  <Line
                    type="monotone"
                    dataKey="views"
                    name={t("views")}
                    stroke="oklch(0.6 0.23 250)" // Blue Accent
                    strokeWidth={3}
                    dot={{ fill: "oklch(0.6 0.23 250)", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    name={t("clicks")}
                    stroke="oklch(0.68 0.18 155)" // Success Green
                    strokeWidth={3}
                    dot={{ fill: "oklch(0.68 0.18 155)", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart platform reach */}
          <div className="glass-card p-6">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
              {L("PLATFORM PENETRATION RATE", "معدل نفاذ المنصات الإعلانية")}
            </div>
            <div className="font-display font-bold text-base mb-4">
              {L(
                "Projected Audience Reach per Channel",
                "مستوى الوصول المتوقع للجمهور عبر كل منصة",
              )}
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformBarData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.05)" />
                  <XAxis dataKey="name" stroke="oklch(0.68 0.03 270)" fontSize={11} />
                  <YAxis stroke="oklch(0.68 0.03 270)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.12 0.035 270)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                    }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="square" />
                  <Bar
                    dataKey="reach"
                    name={L("Total Audience Reach", "إجمالي الوصول المتوقع للجمهور")}
                    fill="oklch(0.6 0.23 250)"
                    radius={[6, 6, 0, 0]}
                  >
                    {platformBarData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sentiment and Engagement Rate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sentiment Distribution */}
          <div className="glass-card p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
                {t("sentiment")}
              </div>
              <div className="font-display font-bold text-base mb-4">{t("audienceResponse")}</div>
            </div>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={65}
                    paddingAngle={3}
                  >
                    {sentimentData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.12 0.035 270)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center flex-wrap gap-4 text-[10px] font-semibold mt-3">
              {sentimentData.map((s) => (
                <div key={s.key} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                  <span className="text-muted-foreground">
                    {t(s.key)} {s.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks & Conversion Grade */}
          <div className="glass-card p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">
                {t("engagementRate")}
              </div>
              <div className="flex items-end gap-3 mb-3">
                <span className="font-display font-extrabold text-5xl text-gradient">
                  {result.engagementRate}%
                </span>
                <span className="text-warning font-bold mb-2">
                  {t(`grade_${result.engagementGrade}` as TKey)}
                </span>
              </div>
              <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-glow"
                  style={{ width: `${Math.min(100, result.engagementRate * 12)}%` }}
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                {t("aboveBenchmark")}
              </p>
            </div>

            <div className="border-t border-border/40 pt-4 mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1 font-bold">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {t("peakTime")}
                </div>
                <div className="font-display font-bold text-base">
                  {result.peakTime.from} – {result.peakTime.to}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1 font-bold">
                  <Award className="h-3.5 w-3.5 text-success" />{" "}
                  {L("Audit Verdict", "التصنيف والتقييم")}
                </div>
                <div className="font-bold text-sm text-success">
                  {isStrong
                    ? L("Highly Cohesive", "محسنة وفعالة جداً")
                    : L("Needs Adjustments", "تحتاج لضبط التفاصيل")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid Cards with animated values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricTile
            Icon={Eye}
            label={t("views")}
            value={result.metrics.views}
            color="text-primary"
          />
          <MetricTile
            Icon={Heart}
            label={t("likes")}
            value={result.metrics.likes}
            color="text-rose-500"
          />
          <MetricTile
            Icon={MessageSquare}
            label={t("comments")}
            value={result.metrics.comments}
            color="text-amber-500"
          />
          <MetricTile
            Icon={Share2}
            label={t("shares")}
            value={result.metrics.shares}
            color="text-emerald-500"
          />
        </div>

        {/* Strengths & Weaknesses (Risk Analysis) Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Strengths */}
          <div className="p-5 rounded-2xl border border-success/20 bg-success/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-xs font-bold text-success uppercase tracking-widest">
                  {L("Strategic Strengths", "عوامل القوة والنجاح")}
                </span>
              </div>
              <ul className="space-y-3">
                {result.strengths.map((s, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="h-5 w-5 shrink-0 rounded bg-success/15 grid place-items-center text-[10px] font-bold text-success">
                      ✓
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Risks / Weaknesses */}
          <div className="p-5 rounded-2xl border border-destructive/20 bg-destructive/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span className="text-xs font-bold text-destructive uppercase tracking-widest">
                  {L("Identified Campaign Risks", "نقاط الضعف والمخاطر الإعلانية")}
                </span>
              </div>
              <ul className="space-y-3">
                {result.weaknesses.map((w, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="h-5 w-5 shrink-0 rounded bg-destructive/15 grid place-items-center text-[10px] font-bold text-destructive">
                      !
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actionable Recommendations (Short & Clear) */}
        <div className="glass-card p-6 border-blue-500/10">
          <div className="flex items-center gap-2 mb-5">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-0 font-bold">
              {L("Actionable Expert Recommendations", "توصيات الخبراء المباشرة للتطبيق")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.recommendations.map((rec, i) => (
              <div
                key={i}
                className="flex gap-3 text-sm p-4 rounded-xl bg-surface border border-border/40 hover:border-primary/30 transition"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-primary mb-1">
                    Category: {rec.category.toUpperCase()}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1 leading-snug">
                    {rec.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{rec.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 no-print justify-center">
          <Link
            to="/reports"
            className="flex-1 max-w-sm gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring text-center flex items-center justify-center gap-2"
          >
            {L("Go to Reports Section", "الدخول لخانة التقارير")}{" "}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
          <Link
            to="/recommendations"
            className="flex-1 max-w-sm py-4 rounded-2xl font-semibold border border-style bg-surface text-center hover:bg-surface-elevated transition"
          >
            {t("recommendations")}
          </Link>
        </div>
      </motion.div>
    </AppShell>
  );
}

function MetricTile({
  Icon,
  label,
  value,
  color,
}: {
  Icon: any;
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="glass-card p-4 flex flex-col justify-between">
      <div>
        <Icon className={`h-4 w-4 mb-2 ${color || "text-primary"}`} />
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
          {label}
        </div>
      </div>
      <div className="font-display font-bold text-2xl mt-1">
        <AnimatedCounter value={value} />
      </div>
    </div>
  );
}
