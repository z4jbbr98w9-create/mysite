"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Palette, Type, LayoutGrid, BarChart3, Layers, Lightbulb } from "lucide-react";

const features = [
  { icon: LayoutGrid, title: "UI Styles", desc: "57 ready-made interface styles from minimal to glassmorphism." },
  { icon: Palette, title: "Color Palettes", desc: "95 curated palettes with dark/light variants and accessibility scores." },
  { icon: Type, title: "Font Pairings", desc: "56 hand-picked heading + body font combinations." },
  { icon: Layers, title: "Tech Stacks", desc: "8 popular stacks: Next.js, Remix, Astro, SvelteKit and more." },
  { icon: BarChart3, title: "Chart Types", desc: "24 chart patterns with design guidelines and color mappings." },
  { icon: Lightbulb, title: "Landing Patterns", desc: "29 proven landing page patterns with conversion tips." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            One database for all your design decisions. Search, filter, and ship faster.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.08}>
              <div className="group p-6 rounded-2xl border border-border bg-card hover:bg-muted/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
