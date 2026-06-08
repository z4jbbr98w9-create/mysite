"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { company } from "@/lib/data";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", country: "Корея", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="lead" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto container-px">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-graphite to-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left copy */}
            <div className="p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/15 rounded-full blur-3xl" />
              <div className="relative">
                <SectionHeading
                  eyebrow="Заявка"
                  title="Получить расчёт"
                  subtitle="Оставьте контакты — подберём авто под ваш бюджет и пришлём расчёт под ключ в течение дня."
                />
                <div className="mt-8 space-y-3">
                  {["Бесплатный подбор", "Прозрачная цена в договоре", "Сопровождение под ключ"].map(
                    (t) => (
                      <div key={t} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                          <Check size={12} className="text-accent" />
                        </span>
                        {t}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 md:p-12 bg-card/50 border-t md:border-t-0 md:border-l border-border">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                    <Check size={30} className="text-accent" />
                  </div>
                  <h3 className="display-font text-2xl font-bold">Заявка отправлена!</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Свяжемся с вами в ближайшее время по номеру {form.phone}.
                  </p>
                </motion.div>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Имя</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Как к вам обращаться"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Телефон</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Страна импорта</label>
                      <select
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-colors text-sm"
                      >
                        <option>Корея</option>
                        <option>Германия</option>
                        <option>Китай</option>
                        <option>Япония</option>
                        <option>Пока не определился</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Бюджет</label>
                      <input
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        placeholder="Например, 5 млн ₽"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition-colors text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-soft transition-colors"
                    >
                      <Send size={16} /> Отправить заявку
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Или напишите в{" "}
                      <a href={company.telegram} className="text-accent underline">
                        Telegram
                      </a>{" "}
                      · {company.phone}
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
