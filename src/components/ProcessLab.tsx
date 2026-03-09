"use client";

import { GitCommit, Play, GitBranch, Cpu, FastForward, CheckCircle2, TrendingDown, Layers, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessLab() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase">— Technical Execution</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Standard devs show the result.<br/>
            <span className="text-slate-400">Samuel shows the engineering.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          
          {/* Item 1: Architecture Diagram (The Big Play) */}
          <div className="md:col-span-8 row-span-2 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative shadow-2xl shadow-slate-200">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent opacity-50"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">System Architecture</h4>
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Hybrid Web3 x AI Infrastructure</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-sky-400">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            {/* Visual Architecture Nodes */}
            <div className="relative z-10 flex-1 w-full mt-8 bg-black/20 rounded-3xl border border-white/5 p-6 flex items-center justify-center border-dashed group-hover:border-sky-500/50 transition-all duration-500">
              <div className="flex gap-8 md:gap-16 items-center scale-90 md:scale-100">
                <div className="w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                  <span className="font-mono text-[8px] font-bold text-sky-400 text-center leading-tight uppercase tracking-tighter">Client<br/>Frontend</span>
                </div>
                <div className="h-px w-12 bg-slate-700 relative">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                </div>
                <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 flex items-center justify-center z-10 backdrop-blur-xl shadow-2xl">
                  <div className="text-center">
                    <span className="font-mono text-[9px] font-black text-white uppercase tracking-widest block mb-1">Logic</span>
                    <span className="font-mono text-[7px] text-slate-400 uppercase">Gateway</span>
                  </div>
                </div>
                <div className="h-px w-12 bg-slate-700 relative">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-sky-500"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-tighter">AI Node</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30">
                    <span className="font-mono text-[8px] text-sky-400 font-bold uppercase tracking-tighter">Contract</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Performance Metric */}
          <div className="md:col-span-4 row-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between group shadow-xl shadow-slate-200/50">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-display font-bold text-slate-900">Optimization<br/>Metrics</h4>
              <div className="p-2 bg-sky-50 rounded-xl">
                 <FastForward className="w-5 h-5 text-sky-500" />
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-widest mb-2">Avg Load Time Redux</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-display font-bold text-slate-900 tracking-tighter">1.1s</span>
                <span className="text-lg font-mono text-slate-300 line-through mb-1">8.2s</span>
                <span className="text-emerald-600 flex items-center text-[10px] mb-2 font-black ml-auto bg-emerald-50 px-3 py-1 rounded-full">
                  <TrendingDown className="w-3 h-3 mr-1" /> 86%
                </span>
              </div>
            </div>
          </div>

          {/* Item 3: Live Git Feed */}
          <div className="md:col-span-4 row-span-1 bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 flex flex-col font-mono text-[10px] overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
            <div className="flex items-center gap-3 text-slate-500 mb-6 font-bold uppercase tracking-widest">
              <GitBranch className="w-4 h-4 text-sky-500" /> Development Log
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex gap-4 text-slate-300">
                <div className="text-sky-500 font-bold shrink-0 uppercase tracking-tighter">Live</div>
                <div className="truncate opacity-80">feat(vault): gasless tx via ERC2771</div>
              </div>
              <div className="flex gap-4 text-slate-500">
                <div className="shrink-0 uppercase tracking-tighter">14h ago</div>
                <div className="truncate opacity-50">fix(ui): dynamic bounding for RAG</div>
              </div>
              <div className="flex gap-4 text-slate-500">
                <div className="shrink-0 uppercase tracking-tighter">18h ago</div>
                <div className="truncate opacity-50">refactor: abstract LLM prompt templating</div>
              </div>
            </div>
          </div>

          {/* Item 4: Loom Video / Whiteboard */}
          <div className="md:col-span-4 row-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-1 flex relative overflow-hidden group shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-slate-900/40 z-10 flex items-center justify-center group-hover:bg-slate-900/20 transition-all duration-500">
              <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-xl cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-2xl">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            <div className="w-full h-full bg-slate-50 rounded-[22px] border border-slate-100 p-8 flex flex-col justify-end">
               <div className="mb-auto">
                 <Code className="w-8 h-8 text-sky-500/20" />
               </div>
               <h4 className="relative z-10 font-display font-bold text-slate-900">The Messy Middle</h4>
               <p className="relative z-10 font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">60s Loom: Architecting the ZK Bridge</p>
            </div>
          </div>

          {/* Item 5: Tech Decision Form */}
          <div className="md:col-span-8 row-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-10 flex items-center shadow-xl shadow-slate-200/50">
            <div className="w-full grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-2">Tech Choice Matrix</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">Strategic reasoning behind infrastructure selection for client scalability.</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 font-mono text-[10px]">
                 <div className="flex border-b border-slate-200 pb-3 mb-3 text-slate-400 font-bold uppercase tracking-tighter">
                   <div className="w-1/3">Factor</div>
                   <div className="w-1/3">Polygon</div>
                   <div className="w-1/3">Ethereum</div>
                 </div>
                 <div className="flex py-2 text-slate-700 font-bold">
                   <div className="w-1/3">Gas Cost</div>
                   <div className="w-1/3 text-emerald-600 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> $0.01</div>
                   <div className="w-1/3 text-slate-300">$15.00</div>
                 </div>
                 <div className="flex py-2 text-slate-700 font-bold">
                   <div className="w-1/3">Finality</div>
                   <div className="w-1/3 text-emerald-600 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> 2s</div>
                   <div className="w-1/3 text-slate-300">12s</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}