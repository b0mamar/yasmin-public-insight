import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  TrendingUp,
  Users,
  Globe,
  Award,
  Sparkles,
  Filter,
  ChevronRight,
  Info,
} from "lucide-react";

// Types
export interface WilayaData {
  code: number;
  nameAr: string;
  nameEn: string;
  x: number; // percentage coordinate on SVG map (0-100)
  y: number; // percentage coordinate on SVG map (0-100)
  region: "coast" | "plateaus" | "desert";
}

export interface WilayaEngagement {
  wilaya: WilayaData;
  score: number;
  status: "high" | "medium" | "weak";
  engagementRate: number;
  views: number;
  likes: number;
  comments: number;
  bestPlatform: string;
  aiInsight: string;
}

// 58 Algerian Wilayas data with approximate geographical positions relative to Algeria's shape
const ALGERIAN_WILAYAS: WilayaData[] = [
  { code: 1, nameAr: "أدرار", nameEn: "Adrar", x: 38, y: 70, region: "desert" },
  { code: 2, nameAr: "الشلف", nameEn: "Chlef", x: 42, y: 16, region: "coast" },
  { code: 3, nameAr: "الأغواط", nameEn: "Laghouat", x: 46, y: 31, region: "plateaus" },
  { code: 4, nameAr: "أم البواقي", nameEn: "Oum El Bouaghi", x: 68, y: 21, region: "plateaus" },
  { code: 5, nameAr: "باتنة", nameEn: "Batna", x: 65, y: 22, region: "plateaus" },
  { code: 6, nameAr: "بجاية", nameEn: "Béjaïa", x: 56, y: 15, region: "coast" },
  { code: 7, nameAr: "بسكرة", nameEn: "Biskra", x: 63, y: 30, region: "plateaus" },
  { code: 8, nameAr: "بشار", nameEn: "Béchar", x: 30, y: 45, region: "desert" },
  { code: 9, nameAr: "البليدة", nameEn: "Blida", x: 48, y: 17, region: "coast" },
  { code: 10, nameAr: "البويرة", nameEn: "Bouira", x: 52, y: 18, region: "plateaus" },
  { code: 11, nameAr: "تمنراست", nameEn: "Tamanrasset", x: 55, y: 85, region: "desert" },
  { code: 12, nameAr: "تبسة", nameEn: "Tébessa", x: 73, y: 24, region: "plateaus" },
  { code: 13, nameAr: "تلمسان", nameEn: "Tlemcen", x: 28, y: 20, region: "coast" },
  { code: 14, nameAr: "تيارت", nameEn: "Tiaret", x: 40, y: 23, region: "plateaus" },
  { code: 15, nameAr: "تيزي وزو", nameEn: "Tizi Ouzou", x: 54, y: 15, region: "coast" },
  { code: 16, nameAr: "الجزائر", nameEn: "Algiers", x: 50, y: 14, region: "coast" },
  { code: 17, nameAr: "الجلفة", nameEn: "Djelfa", x: 50, y: 28, region: "plateaus" },
  { code: 18, nameAr: "جيجل", nameEn: "Jijel", x: 61, y: 15, region: "coast" },
  { code: 19, nameAr: "سطيف", nameEn: "Sétif", x: 60, y: 19, region: "plateaus" },
  { code: 20, nameAr: "سعيدة", nameEn: "Saïda", x: 36, y: 24, region: "plateaus" },
  { code: 21, nameAr: "سكيكدة", nameEn: "Skikda", x: 67, y: 14, region: "coast" },
  { code: 22, nameAr: "سيدي بلعباس", nameEn: "Sidi Bel Abbès", x: 32, y: 21, region: "coast" },
  { code: 23, nameAr: "عنابة", nameEn: "Annaba", x: 72, y: 14, region: "coast" },
  { code: 24, nameAr: "قالمة", nameEn: "Guelma", x: 70, y: 18, region: "plateaus" },
  { code: 25, nameAr: "قسنطينة", nameEn: "Constantine", x: 65, y: 16, region: "plateaus" },
  { code: 26, nameAr: "المدية", nameEn: "Médéa", x: 48, y: 19, region: "plateaus" },
  { code: 27, nameAr: "مستغانم", nameEn: "Mostaganem", x: 38, y: 16, region: "coast" },
  { code: 28, nameAr: "المسيلة", nameEn: "M'Sila", x: 56, y: 24, region: "plateaus" },
  { code: 29, nameAr: "معسكر", nameEn: "Mascara", x: 36, y: 20, region: "plateaus" },
  { code: 30, nameAr: "ورقلة", nameEn: "Ouargla", x: 62, y: 45, region: "desert" },
  { code: 31, nameAr: "وهران", nameEn: "Oran", x: 34, y: 17, region: "coast" },
  { code: 32, nameAr: "البيض", nameEn: "El Bayadh", x: 38, y: 32, region: "plateaus" },
  { code: 33, nameAr: "إليزي", nameEn: "Illizi", x: 75, y: 65, region: "desert" },
  {
    code: 34,
    nameAr: "برج بوعريريج",
    nameEn: "Bordj Bou Arréridj",
    x: 58,
    y: 20,
    region: "plateaus",
  },
  { code: 35, nameAr: "بومرداس", nameEn: "Boumerdès", x: 52, y: 15, region: "coast" },
  { code: 36, nameAr: "الطارف", nameEn: "El Tarf", x: 74, y: 14, region: "coast" },
  { code: 37, nameAr: "تندوف", nameEn: "Tindouf", x: 15, y: 65, region: "desert" },
  { code: 38, nameAr: "تيسمسيلت", nameEn: "Tissemsilt", x: 42, y: 21, region: "plateaus" },
  { code: 39, nameAr: "الوادي", nameEn: "El Oued", x: 68, y: 35, region: "desert" },
  { code: 40, nameAr: "خنشلة", nameEn: "Khenchela", x: 69, y: 24, region: "plateaus" },
  { code: 41, nameAr: "سوق أهراس", nameEn: "Souk Ahras", x: 74, y: 18, region: "plateaus" },
  { code: 42, nameAr: "تيبازة", nameEn: "Tipaza", x: 46, y: 15, region: "coast" },
  { code: 43, nameAr: "ميلة", nameEn: "Mila", x: 64, y: 17, region: "plateaus" },
  { code: 44, nameAr: "عين الدفلى", nameEn: "Aïn Defla", x: 44, y: 18, region: "plateaus" },
  { code: 45, nameAr: "النعامة", nameEn: "Naâma", x: 28, y: 32, region: "plateaus" },
  { code: 46, nameAr: "عين تموشنت", nameEn: "Aïn Témouchent", x: 30, y: 18, region: "coast" },
  { code: 47, nameAr: "غرداية", nameEn: "Ghardaïa", x: 50, y: 40, region: "desert" },
  { code: 48, nameAr: "غليزان", nameEn: "Relizane", x: 40, y: 18, region: "plateaus" },
  { code: 49, nameAr: "المغير", nameEn: "El M'Ghair", x: 65, y: 36, region: "desert" },
  { code: 50, nameAr: "المنيعة", nameEn: "El Meniaa", x: 48, y: 46, region: "desert" },
  { code: 51, nameAr: "أولاد جلال", nameEn: "Ouled Djellal", x: 60, y: 33, region: "plateaus" },
  {
    code: 52,
    nameAr: "برج باجي مختار",
    nameEn: "Bordj Baji Mokhtar",
    x: 34,
    y: 82,
    region: "desert",
  },
  { code: 53, nameAr: "بني عباس", nameEn: "Béni Abbès", x: 24, y: 53, region: "desert" },
  { code: 54, nameAr: "عين صالح", nameEn: "In Salah", x: 48, y: 58, region: "desert" },
  { code: 55, nameAr: "عين قزام", nameEn: "In Guezzam", x: 56, y: 95, region: "desert" },
  { code: 56, nameAr: "تقرت", nameEn: "Touggourt", x: 66, y: 40, region: "desert" },
  { code: 57, nameAr: "جانت", nameEn: "Djanet", x: 78, y: 78, region: "desert" },
  { code: 58, nameAr: "المغير الجديد", nameEn: "El M'Gheier", x: 66, y: 34, region: "desert" },
];

