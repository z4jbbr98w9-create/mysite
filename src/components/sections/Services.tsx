"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          center
          eyebrow="Услуги"
          title="Сделка под ключ"
          subtitle="Берём на себя всё: от поиска автомобиля до постановки на учёт. Вы получаете готовое авто."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (Icons[s.icon as keyof typeof Icons] ||
              Icons.Circle) as React.ComponentType<{ size?: number; className?: string }>;
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group h-full p-7 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <Icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="display-font text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
