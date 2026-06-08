import PageHero from "@/components/shared/PageHero";
import Calculator from "@/components/sections/Calculator";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Калькулятор стоимости — Epic Motors",
  description: "Рассчитайте стоимость импорта авто под ключ.",
};

export default function CalculatorPage() {
  return (
    <main>
      <PageHero
        eyebrow="Калькулятор"
        title="Рассчитайте стоимость авто"
        subtitle="Узнайте примерную цену под ключ с учётом таможни и доставки за пару кликов."
      />
      <Calculator />
      <FAQ />
    </main>
  );
}
