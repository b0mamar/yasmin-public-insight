import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const logoUrl = "/assets/logo-white-DazSe7dd.png";
function AppLogo({ className = "h-8 w-8" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: logoUrl,
      alt: "Public Insight Logo",
      className: `${className} object-contain rounded-[20%]`
    }
  );
}
export {
  AppLogo as A
};
