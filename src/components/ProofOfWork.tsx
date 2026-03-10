"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProofOfWork() {
  const [filter, setFilter] = useState("All");
  
  const filters = ["All", "📱 Mobile Apps", "⛓ Blockchain", "🤖 AI/LLM", "🛍 Shopify"];

  const projects = [
    {
      title: "Luvly App",
      category: "📱 Mobile Apps",
      image: "/projects/luvly.png",
      desc: "High-performance iOS & Android hair inspiration app with AI trend discovery and personalized galleries.",
      tech: ["React Native", "Expo", "Firebase"],
      status: "App Store",
    },
    {
      title: "Neroload Mobile",
      category: "📱 Mobile Apps",
      image: "/projects/neroload.png",
      desc: "Secure mobile gateway for gift card trading with real-time push notifications and instant wallet payouts.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      status: "Production",
    },
    {
      title: "NoFoldZone (NFZ)",
      category: "🛍 Shopify",
      image: "/projects/nfz.png",
      desc: "Streetwear brand store with a custom WhatsApp checkout system and 'vibe-coded' UI architecture.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      status: "Online",
    },
    {
      title: "RAG Support AI",
      category: "🤖 AI/LLM",
      image: "/projects/rag-ai.png",
      desc: "Enterprise compliance chatbot built with custom documentation RAG to reduce support tickets by 40%.",
      tech: ["Python", "LangChain", "OpenAI"],
      status: "Online",
    },
    {
      title: "DeFi Aggregator",
      category: "⛓ Blockchain",
      image: "/projects/defi.png",
      desc: "Smart contracts for optimizing yield across multiple lending protocols. Audited and deployed on Polygon.",
      tech: ["Solidity", "Hardhat", "Ethers.js"],
      status: "Mainnet",
    },
    {
      title: "Icon Wrist Hub",
      category: "🛍 Shopify",
      image: "/projects/icon-wrist.png",
      desc: "High-end watch e-commerce store focused on collection storytelling and premium brand identity.",
      tech: ["Shopify", "Liquid", "Marketing"],
      status: "Online",
    },
  ];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] tracking-[0.3em] text-sky-600 dark:text-sky-400 font-bold uppercase"
            >
              — Selected Artifacts
            </motion.h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[0.95]">
              Proof of <br/>
              <span className="text-sky-500">Engineering.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed pt-2 max-w-lg">
              Showcasing depth in <span className="text-slate-900 dark:text-white font-bold underline decoration-sky-500/20">Mobile</span>, <span className="text-slate-900 dark:text-white font-bold underline decoration-sky-500/20">Blockchain</span>, and <span className="text-slate-900 dark:text-white font-bold underline decoration-sky-500/20">AI Tools</span>.
            </p>
          </div>
        </div>

        {/* Filter Bar with 3D Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-75 border-t border-l ${
                filter === f 
                  ? "bg-slate-900 dark:bg-sky-500 text-white border-transparent shadow-[0_4px_0_0_#000] dark:shadow-[0_4px_0_0_#0369a1] translate-y-[-2px]" 
                  : "bg-white dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-white/10 hover:border-sky-300 dark:hover:border-sky-500 shadow-[0_2px_0_0_#e2e8f0] dark:shadow-[0_2px_0_0_#000]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.title} 
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border-t border-l border-slate-100 dark:border-white/10 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 flex flex-col"
              >
                {/* Visual Header */}
                <div className="h-56 bg-slate-100 dark:bg-slate-800 relative overflow-hidden m-3 rounded-[1.8rem]">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content Card */}
                <div className="p-8 pt-4 flex flex-col flex-1 space-y-5">
                  <div className="px-3 py-1 self-start bg-sky-50 dark:bg-sky-900/20 rounded-full text-[9px] text-sky-700 dark:text-sky-400 font-black uppercase tracking-widest border-t border-l border-white/20">
                    {project.category}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{project.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed line-clamp-3">{project.desc}</p>
                    
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-[10px] font-bold text-slate-500 dark:text-slate-400 rounded-lg uppercase tracking-tight">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tactile Footer Action */}
                  <div className="flex items-center justify-between pt-6 mt-auto border-t border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      {project.status}
                    </div>
                    
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-sky-500 text-white text-[10px] font-black uppercase tracking-widest transition-all duration-75 shadow-[0_4px_0_0_#000] dark:shadow-[0_4px_0_0_#0369a1] active:translate-y-[4px] active:shadow-none group/btn">
                      Explore <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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