import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { generateMockAnalysis, type AnalysisResult } from "@/lib/mock-analysis";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  ArrowLeft,
  Cpu,
  TrendingUp,
  Zap,
  Calendar,
  CheckCircle,
  Clock,
  Layers,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/recommendations")({
  head: () => ({ meta: [{ title: "AI Recommendations & Roadmap — Public Insight" }] }),
  component: Recommendations,
});

function getLocalizedRec(
  rec: { title: string; detail: string; impactScore: number },
  isAr: boolean,
) {
  if (!isAr) return rec;

  const hasArabic = /[\u0600-\u06FF]/.test(rec.title);
  if (hasArabic) return rec;

  let title = rec.title;
  let detail = rec.detail;

  const tLower = rec.title.toLowerCase();
  const dLower = rec.detail.toLowerCase();

  if (
    tLower.includes("hyper-localized") ||
    tLower.includes("targeting") ||
    tLower.includes("استهداف")
  ) {
    title = "استهداف النصوص الإعلانية الديناميكية المحلية بدقة عالية";
    if (dLower.includes("dialect") || dLower.includes("sub-dialect") || dLower.includes("لهج")) {
      detail =
        "اعتماد لهجات فرعية متخصصة أو شعارات محلية مصممة خصيصًا لتناسب الفئة المستهدفة لزيادة معدلات النقر والتحويل والاندماج الثقافي.";
    } else {
      detail =
        "استغلال خطافات المحادثات الحوارية المألوفة والمناسبة للفئة الديموغرافية المستهدفة لتجاوز تجاهل الإعلانات التقليدي وجلب انتباه فوري.";
    }
  } else if (
    tLower.includes("interactive retention") ||
    tLower.includes("triggers") ||
    tLower.includes("محفزات")
  ) {
    title = "محفزات الاحتفاظ التفاعلية بالجمهور";
    if (
      dLower.includes("3-second") ||
      dLower.includes("attention-retention") ||
      dLower.includes("ثوان")
    ) {
      detail =
        "تطبيق حلقات تفاعلية للاحتفاظ بالانتباه في أول 3 ثوانٍ باستخدام أسئلة وثيقة الصلة بالهوية المحلية في خطافات الإعلانات.";
    } else {
      detail =
        "إدراج رسوم متحركة سريعة الإيقاع ومزودة بنصوص توضيحية لزيادة نسبة إكمال الفيديوهات، مما يرفع من ظهور الإعلان تلقائياً على منصات النشر.";
    }
  } else if (
    tLower.includes("audience-matched") ||
    dLower.includes("retargeting") ||
    tLower.includes("مسارات")
  ) {
    title = "مسارات إعادة الاستهداف المتوافقة مع اهتمامات الجمهور";
    detail =
      "بناء نماذج تسلسلية عالية التكرار لعرض الإعلانات تستهدف حصرياً المشاهدين الأكثر تفاعلاً والذين أظهروا معدلات احتفاظ عالية ومتابعة مستمرة للفيديو.";
  }

  return { ...rec, title, detail };
}

