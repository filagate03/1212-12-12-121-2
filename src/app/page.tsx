import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Stats from "@/components/Stats";
import Games from "@/components/Games";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-void font-mono text-ice">
      {/* оверлеи */}
      <div className="scanlines pointer-events-none fixed inset-0 z-40" />
      <div className="vignette pointer-events-none fixed inset-0 z-40" />

      <Header />
      <Hero />
      <Ticker />
      <About />
      <Features />
      <Roadmap />
      <Stats />
      <Games />
      <CTA />
      <Footer />
    </main>
  );
}
