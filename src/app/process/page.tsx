import PageHero from "@/components/shared/PageHero";
import Process from "@/components/sections/Process";
import WorldMap from "@/components/sections/WorldMap";
import LeadForm from "@/components/sections/LeadForm";

export const metadata = {
  title: "Как это работает — Epic Motors",
  description: "7 прозрачных этапов покупки авто под заказ под ключ.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Процесс"
        title="Как проходит покупка"
        subtitle="От заявки до ключей в руках — всего 7 прозрачных этапов под полным сопровождением."
      />
      <Process />
      <WorldMap />
      <LeadForm />
    </main>
  );
}
