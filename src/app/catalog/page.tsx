import PageHero from "@/components/shared/PageHero";
import CarCard from "@/components/shared/CarCard";
import LeadForm from "@/components/sections/LeadForm";
import { cars } from "@/lib/data";

export const metadata = {
  title: "Каталог авто — Epic Motors",
  description: "Автомобили под заказ из Кореи, Германии, Китая и Японии.",
};

export default function CatalogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Каталог"
        title="Автомобили под заказ"
        subtitle="Примеры авто, которые мы уже привезли клиентам. Привезём любую модель под ваш бюджет и требования."
      />
      <section className="pb-24">
        <div className="max-w-7xl mx-auto container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </section>
      <LeadForm />
    </main>
  );
}
