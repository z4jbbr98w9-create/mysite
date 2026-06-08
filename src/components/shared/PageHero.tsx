"use client";

import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto container-px text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent mb-5"
        >
          <span className="w-6 h-px bg-accent" />
          {eyebrow}
          <span className="w-6 h-px bg-accent" />
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="display-font text-4xl md:text-6xl font-extrabold leading-[1.02] text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
