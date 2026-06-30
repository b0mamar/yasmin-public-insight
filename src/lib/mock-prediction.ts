export type PrelaunchInput = {
  name: string;
  type: string; // awareness/informational/electoral/social/commercial/other
  organizer: string;
  description: string;
  objectives: string;
  age: string;
  gender: string;
  location: string;
  education: string;
  interests: string;
  message: string;
  slogans: string;
  platforms: string[]; // facebook, instagram, tiktok, linkedin, x, youtube
  durationValue: string;
  durationUnit: "days" | "weeks";
  budget: string;
  contentTypes: string[]; // text, image, video, design
};

export type ReportPoint = {
  id: number;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  tone: "good" | "warn" | "bad" | "neutral";
};

export type Prediction = {
  score: number;
  status: "weak" | "almost" | "ready";
  reachLevel: "low" | "medium" | "high";
  engagementLevel: "low" | "medium" | "high";
  reasonsAr: string[];
  reasonsEn: string[];
  report: ReportPoint[];
};

const has = (s: string) => s.trim().length > 0;

export function predict(d: PrelaunchInput): Prediction {
  let score = 40;
  const reasonsAr: string[] = [];
  const reasonsEn: string[] = [];

  // 1. Objectives clarity
  const objClear = d.objectives.trim().length >= 20;
  if (objClear) {
    score += 8;
    reasonsAr.push("أهداف واضحة ومحددة.");
    reasonsEn.push("Clear, specific objectives.");
  } else {
    score -= 6;
    reasonsAr.push("الأهداف غير واضحة بالقدر الكافي.");
    reasonsEn.push("Objectives are not specific enough.");
  }

  // 2. Audience fit
  const audienceCount = [d.age, d.gender, d.location, d.education, d.interests].filter(has).length;
  if (audienceCount >= 4) {
    score += 8;
    reasonsAr.push("تعريف دقيق للجمهور المستهدف.");
    reasonsEn.push("Well-defined target audience.");
  } else if (audienceCount <= 2) {
    score -= 5;
    reasonsAr.push("الجمهور المستهدف غير محدد بدقة.");
    reasonsEn.push("Target audience under-defined.");
  }

  // 3. Message strength
  const msgLen = d.message.trim().length;
  if (msgLen >= 20 && msgLen <= 160) {
    score += 8;
    reasonsAr.push("رسالة اتصالية موجزة ومؤثرة.");
    reasonsEn.push("Concise, impactful message.");
  } else if (msgLen === 0) {
    score -= 8;
    reasonsAr.push("لا توجد رسالة رئيسية.");
    reasonsEn.push("Main message is missing.");
  } else if (msgLen > 240) {
    score -= 4;
    reasonsAr.push("الرسالة طويلة، يفضل تكثيفها.");
    reasonsEn.push("Message is too long — condense it.");
  }

  // 4. Content vs objectives
  const hasVideo = d.contentTypes.includes("video");
  const hasImage = d.contentTypes.includes("image");
  const contentVariety = d.contentTypes.length;
  if (contentVariety >= 3) {
    score += 6;
    reasonsAr.push("تنوع جيد في أنواع المحتوى.");
    reasonsEn.push("Good content variety.");
  }
  if (hasVideo) score += 6;
  if (!hasVideo && !hasImage) {
    score -= 6;
    reasonsAr.push("غياب المحتوى المرئي يضعف التأثير.");
    reasonsEn.push("Missing visual content weakens impact.");
  }

  // 5. Platforms
  const plats = d.platforms;
  if (plats.length === 0) {
    score -= 15;
    reasonsAr.push("لم يتم اختيار أي منصة.");
    reasonsEn.push("No platforms selected.");
  } else if (plats.length >= 3) {
    score += 6;
    reasonsAr.push("تنوع المنصات يوسّع الوصول.");
    reasonsEn.push("Multi-platform mix broadens reach.");
  }
  const goodMatch =
    (d.type === "commercial" && (plats.includes("instagram") || plats.includes("facebook"))) ||
    (d.type === "awareness" && (plats.includes("tiktok") || plats.includes("instagram"))) ||
    (d.type === "informational" &&
      (plats.includes("x") || plats.includes("linkedin") || plats.includes("youtube"))) ||
    (d.type === "electoral" && (plats.includes("facebook") || plats.includes("x"))) ||
    (d.type === "social" && (plats.includes("instagram") || plats.includes("tiktok")));
  if (goodMatch) {
    score += 6;
    reasonsAr.push("توافق ممتاز بين نوع الحملة والمنصات.");
    reasonsEn.push("Strong campaign-platform alignment.");
  }

  // Slogans + organizer + description
  if (has(d.slogans)) score += 3;
  if (has(d.organizer)) score += 2;
  if (d.description.trim().length >= 30) score += 4;

  // Duration
  const durDays = (Number(d.durationValue) || 0) * (d.durationUnit === "weeks" ? 7 : 1);
  if (durDays >= 14 && durDays <= 60) score += 5;
  else if (durDays > 0 && durDays < 7) {
    score -= 4;
    reasonsAr.push("مدة الحملة قصيرة جداً.");
    reasonsEn.push("Campaign duration is too short.");
  }

  // Budget hint
  if (has(d.budget)) score += 2;

  score = Math.max(15, Math.min(98, Math.round(score)));
  const status: Prediction["status"] = score >= 80 ? "ready" : score >= 60 ? "almost" : "weak";
  const reachLevel: Prediction["reachLevel"] =
    score >= 75 ? "high" : score >= 55 ? "medium" : "low";
  const engagementLevel = hasVideo && score >= 65 ? "high" : score >= 55 ? "medium" : "low";

  // Build 14-point report
  const platformsAr = plats.length ? plats.join("، ") : "—";
  const missingGroups: string[] = [];
  if (!has(d.age) || d.age.toLowerCase().includes("all"))
    missingGroups.push("الفئات العمرية غير المحددة");
  if (!has(d.location)) missingGroups.push("سكان المناطق غير المذكورة");
  if (!has(d.education)) missingGroups.push("بعض المستويات التعليمية");
  if (!plats.includes("tiktok") && !plats.includes("instagram"))
    missingGroups.push("الشريحة الشابة على TikTok/Instagram");
  if (!plats.includes("linkedin")) missingGroups.push("الجمهور المهني على LinkedIn");

  const bestTimes =
    d.type === "commercial"
      ? "20:00 – 22:00"
      : d.type === "informational"
        ? "08:00 – 10:00 و 19:00 – 21:00"
        : "18:00 – 22:00";
  const bestPlatforms = goodMatch
    ? platformsAr
    : hasVideo
      ? "Instagram Reels و TikTok"
      : "Facebook و Instagram";

  const report: ReportPoint[] = [
    {
      id: 1,
      titleAr: "وضوح أهداف الحملة",
      titleEn: "Clarity of campaign objectives",
      bodyAr: objClear
        ? "الأهداف صيغت بوضوح وتسمح بقياس النتائج."
        : "الأهداف عامة وتحتاج إلى صياغة محددة قابلة للقياس (SMART).",
      bodyEn: objClear
        ? "Objectives are clearly stated and measurable."
        : "Objectives are too generic — make them SMART.",
      tone: objClear ? "good" : "warn",
    },
    {
      id: 2,
      titleAr: "ملاءمة الجمهور المستهدف",
      titleEn: "Target audience fit",
      bodyAr:
        audienceCount >= 4
          ? `الجمهور محدد جيداً (${d.age} • ${d.gender} • ${d.location}).`
          : "تعريف الجمهور ناقص؛ أضف الفئة العمرية والموقع والاهتمامات بدقة.",
      bodyEn:
        audienceCount >= 4
          ? `Audience is well-defined (${d.age} • ${d.gender} • ${d.location}).`
          : "Audience definition is incomplete — refine age, location, and interests.",
      tone: audienceCount >= 4 ? "good" : "warn",
    },
    {
      id: 3,
      titleAr: "قوة الرسالة الاتصالية وتأثيرها المتوقع",
      titleEn: "Strength & expected impact of the message",
      bodyAr:
        msgLen >= 20 && msgLen <= 160
          ? "الرسالة مركزة وتحمل قدرة جيدة على التأثير العاطفي."
          : msgLen === 0
            ? "لا توجد رسالة أساسية واضحة."
            : msgLen > 240
              ? "الرسالة طويلة وقد تفقد تركيز المتلقي."
              : "الرسالة قصيرة جداً، توسع قليلاً.",
      bodyEn:
        msgLen >= 20 && msgLen <= 160
          ? "Message is focused with strong emotional impact."
          : msgLen === 0
            ? "No main message defined."
            : msgLen > 240
              ? "Message is too long; condense it."
              : "Message is too short.",
      tone: msgLen >= 20 && msgLen <= 160 ? "good" : msgLen === 0 ? "bad" : "warn",
    },
    {
      id: 4,
      titleAr: "توافق المحتوى مع الأهداف",
      titleEn: "Content–objective alignment",
      bodyAr:
        hasVideo && contentVariety >= 2
          ? "مزيج المحتوى (فيديو + صور/تصاميم) يخدم الأهداف بفعالية."
          : "أضف محتوى فيديو وتصاميم بصرية لتعزيز خدمة الأهداف.",
      bodyEn:
        hasVideo && contentVariety >= 2
          ? "Content mix (video + visuals) supports the objectives."
          : "Add video and visual designs to better serve objectives.",
      tone: hasVideo && contentVariety >= 2 ? "good" : "warn",
    },
    {
      id: 5,
      titleAr: "تقييم اختيار المنصات الرقمية",
      titleEn: "Digital platform selection",
      bodyAr:
        plats.length === 0
          ? "لم يتم اختيار أي منصة."
          : goodMatch
            ? `الاختيار مناسب لنوع الحملة (${platformsAr}).`
            : `المنصات المختارة (${platformsAr}) قد لا تكون الأنسب لنوع الحملة.`,
      bodyEn:
        plats.length === 0
          ? "No platform selected."
          : goodMatch
            ? `Selection fits the campaign type (${platformsAr}).`
            : `Selected platforms (${platformsAr}) may not be optimal.`,
      tone: plats.length === 0 ? "bad" : goodMatch ? "good" : "warn",
    },
    {
      id: 6,
      titleAr: "نقاط القوة",
      titleEn: "Strengths",
      bodyAr:
        reasonsAr
          .filter(
            (_, i) =>
              reasonsEn[i].toLowerCase().includes("good") ||
              reasonsEn[i].toLowerCase().includes("strong") ||
              reasonsEn[i].toLowerCase().includes("clear") ||
              reasonsEn[i].toLowerCase().includes("well") ||
              reasonsEn[i].toLowerCase().includes("concise") ||
              reasonsEn[i].toLowerCase().includes("multi"),
          )
          .join(" • ") || "تنظيم جيد لعناصر الحملة.",
      bodyEn:
        reasonsEn.filter((r) => /good|strong|clear|well|concise|multi/i.test(r)).join(" • ") ||
        "Good overall campaign structure.",
      tone: "good",
    },
    {
      id: 7,
      titleAr: "نقاط الضعف والمخاطر المحتملة",
      titleEn: "Weaknesses & potential risks",
      bodyAr:
        reasonsAr.filter((_, i) => /not|missing|too|under|no /i.test(reasonsEn[i])).join(" • ") ||
        "لا توجد مخاطر جوهرية مرصودة.",
      bodyEn:
        reasonsEn.filter((r) => /not|missing|too|under|no /i.test(r)).join(" • ") ||
        "No major risks detected.",
      tone: "warn",
    },
    {
      id: 8,
      titleAr: "الفئات التي قد لا تصل إليها الحملة",
      titleEn: "Audience segments at risk of being missed",
      bodyAr: missingGroups.length ? missingGroups.join("، ") : "تغطية جيدة لمختلف الفئات.",
      bodyEn: missingGroups.length
        ? "Underserved: " + missingGroups.join(", ")
        : "Good cross-segment coverage.",
      tone: missingGroups.length >= 2 ? "warn" : "neutral",
    },
    {
      id: 9,
      titleAr: "اقتراح تحسينات عملية لزيادة فرص النجاح",
      titleEn: "Practical improvements",
      bodyAr:
        [
          !hasVideo ? "أضف مقاطع فيديو قصيرة (15–30 ث)." : null,
          msgLen > 160 ? "اختصر الرسالة الرئيسية إلى أقل من 160 حرف." : null,
          !goodMatch ? "أعد توزيع المنصات بما يخدم نوع الحملة." : null,
          audienceCount < 4 ? "حدّد الجمهور بدقة (عمر/موقع/اهتمامات)." : null,
          !has(d.slogans) ? "أضف شعاراً جذاباً يسهل تذكره." : null,
        ]
          .filter(Boolean)
          .join(" • ") || "حافظ على الزخم وراقب الأداء بشكل أسبوعي.",
      bodyEn: "Refine targeting, add short-form video, and align platforms with campaign type.",
      tone: "neutral",
    },
    {
      id: 10,
      titleAr: "أفضل أوقات النشر والمنصات الأكثر فعالية",
      titleEn: "Best posting times & most effective platforms",
      bodyAr: `أفضل الأوقات: ${bestTimes}. أكثر المنصات فعالية: ${bestPlatforms}.`,
      bodyEn: `Best times: ${bestTimes}. Most effective platforms: ${bestPlatforms}.`,
      tone: "good",
    },
    {
      id: 11,
      titleAr: "توقع مستوى الوصول المحتمل",
      titleEn: "Expected reach level",
      bodyAr:
        reachLevel === "high"
          ? "وصول مرتفع متوقع بفضل التنوع وقوة المحتوى."
          : reachLevel === "medium"
            ? "وصول متوسط؛ يمكن تحسينه برفع جودة المحتوى وتنويع المنصات."
            : "وصول منخفض متوقع، تحتاج تعزيز الاستهداف والمحتوى.",
      bodyEn:
        reachLevel === "high"
          ? "High reach expected."
          : reachLevel === "medium"
            ? "Medium reach — improve content and mix."
            : "Low reach — strengthen targeting and content.",
      tone: reachLevel === "high" ? "good" : reachLevel === "low" ? "bad" : "warn",
    },
    {
      id: 12,
      titleAr: "توقع مستوى التفاعل المحتمل",
      titleEn: "Expected engagement level",
      bodyAr:
        engagementLevel === "high"
          ? "تفاعل مرتفع متوقع، خاصة على المحتوى المرئي القصير."
          : engagementLevel === "medium"
            ? "تفاعل متوسط؛ شجع التعليقات والمشاركة بأسئلة مباشرة."
            : "تفاعل ضعيف متوقع؛ راجع نبرة الرسالة وجودة التصاميم.",
      bodyEn:
        engagementLevel === "high"
          ? "High engagement expected."
          : engagementLevel === "medium"
            ? "Medium engagement — encourage interaction."
            : "Low engagement — revisit tone and visuals.",
      tone: engagementLevel === "high" ? "good" : engagementLevel === "low" ? "bad" : "warn",
    },
    {
      id: 13,
      titleAr: "التأثير على صورة المؤسسة والرأي العام",
      titleEn: "Impact on institutional image & public opinion",
      bodyAr:
        score >= 75
          ? `${d.organizer || "المؤسسة"} ستحقق تأثيراً إيجابياً وتعزيزاً لصورتها لدى الجمهور.`
          : score >= 55
            ? "تأثير إيجابي معتدل مع فرصة لبناء سمعة أقوى عند ضبط المحتوى."
            : "هناك مخاطر على الصورة إذا لم تُعالج نقاط الضعف قبل الإطلاق.",
      bodyEn:
        score >= 75
          ? "Positive brand impact expected."
          : score >= 55
            ? "Moderate positive impact."
            : "Reputational risk unless weaknesses are fixed.",
      tone: score >= 75 ? "good" : score >= 55 ? "neutral" : "warn",
    },
    {
      id: 14,
      titleAr: "درجة النجاح المتوقعة",
      titleEn: "Predicted success score",
      bodyAr: `الدرجة: ${score}/100 — ${status === "ready" ? "جاهزة للإطلاق" : status === "almost" ? "شبه جاهزة" : "تحتاج تحسينات"}. السبب: ${reasonsAr.slice(0, 3).join(" • ")}`,
      bodyEn: `Score: ${score}/100 — ${status}. Reason: ${reasonsEn.slice(0, 3).join(" • ")}`,
      tone: status === "ready" ? "good" : status === "weak" ? "bad" : "warn",
    },
  ];

  return { score, status, reachLevel, engagementLevel, reasonsAr, reasonsEn, report };
}
