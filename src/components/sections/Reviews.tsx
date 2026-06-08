"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { reviews, company } from "@/lib/data";

export default function Reviews() {
  const doubled = [...reviews, ...reviews];
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Отзывы"
            title="Нам доверяют"
            subtitle={`Рейтинг ${company.twogisRating} на 2ГИС по ${company.reviewsCount} отзывам. Реальные истории наших клиентов.`}
          />
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="display-font text-3xl font-bold">{company.twogisRating}</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-14 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-5 marquee w-max">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 p-6 rounded-2xl border border-border bg-card"
            >
              <Quote size={24} className="text-accent/40 mb-4" />
              <p className="text-sm leading-relaxed text-foreground/90">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.car}</p>
                </div>
                <div className="flex gap-0.5 text-accent">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
