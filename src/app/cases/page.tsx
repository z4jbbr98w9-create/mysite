import PageHero from "@/components/shared/PageHero";
import Cases from "@/components/sections/Cases";
import LeadForm from "@/components/sections/LeadForm";

export const metadata = {
  title: "Реальные кейсы — Epic Motors",
  description: "Истории успешных сделок: бюджет, срок и экономия клиентов.",
};

export default function CasesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Кейсы"
        title="Реальные истории сделок"
        subtitle="Конкретные проекты с цифрами: сколько стоило, за какой срок и сколько сэкономил клиент."
      />
      <Cases />
      <LeadForm />
    </main>
  );
}
