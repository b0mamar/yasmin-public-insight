import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as objectType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CYm3ap6M.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const en = {
  // common
  back: "Back",
  continue: "Continue",
  submit: "Submit",
  loading: "Loading…",
  skipToApp: "Skip → Go to app",
  // welcome
  hello: "Hello There",
  signupHere: "Sign Up Here",
  registerUser: "Register as User",
  registerOrg: "Register as Organization",
  tagline: "Know what works, and why.",
  description: "A smart app that turns noisy data into deep insights and measures the real impact of your campaigns.",
  // signup
  createAccount: "Create account",
  chooseRegister: "Choose how you want to register.",
  user: "User",
  organization: "Organization",
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm password",
  orgName: "Organization name",
  orgType: "Type",
  orgTypePh: "Agency, NGO, Government…",
  city: "City",
  businessEmail: "Business email",
  // nav / app shell
  home: "Home",
  analyzeNow: "Analyze Now",
  reports: "Reports",
  recommendations: "Recommendations",
  analytics: "Analytics",
  // settings
  settings: "Settings",
  language: "Language",
  account: "Account",
  region: "Region",
  regionOptional: "Region (optional)",
  payment: "Payment",
  security: "Security",
  support: "Support",
  editName: "Edit Name",
  changeEmail: "Change Email",
  changePassword: "Change Password",
  setRegion: "Set region",
  goldCard: "Gold Card",
  visaCard: "Visa Card",
  privacy: "Privacy",
  deviceManagement: "Device Management",
  deleteAccount: "Delete Account",
  helpCenter: "Help Center",
  // home
  aiPoweredBadge: "AI-powered campaign intelligence",
  howItWorks: "How it works",
  fromSignupToInsight: "From sign-up to insight",
  step_signUp: "Sign up",
  step_chooseType: "Choose campaign type",
  step_enterData: "Enter campaign data",
  step_waitAnalysis: "Wait for analysis",
  step_getReport: "Get detailed report",
  whyUs: "Why us",
  theEdge: "The edge",
  feat_realImpact: "Measures real impact",
  feat_aiInsights: "AI-powered insights",
  feat_dashboards: "Simplified dashboards",
  feat_recs: "Smart recommendations",
  feat_allMetrics: "All metrics in one place",
  stat_avgScore: "Avg. score",
  stat_engagement: "Engagement",
  stat_campaigns: "Campaigns",
  stat_aiInsights: "AI insights",
  faq: "FAQ",
  contact: "Contact",
  questionsAnswered: "Questions, answered",
  reachTheTeam: "Reach the team",
  // analyze
  newAnalysis: "New analysis",
  analyzeIntro: "Tell us about the campaign — we'll surface what worked and why.",
  step_campaign: "Campaign",
  step_platforms: "Platforms",
  step_metrics: "Metrics",
  campaignName: "Campaign name",
  campaignNamePh: "Spring awareness 2026",
  type: "Type",
  goal: "Goal",
  targetAudience: "Target audience",
  age: "Age",
  gender: "Gender",
  location: "Location",
  duration: "Duration",
  budgetOptional: "Budget (optional)",
  platformsLabel: "Platforms",
  postUrl: "Post URL",
  views: "Views",
  likes: "Likes",
  comments: "Comments",
  shares: "Shares",
  saves: "Saves",
  clicks: "Clicks",
  followersBefore: "Followers before",
  followersAfter: "Followers after",
  topLocation: "Top location",
  topAge: "Top age group",
  submitForAnalysis: "Submit for analysis",
  // analyze mode
  chooseAnalysisMode: "Choose analysis mode",
  chooseAnalysisModeIntro: "Are you evaluating a campaign before or after launch?",
  preLaunch: "Before launch",
  preLaunchDesc: "Simulate performance and get AI predictions before you spend a dirham.",
  postLaunch: "After launch",
  postLaunchDesc: "Measure what actually happened with real metrics from your platforms.",
  predictPerformance: "Predict performance",
  contentPlan: "Content plan",
  contentType: "Content type",
  ct_video: "Video",
  ct_image: "Image",
  ct_text: "Text",
  numberOfPosts: "Number of posts",
  publishingTime: "Publishing time",
  publishingDays: "Publishing days",
  campaignMessage: "Campaign message",
  campaignMessagePh: "Write the main message of your campaign…",
  step_content: "Content",
  step_message: "Message",
  // prediction dashboard
  predictionDashboard: "Prediction dashboard",
  campaignReadiness: "Campaign readiness",
  ready: "Ready to launch",
  almostReady: "Almost ready",
  needsWork: "Needs work",
  performancePredictions: "Performance predictions",
  expectedEngagement: "Expected engagement rate",
  successProbability: "Probability of success",
  sentimentPredictions: "Predicted sentiment",
  weaknessesDetected: "Weaknesses detected",
  noWeaknesses: "No critical weaknesses detected.",
  weak_time: "Suboptimal posting time",
  weak_content: "Content type underperforms on selected platforms",
  weak_message: "Message is unclear or too long",
  weak_audience: "Audience targeting too broad",
  weak_platform: "Platform mismatch with your goal",
  smartRecs: "Smart recommendations",
  rec_postEvening: "Post in the evening (7:00 PM – 10:00 PM) for peak reach.",
  rec_useVideo: "Use video instead of text — drives ~2.3× more engagement.",
  rec_shorten: "Shorten your message to under 120 characters.",
  rec_focusAudience: "Narrow targeting to a single age cohort.",
  rec_switchPlatform: "Lead with Instagram + TikTok for awareness goals.",
  whatIf: "What-if simulation",
  whatIfIntro: "Tweak the variables — predictions update instantly.",
  highestPriority: "Highest optimization priority",
  topStrategy: "Top performing strategy",
  aiAssistant: "AI assistant",
  aiAssistantTip: "Switching to short-form video could lift engagement by ~40%.",
  backToSetup: "Edit campaign",
  evening: "Evening",
  afternoon: "Afternoon",
  morning: "Morning",
  // categories
  cat_Awareness: "Awareness",
  cat_Marketing: "Marketing",
  cat_Political: "Political",
  cat_Social: "Social",
  cat_Health: "Health",
  cat_Education: "Education",
  goal_Awareness: "Awareness",
  goal_Sales: "Sales",
  goal_BehaviorChange: "Behavior Change",
  // analyzing
  analyzingCampaign: "Analyzing your campaign",
  aiCorrelating: "Our AI is correlating signals across platforms.",
  an_ingesting: "Ingesting campaign data",
  an_computing: "Computing engagement signals",
  an_running: "Running AI sentiment & insight models",
  an_generating: "Generating recommendations",
  // results
  campaign: "Campaign",
  overallScore: "Overall score",
  status_strong: "Strong",
  status_average: "Average",
  status_weak: "Weak",
  engagementTrend: "Engagement trend",
  viewsOverTime: "Views over time",
  sentiment: "Sentiment",
  audienceResponse: "Audience response",
  sentiment_positive: "Positive",
  sentiment_neutral: "Neutral",
  sentiment_negative: "Negative",
  engagementRate: "Engagement rate",
  grade_poor: "Poor",
  grade_good: "Good",
  grade_excellent: "Excellent",
  aboveBenchmark: "Above the 3.5% benchmark for your campaign type.",
  peakTime: "Peak time",
  highestActivity: "Highest activity window.",
  viewFullReport: "View full report",
  // report
  fullReport: "Full report",
  score: "Score",
  executiveSummary: "Executive summary",
  keyInsights: "Key insights",
  suggestedImprovements: "Suggested improvements",
  seeRecommendations: "See recommendations",
  imp_1: "Reallocate ~30% of paid budget toward short-form video formats.",
  imp_2: "Schedule next launch on Thursday 19:00 to capture peak window.",
  imp_3: "Test a tighter creative variant focused on the 25–34 cohort.",
  imp_4: "Add a UGC follow-up wave within 14 days while sentiment is hot.",
  exec_summary: "The {name} campaign scored {score}/100 with an engagement rate of {er}%, classified as {grade}. Audience response was predominantly positive ({pos}%), with peak activity between {from} and {to}.",
  // recommendations
  smartSuggestions: "Smart suggestions",
  makeNextSharper: "Make your next campaign sharper",
  rec_content: "Content",
  rec_timing: "Timing",
  rec_targeting: "Targeting",
  rec_strategy: "Strategy",
  // faq
  frequentlyAsked: "Frequently asked",
  faqIntro: "Short, clear answers to the questions we hear most.",
  // contact
  getInTouch: "Get in touch",
  replyWithin: "We usually reply within one business day.",
  emailOpensGmail: "Email · Opens Gmail",
  phone: "Phone",
  // payment
  paymentMethods: "Payment methods",
  choosePayment: "Choose a card to pay securely.",
  edahabiaCard: "Edahabia Card",
  algerianCard: "Algerian Card",
  visaCardLabel: "Visa",
  cardNumber: "Card number",
  fullName: "Full name",
  cardholderName: "Cardholder name",
  expiryDate: "Expiry date",
  cvv: "CVV",
  confirmPayment: "Confirm payment",
  payNow: "Pay now",
  securePayment: "Secure Payment",
  encryptedTransaction: "Encrypted transaction · 256-bit SSL",
  paymentSuccessful: "Payment successful",
  transactionComplete: "Your transaction has been completed.",
  backToPayments: "Back to payments",
  amount: "Amount"
};
const ar = {
  back: "رجوع",
  continue: "متابعة",
  submit: "إرسال",
  loading: "جارٍ التحميل…",
  skipToApp: "تخطّي ← الذهاب للتطبيق",
  hello: "أهلًا بك",
  signupHere: "سجّل هنا",
  registerUser: "تسجيل كمستخدم",
  registerOrg: "تسجيل كمؤسسة",
  tagline: "اعرف ماذا ينجح ولماذا؟",
  description: "تطبيق ذكي يحوّل ضجيج البيانات إلى رؤى عميقة ويقيس الأثر الحقيقي لحملاتك.",
  createAccount: "إنشاء حساب",
  chooseRegister: "اختر طريقة تسجيلك.",
  user: "مستخدم",
  organization: "مؤسسة",
  firstName: "الاسم",
  lastName: "اللقب",
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
  confirmPassword: "تأكيد كلمة المرور",
  orgName: "اسم المؤسسة",
  orgType: "النوع",
  orgTypePh: "وكالة، منظمة، حكومية…",
  city: "المدينة",
  businessEmail: "البريد المهني",
  home: "الرئيسية",
  analyzeNow: "حلّل الآن",
  reports: "التقارير",
  recommendations: "التوصيات",
  analytics: "التحليلات",
  settings: "الإعدادات",
  language: "اللغة",
  account: "الحساب",
  region: "المنطقة",
  regionOptional: "المنطقة (اختياري)",
  payment: "الدفع",
  security: "الأمان",
  support: "الدعم",
  editName: "تعديل الاسم",
  changeEmail: "تغيير البريد",
  changePassword: "تغيير كلمة المرور",
  setRegion: "تحديد المنطقة",
  goldCard: "البطاقة الذهبية",
  visaCard: "بطاقة فيزا",
  privacy: "الخصوصية",
  deviceManagement: "إدارة الأجهزة",
  deleteAccount: "حذف الحساب",
  helpCenter: "مركز المساعدة",
  aiPoweredBadge: "ذكاء اصطناعي لتحليل الحملات",
  howItWorks: "كيف يعمل",
  fromSignupToInsight: "من التسجيل إلى الرؤية",
  step_signUp: "التسجيل",
  step_chooseType: "اختر نوع الحملة",
  step_enterData: "أدخل بيانات الحملة",
  step_waitAnalysis: "انتظر التحليل",
  step_getReport: "احصل على تقرير مفصّل",
  whyUs: "لماذا نحن",
  theEdge: "ميزتنا",
  feat_realImpact: "يقيس الأثر الحقيقي",
  feat_aiInsights: "رؤى مدعومة بالذكاء الاصطناعي",
  feat_dashboards: "لوحات مبسّطة",
  feat_recs: "توصيات ذكية",
  feat_allMetrics: "كل المؤشّرات في مكان واحد",
  stat_avgScore: "متوسط النتيجة",
  stat_engagement: "التفاعل",
  stat_campaigns: "الحملات",
  stat_aiInsights: "رؤى الذكاء",
  faq: "الأسئلة الشائعة",
  contact: "تواصل معنا",
  questionsAnswered: "أجوبة لأسئلتك",
  reachTheTeam: "تواصل مع الفريق",
  newAnalysis: "تحليل جديد",
  analyzeIntro: "أخبرنا عن الحملة — وسنُظهر ما الذي نجح ولماذا.",
  step_campaign: "الحملة",
  step_platforms: "المنصّات",
  step_metrics: "المقاييس",
  campaignName: "اسم الحملة",
  campaignNamePh: "حملة الربيع 2026",
  type: "النوع",
  goal: "الهدف",
  targetAudience: "الجمهور المستهدف",
  age: "العمر",
  gender: "الجنس",
  location: "الموقع",
  duration: "المدّة",
  budgetOptional: "الميزانية (اختياري)",
  platformsLabel: "المنصّات",
  postUrl: "رابط المنشور",
  views: "المشاهدات",
  likes: "الإعجابات",
  comments: "التعليقات",
  shares: "المشاركات",
  saves: "الحفظ",
  clicks: "النقرات",
  followersBefore: "المتابعون قبل",
  followersAfter: "المتابعون بعد",
  topLocation: "أعلى موقع",
  topAge: "أعلى فئة عمرية",
  submitForAnalysis: "إرسال للتحليل",
  chooseAnalysisMode: "اختر نوع التحليل",
  chooseAnalysisModeIntro: "هل تقيّم الحملة قبل الإطلاق أم بعده؟",
  preLaunch: "قبل الإطلاق",
  preLaunchDesc: "احصل على تنبؤات ذكية قبل صرف أي دينار.",
  postLaunch: "بعد الإطلاق",
  postLaunchDesc: "قِس ما حدث فعلًا اعتمادًا على بياناتك الحقيقية.",
  predictPerformance: "تنبّأ بالأداء",
  contentPlan: "خطة المحتوى",
  contentType: "نوع المحتوى",
  ct_video: "فيديو",
  ct_image: "صورة",
  ct_text: "نص",
  numberOfPosts: "عدد المنشورات",
  publishingTime: "وقت النشر",
  publishingDays: "أيام النشر",
  campaignMessage: "رسالة الحملة",
  campaignMessagePh: "اكتب الرسالة الأساسية لحملتك…",
  step_content: "المحتوى",
  step_message: "الرسالة",
  predictionDashboard: "لوحة التنبؤ",
  campaignReadiness: "جاهزية الحملة",
  ready: "جاهزة للإطلاق",
  almostReady: "شبه جاهزة",
  needsWork: "تحتاج تحسين",
  performancePredictions: "تنبؤات الأداء",
  expectedEngagement: "معدل التفاعل المتوقّع",
  successProbability: "احتمالية النجاح",
  sentimentPredictions: "المشاعر المتوقّعة",
  weaknessesDetected: "نقاط الضعف المكتشفة",
  noWeaknesses: "لا توجد نقاط ضعف حرجة.",
  weak_time: "توقيت النشر غير مثالي",
  weak_content: "نوع المحتوى ضعيف على المنصّات المختارة",
  weak_message: "الرسالة غير واضحة أو طويلة جدًا",
  weak_audience: "الاستهداف واسع جدًا",
  weak_platform: "المنصّة لا تناسب هدفك",
  smartRecs: "توصيات ذكية",
  rec_postEvening: "انشر في المساء (19:00 – 22:00) للوصول الأقصى.",
  rec_useVideo: "استخدم الفيديو بدل النص — يضاعف التفاعل ~2.3×.",
  rec_shorten: "اختصر رسالتك إلى أقل من 120 حرفًا.",
  rec_focusAudience: "ركّز الاستهداف على فئة عمرية واحدة.",
  rec_switchPlatform: "ابدأ بـ Instagram و TikTok لأهداف التوعية.",
  whatIf: "محاكاة ماذا لو",
  whatIfIntro: "غيّر المتغيّرات — التنبؤات تتحدّث فورًا.",
  highestPriority: "أولوية التحسين القصوى",
  topStrategy: "أفضل استراتيجية",
  aiAssistant: "المساعد الذكي",
  aiAssistantTip: "التحوّل إلى الفيديو القصير قد يرفع التفاعل ~40%.",
  backToSetup: "تعديل الحملة",
  evening: "مساءً",
  afternoon: "ظهرًا",
  morning: "صباحًا",
  cat_Awareness: "توعية",
  cat_Marketing: "تسويق",
  cat_Political: "سياسية",
  cat_Social: "اجتماعية",
  cat_Health: "صحية",
  cat_Education: "تعليمية",
  goal_Awareness: "توعية",
  goal_Sales: "مبيعات",
  goal_BehaviorChange: "تغيير السلوك",
  analyzingCampaign: "جارٍ تحليل حملتك",
  aiCorrelating: "الذكاء الاصطناعي يربط الإشارات عبر المنصّات.",
  an_ingesting: "استيعاب بيانات الحملة",
  an_computing: "حساب إشارات التفاعل",
  an_running: "تشغيل نماذج الذكاء والمشاعر",
  an_generating: "توليد التوصيات",
  campaign: "الحملة",
  overallScore: "النتيجة الإجمالية",
  status_strong: "ممتاز",
  status_average: "جيد",
  status_weak: "ضعيف",
  engagementTrend: "اتجاه التفاعل",
  viewsOverTime: "المشاهدات عبر الزمن",
  sentiment: "المشاعر",
  audienceResponse: "استجابة الجمهور",
  sentiment_positive: "إيجابي",
  sentiment_neutral: "محايد",
  sentiment_negative: "سلبي",
  engagementRate: "معدل التفاعل",
  grade_poor: "سيّئ",
  grade_good: "جيد",
  grade_excellent: "ممتاز",
  aboveBenchmark: "أعلى من المعدل المرجعي 3.5% لنوع حملتك.",
  peakTime: "وقت الذروة",
  highestActivity: "نافذة أعلى نشاط.",
  viewFullReport: "عرض التقرير الكامل",
  fullReport: "التقرير الكامل",
  score: "النتيجة",
  executiveSummary: "الملخّص التنفيذي",
  keyInsights: "أهم الرؤى",
  suggestedImprovements: "تحسينات مقترحة",
  seeRecommendations: "عرض التوصيات",
  imp_1: "إعادة توجيه ~30% من ميزانية الإعلانات نحو الفيديوهات القصيرة.",
  imp_2: "جدولة الإطلاق القادم يوم الخميس 19:00 لاستثمار وقت الذروة.",
  imp_3: "اختبار محتوى أكثر تركيزًا على الفئة 25–34.",
  imp_4: "إطلاق موجة محتوى من المستخدمين خلال 14 يومًا.",
  exec_summary: "حصلت حملة {name} على {score}/100 بمعدل تفاعل {er}%، مصنّفة كـ{grade}. كانت استجابة الجمهور إيجابية إلى حدّ كبير ({pos}%)، وكان وقت الذروة بين {from} و{to}.",
  smartSuggestions: "اقتراحات ذكية",
  makeNextSharper: "اجعل حملتك القادمة أكثر دقّة",
  rec_content: "المحتوى",
  rec_timing: "التوقيت",
  rec_targeting: "الاستهداف",
  rec_strategy: "الاستراتيجية",
  frequentlyAsked: "الأسئلة الشائعة",
  faqIntro: "إجابات قصيرة وواضحة لأكثر الأسئلة شيوعًا.",
  getInTouch: "تواصل معنا",
  replyWithin: "نردّ عادةً خلال يوم عمل واحد.",
  emailOpensGmail: "البريد · يفتح Gmail",
  phone: "الهاتف",
  paymentMethods: "وسائل الدفع",
  choosePayment: "اختر بطاقة للدفع بأمان.",
  edahabiaCard: "بطاقة الذهبية",
  algerianCard: "بطاقة جزائرية",
  visaCardLabel: "فيزا",
  cardNumber: "رقم البطاقة",
  fullName: "الاسم الكامل",
  cardholderName: "اسم حامل البطاقة",
  expiryDate: "تاريخ الانتهاء",
  cvv: "رمز التحقق",
  confirmPayment: "تأكيد الدفع",
  payNow: "ادفع الآن",
  securePayment: "دفع آمن",
  encryptedTransaction: "معاملة مشفّرة · SSL 256-bit",
  paymentSuccessful: "تمّ الدفع بنجاح",
  transactionComplete: "اكتملت معاملتك بنجاح.",
  backToPayments: "عودة إلى وسائل الدفع",
  amount: "المبلغ"
};
const fr = {
  ...en,
  back: "Retour",
  continue: "Continuer",
  submit: "Envoyer",
  loading: "Chargement…",
  skipToApp: "Passer → Ouvrir l'app",
  hello: "Bonjour",
  signupHere: "Inscrivez-vous",
  registerUser: "S'inscrire en tant qu'utilisateur",
  registerOrg: "S'inscrire en tant qu'organisation",
  tagline: "Comprenez ce qui fonctionne, et pourquoi.",
  description: "Une app intelligente qui transforme les données bruyantes en insights et mesure l'impact réel de vos campagnes.",
  createAccount: "Créer un compte",
  chooseRegister: "Choisissez votre type d'inscription.",
  user: "Utilisateur",
  organization: "Organisation",
  firstName: "Prénom",
  lastName: "Nom",
  email: "Email",
  password: "Mot de passe",
  confirmPassword: "Confirmer le mot de passe",
  orgName: "Nom de l'organisation",
  orgType: "Type",
  orgTypePh: "Agence, ONG, Gouvernement…",
  city: "Ville",
  businessEmail: "Email professionnel",
  home: "Accueil",
  analyzeNow: "Analyser",
  reports: "Rapports",
  recommendations: "Recommandations",
  analytics: "Analytique",
  settings: "Paramètres",
  language: "Langue",
  account: "Compte",
  region: "Région",
  regionOptional: "Région (optionnel)",
  payment: "Paiement",
  security: "Sécurité",
  support: "Support",
  editName: "Modifier le nom",
  changeEmail: "Changer d'email",
  changePassword: "Changer de mot de passe",
  setRegion: "Définir la région",
  goldCard: "Carte Gold",
  visaCard: "Carte Visa",
  privacy: "Confidentialité",
  deviceManagement: "Gestion des appareils",
  deleteAccount: "Supprimer le compte",
  helpCenter: "Centre d'aide",
  aiPoweredBadge: "Intelligence de campagne par IA",
  howItWorks: "Comment ça marche",
  fromSignupToInsight: "De l'inscription à l'insight",
  step_signUp: "Inscription",
  step_chooseType: "Choisir le type",
  step_enterData: "Saisir les données",
  step_waitAnalysis: "Attendre l'analyse",
  step_getReport: "Obtenir le rapport",
  whyUs: "Pourquoi nous",
  theEdge: "Notre force",
  feat_realImpact: "Mesure l'impact réel",
  feat_aiInsights: "Insights par IA",
  feat_dashboards: "Tableaux simplifiés",
  feat_recs: "Recommandations intelligentes",
  feat_allMetrics: "Toutes les métriques au même endroit",
  stat_avgScore: "Score moyen",
  stat_engagement: "Engagement",
  stat_campaigns: "Campagnes",
  stat_aiInsights: "Insights IA",
  faq: "FAQ",
  contact: "Contact",
  questionsAnswered: "Questions & réponses",
  reachTheTeam: "Contacter l'équipe",
  newAnalysis: "Nouvelle analyse",
  analyzeIntro: "Parlez-nous de la campagne — nous révélerons ce qui a marché.",
  step_campaign: "Campagne",
  step_platforms: "Plateformes",
  step_metrics: "Métriques",
  campaignName: "Nom de la campagne",
  campaignNamePh: "Campagne printemps 2026",
  type: "Type",
  goal: "Objectif",
  targetAudience: "Audience cible",
  age: "Âge",
  gender: "Genre",
  location: "Lieu",
  duration: "Durée",
  budgetOptional: "Budget (optionnel)",
  platformsLabel: "Plateformes",
  postUrl: "URL du post",
  views: "Vues",
  likes: "J'aime",
  comments: "Commentaires",
  shares: "Partages",
  saves: "Enregistrements",
  clicks: "Clics",
  followersBefore: "Abonnés avant",
  followersAfter: "Abonnés après",
  topLocation: "Top lieu",
  topAge: "Top tranche d'âge",
  submitForAnalysis: "Soumettre pour analyse",
  cat_Awareness: "Sensibilisation",
  cat_Marketing: "Marketing",
  cat_Political: "Politique",
  cat_Social: "Social",
  cat_Health: "Santé",
  cat_Education: "Éducation",
  goal_Awareness: "Sensibilisation",
  goal_Sales: "Ventes",
  goal_BehaviorChange: "Changement de comportement",
  analyzingCampaign: "Analyse en cours",
  aiCorrelating: "L'IA corrèle les signaux entre plateformes.",
  an_ingesting: "Ingestion des données",
  an_computing: "Calcul des signaux d'engagement",
  an_running: "Modèles IA de sentiment",
  an_generating: "Génération des recommandations",
  campaign: "Campagne",
  overallScore: "Score global",
  status_strong: "Fort",
  status_average: "Moyen",
  status_weak: "Faible",
  engagementTrend: "Tendance d'engagement",
  viewsOverTime: "Vues dans le temps",
  sentiment: "Sentiment",
  audienceResponse: "Réaction du public",
  sentiment_positive: "Positif",
  sentiment_neutral: "Neutre",
  sentiment_negative: "Négatif",
  engagementRate: "Taux d'engagement",
  grade_poor: "Faible",
  grade_good: "Bon",
  grade_excellent: "Excellent",
  aboveBenchmark: "Au-dessus de la référence de 3.5%.",
  peakTime: "Heure de pointe",
  highestActivity: "Fenêtre la plus active.",
  viewFullReport: "Voir le rapport complet",
  fullReport: "Rapport complet",
  score: "Score",
  executiveSummary: "Résumé exécutif",
  keyInsights: "Insights clés",
  suggestedImprovements: "Améliorations suggérées",
  seeRecommendations: "Voir les recommandations",
  imp_1: "Réallouer ~30% du budget vers les vidéos courtes.",
  imp_2: "Programmer le prochain lancement jeudi 19:00.",
  imp_3: "Tester une variante créative ciblée 25–34 ans.",
  imp_4: "Lancer une vague UGC dans les 14 jours.",
  exec_summary: "La campagne {name} a obtenu {score}/100 avec un engagement de {er}%, classée {grade}. Réaction majoritairement positive ({pos}%), pic entre {from} et {to}.",
  smartSuggestions: "Suggestions",
  makeNextSharper: "Rendez votre prochaine campagne plus précise",
  rec_content: "Contenu",
  rec_timing: "Timing",
  rec_targeting: "Ciblage",
  rec_strategy: "Stratégie",
  frequentlyAsked: "Questions fréquentes",
  faqIntro: "Réponses courtes aux questions les plus posées.",
  getInTouch: "Contactez-nous",
  replyWithin: "Nous répondons sous un jour ouvré.",
  emailOpensGmail: "Email · Ouvre Gmail",
  phone: "Téléphone",
  paymentMethods: "Moyens de paiement",
  choosePayment: "Choisissez une carte pour payer en sécurité.",
  edahabiaCard: "Carte Edahabia",
  algerianCard: "Carte algérienne",
  visaCardLabel: "Visa",
  cardNumber: "Numéro de carte",
  fullName: "Nom complet",
  cardholderName: "Nom du titulaire",
  expiryDate: "Date d'expiration",
  cvv: "CVV",
  confirmPayment: "Confirmer le paiement",
  payNow: "Payer maintenant",
  securePayment: "Paiement sécurisé",
  encryptedTransaction: "Transaction chiffrée · SSL 256-bit",
  paymentSuccessful: "Paiement réussi",
  transactionComplete: "Votre transaction est terminée.",
  backToPayments: "Retour aux paiements",
  amount: "Montant"
};
const es = {
  ...en,
  back: "Atrás",
  continue: "Continuar",
  hello: "Hola",
  signupHere: "Regístrate",
  registerUser: "Registrarse como usuario",
  registerOrg: "Registrarse como organización",
  tagline: "Sabe qué funciona y por qué.",
  home: "Inicio",
  analyzeNow: "Analizar",
  reports: "Informes",
  recommendations: "Recomendaciones",
  settings: "Ajustes",
  language: "Idioma",
  payment: "Pago",
  paymentMethods: "Métodos de pago",
  choosePayment: "Elige una tarjeta para pagar de forma segura.",
  cardNumber: "Número de tarjeta",
  fullName: "Nombre completo",
  cardholderName: "Titular",
  expiryDate: "Caducidad",
  cvv: "CVV",
  confirmPayment: "Confirmar pago",
  payNow: "Pagar ahora",
  securePayment: "Pago seguro",
  paymentSuccessful: "Pago realizado"
};
const de = {
  ...en,
  back: "Zurück",
  continue: "Weiter",
  hello: "Hallo",
  signupHere: "Hier registrieren",
  registerUser: "Als Nutzer registrieren",
  registerOrg: "Als Organisation registrieren",
  home: "Startseite",
  analyzeNow: "Analysieren",
  reports: "Berichte",
  recommendations: "Empfehlungen",
  settings: "Einstellungen",
  language: "Sprache",
  payment: "Zahlung",
  paymentMethods: "Zahlungsmethoden",
  confirmPayment: "Zahlung bestätigen",
  payNow: "Jetzt zahlen",
  securePayment: "Sichere Zahlung",
  paymentSuccessful: "Zahlung erfolgreich"
};
const zh = {
  ...en,
  back: "返回",
  continue: "继续",
  hello: "你好",
  signupHere: "在此注册",
  registerUser: "注册为用户",
  registerOrg: "注册为组织",
  home: "主页",
  analyzeNow: "立即分析",
  reports: "报告",
  recommendations: "建议",
  settings: "设置",
  language: "语言",
  payment: "支付",
  paymentMethods: "支付方式",
  confirmPayment: "确认支付",
  payNow: "立即支付",
  securePayment: "安全支付",
  paymentSuccessful: "支付成功"
};
const dicts = { en, ar, fr, es, de, zh };
const LANGS = [
  { code: "ar", label: "العربية", flag: "🇩🇿" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh", label: "中文", flag: "🇨🇳" }
];
const I18nCtx = reactExports.createContext(null);
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("en");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("pi-lang");
    if (stored && dicts[stored]) setLangState(stored);
  }, []);
  reactExports.useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem("pi-lang", l);
    } catch (e) {
      console.warn("Failed to save language choice to localStorage", e);
    }
  };
  const value = reactExports.useMemo(() => {
    const dict = dicts[lang] ?? en;
    return {
      lang,
      setLang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: (k, vars) => {
        let s = dict[k] ?? en[k] ?? String(k);
        if (vars)
          for (const [vk, vv] of Object.entries(vars)) s = s.replaceAll(`{${vk}}`, String(vv));
        return s;
      }
    };
  }, [lang]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nCtx.Provider, { value, children });
}
function useI18n() {
  const c = reactExports.useContext(I18nCtx);
  if (!c) throw new Error("useI18n must be used inside I18nProvider");
  return c;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Public Insight — Know what works, and why" },
      {
        name: "description",
        content: "Smart campaign analytics that turn noisy data into deep insights and measure real impact."
      },
      { name: "author", content: "Public Insight" },
      { property: "og:title", content: "Public Insight" },
      {
        property: "og:description",
        content: "Smart campaign analytics that turn noisy data into deep insights."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Cairo:wght@400;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$d = () => import("./signup-CEDuH2g8.mjs");
const search = objectType({
  as: enumType(["user", "org"]).optional()
});
const Route$d = createFileRoute("/signup")({
  validateSearch: search,
  head: () => ({
    meta: [{
      title: "Sign up — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./settings-o_XjFEzG.mjs");
const Route$c = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./results-8R5mTI6c.mjs");
const Route$b = createFileRoute("/results")({
  head: () => ({
    meta: [{
      title: "Results — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./reports-4qpgxwj-.mjs");
const Route$a = createFileRoute("/reports")({
  head: () => ({
    meta: [{
      title: "Reports & Logs — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./recommendations-CtuBICTf.mjs");
const Route$9 = createFileRoute("/recommendations")({
  head: () => ({
    meta: [{
      title: "AI Recommendations & Roadmap — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./predict-D56Er9rt.mjs");
const Route$8 = createFileRoute("/predict")({
  head: () => ({
    meta: [{
      title: "Prediction — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./payment-zEpAgrEo.mjs");
const Route$7 = createFileRoute("/payment")({
  head: () => ({
    meta: [{
      title: "Payment — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./home-DLOcGYNO.mjs");
const Route$6 = createFileRoute("/home")({
  head: () => ({
    meta: [{
      title: "Public Insight — Home"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-CYgkQNNC.mjs");
const Route$5 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-CWcMNXeu.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./chat-CceUMnxp.mjs");
const Route$3 = createFileRoute("/chat")({
  head: () => ({
    meta: [{
      title: "AI Assistant — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./analyzing-Cvt271KU.mjs");
const Route$2 = createFileRoute("/analyzing")({
  head: () => ({
    meta: [{
      title: "Analyzing… — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./analyze-CFbhYwuW.mjs");
const Route$1 = createFileRoute("/analyze")({
  head: () => ({
    meta: [{
      title: "Analyze — Public Insight"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-hUvKofDx.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Public Insight — Hello There"
    }, {
      name: "description",
      content: "Smart campaign analytics powered by AI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SignupRoute = Route$d.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$e
});
const SettingsRoute = Route$c.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$e
});
const ResultsRoute = Route$b.update({
  id: "/results",
  path: "/results",
  getParentRoute: () => Route$e
});
const ReportsRoute = Route$a.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => Route$e
});
const RecommendationsRoute = Route$9.update({
  id: "/recommendations",
  path: "/recommendations",
  getParentRoute: () => Route$e
});
const PredictRoute = Route$8.update({
  id: "/predict",
  path: "/predict",
  getParentRoute: () => Route$e
});
const PaymentRoute = Route$7.update({
  id: "/payment",
  path: "/payment",
  getParentRoute: () => Route$e
});
const HomeRoute = Route$6.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => Route$e
});
const FaqRoute = Route$5.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const ChatRoute = Route$3.update({
  id: "/chat",
  path: "/chat",
  getParentRoute: () => Route$e
});
const AnalyzingRoute = Route$2.update({
  id: "/analyzing",
  path: "/analyzing",
  getParentRoute: () => Route$e
});
const AnalyzeRoute = Route$1.update({
  id: "/analyze",
  path: "/analyze",
  getParentRoute: () => Route$e
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  AnalyzeRoute,
  AnalyzingRoute,
  ChatRoute,
  ContactRoute,
  FaqRoute,
  HomeRoute,
  PaymentRoute,
  PredictRoute,
  RecommendationsRoute,
  ReportsRoute,
  ResultsRoute,
  SettingsRoute,
  SignupRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  LANGS as L,
  Route$d as R,
  router as r,
  useI18n as u
};
