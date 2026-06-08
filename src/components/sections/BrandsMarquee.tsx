"use client";

const brands = [
  "BMW", "Mercedes-Benz", "Porsche", "Audi", "Genesis", "Kia",
  "Hyundai", "Lexus", "Toyota", "Li Auto", "Zeekr", "BYD", "Land Rover", "Volvo",
];

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 border-y border-border bg-graphite/20 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 marquee w-max items-center">
          {doubled.map((b, i) => (
            <span
              key={i}
              className="display-font text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
