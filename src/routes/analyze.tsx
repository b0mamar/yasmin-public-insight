import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Rocket,
  BarChart3,
  FileText,
  Image as ImageIcon,
  Video,
  Palette,
  Sparkles,
  Flame,
  Target,
  MessageSquare,
  AlertCircle,
  Upload,
  RefreshCw,
  HelpCircle,
  ThumbsUp,
} from "lucide-react";
import { useI18n, type TKey } from "@/lib/i18n";
import {
  simulateABTest,
  checkCampaignSuitability,
  parseScreenshotData,
} from "@/lib/api/gemini.functions";

export const Route = createFileRoute("/analyze")({
  head: () => ({ meta: [{ title: "Analyze — Public Insight" }] }),
  component: Analyze,
});

const dayKeys = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

function Analyze() {
  const { t, lang } = useI18n();
  const ar = lang === "ar";
  const L = (en: string, arT: string) => (ar ? arT : en);
  const nav = useNavigate();
  const [mode, setMode] = useState<"pre" | "post" | null>(null);

  // States for new experimental widgets
  const [copyA, setCopyA] = useState("");
  const [copyB, setCopyB] = useState("");
  const [abLoading, setAbLoading] = useState(false);
  const [abResult, setAbResult] = useState<any>(null);

  const [suitabilityLoading, setSuitabilityLoading] = useState(false);
  const [suitabilityResult, setSuitabilityResult] = useState<any>(null);

  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrMessage, setOcrMessage] = useState("");

  // Pre-launch form state
  const [pre, setPre] = useState({
    name: "",
    type: ["awareness"] as string[],
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
    platforms: [] as string[],
    durationValue: "",
    durationUnit: "days" as "days" | "weeks",
    budget: "",
    contentTypes: [] as string[],
    dialect: "standard", // Cultural dialect setting
  });
  const setP = (k: keyof typeof pre, v: any) => setPre((p) => ({ ...p, [k]: v }));
  const togglePre = (k: "platforms" | "contentTypes", id: string) =>
    setPre((p) => ({
      ...p,
      [k]: p[k].includes(id) ? p[k].filter((x) => x !== id) : [...p[k], id],
    }));

  // Post-launch state
  const [post, setPost] = useState<any>({
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
    dialect: "standard", // Cultural dialect setting
    competitor: "", // Competitor reference
  });
  const [postStep, setPostStep] = useState(0);
  const setPo = (k: string, v: any) => setPost((d: any) => ({ ...d, [k]: v }));
  const togglePoPlat = (id: string) =>
    setPo(
      "platforms",
      post.platforms.includes(id)
        ? post.platforms.filter((p: string) => p !== id)
        : [...post.platforms, id],
    );

  const submitPre = () => {
    sessionStorage.setItem("pi-campaignMode", "pre");
    sessionStorage.setItem("pi-campaign", JSON.stringify(pre));
    sessionStorage.setItem("pi-current-run-id", `run_${Date.now()}`);
    nav({ to: "/analyzing" });
  };
  const submitPost = () => {
    sessionStorage.setItem("pi-campaignMode", "post");
    sessionStorage.setItem("pi-campaign", JSON.stringify(post));
    sessionStorage.setItem("pi-current-run-id", `run_${Date.now()}`);
    nav({ to: "/analyzing" });
  };

  // ----- Mode selection -----
  if (!mode) {
    return (
      <AppShell title={t("analyzeNow")}>
        <div className="max-w-2xl mx-auto py-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-display font-bold mb-2">{t("chooseAnalysisMode")}</h1>
            <p className="text-sm text-muted-foreground mb-8">{t("chooseAnalysisModeIntro")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ModeCard
                Icon={Rocket}
                title={t("preLaunch")}
                desc={t("preLaunchDesc")}
                onClick={() => setMode("pre")}
                highlight
              />
              <ModeCard
                Icon={BarChart3}
                title={t("postLaunch")}
                desc={t("postLaunchDesc")}
                onClick={() => setMode("post")}
              />
            </div>
          </motion.div>
        </div>
      </AppShell>
    );
  }

  // ----- PRE-LAUNCH FORM -----
  if (mode === "pre") {
    const typeOptions = [
      { id: "awareness", label: L("Awareness", "توعوية") },
      { id: "informational", label: L("Informational", "إعلامية") },
      { id: "electoral", label: L("Electoral", "انتخابية") },
      { id: "social", label: L("Social", "اجتماعية") },
      { id: "commercial", label: L("Commercial", "تجارية") },
      { id: "other", label: L("Other", "أخرى") },
    ];
    const platformOptions = [
      { id: "facebook", label: "Facebook", Icon: Facebook },
      { id: "instagram", label: "Instagram", Icon: Instagram },
      { id: "tiktok", label: "TikTok", Icon: () => <span className="text-xs font-bold">TT</span> },
      { id: "linkedin", label: "LinkedIn", Icon: Linkedin },
      { id: "x", label: "X", Icon: () => <span className="text-xs font-bold">X</span> },
      { id: "youtube", label: "YouTube", Icon: Youtube },
    ];
    const contentOptions = [
      { id: "text", label: L("Text posts", "منشورات نصية"), Icon: FileText },
      { id: "image", label: L("Images", "صور"), Icon: ImageIcon },
      { id: "video", label: L("Videos", "فيديوهات"), Icon: Video },
      { id: "design", label: L("Designs", "تصاميم"), Icon: Palette },
    ];

    return (
      <AppShell title={t("analyzeNow")}>
        <div className="max-w-3xl mx-auto py-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => setMode(null)}
              className="text-xs text-muted-foreground hover:text-foreground mb-3"
            >
              ← {t("preLaunch")}
            </button>
            <h1 className="text-3xl font-display font-bold mb-2">
              {L("Pre-launch campaign analysis", "تحليل الحملة قبل الإطلاق")}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {L(
                "Fill in the campaign details to generate a full pre-launch report.",
                "املأ تفاصيل الحملة لإنشاء تقرير تحليلي كامل قبل الإطلاق.",
              )}
            </p>

            <Section title={L("Campaign basics", "بيانات الحملة")}>
              <Field label={L("Campaign name", "اسم الحملة")}>
                <input
                  value={pre.name}
                  onChange={(e) => setP("name", e.target.value)}
                  className={inputCls}
                  placeholder={L("Campaign name", "اسم الحملة")}
                />
              </Field>

              {/* Interactive A/B Copy Tester */}
              <div className="mt-4 mb-6 p-5 rounded-2xl border border-primary/20 bg-primary/5 text-start">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  <h4 className="font-semibold text-sm">
                    {L("Smart A/B Copy Test Simulator", "محاكي اختبار A/B الذكي للنصوص الإعلانية")}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {L(
                    "Compare two ad headlines or slogans. Public Insight AI evaluates each copy using consumer behavioral metrics.",
                    "أدخل نسختين من النص الإعلاني لمقارنتهما ومعرفة أيهما سيحقق أداءً أفضل بناءً على العوامل السيكولوجية والروحية.",
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      {L("Version A Copy", "النسخة أ")}
                    </label>
                    <textarea
                      rows={2}
                      value={copyA}
                      onChange={(e) => setCopyA(e.target.value)}
                      className={`${inputCls} text-xs mt-1`}
                      placeholder={L(
                        "e.g. Save money today and join the elite!",
                        "مثال: وفّر أموالك اليوم وانضم إلى النخبة!",
                      )}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      {L("Version B Copy", "النسخة ب")}
                    </label>
                    <textarea
                      rows={2}
                      value={copyB}
                      onChange={(e) => setCopyB(e.target.value)}
                      className={`${inputCls} text-xs mt-1`}
                      placeholder={L(
                        "e.g. Build better habits that pay off over time.",
                        "مثال: ابنِ عادات أفضل تثمر فائدتها بمرور الوقت.",
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
                      const res = await simulateABTest({ copyA, copyB, language: lang });
                      setAbResult(res);
                    } catch (e) {
                      console.error(e);
                    } finally {
                      setAbLoading(false);
                    }
                  }}
                  className="w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary/10 transition text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {abLoading ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Flame className="h-3.5 w-3.5 text-orange-500" />
                  )}
                  {L("Simulate A/B Performance", "توقع النسخة الأفضل بالذكاء الاصطناعي")}
                </button>

                <AnimatePresence>
                  {abResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 pt-4 border-t border-border overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-4 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-emerald-500">
                            {L("Predicted Champion", "النسخة المتفوقة")}
                          </span>
                          <h5 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {abResult.winner === "A"
                              ? L("Version A Winner", "النسخة أ هي الفائزة")
                              : L("Version B Winner", "النسخة ب هي الفائزة")}
                          </h5>
                        </div>
                        <div className="text-end">
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">
                            {L("AI Confidence", "نسبة ثقة الذكاء")}
                          </span>
                          <div className="text-lg font-extrabold text-primary">
                            {abResult.confidence}%
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-4 text-start">
                        {/* Copy A Scores */}
                        <div className="p-3 bg-surface border border-border rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-bold text-xs">
                              {L("Copy A Psychological Breakdown", "التحليل النفسي للنسخة أ")}
                            </h6>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Emotion", "العاطفة")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-rose-500 rounded-full"
                                  style={{ width: `${abResult.copyA.emotion}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyA.emotion}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Urgency", "الإلحاح")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-amber-500 rounded-full"
                                  style={{ width: `${abResult.copyA.urgency}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyA.urgency}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Clarity", "الوضوح")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: `${abResult.copyA.clarity}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyA.clarity}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Impact", "التأثير")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-indigo-500 rounded-full"
                                  style={{ width: `${abResult.copyA.impact}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyA.impact}/100
                              </span>
                            </div>
                          </div>
                          <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                            {abResult.copyA.psychologyAnalysis}
                          </p>
                        </div>

                        {/* Copy B Scores */}
                        <div className="p-3 bg-surface border border-border rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <h6 className="font-bold text-xs">
                              {L("Copy B Psychological Breakdown", "التحليل النفسي للنسخة ب")}
                            </h6>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs mb-3">
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Emotion", "العاطفة")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-rose-500 rounded-full"
                                  style={{ width: `${abResult.copyB.emotion}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyB.emotion}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Urgency", "الإلحاح")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-amber-500 rounded-full"
                                  style={{ width: `${abResult.copyB.urgency}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyB.urgency}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Clarity", "الوضوح")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: `${abResult.copyB.clarity}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyB.clarity}/100
                              </span>
                            </div>
                            <div>
                              <div className="text-muted-foreground text-[10px]">
                                {L("Impact", "التأثير")}
                              </div>
                              <div className="h-1.5 w-full bg-border rounded-full mt-1 overflow-hidden">
                                <div
                                  className="h-full bg-indigo-500 rounded-full"
                                  style={{ width: `${abResult.copyB.impact}%` }}
                                />
                              </div>
                              <span className="font-semibold text-[10px]">
                                {abResult.copyB.impact}/100
                              </span>
                            </div>
                          </div>
                          <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                            {abResult.copyB.psychologyAnalysis}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 text-xs text-start">
                        <span className="font-bold text-primary block mb-1">
                          {L("Expert Verdict Summary & Advice", "الخلاصة وتوجيهات الخبراء")}
                        </span>
                        <p className="leading-relaxed text-muted-foreground text-[11px]">
                          {abResult.verdict}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Field label={L("Campaign Type (Multi-select)", "نوع الحملة (تحديد متعدد)")}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {typeOptions.map((o) => {
                    const isSelected = pre.type.includes(o.id);
                    return (
                      <Pill
                        key={o.id}
                        active={isSelected}
                        onClick={() => {
                          const updated = pre.type.includes(o.id)
                            ? pre.type.filter((t) => t !== o.id)
                            : [...pre.type, o.id];
                          setP("type", updated.length > 0 ? updated : [o.id]);
                        }}
                      >
                        {o.label}
                      </Pill>
                    );
                  })}
                </div>
              </Field>
              <Field label={L("Organizing entity", "الجهة المنظمة")}>
                <input
                  value={pre.organizer}
                  onChange={(e) => setP("organizer", e.target.value)}
                  className={inputCls}
                  placeholder={L("Institution name", "اسم المؤسسة")}
                />
              </Field>
              <Field label={L("Campaign description", "وصف الحملة")}>
                <textarea
                  rows={3}
                  value={pre.description}
                  onChange={(e) => setP("description", e.target.value)}
                  className={inputCls}
                  placeholder={L("Brief description", "وصف مختصر")}
                />
              </Field>
              <Field label={L("Campaign objectives", "أهداف الحملة")}>
                <textarea
                  rows={3}
                  value={pre.objectives}
                  onChange={(e) => setP("objectives", e.target.value)}
                  className={inputCls}
                  placeholder={L("List the main objectives", "اذكر الأهداف الرئيسية")}
                />
              </Field>
            </Section>

            <Section title={L("Target audience", "الجمهور المستهدف")}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={L("Age range", "الفئة العمرية")}>
                  <input
                    value={pre.age}
                    onChange={(e) => setP("age", e.target.value)}
                    className={inputCls}
                    placeholder="18-24, 25-34…"
                  />
                </Field>
                <Field label={L("Gender", "الجنس")}>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "male", label: L("Male", "ذكور") },
                      { id: "female", label: L("Female", "إناث") },
                      { id: "both", label: L("Both", "كلاهما") },
                    ].map((g) => (
                      <Pill
                        key={g.id}
                        active={pre.gender === g.id}
                        onClick={() => setP("gender", g.id)}
                      >
                        {g.label}
                      </Pill>
                    ))}
                  </div>
                </Field>
                <Field label={L("Location", "الموقع الجغرافي")}>
                  <input
                    value={pre.location}
                    onChange={(e) => setP("location", e.target.value)}
                    className={inputCls}
                    placeholder={L("Region / city", "المنطقة / المدينة")}
                  />
                </Field>
                <Field label={L("Education level", "المستوى التعليمي")}>
                  <input
                    value={pre.education}
                    onChange={(e) => setP("education", e.target.value)}
                    className={inputCls}
                    placeholder={L("e.g. University", "مثال: جامعي")}
                  />
                </Field>
                <Field label={L("Interests", "الاهتمامات")}>
                  <input
                    value={pre.interests}
                    onChange={(e) => setP("interests", e.target.value)}
                    className={inputCls}
                    placeholder={L("Sports, tech, fashion…", "رياضة، تقنية، موضة…")}
                  />
                </Field>
                <Field label={L("Cultural dialect & local identity", "الذكاء الثقافي والمحلي")}>
                  <select
                    value={pre.dialect}
                    onChange={(e) => setP("dialect", e.target.value)}
                    className={`${inputCls} dark:bg-zinc-900 border-border rounded-xl px-3 py-2 text-sm`}
                  >
                    <option value="standard">
                      {L("Standard Arabic (Fusha)", "العربية الفصحى (فصحى)")}
                    </option>
                    <option value="algerian">
                      {L("Algerian Dialect", "لهجة جزائرية (دارجة وعامية)")}
                    </option>
                    <option value="egyptian">{L("Egyptian Dialect", "لهجة مصرية")}</option>
                    <option value="gulf">{L("Gulf Dialect", "لهجة خليجية")}</option>
                    <option value="levantine">{L("Levantine Dialect", "لهجة شامية")}</option>
                    <option value="english">
                      {L("English (Universal)", "الإنجليزية (العالمية)")}
                    </option>
                  </select>
                </Field>
              </div>
            </Section>

            <Section title={L("Message & slogans", "الرسالة والشعارات")}>
              <Field label={L("Main message", "الرسالة الرئيسية للحملة")}>
                <textarea
                  rows={3}
                  value={pre.message}
                  onChange={(e) => setP("message", e.target.value)}
                  className={inputCls}
                  placeholder={L("The main message", "الرسالة الرئيسية")}
                />
                <div className="mt-1 text-xs text-muted-foreground text-end">
                  {pre.message.length} / 240
                </div>
              </Field>
              <Field label={L("Slogans used", "الشعارات المستخدمة")}>
                <input
                  value={pre.slogans}
                  onChange={(e) => setP("slogans", e.target.value)}
                  className={inputCls}
                  placeholder={L("Slogans separated by commas", "افصل بين الشعارات بفواصل")}
                />
              </Field>
            </Section>

            <Section title={L("Channels, duration & budget", "المنصات والمدة والميزانية")}>
              <Field label={L("Target platforms", "المنصات المستهدفة")}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {platformOptions.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => togglePre("platforms", id)}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm transition ${
                        pre.platforms.includes(id)
                          ? "bg-primary/15 border-primary"
                          : "bg-surface border-border"
                      }`}
                    >
                      <Icon className="h-4 w-4" /> {label}
                    </button>
                  ))}
                </div>
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={L("Campaign duration", "مدة الحملة")}>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min={1}
                      value={pre.durationValue}
                      onChange={(e) => setP("durationValue", e.target.value)}
                      className={inputCls}
                      placeholder="0"
                    />
                    <div className="flex gap-1">
                      {[
                        { id: "days", label: L("Days", "أيام") },
                        { id: "weeks", label: L("Weeks", "أسابيع") },
                      ].map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setP("durationUnit", u.id as any)}
                          className={`px-3 rounded-xl text-xs border ${pre.durationUnit === u.id ? "bg-primary/15 border-primary" : "bg-surface border-border"}`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Field>
                <Field label={L("Available budget", "الميزانية المتاحة")}>
                  <input
                    value={pre.budget}
                    onChange={(e) => setP("budget", e.target.value)}
                    className={inputCls}
                    placeholder="$"
                  />
                </Field>
              </div>

              {/* Interactive Suitability Checker */}
              <div className="mt-6 p-4 rounded-xl border border-border bg-surface/50 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold">
                    {L("Budget and Platform Cohesion Checker", "مؤشر توافق الميزانية والمنصات")}
                  </span>
                </div>

                <button
                  type="button"
                  disabled={
                    suitabilityLoading ||
                    !pre.budget ||
                    pre.platforms.length === 0 ||
                    !pre.durationValue
                  }
                  onClick={async () => {
                    setSuitabilityLoading(true);
                    try {
                      const res = await checkCampaignSuitability({
                        data: {
                          budget: pre.budget,
                          platforms: pre.platforms,
                          durationValue: pre.durationValue,
                          durationUnit: pre.durationUnit,
                          language: lang,
                        },
                      });
                      setSuitabilityResult(res);
                    } catch (e) {
                      console.error(e);
                    } finally {
                      setSuitabilityLoading(false);
                    }
                  }}
                  className="self-start px-4 py-1.5 rounded-lg bg-surface border border-border text-xs hover:border-primary transition cursor-pointer disabled:opacity-50"
                >
                  {suitabilityLoading
                    ? L("Calculating with AI...", "جاري الحساب بالذكاء الاصطناعي...")
                    : L("Analyze Compatibility", "تحليل التوافق")}
                </button>

                <AnimatePresence>
                  {suitabilityResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 border-t border-border text-xs overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">
                          {L("Compatibility Rating", "مستوى التوافق")}
                        </span>
                        <span className="font-extrabold text-primary">
                          {suitabilityResult.score}/100
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            suitabilityResult.status === "insufficient"
                              ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                              : suitabilityResult.status === "tight"
                                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                          }`}
                        >
                          {suitabilityResult.status === "insufficient"
                            ? L("Insufficient Budget", "الميزانية غير كافية للمنصات المختارة")
                            : suitabilityResult.status === "tight"
                              ? L("Tight Budget Bounds", "الميزانية محدودة")
                              : L("Adequate & Optimized", "الميزانية مناسبة ومُحسّنة")}
                        </span>
                        <p className="font-semibold text-[11px] text-foreground">
                          {suitabilityResult.message}
                        </p>
                      </div>

                      <p className="text-[11px] text-muted-foreground leading-relaxed mb-2 italic bg-muted/30 p-2.5 rounded-lg border border-border/50">
                        {suitabilityResult.explanation}
                      </p>

                      {suitabilityResult.recommendations &&
                        suitabilityResult.recommendations.length > 0 && (
                          <div className="space-y-1 mt-2">
                            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                              {L("AI Financial Counsel", "توصيات ذكية للميزانية")}
                            </span>
                            {suitabilityResult.recommendations.map((rec: string, idx: number) => (
                              <div
                                key={idx}
                                className="flex items-start gap-1.5 text-[11px] text-muted-foreground"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                <span>{rec}</span>
                              </div>
                            ))}
                          </div>
                        )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Section>

            <Section title={L("Proposed content", "المحتوى المقترح للحملة")}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {contentOptions.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => togglePre("contentTypes", id)}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-sm transition ${
                      pre.contentTypes.includes(id)
                        ? "bg-primary/15 border-primary"
                        : "bg-surface border-border"
                    }`}
                  >
                    <Icon className="h-5 w-5" /> {label}
                  </button>
                ))}
              </div>
            </Section>

            <button
              onClick={submitPre}
              className="w-full mt-8 gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring flex items-center justify-center gap-2"
            >
              {t("submit")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          </motion.div>
        </div>
      </AppShell>
    );
  }

  // ----- POST-LAUNCH FLOW (unchanged) -----
  const stepLabels: TKey[] = ["step_campaign", "step_platforms", "step_metrics"];
  const lastStep = stepLabels.length - 1;
  const metricFields: [string, TKey][] = [
    ["views", "views"],
    ["likes", "likes"],
    ["comments", "comments"],
    ["shares", "shares"],
    ["saves", "saves"],
    ["clicks", "clicks"],
    ["followersBefore", "followersBefore"],
    ["followersAfter", "followersAfter"],
    ["topLocation", "topLocation"],
    ["topAge", "topAge"],
  ];
  const platformsPost = [
    { id: "facebook", label: "Facebook", Icon: Facebook },
    { id: "instagram", label: "Instagram", Icon: Instagram },
    { id: "tiktok", label: "TikTok", Icon: () => <span className="text-sm font-bold">TT</span> },
  ];

  return (
    <AppShell title={t("analyzeNow")}>
      <div className="max-w-2xl mx-auto py-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <button
            onClick={() => setMode(null)}
            className="text-xs text-muted-foreground hover:text-foreground mb-3"
          >
            ← {t("postLaunch")}
          </button>
          <h1 className="text-3xl font-display font-bold mb-2">{t("newAnalysis")}</h1>
          <p className="text-sm text-muted-foreground mb-8">{t("analyzeIntro")}</p>

          <div className="flex items-center gap-2 mb-8">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex-1 flex items-center gap-2">
                <div
                  className={`h-8 w-8 grid place-items-center rounded-full text-xs font-semibold transition ${i <= postStep ? "gradient-primary text-primary-foreground" : "bg-surface border border-border text-muted-foreground"}`}
                >
                  {i < postStep ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <div className="text-xs hidden sm:block">{t(label)}</div>
                {i < stepLabels.length - 1 && (
                  <div className={`flex-1 h-px ${i < postStep ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {postStep === 0 && (
            <Section title={t("step_campaign")}>
              <Field label={t("campaignName")}>
                <input
                  value={post.name}
                  onChange={(e) => setPo("name", e.target.value)}
                  className={inputCls}
                  placeholder={t("campaignNamePh")}
                />
              </Field>
              <Field label={t("targetAudience")}>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    value={post.age}
                    onChange={(e) => setPo("age", e.target.value)}
                    placeholder={t("age")}
                    className={inputCls}
                  />
                  <input
                    value={post.gender}
                    onChange={(e) => setPo("gender", e.target.value)}
                    placeholder={t("gender")}
                    className={inputCls}
                  />
                  <input
                    value={post.location}
                    onChange={(e) => setPo("location", e.target.value)}
                    placeholder={t("location")}
                    className={inputCls}
                  />
                </div>
              </Field>
              <Field label={t("duration")}>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={post.start}
                    onChange={(e) => setPo("start", e.target.value)}
                    className={inputCls}
                  />
                  <input
                    type="date"
                    value={post.end}
                    onChange={(e) => setPo("end", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t("budgetOptional")}>
                  <input
                    value={post.budget}
                    onChange={(e) => setPo("budget", e.target.value)}
                    className={inputCls}
                    placeholder="$"
                  />
                </Field>
                <Field label={L("Competitor reference / Page URL", "مرجع صفحة المنافس")}>
                  <input
                    value={post.competitor || ""}
                    onChange={(e) => setPo("competitor", e.target.value)}
                    className={inputCls}
                    placeholder="e.g. competitor-brand.com"
                  />
                </Field>
              </div>
              <Field label={L("Local Dialect", "اللهجة الثقافية المحلية")}>
                <select
                  value={post.dialect}
                  onChange={(e) => setPo("dialect", e.target.value)}
                  className={`${inputCls} dark:bg-zinc-900 border-border rounded-xl px-3 py-2 text-sm`}
                >
                  <option value="standard">
                    {L("Standard Arabic (Fusha)", "العربية الفصحى (فصحى)")}
                  </option>
                  <option value="algerian">
                    {L("Algerian Dialect", "لهجة جزائرية (دارجة وعامية")}
                  </option>
                  <option value="egyptian">{L("Egyptian Dialect", "لهجة مصرية")}</option>
                  <option value="gulf">{L("Gulf Dialect", "لهجة خليجية")}</option>
                  <option value="levantine">{L("Levantine Dialect", "لهجة شامية")}</option>
                  <option value="english">
                    {L("English (Universal)", "الإنجليزية (العالمية)")}
                  </option>
                </select>
              </Field>
            </Section>
          )}

          {postStep === 1 && (
            <Section title={t("step_platforms")}>
              <Field label={t("platformsLabel")}>
                <div className="grid grid-cols-3 gap-2">
                  {platformsPost.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      onClick={() => togglePoPlat(id)}
                      className={`p-4 rounded-xl border flex flex-col items-center gap-2 text-sm transition ${post.platforms.includes(id) ? "bg-primary/15 border-primary" : "bg-surface border-border"}`}
                    >
                      <Icon className="h-5 w-5" /> {label}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label={t("postUrl")}>
                <input
                  value={post.postUrl}
                  onChange={(e) => setPo("postUrl", e.target.value)}
                  placeholder="https://…"
                  className={inputCls}
                />
              </Field>
            </Section>
          )}

          {postStep === 2 && (
            <Section title={t("step_metrics")}>
              {/* Dynamic OCR Screenshot Reader */}
              <div className="mb-6 p-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 flex flex-col items-center text-center">
                <Upload className="h-8 w-8 text-primary/75 mb-2" />
                <span className="text-xs font-bold block mb-1">
                  {L(
                    "Auto-Extract Metrics from Screenshot",
                    "استخراج الإحصائيات تلقائياً من لقطة شاشة",
                  )}
                </span>
                <p className="text-[10px] text-muted-foreground max-w-sm mb-3">
                  {L(
                    "Upload clean campaign graph or insights report (FB/IG/TikTok Manager). Gemini extracts data to auto-fill form values instantly.",
                    "ارفع صورة للوحة الإحصائيات من مدير الإعلانات وسيقوم محرك جيميناي باستخراج الأرقام وتعبئتها بالكامل يدوياً.",
                  )}
                </p>

                <input
                  type="file"
                  accept="image/*"
                  id="ocr-uploader-file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = async () => {
                        const base64 = reader.result as string;
                        setOcrLoading(true);
                        setOcrMessage(
                          L(
                            "Google Gemini is executing OCR details extraction...",
                            "جاري فك تشفير الصورة واستخراج الأرقام بالذكاء الاصطناعي...",
                          ),
                        );
                        try {
                          const res = await parseScreenshotData({
                            data: { imageBase64: base64, mimeType: file.type, language: lang },
                          });
                          if (res) {
                            if (res.views !== undefined && res.views !== null)
                              setPo("views", String(res.views));
                            if (res.likes !== undefined && res.likes !== null)
                              setPo("likes", String(res.likes));
                            if (res.comments !== undefined && res.comments !== null)
                              setPo("comments", String(res.comments));
                            if (res.shares !== undefined && res.shares !== null)
                              setPo("shares", String(res.shares));
                            if (res.saves !== undefined && res.saves !== null)
                              setPo("saves", String(res.saves));
                            if (res.clicks !== undefined && res.clicks !== null)
                              setPo("clicks", String(res.clicks));
                            setOcrMessage(
                              L(
                                "Data extracted successfully and populated below!",
                                "تم استخراج البيانات وتعبئتها في النموذج أدناه بنجاح!",
                              ) +
                                " (" +
                                res.extractedMeta +
                                ")",
                            );
                          }
                        } catch (err) {
                          console.error(err);
                          setOcrMessage(
                            L(
                              "Failed to scan visual elements. Fill metrics manually instead.",
                              "تعذر مسح الصورة، يرجى كتابة البيانات يدوياً بمرونة.",
                            ),
                          );
                        } finally {
                          setOcrLoading(false);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />

                <label
                  htmlFor="ocr-uploader-file"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 cursor-pointer flex items-center gap-1 transition"
                >
                  {ocrLoading ? (
                    <RefreshCw className="h-3 w-3 animate-spin" />
                  ) : (
                    <ImageIcon className="h-3 w-3" />
                  )}
                  {L("Upload Dashboard Image", "ارفع صورة الإحصائيات")}
                </label>

                {ocrMessage && (
                  <div className="mt-3 text-[11px] text-primary bg-primary/10 px-3 py-1.5 rounded-lg font-medium">
                    {ocrMessage}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {metricFields.map(([k, lk]) => (
                  <Field key={k} label={t(lk)}>
                    <input
                      value={post[k]}
                      onChange={(e) => setPo(k, e.target.value)}
                      className={inputCls}
                    />
                  </Field>
                ))}
              </div>
            </Section>
          )}

          <div className="flex gap-3 mt-8">
            {postStep > 0 && (
              <button
                onClick={() => setPostStep(postStep - 1)}
                className="flex-1 py-3.5 rounded-2xl border border-border bg-surface font-medium hover:bg-surface-elevated transition"
              >
                {t("back")}
              </button>
            )}
            {postStep < lastStep ? (
              <button
                onClick={() => setPostStep(postStep + 1)}
                className="flex-1 gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold glow-ring flex items-center justify-center gap-2"
              >
                {t("continue")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            ) : (
              <button
                onClick={submitPost}
                className="flex-1 gradient-primary text-primary-foreground py-3.5 rounded-2xl font-semibold glow-ring"
              >
                {t("submit")}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}

const inputCls =
  "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-6 space-y-5 mb-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        {title}
      </div>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs text-muted-foreground mb-1.5 font-medium">{label}</span>
      {children}
    </label>
  );
}
function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-3 py-2.5 rounded-xl text-sm border transition ${
        active
          ? "bg-primary/15 border-primary text-foreground"
          : "bg-surface border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
function ModeCard({
  Icon,
  title,
  desc,
  onClick,
  highlight,
}: {
  Icon: any;
  title: string;
  desc: string;
  onClick: () => void;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-start glass-card p-6 hover:scale-[1.01] transition relative overflow-hidden group ${highlight ? "ring-1 ring-primary/40" : ""}`}
    >
      {highlight && (
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, oklch(0.55 0.24 275 / 0.4), transparent 60%)",
          }}
        />
      )}
      <div className="relative">
        <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center glow-ring mb-4">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="font-display font-bold text-lg mb-1">{title}</div>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-medium">
          {title} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
        </div>
      </div>
    </button>
  );
}
