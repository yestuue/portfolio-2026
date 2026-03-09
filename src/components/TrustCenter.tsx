"use client";

import { ShieldCheck, CheckCircle2, LockKeyhole, Clock } from "lucide-react";

export default function TrustCenter() {
  const milestones = [
    { step: "01", title: "Discovery Call", desc: "Free 30-min alignment." },
    { step: "02", title: "Escrow Locked", desc: "Milestone 1 funded securely." },
    { step: "03", title: "Part A Delivery", desc: "Samuel ships, you approve." },
    { step: "04", title: "Next Phase", desc: "Milestone 2 unlocked." },
    { step: "05", title: "Final Launch", desc: "QA and final approval." },
    { step: "06", title: "Support", desc: "30-day post-launch care." }
  ];

  const credentials = ["Upwork Top Rated", "AWS Certified", "Google Cloud", "GitHub Pro", "LinkedIn Verified"];

  return (
    <section id="trust" className="py-24 bg-[#FAFAFA] relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-mono text-sm tracking-widest text-[#00D4FF] font-bold uppercase">— How Samuel Works Safely</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Your Investment is Protected. Always.
          </h2>
        </div>

        {/* Scrolling Credentials Bar */}
        <div className="w-full bg-white border-y border-gray-200 py-4 mb-16 overflow-hidden flex items-center">
          <div className="flex whitespace-nowrap font-mono text-sm font-bold text-gray-400 uppercase tracking-wider space-x-12 animate-[scroll-left_30s_linear_infinite]">
            {[...credentials, ...credentials, ...credentials].map((cred, i) => (
              <span key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> {cred}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Timeline */}
          <div className="space-y-8">
            <h4 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2 mb-8">
              <LockKeyhole className="w-6 h-6 text-[#00D4FF]" /> Milestone Escrow Flow
            </h4>
            
            <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center font-mono text-[10px] font-bold text-gray-500">
                    {m.step}
                  </div>
                  <h5 className="text-lg font-bold font-display text-gray-900">{m.title}</h5>
                  <p className="text-gray-600 font-body text-sm mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard & Testimonial */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                 <ShieldCheck className="w-32 h-32" />
               </div>
               <h4 className="text-xl font-display font-bold text-gray-900 mb-6">Live Uptime Dashboard</h4>
               <div className="space-y-4">
                 {['DeFi Yield Protocol', 'RAG Corporate Chat', 'NFT Ticket Market'].map((app, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                     <span className="font-medium text-gray-700 font-body text-sm">{app}</span>
                     <div className="flex items-center gap-2 text-green-600 font-mono text-xs font-bold">
                       <span className="relative flex h-2 w-2">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                       </span>
                       100% Uptime
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-[#050508] rounded-3xl p-8 border border-gray-800 text-white relative">
               <div className="flex items-start gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-700 bg-gray-800">
                   {/* Placeholder avatar */}
                 </div>
                 <div>
                   <h5 className="font-display font-bold">Michael R. <span className="text-gray-400 text-sm ml-2">CEO, US</span></h5>
                   <div className="flex text-[#FFB347] text-xs">★★★★★</div>
                 </div>
               </div>
               <p className="font-body text-sm text-gray-300 italic">
                 "Samuel operates on a different level. Escrow makes it risk-free, but his 
                 transparency and daily Loom updates make it effortless."
               </p>
               <div className="mt-4 pt-4 border-t border-gray-800 flex justify-end">
                 <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                   <Clock className="w-3 h-3"/> Verified on Upwork
                 </span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
