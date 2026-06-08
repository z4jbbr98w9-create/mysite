"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          eyebrow="Процесс"
          title="Как проходит покупка"
          subtitle="Семь прозрачных этапов — от вашей заявки до ключей в руках. Вы видите каждый шаг."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center gap-6 md:gap-0 md:grid md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                } md:mb-4`}
              >
                {/* Dot */}
                <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-background" />
                </div>

                <div
                  className={`flex-1 ml-16 md:ml-0 md:[direction:ltr] ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"
                  }`}
                >
                  <div className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors">
                    <span className="display-font text-3xl font-extrabold text-accent/30 group-hover:text-accent/60 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="display-font text-xl font-bold mt-1">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
