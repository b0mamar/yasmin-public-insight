import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a8 as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const itemsByLang = {
  en: [{
    q: "Why are campaign analytics important?",
    a: "They reveal what works and why so you can redirect budget and effort toward the messages and channels with real impact — instead of guessing."
  }, {
    q: "Why is Public Insight different?",
    a: "We unify metrics across platforms in one dashboard and apply AI that turns numbers into actionable recommendations, not static reports."
  }, {
    q: "How does it improve performance?",
    a: "We identify peak hours, top-engaging audiences, and best-performing content, then propose concrete tweaks to lift engagement and reach."
  }],
  ar: [{
    q: "لماذا تحليل الحملات مهم؟",
    a: "تحليل الحملات يكشف ما الذي ينجح ولماذا، فيتيح لك توجيه الميزانية والجهد إلى الرسائل والقنوات الأعلى أثرًا بدلًا من التخمين."
  }, {
    q: "لماذا Public Insight الأفضل؟",
    a: "نجمع البيانات من كل المنصّات في لوحة واحدة، ثم نطبّق ذكاءً اصطناعيًا يحوّل الأرقام إلى توصيات قابلة للتنفيذ — لا تقارير جامدة."
  }, {
    q: "كيف يساعد في تحسين الأداء؟",
    a: "نحدّد ساعات الذروة، الجماهير الأكثر تفاعلًا، والمحتوى الأعلى أداءً، ونقترح تعديلات ملموسة لرفع معدّل التفاعل والوصول."
  }],
  fr: [{
    q: "Pourquoi l'analyse de campagne est-elle importante ?",
    a: "Elle révèle ce qui fonctionne et pourquoi, pour réorienter le budget vers les messages et canaux à fort impact."
  }, {
    q: "Qu'est-ce qui distingue Public Insight ?",
    a: "Nous unifions les métriques multi-plateformes et appliquons une IA qui transforme les chiffres en recommandations actionnables."
  }, {
    q: "Comment améliore-t-il les performances ?",
    a: "Nous identifions les heures de pointe, les meilleures audiences et le meilleur contenu, puis proposons des ajustements concrets."
  }]
};
function FAQ() {
  const {
    t,
    lang
  } = useI18n();
  const items = itemsByLang[lang] ?? itemsByLang.en;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("faq"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "text-4xl font-display font-bold text-gradient mb-2", children: t("frequentlyAsked") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-10", children: t("faqIntro") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ...item }, i)) })
  ] }) });
}
function Item({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between text-start p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      height: 0,
      opacity: 0
    }, animate: {
      height: "auto",
      opacity: 1
    }, exit: {
      height: 0,
      opacity: 0
    }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed", children: a }) }) })
  ] });
}
export {
  FAQ as component
};
