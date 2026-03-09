"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Years", value: 5, suffix: "+" },
    { label: "Smart Contracts", value: 12, suffix: "+" },
    { label: "AI Products", value: 3, suffix: "" },
    { label: "Satisfaction", value: 98, suffix: "%" },
    { label: "Escrow Protected", value: 100, suffix: "%" }
  ];

  const skills = [
    { name: "Solidity", level: 90 },
    { name: "React/Next.js", level: 88 },
    { name: "Node.js", level: 87 },
    { name: "Python/LLMs", level: 82 },
    { name: "AWS/DevOps", level: 74 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white text-slate-900 border-y border-slate-100">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-6">
        
        {/* Left Column: Avatar & Brand Mark */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl group">
            <Image 
              src="/samuel-photo.png" 
              alt="Samuel Opeyemi" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors"></div>
          </div>
          
          {/* Status Badge */}
          <div className="mt-8 flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 font-bold text-xs uppercase tracking-widest text-slate-600">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Based in Lagos, Nigeria
          </div>
        </div>

        {/* Right Column: Content */}
        <div className={`lg:col-span-7 space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase">— Technical Profile</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[0.95]">
              Architecting Systems That <br/>
              <span className="text-sky-500">Solve Real Problems.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
            <p>
              I'm Samuel Opeyemi, a full-stack engineer and blockchain architect. 
              I specialize in bridging the gap between <span className="text-slate-900 font-bold underline decoration-sky-500/20">complex backend logic</span> and 
              <span className="text-slate-900 font-bold underline decoration-sky-500/20"> seamless user experiences</span>.
            </p>
            <p>
              With half a decade of experience shipping for global clients, I focus on building 
              high-performance AI tools and audited Web3 infrastructure that drive measurable business growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-y border-slate-100">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-3xl font-display font-bold text-slate-900">
                  {isVisible ? stat.value : 0}{stat.suffix}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Core Proficiencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{skill.name}</span>
                  <span className="text-sm font-mono font-bold text-sky-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                    className="bg-sky-500 h-full rounded-full"
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