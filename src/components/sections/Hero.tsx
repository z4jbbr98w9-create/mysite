"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import { company } from "@/lib/data";

const countries = ["Корея", "Германия", "Китай", "Япония"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      {/* Parallax background image */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      {/* Glow */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] -z-10" />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto container-px w-full pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-graphite/60 backdrop-blur text-xs mb-8"
        >
          <span className="flex items-center gap-0.5 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </span>
          <span className="text-muted-foreground">
            {company.twogisRating} на 2ГИС · {company.reviewsCount} отзывов · с {company.since} года
          </span>
        </motion.div>

        <h1 className="display-font text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.95] max-w-4xl text-balance">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block"
          >
            Импорт
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block gradient-accent"
          >
            автомобилей
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="block text-3xl sm:text-4xl lg:text-5xl font-light mt-3 text-muted-foreground"
          >
            из{" "}
            {countries.map((c, i) => (
              <span key={c}>
                <span className="text-foreground font-semibold">{c}</span>
                {i < countries.length - 1 && <span className="text-accent"> · </span>}
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Подбираем, проверяем, доставляем и оформляем автомобиль под ключ.
          Прозрачная цена в договоре — без скрытых платежей.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/calculator"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-soft transition-all hover:gap-3"
          >
            Получить расчёт
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border bg-graphite/40 backdrop-blur font-semibold hover:border-accent/50 transition-colors"
          >
            Смотреть каталог
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Листайте</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
