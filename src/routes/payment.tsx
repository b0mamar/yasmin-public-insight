import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, ArrowLeft, CheckCircle2, CreditCard, Wifi } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/payment")({
  head: () => ({ meta: [{ title: "Payment — Public Insight" }] }),
  component: Payment,
});

type View = "list" | "edahabia" | "visa" | "success";

function Payment() {
  const { t, dir } = useI18n();
  const [view, setView] = useState<View>("list");
  const [method, setMethod] = useState<"edahabia" | "visa">("visa");

  const onPay = (m: "edahabia" | "visa") => (e: React.FormEvent) => {
    e.preventDefault();
    setMethod(m);
    setView("success");
  };

  return (
    <AppShell title={t("payment")}>
      <div className="max-w-xl mx-auto pb-10">
        <AnimatePresence mode="wait">
          {view === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-6">
                <h1 className="text-3xl font-display font-bold mb-1">{t("paymentMethods")}</h1>
                <p className="text-sm text-muted-foreground">{t("choosePayment")}</p>
              </div>

              <div className="space-y-4">
                <button onClick={() => setView("edahabia")} className="w-full text-start" dir={dir}>
                  <EdahabiaCardPreview />
                </button>
                <button onClick={() => setView("visa")} className="w-full text-start" dir={dir}>
                  <VisaCardPreview />
                </button>
              </div>

              <SecurityBar t={t} />
            </motion.div>
          )}

          {view === "edahabia" && (
            <PaymentForm
              key="edahabia"
              title={t("edahabiaCard")}
              onBack={() => setView("list")}
              onSubmit={onPay("edahabia")}
              preview={<EdahabiaCardPreview compact />}
              fields={[
                {
                  key: "number",
                  label: t("cardNumber"),
                  placeholder: "6280 •••• •••• ••••",
                  maxLength: 19,
                },
                { key: "name", label: t("fullName"), placeholder: "MOHAMED B." },
                {
                  key: "expiry",
                  label: t("expiryDate"),
                  placeholder: "MM/YY",
                  maxLength: 5,
                  half: true,
                },
              ]}
              cta={t("confirmPayment")}
              t={t}
            />
          )}

          {view === "visa" && (
            <PaymentForm
              key="visa"
              title={t("visaCardLabel")}
              onBack={() => setView("list")}
              onSubmit={onPay("visa")}
              preview={<VisaCardPreview compact />}
              fields={[
                {
                  key: "number",
                  label: t("cardNumber"),
                  placeholder: "4242 4242 4242 4242",
                  maxLength: 19,
                },
                { key: "name", label: t("cardholderName"), placeholder: "JOHN DOE" },
                {
                  key: "expiry",
                  label: t("expiryDate"),
                  placeholder: "MM/YY",
                  maxLength: 5,
                  half: true,
                },
                { key: "cvv", label: t("cvv"), placeholder: "123", maxLength: 4, half: true },
              ]}
              cta={t("payNow")}
              t={t}
            />
          )}

          {view === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-24 w-24 mx-auto rounded-full bg-success/15 border border-success/30 grid place-items-center mb-6"
              >
                <CheckCircle2 className="h-12 w-12 text-success" />
              </motion.div>
              <h1 className="text-3xl font-display font-bold mb-2">{t("paymentSuccessful")}</h1>
              <p className="text-sm text-muted-foreground mb-2">{t("transactionComplete")}</p>
              <p className="text-xs text-muted-foreground mb-8">
                {method === "edahabia" ? t("edahabiaCard") : t("visaCardLabel")} · #
                {Math.random().toString(36).slice(2, 10).toUpperCase()}
              </p>
              <button
                onClick={() => setView("list")}
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-2xl font-semibold glow-ring"
              >
                {t("backToPayments")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppShell>
  );
}

function SecurityBar({ t }: { t: (k: any) => string }) {
  return (
    <div className="mt-6 glass-card p-4 flex items-center gap-3 text-xs">
      <div className="h-9 w-9 rounded-xl bg-success/15 border border-success/30 grid place-items-center">
        <Lock className="h-4 w-4 text-success" />
      </div>
      <div className="flex-1">
        <div className="font-medium">{t("securePayment")}</div>
        <div className="text-muted-foreground">{t("encryptedTransaction")}</div>
      </div>
      <Shield className="h-5 w-5 text-success" />
    </div>
  );
}

function EdahabiaCardPreview({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl ${compact ? "h-44" : "h-52"}`}
      style={{
        background: "linear-gradient(135deg, #c69333 0%, #f0c050 35%, #8a5a18 100%)",
      }}
    >
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-black/20 blur-2xl" />

      <div className="relative flex items-start justify-between mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">Algérie Poste</div>
          <div className="font-display font-bold text-lg leading-tight">EDAHABIA</div>
        </div>
        <Wifi className="h-5 w-5 rotate-90 opacity-90" />
      </div>

      <div className="relative h-9 w-12 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-600 mb-4 border border-yellow-700/40" />

      <div className="relative font-mono tracking-widest text-base mb-3">6280 •••• •••• 1234</div>
      <div className="relative flex items-end justify-between text-[11px]">
        <div>
          <div className="opacity-70 uppercase tracking-wider text-[9px]">Holder</div>
          <div className="font-semibold">MOHAMED B.</div>
        </div>
        <div className="text-end">
          <div className="opacity-70 uppercase tracking-wider text-[9px]">Expires</div>
          <div className="font-semibold">12/28</div>
        </div>
      </div>
    </div>
  );
}

function VisaCardPreview({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl ${compact ? "h-44" : "h-52"}`}
      style={{
        background: "linear-gradient(135deg, #0a0f3d 0%, #1a1f6b 50%, #3b3fa8 100%)",
      }}
    >
      <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-2xl" />

      <div className="relative flex items-start justify-between mb-6">
        <CreditCard className="h-6 w-6 opacity-90" />
        <div className="font-display font-black italic text-2xl tracking-tight">VISA</div>
      </div>

      <div className="relative h-9 w-12 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-600 mb-4 border border-yellow-800/40" />

      <div className="relative font-mono tracking-widest text-base mb-3">4242 •••• •••• 4242</div>
      <div className="relative flex items-end justify-between text-[11px]">
        <div>
          <div className="opacity-70 uppercase tracking-wider text-[9px]">Cardholder</div>
          <div className="font-semibold">JOHN DOE</div>
        </div>
        <div className="text-end">
          <div className="opacity-70 uppercase tracking-wider text-[9px]">Exp</div>
          <div className="font-semibold">09/27</div>
        </div>
      </div>
    </div>
  );
}

type FieldDef = {
  key: string;
  label: string;
  placeholder: string;
  maxLength?: number;
  half?: boolean;
};

function PaymentForm({
  title,
  onBack,
  onSubmit,
  preview,
  fields,
  cta,
  t,
}: {
  title: string;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  preview: ReactPreview;
  fields: FieldDef[];
  cta: string;
  t: (k: any) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("back")}
      </button>

      <h1 className="text-2xl font-display font-bold mb-4">{title}</h1>
      <div className="mb-6">{preview}</div>

      <form onSubmit={onSubmit} className="glass-card p-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {fields.map((f) => (
            <label key={f.key} className={f.half ? "col-span-1" : "col-span-2"}>
              <span className="block text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                {f.label}
              </span>
              <input
                required
                maxLength={f.maxLength}
                placeholder={f.placeholder}
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition font-mono"
              />
            </label>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground py-2">
          <Lock className="h-3.5 w-3.5 text-success" />
          {t("encryptedTransaction")}
        </div>

        <button
          type="submit"
          className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-semibold glow-ring hover:scale-[1.01] transition"
        >
          {cta}
        </button>
      </form>

      <SecurityBar t={t} />
    </motion.div>
  );
}

type ReactPreview = React.ReactNode;
