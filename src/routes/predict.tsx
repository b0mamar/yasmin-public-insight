import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { predict, type PrelaunchInput } from "@/lib/mock-prediction";

export const Route = createFileRoute("/predict")({
  head: () => ({ meta: [{ title: "Prediction — Public Insight" }] }),
  component: Predict,
});

function Predict() {
  const { t, lang } = useI18n();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);
  const nav = useNavigate();
  const [input, setInput] = useState<PrelaunchInput | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("pi-prelaunch");
    if (!raw) {
      nav({ to: "/analyze" });
      return;
    }
    setInput(JSON.parse(raw));
  }, [nav]);

  const prediction = useMemo(() => (input ? predict(input) : null), [input]);

  if (!input || !prediction) {
    return (
      <AppShell>
        <div className="py-20 text-center text-muted-foreground">{t("loading")}</div>
      </AppShell>
    );
  }

  const statusLabel =
    prediction.status === "ready"
      ? L("Ready to launch", "جاهزة للإطلاق")
      : prediction.status === "almost"
        ? L("Almost ready", "شبه جاهزة")
        : L("Needs work", "تحتاج تحسينات");
  const statusColor =
    prediction.status === "ready"
      ? "text-success"
      : prediction.status === "almost"
        ? "text-warning"
        : "text-destructive";
  const statusDot =
    prediction.status === "ready"
      ? "bg-success"
      : prediction.status === "almost"
        ? "bg-warning"
        : "bg-destructive";

  const toneIcon = (tone: string) =>
    tone === "good" ? (
      <CheckCircle2 className="h-4 w-4 text-success" />
    ) : tone === "warn" ? (
      <AlertTriangle className="h-4 w-4 text-warning" />
    ) : tone === "bad" ? (
      <XCircle className="h-4 w-4 text-destructive" />
    ) : (
      <Info className="h-4 w-4 text-muted-foreground" />
    );

  const reachLabel =
    prediction.reachLevel === "high"
      ? L("High", "مرتفع")
      : prediction.reachLevel === "medium"
        ? L("Medium", "متوسط")
        : L("Low", "منخفض");
  const engLabel =
    prediction.engagementLevel === "high"
      ? L("High", "مرتفع")
      : prediction.engagementLevel === "medium"
        ? L("Medium", "متوسط")
        : L("Low", "منخفض");

  return (
    <AppShell title={L("Pre-launch Report", "تقرير ما قبل الإطلاق")}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-5 pb-10 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              {L("Campaign", "الحملة")}
            </div>
            <h1 className="text-3xl font-display font-bold">
              {input.name || L("Untitled", "بدون اسم")}
            </h1>
            {input.organizer && (
              <div className="text-sm text-muted-foreground mt-1">{input.organizer}</div>
            )}
          </div>
          <button
            onClick={() => nav({ to: "/analyze" })}
            className="text-xs px-3 py-2 rounded-lg border border-border bg-surface hover:bg-surface-elevated transition"
          >
            {L("Back to setup", "العودة للنموذج")}
          </button>
        </div>

        {/* Score */}
        <div className="glass-card p-8 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, oklch(0.55 0.24 275 / 0.5), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {L("Predicted success score", "درجة النجاح المتوقعة")}
            </div>
            <div className="font-display font-bold text-7xl text-gradient leading-none">
              {prediction.score}
              <span className="text-2xl text-muted-foreground">/100</span>
            </div>
            <div
              className={`mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated border border-border ${statusColor}`}
            >
              <span className={`h-2 w-2 rounded-full ${statusDot}`} />
              <span className="text-sm font-medium">{statusLabel}</span>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3" /> {L("Expected reach", "مستوى الوصول المتوقع")}
            </div>
            <div className="font-display font-bold text-3xl text-gradient">{reachLabel}</div>
          </div>
          <div className="glass-card p-5">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1.5">
              <Target className="h-3 w-3" /> {L("Expected engagement", "مستوى التفاعل المتوقع")}
            </div>
            <div className="font-display font-bold text-3xl text-gradient">{engLabel}</div>
          </div>
        </div>

        {/* 14-point report */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <div className="font-display font-bold">
              {L("Full analysis report", "التقرير التحليلي الكامل")}
            </div>
          </div>
          <div className="space-y-3">
            {prediction.report.map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 shrink-0 rounded-lg bg-surface-elevated grid place-items-center text-xs font-bold text-primary">
                    {p.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      {toneIcon(p.tone)}
                      <div className="font-semibold text-sm">{ar ? p.titleAr : p.titleEn}</div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ar ? p.bodyAr : p.bodyEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AppShell>
  );
}
