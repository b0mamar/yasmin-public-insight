import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, R as Route$d } from "./router-LT1YDNfL.mjs";
import { A as ArrowLeft, U as User, B as Building2 } from "../_libs/lucide-react.mjs";
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
function Signup() {
  const {
    t
  } = useI18n();
  const {
    as
  } = Route$d.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState(as ?? "user");
  const [form, setForm] = reactExports.useState({});
  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("pi-user", JSON.stringify({
      mode,
      ...form
    }));
    navigate({
      to: "/home"
    });
  };
  const set = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen px-6 py-10 max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 rtl:rotate-180" }),
      " ",
      t("back")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold mb-2", children: t("createAccount") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8", children: t("chooseRegister") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 p-1.5 bg-surface rounded-2xl border border-border mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMode("user"), className: `py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition ${mode === "user" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
          " ",
          t("user")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setMode("org"), className: `py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition ${mode === "org" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
          " ",
          t("organization")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        mode === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "firstName", name: "firstName", onChange: set("firstName") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "lastName", name: "lastName", onChange: set("lastName") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "email", name: "email", type: "email", onChange: set("email") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "password", name: "password", type: "password", onChange: set("password") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "confirmPassword", name: "confirm", type: "password", onChange: set("confirm") })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "orgName", name: "orgName", onChange: set("orgName") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "orgType", name: "type", placeholderKey: "orgTypePh", onChange: set("type") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "city", name: "city", onChange: set("city") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "businessEmail", name: "email", type: "email", onChange: set("email") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "password", name: "password", type: "password", onChange: set("password") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { labelKey: "confirmPassword", name: "confirm", type: "password", onChange: set("confirm") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.01] transition mt-6", children: t("createAccount") })
      ] })
    ] })
  ] });
}
function Field({
  labelKey,
  name,
  type = "text",
  placeholderKey,
  onChange
}) {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mb-1.5 font-medium", children: t(labelKey) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name, type, placeholder: placeholderKey ? t(placeholderKey) : void 0, onChange, className: "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" })
  ] });
}
export {
  Signup as component
};
