"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto container-px h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="display-font text-xl font-extrabold tracking-tight">
            EPIC
          </span>
          <span className="display-font text-xl font-light text-accent">
            MOTORS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.slice(0, 7).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors relative ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <Phone size={15} />
            {company.phone}
          </a>
          <Link
            href="/contacts"
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            Получить расчёт
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-px py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 text-base ${
                    pathname === link.href ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={company.phoneHref}
                className="mt-3 flex items-center gap-2 text-sm font-medium"
              >
                <Phone size={15} /> {company.phone}
              </a>
              <Link
                href="/contacts"
                className="mt-3 px-4 py-3 rounded-lg bg-accent text-white text-center font-medium"
              >
                Получить расчёт
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
