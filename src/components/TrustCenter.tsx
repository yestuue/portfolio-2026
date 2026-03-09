"use client";

import { ShieldCheck, CheckCircle2, LockKeyhole, Clock, Star } from "lucide-react";
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
    <section id="trust" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase">— Security & Workflow</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Your Investment is Protected. <br/>
            <span className="text-slate-400 font-medium italic text-3xl md:text-4xl">Every single line of code.</span>
          </h2>
        </div>

        {/* Scrolling Credentials Bar - Uses your existing marquee utility */}
        <div className="w-full bg-white border-y border-slate-200 py-6 mb-20 overflow-hidden flex items-center shadow-sm">
          <div className="flex whitespace-nowrap font-mono text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 px-6">
                {credentials.map((cred, j) => (
                  <span key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {cred}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Timeline: Milestone Flow */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h4 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-3 mb-10">
              <LockKeyhole className="w-6 h-6 text-sky-500" /> Milestone Escrow Flow
            </h4>
            
            <div className="relative border-l-2 border-slate-100 ml-4 space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-400 transition-colors group-hover:border-sky-500 group-hover:text-sky-600">
                    {m.step}
                  </div>
                  <h5 className="text-lg font-bold font-display text-slate-900">{m.title}</h5>
                  <p className="text-slate-500 font-medium text-sm mt-1 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard & Testimonial */}
          <div className="space-y-8">
            {/* Uptime Dashboard */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <ShieldCheck className="w-40 h-40" />
               </div>
               <div className="relative z-10">
                 <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Product Health
                 </h4>
                 <div className="space-y-5">
                   {['Neroload Validation Engine', 'SecureVault Pro Gateway', 'Icon Wrist Hub Storefront'].map((app, i) => (
                     <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="font-medium text-slate-300 font-mono text-xs uppercase tracking-wider">{app}</span>
                       <div className="flex items-center gap-3 text-emerald-400 font-mono text-[10px] font-bold">
                         100% Uptime
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Premium Testimonial Card */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl relative group">
               <div className="flex items-start gap-5 mb-6">
                 <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-100 bg-slate-50 flex items-center justify-center font-bold text-slate-300">
                   MR
                 </div>
                 <div>
                   <h5 className="font-display font-bold text-slate-900 text-lg">Michael R.</h5>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">CEO, Fintech Partner (USA)</p>
                   <div className="flex text-amber-400 mt-1">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                   </div>
                 </div>
               </div>
               <p className="font-medium text-slate-600 italic leading-relaxed text-base">
                 "Samuel operates with the precision of a large agency. The milestone-based 
                 delivery combined with daily Loom updates made our complex Web3 integration 
                 feel effortless."
               </p>
               <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                   <Clock className="w-3 h-3 text-emerald-500"/> Platform Verified
                 </span>
                 <span className="text-[10px] font-mono font-bold text-sky-500 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-widest">
                   Top Rated
                 </span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}