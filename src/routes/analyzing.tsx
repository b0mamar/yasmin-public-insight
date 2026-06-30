import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Database, Sparkles, BarChart3 } from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";

export const Route = createFileRoute("/analyzing")({
  head: () => ({ meta: [{ title: "Analyzing… — Public Insight" }] }),
  component: Analyzing,
});

const steps: { Icon: any; key: TKey }[] = [
  { Icon: Database, key: "an_ingesting" },
  { Icon: BarChart3, key: "an_computing" },
  { Icon: Brain, key: "an_running" },
  { Icon: Sparkles, key: "an_generating" },
];

function Analyzing() {
  const { t } = useI18n();
  const nav = useNavigate();
  const [pct, setPct] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const total = 8000;
    const tick = 80;
    let elapsed = 0;
    const id = setInterval(() => {
      elapsed += tick;
      const p = Math.min(100, (elapsed / total) * 100);
      setPct(p);
      setStep(Math.min(steps.length - 1, Math.floor((p / 100) * steps.length)));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => nav({ to: "/results" }), 400);
      }
    }, tick);
    return () => clearInterval(id);
  }, [nav]);

  return (
    <div className="min-h-screen grid place-items-center px-6 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute h-[600px] w-[600px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.24 275 / 0.4), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-24 w-24 rounded-3xl gradient-primary grid place-items-center glow-ring"
          >
            <Brain className="h-12 w-12 text-primary-foreground" />
          </motion.div>
        </div>

        <h1 className="text-3xl font-display font-bold text-gradient mb-2">
          {t("analyzingCampaign")}
        </h1>
        <p className="text-sm text-muted-foreground mb-10">{t("aiCorrelating")}</p>

        <div className="h-2 rounded-full bg-surface border border-border overflow-hidden mb-3">
          <motion.div animate={{ width: `${pct}%` }} className="h-full gradient-primary" />
        </div>
        <div className="text-xs text-muted-foreground mb-10">{Math.round(pct)}%</div>

        <div className="space-y-3 text-start">
          {steps.map((s, i) => (
            <div
              key={s.key}
              className={`flex items-center gap-3 transition ${i <= step ? "opacity-100" : "opacity-30"}`}
            >
              <div
                className={`h-9 w-9 rounded-xl grid place-items-center transition ${i <= step ? "gradient-primary" : "bg-surface border border-border"}`}
              >
                <s.Icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm">{t(s.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
