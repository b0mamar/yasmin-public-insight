export type AnalysisResult = {
  campaignName: string;
  score: number;
  status: "weak" | "average" | "strong";
  engagementRate: number;
  engagementGrade: "poor" | "good" | "excellent";
  sentiment: { positive: number; neutral: number; negative: number };
  peakTime: { from: string; to: string };
  metrics: { likes: number; comments: number; shares: number; views: number };
  timeline: { day: string; views: number; engagement: number }[];
  insights: string[];
  recommendations: {
    title: string;
    detail: string;
    category: "content" | "timing" | "targeting" | "strategy";
  }[];
  strengths: string[];
  weaknesses: string[];
  advancedRecommendations: { title: string; detail: string; impactScore: number }[];
  longTermRoadmap: {
    shortTerm: string[];
    midTerm: string[];
    longTerm: string[];
  };
  reportDescription?: string;
  campaignEvaluation?: string;
  performanceForecast?: string;
  audienceBehaviorAnalysis?: string;
  platformAnalysis?: string;
};

export function generateMockAnalysis(
  name: string,
  campaignData?: any,
  isPreLaunch: boolean = true,
  isArabic: boolean = true,
): AnalysisResult {
  const camp = campaignData || {};

  // Extract user inputs with clear fallback defaults
  const campaignName = camp.name || name || "Untitled Campaign";

  // Support multi-select campaign types
  const typesArray = Array.isArray(camp.type)
    ? camp.type
    : typeof camp.type === "string"
      ? camp.type.split(",").map((s: string) => s.trim())
      : [camp.goal || "awareness"];

  const hasType = (t: string) =>
    typesArray.some((x: string) => x.toLowerCase() === t.toLowerCase());
  const type = typesArray[0]?.toLowerCase() || "awareness";

  const description = camp.description || "";
  const objectives = camp.objectives || "";
  const age = camp.age || "18-34";
  const location = camp.location || "";
  const interests = camp.interests || "";
  const slogans = camp.slogans || "";
  const platforms: string[] = Array.isArray(camp.platforms) ? camp.platforms : ["instagram"];
  const budget = camp.budget || "1000";
  const contentTypes: string[] = Array.isArray(camp.contentTypes) ? camp.contentTypes : ["image"];
  const dialect = camp.dialect || "standard";

  // --- SCORE CALCULATION ENGINE ---
  let score = 58; // Starts with standard baseline

  // 1. Budget Density matching platforms
  const budgetNum = parseFloat(budget) || 1000;
  const numPlatforms = Math.max(1, platforms.length);
  const budgetPerPlatform = budgetNum / numPlatforms;

  if (budgetPerPlatform < 150) {
    score -= 12; // Budget too diluted
  } else if (budgetPerPlatform > 1200) {
    score += 15; // Optimal budget per platform
  } else {
    score += 4;
  }

  // 2. Audience & Platform suitability
  const isYoungAudience =
    age.includes("18") ||
    age.includes("24") ||
    age.includes("25") ||
    age.includes("34") ||
    age.toLowerCase().includes("young");
  const hasVideoPlatforms = platforms.some((p: string) =>
    ["tiktok", "instagram", "youtube"].includes(p.toLowerCase()),
  );
  const hasProfessionalPlatforms = platforms.some((p: string) =>
    ["linkedin"].includes(p.toLowerCase()),
  );

  if (isYoungAudience && hasVideoPlatforms) {
    score += 10;
  }
  if (!isYoungAudience && platforms.some((p: string) => ["tiktok"].includes(p.toLowerCase()))) {
    score -= 6; // TikTok not optimal for older cohorts
  }
  if (
    hasProfessionalPlatforms &&
    (hasType("electoral") ||
      hasType("commercial") ||
      interests.toLowerCase().includes("business") ||
      interests.toLowerCase().includes("finance") ||
      interests.toLowerCase().includes("corp"))
  ) {
    score += 8;
  }

  // Bonus for strategic campaign type variety (multi-select richness)
  if (typesArray.length > 1) {
    score += Math.min(6, typesArray.length * 2);
  }

  // 3. Creative Content & Platforms Compatibility
  const hasVideoContent = contentTypes.some((c: string) =>
    ["video", "videos"].includes(c.toLowerCase()),
  );
  if (hasVideoContent && hasVideoPlatforms) {
    score += 12;
  } else if (
    platforms.some((p: string) => ["tiktok"].includes(p.toLowerCase())) &&
    !hasVideoContent
  ) {
    score -= 15; // Major mismatch: TikTok without Video
  }

  // 4. Input Richness and Completeness (Rewarding detailed planning)
  if (description.length > 50) score += 6;
  if (objectives.length > 30) score += 6;
  if (interests.length > 15) score += 5;
  if (slogans.length > 15) score += 5;

  // 5. Dialect alignment
  if (dialect !== "standard" && (location.length > 3 || description.length > 10)) {
    score += 5; // Localized cultural dialect adds conversion power
  }

  // Final logical scoring boundary
  score = Math.max(18, Math.min(98, score));

  // --- DERIVE METRICS FROM CALCULATED SCORE & INPUTS ---
  let engagementRate = 1.6 + score / 18; // range ~2.5% to 7.0%
  if (hasVideoContent) engagementRate += 1.3;
  if (
    platforms.some((p: string) => ["tiktok", "instagram"].includes(p.toLowerCase())) &&
    isYoungAudience
  ) {
    engagementRate += 0.8;
  }
  engagementRate = Math.round(engagementRate * 10) / 10;

  const status = score >= 80 ? "strong" : score >= 60 ? "average" : "weak";
  const engagementGrade =
    engagementRate >= 5.0 ? "excellent" : engagementRate >= 3.5 ? "good" : "poor";

  // Sentiment distribution
  const basePositive = Math.min(85, Math.max(40, 42 + (score - 50) * 0.7));
  const positive = Math.round(basePositive);
  const negative = Math.round(Math.max(4, 20 - (score - 50) * 0.25));
  const neutral = 100 - positive - negative;

  // Peak activity times based on audience interests and platforms
  let peakFrom = "18:00";
  let peakTo = "22:00";
  if (hasProfessionalPlatforms) {
    peakFrom = "09:00";
    peakTo = "13:00"; // business peaks early
  }

  // Numerical Views based on budget & platform reach multipliers
  let viewsMultiplier = 35;
  if (platforms.some((p: string) => ["facebook"].includes(p.toLowerCase()))) viewsMultiplier += 15;
  if (platforms.some((p: string) => ["tiktok"].includes(p.toLowerCase()))) viewsMultiplier += 10;
  if (platforms.some((p: string) => ["linkedin"].includes(p.toLowerCase()))) viewsMultiplier -= 12; // expensive impressions

  const calculatedViews = Math.round(budgetNum * viewsMultiplier * (0.65 + score / 100));
  const views = Math.max(2000, calculatedViews);

  const likes = Math.round(views * (engagementRate / 100) * 0.55);
  const comments = Math.round(likes * 0.16);
  const shares = Math.round(likes * 0.08);

  // --- DYNAMIC TIMELINE GENERATION WITH PSEUDO-RANDOM UNIQUE SALT ---
  const seedString = campaignName + budget + type;
  const hash = seedString.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 15;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeline = days.map((day, idx) => {
    let dayFactor = 1.0;
    if (day === "Thu") dayFactor = 1.3;
    if (day === "Fri") dayFactor = 1.5;
    if (day === "Sat") dayFactor = 1.4;
    if (day === "Sun") dayFactor = 1.1;

    const organicFluctuation = 0.88 + Math.sin(idx + hash) * 0.14;
    const dayViews = Math.round((views / 7) * dayFactor * organicFluctuation);
    const dayEngagement =
      Math.round(engagementRate * (0.85 + Math.cos(idx + hash) * 0.12) * 10) / 10;

    return { day, views: dayViews, engagement: dayEngagement };
  });

  // Localized terms dictionary helper
  const L = (en: string, arText: string) => (isArabic ? arText : en);

  // Dialect names mapping
  const dialectNames: Record<string, { en: string; ar: string }> = {
    standard: { en: "Simplified Modern Standard Arabic", ar: "العربية الفصحى المبسطة" },
    gulf: { en: "Gulf Arabic dialect", ar: "اللهجة الخليجية" },
    egyptian: { en: "Egyptian Arabic dialect", ar: "اللهجة المصرية" },
    levantine: { en: "Levantine Arabic dialect", ar: "اللهجة الشامية" },
    maghrebi: { en: "Maghrebi Arabic dialect", ar: "اللهجة المغاربية" },
  };
  const currentDialectObj = dialectNames[dialect] || dialectNames.standard;
  const dialectText = L(currentDialectObj.en, currentDialectObj.ar);

  // Platforms joined lists
  const platformsJoin = platforms.map((p) => p.toUpperCase()).join(" & ");
  const contentTypesJoin = contentTypes.join(", ");

  // Target Location Label
  const targetLocation = location || L("the target region", "المنطقة المستهدفة");
  const targetInterests =
    interests || L("general interest categories", "الاهتمامات العامة للمتابعين");

  // Dynamic Content Generation based on Campaign type
  let reportDescription = "";
  let campaignEvaluation = "";
  let performanceForecast = "";
  let audienceBehaviorAnalysis = "";
  let platformAnalysis = "";

  if (isArabic) {
    // ARABIC GENERATOR
    switch (type) {
      case "commercial":
        reportDescription = `أظهرت تحليلاتنا الهيكلية أن حملة "${campaignName}" التجارية تمتلك مقومات نضوج تسويقي استثنائي لاختراق سوق ${targetLocation}. تستهدف الحملة بكفاءة الفئة العمرية (${age}) المهتمة بـ "${targetInterests}" بأسلوب يمزج الجاذبية البصرية مع الملاءمة الثقافية المتميزة لـ ${dialectText}. بدعم الميزانية المرصودة البالغة $${budgetNum.toLocaleString()} عبر منصات ${platformsJoin}، فإن التوليفة المقترحة جاهزة لتحقيق تفاعل يصل لـ ${engagementRate}% لخفض تكلفة العميل المحتمل وزيادة معدل التحويل المباشر.`;
        campaignEvaluation = `تعتبر استراتيجية حملة "${campaignName}" التجارية مبنية على أسس ناضجة وصحيحة استهلاكياً. تركيز الجهود الترويجية على قنوات ${platformsJoin} يضمن بقاء رسالتك قريبة من سلوك الشراء الرقمي لجمهورك الشاب، كما أن دمج ${dialectText} يمنح منتجك هوية مألوفة تزيد من ثقة العملاء وتسهم في اتخاذ قرارات الشراء العفوية والواثقة دون تردد.`;
        performanceForecast = isPreLaunch
          ? `يتوقع تحقيق قفزة قياسية في نقرات المتجر ونسب التفاعل بحدود 15-22% خلال الأسبوع الأول من الإطلاق. استثمار مقاطع الفيديو القصيرة والصور الجذابة سيعمل كعامل تسريع للمشاركة العضوية لجمهور "${targetInterests}"، مع خفض كلفة النقر CTR بنسبة 14% مقارنة بمتوسطات السوق التقليدية.`
          : `أظهرت نتائج الأداء الفعلي المتكامل لحملة "${campaignName}" نجاحاً كبيراً في استقطاب المشترين المهتمين بـ "${targetInterests}". معدل التفاعل الحالي البالغ ${engagementRate}% يعكس موثوقية عالية للعلامة التجارية في سوق ${targetLocation}، مستفيداً من الرسوخ الثقافي المباشر ونبرة ${dialectText}.`;
        break;

      case "awareness":
        reportDescription = `تستند حملة "${campaignName}" التوعوية لرفع الوعي المجتمعي العام في ${targetLocation} إلى دعامات اتصالية وجدانية عميقة. تركز الحملة على الفئة ${age} المهتمة بـ "${targetInterests}" مستغلةً قنوات ${platformsJoin}. التوليف الإعلاني المعتمد على ${contentTypesJoin} والمصاغ بأسلوب ${dialectText} يبني جسراً متيناً من الصدق والموثوقية الفورية، مما يضمن تثبيت اسم الحملة وحصد تفاعل عضوي مستدام بمعدل ${engagementRate}%.`;
        campaignEvaluation = `تتميز البنية الاستراتيجية لحملة "${campaignName}" بالقدرة العالية على بناء الصدى والتأثير الثقافي. اختيار منصات النشر ${platformsJoin} يسهل من تدفق الرسائل التوعوية لجمهورك المستهدف من فئة ${age}، ويعد تبني النبرة الودية الهادئة في ${dialectText} ميزة تنافسية كبرى تساعد على كسر جمود المواد الإعلانية وترك أثر فكري نبيل ومستمر.`;
        performanceForecast = isPreLaunch
          ? `تنبؤات الذكاء الاصطناعي تشير لاستجابة دافئة للغاية وتداول عضوي مجاني (Viral potential) لرسائل الحملة لـ "${campaignName}" فور إطلاقها. المحتوى المرئي الموجه سيساهم في رفع نسبة الوعي بمقدار 28% في أوساط جمهور "${targetInterests}" خلال العشرة أيام الأولى.`
          : `تؤكد تقارير الأداء الفعلي نجاح مبادرة "${campaignName}" التوعوية في إحداث تفاعل وجداني عميق. معدل التفاعل البالغ ${engagementRate}% يشير إلى استجابة فائقة من جمهور ${targetLocation} ورغبة أكيدة في حفظ المنشورات ومشاركتها بفضل جاذبية وصيغ الرسائل بالـ ${dialectText}.`;
        break;

      case "electoral":
        reportDescription = `تقدم حملة "${campaignName}" الانتخابية خطة تواصل سياسي وتعبوي مدروس بعناية لمخاطبة الناخبين في ${targetLocation}. عبر منصات ${platformsJoin} وتوجيه جهود الميزانية ($${budgetNum.toLocaleString()}) للفئة العمرية ${age}، تبرز الحملة من خلال صياغة برامجها وشعاراتها بـ ${dialectText}. تساهم هذه التوليفة البصرية من نوع ${contentTypesJoin} في تبسيط المفاهيم وإقناع الناخبين المهتمين بـ "${targetInterests}" بجدوى وأهداف برنامجك بوضوح وتفاعل مميز.`;
        campaignEvaluation = `تظهر الحملة الانتخابية "${campaignName}" نضوجاً اتصالياً عالياً وقدرة على قيادة الحوار الرقمي. اختيار القنوات ${platformsJoin} مناسب جداً لحصد تأييد جيل الشباب النشطين ديمقراطياً، ويمهد استخدام المفاهيم العفوية والواقعية بـ ${dialectText} لرفع مستويات الثقة وصناعة رأي عام مساند وداعم للمرشح بفعالية تامة.`;
        performanceForecast = isPreLaunch
          ? `يتوقع حصد تأييد رقمي لافت وتفاعل متصاعد للوعود والبرامج الانتخابية لـ "${campaignName}". مقاطع الفيديو القصيرة الحوارية ستكون المحرك الأساسي لرفع زخم المشاركة والوصول بين فئات جمهور "${targetInterests}" بمعدل تفاعل متوقع بحدود ${engagementRate}%.`
          : `تكشف نتائج التقييم الفعلي لحملة "${campaignName}" الانتخابية عن نجاح استقطاب شريحة عريضة من المؤيدين في ${targetLocation}. معدل التفاعل الحالي البالغ ${engagementRate}% يتفوق على حملات المنافسين بفضل التبسيط الثقافي الواثق عبر الـ ${dialectText}.`;
        break;

      case "social":
        reportDescription = `تهدف مبادرة "${campaignName}" الاجتماعية والخيرية للتعبئة الأهلية وتحفيز التعاون الإيجابي وتوثيق روابط المجتمع في ${targetLocation}. عبر التركيز على الفئة النشطة ${age} عبر قنوات ${platformsJoin} وبميزانية $${budgetNum.toLocaleString()}، توفر الحملة محتوى تفاعلياً من نوع ${contentTypesJoin} مصاغاً بالكامل بـ ${dialectText}. يعزز هذا التموضع من مستويات المشاعر الإيجابية والمواطنة الصالحة لدى جمهور "${targetInterests}".`;
        campaignEvaluation = `تقييمنا الشامل لحملة "${campaignName}" الاجتماعية يؤكد قوتها العاطفية ونبل رسالتها الاتصالية. مخاطبة السيدات والشباب كشركاء حقيقيين في التنمية والتطوع بدلاً من النبرة البيعية الجافة يرفع من الولاء العضوي للحملة عبر منصات ${platformsJoin}، وتسهل اللغة المحلية في ${dialectText} الالتفاف المجتمعي العفوي.`;
        performanceForecast = isPreLaunch
          ? `نتوقع استجابة ميدانية ممتازة ومشاركة قوية من المتطوعين والمهتمين بـ "${targetInterests}" فور إطلاق حملة "${campaignName}". سينشط التداول الشفهي للإعلانات بنسبة 35% مستفيداً من الطابع الإنساني والتوعوي المقترح بالـ ${dialectText}.`
          : `أثبتت نتائج حملة "${campaignName}" الميدانية والاتصالية كفاءة عالية في جذب المتطوعين والتأييد العضوي. التفاعل البالغ ${engagementRate}% والمشاعر الإيجابية (88%) تبرهن على نجاح كبير للرسائل الاجتماعية المصاغة بـ ${dialectText} في ${targetLocation}.`;
        break;

      case "informational":
        reportDescription = `تسعى الحملة الإعلامية والإخبارية "${campaignName}" لتبسيط المفاهيم الصعبة وتقديم محتوى معرفي وتثقيفي موثوق للجمهور في ${targetLocation}. باستغلال منصات ${platformsJoin} وبميزانية $${budgetNum.toLocaleString()}، تتوجه الرسائل للفئة ${age} المهتمة بـ "${targetInterests}". يساعد استخدام ${dialectText} في تصاميم ${contentTypesJoin} على تعزيز فهم البيانات وتقليص تشتت انتباه القارئ بمعدل تفاعل متوقع ${engagementRate}%.`;
        campaignEvaluation = `تظهر حملة "${campaignName}" الإعلامية كفاءة هيكلية واضحة في ترتيب وتصنيف المعلومات. تصميم الإنفوجرافيك ومقاطع الشرح المصورة بلغة ${dialectText} يتناسب تماماً مع رغبة الفئة ${age} في الحصول على فائدة سريعة دون تعقيد، مما يضمن احتفاظاً عالياً بالجمهور ومصداقية مؤسسية راسخة وممتازة.`;
        performanceForecast = isPreLaunch
          ? `تنبؤات أداء الحملة المعرفية "${campaignName}" تشير إلى نسب قراءة وحفظ قياسية للمنشورات بفضل وضوح وجاذبية المعلومات. ستتضاعف معدلات مشاركة المحتوى التعليمي بين المهتمين بـ "${targetInterests}" بنسبة 25% مقارنة بالحملات الإعلامية التقليدية.`
          : `أثبتت تقارير الحملة الإعلامية "${campaignName}" فاعلية استثنائية في الوعي المعرفي. معدل التفاعل الحالي ${engagementRate}% يعكس اهتماماً كبيراً وقراءة متأنية من جمهور ${targetLocation} للمواد المصاغة بالـ ${dialectText} والمبسطة بصرياً.`;
        break;

      default:
        reportDescription = `تتميز حملة "${campaignName}" بتوليفة مرنة ومبتكرة مصممة بعناية لمخاطبة تطلعات واهتمامات الجمهور في ${targetLocation}. عبر منصات ${platformsJoin} وميزانية مرصودة تبلغ $${budgetNum.toLocaleString()}، تخاطب الحملة الفئة ${age} المهتمة بـ "${targetInterests}". يسهم الدمج الاستراتيجي لـ ${dialectText} مع محتوى متنوع من نوع ${contentTypesJoin} في بناء هوية قوية وجاذبة تضمن حصد تفاعل واعد بمعدل ${engagementRate}%.`;
        campaignEvaluation = `تقييمنا العام لحملة "${campaignName}" يظهر مرونة اتصالية وملاءمة واضحة لمتغيرات السوق. اختيار قنوات النشر متوازن ويدعم الوصول السلس للفئات المستهدفة، كما أن صياغة المحتوى بـ ${dialectText} تضمن إزالة الحواجز وتوفر قاعدة صلبة لتنمية تفاعل المتابعين بشكل تصاعدي آمن ومثمر.`;
        performanceForecast = isPreLaunch
          ? `يتوقع تحقيق أداء متزن واستجابة واعدة من الشرائح المستهدفة لحملة "${campaignName}". سيساعد المحتوى المرئي في لفت انتباه جمهور "${targetInterests}" تدريجياً وبناء قاعدة اهتمام مستقر ومستدام مع الحفاظ على كفاءة استهلاك الميزانية الإعلانية.`
          : `تظهر مؤشرات الأداء الفعلي استقرار أداء حملة "${campaignName}" وملاءمتها لقنوات التوزيع ${platformsJoin}. التفاعل الحالي البالغ ${engagementRate}% يؤكد نجاح التموضع الثقافي والاتصالي وتجاوب جمهور "${targetInterests}" الإيجابي مع المواد الإعلانية بـ ${dialectText}.`;
        break;
    }

    audienceBehaviorAnalysis = `يتجاوب الجمهور المستهدف في ${targetLocation} ضمن الشريحة العمرية ${age} بقوة مع المحتوى العفوي المكتوب بـ ${dialectText} والبعيد عن النبرة البيعية الجافة. نظراً لاهتمامهم الكبير بـ "${targetInterests}" وسلوكهم الرقمي المرتبط بمشاهدة مقاطع ريلز وفيديو سريعة، فإن تقديم القصص الإنسانية أو الخطافات البصرية التي تحاكي روتينهم اليومي يبني معهم جسر ثقة فوري ويدفعهم للمشاركة الفعالة والتوصية الشفهية بحملة "${campaignName}" في دوائرهم المقربة طوعاً.`;

    platformAnalysis = `أثبتت منصات "${platformsJoin}" كفاءتها العالية في الوصول وتعميق الاتصال. تمنحك قنوات إنستجرام وتيك توك فرصة ذهبية لنشر مقاطع الفيديو القصيرة والمتحركة التي تضاعف التفاعل بحجم 2.5 ضعف لحملة "${campaignName}"، بينما يعد فيسبوك ركيزة أساسية لتعزيز النقرات وبناء نقاشات مجتمعية مطولة مع جمهور ${targetLocation}، ويمثل لينكد إن قناة رائدة إذا كنت تخاطب قطاعات الأعمال والشركات.`;
  } else {
    // ENGLISH GENERATOR
    switch (type) {
      case "commercial":
        reportDescription = `The "${campaignName}" commercial campaign exhibits excellent market readiness to penetrate the ${targetLocation} market. Target-filtering successfully aligns with the active ${age} demographic interested in "${targetInterests}" across ${platformsJoin} channels. Supported by a strategic $${budgetNum.toLocaleString()} budget, integrating the "${dialectText}" in the "${contentTypesJoin}" assets provides massive conversion momentum, pacing to score a healthy ${engagementRate}% engagement rate and lowered CPC boundaries.`;
        campaignEvaluation = `Overall, the strategic setup of "${campaignName}" is consumer-centric and robust. Mapped across selected platforms like ${platformsJoin}, your creative assets remain highly visible to the digital shopping habits of the ${age} cohort. Embracing the "${dialectText}" localized branding instills instant confidence and drives high spontaneous purchase decisions among prospects.`;
        performanceForecast = isPreLaunch
          ? `We project an estimated 18-25% surge in store clicks and organic engagement during the first week of deployment. Centering interactive visual reels for "${targetInterests}" acts as a primary distribution catalyst, driving higher brand recall and low-cost acquisitions.`
          : `Real-time performance metrics for the "${campaignName}" campaign reflect strong market interest. The registered engagement rate of ${engagementRate}% outperforms similar commercial benchmarks by 15%, highly bolstered by direct dialect integration of "${dialectText}".`;
        break;

      case "awareness":
        reportDescription = `The "${campaignName}" awareness campaign is structured on high emotional and cultural trust models in ${targetLocation}. Directing its $${budgetNum.toLocaleString()} budget across ${platformsJoin} toward a highly responsive ${age} demographic, it leverages "${dialectText}" in the initial 3 seconds of all "${contentTypesJoin}" creatives. This prevents early ad fatigue and builds an organic distribution foundation for the "${targetInterests}" sector, aiming for a steady ${engagementRate}% engagement rate.`;
        campaignEvaluation = `The communication architecture of "${campaignName}" displays sound positioning and noble messaging. Utilizing ${platformsJoin} ensures that your informational content reaches the ${age} demographic cleanly. Adopting conversational, localized phrasing with "${dialectText}" dismantles traditional ad walls, leaving a lasting, positive social impact.`;
        performanceForecast = isPreLaunch
          ? `Expect a highly viral organic pickup and deep community sympathy for "${campaignName}" upon launch. Interactive visual slides are projected to lift general audience awareness by 28% among "${targetInterests}" enthusiasts in the first 10 days of the launch.`
          : `Active performance reports confirm that the "${campaignName}" awareness campaign has established deep community trust. The active engagement of ${engagementRate}% is a testament to the powerful resonance of localized materials utilizing "${dialectText}".`;
        break;

      case "electoral":
        reportDescription = `The "${campaignName}" campaign outlines a highly precise, localized political and civic communication framework in ${targetLocation}. By focusing its $${budgetNum.toLocaleString()} ad spend on ${platformsJoin} toward the active ${age} cohort, it translates campaign pledges and slogans into "${dialectText}". This multi-format approach of "${contentTypesJoin}" helps simplify complex policies for voters interested in "${targetInterests}" and ensures high accountability and structured digital support.`;
        campaignEvaluation = `The structure of "${campaignName}" indicates high communication maturity. Using ${platformsJoin} is highly strategic for reaching younger citizens, and adopting honest, direct expressions in "${dialectText}" removes traditional communication barriers, facilitating a strong and supportive public opinion.`;
        performanceForecast = isPreLaunch
          ? `We anticipate strong digital support and active discussions surrounding the campaign pledges of "${campaignName}". Short dialog videos will act as a primary catalyst to mobilize voters interested in "${targetInterests}", generating a predicted ${engagementRate}% interaction curve.`
          : `Post-launch analysis reveals highly successful voter outreach in ${targetLocation} for "${campaignName}". The current engagement rate of ${engagementRate}% exceeds regional benchmarks, driven by trusted, local-language presentation.`;
        break;

      case "social":
        reportDescription = `The neighborhood and community initiative "${campaignName}" aims to drive civic participation and foster volunteer cooperation in ${targetLocation}. Mapped across ${platformsJoin} with a budget of $${budgetNum.toLocaleString()} targeting the ${age} demographic, it relies on "${dialectText}" in "${contentTypesJoin}" media assets. This builds deep community pride and organic civic engagement among "${targetInterests}" enthusiasts.`;
        campaignEvaluation = `Our evaluation confirms that the community-led communication model of "${campaignName}" holds high authentic credibility. Speaking to your audience as partners in development, rather than a commercial target, drives deep community loyalty across ${platformsJoin}, utilizing friendly dialect hooks in "${dialectText}" to prompt action.`;
        performanceForecast = isPreLaunch
          ? `We project high physical turnout and excellent material support for "${campaignName}" from volunteers interested in "${targetInterests}". Word-of-mouth distribution is expected to increase by 35%, leveraging the warm local dialect.`
          : `Realized results confirm that the "${campaignName}" campaign has achieved outstanding volunteer mobilization. An engagement rate of ${engagementRate}% combined with 88% positive sentiment shows the power of human-centric storytelling written in "${dialectText}".`;
        break;

      case "informational":
        reportDescription = `The informational and educational campaign "${campaignName}" is designed to deliver clear, structured insights and data-led education in ${targetLocation}. Directing its budget across ${platformsJoin} to reach the ${age} cohort, it translates educational data into "${dialectText}" within "${contentTypesJoin}" layouts. This reduces cognitive overload and boosts reading retention, pacing toward an optimized ${engagementRate}% engagement score.`;
        campaignEvaluation = `The educational architecture of "${campaignName}" is exceptionally organized. Presenting clean infographics and explanation loops using "${dialectText}" aligns perfectly with the ${age} demographic's desire for fast, high-value summaries, establishing solid authority and credibility.`;
        performanceForecast = isPreLaunch
          ? `We anticipate high bookmarking and sharing rates for "${campaignName}". Simplified infographics are expected to boost knowledge sharing among users interested in "${targetInterests}" by 25% compared to standard dry formats.`
          : `Post-launch reports confirm high message absorption for "${campaignName}". The registered ${engagementRate}% engagement rate shows that the target audience in ${targetLocation} actively consumes and trusts materials written in "${dialectText}".`;
        break;

      default:
        reportDescription = `The "${campaignName}" campaign leverages a highly flexible, multi-channel approach to engage the ${targetLocation} audience. Operating across ${platformsJoin} with an allocated budget of $${budgetNum.toLocaleString()} targeting the ${age} demographic, it blends "${dialectText}" with versatile "${contentTypesJoin}" assets, ensuring balanced cultural alignment and a projected ${engagementRate}% engagement.`;
        campaignEvaluation = `Our general assessment reveals sound platform selection and high cultural flexibility for "${campaignName}". Channel mapping is balanced, while utilizing "${dialectText}" creative copy provides a strong foundation for growing organic audience relationships safely and sustainably.`;
        performanceForecast = isPreLaunch
          ? `We project stable, balanced interaction curves for "${campaignName}". Multi-format creative distribution will slowly build steady awareness among the "${targetInterests}" demographic while maintaining optimized ad spend.`
          : `Active delivery trends show comfortable platform stability for "${campaignName}" across ${platformsJoin}. The registered ${engagementRate}% engagement confirms that the target "${targetInterests}" audience is highly receptive to the conversational copy.`;
        break;
    }

    audienceBehaviorAnalysis = `The target ${age} demographic in ${targetLocation} interested in "${targetInterests}" responds strongly to direct, honest, and storytelling formats. Including their core interests inside a conversational tone based on "${dialectText}" builds immediate trust for "${campaignName}", encouraging them to leave comments, save content, and share posts organically within their social circles.`;

    platformAnalysis = `Deploying on "${platformsJoin}" aligns perfectly with modern media habits. Visual-first channels like Instagram and TikTok consistently output the highest engagement metrics for short video formats for "${campaignName}", whereas Facebook remains a baseline for broader reach in ${targetLocation}.`;
  }

  // --- STRENGTHS GENERATION ---
  const strengths: string[] = [];
  if (isArabic) {
    strengths.push(
      `ملاءمة ثقافية ممتازة وتوظيف ذكي لـ "${dialectText}" في صياغة الرسائل التسويقية لحملة "${campaignName}".`,
    );
    strengths.push(
      `استهداف دقيق للشريحة العمرية (${age}) المهتمة بـ "${targetInterests}" في سوق ${targetLocation}.`,
    );
    if (hasVideoContent) {
      strengths.push(
        "اعتماد أساسي ومحوري على الفيديوهات القصيرة (الريلز والتيك توك) التي تضاعف معدلات النشر العضوي.",
      );
    } else {
      strengths.push(
        `توزيع منظم وواضح للرسائل التسويقية المباشرة عبر قنوات النشر المفضلة (${platformsJoin}).`,
      );
    }
    if (budgetNum >= 1500) {
      strengths.push(
        `ميزانية جيدة تبلغ $${budgetNum.toLocaleString()} تضمن انتشاراً وتأثيراً كافياً دون تشتيت التمويل.`,
      );
    }
  } else {
    strengths.push(
      `Exceptional cultural alignment by successfully integrating "${dialectText}" in the "${campaignName}" campaign copy.`,
    );
    strengths.push(
      `Precise demographic filtering directed at the active ${age} cohort interested in "${targetInterests}" in ${targetLocation}.`,
    );
    if (hasVideoContent) {
      strengths.push(
        "Heavy reliance on short-form video which boosts organic reach and engagement by up to 2.5x.",
      );
    } else {
      strengths.push(
        `Well-structured direct messaging channels mapped across selected platforms (${platformsJoin}).`,
      );
    }
    if (budgetNum >= 1500) {
      strengths.push(
        `Healthy budget of $${budgetNum.toLocaleString()} which provides solid market penetration and delivery authority.`,
      );
    }
  }

  // Ensure exactly 3 strengths
  while (strengths.length < 3) {
    strengths.push(
      isArabic
        ? "رسالة إعلانية متسقة وسهلة الاستيعاب."
        : "Consistent and easily digestible campaign messaging.",
    );
  }

  // --- WEAKNESSES / RISKS GENERATION ---
  const weaknesses: string[] = [];
  if (isArabic) {
    if (budgetNum < 500) {
      weaknesses.push(
        `محدودية الميزانية الإجمالية ($${budgetNum}) تعوق إمكانية اختبار الإعلانات (A/B) وتحد من الوصول الجغرافي.`,
      );
    }
    if (platforms.length > 3 && budgetNum < 1500) {
      weaknesses.push(
        `مخاطر تشتيت الميزانية على منصات متعددة (${platformsJoin}) بتمويل ضئيل لكل منصة مما يضعف الأثر.`,
      );
    }
    if (platforms.some((p) => ["tiktok"].includes(p.toLowerCase())) && !hasVideoContent) {
      weaknesses.push(
        "مخاطرة إطلاق إعلانات على منصة تيك توك دون استخدام فيديوهات قصيرة تفاعلية تلائم سلوك المستخدمين.",
      );
    }
    if (dialect === "standard" && location.length > 3) {
      weaknesses.push(
        `احتمالية تراجع التفاعل لغياب الصبغة المحلية الخاصة بـ ${targetLocation} بتبني العربية الفصحى بدلاً من لهجة المنطقة.`,
      );
    }
    if (!slogans || slogans.length < 10) {
      weaknesses.push(
        `غياب الشعارات والخطافات الإعلانية القوية المخصصة لـ "${campaignName}" مما يضعف ترسيخ الفكرة لدى المتابعين.`,
      );
    }
  } else {
    if (budgetNum < 500) {
      weaknesses.push(
        `Constrained overall budget ($${budgetNum}) which limits high-impact A/B testing and broad geographic reach.`,
      );
    }
    if (platforms.length > 3 && budgetNum < 1500) {
      weaknesses.push(
        `Risk of budget dilution across too many platforms (${platformsJoin}) with insufficient individual platform funding.`,
      );
    }
    if (platforms.some((p) => ["tiktok"].includes(p.toLowerCase())) && !hasVideoContent) {
      weaknesses.push(
        "Severe mismatch: deploying on TikTok without utilising native vertical video content formats.",
      );
    }
    if (dialect === "standard" && location.length > 3) {
      weaknesses.push(
        `Potential lack of cultural proximity by adopting standard language instead of the local dialect of ${targetLocation}.`,
      );
    }
    if (!slogans || slogans.length < 10) {
      weaknesses.push(
        `Absence of memorable slogans or hooks for "${campaignName}", weakening ad recall for the target group.`,
      );
    }
  }

  // Ensure exactly 3 weaknesses
  while (weaknesses.length < 3) {
    weaknesses.push(
      isArabic
        ? "مخاطر تعرض الجمهور للملل الإعلاني إذا لم يتم تجديد المواد البصرية كل 14 يوماً."
        : "Risk of audience ad fatigue if creative assets are not refreshed every 14 days.",
    );
  }

  // --- ACTIONS/RECOMMENDATIONS (DIRECT ACTIONABLE) ---
  const recommendations: {
    title: string;
    detail: string;
    category: "content" | "timing" | "targeting" | "strategy";
  }[] = [
    {
      title: isArabic
        ? `تكثيف المحتوى البصري والقصصي لـ "${campaignName}"`
        : `Maximize short-form visual asset density for "${campaignName}"`,
      detail: isArabic
        ? `أنتج مقاطع فيديو تفاعلية قصيرة (15 ثانية) ريلز وتيك توك بصوت وصياغة بـ "${dialectText}" لزيادة معدل CTR بنسبة 35% لجمهور "${targetInterests}".`
        : `Convert static text layouts into highly engaging, subtitled 15-second vertical videos matching "${dialectText}" to boost CTR by 35% for "${targetInterests}".`,
      category: "content",
    },
    {
      title: isArabic
        ? "ضبط وجدولة الإعلانات خلال أوقات الذروة"
        : "Schedule ad delivery strictly during attention peaks",
      detail: isArabic
        ? `جدول منشوراتك الإعلانية الرئيسية لتظهر حصراً بين الساعة ${peakFrom} مساءً وحتى ${peakTo} لتضمن أعلى تواجُد ونشاط لجمهورك.`
        : `Your audience's highest daily digital attention peaks between ${peakFrom} and ${peakTo}. Set scheduling queues strictly during this peak interval.`,
      category: "timing",
    },
    {
      title: isArabic
        ? `تركيز وتوزيع الميزانية الإعلانية ($${budgetNum})`
        : `Consolidate budget to avoid channel dilution`,
      detail: isArabic
        ? budgetNum < 1200
          ? `قم بتركيز كامل الميزانية البالغة $${budgetNum} على منصتين كحد أقصى (مثل ${platforms[0]}) لتحقيق زخم تسويقي كافٍ.`
          : `وجه 70% من الميزانية مباشرة نحو الشريحة الأكثر تفاعلاً (${age}) لضمان عوائد مستقرة وتلافي الهدر المالي.`
        : budgetNum < 1200
          ? `Consolidate your entire $${budgetNum} budget on a maximum of two top-performing platforms to achieve optimum impact.`
          : `Direct 70% of the budget directly to the highest-performing demographic (${age}) to maximize immediate conversion.`,
      category: "targeting",
    },
    {
      title: isArabic
        ? `تعزيز الهوية المحلية لـ "${campaignName}"`
        : `Embed local dialect hooks inside slogans`,
      detail: isArabic
        ? `استخدم مصطلحات أو شعارات معتادة وشعبية تتماشى مع "${dialectText}" في مقدمة إعلاناتك لبناء صلة وجدانية وثقة عائلية فورية.`
        : `Introduce regional metaphors or colloquial terms native to ${targetLocation} in your slogans to secure immediate authentic trust.`,
      category: "strategy",
    },
  ];

  // --- ADVANCED AI RECOMMENDATIONS (STRATEGIC) ---
  const advancedRecommendations = [
    {
      title: isArabic
        ? "تخصيص العبارات بالذكاء الاصطناعي (توصيات IA)"
        : "AI-Powered Hyper-Localized Copy Targeting (IA Rec)",
      detail: isArabic
        ? `استخدام نماذج الذكاء الاصطناعي لتوليد شعارات ومفردات تتطابق مع ${dialectText} لكل منطقة مستهدفة لرفع نسبة التفاعل بمعدل 30% لجمهور "${targetInterests}".`
        : `Serve dynamically generated localized slogans matching specific sub-dialects, boosting click-through-rates (CTR) by 30% for "${targetInterests}".`,
      impactScore: Math.min(99, Math.round(75 + score * 0.22)),
    },
    {
      title: isArabic
        ? "تفعيل الردود والمحادثات المؤتمتة (توصيات IA)"
        : "Conversational Marketing Chatbot Funnel (IA Rec)",
      detail: isArabic
        ? `ربط الكلمات الدلالية لـ "${campaignName}" في التعليقات بنظام إرسال عروض حصرية وتفاصيل مباشرة في الرسائل الخاصة للمتابعين لزيادة التحويل.`
        : `Link automated conversational agent triggers to comment keywords, instantly sending custom offers directly to prospect direct messages for "${campaignName}".`,
      impactScore: Math.min(99, Math.round(70 + score * 0.25)),
    },
    {
      title: isArabic
        ? "إعادة استهداف الجمهور بمؤشرات الاحتفاظ (توصيات IA)"
        : "Retention-Based Sequential Retargeting (IA Rec)",
      detail: isArabic
        ? `إنشاء جمهور مخصص يتكون حصرياً من المستخدمين الذين شاهدوا أكثر من 50% من مقاطع فيديو ريلز، وتوجيه عرض عاجل مخصص لحثهم على التحويل.`
        : `Construct custom targeting cohorts consisting of users who watched over 50% of video reels, retargeting them with limited-time exclusive offers.`,
      impactScore: Math.min(99, Math.round(80 + score * 0.18)),
    },
  ];

  // --- ROADMAP (خريطة الطريق) ---
  const longTermRoadmap = {
    shortTerm: isArabic
      ? [
          `المرحلة الأولى: بناء الوعي والتموضع لـ "${campaignName}" - إطلاق محتوى ترحيبي عالي الثقة مكتوب بـ ${dialectText}.`,
          `إجراء اختبارات مقارنة (A/B) للنصوص والشعارات لتحديد الصيغ الأكثر استجابة في سوق ${targetLocation}.`,
        ]
      : [
          `Phase 1: Brand Positioning for "${campaignName}" - Deploy high-trust warm cultural content written in ${dialectText}.`,
          `A/B test initial ad copy variations in ${targetLocation} to establish performance champions.`,
        ],
    midTerm: isArabic
      ? [
          `المرحلة الثانية: تحفيز الحوار والتفاعل لجمهور "${targetInterests}" - طرح ملصقات تفاعلية وأسئلة لبناء صدى مجتمعي.`,
          "تجديد وتحديث الأصول البصرية كل 14 يوماً لتفادي تراجع تفاعل الجمهور والملل الإعلاني.",
        ]
      : [
          `Phase 2: Dialogue Triggering for "${targetInterests}" - Launch custom polls and interactive questions to build direct community resonance.`,
          "Refresh visual creatives and copy every 14 days to eliminate ad fatigue and sustain optimal delivery.",
        ],
    longTerm: isArabic
      ? [
          `المرحلة الثالثة: تحويل المتابعين إلى سفراء مخلصين لحملة "${campaignName}" وتقديم مكافآت معنوية وحوافز مخصصة.`,
          "نشر أدوات قياس وتحليلات متقدمة لمراقبة سلوك المستخدمين على المدى الطويل بعد النقر والاتصال.",
        ]
      : [
          `Phase 3: Community Conversion - Convert highly engaged audience segments of "${campaignName}" into active brand advocates.`,
          "Deploy custom analytics telemetry to map long-term post-click behaviors.",
        ],
  };

  // --- INSIGHTS ---
  const insights = isArabic
    ? [
        `ذروة تفاعل الجمهور نشطة ومثالية في فترات المساء بين الساعة ${peakFrom} وحتى ${peakTo}.`,
        hasVideoContent
          ? "مقاطع الفيديو القصيرة تحقق وصولاً وتفاعلاً يفوق الصور الثابتة بمعدل 2.4 ضعف."
          : `المنشورات الصامتة تحد من انتشارك؛ تحويل الرسائل إلى مقاطع متحركة مدتها 15 ثانية سيضاعف الوصول.`,
        `المشاعر الإيجابية المتوقعة بلغت ${positive}%، مما يؤكد ملاءمة الصياغة للهوية والذوق المحلي.`,
        `تحديد النطاق الجغرافي وحصر الإعلانات للفئة ${age} يوفر ما يصل إلى 18% من الميزانية المهدورة.`,
      ]
    : [
        `Peak user activity predicted on Thursdays and Fridays during ${peakFrom}–${peakTo} intervals.`,
        hasVideoContent
          ? `Dynamic short video creative layouts outperformed standard flat imagery formats by 2.4× across visual channels.`
          : `Static media formats are displaying delivery constraints. Incorporating 15-second motion layouts could double reach.`,
        `${positive}% of projected comments display positive emotional alignment, validating strong brand-message resonance.`,
        `Restricting ad delivery strictly to the ${age} age window could save up to 18% in cost-per-acquisition (CPA) metrics.`,
      ];

  return {
    campaignName,
    score,
    status,
    engagementRate,
    engagementGrade,
    sentiment: { positive, neutral, negative },
    peakTime: { from: peakFrom, to: peakTo },
    metrics: { likes, comments, shares, views },
    timeline,
    insights,
    recommendations,
    strengths,
    weaknesses,
    advancedRecommendations,
    longTermRoadmap,
    reportDescription,
    campaignEvaluation,
    performanceForecast,
    audienceBehaviorAnalysis,
    platformAnalysis,
  };
}
