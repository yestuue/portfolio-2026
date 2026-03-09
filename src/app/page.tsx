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
  return (
    // Changed to a softer off-white/slate-50 background for a premium feel
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-100">
      
      {/* Fixed Header Section to prevent overlapping */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <LiveStatus />
        <Navbar />
      </header>

      {/* Padding top ensures Hero content starts below the fixed header */}
      <div className="pt-32 md:pt-40">
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