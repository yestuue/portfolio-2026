"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Years Exp", value: 5, icon: Zap },
    { label: "Web3 Contracts", value: 12, icon: ShieldCheck },
    { label: "AI Products", value: 3, icon: Cpu },
    { label: "Success Rate", value: 98, icon: Globe }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="section-tight bg-white dark:bg-slate-950 transition-colors duration-300 border-b border-slate-100 dark:border-white/5"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 max-w-7xl">
        
        {/* Left Column: Tactile Photo Module */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start relative">
          <div className="relative w-full max-w-[380px] aspect-square rounded-[2.5rem] overflow-hidden border-[10px] border-slate-50 dark:border-white/5 shadow-2xl group">
            <Image 
              src="/samuel-photo.png" 
              alt="Samuel Opeyemi" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105" 
            />
            {/* 3D Label Overlay - Updated to Brick */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">
              <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Based in Lagos, NG</span>
              <div className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#c2410c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c2410c]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Content */}
        <div className={`lg:col-span-7 space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-[#c2410c] font-black uppercase">— Technical Profile</h3>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
              Architecting Systems That <br/>
              <span className="text-[#c2410c]">Solve Real Problems.</span>
            </h2>
          </div>

          <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
            I specialize in bridging the gap between <span className="text-slate-900 dark:text-white font-bold underline decoration-[#c2410c]/20">complex backend logic</span> and <span className="text-slate-900 dark:text-white font-bold underline decoration-[#c2410c]/20">seamless user experiences</span>. 
            My focus is shipping high-performance AI tools and audited Web3 infrastructure.
          </p>

          {/* Stats Pedestals - Brick Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-t border-l border-white dark:border-white/10 shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#000] flex flex-col items-center text-center transition-transform hover:translate-y-[-2px]"
              >
                <stat.icon className="w-4 h-4 text-[#c2410c] mb-2 opacity-80" />
                <span className="text-xl font-display font-black text-slate-900 dark:text-white leading-none mb-1">
                  {stat.value}{stat.label.includes('Rate') ? '%' : '+'}
                </span>
                <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-tighter leading-none">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Skills Bars - Switched to Brick Brown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
            {[
              { name: "Solidity", level: 90 },
              { name: "React/Next.js", level: 88 },
              { name: "Node.js", level: 87 },
              { name: "Python/LLMs", level: 82 }
            ].map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-[10px] font-mono font-bold text-[#c2410c]">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-white/5 h-1.5 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-[#c2410c] h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}