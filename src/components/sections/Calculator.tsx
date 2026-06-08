"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Info } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const countryData = {
  "Корея": { duty: 0.18, logistics: 280000, flag: "🇰🇷" },
  "Германия": { duty: 0.23, logistics: 420000, flag: "🇩🇪" },
  "Китай": { duty: 0.2, logistics: 240000, flag: "🇨🇳" },
  "Япония": { duty: 0.19, logistics: 320000, flag: "🇯🇵" },
} as const;

type Country = keyof typeof countryData;

function fmt(n: number) {
  return Math.round(n).toLocaleString("ru-RU") + " ₽";
}

export default function Calculator() {
  const [country, setCountry] = useState<Country>("Корея");
  const [price, setPrice] = useState(3000000);
  const [age, setAge] = useState<"3-5" | "<3" | ">5">("3-5");

  const result = useMemo(() => {
    const { duty, logistics } = countryData[country];
    const ageFactor = age === "<3" ? 1.15 : age === ">5" ? 0.95 : 1;
    const customs = price * duty * ageFactor;
    const recycling = 5200;
    const service = price * 0.04;
    const total = price + customs + logistics + recycling + service;
    return { customs, logistics, recycling, service, total };
  }, [country, price, age]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto container-px">
        <SectionHeading
          center
          eyebrow="Калькулятор"
          title="Рассчитайте стоимость под ключ"
          subtitle="Примерный расчёт с учётом таможни, логистики и услуг. Точную цену зафиксируем в договоре."
        />

        <Reveal className="mt-16">
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Inputs */}
            <div className="p-8 rounded-2xl border border-border bg-card space-y-8">
              <div>
                <label className="text-sm font-medium mb-3 block">Страна импорта</label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(countryData) as Country[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountry(c)}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        country === c
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/40"
                      }`}
                    >
                      <span className="mr-2">{countryData[c].flag}</span>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Стоимость авто</label>
                  <span className="text-sm font-bold text-accent">{fmt(price)}</span>
                </div>
                <input
                  type="range"
                  min={800000}
                  max={15000000}
                  step={100000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.8 млн</span>
                  <span>15 млн</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Возраст автомобиля</label>
                <div className="grid grid-cols-3 gap-2">
                  {([["<3", "до 3 лет"], ["3-5", "3–5 лет"], [">5", "от 5 лет"]] as const).map(
                    ([val, lbl]) => (
                      <button
                        key={val}
                        onClick={() => setAge(val)}
                        className={`px-3 py-3 rounded-xl border text-sm font-medium transition-all ${
                          age === val
                            ? "border-accent bg-accent/10"
                            : "border-border text-muted-foreground hover:border-accent/40"
                        }`}
                      >
                        {lbl}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="p-8 rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-card flex flex-col">
              <div className="flex items-center gap-2 text-accent mb-6">
                <CalcIcon size={18} />
                <span className="text-sm font-medium uppercase tracking-wider">Расчёт</span>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  ["Стоимость авто", price],
                  ["Таможенные платежи", result.customs],
                  ["Логистика", result.logistics],
                  ["Утилизационный сбор", result.recycling],
                  ["Услуги Epic Motors", result.service],
                ].map(([label, val]) => (
                  <div key={label as string} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{label as string}</span>
                    <span className="font-medium">{fmt(val as number)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-end">
                  <span className="text-sm text-muted-foreground">Итого под ключ</span>
                  <motion.span
                    key={result.total}
                    initial={{ opacity: 0.5, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="display-font text-3xl font-extrabold text-accent"
                  >
                    {fmt(result.total)}
                  </motion.span>
                </div>
                <p className="flex items-start gap-2 mt-4 text-xs text-muted-foreground">
                  <Info size={13} className="shrink-0 mt-0.5" />
                  Предварительный расчёт. Финальную стоимость фиксируем в договоре после подбора авто.
                </p>
                <a
                  href="/contacts"
                  className="mt-5 block text-center px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-soft transition-colors"
                >
                  Получить точный расчёт
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
