"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { cases } from "@/lib/data";

export default function Cases() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          eyebrow="Реальные кейсы"
          title="Истории успешных сделок"
          subtitle="Конкретные примеры: бюджет, срок и экономия клиента на каждом проекте."
        />

        <div className="mt-16 space-y-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group grid md:grid-cols-2 gap-0 rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                <span className="absolute top-5 left-5 text-3xl">{c.flag}</span>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="display-font text-2xl font-bold">{c.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.desc}</p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    ["Бюджет", c.budget],
                    ["Срок", c.term],
                    ["Экономия", c.saved],
                  ].map(([label, val], idx) => (
                    <div key={label}>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className={`display-font text-lg font-bold mt-1 ${idx === 2 ? "text-accent" : ""}`}>
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
