"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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
    <section id="about" ref={sectionRef} className="py-24 bg-[#FAFAFA] text-[#0A0A0F]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Avatar */}
        <div className="md:col-span-4 flex flex-col items-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 group">
            <Image 
              src="/samuel-photo.png" 
              alt="Samuel Opeyemi" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for Projects
          </div>
        </div>

        {/* Right Column: Content */}
        <div className={`md:col-span-8 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-4">
            <h3 className="font-mono text-sm tracking-widest text-[#00D4FF] font-bold uppercase">— About Samuel</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              I Build Systems That <br/>Solve Real Problems
            </h2>
          </div>

          <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-body">
            <p>
              I'm Samuel Opeyemi, a full-stack developer and blockchain engineer based in Lagos, Nigeria. 
              I specialize in building problem-solving applications — from production-grade AI products to 
              audited smart contracts deployed on mainnet.
            </p>
            <p>
              With 5+ years of experience shipping web, mobile, and blockchain solutions for clients across 
              Nigeria, the US, and the UK, I don't just write code — I architect systems that work, scale, 
              and deliver measurable results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 border-t border-gray-200">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-display font-bold text-gray-900">
                  {isVisible ? stat.value : 0}{stat.suffix}
                </span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-6">
            {skills.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-mono font-bold">
                  <span>{skill.name}</span>
                  <span className="text-[#00D4FF]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#00D4FF] h-full rounded-full transition-all duration-1500 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%', 
                      transitionDelay: `${i * 100}ms` 
                    }}
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
