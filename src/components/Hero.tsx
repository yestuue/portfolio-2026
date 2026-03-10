"use client";

import { ArrowRight, Github, Linkedin, Apple, Chrome, Instagram, Youtube, Framer } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: BRAND & AUTHORITY */}
        <div className="flex flex-col items-start space-y-4">
          
          {/* TACTILE ENGINEERING STATUS BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl 
                       bg-white dark:bg-slate-900 
                       border-t border-l border-slate-100 dark:border-white/10
                       shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000]
                       transition-all duration-100 cursor-default mb-1"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Available for <span className="text-[#c2410c]">Projects</span>
            </span>
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
              Samuel <br />
              <span className="relative inline-block text-[#c2410c] mt-1">
                Opeyemi
                <svg 
                  className="absolute w-full h-[12px] -bottom-2 left-0 text-[#c2410c]/20" 
                  viewBox="0 0 300 15" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <path d="M2 12.5C45.5 -1.5 120.5 -1.5 298 12.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl font-bold text-slate-500 dark:text-slate-400 max-w-lg leading-tight tracking-tight">
              Full-Stack Developer specializing in <span className="text-slate-900 dark:text-white underline decoration-[#c2410c]/40">Web3 Infrastructure</span> & <span className="text-slate-900 dark:text-white underline decoration-[#c2410c]/40">AI Solutions</span>.
            </p>

            <div className="h-6 flex items-center">
              <p className="font-mono text-base font-bold text-[#c2410c]">
                &gt; {taglines[taglineIndex]}<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          {/* BRICK ACCENT TESTIMONIAL - Standardized spacing */}
          <div className="pl-6 border-l-4 border-[#c2410c] py-2 italic text-slate-600 dark:text-slate-400 font-medium bg-[#c2410c]/5 dark:bg-[#c2410c]/10 pr-6 rounded-r-xl border-dashed text-sm max-w-md">
            ❝ "Samuel's engineering depth and marketing insight transformed our product launch." ❞
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* TACTILE BRICK CTA BUTTON */}
            <Link 
              href="#projects" 
              className="group relative flex items-center gap-2 px-8 py-4 rounded-xl text-white font-black text-[10px] uppercase tracking-widest
                         bg-[#c2410c] 
                         transition-all duration-75 
                         shadow-[0_6px_0_0_#9a3412] dark:shadow-[0_6px_0_0_#000] 
                         hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#9a3412] dark:hover:shadow-[0_4px_0_0_#000] 
                         active:translate-y-[6px] active:shadow-none"
            >
              Proof of Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#contact" 
              className="px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-900 dark:text-white border-2 border-slate-200 dark:border-white/10 
                         bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL IDENTITY */}
        <div className="relative flex justify-center lg:justify-end min-h-[400px]">
          {/* CIRCLE PATH: Brick Accent */}
          <div className="absolute -top-6 right-0 w-32 h-32 md:w-40 md:h-40 animate-spin-slow z-30">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-20 dark:opacity-40">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-mono text-[7px] tracking-[0.3em] font-bold fill-slate-900 dark:fill-[#c2410c] uppercase">
                <textPath href="#circlePath">Full Stack • Blockchain • AI Engineering • Marketing • </textPath>
              </text>
            </svg>
          </div>

          {/* MAIN PHOTO: Beveled Depth */}
          <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#c2410c]/10 blur-[80px] animate-pulse"></div>
            <div className="absolute inset-4 rounded-[3rem] bg-white dark:bg-slate-900 overflow-hidden 
                            border-[8px] border-slate-100/50 dark:border-white/5 
                            shadow-[15px_15px_40px_rgba(15,23,42,0.15)] dark:shadow-[15px_15px_40px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/samuel-photo.png" 
                  alt="Samuel Opeyemi" 
                  fill 
                  priority
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000" 
                />
            </div>

            {/* FLOATING TACTILE TAGS */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[20%] -left-1 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl 
                         shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000] 
                         border-t border-l border-white dark:border-white/10 
                         font-black text-slate-800 dark:text-white text-[9px] z-40 uppercase tracking-widest"
            >
              <span className="text-[#c2410c] mr-2 font-mono">01.</span> Web3 Architect
            </motion.div>
          </div>
        </div>
      </div>

      {/* RECESSED MARQUEE FOOTER - Minimalist Height */}
      <div className="w-full h-14 bg-slate-950 flex items-center border-t border-slate-900 overflow-hidden relative shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] mt-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 opacity-80" />
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24">
                <Github className="w-4 h-4 text-white opacity-20 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-base opacity-20 italic tracking-tighter hover:opacity-100 transition-opacity">PUMA</span>
                <Chrome className="w-4 h-4 text-white opacity-20 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-base opacity-20 italic tracking-tighter hover:opacity-100 transition-opacity underline decoration-[#c2410c]">adidas</span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}