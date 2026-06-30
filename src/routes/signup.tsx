import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, User } from "lucide-react";
import { z } from "zod";
import { useI18n, type TKey } from "@/lib/i18n";

const search = z.object({ as: z.enum(["user", "org"]).optional() });

export const Route = createFileRoute("/signup")({
  validateSearch: search,
  head: () => ({ meta: [{ title: "Sign up — Public Insight" }] }),
  component: Signup,
});

function Signup() {
  const { t } = useI18n();
  const { as } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"user" | "org">(as ?? "user");
  const [form, setForm] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("pi-user", JSON.stringify({ mode, ...form }));
    navigate({ to: "/home" });
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="min-h-screen px-6 py-10 max-w-md mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("back")}
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold mb-2">{t("createAccount")}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t("chooseRegister")}</p>

        <div className="grid grid-cols-2 gap-2 p-1.5 bg-surface rounded-2xl border border-border mb-8">
          <button
            type="button"
            onClick={() => setMode("user")}
            className={`py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition ${mode === "user" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            <User className="h-4 w-4" /> {t("user")}
          </button>
          <button
            type="button"
            onClick={() => setMode("org")}
            className={`py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition ${mode === "org" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            <Building2 className="h-4 w-4" /> {t("organization")}
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === "user" ? (
            <>
              <Field labelKey="firstName" name="firstName" onChange={set("firstName")} />
              <Field labelKey="lastName" name="lastName" onChange={set("lastName")} />
              <Field labelKey="email" name="email" type="email" onChange={set("email")} />
              <Field
                labelKey="password"
                name="password"
                type="password"
                onChange={set("password")}
              />
              <Field
                labelKey="confirmPassword"
                name="confirm"
                type="password"
                onChange={set("confirm")}
              />
            </>
          ) : (
            <>
              <Field labelKey="orgName" name="orgName" onChange={set("orgName")} />
              <Field
                labelKey="orgType"
                name="type"
                placeholderKey="orgTypePh"
                onChange={set("type")}
              />
              <Field labelKey="city" name="city" onChange={set("city")} />
              <Field labelKey="businessEmail" name="email" type="email" onChange={set("email")} />
              <Field
                labelKey="password"
                name="password"
                type="password"
                onChange={set("password")}
              />
              <Field
                labelKey="confirmPassword"
                name="confirm"
                type="password"
                onChange={set("confirm")}
              />
            </>
          )}

          <button
            type="submit"
            className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.01] transition mt-6"
          >
            {t("createAccount")}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

function Field({
  labelKey,
  name,
  type = "text",
  placeholderKey,
  onChange,
}: {
  labelKey: TKey;
  name: string;
  type?: string;
  placeholderKey?: TKey;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { t } = useI18n();
  return (
    <label className="block">
      <span className="block text-xs text-muted-foreground mb-1.5 font-medium">{t(labelKey)}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholderKey ? t(placeholderKey) : undefined}
        onChange={onChange}
        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
      />
    </label>
  );
}
