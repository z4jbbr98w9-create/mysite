"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Cog, ArrowUpRight } from "lucide-react";
import type { Car } from "@/lib/data";

export default function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

        {car.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
            {car.tag}
          </span>
        )}
        <span className="absolute top-4 right-4 text-2xl drop-shadow-lg">{car.flag}</span>

        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={18} className="text-white" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground">{car.country} · {car.year}</p>
            <h3 className="display-font text-lg font-bold mt-0.5">
              {car.brand} {car.model}
            </h3>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Gauge size={14} className="text-accent" /> {car.mileage}
          </span>
          <span className="flex items-center gap-1.5">
            <Cog size={14} className="text-accent" /> {car.engine}
          </span>
        </div>

        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <span className="display-font text-lg font-bold text-foreground">{car.price}</span>
          <span className="text-xs text-accent font-medium group-hover:underline">
            Подробнее
          </span>
        </div>
      </div>
    </motion.article>
  );
}
