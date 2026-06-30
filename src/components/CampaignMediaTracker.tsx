import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  TrendingUp,
  Smile,
  Meh,
  Frown,
  Plus,
  Search,
  Sparkles,
  Globe,
  Calendar,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  FileText,
  Trash2,
  PieChart,
} from "lucide-react";

export interface ArticleMention {
  id: string;
  source: string;
  sourceLogo?: string;
  headline: string;
  snippet: string;
  sentiment: "positive" | "negative" | "neutral";
  confidence: number; // 0-100
  publishedAt: string;
  reach: "high" | "medium" | "low";
  url: string;
}

interface CampaignMediaTrackerProps {
  campaignId: string;
  campaignName: string;
  overallScore: number;
  dialect?: string;
  campaignType?: string;
  isArabic?: boolean;
}

export const CampaignMediaTracker: React.FC<CampaignMediaTrackerProps> = ({
  campaignId,
  campaignName,
  overallScore,
  dialect = "standard",
  campaignType = "awareness",
  isArabic = true,
}) => {
  const L = (en: string, ar: string) => (isArabic ? ar : en);

  // Default pre-seeded news articles mentioning this specific campaign
  const initialMentions = useMemo<ArticleMention[]>(() => {
    const isPostLaunch = overallScore >= 60;
    const name = campaignName || L("Our Campaign", "حملتنا الإعلانية");

    const positiveSentimentAr = [
      `أكد خبراء التسويق اليوم أن حملة "${name}" قد نجحت في إرساء معايير جديدة للتواصل الرقمي الإقليمي. من خلال لغة مبتكرة وأسلوب مخاطبة قريب من الجمهور، حققت الحملة استجابة تفاعلية غير مسبوقة وتجاوبًا واسعًا، لا سيما بين الفئات الشابة التي أبدت حماستها الكبيرة للأفكار المطروحة.`,
      `رصدت منصات التحليل الاقتصادي صعودًا قياسيًا لمؤشرات التفاعل مع مبادرة "${name}". وأشارت التقارير إلى أن استجابة الجمهور للمحتوى البصري والتفاعلي كانت ممتازة للغاية، مما يمهد الطريق لمستويات نمو قياسية وعوائد استثمارية قوية تتفوق على نظيراتها في السوق المحلي الإقليمي.`,
    ];

    const positiveSentimentEn = [
      `Marketing strategists confirmed today that the "${name}" campaign has successfully established new benchmarks for regional digital communication. Through innovative messaging and high audience alignment, the initiative achieved unprecedented engagement, especially among younger demographics.`,
      `Financial and digital tracking platforms reported a record surge in metrics following the launch of "${name}". Experts noted that the audience response to interactive visual assets has been exceptionally strong, paving the way for organic viral growth.`,
    ];

    const neutralSentimentAr = [
      `تناولت الصحف المحلية تواصل فعاليات حملة "${name}" في أسبوعها الثاني، حيث استعرض المحللون الجوانب الفنية والتصميمية المتبعة في صياغة الرسائل الإعلانية. وتستمر الحملة في تقديم محتواها الموجه للجمهور وسط ترقب لمدى تأثيرها النهائي على معدلات الاستهلاك والوعي العام.`,
      `أطلقت الجهات المنظمة تقريرها الدوري حول مسار خطة "${name}". يعكس التقرير أرقامًا متزنة تتماشى تمامًا مع التوقعات الأولية الموضوعة في بداية الربع الحالي، مع استقرار في نبرة الحوار المجتمعي وتوزيع جغرافي متساوٍ لنسب المشاهدة عبر المنصات الرئيسية.`,
    ];

    const neutralSentimentEn = [
      `Local media covered the ongoing progress of "${name}" in its second week, reviewing the technical aspects and visual assets implemented in the brand messaging. The campaign continues its general rollout as analysts watch for the final impact on overall market awareness.`,
      `The organizing board released its mid-term audit on the development of "${name}". The data shows balanced progress aligned with initial quarterly forecasts, with a stable conversational tone and distributed viewership across main social feeds.`,
    ];

    const negativeSentimentAr = [
      `أثار التوزيع المتسارع لإعلانات "${name}" بعض التحفظات لدى فئة محدودة من المتابعين، حيث أشار تقرير نقدي إلى أن وتيرة ظهور المحتوى المكثف قد تسبب نوعًا من "الإرهاق الإعلاني". وطالب بعض المدونين بإعادة ضبط التكرار لضمان تجربة تصفح أكثر سلاسة للمستهلك المحلي.`,
    ];

    const negativeSentimentEn = [
      `The rapid distribution of the "${name}" campaign has triggered slight critiques among a segment of users, who pointed out that the high ad frequency might lead to temporary 'ad fatigue'. Industry bloggers suggested optimizing delivery rates to ensure better overall brand recall.`,
    ];

    return [
      {
        id: "m1",
        source: L("الخبر الجزائرية", "El Khabar Daily"),
        headline: L(
          `Campaign "${name}" sets high benchmarks for digital communication`,
          `حملة "${name}" ترسم معالم جديدة للتواصل الإعلاني الرقمي`,
        ),
        snippet: L(positiveSentimentEn[0], positiveSentimentAr[0]),
        sentiment: "positive",
        confidence: 94,
        publishedAt: "2026-06-27",
        reach: "high",
        url: "https://elkhabar.com/news/campaign-analysis",
      },
      {
        id: "m2",
        source: L("كل شيء عن الجزائر (TSA)", "TSA Algérie"),
        headline: L(
          `Analysis of "${name}" strategy: A localized approach`,
          `تحليل أبعاد استراتيجية "${name}": قراءة في التوطين اللغوي`,
        ),
        snippet: L(neutralSentimentEn[0], neutralSentimentAr[0]),
        sentiment: "neutral",
        confidence: 88,
        publishedAt: "2026-06-26",
        reach: "medium",
        url: "https://tsa-algerie.com/news/analysis-algeria",
      },
      {
        id: "m3",
        source: L("بوابة الاقتصاد الرقمي MENA", "MENA Digital Gate"),
        headline: L(
          `Record interactions tracked for "${name}" branding efforts`,
          `صعود قياسي في مؤشرات التفاعل الرقمي لمشروع "${name}"`,
        ),
        snippet: L(positiveSentimentEn[1], positiveSentimentAr[1]),
        sentiment: "positive",
        confidence: 91,
        publishedAt: "2026-06-25",
        reach: "high",
        url: "https://menadigital.net/business/article-record",
      },
      {
        id: "m4",
        source: L("صدى الجزائر الرقمي", "Echourouk Tech"),
        headline: L(
          `Audience feedback regarding frequency of "${name}" ads`,
          `ملاحظات نقدية حول وتيرة ظهور وتكرار إعلانات "${name}"`,
        ),
        snippet: L(negativeSentimentEn[0], negativeSentimentAr[0]),
        sentiment: "negative",
        confidence: 85,
        publishedAt: "2026-06-24",
        reach: "low",
        url: "https://echouroukonline.com/news/ad-fatigue-critique",
      },
    ];
  }, [campaignName, overallScore, isArabic]);

  // Local state for list of tracked mentions
  const [mentions, setMentions] = useState<ArticleMention[]>(() => {
    // Attempt load from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`pi-mentions-${campaignId}`);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error("Error reading mentions from storage:", e);
        }
      }
    }
    return initialMentions;
  });

  // Save mentions whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`pi-mentions-${campaignId}`, JSON.stringify(mentions));
    }
  }, [mentions, campaignId]);

  // State for adding a new manual article mention to track
  const [newSource, setNewSource] = useState("");
  const [newHeadline, setNewHeadline] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState<
    "all" | "positive" | "neutral" | "negative"
  >("all");
  const [isScraping, setIsScraping] = useState(false);

  // Auto-sentiment analyzer simulation
  const analyzeSentimentAndAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource || !newHeadline || !newContent) return;

    setIsAnalyzing(true);

    // Simulate AI Text Analysis processing time
    setTimeout(() => {
      const lowerText = (newHeadline + " " + newContent).toLowerCase();

      // Basic rule-based sentiment classifier for simulation (looks at Arabic & English keywords)
      let sentiment: "positive" | "negative" | "neutral" = "neutral";
      let confidence = 75;

      const positiveWords = [
        "ناجح",
        "ممتاز",
        "رائع",
        "تفوق",
        "تطور",
        "نمو",
        "حب",
        "إبداع",
        "مبتكر",
        "نجاح",
        "excel",
        "success",
        "innovat",
        "great",
        "positive",
        "love",
        "popular",
        "growth",
        "boost",
        "outstanding",
      ];
      const negativeWords = [
        "ضعيف",
        "سيء",
        "قلق",
        "خسارة",
        "فشل",
        "إرهاق",
        "ملل",
        "تراجع",
        "انتقاد",
        "صعب",
        "عقبات",
        "poor",
        "fail",
        "fatigue",
        "bad",
        "slow",
        "negative",
        "bored",
        "complain",
        "annoy",
        "drop",
      ];

      let positiveCount = 0;
      let negativeCount = 0;

      positiveWords.forEach((w) => {
        if (lowerText.includes(w)) positiveCount++;
      });
      negativeWords.forEach((w) => {
        if (lowerText.includes(w)) negativeCount++;
      });

      if (positiveCount > negativeCount) {
        sentiment = "positive";
        confidence = Math.min(98, 80 + (positiveCount - negativeCount) * 4);
      } else if (negativeCount > positiveCount) {
        sentiment = "negative";
        confidence = Math.min(95, 78 + (negativeCount - positiveCount) * 4);
      } else {
        sentiment = "neutral";
        confidence = Math.min(90, 70 + Math.floor(Math.random() * 15));
      }

      const newMention: ArticleMention = {
        id: `m_${Date.now()}`,
        source: newSource,
        headline: newHeadline,
        snippet: newContent,
        sentiment,
        confidence,
        publishedAt: new Date().toISOString().split("T")[0],
        reach: Math.random() > 0.6 ? "high" : Math.random() > 0.4 ? "medium" : "low",
        url: "https://local-track.ai/source/" + Math.floor(Math.random() * 10000),
      };

      setMentions((prev) => [newMention, ...prev]);

      // Reset inputs
      setNewSource("");
      setNewHeadline("");
      setNewContent("");
      setIsAnalyzing(false);
      setShowAddForm(false);
    }, 1500);
  };

  // Delete mention
  const handleDeleteMention = (id: string) => {
    setMentions((prev) => prev.filter((m) => m.id !== id));
  };

  // Reset to default
  const handleReset = () => {
    if (
      confirm(
        L(
          "Are you sure you want to restore default tracked mentions?",
          "هل أنت متأكد من رغبتك في استعادة المقالات الافتراضية؟",
        ),
      )
    ) {
      setMentions(initialMentions);
    }
  };

  // Scraping simulation (fetching new web results)
  const handleSimulateScraping = () => {
    setIsScraping(true);
    setTimeout(() => {
      const name = campaignName || L("Our Campaign", "حملتنا الإعلانية");
      const generatedMention: ArticleMention = {
        id: `scraped_${Date.now()}`,
        source:
          Math.random() > 0.5
            ? L("بوابة الوطن نيوز", "El Watan Info")
            : L("تكنولوجيا الجزائر الاقتصادية", "Algeria Tech Focus"),
        headline: L(
          `Fresh analysis reports high interaction on "${name}" initiative`,
          `دراسة مستقلة تؤكد توسع رقعة وصول مبادرة "${name}"`,
        ),
        snippet: L(
          `New independent audits confirm a sustained organic response for "${name}" over the past 48 hours. The visual materials deployed have sparked discussions on localized marketing best practices.`,
          `كشفت دراسة مستقلة أجريت خلال الـ 48 ساعة الماضية عن تسارع وتيرة التفاعل الإيجابي مع مبادرة "${name}"، حيث ساهم الأسلوب البصري المبتكر في إثارة اهتمام أصحاب المصلحة ودفع معدلات المشاركة العضوية لأعلى مستوياتها.`,
        ),
        sentiment: "positive",
        confidence: 89,
        publishedAt: new Date().toISOString().split("T")[0],
        reach: "medium",
        url: "https://elwatan-news.com/tech-analytics",
      };

      setMentions((prev) => [generatedMention, ...prev]);
      setIsScraping(false);
    }, 2000);
  };

  // Statistics calculation
  const stats = useMemo(() => {
    const total = mentions.length;
    if (total === 0) return { posPercent: 0, neuPercent: 0, negPercent: 0, score: 0 };

    const pos = mentions.filter((m) => m.sentiment === "positive").length;
    const neu = mentions.filter((m) => m.sentiment === "neutral").length;
    const neg = mentions.filter((m) => m.sentiment === "negative").length;

    const posPercent = Math.round((pos / total) * 100);
    const neuPercent = Math.round((neu / total) * 100);
    const negPercent = Math.round((neg / total) * 100);

    // Score from 0 to 100, where positive = 100, neutral = 50, negative = 0
    const calculatedScore = Math.round(((pos * 100 + neu * 50 + neg * 0) / (total * 100)) * 100);

    return { pos, neu, neg, total, posPercent, neuPercent, negPercent, score: calculatedScore };
  }, [mentions]);

  // Filtering
  const filteredMentions = useMemo(() => {
    return mentions.filter((m) => {
      const matchesSearch =
        m.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.snippet.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSentiment = sentimentFilter === "all" || m.sentiment === sentimentFilter;

      return matchesSearch && matchesSentiment;
    });
  }, [mentions, searchQuery, sentimentFilter]);

  return (
    <div id="media-mentions-tracker-section" className="space-y-6">
      {/* 1. Header & Quick Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <Newspaper className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {L("PRESS & MEDIA SENTIMENT RECONNAISSANCE", "تتبع الإعلام ومؤشرات الرأي العام")}
            </span>
          </div>
          <h2 className="text-xl font-bold font-display text-foreground mt-1">
            {L("Media Mentions & News Tracker", "متتبع المقالات وأخبار الحملة")}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {L(
              `Autonomous listening engine for articles referencing "${campaignName}" with NLP sentiment classification.`,
              `محرك رصد تفاعلي يقوم بمسح المقالات التي تذكر "${campaignName}" وتحليل نبرة النصوص تلقائياً.`,
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleSimulateScraping}
            disabled={isScraping}
            className="px-3.5 py-2 text-xs font-bold rounded-xl border border-border bg-surface hover:bg-surface-elevated text-foreground flex items-center gap-2 transition disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-primary ${isScraping ? "animate-spin" : ""}`} />
            {isScraping
              ? L("Scraping Web...", "جارٍ البحث والرصد...")
              : L("Fetch Mentions", "ابحث عن أخبار جديدة")}
          </button>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 text-xs font-bold rounded-xl gradient-primary text-primary-foreground flex items-center gap-2 transition hover:scale-[1.01] glow-ring cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            {L("Analyze New Text", "حلل نصاً أو مقالاً")}
          </button>

          <button
            onClick={handleReset}
            className="p-2 text-xs font-medium rounded-xl border border-border text-muted-foreground hover:text-foreground bg-surface hover:bg-surface-elevated transition cursor-pointer"
            title={L("Restore defaults", "استعادة الافتراضي")}
          >
            <Trash2 className="h-4 w-4 text-muted-foreground/80 hover:text-destructive" />
          </button>
        </div>
      </div>

      {/* 2. Interactive Analysis Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form
              onSubmit={analyzeSentimentAndAdd}
              className="glass-card p-5 border border-primary/20 bg-primary/5 space-y-4 rounded-2xl"
            >
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4 animate-pulse" />
                <h3 className="text-sm font-bold font-display">
                  {L(
                    "Submit Text for Instant NLP Analysis",
                    "إدخال نص مقال لتحليله الفوري بالذكاء الاصطناعي",
                  )}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-muted-foreground mb-1">
                    {L("Media Source Name", "اسم وسيلة الإعلام / المصدر")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. El Watan, LinkedIn Hub"
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    className="w-full bg-surface/80 border border-border/50 rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-muted-foreground mb-1">
                    {L("Article Headline", "عنوان المقال / المنشور")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Exciting insights on the campaign"
                    value={newHeadline}
                    onChange={(e) => setNewHeadline(e.target.value)}
                    className="w-full bg-surface/80 border border-border/50 rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-muted-foreground mb-1">
                  {L("Text Snippet / Full Paragraph", "فقرة النص أو محتوى الخبر")}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={L(
                    "Paste the paragraph containing campaign mentions to classify sentiment...",
                    "ألصق هنا النص الذي يتضمن ذكر اسم الحملة لتحليل نبرته العاطفية...",
                  )}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-surface/80 border border-border/50 rounded-xl p-3 text-xs text-foreground outline-none focus:border-primary transition resize-none"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-2 text-xs font-semibold rounded-lg text-muted-foreground hover:bg-surface-elevated transition"
                >
                  {L("Cancel", "إلغاء")}
                </button>
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="px-4 py-2 text-xs font-bold rounded-lg gradient-primary text-primary-foreground transition flex items-center gap-1.5"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="h-3 w-3 animate-spin" />
                      {L("Analyzing...", "جاري التحليل...")}
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      {L("Analyze Mentions", "ابدأ التحليل")}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Statistics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Brand Net Sentiment Card */}
        <div className="glass-card p-5 lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2">
              {L("Net Brand Sentiment Index", "مؤشر الرأي العام الصافي للعلامة")}
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-display text-foreground">
                {stats.score}
              </span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
              {stats.score >= 70
                ? L(
                    "Highly favorable public perception across monitored channels.",
                    "رأي عام إيجابي للغاية عبر سائر القنوات الإعلامية المرصودة.",
                  )
                : stats.score >= 45
                  ? L(
                      "Neutral or balanced media coverage with minor criticisms.",
                      "تغطية إعلامية متوازنة ومعتدلة مع بعض الملاحظات البسيطة.",
                    )
                  : L(
                      "Attention recommended: Underperforming brand sentiment.",
                      "انتباه: تغطية إعلامية سلبية تحتاج إلى تدخل سريع لإعادة ضبط الرسائل.",
                    )}
            </p>
          </div>

          <div className="border-t border-border/40 pt-3 mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              {L(`Total: ${stats.total} mentions`, `الإجمالي: ${stats.total} إشارات`)}
            </span>
            <span className="font-mono text-[10px] uppercase bg-surface px-2 py-0.5 rounded border border-border">
              {L("NLP CLASSIFIER", "مُصنف عاطفي")}
            </span>
          </div>
        </div>

        {/* Breakdown Progress Card */}
        <div className="glass-card p-5 lg:col-span-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-4">
              {L("Sentiment Volume Breakdown", "توزيع نبرات الرأي العام المقاسة")}
            </h3>

            <div className="space-y-4">
              {/* Positive */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5 text-success font-semibold">
                    <Smile className="h-4 w-4" />
                    <span>{L("Positive Mentions", "الإشارات الإيجابية")}</span>
                  </div>
                  <span className="font-mono font-bold text-foreground">
                    {stats.posPercent}% ({stats.pos})
                  </span>
                </div>
                <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success rounded-full"
                    style={{ width: `${stats.posPercent}%` }}
                  />
                </div>
              </div>

              {/* Neutral */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5 text-warning font-semibold">
                    <Meh className="h-4 w-4" />
                    <span>{L("Neutral Mentions", "الإشارات المحايدة")}</span>
                  </div>
                  <span className="font-mono font-bold text-foreground">
                    {stats.neuPercent}% ({stats.neu})
                  </span>
                </div>
                <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-warning rounded-full"
                    style={{ width: `${stats.neuPercent}%` }}
                  />
                </div>
              </div>

              {/* Negative */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1.5 text-destructive font-semibold">
                    <Frown className="h-4 w-4" />
                    <span>{L("Negative / Critiques", "التحفظات والنقد")}</span>
                  </div>
                  <span className="font-mono font-bold text-foreground">
                    {stats.negPercent}% ({stats.neg})
                  </span>
                </div>
                <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-destructive rounded-full"
                    style={{ width: `${stats.negPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-muted-foreground text-center mt-3 pt-3 border-t border-border/40">
            {L(
              "Continuous NLP processing of syndicated RSS news feeds and digital publications.",
              "تحديث فوري تلقائي لمقالات الصحف الجزائرية والمنشورات عبر شبكات الويب.",
            )}
          </div>
        </div>
      </div>

      {/* 4. Filter and List of Mentions */}
      <div className="space-y-4">
        {/* Search & Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={L(
                "Search tracked news and articles...",
                "ابحث في محتوى وتفاصيل الأخبار المرصودة...",
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface/50 border border-border/50 rounded-xl py-2 pl-9 pr-4 text-xs text-foreground outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex gap-1.5 shrink-0">
            <button
              onClick={() => setSentimentFilter("all")}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${
                sentimentFilter === "all"
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"
              }`}
            >
              {L("All Mentions", "الكل")}
            </button>
            <button
              onClick={() => setSentimentFilter("positive")}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${
                sentimentFilter === "positive"
                  ? "bg-success/15 border-success/30 text-success"
                  : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"
              }`}
            >
              {L("Positive", "إيجابي")}
            </button>
            <button
              onClick={() => setSentimentFilter("neutral")}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${
                sentimentFilter === "neutral"
                  ? "bg-warning/15 border-warning/30 text-warning"
                  : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"
              }`}
            >
              {L("Neutral", "محايد")}
            </button>
            <button
              onClick={() => setSentimentFilter("negative")}
              className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${
                sentimentFilter === "negative"
                  ? "bg-destructive/15 border-destructive/30 text-destructive"
                  : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"
              }`}
            >
              {L("Negative", "تحفظات")}
            </button>
          </div>
        </div>

        {/* Mentions Listing */}
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {filteredMentions.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 border border-dashed border-border/60 rounded-2xl bg-surface/30"
              >
                <FileText className="h-8 w-8 text-muted-foreground/60 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">
                  {L(
                    "No articles found matching filters.",
                    "لا توجد مقالات أو إشارات مطابقة للتصفية.",
                  )}
                </p>
              </motion.div>
            ) : (
              filteredMentions.map((item) => {
                // Color mapping
                const sentimentColors = {
                  positive: {
                    badge: "text-success border-success/20 bg-success/5",
                    icon: <Smile className="h-3.5 w-3.5 text-success" />,
                    label: L("Positive", "إيجابي"),
                    ring: "border-success/10",
                  },
                  neutral: {
                    badge: "text-warning border-warning/20 bg-warning/5",
                    icon: <Meh className="h-3.5 w-3.5 text-warning" />,
                    label: L("Neutral", "محايد"),
                    ring: "border-warning/10",
                  },
                  negative: {
                    badge: "text-destructive border-destructive/20 bg-destructive/5",
                    icon: <Frown className="h-3.5 w-3.5 text-destructive" />,
                    label: L("Critique", "تحفظ ونقد"),
                    ring: "border-destructive/10",
                  },
                }[item.sentiment];

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                    className={`p-5 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 hover:bg-surface-elevated/40 transition-all flex flex-col sm:flex-row gap-4 items-start`}
                  >
                    {/* Media Type / Sentiment Avatar */}
                    <div className="flex sm:flex-col items-center gap-2 shrink-0">
                      <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border/60 grid place-items-center shadow-sm">
                        <Newspaper className="h-5 w-5 text-muted-foreground/80" />
                      </div>

                      {/* Reach Badge */}
                      <span
                        className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded border ${
                          item.reach === "high"
                            ? "text-indigo-500 border-indigo-500/20 bg-indigo-500/5"
                            : item.reach === "medium"
                              ? "text-blue-500 border-blue-500/20 bg-blue-500/5"
                              : "text-slate-500 border-slate-500/20 bg-slate-500/5"
                        }`}
                      >
                        {L(
                          `${item.reach} reach`,
                          `${item.reach === "high" ? "انتشار واسع" : item.reach === "medium" ? "انتشار متوسط" : "انتشار محدود"}`,
                        )}
                      </span>
                    </div>

                    {/* Mentions Core content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        {/* Media Source & Date */}
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <span className="font-extrabold text-foreground">{item.source}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.publishedAt}
                          </span>
                        </div>

                        {/* Sentiment Classifier Badge */}
                        <div
                          className={`px-2.5 py-1 rounded-full border text-[10px] font-extrabold flex items-center gap-1 ${sentimentColors.badge}`}
                        >
                          {sentimentColors.icon}
                          <span>
                            {sentimentColors.label} ({item.confidence}%)
                          </span>
                        </div>
                      </div>

                      {/* Headline & Snippet */}
                      <div>
                        <h4 className="font-bold text-sm text-foreground leading-snug">
                          {item.headline}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed text-justify">
                          {item.snippet}
                        </p>
                      </div>

                      {/* Mock Reference link */}
                      <div className="flex items-center justify-between pt-2">
                        <a
                          href="#media-mentions-tracker-section"
                          onClick={(e) => {
                            e.preventDefault();
                            alert(
                              L(
                                `Navigating securely to external reference: ${item.url}`,
                                `الانتقال الآمن لرابط المصدر الخارجي: ${item.url}`,
                              ),
                            );
                          }}
                          className="text-[10px] text-primary font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {L("View original press article", "عرض النص الكامل على موقع الناشر")}
                          <Globe className="h-3 w-3" />
                        </a>

                        {/* Action delete button */}
                        <button
                          onClick={() => handleDeleteMention(item.id)}
                          className="text-muted-foreground hover:text-destructive p-1 rounded-lg hover:bg-destructive/5 transition cursor-pointer"
                          title={L("Delete tracked mention", "حذف الإشارة")}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
