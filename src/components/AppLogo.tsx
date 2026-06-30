import React from "react";
import logoUrl from "../../assets/logo-white.png";

export function AppLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Public Insight Logo"
      className={`${className} object-contain rounded-[20%]`}
    />
  );
}
