"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Get started with the basics.",
    features: ["10 UI Styles", "20 Color Palettes", "10 Font Pairings", "Community support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$12",
    per: "/mo",
    desc: "Full access for serious builders.",
    features: ["All 57 UI Styles", "All 95 Palettes", "All 56 Font Pairings", "8 Tech Stacks", "24 Chart Types", "AI recommendations", "Priority support"],
    cta: "Go Premium",
    highlight: true,
  },
  {
    name: "Team",
    price: "$39",
    per: "/mo",
    desc: "For design-driven teams.",
    features: ["Everything in Premium", "Up to 10 seats", "Team exports", "Custom palettes", "Dedicated support"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simple pricing</h2>
          <p className="mt-4 text-muted-foreground text-lg">Start free. Upgrade when you're ready.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, per, desc, features, cta, highlight }, i) => (
            <AnimatedSection key={name} delay={i * 0.1}>
              <div className={`rounded-2xl border p-8 flex flex-col gap-6 ${highlight ? "border-primary bg-primary text-primary-foreground shadow-2xl scale-105" : "border-border bg-card"}`}>
                <div>
                  <p className="text-sm font-medium opacity-70">{name}</p>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold">{price}</span>
                    {per && <span className="text-sm opacity-60 mb-1">{per}</span>}
                  </div>
                  <p className={`text-sm mt-2 ${highlight ? "opacity-70" : "text-muted-foreground"}`}>{desc}</p>
                </div>

                <ul className="flex flex-col gap-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className={highlight ? "opacity-80" : "text-primary"} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={highlight ? "secondary" : "default"}
                  className="w-full mt-auto"
                >
                  {cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
