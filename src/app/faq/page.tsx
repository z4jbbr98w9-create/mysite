import PageHero from "@/components/shared/PageHero";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";

export const metadata = {
  title: "Частые вопросы — Epic Motors",
  description: "Ответы на популярные вопросы об импорте авто под заказ.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Частые вопросы"
        subtitle="Собрали всё важное об импорте авто под заказ. Не нашли ответ — напишите нам."
      />
      <FAQ />
      <LeadForm />
    </main>
  );
}
