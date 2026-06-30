import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Check,
  HelpCircle,
  Phone,
  UserPlus,
  Compass,
  UploadCloud,
  Cpu,
  FileText,
  Lightbulb,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "Public Insight — Home" }] }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const ar = lang === "ar";

  // State for interactive stepper
  const [activeStep, setActiveStep] = useState(0);

  const stepsData = [
    {
      title: ar ? "أنشئ حسابك" : "Create your account",
      desc: ar
        ? "سجل كمستخدم أو مؤسسة بمرونة وسرعة تامة للوصول إلى لوحة التحكم."
        : "Sign up as a user or organization to access the dashboard securely.",
      icon: UserPlus,
    },
    {
      title: ar ? "حدد المرحلة" : "Select Phase",
      desc: ar
        ? "اختر محاكاة الحملة والتنبؤ بأدائها مسبقاً (قبل الإطلاق)، أو قياس نتائجك الإعلانية الحقيقية (بعد الإطلاق)."
        : "Choose to simulate and predict performance beforehand (pre-launch), or measure active metrics (post-launch).",
      icon: Compass,
    },
    {
      title: ar ? "ارفع البيانات اللازمة" : "Upload necessary data",
      desc: ar
        ? "اكتب تفاصيل حملتك وميزانيتك أو ارفع لقطة شاشة للوحة إحصائياتك لتعبئتها تلقائياً بالكامل."
        : "Enter campaign text and budget, or upload an insights screenshot to auto-fill metrics.",
      icon: UploadCloud,
    },
    {
      title: ar ? "معالجة فورية بالذكاء الاصطناعي" : "Instant AI processing",
      desc: ar
        ? "يقوم محرك جيميناي المتطور بفحص النصوص والذكاء الثقافي المحلي وتحليل المشاعر الإيجابية فوراً."
        : "Gemini analyzes local dialects, visual dashboard logs, and emotional sentiment levels instantly.",
      icon: Cpu,
    },
    {
      title: ar ? "أحصل على تقرير مفصل" : "Get a detailed report",
      desc: ar
        ? "عرض تقييم شامل، وتوقع دقيق للأداء ونقاط القوة والضعف والفرص المناسبة لتسهيل اتخاذ القرارات."
        : "Access a robust structured breakdown of performance forecasts and audience responses.",
      icon: FileText,
    },
    {
      title: ar ? "توجيهات وتوصيات ذكية" : "Smart guidance & recommendations",
      desc: ar
        ? "الحصول على توصيات مالية واستراتيجية بسيطة واضحة وقابلة للتطبيق فورياً لضمان نجاح الحملة."
        : "Gain straightforward, actionable advice to cut costs and maximize target reach.",
      icon: Lightbulb,
    },
  ];

  const valueProps = [
    ar ? "كشف الأثر الخفي لحملتك" : "Revealing the hidden impact of your campaign",
    ar
      ? "تحويل ضجيج البيانات إلى رؤى عميقة وفورية"
      : "Transforming data noise into deep and instant insights",
    ar ? "سد الفجوة الثقافية في السوق العربي" : "Bridging the cultural gap in the Arab market",
    ar
      ? "توصيات وتوجيهات ذكية مدعومة بالذكاء الاصطناعي"
      : "Smart recommendations and guidance powered by AI",
  ];

  return (
    <AppShell title={t("home")}>
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 pt-6"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-3">
          Public Insight
        </h1>
        <p className="text-lg text-foreground/90 mb-2">{t("tagline")}</p>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">{t("description")}</p>

        <Link
          to="/analyze"
          className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-semibold glow-ring hover:scale-[1.02] transition mt-6"
        >
          {t("analyzeNow")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12">
        {/* Interactive Animated Stepper (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:col-span-4 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  ⚙️ {ar ? "من التسجيل إلى الرؤية" : "From Registration to Insight"}
                </div>
                <div className="font-display font-bold text-lg">
                  {ar ? "رحلة معالجة حملتك الذكية" : "Your Smart Campaign Journey"}
                </div>
              </div>
            </div>

            {/* Stepper pills */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
              {stepsData.map((s, idx) => {
                const IconComponent = s.icon;
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-2.5 rounded-xl border transition text-center flex flex-col items-center gap-1.5 cursor-pointer relative ${
                      isSelected
                        ? "bg-primary/10 border-primary text-primary font-bold shadow-sm"
                        : "bg-surface border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`h-7 w-7 rounded-lg flex items-center justify-center transition ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] leading-tight block truncate w-full">
                      {s.title}
                    </span>
                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stepper Details with AnimatePresence */}
            <div className="bg-surface/50 border border-border/60 rounded-2xl p-5 min-h-[120px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: ar ? 15 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: ar ? -15 : 15 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    {(() => {
                      const StepIcon = stepsData[activeStep].icon;
                      return <StepIcon className="h-5 w-5 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-1">
                      {activeStep + 1}. {stepsData[activeStep].title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stepsData[activeStep].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">
              {ar ? `الخطوة ${activeStep + 1} من 6` : `Step ${activeStep + 1} of 6`}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="px-3 py-1 text-xs rounded-lg border border-border bg-surface hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                {ar ? "السابق" : "Prev"}
              </button>
              <button
                type="button"
                disabled={activeStep === 5}
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="px-3 py-1 text-xs rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                {ar ? "التالي" : "Next"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Why Us section (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  ⭐ {ar ? "ما يميزنا" : "What Makes Us Unique"}
                </div>
                <div className="font-display font-bold">
                  {ar ? "الذكاء والتأثير الإيجابي" : "Our Ultimate Value"}
                </div>
              </div>
            </div>
            <ul className="space-y-4 text-sm mt-2">
              {valueProps.map((text, idx) => (
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <div className="h-7 w-7 rounded-lg bg-primary/15 grid place-items-center shrink-0 mt-0.5 border border-primary/20">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium leading-normal text-xs">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <Link
              to="/signup"
              className="w-full py-2.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/5 transition text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <span>{ar ? "سجل وجرب بنفسك" : "Sign Up & Explore"}</span>
              <ArrowRight className="h-3 w-3 rtl:rotate-180" />
            </Link>
          </div>
        </motion.div>

        <Stat label={t("stat_avgScore")} value="84" suffix="/100" />
        <Stat label={t("stat_engagement")} value="+38%" />
        <Stat label={t("stat_campaigns")} value="1.2k" />
        <Stat label={t("stat_aiInsights")} value="∞" />

        <Link
          to="/faq"
          className="glass-card p-6 md:col-span-3 hover:border-primary/50 transition group flex items-center justify-between"
        >
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {t("faq")}
            </div>
            <div className="font-display font-bold text-lg">{t("questionsAnswered")}</div>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-surface-elevated grid place-items-center group-hover:gradient-primary transition">
            <HelpCircle className="h-5 w-5" />
          </div>
        </Link>

        <Link
          to="/contact"
          className="glass-card p-6 md:col-span-3 hover:border-primary/50 transition group flex items-center justify-between"
        >
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {t("contact")}
            </div>
            <div className="font-display font-bold text-lg">{t("reachTheTeam")}</div>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-surface-elevated grid place-items-center group-hover:gradient-primary transition">
            <Phone className="h-5 w-5" />
          </div>
        </Link>
      </div>
    </AppShell>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-5"
    >
      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="font-display font-bold text-3xl text-gradient">
        {value}
        <span className="text-base text-muted-foreground">{suffix}</span>
      </div>
    </motion.div>
  );
}
