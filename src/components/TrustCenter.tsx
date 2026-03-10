"use client";

import { ShieldCheck, CheckCircle2, LockKeyhole, Clock, Star, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustCenter() {
  const milestones = [
    { step: "01", title: "Discovery Call", desc: "Free 30-min alignment session." },
    { step: "02", title: "Escrow Locked", desc: "Milestone 1 funded securely via platform." },
    { step: "03", title: "Part A Delivery", desc: "Samuel ships code, you review & approve." },
    { step: "04", title: "Next Phase", desc: "Subsequent milestones unlocked." },
    { step: "05", title: "Final Launch", desc: "QA testing and final sign-off." },
    { step: "06", title: "Support", desc: "30-day post-launch technical care." }
  ];

  const credentials = ["Upwork Top Rated", "GitHub Pro", "LinkedIn Verified", "SecureVault Architecture", "AI Ethics Compliant"];

  return (
    <section id="trust" className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* 1. Use max-w-7xl for a wider layout */}
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border-t border-l border-slate-100 dark:border-white/10 shadow-[0_2px_0_0_#e2e8f0] dark:shadow-[0_2px_0_0_#000] mb-5">
            <Shield className="w-4 h-4 text-sky-500" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-sky-600 dark:text-sky-400 font-bold uppercase">Security & Workflow</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Your Investment is Protected. <br/>
            <span className="text-slate-400 dark:text-slate-500 font-medium italic text-3xl md:text-5xl">Every single line of code.</span>
          </h2>
        </div>

        {/* Credentials Marquee (already wide by default) */}
        <div className="w-full bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 py-10 mb-24 overflow-hidden flex items-center shadow-[inset_0_1px_6px_rgba(0,0,0,0.05)]">
          <div className="flex whitespace-nowrap font-mono text-[12px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-20 px-10">
                {credentials.map((cred, j) => (
                  <span key={j} className="flex items-center gap-4 transition-colors hover:text-sky-500">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" /> {cred}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Wider Grid: Adjusted gap and columns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          
          {/* Timeline: 3D Milestone Flow */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border-t border-l border-white dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h4 className="text-3xl font-display font-black text-slate-900 dark:text-white flex items-center gap-4 mb-16 uppercase tracking-tighter">
              <LockKeyhole className="w-7 h-7 text-sky-500" /> Milestone Escrow Flow
            </h4>
            
            <div className="relative border-l-2 border-slate-100 dark:border-white/5 ml-5 space-y-16">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-14 group">
                  {/* Tactile Step Number */}
                  <div className="absolute -left-[24px] top-0 w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-white/10 flex items-center justify-center font-mono text-sm font-black text-slate-400 shadow-[0_4px_0_0_#e2e8f0] dark:shadow-[0_4px_0_0_#000] transition-all group-hover:translate-y-[-2px] group-hover:text-sky-500 group-hover:shadow-[0_6px_0_0_#e2e8f0] dark:group-hover:shadow-[0_6px_0_0_#000]">
                    {m.step}
                  </div>
                  <h5 className="text-2xl font-black font-display text-slate-900 dark:text-white uppercase tracking-tight">{m.title}</h5>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-medium mt-3 leading-relaxed max-w-md">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Wider Dashboards */}
          <div className="space-y-10">
            
            {/* Live Product Health Dashboard */}
            <div className="bg-slate-900 dark:bg-slate-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden border-t border-l border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <ShieldCheck className="w-48 h-48 text-sky-500" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xs font-mono font-black mb-12 flex items-center gap-3.5 uppercase tracking-[0.2em] text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]"></span>
                    Live Network Availability
                  </h4>
                  <div className="space-y-5">
                    {['Neroload Validation Engine', 'SecureVault Pro Gateway', 'Icon Wrist Hub Storefront'].map((app, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-[1.8rem] border border-white/5 hover:bg-white/10 transition-all hover:translate-x-3 group">
                        <span className="font-bold text-slate-300 font-mono text-[11px] uppercase tracking-widest group-hover:text-white transition-colors">{app}</span>
                        <div className="flex items-center gap-3.5 text-emerald-400 font-mono text-[11px] font-black bg-emerald-500/10 px-4 py-2 rounded-full">
                          <Zap className="w-3.5 h-3.5 fill-current" /> 100% UP
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* Premium Testimonial Card */}
            <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] p-12 border-t border-l border-white dark:border-white/10 shadow-32xl relative group">
               <div className="flex items-start gap-6 mb-10">
                 <div className="w-20 h-20 rounded-[1.8rem] overflow-hidden shrink-0 border-t border-l border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-slate-800 shadow-[0_4px_0_0_#e2e8f0] dark:shadow-[0_4px_0_0_#000] flex items-center justify-center font-black text-slate-300 dark:text-slate-600 text-2xl">
                   MR
                 </div>
                 <div className="pt-2">
                   <h5 className="font-display font-black text-slate-900 dark:text-white text-2xl uppercase tracking-tighter">Michael R.</h5>
                   <p className="text-sky-600 dark:text-sky-400 text-[11px] font-black uppercase tracking-[0.2em]">CEO, Fintech Partner (USA)</p>
                   <div className="flex text-amber-400 mt-3 gap-0.5">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                   </div>
                 </div>
               </div>
               <p className="font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed text-xl border-l-4 border-slate-100 dark:border-white/5 pl-8 py-3">
                 "Samuel operates with the precision of a large agency. The milestone-based 
                 delivery combined with daily updates made our complex integration feel effortless."
               </p>
               <div className="mt-12 pt-10 border-t border-slate-50 dark:border-white/5 flex justify-between items-center">
                 <span className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2.5">
                   <Globe className="w-5 h-5 text-emerald-500"/> Verified Engagement
                 </span>
                 <div className="bg-emerald-50 dark:bg-emerald-500/10 px-5 py-2.5 rounded-xl">
                   <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                     Top Rated
                   </span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}