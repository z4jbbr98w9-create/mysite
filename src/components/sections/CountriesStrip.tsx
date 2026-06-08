"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { countries } from "@/lib/data";

export default function CountriesStrip() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          eyebrow="Направления"
          title="Откуда мы возим автомобили"
          subtitle="Четыре проверенных рынка с прямой логистикой и доступом к лучшим предложениям."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full p-7 rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="absolute -right-6 -top-6 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {c.flag}
                </div>
                <div className="relative">
                  <span className="text-4xl">{c.flag}</span>
                  <h3 className="display-font text-xl font-bold mt-4">{c.name}</h3>
                  <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {c.accent}
                  </span>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
