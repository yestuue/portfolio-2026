"use client";

import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                {/* SVG Optimization: preserveAspectRatio="none" ensures perfect scaling on mobile */}
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

          {/* Social Proof Quote */}
          <div className="pl-6 border-l-4 border-amber-400 py-3 italic text-slate-600 font-medium bg-amber-50/30 pr-6 rounded-r-2xl border-dashed">
            ❝ "Samuel's engineering depth and marketing insight transformed our product launch." ❞
          </div>

          {/* Verification Bar */}
          <div className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-400">
                  User
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
          
          {/* Rotating text badge */}
          <div className="absolute -top-10 right-0 w-32 h-32 md:w-44 md:h-44 animate-spin-slow z-30">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-20">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-mono text-[8px] tracking-[0.3em] font-bold fill-slate-900 uppercase">
                <textPath href="#circlePath">Full Stack • Blockchain • AI Engineering • Marketing • </textPath>
              </text>
            </svg>
          </div>

          {/* Social Links (Side Bar) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-40 hidden xl:flex">
            <div className="transform -rotate-90 origin-bottom font-mono text-[10px] font-bold text-slate-300 tracking-[0.3em] uppercase mb-16">
              — Connectivity
            </div>
            {[
              { icon: Github, link: "https://github.com/yestuue" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/samuel-opeyemii" },
              { icon: Twitter, link: "https://x.com/mrsamuelopeyemi" }
            ].map((social, i) => (
              <Link key={i} href={social.link} className="p-2 text-slate-300 hover:text-sky-500 hover:scale-125 transition-all">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Professional Photo Container */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Layered Glow Backgrounds */}
            <div className="absolute inset-0 rounded-full bg-sky-400/10 blur-[100px] animate-pulse"></div>
            <div className="absolute inset-20 rounded-full bg-blue-500/10 blur-[60px] animate-pulse delay-700"></div>
            
            <div className="absolute inset-8 rounded-[3rem] bg-white shadow-2xl overflow-hidden border-[12px] border-slate-100/50">
                <Image 
                  src="/samuel-photo.png" 
                  alt="Samuel Opeyemi" 
                  fill 
                  priority
                  className="object-cover object-top" 
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            {/* Float Cards */}
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

      {/* Ticker Footer (Secondary Accent) */}
      <div className="w-full h-12 bg-white overflow-hidden flex items-center border-t border-slate-100">
        <div className="flex whitespace-nowrap font-mono text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] animate-marquee">
          {"Engineering Performance + Delivering Value + Shipping Code + Architecture + ".repeat(15)}
        </div>
      </div>
    </section>
  );
}