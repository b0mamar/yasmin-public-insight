import { Link } from "@tanstack/react-router";
import {
  Home,
  BarChart3,
  Lightbulb,
  Settings,
  MessageSquare,
} from "lucide-react";
import { type ReactNode } from "react";
import { useI18n, LANGS } from "@/lib/i18n";
import { AppLogo } from "@/components/AppLogo";
import { ChatbotWidget } from "@/components/ChatbotWidget";

export function AppShell({ children, title }: { children: ReactNode; title?: string }) {
  const { t, lang, setLang } = useI18n();
  const ar = lang === "ar";

  const navItems = [
    { to: "/home", icon: Home, label: t("home") },
    { to: "/analyze", icon: AppLogo, label: t("analyzeNow") },
    { to: "/reports", icon: BarChart3, label: t("reports") },
    { to: "/recommendations", icon: Lightbulb, label: t("recommendations") },
    { to: "/chat", icon: MessageSquare, label: ar ? "المساعد الذكي" : "Smart AI" },
  ];

  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">
          <Link to="/home" className="flex items-center gap-2">
            <AppLogo className="h-9 w-9" />
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">Public Insight</div>
              <div className="text-[10px] text-muted-foreground tracking-wider uppercase">
                {title ?? t("analytics")}
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-surface border border-border rounded-lg px-2 py-1.5 text-xs"
              aria-label={t("language")}
            >
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
            <Link
              to="/settings"
              className="h-9 w-9 grid place-items-center rounded-xl bg-surface border border-border hover:bg-surface-elevated transition"
              title={ar ? "الإعدادات" : "Settings"}
            >
              <Settings className="h-4 w-4 text-foreground" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-6">{children}</main>
      <ChatbotWidget />

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="glass-card flex items-center gap-1 p-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 rounded-xl flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition"
              activeProps={{
                className:
                  "px-3 py-2 rounded-xl flex items-center gap-2 text-xs text-primary-foreground gradient-primary",
              }}
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
