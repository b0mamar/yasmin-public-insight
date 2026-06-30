import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-IZbcf4XT.mjs";
import { u as useI18n } from "./router-LT1YDNfL.mjs";
import "../_libs/seroval.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { r as CircleCheck, a4 as Wifi, g as CreditCard, b as Lock, a5 as Shield, A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function Payment() {
  const {
    t,
    dir
  } = useI18n();
  const [view, setView] = reactExports.useState("list");
  const [method, setMethod] = reactExports.useState("visa");
  const onPay = (m) => (e) => {
    e.preventDefault();
    setMethod(m);
    setView("success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: t("payment"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl mx-auto pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
    view === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-1", children: t("paymentMethods") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t("choosePayment") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("edahabia"), className: "w-full text-start", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EdahabiaCardPreview, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("visa"), className: "w-full text-start", dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisaCardPreview, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityBar, { t })
    ] }, "list"),
    view === "edahabia" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentForm, { title: t("edahabiaCard"), onBack: () => setView("list"), onSubmit: onPay("edahabia"), preview: /* @__PURE__ */ jsxRuntimeExports.jsx(EdahabiaCardPreview, { compact: true }), fields: [{
      key: "number",
      label: t("cardNumber"),
      placeholder: "6280 •••• •••• ••••",
      maxLength: 19
    }, {
      key: "name",
      label: t("fullName"),
      placeholder: "MOHAMED B."
    }, {
      key: "expiry",
      label: t("expiryDate"),
      placeholder: "MM/YY",
      maxLength: 5,
      half: true
    }], cta: t("confirmPayment"), t }, "edahabia"),
    view === "visa" && /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentForm, { title: t("visaCardLabel"), onBack: () => setView("list"), onSubmit: onPay("visa"), preview: /* @__PURE__ */ jsxRuntimeExports.jsx(VisaCardPreview, { compact: true }), fields: [{
      key: "number",
      label: t("cardNumber"),
      placeholder: "4242 4242 4242 4242",
      maxLength: 19
    }, {
      key: "name",
      label: t("cardholderName"),
      placeholder: "JOHN DOE"
    }, {
      key: "expiry",
      label: t("expiryDate"),
      placeholder: "MM/YY",
      maxLength: 5,
      half: true
    }, {
      key: "cvv",
      label: t("cvv"),
      placeholder: "123",
      maxLength: 4,
      half: true
    }], cta: t("payNow"), t }, "visa"),
    view === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "text-center py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }, className: "h-24 w-24 mx-auto rounded-full bg-success/15 border border-success/30 grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-success" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-2", children: t("paymentSuccessful") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: t("transactionComplete") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-8", children: [
        method === "edahabia" ? t("edahabiaCard") : t("visaCardLabel"),
        " · #",
        Math.random().toString(36).slice(2, 10).toUpperCase()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("list"), className: "gradient-primary text-primary-foreground px-8 py-3.5 rounded-2xl font-semibold glow-ring", children: t("backToPayments") })
    ] }, "success")
  ] }) }) });
}
function SecurityBar({
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 glass-card p-4 flex items-center gap-3 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-xl bg-success/15 border border-success/30 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-success" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: t("securePayment") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("encryptedTransaction") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-success" })
  ] });
}
function EdahabiaCardPreview({
  compact
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl ${compact ? "h-44" : "h-52"}`, style: {
    background: "linear-gradient(135deg, #c69333 0%, #f0c050 35%, #8a5a18 100%)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/15 blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-black/20 blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] opacity-80", children: "Algérie Poste" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg leading-tight", children: "EDAHABIA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-5 w-5 rotate-90 opacity-90" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-9 w-12 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-600 mb-4 border border-yellow-700/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-mono tracking-widest text-base mb-3", children: "6280 •••• •••• 1234" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-end justify-between text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 uppercase tracking-wider text-[9px]", children: "Holder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "MOHAMED B." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 uppercase tracking-wider text-[9px]", children: "Expires" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "12/28" })
      ] })
    ] })
  ] });
}
function VisaCardPreview({
  compact
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl ${compact ? "h-44" : "h-52"}`, style: {
    background: "linear-gradient(135deg, #0a0f3d 0%, #1a1f6b 50%, #3b3fa8 100%)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-10 h-64 w-64 rounded-full bg-indigo-400/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-6 w-6 opacity-90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black italic text-2xl tracking-tight", children: "VISA" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-9 w-12 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-600 mb-4 border border-yellow-800/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-mono tracking-widest text-base mb-3", children: "4242 •••• •••• 4242" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-end justify-between text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 uppercase tracking-wider text-[9px]", children: "Cardholder" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "JOHN DOE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 uppercase tracking-wider text-[9px]", children: "Exp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "09/27" })
      ] })
    ] })
  ] });
}
function PaymentForm({
  title,
  onBack,
  onSubmit,
  preview,
  fields,
  cta,
  t
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 10
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onBack, className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 rtl:rotate-180" }),
      " ",
      t("back")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: preview }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "glass-card p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: f.half ? "col-span-1" : "col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider", children: f.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, maxLength: f.maxLength, placeholder: f.placeholder, className: "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition font-mono" })
      ] }, f.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-success" }),
        t("encryptedTransaction")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.01] transition", children: cta })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SecurityBar, { t })
  ] });
}
export {
  Payment as component
};
