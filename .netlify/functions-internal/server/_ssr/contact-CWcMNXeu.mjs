import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as Mail, P as Phone } from "../_libs/lucide-react.mjs";
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
function Contact() {
  const {
    t
  } = useI18n();
  const email = "publicinsight@yahoo.com";
  const phone = "+1 555 0102 030";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("contact"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "text-4xl font-display font-bold text-gradient mb-2", children: t("getInTouch") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-10", children: t("replyWithin") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: gmailHref, target: "_blank", rel: "noopener noreferrer", className: "glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: t("emailOpensGmail") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", children: email })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${phone.replace(/\s/g, "")}`, className: "glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl gradient-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: t("phone") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: phone })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Contact as component
};
