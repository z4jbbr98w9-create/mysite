"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const badges = ["Claude Code", "Cursor", "Windsurf", "GitHub Copilot", "Codex"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* AI badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {badges.map((badge, i) => (
          <motion.span
            key={badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            className="px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs text-muted-foreground"
          >
            {badge}
          </motion.span>
        ))}
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight"
      >
        Design{" "}
        <span className="text-muted-foreground">Intelligence</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        Searchable database of UI styles, color palettes, font pairings,
        chart types, and UX guidelines. Build beautiful interfaces with
        AI-powered design recommendations.
      </motion.p>

      {/* CLI prompt */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 bg-muted/60 border border-border rounded-xl px-6 py-4 font-mono text-sm text-muted-foreground flex items-center gap-3"
      >
        <span className="text-primary">$</span>
        <span>uipro init --ai claude</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-primary inline-block"
        />
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg" className="gap-2">
          How it Works <ArrowRight size={16} />
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <Sparkles size={16} /> View Demos
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10"
      >
        {[
          { n: "57", label: "UI Styles" },
          { n: "95", label: "Color Palettes" },
          { n: "56", label: "Font Pairings" },
          { n: "8", label: "Tech Stacks" },
          { n: "24", label: "Chart Types" },
          { n: "29", label: "Landing Patterns" },
        ].map(({ n, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-primary">{n}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
