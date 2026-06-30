import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Public Insight" }] }),
  component: FAQ,
});

const itemsByLang: Record<string, { q: string; a: string }[]> = {
  en: [
    {
      q: "Why are campaign analytics important?",
      a: "They reveal what works and why so you can redirect budget and effort toward the messages and channels with real impact — instead of guessing.",
    },
    {
      q: "Why is Public Insight different?",
      a: "We unify metrics across platforms in one dashboard and apply AI that turns numbers into actionable recommendations, not static reports.",
    },
    {
      q: "How does it improve performance?",
      a: "We identify peak hours, top-engaging audiences, and best-performing content, then propose concrete tweaks to lift engagement and reach.",
    },
  ],
  ar: [
    {
      q: "لماذا تحليل الحملات مهم؟",
      a: "تحليل الحملات يكشف ما الذي ينجح ولماذا، فيتيح لك توجيه الميزانية والجهد إلى الرسائل والقنوات الأعلى أثرًا بدلًا من التخمين.",
    },
    {
      q: "لماذا Public Insight الأفضل؟",
      a: "نجمع البيانات من كل المنصّات في لوحة واحدة، ثم نطبّق ذكاءً اصطناعيًا يحوّل الأرقام إلى توصيات قابلة للتنفيذ — لا تقارير جامدة.",
    },
    {
      q: "كيف يساعد في تحسين الأداء؟",
      a: "نحدّد ساعات الذروة، الجماهير الأكثر تفاعلًا، والمحتوى الأعلى أداءً، ونقترح تعديلات ملموسة لرفع معدّل التفاعل والوصول.",
    },
  ],
  fr: [
    {
      q: "Pourquoi l'analyse de campagne est-elle importante ?",
      a: "Elle révèle ce qui fonctionne et pourquoi, pour réorienter le budget vers les messages et canaux à fort impact.",
    },
    {
      q: "Qu'est-ce qui distingue Public Insight ?",
      a: "Nous unifions les métriques multi-plateformes et appliquons une IA qui transforme les chiffres en recommandations actionnables.",
    },
    {
      q: "Comment améliore-t-il les performances ?",
      a: "Nous identifions les heures de pointe, les meilleures audiences et le meilleur contenu, puis proposons des ajustements concrets.",
    },
  ],
};

function FAQ() {
  const { t, lang } = useI18n();
  const items = itemsByLang[lang] ?? itemsByLang.en;

  return (
    <AppShell title={t("faq")}>
      <div className="max-w-2xl mx-auto py-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-bold text-gradient mb-2"
        >
          {t("frequentlyAsked")}
        </motion.h1>
        <p className="text-muted-foreground mb-10">{t("faqIntro")}</p>

        <div className="space-y-3">
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-start p-5"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
