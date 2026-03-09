"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle2, Smartphone, Cpu, Globe, ShoppingCart, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProofOfWork() {
  const [filter, setFilter] = useState("All");
  
  const filters = ["All", "📱 Mobile Apps", "⛓ Blockchain", "🤖 AI/LLM", "🛍 Shopify"];

  const projects = [
    {
      title: "Luvly App",
      category: "📱 Mobile Apps",
      desc: "High-performance iOS & Android hair inspiration app with AI trend discovery and personalized galleries.",
      tech: ["React Native", "Expo", "Firebase"],
      web3: false,
      status: "App Store",
    },
    {
      title: "Neroload Mobile",
      category: "📱 Mobile Apps",
      desc: "Secure mobile gateway for gift card trading with real-time push notifications and instant wallet payouts.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      web3: false,
      status: "Production",
    },
    {
      title: "NoFoldZone (NFZ)",
      category: "🛍 Shopify",
      desc: "Streetwear brand store with a custom WhatsApp checkout system and 'vibe-coded' UI architecture.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      web3: false,
      status: "Online",
    },
    {
      title: "RAG Support AI",
      category: "🤖 AI/LLM",
      desc: "Enterprise compliance chatbot built with custom documentation RAG to reduce support tickets by 40%.",
      tech: ["Python", "LangChain", "OpenAI"],
      web3: false,
      status: "Online",
    },
    {
      title: "DeFi Aggregator",
      category: "⛓ Blockchain",
      desc: "Smart contracts for optimizing yield across multiple lending protocols. Audited and deployed on Polygon.",
      tech: ["Solidity", "Hardhat", "Ethers.js"],
      web3: true,
      status: "Mainnet",
    },
    {
      title: "Icon Wrist Hub",
      category: "🛍 Shopify",
      desc: "High-end watch e-commerce store focused on collection storytelling and premium brand identity.",
      tech: ["Shopify", "Liquid", "Marketing"],
      web3: false,
      status: "Online",
    },
  ];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative z-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase"
            >
              — Selected Artifacts
            </motion.h3>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-[0.9]">
              Proof of <br/>
              <span className="text-sky-500">Engineering.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed pt-2">
              From high-performance <span className="text-slate-900 font-bold underline decoration-sky-500/30">Mobile Apps</span> to secure blockchain infrastructure.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 border ${
                filter === f 
                  ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200" 
                  : "bg-white text-slate-400 border-slate-200 hover:border-sky-400 hover:text-sky-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.title} 
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2"
              >
                {/* Visual Header with Terminal Mockup */}
                <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
                  <div className="font-mono text-sky-400/40 text-[9px] w-full leading-relaxed select-none overflow-hidden">
                    {`$ npm init -y\n$ installing_dependencies...\n$ build: ${project.title.toLowerCase()}\n$ status: 100%_optimized\n$ architecture: ${project.category.replace(/[^a-zA-Z]/g, '')}`}
                  </div>
                  
                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] text-white font-bold border border-white/20 uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col min-h-[300px]">
                  <div className="flex-1 space-y-4">
                    <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{project.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">{project.desc}</p>
                    
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-400 rounded-lg uppercase tracking-tighter">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="flex items-center justify-between pt-8 mt-auto border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {project.status}
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-xs font-bold text-sky-500 hover:text-slate-900 transition-all uppercase tracking-widest group/btn">
                      Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}