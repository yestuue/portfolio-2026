"use client";

import { useState } from "react";
import { ChevronDown, Layers, BrainCircuit, Blocks, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const cards = [
    {
      title: "AI Product Development",
      icon: BrainCircuit,
      desc: "Production-ready AI integration for modern businesses.",
      features: ["RAG Chatbots & Agents", "LLM SaaS Architecture", "Automated Workflows", "Vector DB Setup"],
      accent: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      desc: "Secure, audited on-chain solutions for the future of finance.",
      features: ["Smart Contracts (Solidity)", "DeFi Protocols", "NFT Commerce", "Web3 Auth Systems"],
      accent: "text-sky-500",
      bg: "bg-sky-50"
    },
    {
      title: "Full Stack Development",
      icon: Layers,
      desc: "Scalable, performance-driven web and mobile applications.",
      features: ["Next.js & React", "Node.js Backends", "Shopify Liquid Stores", "Database Management"],
      accent: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  const faqs = [
    {
      q: "Do you work with international clients?",
      a: "Yes — over 60% of my clients are based in the US, UK, and EU. I adapt to overlapping timezone hours to ensure smooth communication."
    },
    {
      q: "How do I know my payment is safe?",
      a: "All projects use a milestone-based system. Payments are tied to specific deliverables, ensuring you only pay for completed, approved work."
    },
    {
      q: "Can you sign an NDA?",
      a: "Absolutely. I understand the importance of IP. Standard NDAs are signed before we discuss any confidential project details."
    },
    {
      q: "What is your typical response time?",
      a: "I usually respond in under 2 hours during WAT business hours (Mon–Sat)."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20 space-y-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs tracking-widest text-sky-600 font-bold uppercase"
          >
            — Expertise & Support
          </motion.h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Architecture. Execution. Delivery.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Providing high-end engineering services tailored for startups and enterprises globally.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 transition-all hover:shadow-2xl hover:shadow-sky-500/5 hover:border-sky-200"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-8`}>
                <card.icon className={`w-7 h-7 ${card.accent}`} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{card.desc}</p>
              
              <ul className="space-y-3">
                {card.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <Check className={`w-4 h-4 ${card.accent}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-display font-bold text-slate-900">Frequently Asked Questions</h4>
            <p className="text-slate-500 mt-2 text-sm">Everything you need to know about working with Samuel.</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-300 ${openFaq === i ? 'border-sky-200 bg-sky-50/30 shadow-sm' : 'border-slate-100 bg-slate-50'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h5 className="font-bold text-slate-900 text-lg">{faq.q}</h5>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-sky-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
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