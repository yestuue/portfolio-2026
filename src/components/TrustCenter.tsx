"use client";

import { useState } from "react";
import { ShieldCheck, LockKeyhole, Globe, Star, Zap, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrustCenter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael R.",
      role: "CEO, Fintech Partner (USA)",
      text: "Samuel operates with the precision of a large agency. The milestone-based delivery combined with daily updates made our complex integration feel effortless.",
      initials: "MR"
    },
    {
      name: "Sarah J.",
      role: "Product Lead, Web3 Startup",
      text: "Exceptional depth in blockchain architecture. He didn't just write code; he optimized our entire smart contract gas efficiency by 30%.",
      initials: "SJ"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="trust" className="section-tight bg-slate-50 dark:bg-slate-950 transition-colors border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: WORKFLOW & STATUS (Static) */}
          <div className="space-y-8">
            <div className="space-y-4 border-l-4 border-[#c2410c] pl-6">
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-[#c2410c] font-black uppercase">— Reliability</h3>
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
                Trusted by <br/>
                <span className="text-[#c2410c]">Global Partners.</span>
              </h2>
            </div>

            {/* 3D Health Dashboard */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden border-t border-l border-white/10 shadow-2xl">
              <div className="relative z-10 space-y-4">
                <h4 className="text-[10px] font-mono font-black mb-6 flex items-center gap-3 uppercase tracking-widest text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Network Uptime: 100%
                </h4>
                {['Neroload Engine', 'SecureVault Pro'].map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                    <span className="font-bold text-slate-300 font-mono text-[10px] uppercase">{app}</span>
                    <Zap className="w-3 h-3 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 3D CAROUSEL MODULE */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border-t border-l border-slate-100 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative"
              >
                {/* Header: User Info */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border-t border-l border-white dark:border-white/10 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000] flex items-center justify-center font-black text-slate-300 text-xl">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div className="pt-1">
                    <h5 className="font-display font-black text-slate-900 dark:text-white text-xl uppercase tracking-tighter">{testimonials[currentIndex].name}</h5>
                    <p className="text-[#c2410c] text-[10px] font-black uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                    <div className="flex text-amber-400 mt-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                  </div>
                </div>

                {/* Body: Recessed Quote Area */}
                <div className="relative bg-slate-50 dark:bg-slate-950/50 p-8 rounded-2xl border-inner shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-white/5">
                  <Quote className="absolute -top-3 -left-2 w-8 h-8 text-[#c2410c] opacity-20" />
                  <p className="font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed text-lg">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                {/* Footer: Verified Badges */}
                <div className="mt-10 pt-8 border-t border-slate-50 dark:border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-500"/> Verified Engagement
                  </span>
                  <div className="bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase">Top Rated</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls: 3D Buttons */}
            <div className="flex gap-3 mt-8 justify-end">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border-t border-l border-white dark:border-white/10 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000] flex items-center justify-center text-slate-900 dark:text-white active:translate-y-[4px] active:shadow-none transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-xl bg-[#c2410c] shadow-[0_4px_0_0_#9a3412] flex items-center justify-center text-white active:translate-y-[4px] active:shadow-none transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}