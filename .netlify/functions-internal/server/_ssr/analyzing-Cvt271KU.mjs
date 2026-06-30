import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import { a9 as Database, i as ChartColumn, aa as Brain, m as Sparkles } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const steps = [{
  Icon: Database,
  key: "an_ingesting"
}, {
  Icon: ChartColumn,
  key: "an_computing"
}, {
  Icon: Brain,
  key: "an_running"
}, {
  Icon: Sparkles,
  key: "an_generating"
}];
function Analyzing() {
  const {
    t
  } = useI18n();
  const nav = useNavigate();
  const [pct, setPct] = reactExports.useState(0);
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const total = 8e3;
    const tick = 80;
    let elapsed = 0;
    const id = setInterval(() => {
      elapsed += tick;
      const p = Math.min(100, elapsed / total * 100);
      setPct(p);
      setStep(Math.min(steps.length - 1, Math.floor(p / 100 * steps.length)));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => nav({
          to: "/results"
        }), 400);
      }
    }, tick);
    return () => clearInterval(id);
  }, [nav]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen grid place-items-center px-6 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }, transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }, className: "absolute h-[600px] w-[600px] rounded-full opacity-40", style: {
      background: "radial-gradient(circle, oklch(0.55 0.24 275 / 0.4), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        scale: [1, 1.05, 1]
      }, transition: {
        duration: 2,
        repeat: Infinity
      }, className: "h-24 w-24 rounded-3xl gradient-primary grid place-items-center glow-ring", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-12 w-12 text-primary-foreground" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-gradient mb-2", children: t("analyzingCampaign") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-10", children: t("aiCorrelating") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-surface border border-border overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        width: `${pct}%`
      }, className: "h-full gradient-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-10", children: [
        Math.round(pct),
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-start", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 transition ${i <= step ? "opacity-100" : "opacity-30"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-9 w-9 rounded-xl grid place-items-center transition ${i <= step ? "gradient-primary" : "bg-surface border border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: t(s.key) })
      ] }, s.key)) })
    ] })
  ] });
}
export {
  Analyzing as component
};
