import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStatus from "@/components/LiveStatus";
import About from "@/components/About";
import ProofOfWork from "@/components/ProofOfWork";
import AITwin from "@/components/AITwin";
import ProcessLab from "@/components/ProcessLab";
import TrustCenter from "@/components/TrustCenter";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // 1. Fetch headers from Middleware
  const headerList = headers();
  const countryCode = headerList.get('x-user-region') || 'NG';

  // 2. Map Country Codes to Display Names
  const regionNames: Record<string, string> = {
    'NG': 'Nigeria 🇳🇬',
    'US': 'United States 🇺🇸',
    'GB': 'United Kingdom 🇬🇧',
    'CA': 'Canada 🇨🇦',
    'DE': 'Germany 🇩🇪',
    'FR': 'France 🇫🇷',
    'AE': 'United Arab Emirates 🇦🇪',
  };

  const regionDisplay = regionNames[countryCode] || `Global Region (${countryCode})`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-100">
      
      {/* Header Section */}
      <header className="relative z-50">
        {/* LiveStatus is fixed to the top inside its own component */}
        <LiveStatus region={regionDisplay} />
        
        {/* Navbar handles its own fixed positioning and scroll logic */}
        <Navbar />
      </header>

      {/* Padding top (pt) ensures Hero starts below the combined 
          height of LiveStatus (~44px) and Navbar (~80px).
      */}
      <div className="pt-[124px]">
        <Hero />
      </div>

      <section className="space-y-24 pb-20">
        <About />
        <ProofOfWork />
        <AITwin />
        <ProcessLab />
        <TrustCenter />
        <Services />
        <Blog />
        <Contact />
      </section>

      <Footer />
    </main>
  );
}