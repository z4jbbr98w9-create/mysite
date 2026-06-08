"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

// Points roughly placed on a 1000x500 equirectangular canvas
const RUSSIA = { x: 560, y: 175, label: "Россия", flag: "🇷🇺" };
const routes = [
  { from: { x: 800, y: 230 }, label: "Корея", flag: "🇰🇷", color: "#e11d28" },
  { from: { x: 510, y: 175 }, label: "Германия", flag: "🇩🇪", color: "#ff7a45" },
  { from: { x: 770, y: 250 }, label: "Китай", flag: "🇨🇳", color: "#ffd000" },
];

function curve(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = Math.min(from.y, to.y) - 70;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export default function WorldMap() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-graphite/20 -z-10" />
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          center
          eyebrow="География поставок"
          title="Маршруты доставки по всему миру"
          subtitle="Налаженная логистика из четырёх стран прямо до вашего города в России."
        />

        <Reveal className="mt-16">
          <div className="relative max-w-4xl mx-auto">
            <svg viewBox="0 0 1000 350" className="w-full">
              {/* Dotted world grid */}
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#26262c" />
                </pattern>
                {routes.map((r, i) => (
                  <linearGradient key={i} id={`grad-${i}`} gradientUnits="userSpaceOnUse"
                    x1={r.from.x} y1={r.from.y} x2={RUSSIA.x} y2={RUSSIA.y}>
                    <stop offset="0%" stopColor={r.color} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={r.color} stopOpacity="1" />
                  </linearGradient>
                ))}
              </defs>
              <rect width="1000" height="350" fill="url(#dots)" opacity="0.5" />

              {/* Routes */}
              {routes.map((r, i) => {
                const d = curve(r.from, RUSSIA);
                return (
                  <g key={i}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke={`url(#grad-${i})`}
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: i * 0.3, ease: "easeInOut" }}
                    />
                    {/* Moving dot */}
                    <motion.circle r="4" fill={r.color}>
                      <animateMotion dur={`${3 + i}s`} repeatCount="indefinite" path={d} />
                    </motion.circle>

                    {/* Origin point */}
                    <circle cx={r.from.x} cy={r.from.y} r="6" fill={r.color} />
                    <circle cx={r.from.x} cy={r.from.y} r="6" fill={r.color} opacity="0.3">
                      <animate attributeName="r" from="6" to="16" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x={r.from.x} y={r.from.y - 14} textAnchor="middle" className="fill-foreground" fontSize="16">
                      {r.flag}
                    </text>
                  </g>
                );
              })}

              {/* Russia destination */}
              <circle cx={RUSSIA.x} cy={RUSSIA.y} r="8" fill="#f5f5f7" />
              <circle cx={RUSSIA.x} cy={RUSSIA.y} r="8" fill="#fff" opacity="0.3">
                <animate attributeName="r" from="8" to="22" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x={RUSSIA.x} y={RUSSIA.y - 18} textAnchor="middle" className="fill-foreground" fontSize="18">
                🇷🇺
              </text>
            </svg>

            {/* Route legend */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {routes.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.1}>
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card">
                    <span className="text-2xl">{r.flag}</span>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {r.label}
                      <span style={{ color: r.color }}>→</span>
                      🇷🇺 Россия
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
