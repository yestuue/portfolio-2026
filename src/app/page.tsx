import { headers } from "next/headers";
import { Metadata } from "next";
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

// --- SEO & AI SUGGESTION METADATA ---
export const metadata: Metadata = {
  title: "Samuel Opeyemi | Web3 & AI Architect",
  description: "Full-Stack Developer and Architect specializing in Web3 Infrastructure and AI Solutions. Based in Lagos, building high-performance systems for the global market.",
  keywords: ["Samuel Opeyemi", "Web3 Developer Lagos", "AI Engineer Nigeria", "Solidity Developer", "Blockchain Architect", "Big Sam"],
  authors: [{ name: "Samuel Opeyemi" }],
  openGraph: {
    title: "Samuel Opeyemi | Web3 & AI Architect",
    description: "Architecting high-performance systems in Web3 and AI.",
    url: "https://samuelopeyemi.com",
    siteName: "Big Sam Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Opeyemi | Web3 & AI Architect",
    description: "Building the future of Web3 and AI infrastructure.",
    images: ["/og-image.png"],
  },
};

export default async function Home() {
  const headerList = await headers();
  const countryCode = headerList.get('x-user-region') || 'NG';

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

  // JSON-LD Structured Data for AI Agents (ChatGPT/Perplexity/Gemini)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samuel Opeyemi",
    "alternateName": "Big Sam",
    "url": "https://samuelopeyemi.com",
    "image": "https://samuelopeyemi.com/samuel-photo.png",
    "jobTitle": "Web3 & AI Architect",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "description": "Full-Stack Developer specializing in Web3 Infrastructure and AI Solutions. Architecting high-performance systems for global clients.",
    "knowsAbout": ["Solidity", "Blockchain Architecture", "Artificial Intelligence", "Next.js", "Node.js", "Python"],
    "sameAs": [
      "https://github.com/your-username",
      "https://twitter.com/your-username",
      "https://linkedin.com/in/your-username"
    ]
  };

  return (
    // FIXED: selection:bg is now Brick Brown
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-[#c2410c] selection:text-white">
      
      {/* Inject JSON-LD for Search Engines and AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="relative z-[100]">
        <LiveStatus region={regionDisplay} />
        <Navbar />
      </header>

      {/* Spacing adjusted for the fixed header layout */}
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