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
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-sky-100 bg-sky-50 text-sm font-medium font-mono text-sky-600"
          >
            <span className="text-sky-400">—</span> Hello There!
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              I'm <br />
              <span className="relative inline-block text-sky-500">
                Samuel Opeyemi
                <svg className="absolute w-full h-[15px] -bottom-2 left-0 text-sky-200" viewBox="0 0 300 15" fill="none">
                  <path d="M2 12.5C45.5 -1.5 120.5 -1.5 298 12.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-600">
              Full Stack Dev · Blockchain · AI Engineer
            </p>
            <div className="h-8 flex items-center">
              <p className="font-mono text-lg text-sky-600">
                &gt; {taglines[taglineIndex]}<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <div className="pl-6 border-l-4 border-amber-400 py-2 italic text-slate-600 font-medium bg-amber-50/50 pr-4 rounded-r-lg">
            ❝ "Samuel's work transformed our product — delivered on-chain and on time." ❞
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              20+ Reviews (4.9 of 5) <br/>
              <span className="text-emerald-600 font-bold">● Upwork Verified</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="#portfolio" className="flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Portfolio <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="px-8 py-4 rounded-full font-bold text-white bg-sky-500 hover:bg-sky-600 transition-all shadow-xl shadow-sky-200">
              Hire Me ↗
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex justify-center lg:justify-end min-h-[500px]">
          
          {/* Rotating text badge */}
          <div className="absolute -top-10 right-0 w-32 h-32 md:w-40 md:h-40 animate-spin-slow z-30">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-mono text-[10px] tracking-widest font-bold fill-slate-800">
                <textPath href="#circlePath">AVAILABLE FOR HIRE • SAMUEL OPEYEMI • LAGOS NG • </textPath>
              </text>
            </svg>
          </div>

          {/* Social Links */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-40 hidden xl:flex">
            <div className="transform -rotate-90 origin-bottom font-mono text-xs font-bold text-slate-400 tracking-widest uppercase mb-16">
              — Follow Me
            </div>
            {[
              { icon: Github, link: "https://github.com/yestuue" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/samuel-opeyemii" },
              { icon: Twitter, link: "https://x.com/mrsamuelopeyemi" }
            ].map((social, i) => (
              <Link key={i} href={social.link} className="p-2 text-slate-400 hover:text-sky-500 hover:scale-125 transition-all">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Photo Container */}
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-[80px] animate-pulse"></div>
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 shadow-2xl overflow-hidden border-8 border-white">
               {/* Photo */}
                <Image 
                  src="/samuel-photo.png" 
                  alt="Samuel Opeyemi" 
                  fill 
                  priority
                  className="object-cover object-top hover:scale-110 transition-transform duration-700" 
                />
            </div>

            {/* Orbiting skill pills */}
            <div className="absolute inset-[-20px] z-30 pointer-events-none">
              <div className="absolute top-[15%] -left-[5%] px-4 py-2 bg-white rounded-full shadow-xl border border-slate-100 font-bold text-slate-800 text-xs md:text-sm animate-bounce">
                <span className="text-sky-500 mr-2">●</span> DeFi & Web3
              </div>
              <div className="absolute top-0 -right-[5%] px-4 py-2 bg-slate-900 rounded-full shadow-xl text-white text-xs md:text-sm animate-bounce" style={{ animationDelay: '0.2s' }}>
                <span className="text-amber-400 mr-2">●</span> Smart Contracts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Footer Bar */}
      <div className="w-full h-14 bg-slate-900 overflow-hidden flex items-center border-t border-slate-800">
        <div className="flex whitespace-nowrap font-mono text-sm font-bold text-sky-400 uppercase tracking-wider animate-marquee">
          {"Smart Contracts + AI Applications + Full Stack Web + Blockchain + ".repeat(10)}
        </div>
      </div>
    </section>
  );
}