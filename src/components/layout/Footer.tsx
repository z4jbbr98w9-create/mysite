import Link from "next/link";
import { Phone, MapPin, Clock, Send, Camera } from "lucide-react";
import { company, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-graphite/40 mt-24">
      <div className="max-w-7xl mx-auto container-px py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="display-font text-2xl font-extrabold">EPIC</span>
              <span className="display-font text-2xl font-light text-accent">
                MOTORS
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {company.tagline}. Импорт автомобилей под заказ из Кореи, Германии,
              Китая и Японии.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              На рынке с {company.since} года · {company.clients} клиентов
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Импорт</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>🇰🇷 Южная Корея</li>
              <li>🇩🇪 Германия</li>
              <li>🇨🇳 Китай</li>
              <li>🇯🇵 Япония</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 hover:text-accent transition-colors"
                >
                  <Phone size={15} className="text-accent shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="text-accent shrink-0" />
                {company.hours}
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href={company.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <Send size={16} />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Epic Motors. Все права защищены.</p>
          <p>Импорт автомобилей под заказ · Уфа</p>
        </div>
      </div>
    </footer>
  );
}
