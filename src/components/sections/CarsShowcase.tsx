"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CarCard from "@/components/shared/CarCard";
import { cars } from "@/lib/data";

export default function CarsShowcase({ limit = 6 }: { limit?: number }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Наш гараж"
            title="Автомобили, которые мы привезли клиентам"
            subtitle="Реальные примеры из Кореи, Германии, Китая и Японии — каждое авто проверено и оформлено под ключ."
          />
          <Link
            href="/catalog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent whitespace-nowrap"
          >
            Весь каталог
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, limit).map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
