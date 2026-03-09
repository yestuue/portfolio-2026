"use client";

import { useEffect, useState } from "react";
import { 
  GitBranch, 
  Layers, 
  FastForward, 
  TrendingDown, 
  CheckCircle2, 
  TrendingUp, 
  Fuel, 
  Box, 
  Zap,
  Cpu,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessLab() {
  const [data, setData] = useState({ eth: 0, gas: 0, block: 0 });

  // Real-time API Fetching for the Chain Matrix
  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const priceData = await priceRes.json();
        
        setData({
          eth: priceData.ethereum.usd,
          // Gas and Block are simulated for visual dynamics
          gas: Math.floor(Math.random() * (28 - 18 + 1) + 18),
          block: 19456782 + Math.floor(Math.random() * 10)
        });
      } catch (e) { console.error("API Fetch Error"); }
    };

    fetchData();
    const interval = setInterval(fetchData, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
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
          
          {/* Item 1: Architecture Diagram */}
          <div className="md:col-span-8 row-span-2 bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative shadow-2xl">
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

            <div className="relative z-10 flex-1 w-full mt-8 bg-black/20 rounded-3xl border border-white/5 p-6 flex items-center justify-center border-dashed group-hover:border-sky-500/50 transition-all duration-500">
              <div className="flex gap-8 md:gap-16 items-center scale-90 md:scale-100">
                <div className="w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.15)]">
                   <Cpu className="w-5 h-5 text-sky-400 mb-2" />
                  <span className="font-mono text-[8px] font-bold text-sky-400 text-center uppercase tracking-tighter leading-none">Compute<br/>Node</span>
                </div>
                <div className="h-px w-12 bg-slate-700 relative">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] animate-pulse"></div>
                </div>
                <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 flex items-center justify-center z-10 backdrop-blur-xl shadow-2xl">
                  <div className="text-center">
                    <span className="font-mono text-[9px] font-black text-white uppercase tracking-widest block mb-1">Gateway</span>
                    <Globe className="w-4 h-4 text-slate-400 mx-auto" />
                  </div>
                </div>
                <div className="h-px w-12 bg-slate-700 relative">
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-tighter">AI Node</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                    <span className="font-mono text-[8px] text-sky-400 font-bold uppercase tracking-tighter">On-Chain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Optimization Metrics */}
          <div className="md:col-span-4 row-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col justify-between group shadow-xl shadow-slate-200/50">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-display font-bold text-slate-900 leading-tight">Optimization<br/>Metrics</h4>
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

          {/* Item 3: Live Dev Log */}
          <div className="md:col-span-4 row-span-1 bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 flex flex-col font-mono text-[10px] overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
            <div className="flex items-center gap-3 text-slate-500 mb-6 font-bold uppercase tracking-widest">
              <GitBranch className="w-4 h-4 text-sky-500" /> Development Log
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex gap-4 text-slate-300">
                <div className="text-sky-500 font-bold shrink-0 uppercase">Live</div>
                <div className="truncate opacity-80">feat(vault): gasless tx via ERC2771</div>
              </div>
              <div className="flex gap-4 text-slate-500">
                <div className="shrink-0 uppercase opacity-50">14h ago</div>
                <div className="truncate opacity-50">fix(ui): dynamic bounding for RAG</div>
              </div>
              <div className="flex gap-4 text-slate-500">
                <div className="shrink-0 uppercase opacity-50">18h ago</div>
                <div className="truncate opacity-50">refactor: abstract LLM prompt templating</div>
              </div>
            </div>
          </div>

          {/* Item 4: NEW Live Chain Terminal */}
          <div className="md:col-span-4 row-span-1 bg-slate-950 rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(14,165,233,0.03)_50%)] bg-[length:100%_4px] pointer-events-none" />
            
            <div className="relative z-10 space-y-1">
              <h4 className="font-mono text-[9px] font-black text-sky-500 uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-3 h-3 fill-current" /> Mainnet Live Feed
              </h4>
              <p className="text-white font-bold text-xl italic leading-none">Chain Dynamics</p>
            </div>

            <div className="relative z-10 space-y-4 py-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">ETH / USD</span>
                </div>
                <span className="text-sm font-mono font-black text-white">${data.eth.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Avg. Gas</span>
                </div>
                <span className="text-sm font-mono font-black text-white">{data.gas} Gwei</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-sky-400" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Block</span>
                </div>
                <span className="text-sm font-mono font-black text-white tracking-tighter">#{data.block}</span>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Active Sync</span>
            </div>
          </div>

          {/* Item 5: Tech Choice Matrix */}
          <div className="md:col-span-8 row-span-1 bg-white rounded-[2.5rem] border border-slate-100 p-10 flex items-center shadow-xl shadow-slate-200/50">
            <div className="w-full grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-3">
                <h4 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-2 leading-none">Decision Matrix</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">Why I choose certain infrastructures for client scalability and cost efficiency.</p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 font-mono text-[10px]">
                 <div className="flex border-b border-slate-200 pb-3 mb-3 text-slate-400 font-bold uppercase tracking-tighter">
                   <div className="w-1/3">Factor</div>
                   <div className="w-1/3">Polygon</div>
                   <div className="w-1/3">Ethereum</div>
                 </div>
                 <div className="flex py-2 text-slate-700 font-bold border-b border-slate-100">
                   <div className="w-1/3 text-slate-500">Gas Cost</div>
                   <div className="w-1/3 text-emerald-600 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Low</div>
                   <div className="w-1/3 text-slate-400">High</div>
                 </div>
                 <div className="flex py-2 text-slate-700 font-bold">
                   <div className="w-1/3 text-slate-500">Finality</div>
                   <div className="w-1/3 text-emerald-600 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> ~2s</div>
                   <div className="w-1/3 text-slate-400">~12s</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}