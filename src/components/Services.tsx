"use client";

import { useState } from "react";
import { ChevronDown, BrainCircuit, Blocks, Check, Smartphone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const cards = [
    {
      title: "Mobile App Systems",
      icon: Smartphone,
      desc: "High-performance iOS & Android applications built for massive scale.",
      features: ["React Native & Expo", "Native-feel UX/UI", "Push Notification Logic", "App Store Deployment"],
      accent: "text-[#c2410c]",
      bg: "bg-[#c2410c]/10"
    },
    {
      title: "AI & LLM Integration",
      icon: BrainCircuit,
      desc: "Production-ready AI agents and RAG systems for modern enterprise.",
      features: ["Custom RAG Chatbots", "LLM SaaS Architecture", "Vector DB (Supabase)", "Automated AI Workflows"],
      accent: "text-[#c2410c]",
      bg: "bg-[#c2410c]/10"
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      desc: "Secure, audited on-chain solutions for the future of finance.",
      features: ["Smart Contracts (Solidity)", "DeFi Protocols", "Tokenomics Design", "Web3 Auth Systems"],
      accent: "text-[#c2410c]",
      bg: "bg-[#c2410c]/10"
    }
  ];

  const faqs = [
    {
      q: "Do you work with international clients?",
      a: "Yes — over 60% of my clients are based in the US, UK, and EU. I adapt to overlapping timezone hours to ensure smooth communication via Slack and Loom."
    },
    {
      q: "How do I know my investment is safe?",
      a: "All projects operate on a milestone-based system. Payments are released only when specific, pre-agreed deliverables are approved by you."
    },
    {
      q: "What is your typical response time?",
      a: "I usually respond in under 2 hours during WAT business hours (Mon–Sat). Active clients get priority access via a dedicated communication channel."
    },
    {
      q: "Can you sign an NDA?",
      a: "Absolutely. I understand the importance of IP. Standard NDAs are signed before we discuss any confidential project details."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="services" className="section-tight bg-white dark:bg-slate-950 transition-colors border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4 border-l-4 border-[#c2410c] pl-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[10px] tracking-[0.3em] text-[#c2410c] font-black uppercase"
          >
            — Capabilities & Support
          </motion.h3>
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            Architecture. <br/>
            <span className="text-[#c2410c]">Execution. Delivery.</span>
          </h2>
        </div>

        {/* 3D Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-900 border-t border-l border-white dark:border-white/10 rounded-[2.5rem] p-10 shadow-[0_8px_0_0_#cbd5e1] dark:shadow-[0_8px_0_0_#000] transition-all hover:shadow-[0_4px_0_0_#cbd5e1] dark:hover:shadow-[0_4px_0_0_#000] group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-8 shadow-inner`}>
                <card.icon className={`w-7 h-7 ${card.accent}`} />
              </div>
              <h4 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{card.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-sm font-medium italic">{card.desc}</p>
              
              <ul className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/5">
                {card.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                    <Check className={`w-4 h-4 ${card.accent}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section: Tighter Vertical Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-2xl font-display font-black text-slate-900 dark:text-white uppercase tracking-tighter">FAQ Archive</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xs">
              Direct answers regarding international collaboration and project security.
            </p>
            <div className="pt-2">
               <button className="flex items-center gap-2 text-[10px] font-black font-mono text-[#c2410c] uppercase tracking-[0.2em] hover:text-slate-900 dark:hover:text-white transition-colors">
                 Contact Support <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border-t border-l rounded-[2rem] transition-all duration-300 overflow-hidden ${
                  openFaq === i 
                    ? 'border-white dark:border-white/10 bg-white dark:bg-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
                    : 'border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000]'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left"
                >
                  <h5 className={`font-black text-base uppercase tracking-tight transition-colors ${openFaq === i ? 'text-[#c2410c]' : 'text-slate-900 dark:text-white'}`}>
                    {faq.q}
                  </h5>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${openFaq === i ? 'bg-[#c2410c] text-white rotate-180 shadow-lg' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-7 text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm italic border-l-2 border-[#c2410c] ml-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}