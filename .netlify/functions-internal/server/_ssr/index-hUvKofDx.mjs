import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, L as LANGS } from "./router-LT1YDNfL.mjs";
import { A as AppLogo } from "./AppLogo-BHEYbuH1.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { x as ArrowRight, U as User, B as Building2 } from "../_libs/lucide-react.mjs";
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
function Welcome() {
  const {
    t,
    lang,
    setLang
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: lang, onChange: (e) => setLang(e.target.value), className: "bg-surface border border-border rounded-lg px-3 py-1.5 text-xs", "aria-label": t("language"), children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: l.code, children: [
      l.flag,
      " ",
      l.label
    ] }, l.code)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.6, 0.4]
    }, transition: {
      duration: 8,
      repeat: Infinity
    }, className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full", style: {
      background: "radial-gradient(circle, oklch(0.55 0.24 275 / 0.4), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "relative z-10 max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppLogo, { className: "h-20 w-20" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-display font-bold text-gradient mb-3", children: t("hello") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-12", children: [
        "Public Insight — ",
        t("tagline")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", className: "inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.02] transition mb-8", children: [
        t("signupHere"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rtl:rotate-180" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", search: {
          as: "user"
        }, className: "glass-card p-5 hover:border-primary/50 transition group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-6 w-6 mb-2 text-primary mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t("registerUser") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", search: {
          as: "org"
        }, className: "glass-card p-5 hover:border-primary/50 transition group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 mb-2 text-primary mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t("registerOrg") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/home", className: "block mt-8 text-xs text-muted-foreground hover:text-foreground transition", children: t("skipToApp") })
    ] })
  ] });
}
export {
  Welcome as component
};
