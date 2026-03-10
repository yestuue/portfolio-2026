"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProofOfWork() {
  const [filter, setFilter] = useState("All");
  
  const filters = ["All", "Mobile Apps", "Blockchain", "AI/LLM", "Shopify"];

  const projects = [
    {
      title: "Luvly App",
      category: "Mobile Apps",
      image: "/projects/luvly.png",
      desc: "High-performance iOS & Android hair inspiration app with AI trend discovery and personalized galleries.",
      tech: ["React Native", "Expo", "Firebase"],
      status: "App Store",
    },
    {
      title: "Neroload Mobile",
      category: "Mobile Apps",
      image: "/projects/neroload.png",
      desc: "Secure mobile gateway for gift card trading with real-time push notifications and instant wallet payouts.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      status: "Production",
    },
    {
      title: "NoFoldZone (NFZ)",
      category: "Shopify",
      image: "/projects/nfz.png",
      desc: "Streetwear brand store with a custom WhatsApp checkout system and 'vibe-coded' UI architecture.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      status: "Online",
    },
    {
      title: "RAG Support AI",
      category: "AI/LLM",
      image: "/projects/rag-ai.png",
      desc: "Enterprise compliance chatbot built with custom documentation RAG to reduce support tickets by 40%.",
      tech: ["Python", "LangChain", "OpenAI"],
      status: "Online",
    },
    {
      title: "DeFi Aggregator",
      category: "Blockchain",
      image: "/projects/defi.png",
      desc: "Smart contracts for optimizing yield across multiple lending protocols. Audited and deployed on Polygon.",
      tech: ["Solidity", "Hardhat", "Ethers.js"],
      status: "Mainnet",
    },
    {
      title: "Icon Wrist Hub",
      category: "Shopify",
      image: "/projects/icon-wrist.png",
      desc: "High-end watch e-commerce store focused on collection storytelling and premium brand identity.",
      tech: ["Shopify", "Liquid", "Marketing"],
      status: "Online",
    },
  ];

  const filtered = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-tight bg-white dark:bg-slate-950 transition-colors border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-2 border-l-4 border-[#c2410c] pl-6">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-[#c2410c] font-black uppercase">
              — Artifacts
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
              Proof of <br/>
              <span className="text-[#c2410c]">Engineering.</span>
            </h2>
          </div>
        </div>

        {/* Filter Bar - Standardized to the new palette */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all duration-75 border ${
                filter === f 
                  ? "bg-[#c2410c] text-white border-transparent shadow-[0_4px_0_0_#9a3412] translate-y-[-2px]" 
                  : "bg-slate-50 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-white/5 hover:border-[#c2410c]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.title} 
                className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-2 flex flex-col cursor-pointer"
              >
                {/* Image Module */}
                <div className="h-52 relative overflow-hidden m-3 rounded-[1.5rem] bg-slate-200 dark:bg-slate-800">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-[8px] font-black text-slate-900 dark:text-white uppercase tracking-widest shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 pt-2 flex flex-col flex-1">
                  <h4 className="text-xl font-display font-black text-slate-900 dark:text-white tracking-tighter mb-2 group-hover:text-[#c2410c] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-2 italic">
                    {project.desc}
                  </p>
                  
                  {/* Footer Logic: Tech & Status only */}
                  <div className="mt-auto space-y-4 pt-4 border-t border-slate-200 dark:border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[8px] font-black text-slate-400 dark:text-slate-500 rounded uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-[9px] text-[#c2410c] font-black uppercase tracking-[0.2em]">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] animate-pulse"></span>
                      {project.status}
                    </div>
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