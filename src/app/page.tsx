import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import WhyImport from "@/components/sections/WhyImport";
import About from "@/components/sections/About";
import CountriesStrip from "@/components/sections/CountriesStrip";
import CarsShowcase from "@/components/sections/CarsShowcase";
import WorldMap from "@/components/sections/WorldMap";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Calculator from "@/components/sections/Calculator";
import Reviews from "@/components/sections/Reviews";
import Cases from "@/components/sections/Cases";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <BrandsMarquee />
      <WhyImport />
      <About />
      <CountriesStrip />
      <CarsShowcase limit={6} />
      <WorldMap />
      <Process />
      <Services />
      <Calculator />
      <Reviews />
      <Cases />
      <FAQ />
      <LeadForm />
    </main>
  );
}
