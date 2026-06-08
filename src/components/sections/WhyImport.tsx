"use client";

import { motion } from "framer-motion";
import { TrendingDown, Eye, Sparkles, FileSearch } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { whyImport } from "@/lib/data";

const icons = [TrendingDown, Eye, Sparkles, FileSearch];

export default function WhyImport() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          eyebrow="Почему это выгодно"
          title="Привезти авто под заказ — умное решение"
          subtitle="Вы получаете автомобиль дешевле рынка, в нужной комплектации и с полностью прозрачной сделкой."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyImport.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full p-7 rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-2xl transition-colors duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                    <Icon size={22} className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="display-font text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
