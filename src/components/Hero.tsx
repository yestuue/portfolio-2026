"use client";

import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Apple, 
  Instagram, 
  Youtube, 
  Framer,
  Chrome
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const taglines = [
    "I build problem-solving apps.",
    "I architect blockchain systems.",
    "I deploy AI that works.",
    "I ship products, not excuses.",
    "From Lagos. For the world."
  ];

  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-24">
        
        {/* LEFT COLUMN: BRAND & AUTHORITY */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-sky-100 bg-white text-xs font-bold font-mono text-sky-600 uppercase tracking-widest shadow-sm"
          >
            <span className="text-sky-300">●</span> Available for New Projects
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-slate-900 leading-[0.9]">
              Samuel <br />
              <span className="relative inline-block text-sky-500 mt-2">
                Opeyemi
                <svg 
                  className="absolute w-full h-[15px] -bottom-3 left-0 text-sky-200" 
                  viewBox="0 0 300 15" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <path d="M2 12.5C45.5 -1.5 120.5 -1.5 298 12.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-500 max-w-lg leading-relaxed">
              Full-Stack Developer specializing in <span className="text-slate-900 font-bold">Web3 Infrastructure</span> & <span className="text-slate-900 font-bold">AI Solutions</span>.
            </p>

            <div className="h-8 flex items-center">
              <p className="font-mono text-lg font-bold text-sky-600">
                &gt; {taglines[taglineIndex]}<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <div className="pl-6 border-l-4 border-amber-400 py-3 italic text-slate-600 font-medium bg-amber-50/30 pr-6 rounded-r-2xl border-dashed">
            ❝ "Samuel's engineering depth and marketing insight transformed our product launch." ❞
          </div>

          {/* Verification Bar: High-Contrast Brand Labels */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-3">
              {['Fiverr', 'Upwork', 'Meta'].map((brand, i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-slate-50 bg-white shadow-lg flex items-center justify-center text-[9px] font-black text-slate-900 uppercase tracking-tighter transition-transform hover:scale-110 hover:z-10"
                >
                  {brand}
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-xs font-bold text-slate-900 uppercase">Top Rated</span>
              </div>
              <p className="text-xs font-medium text-slate-500">
                <span className="text-emerald-600 font-bold">● Upwork Verified</span> · 20+ Global Clients
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-6">
            <Link href="#projects" className="flex items-center gap-2 px-10 py-5 rounded-full bg-slate-900 text-white font-bold hover:bg-sky-600 transition-all shadow-2xl shadow-slate-200">
              Proof of Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="px-10 py-5 rounded-full font-bold text-sky-600 border-2 border-sky-100 bg-white hover:bg-sky-50 transition-all">
              Start a Project
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL IDENTITY */}
        <div className="relative flex justify-center lg:justify-end min-h-[550px]">
          <div className="absolute -top-10 right-0 w-32 h-32 md:w-44 md:h-44 animate-spin-slow z-30">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-20">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-mono text-[8px] tracking-[0.3em] font-bold fill-slate-900 uppercase">
                <textPath href="#circlePath">Full Stack • Blockchain • AI Engineering • Marketing • </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-40 hidden xl:flex">
            {[
              { icon: Github, link: "https://github.com/yestuue" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/samuel-opeyemii" },
              { icon: Twitter, link: "https://x.com/mrsamuelopeyemi" }
            ].map((social, i) => (
              <Link key={i} href={social.link} target="_blank" className="p-2 text-slate-300 hover:text-sky-500 hover:scale-125 transition-all">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-[100px] animate-pulse"></div>
            <div className="absolute inset-8 rounded-[3rem] bg-white shadow-2xl overflow-hidden border-[12px] border-slate-100/50">
                <Image 
                  src="/samuel-photo.png" 
                  alt="Samuel Opeyemi" 
                  fill 
                  priority
                  className="object-cover object-top" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[20%] -left-4 px-5 py-3 bg-white rounded-2xl shadow-xl border border-slate-100 font-bold text-slate-800 text-xs md:text-sm z-40"
            >
              <span className="text-sky-500 mr-2 font-mono">01.</span> Web3 Architect
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -right-4 px-5 py-3 bg-slate-900 rounded-2xl shadow-xl text-white text-xs md:text-sm z-40"
            >
              <span className="text-amber-400 mr-2 font-mono">02.</span> AI Integration
            </motion.div>
          </div>
        </div>
      </div>

      {/* NEW ELITE LOGO CAROUSEL */}
      <div className="w-full h-24 bg-slate-950 flex items-center border-t border-white/5 overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none opacity-80" />
         <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8 will-change-transform">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24">
                <Apple className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <Github className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-2xl opacity-40 italic tracking-tighter">PUMA</span>
                <Chrome className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <Instagram className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-2xl opacity-40 lowercase tracking-tighter">hulu</span>
                <Youtube className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <Framer className="w-8 h-8 text-white opacity-40 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-2xl opacity-40 italic tracking-tighter underline">adidas</span>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}