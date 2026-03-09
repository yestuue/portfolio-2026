"use client";

import { useState } from "react";
import { ExternalLink, CheckCircle2, ShoppingCart, Cpu, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProofOfWork() {
  const [filter, setFilter] = useState("All");
  
  const filters = ["All", "⛓ Blockchain", "🤖 AI/LLM", "💻 Full Stack", "🛍 Shopify"];

  const projects = [
    {
      title: "NoFoldZone (NFZ)",
      category: "🛍 Shopify",
      desc: "Streetwear brand store with a custom WhatsApp checkout system and 'vibe-coded' UI architecture.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      web3: false,
      status: "Online",
    },
    {
      title: "RAG Customer Support AI",
      category: "🤖 AI/LLM",
      desc: "Enterprise compliance chatbot built with custom documentation RAG to reduce support tickets by 40%.",
      tech: ["Python", "LangChain", "OpenAI"],
      web3: false,
      status: "Online",
    },
    {
      title: "DeFi Yield Aggregator",
      category: "⛓ Blockchain",
      desc: "Smart contracts for optimizing yield across multiple lending protocols. Audited and deployed on Polygon.",
      tech: ["Solidity", "Hardhat", "Ethers.js"],
      web3: true,
      status: "Online",
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
        
        <div className="text-center md:text-left mb-16 space-y-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs tracking-widest text-sky-600 font-bold uppercase"
          >
            — Verified Projects
          </motion.h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Shipped Products. Proven Results.
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            From automated lead generation tools to high-conversion Shopify stores, I build to solve problems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 border ${
                filter === f 
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200" 
                  : "bg-white text-slate-500 border-slate-200 hover:border-sky-400 hover:text-sky-600"
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
                className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-200"
              >
                {/* Visual Header */}
                <div className="h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="font-mono text-sky-400 text-[10px] p-6 w-full h-full whitespace-pre-wrap opacity-40 group-hover:opacity-70 transition-opacity">
                    {`> project_init: ${project.title.toLowerCase()}\n> stack_check: ${project.tech.join(', ')}\n> status: optimized\n> rendering_interface...`}
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold border border-white/20">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{project.title}</h4>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed line-clamp-2">{project.desc}</p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded-md uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{project.status}</span>
                    </div>
                    
                    {project.web3 ? (
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase">
                          <CheckCircle2 className="w-3 h-3" /> Audited
                        </div>
                        <button className="flex items-center gap-1 text-sm font-bold text-sky-500 hover:text-sky-700 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Verify
                        </button>
                      </div>
                    ) : (
                      <button className="flex items-center gap-2 text-sm font-bold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-all">
                        View Project ↗
                      </button>
                    )}
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