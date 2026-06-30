import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Public Insight" }] }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const email = "publicinsight@yahoo.com";
  const phone = "+1 555 0102 030";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <AppShell title={t("contact")}>
      <div className="max-w-xl mx-auto py-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-bold text-gradient mb-2"
        >
          {t("getInTouch")}
        </motion.h1>
        <p className="text-muted-foreground mb-10">{t("replyWithin")}</p>

        <div className="space-y-4">
          <a
            href={gmailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition"
          >
            <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("emailOpensGmail")}
              </div>
              <div className="font-medium truncate">{email}</div>
            </div>
          </a>

          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition"
          >
            <div className="h-12 w-12 rounded-2xl gradient-primary grid place-items-center">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("phone")}
              </div>
              <div className="font-medium">{phone}</div>
            </div>
          </a>
        </div>
      </div>
    </AppShell>
  );
}
