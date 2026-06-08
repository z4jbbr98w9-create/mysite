"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Handshake } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import Counter from "@/components/shared/Counter";
import { company } from "@/lib/data";

const values = [
  { icon: Eye, title: "Прозрачность", desc: "Показываем каждый этап — фото, видео и отчёты по авто." },
  { icon: ShieldCheck, title: "Надёжность", desc: "19 лет на рынке и более 2000 успешных сделок." },
  { icon: Handshake, title: "Подход как для себя", desc: "Подбираем авто так, будто берём его себе." },
];

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto container-px grid lg:grid-cols-2 gap-14 items-center">
        {/* Image side */}
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&w=1000&q=80"
                alt="Epic Motors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:right-6 p-6 rounded-2xl bg-card border border-accent/30 backdrop-blur shadow-2xl"
            >
              <div className="display-font text-4xl font-extrabold text-accent">
                <Counter value={2000} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">довольных клиентов</p>
            </motion.div>
          </div>
        </Reveal>

        {/* Text side */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              <span className="w-6 h-px bg-accent" />
              О компании
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-font text-4xl md:text-5xl font-bold leading-[1.05] text-balance">
              Epic Motors — не автосалон,<br />а ваш личный эксперт по импорту
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              С {company.since} года мы подбираем, проверяем и привозим автомобили
              из Кореи, Германии, Китая и Японии. Основатель — {company.founder}.
              Работаем по принципу «авто как для себя»: честно, прозрачно и под ключ.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.15 + i * 0.08}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
