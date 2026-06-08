import PageHero from "@/components/shared/PageHero";
import Contacts from "@/components/sections/Contacts";
import LeadForm from "@/components/sections/LeadForm";

export const metadata = {
  title: "Контакты — Epic Motors",
  description: "Epic Motors, Уфа, Комсомольская 94/1. +7 905 005-09-09.",
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle="Ответим на вопросы, рассчитаем стоимость и подберём автомобиль под ваш бюджет."
      />
      <Contacts />
      <LeadForm />
    </main>
  );
}
