import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as generateCampaignReport, A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { L as Layers, m as Sparkles, y as FileText, q as Award, F as Flame, z as DollarSign, d as Search, G as CircleAlert, B as Building2, U as User, e as Calendar, D as Download, T as Trash2, p as Printer, R as RefreshCw, Z as Zap, r as CircleCheck, s as ThumbsUp, I as ThumbsDown, J as Users, K as Globe, E as Eye, u as Heart, k as MessageSquare, v as Share2, N as Info, O as TrendingUp, Q as Newspaper, V as Plus, W as Smile, Y as Meh, _ as Frown } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
const ALGERIAN_WILAYAS = [
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
    region: "plateaus"
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
    region: "desert"
  },
  { code: 53, nameAr: "بني عباس", nameEn: "Béni Abbès", x: 24, y: 53, region: "desert" },
  { code: 54, nameAr: "عين صالح", nameEn: "In Salah", x: 48, y: 58, region: "desert" },
  { code: 55, nameAr: "عين قزام", nameEn: "In Guezzam", x: 56, y: 95, region: "desert" },
  { code: 56, nameAr: "تقرت", nameEn: "Touggourt", x: 66, y: 40, region: "desert" },
  { code: 57, nameAr: "جانت", nameEn: "Djanet", x: 78, y: 78, region: "desert" },
  { code: 58, nameAr: "المغير الجديد", nameEn: "El M'Gheier", x: 66, y: 34, region: "desert" }
];
const AlgeriaInteractiveMap = ({
  campaignId = "default",
  campaignName = "Camp",
  overallScore = 70,
  dialect = "standard",
  campaignType = "awareness",
  isArabic = true
}) => {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [selectedCode, setSelectedCode] = reactExports.useState(16);
  const L = (en, ar) => isArabic ? ar : en;
  const wilayaDataList = reactExports.useMemo(() => {
    const isMaghrebiDialect = dialect.toLowerCase() === "maghrebi" || dialect.toLowerCase() === "gulf" === false && dialect.toLowerCase() === "standard" === false;
    return ALGERIAN_WILAYAS.map((wilaya) => {
      const seed = (wilaya.code * 7 + campaignName.length * 3 + overallScore * 5) % 100;
      let localScore = overallScore - 15 + seed % 30;
      if (isMaghrebiDialect) {
        localScore += 12;
      } else if (dialect.toLowerCase() === "standard") {
        localScore += 2;
      } else {
        localScore -= 10;
      }
      const isMajorCity = [16, 31, 25, 19, 23, 9].includes(wilaya.code);
      if (isMajorCity) {
        localScore += 8;
      }
      localScore = Math.max(20, Math.min(99, Math.round(localScore)));
      let status = "medium";
      if (localScore >= 78) status = "high";
      else if (localScore < 55) status = "weak";
      const populationFactor = isMajorCity ? 5.2 : wilaya.region === "coast" ? 3.1 : wilaya.region === "plateaus" ? 2 : 0.8;
      const baseViews = Math.round((overallScore * 250 + seed * 100) * populationFactor);
      const views = Math.max(500, baseViews);
      const engagementRate = Math.round((2.2 + localScore / 18) * 10) / 10;
      const likes = Math.round(views * (engagementRate / 100) * 0.52);
      const comments = Math.round(likes * 0.18);
      let bestPlatform = "Instagram";
      if (wilaya.region === "desert") {
        bestPlatform = "Facebook";
      } else if (campaignType === "commercial" && isMajorCity) {
        bestPlatform = "TikTok";
      } else if (campaignType === "electoral" || campaignType === "social") {
        bestPlatform = "Facebook";
      } else if (wilaya.code === 16) {
        bestPlatform = "Instagram";
      }
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
        aiInsight
      };
    });
  }, [campaignName, overallScore, dialect, campaignType, isArabic]);
  const selectedEngagement = reactExports.useMemo(() => {
    return wilayaDataList.find((w) => w.wilaya.code === selectedCode) || wilayaDataList[15];
  }, [wilayaDataList, selectedCode]);
  const filteredWilayas = reactExports.useMemo(() => {
    return wilayaDataList.filter((item) => {
      const matchesSearch = item.wilaya.nameAr.includes(searchQuery) || item.wilaya.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || item.wilaya.code.toString() === searchQuery;
      const matchesFilter = statusFilter === "all" || item.status === statusFilter;
      return matchesSearch && matchesFilter;
    });
  }, [wilayaDataList, searchQuery, statusFilter]);
  const stats = reactExports.useMemo(() => {
    const highCount = wilayaDataList.filter((w) => w.status === "high").length;
    const mediumCount = wilayaDataList.filter((w) => w.status === "medium").length;
    const weakCount = wilayaDataList.filter((w) => w.status === "weak").length;
    return { highCount, mediumCount, weakCount };
  }, [wilayaDataList]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "algeria-interactive-map-section",
      className: "grid grid-cols-1 xl:grid-cols-12 gap-6 items-start",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 xl:col-span-7 flex flex-col justify-between h-full min-h-[580px] relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/40 pb-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: L("CULTURAL & GEOGRAPHICAL OPTIMIZATION", "محاذاة جغرافية وثقافية ذكية") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold font-display text-foreground mt-1", children: L("Interactive Algerian Wilayas Map", "خريطة الجزائر التفاعلية لتفاعل الولايات") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs shrink-0 bg-surface/50 border border-border/40 px-3 py-1.5 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-success" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  L("High", "مرتفع"),
                  ": ",
                  stats.highCount
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-warning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  L("Medium", "متوسط"),
                  ": ",
                  stats.mediumCount
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-destructive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  L("Weak", "ضعيف"),
                  ": ",
                  stats.weakCount
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:col-span-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: L("Search by Wilaya name or code...", "ابحث باسم الولاية أو رقمها..."),
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "w-full bg-surface/40 hover:bg-surface/60 focus:bg-surface/80 border border-border/50 rounded-xl py-2 pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground transition outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 sm:col-span-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setStatusFilter("all"),
                  className: `flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${statusFilter === "all" ? "bg-primary/20 border-primary text-primary" : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"}`,
                  children: L("All", "الكل")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setStatusFilter("high"),
                  className: `flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${statusFilter === "high" ? "bg-success/15 border-success/30 text-success" : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"}`,
                  children: L("High", "مرتفع")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setStatusFilter("medium"),
                  className: `flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${statusFilter === "medium" ? "bg-warning/15 border-warning/30 text-warning" : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"}`,
                  children: L("Med", "متوسط")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setStatusFilter("weak"),
                  className: `flex-1 py-2 text-[10px] font-bold rounded-xl border transition ${statusFilter === "weak" ? "bg-destructive/15 border-destructive/30 text-destructive" : "bg-surface/30 border-border/50 text-muted-foreground hover:bg-surface/50"}`,
                  children: L("Weak", "ضعيف")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-surface/20 border border-border/30 rounded-2xl p-4 flex items-center justify-center min-h-[420px] select-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex items-center gap-1.5 text-[10px] text-muted-foreground bg-surface/80 border border-border/40 px-2.5 py-1 rounded-full z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3 w-3 text-primary animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L(
                "Click pin nodes to display engagement metrics",
                "اضغط على رموز الولايات لعرض إحصاءات التفاعل التفصيلية"
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[420px] aspect-[4/5] opacity-90 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 500 580",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-full h-full text-border/20 drop-shadow-[0_0_25px_rgba(var(--primary-rgb),0.03)]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M 235 50 \n                   Q 250 52, 270 50 \n                   Q 330 48, 380 50 \n                   Q 400 60, 420 85 \n                   Q 410 110, 415 130 \n                   Q 435 155, 410 185 \n                   Q 415 210, 420 240 \n                   Q 400 270, 430 330 \n                   Q 440 370, 460 390 \n                   Q 450 430, 420 480 \n                   Q 330 520, 290 570 \n                   Q 260 550, 245 490 \n                   Q 230 470, 180 440 \n                   Q 150 420, 120 410 \n                   Q 80 405, 50 410 \n                   Q 65 370, 95 340 \n                   Q 115 315, 140 300 \n                   Q 160 275, 175 220 \n                   Q 190 180, 205 150 \n                   Q 215 110, 235 50 Z",
                        fill: "currentColor",
                        stroke: "rgba(var(--primary-rgb), 0.15)",
                        strokeWidth: "2.5",
                        strokeDasharray: "4 2"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "120",
                        y1: "120",
                        x2: "430",
                        y2: "120",
                        stroke: "rgba(255,255,255,0.04)",
                        strokeWidth: "1",
                        strokeDasharray: "3 3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: "115", className: "text-[9px] fill-muted-foreground/30 font-mono", children: "NORTH COASTAL" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "80",
                        y1: "210",
                        x2: "430",
                        y2: "210",
                        stroke: "rgba(255,255,255,0.04)",
                        strokeWidth: "1",
                        strokeDasharray: "3 3"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: "205", className: "text-[9px] fill-muted-foreground/30 font-mono", children: "HIGH PLATEAUS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "40", y: "325", className: "text-[9px] fill-muted-foreground/30 font-mono", children: "DESERT SAHARA" })
                  ]
                }
              ),
              filteredWilayas.map((item) => {
                const isSelected = item.wilaya.code === selectedCode;
                let markerColor = "bg-warning border-warning/50 shadow-warning/30";
                if (item.status === "high")
                  markerColor = "bg-success border-success/50 shadow-success/30";
                else if (item.status === "weak")
                  markerColor = "bg-destructive border-destructive/50 shadow-destructive/30";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setSelectedCode(item.wilaya.code),
                    style: { left: `${item.wilaya.x}%`, top: `${item.wilaya.y}%` },
                    className: "absolute transform -translate-x-1/2 -translate-y-1/2 p-1.5 z-20 group outline-none",
                    title: `${item.wilaya.code} - ${L(item.wilaya.nameEn, item.wilaya.nameAr)}`,
                    children: [
                      isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-primary/25 animate-ping scale-150" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 relative ${markerColor} ${isSelected ? "scale-125 ring-4 ring-primary/20 border-white dark:border-slate-900" : "hover:scale-110"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0.5 rounded-full bg-background" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-full left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-[8px] font-bold px-1.5 py-0.5 rounded border border-border shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50 pointer-events-none mt-1", children: L(item.wilaya.nameEn, item.wilaya.nameAr) })
                    ]
                  },
                  item.wilaya.code
                );
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center mt-2", children: L(
            `Showing ${filteredWilayas.length} of 58 provinces matching filters`,
            `يتم عرض ${filteredWilayas.length} من أصل 58 ولاية مطابقة للتصفية`
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 xl:col-span-5 flex flex-col justify-between h-full min-h-[580px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: L("WILAYA DETAILED FEEDBACK", "تفاصيل المؤشرات للولاية المحددة") }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center font-display font-extrabold text-primary text-sm shadow-inner", children: selectedEngagement.wilaya.code.toString().padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-extrabold font-display text-foreground leading-tight", children: L(selectedEngagement.wilaya.nameEn, selectedEngagement.wilaya.nameAr) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: selectedEngagement.wilaya.region === "coast" ? L("Northern Coastal Region", "الشريط الساحلي الشمالي") : selectedEngagement.wilaya.region === "plateaus" ? L("High Plateaus Region", "منطقة الهضاب العليا") : L("Southern Sahara Region", "الصحراء الكبرى والجنوب") })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 ${selectedEngagement.status === "high" ? "text-success border-success/20 bg-success/5" : selectedEngagement.status === "medium" ? "text-warning border-warning/20 bg-warning/5" : "text-destructive border-destructive/20 bg-destructive/5"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `h-1.5 w-1.5 rounded-full ${selectedEngagement.status === "high" ? "bg-success" : selectedEngagement.status === "medium" ? "bg-warning" : "bg-destructive"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedEngagement.status === "high" ? L("High Engagement", "تفاعل مرتفع") : selectedEngagement.status === "medium" ? L("Medium Engagement", "تفاعل متوسط") : L("Weak Engagement", "تفاعل ضعيف") })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/30 border border-border/40 p-4 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: L("Calculated Interest Index", "مؤشر الرغبة والتفاعل المحلي") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-extrabold font-display text-foreground", children: [
                  selectedEngagement.score,
                  "/100"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-muted/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${selectedEngagement.score}%` },
                  transition: { duration: 0.6, ease: "easeOut" },
                  className: `h-full rounded-full ${selectedEngagement.status === "high" ? "bg-success" : selectedEngagement.status === "medium" ? "bg-warning" : "bg-destructive"}`
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase", children: L("ENGAGEMENT", "معدل التفاعل") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-extrabold font-display text-foreground mt-1", children: [
                  selectedEngagement.engagementRate,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground mt-1", children: selectedEngagement.engagementRate >= 5 ? L("Exceptional response", "استجابة استثنائية") : L("Standard response", "استجابة عادية") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase", children: L("BEST CHANNEL", "المنصة الذهبية") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-extrabold font-display text-indigo-500 mt-1", children: selectedEngagement.bestPlatform }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground mt-1", children: L("Dominating channel", "المنصة الأكثر كفاءة محلياً") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-muted-foreground uppercase", children: L("EST. REACH (VIEWS)", "الوصول التقديري") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold font-display text-foreground mt-1", children: selectedEngagement.views.toLocaleString() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface/20 border border-border/50 p-4 rounded-2xl flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-muted-foreground uppercase", children: L("INTERACTIONS", "التفاعلات المقدرة") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold font-display text-foreground mt-1", children: (selectedEngagement.likes + selectedEngagement.comments).toLocaleString() })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/10 p-4 rounded-2xl relative overflow-hidden mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-10 w-10 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2.5 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider", children: L("LOCALIZED AI RECOMMENDATION", "توصية جغرافية مخصصة من الذكاء الاصطناعي") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/90 leading-relaxed text-justify", children: selectedEngagement.aiInsight })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border/40 pt-4 flex items-center gap-2 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L(
              `Calculated metrics are customized for campaign: "${campaignName}" (${overallScore}/100) and ${dialect} dialect.`,
              `تم احتساب المقاييس وتوجيه التوصيات وفقاً لبيانات حملة: "${campaignName}" (${overallScore}/100) بلهجة: ${dialect}.`
            ) })
          ] })
        ] })
      ]
    }
  );
};
const CampaignMediaTracker = ({
  campaignId,
  campaignName,
  overallScore,
  dialect = "standard",
  campaignType = "awareness",
  isArabic = true
}) => {
  const L = (en, ar) => isArabic ? ar : en;
  const initialMentions = reactExports.useMemo(() => {
    const name = campaignName || L("Our Campaign", "حملتنا الإعلانية");
    const positiveSentimentAr = [
      `أكد خبراء التسويق اليوم أن حملة "${name}" قد نجحت في إرساء معايير جديدة للتواصل الرقمي الإقليمي. من خلال لغة مبتكرة وأسلوب مخاطبة قريب من الجمهور، حققت الحملة استجابة تفاعلية غير مسبوقة وتجاوبًا واسعًا، لا سيما بين الفئات الشابة التي أبدت حماستها الكبيرة للأفكار المطروحة.`,
      `رصدت منصات التحليل الاقتصادي صعودًا قياسيًا لمؤشرات التفاعل مع مبادرة "${name}". وأشارت التقارير إلى أن استجابة الجمهور للمحتوى البصري والتفاعلي كانت ممتازة للغاية، مما يمهد الطريق لمستويات نمو قياسية وعوائد استثمارية قوية تتفوق على نظيراتها في السوق المحلي الإقليمي.`
    ];
    const positiveSentimentEn = [
      `Marketing strategists confirmed today that the "${name}" campaign has successfully established new benchmarks for regional digital communication. Through innovative messaging and high audience alignment, the initiative achieved unprecedented engagement, especially among younger demographics.`,
      `Financial and digital tracking platforms reported a record surge in metrics following the launch of "${name}". Experts noted that the audience response to interactive visual assets has been exceptionally strong, paving the way for organic viral growth.`
    ];
    const neutralSentimentAr = [
      `تناولت الصحف المحلية تواصل فعاليات حملة "${name}" في أسبوعها الثاني، حيث استعرض المحللون الجوانب الفنية والتصميمية المتبعة في صياغة الرسائل الإعلانية. وتستمر الحملة في تقديم محتواها الموجه للجمهور وسط ترقب لمدى تأثيرها النهائي على معدلات الاستهلاك والوعي العام.`,
      `أطلقت الجهات المنظمة تقريرها الدوري حول مسار خطة "${name}". يعكس التقرير أرقامًا متزنة تتماشى تمامًا مع التوقعات الأولية الموضوعة في بداية الربع الحالي، مع استقرار في نبرة الحوار المجتمعي وتوزيع جغرافي متساوٍ لنسب المشاهدة عبر المنصات الرئيسية.`
    ];
    const neutralSentimentEn = [
      `Local media covered the ongoing progress of "${name}" in its second week, reviewing the technical aspects and visual assets implemented in the brand messaging. The campaign continues its general rollout as analysts watch for the final impact on overall market awareness.`,
      `The organizing board released its mid-term audit on the development of "${name}". The data shows balanced progress aligned with initial quarterly forecasts, with a stable conversational tone and distributed viewership across main social feeds.`
    ];
    const negativeSentimentAr = [
      `أثار التوزيع المتسارع لإعلانات "${name}" بعض التحفظات لدى فئة محدودة من المتابعين، حيث أشار تقرير نقدي إلى أن وتيرة ظهور المحتوى المكثف قد تسبب نوعًا من "الإرهاق الإعلاني". وطالب بعض المدونين بإعادة ضبط التكرار لضمان تجربة تصفح أكثر سلاسة للمستهلك المحلي.`
    ];
    const negativeSentimentEn = [
      `The rapid distribution of the "${name}" campaign has triggered slight critiques among a segment of users, who pointed out that the high ad frequency might lead to temporary 'ad fatigue'. Industry bloggers suggested optimizing delivery rates to ensure better overall brand recall.`
    ];
    return [
      {
        id: "m1",
        source: L("الخبر الجزائرية", "El Khabar Daily"),
        headline: L(
          `Campaign "${name}" sets high benchmarks for digital communication`,
          `حملة "${name}" ترسم معالم جديدة للتواصل الإعلاني الرقمي`
        ),
        snippet: L(positiveSentimentEn[0], positiveSentimentAr[0]),
        sentiment: "positive",
        confidence: 94,
        publishedAt: "2026-06-27",
        reach: "high",
        url: "https://elkhabar.com/news/campaign-analysis"
      },
      {
        id: "m2",
        source: L("كل شيء عن الجزائر (TSA)", "TSA Algérie"),
        headline: L(
          `Analysis of "${name}" strategy: A localized approach`,
          `تحليل أبعاد استراتيجية "${name}": قراءة في التوطين اللغوي`
        ),
        snippet: L(neutralSentimentEn[0], neutralSentimentAr[0]),
        sentiment: "neutral",
        confidence: 88,
        publishedAt: "2026-06-26",
        reach: "medium",
        url: "https://tsa-algerie.com/news/analysis-algeria"
      },
      {
        id: "m3",
        source: L("بوابة الاقتصاد الرقمي MENA", "MENA Digital Gate"),
        headline: L(
          `Record interactions tracked for "${name}" branding efforts`,
          `صعود قياسي في مؤشرات التفاعل الرقمي لمشروع "${name}"`
        ),
        snippet: L(positiveSentimentEn[1], positiveSentimentAr[1]),
        sentiment: "positive",
        confidence: 91,
        publishedAt: "2026-06-25",
        reach: "high",
        url: "https://menadigital.net/business/article-record"
      },
      {
        id: "m4",
        source: L("صدى الجزائر الرقمي", "Echourouk Tech"),
        headline: L(
          `Audience feedback regarding frequency of "${name}" ads`,
          `ملاحظات نقدية حول وتيرة ظهور وتكرار إعلانات "${name}"`
        ),
        snippet: L(negativeSentimentEn[0], negativeSentimentAr[0]),
        sentiment: "negative",
        confidence: 85,
        publishedAt: "2026-06-24",
        reach: "low",
        url: "https://echouroukonline.com/news/ad-fatigue-critique"
      }
    ];
  }, [campaignName, overallScore, isArabic]);
  const [mentions, setMentions] = reactExports.useState(() => {
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
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`pi-mentions-${campaignId}`, JSON.stringify(mentions));
    }
  }, [mentions, campaignId]);
  const [newSource, setNewSource] = reactExports.useState("");
  const [newHeadline, setNewHeadline] = reactExports.useState("");
  const [newContent, setNewContent] = reactExports.useState("");
  const [isAnalyzing, setIsAnalyzing] = reactExports.useState(false);
  const [showAddForm, setShowAddForm] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [sentimentFilter, setSentimentFilter] = reactExports.useState("all");
  const [isScraping, setIsScraping] = reactExports.useState(false);
  const analyzeSentimentAndAdd = (e) => {
    e.preventDefault();
    if (!newSource || !newHeadline || !newContent) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const lowerText = (newHeadline + " " + newContent).toLowerCase();
      let sentiment = "neutral";
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
        "outstanding"
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
        "drop"
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
      const newMention = {
        id: `m_${Date.now()}`,
        source: newSource,
        headline: newHeadline,
        snippet: newContent,
        sentiment,
        confidence,
        publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        reach: Math.random() > 0.6 ? "high" : Math.random() > 0.4 ? "medium" : "low",
        url: "https://local-track.ai/source/" + Math.floor(Math.random() * 1e4)
      };
      setMentions((prev) => [newMention, ...prev]);
      setNewSource("");
      setNewHeadline("");
      setNewContent("");
      setIsAnalyzing(false);
      setShowAddForm(false);
    }, 1500);
  };
  const handleDeleteMention = (id) => {
    setMentions((prev) => prev.filter((m) => m.id !== id));
  };
  const handleReset = () => {
    if (confirm(
      L(
        "Are you sure you want to restore default tracked mentions?",
        "هل أنت متأكد من رغبتك في استعادة المقالات الافتراضية؟"
      )
    )) {
      setMentions(initialMentions);
    }
  };
  const handleSimulateScraping = () => {
    setIsScraping(true);
    setTimeout(() => {
      const name = campaignName || L("Our Campaign", "حملتنا الإعلانية");
      const generatedMention = {
        id: `scraped_${Date.now()}`,
        source: Math.random() > 0.5 ? L("بوابة الوطن نيوز", "El Watan Info") : L("تكنولوجيا الجزائر الاقتصادية", "Algeria Tech Focus"),
        headline: L(
          `Fresh analysis reports high interaction on "${name}" initiative`,
          `دراسة مستقلة تؤكد توسع رقعة وصول مبادرة "${name}"`
        ),
        snippet: L(
          `New independent audits confirm a sustained organic response for "${name}" over the past 48 hours. The visual materials deployed have sparked discussions on localized marketing best practices.`,
          `كشفت دراسة مستقلة أجريت خلال الـ 48 ساعة الماضية عن تسارع وتيرة التفاعل الإيجابي مع مبادرة "${name}"، حيث ساهم الأسلوب البصري المبتكر في إثارة اهتمام أصحاب المصلحة ودفع معدلات المشاركة العضوية لأعلى مستوياتها.`
        ),
        sentiment: "positive",
        confidence: 89,
        publishedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        reach: "medium",
        url: "https://elwatan-news.com/tech-analytics"
      };
      setMentions((prev) => [generatedMention, ...prev]);
      setIsScraping(false);
    }, 2e3);
  };
  const stats = reactExports.useMemo(() => {
    const total = mentions.length;
    if (total === 0) return { posPercent: 0, neuPercent: 0, negPercent: 0, score: 0 };
    const pos = mentions.filter((m) => m.sentiment === "positive").length;
    const neu = mentions.filter((m) => m.sentiment === "neutral").length;
    const neg = mentions.filter((m) => m.sentiment === "negative").length;
    const posPercent = Math.round(pos / total * 100);
    const neuPercent = Math.round(neu / total * 100);
    const negPercent = Math.round(neg / total * 100);
    const calculatedScore = Math.round((pos * 100 + neu * 50 + neg * 0) / (total * 100) * 100);
    return { pos, neu, neg, total, posPercent, neuPercent, negPercent, score: calculatedScore };
  }, [mentions]);
  const filteredMentions = reactExports.useMemo(() => {
    return mentions.filter((m) => {
      const matchesSearch = m.source.toLowerCase().includes(searchQuery.toLowerCase()) || m.headline.toLowerCase().includes(searchQuery.toLowerCase()) || m.snippet.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSentiment = sentimentFilter === "all" || m.sentiment === sentimentFilter;
      return matchesSearch && matchesSentiment;
    });
  }, [mentions, searchQuery, sentimentFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "media-mentions-tracker-section", className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border/40 pb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: L("PRESS & MEDIA SENTIMENT RECONNAISSANCE", "تتبع الإعلام ومؤشرات الرأي العام") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mt-1", children: L("Media Mentions & News Tracker", "متتبع المقالات وأخبار الحملة") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: L(
          `Autonomous listening engine for articles referencing "${campaignName}" with NLP sentiment classification.`,
          `محرك رصد تفاعلي يقوم بمسح المقالات التي تذكر "${campaignName}" وتحليل نبرة النصوص تلقائياً.`
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSimulateScraping,
            disabled: isScraping,
            className: "px-3.5 py-2 text-xs font-bold rounded-xl border border-border bg-surface hover:bg-surface-elevated text-foreground flex items-center gap-2 transition disabled:opacity-50 cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 text-primary ${isScraping ? "animate-spin" : ""}` }),
              isScraping ? L("Scraping Web...", "جارٍ البحث والرصد...") : L("Fetch Mentions", "ابحث عن أخبار جديدة")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setShowAddForm(!showAddForm),
            className: "px-4 py-2 text-xs font-bold rounded-xl gradient-primary text-primary-foreground flex items-center gap-2 transition hover:scale-[1.01] glow-ring cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              L("Analyze New Text", "حلل نصاً أو مقالاً")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleReset,
            className: "p-2 text-xs font-medium rounded-xl border border-border text-muted-foreground hover:text-foreground bg-surface hover:bg-surface-elevated transition cursor-pointer",
            title: L("Restore defaults", "استعادة الافتراضي"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-muted-foreground/80 hover:text-destructive" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showAddForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: analyzeSentimentAndAdd,
            className: "glass-card p-5 border border-primary/20 bg-primary/5 space-y-4 rounded-2xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold font-display", children: L(
                  "Submit Text for Instant NLP Analysis",
                  "إدخال نص مقال لتحليله الفوري بالذكاء الاصطناعي"
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-bold text-muted-foreground mb-1", children: L("Media Source Name", "اسم وسيلة الإعلام / المصدر") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      placeholder: "e.g. El Watan, LinkedIn Hub",
                      value: newSource,
                      onChange: (e) => setNewSource(e.target.value),
                      className: "w-full bg-surface/80 border border-border/50 rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:border-primary transition"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-bold text-muted-foreground mb-1", children: L("Article Headline", "عنوان المقال / المنشور") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      placeholder: "e.g. Exciting insights on the campaign",
                      value: newHeadline,
                      onChange: (e) => setNewHeadline(e.target.value),
                      className: "w-full bg-surface/80 border border-border/50 rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:border-primary transition"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase font-bold text-muted-foreground mb-1", children: L("Text Snippet / Full Paragraph", "فقرة النص أو محتوى الخبر") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 3,
                    placeholder: L(
                      "Paste the paragraph containing campaign mentions to classify sentiment...",
                      "ألصق هنا النص الذي يتضمن ذكر اسم الحملة لتحليل نبرته العاطفية..."
                    ),
                    value: newContent,
                    onChange: (e) => setNewContent(e.target.value),
                    className: "w-full bg-surface/80 border border-border/50 rounded-xl p-3 text-xs text-foreground outline-none focus:border-primary transition resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowAddForm(false),
                    className: "px-3 py-2 text-xs font-semibold rounded-lg text-muted-foreground hover:bg-surface-elevated transition",
                    children: L("Cancel", "إلغاء")
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: isAnalyzing,
                    className: "px-4 py-2 text-xs font-bold rounded-lg gradient-primary text-primary-foreground transition flex items-center gap-1.5",
                    children: isAnalyzing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3 w-3 animate-spin" }),
                      L("Analyzing...", "جاري التحليل...")
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                      L("Analyze Mentions", "ابدأ التحليل")
                    ] })
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 lg:col-span-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2", children: L("Net Brand Sentiment Index", "مؤشر الرأي العام الصافي للعلامة") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-extrabold font-display text-foreground", children: stats.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-2 leading-relaxed", children: stats.score >= 70 ? L(
            "Highly favorable public perception across monitored channels.",
            "رأي عام إيجابي للغاية عبر سائر القنوات الإعلامية المرصودة."
          ) : stats.score >= 45 ? L(
            "Neutral or balanced media coverage with minor criticisms.",
            "تغطية إعلامية متوازنة ومعتدلة مع بعض الملاحظات البسيطة."
          ) : L(
            "Attention recommended: Underperforming brand sentiment.",
            "انتباه: تغطية إعلامية سلبية تحتاج إلى تدخل سريع لإعادة ضبط الرسائل."
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3 mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500" }),
            L(`Total: ${stats.total} mentions`, `الإجمالي: ${stats.total} إشارات`)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase bg-surface px-2 py-0.5 rounded border border-border", children: L("NLP CLASSIFIER", "مُصنف عاطفي") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 lg:col-span-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase font-bold text-muted-foreground tracking-wider mb-4", children: L("Sentiment Volume Breakdown", "توزيع نبرات الرأي العام المقاسة") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-success font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Positive Mentions", "الإشارات الإيجابية") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
                  stats.posPercent,
                  "% (",
                  stats.pos,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-muted/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-success rounded-full",
                  style: { width: `${stats.posPercent}%` }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-warning font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Meh, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Neutral Mentions", "الإشارات المحايدة") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
                  stats.neuPercent,
                  "% (",
                  stats.neu,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-muted/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-warning rounded-full",
                  style: { width: `${stats.neuPercent}%` }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-destructive font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Frown, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Negative / Critiques", "التحفظات والنقد") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
                  stats.negPercent,
                  "% (",
                  stats.neg,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-muted/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-destructive rounded-full",
                  style: { width: `${stats.negPercent}%` }
                }
              ) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground text-center mt-3 pt-3 border-t border-border/40", children: L(
          "Continuous NLP processing of syndicated RSS news feeds and digital publications.",
          "تحديث فوري تلقائي لمقالات الصحف الجزائرية والمنشورات عبر شبكات الويب."
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: L(
                "Search tracked news and articles...",
                "ابحث في محتوى وتفاصيل الأخبار المرصودة..."
              ),
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "w-full bg-surface/50 border border-border/50 rounded-xl py-2 pl-9 pr-4 text-xs text-foreground outline-none focus:border-primary transition"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSentimentFilter("all"),
              className: `px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${sentimentFilter === "all" ? "bg-primary/20 border-primary text-primary" : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"}`,
              children: L("All Mentions", "الكل")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSentimentFilter("positive"),
              className: `px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${sentimentFilter === "positive" ? "bg-success/15 border-success/30 text-success" : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"}`,
              children: L("Positive", "إيجابي")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSentimentFilter("neutral"),
              className: `px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${sentimentFilter === "neutral" ? "bg-warning/15 border-warning/30 text-warning" : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"}`,
              children: L("Neutral", "محايد")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSentimentFilter("negative"),
              className: `px-3 py-1.5 text-[11px] font-bold rounded-lg border transition ${sentimentFilter === "negative" ? "bg-destructive/15 border-destructive/30 text-destructive" : "bg-surface border-border/50 text-muted-foreground hover:bg-surface-elevated"}`,
              children: L("Negative", "تحفظات")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: filteredMentions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "text-center py-10 border border-dashed border-border/60 rounded-2xl bg-surface/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-8 w-8 text-muted-foreground/60 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: L(
              "No articles found matching filters.",
              "لا توجد مقالات أو إشارات مطابقة للتصفية."
            ) })
          ]
        }
      ) : filteredMentions.map((item) => {
        const sentimentColors = {
          positive: {
            badge: "text-success border-success/20 bg-success/5",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: "h-3.5 w-3.5 text-success" }),
            label: L("Positive", "إيجابي"),
            ring: "border-success/10"
          },
          neutral: {
            badge: "text-warning border-warning/20 bg-warning/5",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Meh, { className: "h-3.5 w-3.5 text-warning" }),
            label: L("Neutral", "محايد"),
            ring: "border-warning/10"
          },
          negative: {
            badge: "text-destructive border-destructive/20 bg-destructive/5",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Frown, { className: "h-3.5 w-3.5 text-destructive" }),
            label: L("Critique", "تحفظ ونقد"),
            ring: "border-destructive/10"
          }
        }[item.sentiment];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, x: -50 },
            transition: { duration: 0.2 },
            className: `p-5 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 hover:bg-surface-elevated/40 transition-all flex flex-col sm:flex-row gap-4 items-start`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-surface-elevated border border-border/60 grid place-items-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-5 w-5 text-muted-foreground/80" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded border ${item.reach === "high" ? "text-indigo-500 border-indigo-500/20 bg-indigo-500/5" : item.reach === "medium" ? "text-blue-500 border-blue-500/20 bg-blue-500/5" : "text-slate-500 border-slate-500/20 bg-slate-500/5"}`,
                    children: L(
                      `${item.reach} reach`,
                      `${item.reach === "high" ? "انتشار واسع" : item.reach === "medium" ? "انتشار متوسط" : "انتشار محدود"}`
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-foreground", children: item.source }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                      item.publishedAt
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `px-2.5 py-1 rounded-full border text-[10px] font-extrabold flex items-center gap-1 ${sentimentColors.badge}`,
                      children: [
                        sentimentColors.icon,
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          sentimentColors.label,
                          " (",
                          item.confidence,
                          "%)"
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground leading-snug", children: item.headline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed text-justify", children: item.snippet })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#media-mentions-tracker-section",
                      onClick: (e) => {
                        e.preventDefault();
                        alert(
                          L(
                            `Navigating securely to external reference: ${item.url}`,
                            `الانتقال الآمن لرابط المصدر الخارجي: ${item.url}`
                          )
                        );
                      },
                      className: "text-[10px] text-primary font-bold hover:underline inline-flex items-center gap-1",
                      children: [
                        L("View original press article", "عرض النص الكامل على موقع الناشر"),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3 w-3" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleDeleteMention(item.id),
                      className: "text-muted-foreground hover:text-destructive p-1 rounded-lg hover:bg-destructive/5 transition cursor-pointer",
                      title: L("Delete tracked mention", "حذف الإشارة"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                    }
                  )
                ] })
              ] })
            ]
          },
          item.id
        );
      }) }) })
    ] })
  ] });
};
const INITIAL_CAMPAIGNS = [{
  id: "pre_loaded_1",
  name: "أصالة للقهوة المختصة (Asala Coffee Launch)",
  mode: "pre",
  userType: "org",
  date: "2026-06-20",
  budget: "1500",
  platforms: ["instagram", "tiktok"],
  dialect: "gulf",
  score: 92,
  status: "strong",
  engagementRate: 6.4,
  sentiment: {
    positive: 85,
    neutral: 11,
    negative: 4
  },
  metrics: {
    views: 74200,
    likes: 2600,
    comments: 410,
    shares: 210,
    clicks: 5936
  },
  campaignObj: {
    name: "أصالة للقهوة المختصة (Asala Coffee Launch)",
    type: ["awareness", "commercial"],
    organizer: "أصالة للقهوة والضيافة",
    description: "حملة إطلاق خط إنتاج القهوة المختصة الباردة المعبأة مسبقاً واستهداف عشاق القهوة في الخليج.",
    objectives: "زيادة الوعي بالمنتج الجديد وتحقيق مبيعات ممتازة عبر نقرات المتجر الإلكتروني.",
    age: "18-34",
    gender: "both",
    location: "المملكة العربية السعودية والخليج",
    education: "University",
    interests: "Coffee, specialty coffee, cafes",
    message: "طعم الأصالة في كل رشفة باردة تنعش يومك.",
    slogans: "أصالة باردة، قهوة مختصة، طاقة يومك",
    platforms: ["instagram", "tiktok"],
    durationValue: "14",
    durationUnit: "days",
    budget: "1500",
    contentTypes: ["video", "design"],
    dialect: "gulf"
  },
  resultObj: {
    campaignName: "أصالة للقهوة المختصة (Asala Coffee Launch)",
    score: 92,
    status: "strong",
    engagementRate: 6.4,
    engagementGrade: "excellent",
    sentiment: {
      positive: 85,
      neutral: 11,
      negative: 4
    },
    peakTime: {
      from: "18:00",
      to: "22:00"
    },
    metrics: {
      views: 74200,
      likes: 2600,
      comments: 410,
      shares: 210,
      clicks: 5936
    },
    timeline: [{
      day: "Mon",
      views: 8200,
      engagement: 5.8
    }, {
      day: "Tue",
      views: 9100,
      engagement: 6.1
    }, {
      day: "Wed",
      views: 9800,
      engagement: 6.3
    }, {
      day: "Thu",
      views: 12400,
      engagement: 6.6
    }, {
      day: "Fri",
      views: 14200,
      engagement: 7
    }, {
      day: "Sat",
      views: 11500,
      engagement: 6.5
    }, {
      day: "Sun",
      views: 9e3,
      engagement: 6
    }],
    insights: ["حققت الحملة تغلغلاً كبيراً بفضل مواءمتها الاستثنائية مع اللهجة الخليجية المحلية.", "مقاطع الفيديو ريلز كانت محرك التفاعل الأساسي بنسبة تفوق 2.5 ضعف مقارنة بالصور.", "تنسيق الميزانية المرصودة حقق أقصى فاعلية في الوصول للجمهور المستهدف دون هدر مالي."],
    recommendations: [{
      title: "تركيز الميزانية في تيك توك وإنستجرام ريلز",
      detail: "الاستمرار في إنتاج مقاطع فيديو ريلز قصيرة تحاكي نبرة الحياة اليومية للشباب الخليجي.",
      category: "content"
    }, {
      title: "استثمار أوقات النشر المسائية",
      detail: "أفضل تفاعل ينشط بين الساعة 6 مساءً و 10 مساءً، لذا جدول المنشورات الرئيسية في هذا النطاق.",
      category: "timing"
    }],
    strengths: ["مواءمة ثقافية متميزة جداً بفضل اللهجة الخليجية المصممة بعناية.", "تركيز واضح ومكثف على منصات التفاعل البصري التي ينشط فيها الشباب.", "جاذبية شعار الحملة المباشر والملائم للأجواء الصيفية والمزاج اليومي للمستهلك."],
    weaknesses: ["الاعتماد الكامل على المنشورات الإعلانية المدفوعة يمثل خطراً عند انتهاء الميزانية.", "نقص مؤشرات تتبع المنافسين المباشرين في السوق الإقليمي المحيط."],
    advancedRecommendations: [],
    longTermRoadmap: {
      shortTerm: [],
      midTerm: [],
      longTerm: []
    }
  },
  aiReport: {
    reportDescription: "حملة 'أصالة للقهوة المختصة' تمثل نموذجاً يحتذى به في التموضع التسويقي والملاءمة الثقافية العالية. باستخدام اللهجة الخليجية بنسب ذكية ومدروسة، استطاعت العلامة التجارية اختراق الحواجز العاطفية وتحقيق رنين معنوي ومصداقية فورية لدى عشاق القهوة الشباب. يضمن هذا الأداء المتميز ومعدل التفاعل الاستثنائي البالغ 6.4% كفاءة مذهلة في تحويل النقرات والزيارات إلى مبيعات ملموسة ومستدامة. تعد هذه الحملة جاهزة تسويقياً بشكل كامل ومحسنة للاستحواذ على حصة سوقية هامة.",
    campaignEvaluation: "تظهر استراتيجية حملة أصالة عمقاً كبيراً وتخطيطاً استباقياً ناضجاً. اختيار المنصات متوافق تماماً مع طبيعة المنتج وعمر الجمهور المستهدف (18-34)، كما أن الميزانية الموزعة على منصتين فقط تضمن عدم تشتت الزخم الإعلاني وتحقق أقصى فاعلية ممكنة.",
    performanceForecast: "يتوقع خبراء الذكاء الاصطناعي انتشاراً عضوياً واسع النطاق (Viral potential) في الأسابيع الأولى، مع الحفاظ على كلفة نقرة منخفضة للغاية بفضل مستويات التفاعل العالية والمشاركة النشطة لجمهور القهوة.",
    strengths: ["الملاءمة الثقافية المثالية واستخدام اللهجة الخليجية المحلية.", "توزيع الميزانية عالي الكفاءة على قنوات بصرية مركزة.", "الرسالة التسويقية جذابة للغاية ومحفزة للشراء العفوي."],
    weaknesses: ["مخاطر تراجع التفاعل التدريجي بعد أسبوعين في حال عدم تجديد المشاهد الإعلانية.", "غياب خطة واضحة لرسائل إعادة الاستهداف (Retargeting) بعد النقرة الأولى."],
    audienceBehaviorAnalysis: "الجمهور المستهدف من فئة الشباب الخليجي متأثر للغاية بجودة الصورة ومصداقية المراجعات العفوية، ولديه تقدير خاص للقهوة كجزء رئيسي من نمط حياته وتجمعاته الاجتماعية اليومية.",
    platformAnalysis: "تيك توك وإنستجرام ريلز هما المنصتان الذهبيتان لهذا المنتج، حيث تمنحان خوارزميات النشر العضوي فرصة هائلة للوصول لآلاف المهتمين دون كلفة إضافية.",
    recommendations: [{
      title: "التعاون مع صناع محتوى محليين",
      detail: "أرسل عينات مجانية لصناع المحتوى الخليجيين لتصوير تجربة تذوق عفوية وغير مصطنعة."
    }, {
      title: "تقديم كود خصم صيفي حصري",
      detail: "اطرح كود خصم تفاعلي مثل (ASALA10) لتتبع مصادر المبيعات وتحفيز الشراء الفوري."
    }]
  }
}, {
  id: "pre_loaded_2",
  name: "صحتك في حركتك (Your Health in Movement)",
  mode: "post",
  userType: "user",
  date: "2026-06-15",
  budget: "800",
  platforms: ["instagram"],
  dialect: "levantine",
  score: 78,
  status: "average",
  engagementRate: 4.2,
  sentiment: {
    positive: 74,
    neutral: 20,
    negative: 6
  },
  metrics: {
    views: 32e3,
    likes: 740,
    comments: 120,
    shares: 60,
    clicks: 2560
  },
  campaignObj: {
    name: "صحتك في حركتك (Your Health in Movement)",
    type: ["social", "informational"],
    organizer: "كابتن سارة - مدربة لياقة",
    description: "برنامج رياضي مجتمعي نسائي للتوعية بأهمية نمط الحياة الصحي والنشاط البدني المنزلي اليومي.",
    objectives: "تحفيز 500 سيدة للمشاركة في التحدي الرياضي المنزلي المجاني.",
    age: "18-45",
    gender: "female",
    location: "الأردن وبلاد الشام",
    education: "High School, University",
    interests: "Fitness, wellness, home workout, healthy food",
    message: "خطوة صغيرة كل يوم بتصنع فرق كبير بصحتك ونشاطك.",
    slogans: "صحتك بحركتك، تحدي اللياقة، نمط حياة صحي",
    platforms: ["instagram"],
    durationValue: "30",
    durationUnit: "days",
    budget: "800",
    contentTypes: ["video", "image"],
    dialect: "levantine"
  },
  resultObj: {
    campaignName: "صحتك في حركتك (Your Health in Movement)",
    score: 78,
    status: "average",
    engagementRate: 4.2,
    engagementGrade: "good",
    sentiment: {
      positive: 74,
      neutral: 20,
      negative: 6
    },
    peakTime: {
      from: "19:00",
      to: "22:00"
    },
    metrics: {
      views: 32e3,
      likes: 740,
      comments: 120,
      shares: 60,
      clicks: 2560
    },
    timeline: [{
      day: "Mon",
      views: 3800,
      engagement: 3.8
    }, {
      day: "Tue",
      views: 4100,
      engagement: 4
    }, {
      day: "Wed",
      views: 4300,
      engagement: 4.1
    }, {
      day: "Thu",
      views: 5200,
      engagement: 4.4
    }, {
      day: "Fri",
      views: 5800,
      engagement: 4.6
    }, {
      day: "Sat",
      views: 4900,
      engagement: 4.3
    }, {
      day: "Sun",
      views: 4100,
      engagement: 3.9
    }],
    insights: ["تفاعل نسائي قوي ومؤثر بفضل الطابع التحفيزي البسيط والنبرة الودودة باللهجة الشامية اللطيفة.", "المشاركة اليومية للقصص واليوميات ساهمت في رفع معدل بقاء وتفاعل الجمهور العضوي."],
    recommendations: [{
      title: "إدماج الفيديوهات القصيرة للتفسير المباشر",
      detail: "تفضل المتابعات مقاطع ريلز التي تشرح حركات رياضية دقيقة مع النصائح التغذوية البسيطة.",
      category: "content"
    }],
    strengths: ["نبرة عاطفية وصادقة تخلق شعوراً بالانتماء والمجتمع الداعم بين المشاركات.", "التزام قوي وصريح من الجمهور المتابع بمشاركة تحدياتهم اليومية بحرية."],
    weaknesses: ["محدودية الميزانية تحد من نطاق الوصول خارج الدائرة الاجتماعية القريبة.", "الاعتماد الكبير على النشر اليدوي المجهد للمدربة طوال الـ 30 يوماً."],
    advancedRecommendations: [],
    longTermRoadmap: {
      shortTerm: [],
      midTerm: [],
      longTerm: []
    }
  },
  aiReport: {
    reportDescription: "تمثل مبادرة 'صحتك في حركتك' حالة دراسية ممتازة في كيفية بناء مجتمع تسويقي وفيّ ومتفاعل بأقل التكاليف الممكنة. استخدام النبرة التشجيعية والودودة باللهجة الشامية العفوية أزال كلف التكلف وبنى جسراً من الثقة الفورية مع السيدات الباحثات عن بيئة رياضية داعمة خالية من الضغوط. برغم الميزانية المحدودة (800 دولار)، حقق التفاعل معدل 4.2% وهو مؤشر ممتاز يعكس شغف الجمهور واستعداده للاستمرار والترويج الشفهي للمبادرة.",
    campaignEvaluation: "الحملة مبنية على أسس سليمة عاطفياً ومجتمعياً. التركيز الحصري على منصة إنستجرام كان قراراً حكيماً في ظل الميزانية المتواضعة، مما سمح للمدربة ببناء هوية بصرية مألوفة وعلاقة تفاعلية مباشرة مع السيدات عبر الرسائل والتعليقات والقصص اليومية.",
    performanceForecast: "يُتوقع أن تحافظ الحملة على نمو عضوي متصاعد بفضل مشاركات المتابعات لقصصهن وتجاربهن الخاصة (UGC)، مما يعمل كدعاية مجانية مستمرة تضاعف من أثر الحملة على المدى الطويل.",
    strengths: ["بناء مجتمع نسائي تفاعلي متماسك وداعم.", "اللهجة الشامية العفوية والودية ملامسة جداً لقلوب الجمهور.", "مصداقية عالية للمدربة تترجم إلى ولاء طويل الأمد."],
    weaknesses: ["صعوبة الوصول لشرائح جديدة خارج إنستجرام بسبب غياب الميزانية الممولة.", "خطر تعرض المتابعات للملل أو الفتور الإعلاني بعد انتهاء فترة التحدي."],
    audienceBehaviorAnalysis: "الجمهور من السيدات يفضل المحتوى التحفيزي اليومي المتكرر، ويبحث عن خطوات سهلة التنفيذ تناسب روتينهن المنزلي المزدحم، كما يثقن بالتجارب والنتائج الحقيقية للمشاركات الأخريات.",
    platformAnalysis: "إنستجرام هي المنصة المثالية للنمط البصري والقصصي لهذه الحملة، حيث يسهل استخدام ميزات الملصقات التفاعلية والأسئلة لزيادة الارتباط اليومي.",
    recommendations: [{
      title: "إطلاق مسابقة أسبوعية بجوائز رمزية",
      detail: "قدمي جوائز معنوية بسيطة كاستشارة مجانية أو خطة تغذية مخصصة لتنشيط التفاعل دورياً."
    }, {
      title: "تصوير مقاطع ريلز قصيرة لتمارين صحيحة",
      detail: "انشري فيديوهات مدتها 15 ثانية تشرح الأخطاء الشائعة في التمارين لتوفير قيمة علمية سريعة ومقنعة."
    }]
  }
}, {
  id: "pre_loaded_3",
  name: "متجر واحة التقنية (Ramadan Tech Offers)",
  mode: "post",
  userType: "org",
  date: "2026-06-08",
  budget: "3500",
  platforms: ["facebook", "instagram", "youtube"],
  dialect: "egyptian",
  score: 63,
  status: "average",
  engagementRate: 3.1,
  sentiment: {
    positive: 58,
    neutral: 32,
    negative: 10
  },
  metrics: {
    views: 11e4,
    likes: 1900,
    comments: 340,
    shares: 80,
    clicks: 8800
  },
  campaignObj: {
    name: "متجر واحة التقنية (Ramadan Tech Offers)",
    type: ["commercial"],
    organizer: "واحة التقنية للأجهزة الذكية",
    description: "حملة ترويجية كبرى وتخفيضات موسمية هائلة بمناسبة شهر رمضان على الأجهزة الذكية والأجهزة اللوحية.",
    objectives: "زيادة مبيعات المتجر الإلكتروني وتحقيق 200 طلب شراء خلال الشهر الكريم.",
    age: "25-45",
    gender: "both",
    location: "مصر والقاهرة",
    education: "University",
    interests: "Tech gadgets, tablets, mobile accessories, online shopping",
    message: "لمّ شمل التكنولوجيا بأفضل عروض في رمضان مع واحة التقنية.",
    slogans: "عروض رمضان، أجهزة ذكية بأفضل سعر، واحة التقنية",
    platforms: ["facebook", "instagram", "youtube"],
    durationValue: "30",
    durationUnit: "days",
    budget: "3500",
    contentTypes: ["image", "design"],
    dialect: "egyptian"
  },
  resultObj: {
    campaignName: "متجر واحة التقنية (Ramadan Tech Offers)",
    score: 63,
    status: "average",
    engagementRate: 3.1,
    engagementGrade: "good",
    sentiment: {
      positive: 58,
      neutral: 32,
      negative: 10
    },
    peakTime: {
      from: "21:00",
      to: "01:00"
    },
    metrics: {
      views: 11e4,
      likes: 1900,
      comments: 340,
      shares: 80,
      clicks: 8800
    },
    timeline: [{
      day: "Mon",
      views: 12e3,
      engagement: 2.8
    }, {
      day: "Tue",
      views: 13500,
      engagement: 3
    }, {
      day: "Wed",
      views: 14e3,
      engagement: 2.9
    }, {
      day: "Thu",
      views: 18e3,
      engagement: 3.2
    }, {
      day: "Fri",
      views: 19500,
      engagement: 3.5
    }, {
      day: "Sat",
      views: 17e3,
      engagement: 3.3
    }, {
      day: "Sun",
      views: 16e3,
      engagement: 3.1
    }],
    insights: ["حقق الإعلان وصولاً لافتاً ومكثفاً بفضل قوة ميزانية الإطلاق وتنوع القنوات الإعلانية.", "تراجع مستوى التفاعل الفعلي مقارنة بالميزانية بسبب النبرة البيعية الجافة وغياب الطابع الإنساني الرمضاني."],
    recommendations: [{
      title: "دمج الأجواء الرمضانية المصرية المألوفة",
      detail: "استبدل التصاميم الصامتة بمقاطع تفاعلية قصيرة تبرز كرم ولمة العائلة مع لمسة فكاهية مصرية.",
      category: "strategy"
    }],
    strengths: ["تخفيضات حقيقية وعروض مغرية تمثل حافزاً قوياً جداً للشراء الفعلي.", "مستوى انتشار هائل ومستمر طوال الشهر بفضل استقرار تمويل الحملة."],
    weaknesses: ["تشتت كبير لميزانية النشر عبر منصات عديدة دون تخصيص المحتوى المناسب لكل منها.", "بطء شديد في ردود خدمة العملاء على الأسئلة بخصوص أسعار المنتجات في التعليقات."],
    advancedRecommendations: [],
    longTermRoadmap: {
      shortTerm: [],
      midTerm: [],
      longTerm: []
    }
  },
  aiReport: {
    reportDescription: "حملة 'واحة التقنية' حققت انتشاراً واسعاً ووصولاً رقمياً هائلاً بلغ 110 آلاف مشاهدة بفضل الميزانية السخية، إلا أنها واجهت عقبات واضحة في معدلات التحويل الفعلي ومستوى الارتباط العاطفي. تبني نبرة تجارية بحتة خالية من الطابع الإنساني الرمضاني أضعف من جاذبية العلامة التجارية في موسم يتميز بالدفء والترابط العائلي. مع معدل تفاعل منخفض نسبياً بلغ 3.1%، تظهر المؤشرات وجود هدر إعلاني واضح نتيجة تشتت التمويل عبر عدة منصات دون تكييف المحتوى بشكل مستقل لكل منصة.",
    campaignEvaluation: "أداء الحملة متوسط ومشتت. برغم العروض القوية والتخفيضات الممتازة، عانت الحملة من بطء تحويل النقرات إلى مبيعات ملموسة، ويعزى ذلك لضعف تهيئة صفحة الهبوط وبطء خدمة العملاء في التجاوب مع استفسارات المشترين المتحمسين في صندوق التعليقات والرسائل.",
    performanceForecast: "يُخشى تعرض الميزانية المتبقية للهدر إذا لم يتم فوراً تعديل أسلوب استهداف الإعلانات، وتركيز الإنفاق على فيسبوك كونه القناة الأكثر جلباً للمبيعات المباشرة لهذا النوع من المنتجات في السوق المصري.",
    strengths: ["قيمة العروض ممتازة والخصومات المطروحة منافسة وقوية.", "تغطية جغرافية ممتازة وانتشار كثيف بفضل الميزانية القوية."],
    weaknesses: ["نبرة إعلانية تقليدية خالية من المواءمة الثقافية الرمضانية المحببة.", "بطء كبير وتأخر في الرد على تعليقات المستخدمين المتحمسين بخصوص الأسعار.", "تشتيت الميزانية على 3 قنوات واسعة دون مواءمة المحتوى بشكل خاص لكل منها."],
    audienceBehaviorAnalysis: "المستهلك المصري في رمضان ينشط تسوقه ليلاً بعد الإفطار، ويستجيب بقوة للرسائل الدافئة والقصص العائلية أو الفكاهية، ويحتاج لردود سريعة ومبسطة بخصوص السعر وطريقة التوصيل.",
    platformAnalysis: "فيسبوك هو المنصة الرائدة والأكثر فاعلية لتحقيق المبيعات المباشرة والتفاعل الحواري في مصر، بينما يفضل استخدام يوتيوب فقط للفيديوهات القصيرة والمقاطع الاستعراضية الجذابة.",
    recommendations: [{
      title: "تفعيل ميزة الرد الآلي الفوري بالأسعار",
      detail: "اربط الإعلانات بنظام ردود آلي ذكي يرسل تفاصيل الأسعار وروابط الشراء المباشر للعميل بمجرد تعليقه."
    }, {
      title: "إعادة توجيه الميزانية لصالح فيسبوك",
      detail: "أوقف تمويل إعلانات يوتيوب المكلفة وركز كامل الميزانية المتبقية لتعزيز منشورات فيسبوك التفاعلية."
    }]
  }
}, {
  id: "pre_loaded_4",
  name: "مبادرة تشجير الحي (Neighborhood Green Drive)",
  mode: "pre",
  userType: "user",
  date: "2026-05-24",
  budget: "300",
  platforms: ["facebook", "instagram"],
  dialect: "levantine",
  score: 81,
  status: "strong",
  engagementRate: 5.1,
  sentiment: {
    positive: 88,
    neutral: 10,
    negative: 2
  },
  metrics: {
    views: 9800,
    likes: 280,
    comments: 45,
    shares: 35,
    clicks: 784
  },
  campaignObj: {
    name: "مبادرة تشجير الحي (Neighborhood Green Drive)",
    type: ["social"],
    organizer: "مجموعة متطوعي عمان الخضراء",
    description: "حملة أهلية تطوعية لتشجير وتجميل الشوارع والأرصفة المحلية لتعزيز الوعي البيئي وحماية الطبيعة.",
    objectives: "جمع 100 متطوع وتأمين تبرعات عينية بـ 300 شتلة صالحة للزراعة في أحياء المدينة.",
    age: "18-40",
    gender: "both",
    location: "الأردن وعمان",
    education: "Any",
    interests: "Environment, volunteering, nature, plants, social work",
    message: "شجرة اليوم هي ظل ولطف لبكرة.. شاركنا نزرع الخير ببلدنا.",
    slogans: "شجر حينا، عمان خضراء، تطوع للبيئة",
    platforms: ["facebook", "instagram"],
    durationValue: "10",
    durationUnit: "days",
    budget: "300",
    contentTypes: ["image", "design"],
    dialect: "levantine"
  },
  resultObj: {
    campaignName: "مبادرة تشجير الحي (Neighborhood Green Drive)",
    score: 81,
    status: "strong",
    engagementRate: 5.1,
    engagementGrade: "excellent",
    sentiment: {
      positive: 88,
      neutral: 10,
      negative: 2
    },
    peakTime: {
      from: "17:00",
      to: "20:00"
    },
    metrics: {
      views: 9800,
      likes: 280,
      comments: 45,
      shares: 35,
      clicks: 784
    },
    timeline: [{
      day: "Mon",
      views: 900,
      engagement: 4.8
    }, {
      day: "Tue",
      views: 1100,
      engagement: 5
    }, {
      day: "Wed",
      views: 1200,
      engagement: 4.9
    }, {
      day: "Thu",
      views: 1500,
      engagement: 5.3
    }, {
      day: "Fri",
      views: 1800,
      engagement: 5.5
    }, {
      day: "Sat",
      views: 1600,
      engagement: 5.2
    }, {
      day: "Sun",
      views: 1700,
      engagement: 5.1
    }],
    insights: ["التفاف مجتمعي لافت وتأييد واسع للغاية بفضل نبل الهدف وشفافية الرسالة البيئية.", "حققت الحملة درجة تفاعل عاطفي استثنائية (88% مشاعر إيجابية) تبرهن على رغبة المجتمع في المبادرات التطوعية الهادفة."],
    recommendations: [{
      title: "تفعيل مجموعات فيسبوك المحلية والواتساب",
      detail: "انشر تفاصيل الحملة مجاناً في مجموعات الأحياء السكنية للحصول على متطوعين مباشرين ودون تكلفة إعلانية.",
      category: "strategy"
    }],
    strengths: ["مبادرة نقية وخالية من الأغراض التجارية تكسب تعاطفاً ومصداقية تلقائية فورية.", "وضوح الرسالة المباشرة وبساطتها وسهولة المشاركة فيها ميدانياً."],
    weaknesses: ["الميزانية المتواضعة جداً (300 دولار) تصعّب إمكانية الترويج واسع النطاق."],
    advancedRecommendations: [],
    longTermRoadmap: {
      shortTerm: [],
      midTerm: [],
      longTerm: []
    }
  },
  aiReport: {
    reportDescription: "مبادرة 'تشجير الحي' حققت نجاحاً باهراً وتأييداً مجتمعياً رائعاً بنسبة مشاعر إيجابية استثنائية بلغت 88%. يثبت هذا التحليل التنبؤي أن المبادرات البيئية غير الربحية التي تخاطب المجتمع بروح تشاركية تكتسب فاعلية مضاعفة وتتغلب على قيود الميزانيات المتواضعة (300 دولار فقط). النبرة الدافئة والمحلية باللهجة الأردنية الشامية عززت من مشاعر المواطنة الصالحة، وخلقت دافعاً ذاتياً قوياً للمشاركة والتبرع بالشتلات الزراعية ميدانياً.",
    campaignEvaluation: "الحملة جاهزة وممتازة للتطبيق الفعلي. برغم الميزانية المنخفضة، استغلت الحملة قنوات النشر البصري بذكاء واستطاعت تركيز جهودها الجغرافية على منطقة عمان لتفادي ضياع المشاهدات الإعلانية في مناطق غير مستهدفة بالعمل الميداني.",
    performanceForecast: "يُتوقع استجابة ميدانية ممتازة ومشاركة نشطة من المتطوعين، مع إمكانية استقطاب رعاية عينية هامة من مشاتل زراعية محلية أو جهات أهلية بمجرد انطلاق الفعالية ومشاركة الصور الحية.",
    strengths: ["رسالة إنسانية نبيلة وتكافل مجتمعي يبعث على الفخر والمصداقية العالية.", "الملاءمة اللغوية والوجدانية مع النبض المحلي وسلوك الشباب المتطوع."],
    weaknesses: ["الميزانية المحدودة تعيق شراء أدوات تشجير إضافية أو تمويل إعلانات الفيديو الاحترافية."],
    audienceBehaviorAnalysis: "الجمهور من الشباب والناشطين في عمان مهتم جداً بالقضايا البيئية ويقدّر العمل الجماعي الشفاف، ويبحث عن مبادرات آمنة وموثوقة يقدم فيها جهداً ملموساً يخدم مدينته.",
    platformAnalysis: "فيسبوك هو المنصة الذهبية للتعبئة والترتيب الميداني وتنسيق مجموعات العمل، بينما تبرز أهمية إنستجرام لمشاركة الصور الجمالية قبل وبعد التشجير لإلهام الآخرين.",
    recommendations: [{
      title: "التواصل مع المشاهير وصناع التأثير المحليين",
      detail: "تواصل مع صناع المحتوى المهتمين بالطبيعة والبيئة في الأردن لدعوتهم للمشاركة مجاناً والترويج للحدث."
    }, {
      title: "تصوير وتوثيق الحدث بفيديو سريع",
      detail: "أنتج فيديو سريع بتقنية تسريع الوقت (Time-lapse) لعملية الزراعة والتحول الجمالي للشارع، ليكون ركيزة لحملاتك القادمة."
    }]
  }
}];
function Reports() {
  const {
    t,
    lang
  } = useI18n();
  const ar = lang === "ar";
  const L = (en, arT) => ar ? arT : en;
  useNavigate();
  const [campaigns, setCampaigns] = reactExports.useState([]);
  const [selectedCampaign, setSelectedCampaign] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState("report");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterUserType, setFilterUserType] = reactExports.useState("all");
  const [filterMode, setFilterMode] = reactExports.useState("all");
  const [filterScore, setFilterScore] = reactExports.useState("all");
  const [reportLoading, setReportLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const historyRaw = localStorage.getItem("pi-campaign-history");
    let loadedHistory = [];
    try {
      loadedHistory = historyRaw ? JSON.parse(historyRaw) : [];
    } catch (e) {
      loadedHistory = [];
    }
    if (loadedHistory.length === 0) {
      localStorage.setItem("pi-campaign-history", JSON.stringify(INITIAL_CAMPAIGNS));
      setCampaigns(INITIAL_CAMPAIGNS);
      loadedHistory = INITIAL_CAMPAIGNS;
    } else {
      setCampaigns(loadedHistory);
    }
    const handleReload = () => {
      const freshHistoryRaw = localStorage.getItem("pi-campaign-history");
      let freshHistory = [];
      try {
        freshHistory = freshHistoryRaw ? JSON.parse(freshHistoryRaw) : [];
      } catch (e) {
        freshHistory = [];
      }
      setCampaigns(freshHistory);
      const lastResultId2 = sessionStorage.getItem("pi-current-run-id") || localStorage.getItem("pi-selected-campaign-id");
      let selection = null;
      if (lastResultId2) {
        selection = freshHistory.find((item) => item.id === lastResultId2) || null;
      }
      if (!selection && freshHistory.length > 0) {
        selection = freshHistory[0];
      }
      if (selection) {
        setSelectedCampaign(selection);
        setActiveTab("report");
      }
    };
    window.addEventListener("selected-campaign-changed", handleReload);
    window.addEventListener("campaign-history-updated", handleReload);
    const lastResultId = sessionStorage.getItem("pi-current-run-id") || localStorage.getItem("pi-selected-campaign-id");
    let initialSelection = null;
    if (lastResultId) {
      initialSelection = loadedHistory.find((item) => item.id === lastResultId) || null;
    }
    if (!initialSelection && loadedHistory.length > 0) {
      initialSelection = loadedHistory[0];
    }
    if (initialSelection) {
      handleSelectCampaign(initialSelection, loadedHistory);
    } else {
      setActiveTab("report");
    }
    return () => {
      window.removeEventListener("selected-campaign-changed", handleReload);
      window.removeEventListener("campaign-history-updated", handleReload);
    };
  }, []);
  const stats = reactExports.useMemo(() => {
    const total = campaigns.length;
    if (total === 0) {
      return {
        total,
        avgScore: 0,
        avgEngagement: "0.0",
        totalBudget: "0"
      };
    }
    const sumScore = campaigns.reduce((acc, c) => acc + c.score, 0);
    const sumEng = campaigns.reduce((acc, c) => acc + c.engagementRate, 0);
    const sumBudget = campaigns.reduce((acc, c) => acc + (parseFloat(c.budget) || 0), 0);
    return {
      total,
      avgScore: Math.round(sumScore / total),
      avgEngagement: (sumEng / total).toFixed(1),
      totalBudget: sumBudget.toLocaleString()
    };
  }, [campaigns]);
  const handleSelectCampaign = async (c, currentCampaignsList) => {
    const activeList = currentCampaignsList || campaigns;
    setSelectedCampaign(c);
    setActiveTab("report");
    sessionStorage.removeItem("pi-current-run-id");
    if (!c.aiReport) {
      setReportLoading(true);
      try {
        const res = await generateCampaignReport({
          data: {
            campaignData: {
              ...c.campaignObj,
              metrics: c.resultObj.metrics,
              score: c.resultObj.score,
              status: c.resultObj.status,
              engagementRate: c.resultObj.engagementRate,
              mode: c.mode
            },
            language: lang
          }
        });
        if (res && !res.error) {
          const updatedCampaigns = activeList.map((item) => {
            if (item.id === c.id) {
              const updatedItem = {
                ...item,
                aiReport: res
              };
              setSelectedCampaign(updatedItem);
              return updatedItem;
            }
            return item;
          });
          setCampaigns(updatedCampaigns);
          localStorage.setItem("pi-campaign-history", JSON.stringify(updatedCampaigns));
        }
      } catch (err) {
        console.error("Failed to generate AI report dynamically:", err);
      } finally {
        setReportLoading(false);
      }
    }
  };
  const handleDelete = (id, e) => {
    e.stopPropagation();
    const updated = campaigns.filter((c) => c.id !== id);
    setCampaigns(updated);
    localStorage.setItem("pi-campaign-history", JSON.stringify(updated));
    if (selectedCampaign?.id === id) {
      setSelectedCampaign(null);
      setActiveTab("history");
    }
  };
  const filteredCampaigns = reactExports.useMemo(() => {
    return campaigns.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || (c.campaignObj?.organizer || "").toLowerCase().includes(searchQuery.toLowerCase()) || (c.campaignObj?.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesUserType = filterUserType === "all" ? true : c.userType === filterUserType;
      const matchesMode = filterMode === "all" ? true : c.mode === filterMode;
      const matchesScore = filterScore === "all" ? true : filterScore === "excellent" ? c.score >= 80 : filterScore === "average" ? c.score >= 60 && c.score < 80 : c.score < 60;
      return matchesSearch && matchesUserType && matchesMode && matchesScore;
    });
  }, [campaigns, searchQuery, filterUserType, filterMode, filterScore]);
  const handleDownloadReport = (record) => {
    const content = `========================================================
PUBLIC INSIGHT - CAMPAIGN REPORT LOG
========================================================
Campaign Name: ${record.name}
User Type: ${record.userType === "org" ? "Organization" : "Individual User"}
Analysis Date: ${record.date}
Mode: ${record.mode === "pre" ? "PRE-LAUNCH SIMULATION" : "POST-LAUNCH ANALYTICS"}
Overall Success Score: ${record.score}/100
Engagement Rate: ${record.engagementRate}%
Dialect Target: ${record.dialect.toUpperCase()}
Total Budget: $${parseFloat(record.budget).toLocaleString()}

--------------------------------------------------------
ESTIMATED PERFORMANCE METRICS
--------------------------------------------------------
Views: ${Intl.NumberFormat().format(record.metrics.views)}
Likes: ${Intl.NumberFormat().format(record.metrics.likes)}
Comments: ${Intl.NumberFormat().format(record.metrics.comments)}
Shares: ${Intl.NumberFormat().format(record.metrics.shares)}

--------------------------------------------------------
AI RECONSTRUCTED EXECUTIVE SUMMARY
--------------------------------------------------------
${record.aiReport?.reportDescription || "No cached summary description found."}

--------------------------------------------------------
STRENGTHS & SUCCESS FACTORS
--------------------------------------------------------
${(record.aiReport?.strengths || record.resultObj?.strengths || []).map((s, i) => `${i + 1}. ${s}`).join("\n")}

--------------------------------------------------------
RISKS & CAUSES OF FAILURE (Worst-Case)
--------------------------------------------------------
${(record.aiReport?.weaknesses || record.resultObj?.weaknesses || []).map((w, i) => `${i + 1}. ${w}`).join("\n")}

--------------------------------------------------------
ACTIONABLE STRATEGIC RECOMMENDATIONS
--------------------------------------------------------
${(record.aiReport?.recommendations || record.resultObj?.recommendations || []).map((r, i) => `${i + 1}. ${r.title}: ${r.detail}`).join("\n")}

========================================================
Generated dynamically by Public Insight AI System
`;
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${record.name.replace(/\s+/g, "_")}_insight_report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const defaultEvaluation = L("Overall, the campaign strategy shows robust positioning with well-defined channels. Ad creatives align well with audience pain points, ensuring stable reach and efficient budget utilization.", "بشكل عام، تظهر استراتيجية الحملة تموضعاً قوياً وقنوات إعلانية محددة بعناية. تتناسب التصاميم والرسائل الإعلانية تماماً مع اهتمامات وتطلعات الشريحة المستهدفة، مما يضمن وصولاً مستقراً واستغلالاً مثالياً ومستداماً.");
  const defaultForecast = L("Strong potential to hit high awareness levels with an estimated engagement spike. Localized dialect copy is projected to stay below industry cost-per-click averages.", "فرص قوية لتحقيق معدلات وعي مرتفعة للغاية مع قفزة تفاعل متوقعة بفضل المواءمة الثقافية. يتوقع أن تبقى كلفة النقرة (CPC) دون متوسط السوق في حال الاعتماد على النسخ الإعلانية المحلية.");
  const defaultAudienceAnalysis = L("The target audience is highly responsive to authentic, storytelling ad structures presented in their local dialect. The younger demographic prioritizes directness and high visual engagement.", "يتفاعل الجمهور المستهدف بشكل أساسي مع المحتوى القصصي المعبّر والمصاغ بلهجاتهم المحلية الدارجة. الفئات الشابة تبحث عن المصداقية والسرعة وتفضل مقاطع الفيديو القصيرة التي تطرح حلولاً مباشرة.");
  const defaultPlatformAnalysis = L("Instagram and TikTok consistently output the highest engagement metrics for short-form visual content. Facebook remains a baseline for broader reach.", "تحقق منصتا إنستجرام وتيك توك أعلى معدلات تفاعل عضوي، حيث يتجاوز التفاعل مع مقاطع ريلز والفيديو القصيرة ضعف المنشورات العادية، بينما يحافظ فيسبوك على وصول عائلي مستقر.");
  const dialectNames = {
    standard: L("Standard Arabic (Fusha)", "العربية الفصحى"),
    algerian: L("Algerian Dialect", "اللهجة الجزائرية"),
    egyptian: L("Egyptian Dialect", "اللهجة المصرية"),
    gulf: L("Gulf Dialect", "اللهجة الخليجية"),
    levantine: L("Levantine Dialect", "اللهجة الشامية"),
    english: L("English", "الإنجليزية")
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("reports"), children: activeTab === "history" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-16 text-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-semibold mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("ARCHIVE & ANALYTICS CENTER", "مركز الأرشيف والتحليلات") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-extrabold text-foreground tracking-tight", children: L("Campaign History Log", "سجل الحملات والتحليلات") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: L("Explore past simulated pre-launch reports and post-launch analytics records.", "استعرض كافة محاكات ما قبل الإطلاق وتقارير التحليل المباشر للحملات السابقة.") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/analyze", className: "px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-sm flex items-center justify-center gap-1.5 self-start shadow-sm shadow-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Analyze New Campaign", "بدء تحليل حملة جديدة") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[110px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-10 w-10 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1", children: L("Total Campaigns", "إجمالي الحملات") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-3xl text-gradient leading-none", children: stats.total }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-2 block", children: L("Persistent client records", "سجلات نشطة في لوحتك") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[110px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-10 w-10 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1", children: L("Avg Readiness Score", "متوسط الجاهزية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-3xl text-emerald-500 leading-none", children: [
          stats.avgScore,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-2 block", children: stats.avgScore >= 80 ? L("Highly Cohesive (Green)", "معدل نضوج ممتاز") : L("Needs Adjustments", "يحتاج لبعض التعديل") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[110px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-10 w-10 text-amber-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1", children: L("Avg Engagement Rate", "متوسط التفاعل") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-3xl text-amber-500 leading-none", children: [
          stats.avgEngagement,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-2 block", children: L("Standard industry benchmark: 3.5%", "معدل السوق القياسي: 3.5%") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-5 relative overflow-hidden flex flex-col justify-between min-h-[110px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-10 w-10 text-indigo-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-1", children: L("Cumulative Budget", "الميزانية التراكمية") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-2xl text-gradient leading-none py-1", children: [
          "$",
          stats.totalBudget
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground mt-2 block", children: L("Across all targeted channels", "مرصودة عبر القنوات النشطة") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-2xl bg-surface-elevated/40 border border-border/40 space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30", placeholder: L("Search campaigns by name, institution, description...", "ابحث بالاسم، الجهة المنظمة، وصف الحملة...") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filterUserType, onChange: (e) => setFilterUserType(e.target.value), className: "w-full bg-surface border border-border rounded-xl px-3 py-2.5 text-xs dark:bg-zinc-900 focus:outline-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("User: All Types", "المستخدم: جميع الأنواع") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "user", children: L("Individual User Only", "مستخدم فردي فقط") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "org", children: L("Organization Only", "المؤسسات فقط") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filterMode, onChange: (e) => setFilterMode(e.target.value), className: "w-full bg-surface border border-border rounded-xl px-3 py-2.5 text-xs dark:bg-zinc-900 focus:outline-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("Phase: All Phases", "المرحلة: كل المراحل") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pre", children: L("Pre-Launch Simulation", "قبل الإطلاق (محاكاة)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "post", children: L("Post-Launch Analytics", "بعد الإطلاق (نتائج)") })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filterScore, onChange: (e) => setFilterScore(e.target.value), className: "w-full bg-surface border border-border rounded-xl px-3 py-2.5 text-xs dark:bg-zinc-900 focus:outline-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: L("Score: All Scores", "النقاط: جميع الدرجات") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "excellent", children: L("Excellent (80+)", "ممتاز (80 وأكثر)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "average", children: L("Average (60-79)", "متوسط (60 - 79)") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weak", children: L("Needs Review (<60)", "تحت المراجعة (دون 60)") })
      ] }) })
    ] }) }),
    filteredCampaigns.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 bg-surface-elevated/10 border border-dashed border-border rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-10 w-10 text-muted-foreground/60 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm", children: L("No campaigns match filters", "لم يتم العثور على أي حملة تطابق خيارات التصفية") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 max-w-md mx-auto", children: L("Try adjusting your search query, user type, or status filters above.", "يرجى تعديل نصوص البحث أو فئات التصفية المحددة في الأعلى للمحاولة مجدداً.") })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: filteredCampaigns.map((c) => {
      const isStrong = c.score >= 80;
      const isWeak = c.score < 60;
      const statusColor = isStrong ? "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20" : isWeak ? "bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-500/20" : "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/20";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleSelectCampaign(c), className: "glass-card p-5 hover:border-primary/40 hover:scale-[1.01] transition-all duration-300 group cursor-pointer relative flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 flex-wrap", children: [
              c.mode === "pre" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20", children: L("Pre-Launch", "قبل الإطلاق") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20", children: L("Post-Launch", "بعد الإطلاق") }),
              c.userType === "org" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-2.5 w-2.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Organization", "مؤسسة") })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-2.5 w-2.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: L("Individual", "مستقل") })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-semibold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
              c.date
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold text-base text-foreground group-hover:text-primary transition line-clamp-1 mb-1.5", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4", children: c.campaignObj?.description || L("No campaign details available.", "لا توجد تفاصيل متاحة لوصف هذه الحملة في السجلات.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border/40 flex items-center justify-between mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-muted-foreground block font-bold", children: L("Budget", "الميزانية") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground", children: [
                "$",
                parseFloat(c.budget).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-muted-foreground block font-bold", children: L("Dialect", "اللهجة") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground truncate max-w-[80px] block", children: dialectNames[c.dialect] || c.dialect })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-muted-foreground block font-bold", children: L("Engagement", "التفاعل") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-amber-400", children: [
                c.engagementRate,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-extrabold px-2 py-1 rounded-lg border ${statusColor}`, children: [
              c.score,
              "/100"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: L("Download report as text", "تحميل التقرير كملف نصي"), onClick: (e) => {
                e.stopPropagation();
                handleDownloadReport(c);
              }, className: "p-1.5 rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: L("Delete from history log", "مسح السجل نهائياً"), onClick: (e) => handleDelete(c.id, e), className: "p-1.5 rounded-lg border border-border hover:border-destructive text-muted-foreground hover:text-destructive transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] })
          ] })
        ] })
      ] }, c.id);
    }) })
  ] }) : (
    /* REPORT DETAIL VIEW */
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "space-y-6 pb-16 print:p-0 text-start", id: "campaign-report-capture", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 no-print", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          window.dispatchEvent(new Event("open-archive-center"));
        }, className: "flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/90 transition bg-primary/10 hover:bg-primary/20 px-3.5 py-2 rounded-xl border border-primary/20 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4" }),
          L("Open Archive & Analytics Center", "افتح مركز الأرشيف والتحليلات")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => window.print(), className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition bg-surface-elevated/40 hover:bg-surface-elevated px-3 py-1.5 rounded-lg border border-border/40 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "h-3.5 w-3.5" }),
            L("Export PDF", "تصدير التقرير PDF")
          ] }),
          selectedCampaign && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleDownloadReport(selectedCampaign), className: "flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-90 transition bg-primary/15 hover:bg-primary/25 px-3 py-1.5 rounded-lg border border-primary/20 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
            L("Download Data", "تحميل البيانات TXT")
          ] })
        ] })
      ] }),
      selectedCampaign && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-primary mb-1 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-ping" }),
              selectedCampaign.mode === "pre" ? L("PRE-LAUNCH AI SIMULATION REPORT", "تنبؤات الذكاء الاصطناعي قبل الإطلاق") : L("CAMPAIGN REAL-TIME INSIGHTS", "النتائج الفعلية والتحليلات للحملة")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-extrabold text-foreground tracking-tight", children: selectedCampaign.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5" }),
            selectedCampaign.mode === "pre" ? L("Simulation Engined", "محرك المحاكاة نشط") : L("Direct Platform Integration", "ربط مباشر بالمنصات")
          ] })
        ] }),
        reportLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-10 w-10 text-primary animate-spin mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-base text-foreground", children: L("Google Gemini is executing deep text & cultural analysis...", "جاري استشارة جيميناي لتكوين تحليل دلالي وثقافي عميق...") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-sm mx-auto", children: L("Analyzing emotional sentiment weights, dialect suitabilities, and potential budget optimizations.", "يتم الآن احتساب المشاعر، تحليل كفاءة اللهجة المحلية، وابتكار التوصيات المناسبة.") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 flex flex-col justify-between relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-12 w-12 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1", children: selectedCampaign.mode === "pre" ? L("PREDICTED READINESS SCORE", "درجة الجاهزية المتوقعة") : t("overallScore") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: L("Calculated based on target demographic alignment, budget efficiency, and cultural dialect matching.", "محسوبة بناءً على توافق الجمهور المستهدف، كفاءة الميزانية، وملاءمة اللهجة الثقافية.") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-7xl text-gradient leading-none tracking-tighter flex items-baseline", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedCampaign.score }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground font-normal ml-1", children: "/100" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-2 ${selectedCampaign.score >= 80 ? "text-success border-success/30 bg-success/5" : "text-warning border-warning/30 bg-warning/5"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${selectedCampaign.score >= 80 ? "bg-success" : "bg-warning"} animate-pulse` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedCampaign.score >= 80 ? L("Optimal Readiness Level", "جاهزية استراتيجية كاملة") : L("Refinement Recommended", "يوصى ببعض التحسينات") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 border-success/20 bg-success/5 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-success" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-success font-bold", children: L("CAMPAIGN SUCCESS PROBABILITY", "مؤشر احتمالية النجاح") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: selectedCampaign.score >= 80 ? L("Highly Recommended Fit", "توافق ممتاز ومثالي") : L("Refinement Advised", "يحتاج إلى إعادة توجيه") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-sm", children: L("Reflects the probability of achieving visual network resonance and stable conversions under standard market loads.", "يمثل احتمالية تحقيق انتشار عضوي قوي ومعدل تحويل مستقر في ظل ظروف السوق الحالية.") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24 flex items-center justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "48", cy: "48", r: "40", className: "stroke-muted/10", strokeWidth: "6", fill: "transparent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.circle, { cx: "48", cy: "48", r: "40", className: "stroke-success", strokeWidth: "6", fill: "transparent", strokeDasharray: 251.2, initial: {
                      strokeDashoffset: 251.2
                    }, animate: {
                      strokeDashoffset: 251.2 - 251.2 * selectedCampaign.score / 100
                    }, transition: {
                      duration: 1.4,
                      ease: "easeOut"
                    } })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-2xl text-success", children: [
                      selectedCampaign.score,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] uppercase tracking-widest text-muted-foreground", children: L("Success", "نسبة النجاح") })
                  ] })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold", children: L("Campaign Diagnosis", "تشخيص الحملة") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-5 rounded-2xl bg-surface/40 border border-border/40 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-3 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary shrink-0 mt-1 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/90 leading-loose whitespace-pre-line text-justify font-sans relative z-10", children: selectedCampaign.aiReport?.reportDescription || L("With a success score of " + selectedCampaign.score + "/100 and interactive platform responses, this campaign demonstrated notable engagement. Reaching peak engagement during the evening represents high alignment with modern consumer behavioral patterns. The positive sentiment at " + selectedCampaign.sentiment.positive + "% proves that the key messages hit appropriate market thresholds, avoiding common PR pitfalls. Given this strategic response, double-down investments on platforms like Instagram are highly endorsed. Tailoring messaging specifically in terms of content format (leading with responsive video) will bolster future organic visibility. Our models outline a direct path toward sustained growth across organic networks. Maintain this strategic alignment during the upcoming quarter to lock in gains.", "مع مجموع نقاط " + selectedCampaign.score + " من 100 وتفاعل مستمر عبر المنصات الإعلانية، أظهرت الحملة نجاحًا كبيرًا ومؤشرات نضوج عالية. إن تحقيق ذروة النشاط خلال الفترة المسائية يعكس تماشيًا ذكيًا مع الأنماط السلوكية للجمهور المستهدف بدقة واحترافية. استجابة المشاعر الإيجابية البالغة " + selectedCampaign.sentiment.positive + "% تؤكد على ملاءمة الرسائل واختراقها للحواجز النفسية للمستهلكين بنجاح. بناءً على هذا الأداء، يعد الاستثمار المكثف بقوة على منصات مثل إنستجرام وخوارزميات مقاطع ريلز المخصصة خيارًا استراتيجيًا متميزًا لتحقيق عوائد أفضل. إن ملاءمة رسالتك الإعلانية مع تفضيلات الفيديو القصيرة سيسهم حتمًا في إثراء الوصول العضوي للحسابات بمرونة تامة. يضمن هذا التناسق في تفكيك سلوك الشريحة تكرار معدلات النجاح على المدى الطويل. نوصي بالحفاظ على هذا النفس الاستراتيجي للاستفادة الكاملة من الزخم الحالي وضمان استمراريته.") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold", children: L("Comprehensive campaign Evaluation & Forecast", "التقييم الشامل للحملة وتوقع الأداء") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-surface/30 border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-foreground", children: L("Comprehensive Evaluation", "التقييم الشامل للحملة") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed text-justify", children: selectedCampaign.aiReport?.campaignEvaluation || defaultEvaluation })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-surface/30 border border-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-indigo-500 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-foreground", children: selectedCampaign.mode === "pre" ? L("Performance Forecast (Pre-Launch)", "توقع الأداء والانتشار (قبل الإطلاق)") : L("Performance Analysis (Post-Launch)", "تحليل أداء النتائج (بعد الإطلاق)") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed text-justify", children: selectedCampaign.aiReport?.performanceForecast || defaultForecast })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold", children: L("Campaign Strengths & Risks / Weaknesses", "نقاط القوة والمخاطر (تحليل أسباب الفشل والنجاح)") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-5 w-5 text-emerald-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider", children: L("Points of Strength", "نقاط القوة والنجاح") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: (selectedCampaign.aiReport?.strengths || selectedCampaign.resultObj.strengths || []).map((str, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-xs text-muted-foreground leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 shrink-0 rounded bg-emerald-500/10 grid place-items-center text-[10px] font-bold text-emerald-600 dark:text-emerald-400", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: str })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-rose-500/5 border border-rose-500/10 rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { className: "h-5 w-5 text-rose-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider", children: L("Risks / Causes of Failure (Worst-case)", "تحليل المخاطر وأسباب الفشل المحتملة (أسوأ حالة)") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: (selectedCampaign.aiReport?.weaknesses || selectedCampaign.resultObj.weaknesses || []).map((weak, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2.5 text-xs text-muted-foreground leading-relaxed", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 shrink-0 rounded bg-rose-500/10 grid place-items-center text-[10px] font-bold text-rose-600 dark:text-rose-400", children: "!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: weak })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold", children: L("Audience and Platform deep-dive Analysis", "تحليل سلوك الجمهور ومنصات الإطلاق بالتفصيل") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-surface/30 border border-border/50 flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 rounded-xl bg-blue-500/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-blue-500" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm text-foreground mb-1.5", children: L("Audience Behavior Analysis", "تحليل سلوك الجمهور وتفضيلاته") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed text-justify", children: selectedCampaign.aiReport?.audienceBehaviorAnalysis || defaultAudienceAnalysis })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-2xl bg-surface/30 border border-border/50 flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 shrink-0 rounded-xl bg-orange-500/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5 text-orange-500" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm text-foreground mb-1.5", children: L("Platform Effectiveness Analysis", "تحليل ملاءمة وتأثير المنصات") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed text-justify", children: selectedCampaign.aiReport?.platformAnalysis || defaultPlatformAnalysis })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlgeriaInteractiveMap, { campaignId: selectedCampaign.id, campaignName: selectedCampaign.name, overallScore: selectedCampaign.score, dialect: selectedCampaign.campaignObj?.dialect || "standard", campaignType: selectedCampaign.campaignObj?.type || "awareness", isArabic: ar }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CampaignMediaTracker, { campaignId: selectedCampaign.id, campaignName: selectedCampaign.name, overallScore: selectedCampaign.score, dialect: selectedCampaign.campaignObj?.dialect || "standard", campaignType: selectedCampaign.campaignObj?.type || "awareness", isArabic: ar }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 mb-2 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: t("views") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl mt-1", children: Intl.NumberFormat().format(selectedCampaign.metrics.views) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 mb-2 text-rose-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: t("likes") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl mt-1", children: Intl.NumberFormat().format(selectedCampaign.metrics.likes) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 mb-2 text-amber-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: t("comments") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl mt-1", children: Intl.NumberFormat().format(selectedCampaign.metrics.comments) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 mb-2 text-emerald-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: t("shares") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl mt-1", children: Intl.NumberFormat().format(selectedCampaign.metrics.shares) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold", children: L("Actionable Recommendations", "التوصيات المباشرة والقابلة للتنفيذ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (selectedCampaign.aiReport?.recommendations || selectedCampaign.resultObj.recommendations || []).map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm p-4 rounded-xl bg-surface border border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-emerald-500 shrink-0 mt-0.5 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-1", children: rec.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: rec.detail })
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 mt-4 no-print justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            window.dispatchEvent(new Event("open-archive-center"));
          }, className: "max-w-xs flex-1 text-center py-3.5 rounded-2xl border border-border bg-surface font-semibold hover:bg-surface-elevated text-muted-foreground hover:text-foreground transition cursor-pointer", children: L("Open Campaign Archive", "افتح أرشيف وسجل الحملات") }) })
        ] })
      ] })
    ] })
  ) });
}
export {
  Reports as component
};
