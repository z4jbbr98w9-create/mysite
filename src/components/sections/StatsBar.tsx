"use client";

import Counter from "@/components/shared/Counter";
import Reveal from "@/components/shared/Reveal";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="relative border-y border-border bg-graphite/30">
      <div className="max-w-7xl mx-auto container-px py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <div className="display-font text-4xl md:text-5xl font-bold text-foreground">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
