import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, User } from "lucide-react";
import { useI18n, LANGS } from "@/lib/i18n";
import { AppLogo } from "@/components/AppLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Public Insight — Hello There" },
      { name: "description", content: "Smart campaign analytics powered by AI." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  const { t, lang, setLang } = useI18n();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-6 right-6 z-10">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as any)}
          className="bg-surface border border-border rounded-lg px-3 py-1.5 text-xs"
          aria-label={t("language")}
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>
              {l.flag} {l.label}
            </option>
          ))}
        </select>
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.24 275 / 0.4), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <AppLogo className="h-20 w-20" />
        </div>

        <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3">
          {t("hello")}
        </h1>
        <p className="text-muted-foreground mb-12">Public Insight — {t("tagline")}</p>

        <Link
          to="/signup"
          className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.02] transition mb-8"
        >
          {t("signupHere")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>

        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/signup"
            search={{ as: "user" }}
            className="glass-card p-5 hover:border-primary/50 transition group"
          >
            <User className="h-6 w-6 mb-2 text-primary mx-auto" />
            <div className="text-sm font-medium">{t("registerUser")}</div>
          </Link>
          <Link
            to="/signup"
            search={{ as: "org" }}
            className="glass-card p-5 hover:border-primary/50 transition group"
          >
            <Building2 className="h-6 w-6 mb-2 text-primary mx-auto" />
            <div className="text-sm font-medium">{t("registerOrg")}</div>
          </Link>
        </div>

        <Link
          to="/home"
          className="block mt-8 text-xs text-muted-foreground hover:text-foreground transition"
        >
          {t("skipToApp")}
        </Link>
      </motion.div>
    </div>
  );
}
