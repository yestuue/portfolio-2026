"use client";

import { ArrowRight, Github, Chrome } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-32 pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: BRAND & AUTHORITY */}
        <div className="flex flex-col items-start space-y-6">
          
          {/* TACTILE STATUS BADGE - Brick Accent */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl 
                       bg-white dark:bg-slate-900 
                       border-t border-l border-slate-100 dark:border-white/10
                       shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000]
                       transition-all duration-100 cursor-default mb-2"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c2410c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c2410c]"></span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Available for <span className="text-[#c2410c]">Projects</span>
            </span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
              Samuel <br />
              <span className="relative inline-block text-[#c2410c] mt-2">
                Opeyemi
                <svg 
                  className="absolute w-full h-[15px] -bottom-3 left-0 text-[#c2410c]/20" 
                  viewBox="0 0 300 15" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <path d="M2 12.5C45.5 -1.5 120.5 -1.5 298 12.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-slate-500 dark:text-slate-400 max-w-lg leading-tight tracking-tight">
              Full-Stack Developer specializing in <span className="text-slate-900 dark:text-white underline decoration-[#c2410c]">Web3 Infrastructure</span> & <span className="text-slate-900 dark:text-white underline decoration-[#c2410c]">AI Solutions</span>.
            </p>

            <div className="h-8 flex items-center">
              <p className="font-mono text-lg font-bold text-[#c2410c]">
                &gt; {taglines[taglineIndex]}<span className="animate-pulse text-[#c2410c]">_</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            {/* TACTILE BRICK BUTTON */}
            <Link 
              href="#projects" 
              className="btn-brick group relative flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest"
            >
              Proof of Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#contact" 
              className="px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest text-slate-900 dark:text-white border-2 border-slate-200 dark:border-white/10 
                         bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95 shadow-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL IDENTITY */}
        <div className="relative flex justify-center lg:justify-end min-h-[500px]">
          {/* Animated Circle: Using Brick */}
          <div className="absolute -top-10 right-0 w-32 h-32 md:w-44 md:h-44 animate-spin-slow z-30">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-20 dark:opacity-40">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-mono text-[8px] tracking-[0.3em] font-bold fill-[#c2410c] uppercase">
                <textPath href="#circlePath">Full Stack • Blockchain • AI Engineering • Marketing • </textPath>
              </text>
            </svg>
          </div>

          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#c2410c]/10 blur-[100px] animate-pulse"></div>
            <div className="absolute inset-8 rounded-[3.5rem] bg-white dark:bg-slate-900 overflow-hidden 
                            border-[12px] border-slate-100/50 dark:border-white/5 
                            shadow-[20px_20px_60px_rgba(15,23,42,0.15)] dark:shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/samuel-photo.png" 
                  alt="Samuel Opeyemi" 
                  fill 
                  priority
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000" 
                />
            </div>
          </div>
        </div>
      </div>

      {/* RECESSED MARQUEE FOOTER */}
      <div className="w-full h-20 bg-slate-950 flex items-center border-t border-slate-900 overflow-hidden relative shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] mt-auto">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 md:gap-24">
                <Github className="w-6 h-6 text-white opacity-30 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-xl opacity-30 italic tracking-tighter">PUMA</span>
                <Chrome className="w-6 h-6 text-white opacity-30 hover:opacity-100 transition-opacity" />
                <span className="text-white font-black text-xl opacity-30 italic tracking-tighter underline decoration-[#c2410c]">adidas</span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}