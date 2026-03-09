"use client";

import { GitCommit, Play, GitBranch, Cpu, FastForward, CheckCircle2, TrendingDown } from "lucide-react";
import Image from "next/image";

export default function ProcessLab() {
  return (
    <section id="process" className="py-24 bg-[#0F0F1A] border-y border-gray-800 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-mono text-sm tracking-widest text-[#FFB347] font-bold uppercase">— How Samuel Thinks</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Standard devs show the result.<br/>Samuel shows the thinking.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          
          {/* Item 1: Architecture Diagram */}
          <div className="md:col-span-8 row-span-2 bg-[#050508] rounded-3xl border border-gray-800 p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">Interactive System Architecture</h4>
                <p className="text-gray-400 font-body text-sm">Web3 AI Hybrid Infrastructure Model</p>
              </div>
              <div className="p-3 bg-[#1A1A24] rounded-full border border-gray-700 text-[#00D4FF]">
                <Cpu className="w-6 h-6" />
              </div>
            </div>
            <div className="relative z-10 flex-1 w-full bg-[#1A1A24] rounded-2xl border border-gray-700 p-6 flex items-center justify-center border-dashed group-hover:border-[#00D4FF] transition-colors">
              {/* Abstract Nodes visualization representing Mermaid/React Flow */}
              <div className="absolute flex gap-12 items-center">
                <div className="w-24 h-24 rounded-2xl bg-[#00D4FF]/10 border-2 border-[#00D4FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  <span className="font-mono text-xs font-bold text-white">Client<br/>React</span>
                </div>
                <div className="h-0.5 w-16 bg-[#00D4FF]/50 relative">
                  <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#00D4FF]/50 border-b-[6px] border-b-transparent"></div>
                </div>
                <div className="w-32 h-32 rounded-full border-2 border-[#FFB347] bg-[#FFB347]/10 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,179,71,0.2)] backdrop-blur-md">
                  <span className="font-mono text-xs font-bold text-white text-center">API<br/>Gateway</span>
                </div>
                <div className="h-0.5 w-16 bg-[#FFB347]/50 relative">
                  <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#FFB347]/50 border-b-[6px] border-b-transparent"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-24 h-16 rounded-lg bg-gray-800/50 border border-gray-600 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-gray-300">LLM Node</span>
                  </div>
                  <div className="w-24 h-16 rounded-lg bg-[#050508] border border-gray-600 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-gray-300">Smart Contract</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Performance Metric */}
          <div className="md:col-span-4 row-span-1 bg-gradient-to-br from-[#1A1A24] to-[#050508] rounded-3xl border border-gray-800 p-8 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <h4 className="text-xl font-display font-bold text-white">Performance <br/>Optimization</h4>
              <FastForward className="w-5 h-5 text-[#FFB347]" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-mono mb-2">LCP Load Time Before/After</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-display font-bold text-white">1.1s</span>
                <span className="text-lg font-mono text-red-400 line-through mb-1">8.2s</span>
                <span className="text-green-500 flex items-center text-sm mb-2 font-bold ml-auto bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                  <TrendingDown className="w-3 h-3 mr-1" /> 86%
                </span>
              </div>
            </div>
          </div>

          {/* Item 3: Live Git Feed */}
          <div className="md:col-span-4 row-span-1 bg-[#050508] rounded-3xl border border-gray-800 p-6 flex flex-col font-mono text-xs overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D4FF] to-[#FFB347]"></div>
            <div className="flex items-center gap-2 text-gray-500 mb-4 pb-2 border-b border-gray-800">
              <GitBranch className="w-4 h-4" /> Live Git Commit Feed
            </div>
            <div className="space-y-4 flex-1 overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#050508] to-transparent z-10"></div>
              <div className="flex gap-3 text-gray-300 animate-slide-up">
                <div className="text-[#00D4FF] shrink-0">10:42 AM</div>
                <div className="truncate">feat(vault): implement gasless tx via ERC2771</div>
              </div>
              <div className="flex gap-3 text-gray-300">
                <div className="text-[#00D4FF] shrink-0">Yesterday</div>
                <div className="truncate">fix(ui): dynamic bounding box for RAG chatbot</div>
              </div>
              <div className="flex gap-3 text-gray-300">
                <div className="text-[#00D4FF] shrink-0">Yesterday</div>
                <div className="truncate">refactor: abstract LLM prompt templating</div>
              </div>
            </div>
          </div>

          {/* Item 4: Loom Video / Whiteboard */}
          <div className="md:col-span-4 row-span-1 bg-[#1A1A24] rounded-3xl border border-gray-700 p-1 flex relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#050508]/40 z-10 flex items-center justify-center group-hover:bg-[#050508]/20 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/40 backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-[#00D4FF] translate-x-[2px]" />
              </div>
            </div>
            {/* Whiteboard / ERD mock image or pattern */}
            <div className="w-full h-full bg-gray-900 rounded-[22px] border border-gray-800 opacity-50 relative overflow-hidden p-6 flex justify-end flex-col">
              {/* Simulated whiteboard scribble vectors */}
              <svg className="absolute top-4 left-4 w-32 h-32 text-gray-700 animate-pulse" fill="none" viewBox="0 0 100 100">
                <path d="M10,10 Q50,90 90,10" stroke="currentColor" strokeWidth="2" />
                <rect x="20" y="20" width="30" height="20" stroke="currentColor" strokeWidth="2" />
                <rect x="60" y="60" width="30" height="20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h4 className="relative z-10 font-display font-bold text-white">The Messy Middle</h4>
              <p className="relative z-10 font-body text-xs text-gray-400 mt-1">60s Loom: Architecting the ZK Bridge</p>
            </div>
          </div>

          {/* Item 5: Tech Decision Form */}
          <div className="md:col-span-8 row-span-1 bg-[#050508] rounded-3xl border border-gray-800 p-8 flex items-center">
            <div className="w-full grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-display font-bold text-white mb-2">Tech Decision Table</h4>
                <p className="text-sm text-gray-400 font-body">Why Polygon over Ethereum for Client X?</p>
              </div>
              <div className="bg-[#0F0F1A] border border-gray-800 rounded-2xl p-4 font-mono text-xs">
                 <div className="flex border-b border-gray-800 pb-2 mb-2 text-gray-500">
                   <div className="w-1/3">Factor</div>
                   <div className="w-1/3">Polygon</div>
                   <div className="w-1/3">Ethereum</div>
                 </div>
                 <div className="flex py-1 text-gray-300">
                   <div className="w-1/3">Gas Cost</div>
                   <div className="w-1/3 text-green-400 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> $0.01</div>
                   <div className="w-1/3 text-red-400">$15.00</div>
                 </div>
                 <div className="flex py-1 text-gray-300">
                   <div className="w-1/3">Finality</div>
                   <div className="w-1/3 text-green-400 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> 2s</div>
                   <div className="w-1/3 text-yellow-400">12s</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
