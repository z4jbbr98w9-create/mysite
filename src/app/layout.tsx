import type { Metadata } from "next";
import { Manrope, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Epic Motors — Импорт автомобилей из Кореи, Германии и Китая | Уфа",
  description:
    "Epic Motors — подбор и импорт автомобилей под заказ из Южной Кореи, Германии, Китая и Японии. Проверка, доставка, таможенное оформление и постановка на учёт под ключ. На рынке с 2007 года, 2000+ клиентов.",
  keywords: [
    "импорт авто",
    "авто из Кореи",
    "авто из Германии",
    "авто из Китая",
    "Epic Motors",
    "Уфа",
    "авто под заказ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${manrope.variable} ${sora.variable} ${jetbrains.variable} min-h-screen antialiased`}
      >
        <Navbar />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