function getLocalizedRoadmapStep(act: string, isAr: boolean): string {
  if (!isAr) return act;

  const hasArabic = /[\u0600-\u06FF]/.test(act);
  if (hasArabic) return act;

  const actLower = act.toLowerCase();

  if (
    actLower.includes("brand positioning") ||
    actLower.includes("local dialect") ||
    actLower.includes("تموضع")
  ) {
    return "المرجلة الأولى: تموضع العلامة التجارية - نشر محتوى ثقافي عالي الثقة باستخدام اللهجة المحلية المألوفة والواثقة لربط العلامة التجارية بالمجتمع.";
  }
  if (
    actLower.includes("a/b test") ||
    actLower.includes("performance champions") ||
    actLower.includes("مقارن")
  ) {
    return "إجراء اختبارات مقارنة وموسعة (A/B) للنصوص الإعلانية والابتكارية الأولية لتحديد الصيغ الأكثر تحقيقاً للمبيعات والتحويلات المباشرة.";
  }
  if (
    actLower.includes("dialogue triggering") ||
    actLower.includes("custom surveys") ||
    actLower.includes("حوار")
  ) {
    return "المرحلة الثانية: تحفيز الحوار والتفاعل - إطلاق استطلاعات رأي مخصصة وملصقات تفاعلية واستفتاءات لبناء صدى مجتمعي مباشر وقوي.";
  }
  if (
    actLower.includes("refresh ad visual") ||
    actLower.includes("fatigue") ||
    actLower.includes("تجديد")
  ) {
    return "تحديث وتجديد الأصول البصرية والمواد الإبداعية للإعلانات بانتظام لتفادي التراجع المعتاد في تفاعل الجمهور بعد مرور 14 يوماً.";
  }
  if (
    actLower.includes("community conversion") ||
    actLower.includes("advocates") ||
    actLower.includes("تحويل")
  ) {
    return "المرحلة الثالثة: تحويل المجتمع للمبيعات والولاء - تحويل شرائح الجمهور الأكثر تفاعلاً وسعادة إلى سفراء ومدافعين مخلصين عن علامتكم.";
  }
  if (
    actLower.includes("analytics telemetry") ||
    actLower.includes("post-click") ||
    actLower.includes("تحليلات")
  ) {
    return "نشر أدوات قياس وتحليلات متقدمة ومخصصة لتتبع ورسم خريطة دقيقة لسلوك المستخدمين على المدى الطويل بعد النقر والاتصال.";
  }

  return act;
}

