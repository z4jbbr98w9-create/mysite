import PageHero from "@/components/shared/PageHero";
import Reviews from "@/components/sections/Reviews";
import LeadForm from "@/components/sections/LeadForm";

export const metadata = {
  title: "Отзывы клиентов — Epic Motors",
  description: "Рейтинг 5.0 на 2ГИС. Реальные отзывы клиентов Epic Motors.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Отзывы"
        title="Что говорят клиенты"
        subtitle="Рейтинг 5.0 на 2ГИС по 27 отзывам. За 19 лет нам доверили более 2000 автомобилей."
      />
      <Reviews />
      <LeadForm />
    </main>
  );
}
