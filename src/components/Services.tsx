"use client";

import { useState } from "react";
import { ChevronDown, Layers, BrainCircuit, Blocks, Check, Smartphone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const cards = [
    {
      title: "Mobile App Systems",
      icon: Smartphone,
      desc: "High-performance iOS & Android applications built for scale.",
      features: ["React Native & Expo", "Native-feel UX/UI", "Push Notification Logic", "App Store Deployment"],
      accent: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "AI & LLM Integration",
      icon: BrainCircuit,
      desc: "Production-ready AI agents and RAG systems for modern business.",
      features: ["Custom RAG Chatbots", "LLM SaaS Architecture", "Vector DB (Pinecone/Supabase)", "Automated AI Workflows"],
      accent: "text-sky-500",
      bg: "bg-sky-50"
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      desc: "Secure, audited on-chain solutions for the future of finance.",
      features: ["Smart Contracts (Solidity)", "DeFi Protocols", "Tokenomics Design", "Web3 Auth Systems"],
      accent: "text-blue-600",
      bg: "bg-blue-50"
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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mb-20 space-y-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase"
          >
            — Capabilities & Support
          </motion.h3>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[0.9]">
            Architecture. <br/>
            <span className="text-sky-500 text-4xl md:text-5xl">Execution. Delivery.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl pt-4">
            Providing high-end engineering services tailored for global startups. No excuses—just scalable code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 transition-all hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-200 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <card.icon className={`w-7 h-7 ${card.accent}`} />
              </div>
              <h4 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight">{card.title}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm font-medium">{card.desc}</p>
              
              <ul className="space-y-4">
                {card.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-tighter">
                    <Check className={`w-4 h-4 ${card.accent}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-3xl font-display font-bold text-slate-900">FAQ</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Common questions about working with Samuel on complex technical builds.
            </p>
            <div className="pt-4">
               <button className="flex items-center gap-2 text-xs font-bold font-mono text-sky-500 uppercase tracking-widest hover:text-slate-900 transition-colors">
                  Contact Support <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  openFaq === i 
                    ? 'border-sky-200 bg-white shadow-xl shadow-sky-500/5' 
                    : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <h5 className={`font-bold text-lg transition-colors ${openFaq === i ? 'text-sky-600' : 'text-slate-900'}`}>
                    {faq.q}
                  </h5>
                  <div className={`p-2 rounded-full transition-all duration-300 ${openFaq === i ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-200 text-slate-400'}`}>
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
                      <p className="px-8 pb-8 text-slate-500 font-medium leading-relaxed text-base">
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