function Recommendations() {
  const { t, lang } = useI18n();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);
  const nav = useNavigate();
  const [r, setR] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("pi-result");
    const rawCamp = sessionStorage.getItem("pi-campaign");
    const campaignObj = rawCamp ? JSON.parse(rawCamp) : null;
    const rawMode = sessionStorage.getItem("pi-campaignMode") || "pre";

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (!parsed.advancedRecommendations || !parsed.longTermRoadmap) {
          const resultData = generateMockAnalysis(
            parsed.campaignName || "Sample Campaign",
            campaignObj,
            rawMode === "pre",
            ar,
          );
          setR(resultData);
          sessionStorage.setItem("pi-result", JSON.stringify(resultData));
        } else {
          setR(parsed);
        }
      } catch (err) {
        console.error("Error parsing pi-result:", err);
        const resultData = generateMockAnalysis(
          "Sample Campaign",
          campaignObj,
          rawMode === "pre",
          ar,
        );
        setR(resultData);
        sessionStorage.setItem("pi-result", JSON.stringify(resultData));
      }
    } else {
      const resultData = generateMockAnalysis(
        "Sample Campaign",
        campaignObj,
        rawMode === "pre",
        ar,
      );
      setR(resultData);
      sessionStorage.setItem("pi-result", JSON.stringify(resultData));
    }
  }, []);

  if (!r) {
    return (
      <AppShell title={L("AI Recommendations", "توصيات الذكاء الاصطناعي")}>
        <div className="py-20 text-center text-muted-foreground">{t("loading")}</div>
      </AppShell>
    );
  }

  return (
    <AppShell title={L("Expert AI System", "النظام الاستشاري الذكي")}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8 pb-16"
      >
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => nav({ to: "/results" })}
            className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {L("Back to Main Report", "العودة للتقرير الرئيسي")}
          </button>
        </div>

        {/* Hero title header */}
        <div className="text-center md:text-start space-y-2 border-b border-border/40 pb-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-center md:justify-start gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {L("ADVANCED STRATEGIC SYNTHESIS", "تركيب استراتيجي متقدم")}
          </div>
          <h1 className="text-3xl font-display font-extrabold text-foreground tracking-tight">
            {L(
              "Deep-Dive AI Recommendations & Slogan Roadmap",
              "التوصيات الإستراتيجية العميقة وخريطة الطريق",
            )}
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {L(
              `Tailored optimization blueprints computed exclusively for "${r.campaignName}". These models are designed to maximize target demographic engagement.`,
              `خطط تحسين مخصصة تم حسابها بالكامل لحملة "${r.campaignName}". تم تطوير هذه النماذج لتعزيز وصول وتأثير المحتوى الاستراتيجي.`,
            )}
          </p>
        </div>

        {/* SECTION 1: AI-Powered Advanced Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8 border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Cpu className="h-24 w-24 text-primary" />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">
                {L("STRATEGIC OPTIMIZATIONS", "تحسينات ذكية")}
              </span>
              <h2 className="text-xl font-display font-bold text-foreground">
                {L("Smart Recommendations", "توصيات ذكية")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(r.advancedRecommendations || []).map((rawRec, i) => {
              const rec = getLocalizedRec(rawRec, ar);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="bg-surface hover:bg-surface-elevated border border-border/50 hover:border-primary/25 rounded-2xl p-5 transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition duration-300">
                        <Zap className="h-4 w-4" />
                      </span>
                      <span className="text-[9px] uppercase font-bold text-success bg-success/10 px-2 py-0.5 rounded-full font-sans">
                        Impact: {rec.impactScore}%
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-sm text-foreground mb-2 leading-snug group-hover:text-primary transition duration-300">
                      {rec.title}
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed">{rec.detail}</p>
                  </div>

                  {/* Animated progress bar indicator */}
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <div className="flex justify-between text-[9px] text-muted-foreground mb-1">
                      <span>{L("Expected Impact Score", "تأثير القوة المتوقع")}</span>
                      <span className="font-bold text-foreground font-sans">
                        {rec.impactScore}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-border/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary-glow"
                        initial={{ width: 0 }}
                        animate={{ width: `${rec.impactScore}%` }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SECTION 2: Long-Term Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 border-indigo-500/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Compass className="h-24 w-24 text-indigo-400" />
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block">
                {L("EXECUTION PLAN", "خطة التنفيذ والعمل")}
              </span>
              <h2 className="text-xl font-display font-bold text-foreground">
                {L("Long-Term Execution Roadmap", "خريطة الطريق والجدول العملي طويل الأجل")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Visual connector lines for the step flow */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-primary/30 via-amber-500/30 to-success/30 z-0" />

            {/* Short Term */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-surface border border-border/40 hover:border-primary/20 p-5 rounded-2xl relative z-10 space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/15 text-primary text-xs font-extrabold flex items-center justify-center border border-primary/25 shrink-0">
                  01
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-primary tracking-widest block">
                    {L("IMMEDIATE ACTION", "تنفيذ عاجل")}
                  </span>
                  <h3 className="font-display font-bold text-sm text-foreground">
                    {L("Short-Term (0-30 Days)", "قصير المدى (0 - 30 يوم)")}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {(r.longTermRoadmap?.shortTerm || []).map((rawAct, index) => {
                  const act = getLocalizedRoadmapStep(rawAct, ar);
                  return (
                    <div
                      key={index}
                      className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Mid Term */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface border border-border/40 hover:border-amber-500/20 p-5 rounded-2xl relative z-10 space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-amber-500/15 text-amber-500 text-xs font-extrabold flex items-center justify-center border border-amber-500/25 shrink-0">
                  02
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-amber-500 tracking-widest block">
                    {L("GROWTH STAGE", "مرحلة التطوير")}
                  </span>
                  <h3 className="font-display font-bold text-sm text-foreground">
                    {L("Mid-Term (1-3 Months)", "متوسط المدى (1 - 3 أشهر)")}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {(r.longTermRoadmap?.midTerm || []).map((rawAct, index) => {
                  const act = getLocalizedRoadmapStep(rawAct, ar);
                  return (
                    <div
                      key={index}
                      className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Long Term */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-surface border border-border/40 hover:border-success/20 p-5 rounded-2xl relative z-10 space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-success/15 text-success text-xs font-extrabold flex items-center justify-center border border-success/25 shrink-0">
                  03
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-success tracking-widest block">
                    {L("STABILIZATION", "مرحلة الاستقرار")}
                  </span>
                  <h3 className="font-display font-bold text-sm text-foreground">
                    {L("Long-Term (3+ Months)", "طويل المدى (أكثر من 3 أشهر)")}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5">
                {(r.longTermRoadmap?.longTerm || []).map((rawAct, index) => {
                  const act = getLocalizedRoadmapStep(rawAct, ar);
                  return (
                    <div
                      key={index}
                      className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <Layers className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AppShell>
  );
}
