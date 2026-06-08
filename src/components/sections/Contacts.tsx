"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { company } from "@/lib/data";

export default function Contacts() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          eyebrow="Контакты"
          title="Приезжайте или напишите"
          subtitle="Мы в Уфе, но работаем по всей России. Покажем авто, ответим на вопросы и рассчитаем стоимость."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Телефон", value: company.phone, href: company.phoneHref },
              { icon: Send, label: "Telegram", value: "@EPIC_MOTORS", href: company.telegram },
              { icon: MapPin, label: "Адрес", value: `${company.address}, ${company.district}` },
              { icon: Clock, label: "Часы работы", value: company.hours },
            ].map((item, i) => {
              const Inner = (
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              );
              return (
                <Reveal key={item.label} delay={i * 0.07}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-accent/30 bg-accent/5">
                <div className="flex items-center gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{company.twogisRating} на 2ГИС</p>
                  <p className="text-xs text-muted-foreground">{company.reviewsCount} отзывов клиентов</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map embed */}
          <Reveal delay={0.15}>
            <div className="h-full min-h-[400px] rounded-2xl border border-border overflow-hidden">
              <iframe
                title="Epic Motors на карте"
                src="https://yandex.ru/map-widget/v1/?text=Уфа%20Комсомольская%2094%2F1&z=16"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