interface AlgeriaInteractiveMapProps {
  campaignId?: string;
  campaignName?: string;
  overallScore?: number;
  dialect?: string;
  campaignType?: string;
  isArabic?: boolean;
}

export const AlgeriaInteractiveMap: React.FC<AlgeriaInteractiveMapProps> = ({
  campaignId = "default",
  campaignName = "Camp",
  overallScore = 70,
  dialect = "standard",
  campaignType = "awareness",
  isArabic = true,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "high" | "medium" | "weak">("all");
  const [selectedCode, setSelectedCode] = useState<number>(16); // Default selected: Algiers

  const L = (en: string, ar: string) => (isArabic ? ar : en);

  // Helper to generate deterministic engagement details for each wilaya based on campaign profile
  const wilayaDataList = useMemo<WilayaEngagement[]>(() => {
    // Generate seeded layout
    const isMaghrebiDialect =
      dialect.toLowerCase() === "maghrebi" ||
      ((dialect.toLowerCase() === "gulf") === false &&
        (dialect.toLowerCase() === "standard") === false);

    return ALGERIAN_WILAYAS.map((wilaya) => {
      // Deterministic hash based on wilaya code and campaign properties
      const seed = (wilaya.code * 7 + campaignName.length * 3 + overallScore * 5) % 100;

      // Calculate local score
      let localScore = overallScore - 15 + (seed % 30);

      // Cultural Dialect Alignment Boost!
      if (isMaghrebiDialect) {
        // High native dialect boost (Algerian audience reacts highly to local colloquial language)
        localScore += 12;
      } else if (dialect.toLowerCase() === "standard") {
        // Standard Arabic is well accepted but lacks hyper-local touch
        localScore += 2;
      } else {
        // Other Middle-Eastern dialects might get lower immediate conversion in Algeria
        localScore -= 10;
      }

      // Coastal major cities (Algiers, Oran, Constantine, Sétif) usually have higher audience engagement rates and reach
      const isMajorCity = [16, 31, 25, 19, 23, 9].includes(wilaya.code);
      if (isMajorCity) {
        localScore += 8;
      }

      localScore = Math.max(20, Math.min(99, Math.round(localScore)));

      // Map localScore to Status
      let status: "high" | "medium" | "weak" = "medium";
      if (localScore >= 78) status = "high";
      else if (localScore < 55) status = "weak";

      // Calculate dynamic metrics based on score & size of province
      const populationFactor = isMajorCity
        ? 5.2
        : wilaya.region === "coast"
          ? 3.1
          : wilaya.region === "plateaus"
            ? 2.0
            : 0.8;
      const baseViews = Math.round((overallScore * 250 + seed * 100) * populationFactor);
      const views = Math.max(500, baseViews);

      const engagementRate = Math.round((2.2 + localScore / 18) * 10) / 10;
      const likes = Math.round(views * (engagementRate / 100) * 0.52);
      const comments = Math.round(likes * 0.18);

      // Best platform matching campaign type and region
      let bestPlatform = "Instagram";
      if (wilaya.region === "desert") {
        bestPlatform = "Facebook"; // Facebook dominates desert/rural regions
      } else if (campaignType === "commercial" && isMajorCity) {
        bestPlatform = "TikTok";
      } else if (campaignType === "electoral" || campaignType === "social") {
        bestPlatform = "Facebook";
      } else if (wilaya.code === 16) {
        bestPlatform = "Instagram"; // urban capital
      }

      // Localized AI insights
      let aiInsight = "";
      if (isArabic) {
        switch (status) {
          case "high":
            aiInsight = `تجاوب ريادي وممتاز في ولاية ${wilaya.nameAr}. يُنصح بمضاعفة الميزانية المخصصة لمنصة ${bestPlatform} وتكثيف حملات إعادة الاستهداف بمقاطع ريلز تفاعلية.`;
            break;
          case "medium":
            aiInsight = `تفاعل متزن ومستقر في ${wilaya.nameAr}. لتحسين الأداء للوصول إلى تفاعل مرتفع، ادعم المنشورات بشعارات محلية أكثر حيوية وملاءمة وتجنب النبرة الرسمية الجافة.`;
            break;
          case "weak":
            aiInsight = `تفاعل دون المستوى في ${wilaya.nameAr}. يرجى تبسيط الرسالة الإعلانية وتقليل تكلفة النقرات عبر توجيه إعلانات ${bestPlatform} نحو الفئة العمرية الشابة وتوطين نبرة الحوار.`;
            break;
        }
      } else {
        switch (status) {
          case "high":
            aiInsight = `Outstanding interaction levels in ${wilaya.nameEn}. We recommend scaling the ad spend on ${bestPlatform} and launching sequential custom audience retargeting.`;
            break;
          case "medium":
            aiInsight = `Stable and balanced response in ${wilaya.nameEn}. To push it into high tiers, incorporate localized cultural hooks and vivid vertical layouts on ${bestPlatform}.`;
            break;
          case "weak":
            aiInsight = `Underperforming engagement in ${wilaya.nameEn}. Simplify the main message, restrict targeting parameters, and lead with short vertical videos on ${bestPlatform}.`;
            break;
        }
      }

      return {
        wilaya,
        score: localScore,
        status,
        engagementRate,
        views,
        likes,
        comments,
        bestPlatform,
        aiInsight,
      };
    });
  }, [campaignName, overallScore, dialect, campaignType, isArabic]);

  // Selected Wilaya Detailed View
  const selectedEngagement = useMemo(() => {
    return wilayaDataList.find((w) => w.wilaya.code === selectedCode) || wilayaDataList[15]; // Fallback Algiers
  }, [wilayaDataList, selectedCode]);

  // Filtering and Searching
  const filteredWilayas = useMemo(() => {
    return wilayaDataList.filter((item) => {
      const matchesSearch =
        item.wilaya.nameAr.includes(searchQuery) ||
        item.wilaya.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.wilaya.code.toString() === searchQuery;

      const matchesFilter = statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesFilter;
    });
  }, [wilayaDataList, searchQuery, statusFilter]);

  // Statistics summaries
  const stats = useMemo(() => {
    const highCount = wilayaDataList.filter((w) => w.status === "high").length;
    const mediumCount = wilayaDataList.filter((w) => w.status === "medium").length;
    const weakCount = wilayaDataList.filter((w) => w.status === "weak").length;
    return { highCount, mediumCount, weakCount };
  }, [wilayaDataList]);

  return (
    <div
      id="algeria-interactive-map-section"
      className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start"
    >
      {/* 1. MAP CANVAS PANEL - ocupies 7 cols on XL screens */}
      <div className="glass-card p-6 xl:col-span-7 flex flex-col justify-between h-full min-h-[580px] relative overflow-hidden">
        {/* Panel Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/40 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {L("CULTURAL & GEOGRAPHICAL OPTIMIZATION", "محاذاة جغرافية وثقافية ذكية")}
              </span>
            </div>
            <h3 className="text-lg font-bold font-display text-foreground mt-1">
              {L("Interactive Algerian Wilayas Map", "خريطة الجزائر التفاعلية لتفاعل الولايات")}
            </h3>
          </div>

          {/* Quick Stats Legend */}
          <div className="flex items-center gap-3 text-xs shrink-0 bg-surface/50 border border-border/40 px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="text-muted-foreground">
                {L("High", "مرتفع")}: {stats.highCount}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-warning" />
              <span className="text-muted-foreground">
                {L("Medium", "متوسط")}: {stats.mediumCount}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              <span className="text-muted-foreground">
                {L("Weak", "ضعيف")}: {stats.weakCount}
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
          <div className="relative sm:col-span-7">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={L("Search by Wilaya name or code...", "ابحث باسم الولاية أو رقمها...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface/40 hover:bg-surface/60 focus:bg-surface/80 border border-border/50 rounded-xl py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground transition outline-none"
            />
          </div>

          <div className="flex gap-1.5 sm:col-span-5">
            <button
              onClick={() => setStatusFilter("all")}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${
                statusFilter === "all"
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"
              }`}
            >
              {L("All", "الكل")}
            </button>
            <button
              onClick={() => setStatusFilter("high")}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${
                statusFilter === "high"
                  ? "bg-success/15 border-success/30 text-success"
                  : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"
              }`}
            >
              {L("High", "مرتفع")}
            </button>
            <button
              onClick={() => setStatusFilter("medium")}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${
                statusFilter === "medium"
                  ? "bg-warning/15 border-warning/30 text-warning"
                  : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"
              }`}
            >
              {L("Med", "متوسط")}
            </button>
            <button
              onClick={() => setStatusFilter("weak")}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${
                statusFilter === "weak"
                  ? "bg-destructive/15 border-destructive/30 text-destructive"
                  : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"
              }`}
            >
              {L("Weak", "ضعيف")}
            </button>
          </div>
        </div>

        {/* MAP CONTAINER CANVAS */}
        <div className="relative bg-surface/20 border border-border/30 rounded-2xl p-4 flex items-center justify-center min-h-[420px] select-none overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

          {/* Map instructions indicator */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] text-muted-foreground bg-surface/80 border border-border/40 px-2.5 py-1 rounded-full z-10">
            <Info className="h-3 w-3 text-primary animate-pulse" />
            <span>
              {L(
                "Click pin nodes to display engagement metrics",
                "اضغط على رموز الولايات لعرض إحصاءات التفاعل التفصيلية",
              )}
            </span>
          </div>

          {/* Stylized Geographical Vector Map of Algeria with regions */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] opacity-90 transition">
            <svg
              viewBox="0 0 500 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-border/20 drop-shadow-[0_0_25px_rgba(var(--primary-rgb),0.03)]"
            >
              {/* National Border Outline of Algeria (highly stylized polygon) */}
              <path
                d="M 235 50 
                   Q 250 52, 270 50 
                   Q 330 48, 380 50 
                   Q 400 60, 420 85 
                   Q 410 110, 415 130 
                   Q 435 155, 410 185 
                   Q 415 210, 420 240 
                   Q 400 270, 430 330 
                   Q 440 370, 460 390 
                   Q 450 430, 420 480 
                   Q 330 520, 290 570 
                   Q 260 550, 245 490 
                   Q 230 470, 180 440 
                   Q 150 420, 120 410 
                   Q 80 405, 50 410 
                   Q 65 370, 95 340 
                   Q 115 315, 140 300 
                   Q 160 275, 175 220 
                   Q 190 180, 205 150 
                   Q 215 110, 235 50 Z"
                fill="currentColor"
                stroke="rgba(var(--primary-rgb), 0.15)"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />

              {/* Regional demarcation guidelines */}
              {/* Coast strip line */}
              <line
                x1="120"
                y1="120"
                x2="430"
                y2="120"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text x="40" y="115" className="text-[9px] fill-muted-foreground/30 font-mono">
                NORTH COASTAL
              </text>

              {/* Plateau strip line */}
              <line
                x1="80"
                y1="210"
                x2="430"
                y2="210"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text x="40" y="205" className="text-[9px] fill-muted-foreground/30 font-mono">
                HIGH PLATEAUS
              </text>
              <text x="40" y="325" className="text-[9px] fill-muted-foreground/30 font-mono">
                DESERT SAHARA
              </text>
            </svg>

            {/* Render Interactive Wilaya Marker Dots */}
            {filteredWilayas.map((item) => {
              const isSelected = item.wilaya.code === selectedCode;

              // Map state colors
              let markerColor = "bg-warning border-warning/50 shadow-warning/30";
              if (item.status === "high")
                markerColor = "bg-success border-success/50 shadow-success/30";
              else if (item.status === "weak")
                markerColor = "bg-destructive border-destructive/50 shadow-destructive/30";

              return (
                <button
                  key={item.wilaya.code}
                  onClick={() => setSelectedCode(item.wilaya.code)}
                  style={{ left: `${item.wilaya.x}%`, top: `${item.wilaya.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 p-1.5 z-20 group outline-none"
                  title={`${item.wilaya.code} - ${L(item.wilaya.nameEn, item.wilaya.nameAr)}`}
                >
                  {/* Outer pulsating wave if selected */}
                  {isSelected && (
                    <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping scale-150" />
                  )}

                  {/* Marker Node Circle */}
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 relative ${markerColor} ${
                      isSelected
                        ? "scale-125 ring-4 ring-primary/20 border-white dark:border-slate-900"
                        : "hover:scale-110"
                    }`}
                  >
                    {/* Tiny center dot */}
                    <span className="absolute inset-0.5 rounded-full bg-background" />
                  </div>

                  {/* Tiny hover helper label for compact space */}
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-[8px] font-bold px-1.5 py-0.5 rounded border border-border shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50 pointer-events-none mt-1">
                    {L(item.wilaya.nameEn, item.wilaya.nameAr)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Summary */}
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          {L(
            `Showing ${filteredWilayas.length} of 58 provinces matching filters`,
            `يتم عرض ${filteredWilayas.length} من أصل 58 ولاية مطابقة للتصفية`,
          )}
        </p>
      </div>

      {/* 2. DETAILED METRICS PANEL - occupies 5 cols on XL screens */}
      <div className="glass-card p-6 xl:col-span-5 flex flex-col justify-between h-full min-h-[580px]">
        {/* Panel Header */}
        <div className="border-b border-border/40 pb-4 mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              {L("WILAYA DETAILED FEEDBACK", "تفاصيل المؤشرات للولاية المحددة")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center font-display font-extrabold text-primary text-sm shadow-inner">
                {selectedEngagement.wilaya.code.toString().padStart(2, "0")}
              </div>
              <div>
                <h4 className="text-xl font-extrabold font-display text-foreground leading-tight">
                  {L(selectedEngagement.wilaya.nameEn, selectedEngagement.wilaya.nameAr)}
                </h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {selectedEngagement.wilaya.region === "coast"
                    ? L("Northern Coastal Region", "الشريط الساحلي الشمالي")
                    : selectedEngagement.wilaya.region === "plateaus"
                      ? L("High Plateaus Region", "منطقة الهضاب العليا")
                      : L("Southern Sahara Region", "الصحراء الكبرى والجنوب")}
                </p>
              </div>
            </div>

            {/* Status indicator pill */}
            <div
              className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 ${
                selectedEngagement.status === "high"
                  ? "text-success border-success/20 bg-success/5"
                  : selectedEngagement.status === "medium"
                    ? "text-warning border-warning/20 bg-warning/5"
                    : "text-destructive border-destructive/20 bg-destructive/5"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  selectedEngagement.status === "high"
                    ? "bg-success"
                    : selectedEngagement.status === "medium"
                      ? "bg-warning"
                      : "bg-destructive"
                }`}
              />
              <span>
                {selectedEngagement.status === "high"
                  ? L("High Engagement", "تفاعل مرتفع")
                  : selectedEngagement.status === "medium"
                    ? L("Medium Engagement", "تفاعل متوسط")
                    : L("Weak Engagement", "تفاعل ضعيف")}
              </span>
            </div>
          </div>
        </div>

        {/* Selected Wilaya Core Metrics */}
        <div className="space-y-4">
          {/* 1. Engagement Score Dial */}
          <div className="bg-surface/30 border border-border/40 p-4 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground font-medium">
                {L("Calculated Interest Index", "مؤشر الرغبة والتفاعل المحلي")}
              </span>
              <span className="text-sm font-extrabold font-display text-foreground">
                {selectedEngagement.score}/100
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${selectedEngagement.score}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  selectedEngagement.status === "high"
                    ? "bg-success"
                    : selectedEngagement.status === "medium"
                      ? "bg-warning"
                      : "bg-destructive"
                }`}
              />
            </div>
          </div>

          {/* 2. Key Numbers Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Engagement Rate */}
            <div className="bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <TrendingUp className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-semibold uppercase">
                  {L("ENGAGEMENT", "معدل التفاعل")}
                </span>
              </div>
              <div className="text-xl font-extrabold font-display text-foreground mt-1">
                {selectedEngagement.engagementRate}%
              </div>
              <p className="text-[9px] text-muted-foreground mt-1">
                {selectedEngagement.engagementRate >= 5.0
                  ? L("Exceptional response", "استجابة استثنائية")
                  : L("Standard response", "استجابة عادية")}
              </p>
            </div>

            {/* Best Performing Platform */}
            <div className="bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                <Globe className="h-3.5 w-3.5 text-indigo-500" />
                <span className="text-[10px] font-semibold uppercase">
                  {L("BEST CHANNEL", "المنصة الذهبية")}
                </span>
              </div>
              <div className="text-xl font-extrabold font-display text-indigo-500 mt-1">
                {selectedEngagement.bestPlatform}
              </div>
              <p className="text-[9px] text-muted-foreground mt-1">
                {L("Dominating channel", "المنصة الأكثر كفاءة محلياً")}
              </p>
            </div>

            {/* Views */}
            <div className="bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between">
              <div className="text-[10px] font-semibold text-muted-foreground uppercase">
                {L("EST. REACH (VIEWS)", "الوصول التقديري")}
              </div>
              <div className="text-lg font-bold font-display text-foreground mt-1">
                {selectedEngagement.views.toLocaleString()}
              </div>
            </div>

            {/* Likes / Comments */}
            <div className="bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between">
              <div className="text-[10px] font-semibold text-muted-foreground uppercase">
                {L("INTERACTIONS", "التفاعلات المقدرة")}
              </div>
              <div className="text-lg font-bold font-display text-foreground mt-1">
                {(selectedEngagement.likes + selectedEngagement.comments).toLocaleString()}
              </div>
            </div>
          </div>

          {/* 3. AI Generated optimization suggestion specific for this province */}
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl relative overflow-hidden mt-2">
            <div className="absolute top-0 right-0 p-3 opacity-5">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>

            <div className="flex items-center gap-1.5 mb-2.5 text-primary">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {L("LOCALIZED AI RECOMMENDATION", "توصية جغرافية مخصصة من الذكاء الاصطناعي")}
              </span>
            </div>

            <p className="text-xs text-foreground/90 leading-relaxed text-justify">
              {selectedEngagement.aiInsight}
            </p>
          </div>
        </div>

        {/* Selected campaign matching notifier */}
        <div className="mt-5 border-t border-border/40 pt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
          <Award className="h-3.5 w-3.5 text-primary" />
          <span>
            {L(
              `Calculated metrics are customized for campaign: "${campaignName}" (${overallScore}/100) and ${dialect} dialect.`,
              `تم احتساب المقاييس وتوجيه التوصيات وفقاً لبيانات حملة: "${campaignName}" (${overallScore}/100) بلهجة: ${dialect}.`,
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
