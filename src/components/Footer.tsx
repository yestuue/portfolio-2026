"use client";

import { ArrowUp, Github, Linkedin, Twitter, MessageCircle, Instagram } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] border-t border-gray-800 text-gray-400 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 border-b border-gray-800 pb-12 mb-12">
          
          <div className="max-w-sm text-center md:text-left space-y-4">
            <Link href="/" className="inline-block font-display font-bold text-2xl text-white tracking-tight mb-2">
              Samuel.
            </Link>
            <p className="font-body text-sm text-gray-500">
              Samuel Opeyemi — Full Stack Dev · Blockchain · AI
            </p>
            <div className="flex bg-[#0F0F1A] border border-gray-800 rounded-lg p-3 items-center justify-center md:justify-start gap-3 w-fit mx-auto md:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-xs font-bold text-gray-300">
                Lagos, NG: <span className="text-[#00D4FF]">{time || "Syncing..."}</span>
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24 text-center md:text-left">
            <div className="space-y-4">
              <h5 className="font-mono text-xs font-bold text-gray-300 uppercase tracking-widest">Sitemap</h5>
              <div className="flex flex-col gap-3 text-sm font-body">
                {['Home', 'Services', 'About', 'Projects', 'Trust Center'].map(link => (
                  <Link key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#00D4FF] transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-mono text-xs font-bold text-gray-300 uppercase tracking-widest">Connect</h5>
              <div className="flex flex-col gap-3 text-sm font-body">
                <Link href="https://x.com/mrsamuelopeyemi" className="hover:text-[#00D4FF] transition-colors">X / Twitter</Link>
                <Link href="https://github.com/yestuue" className="hover:text-[#00D4FF] transition-colors">GitHub</Link>
                <Link href="https://www.linkedin.com/in/samuel-opeyemii" className="hover:text-[#00D4FF] transition-colors">LinkedIn</Link>
                <Link href="https://www.instagram.com/shopifybysam" className="hover:text-[#00D4FF] transition-colors">Instagram</Link>
                <Link href="https://www.tiktok.com/@ekfaadsk" className="hover:text-[#00D4FF] transition-colors">TikTok</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
             <div className="flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
               <span className="text-[10px]">🔒</span> All projects protected by milestone-based escrow
             </div>
             <p className="text-xs font-mono text-gray-600 mt-2">
               © {new Date().getFullYear()} Samuel Opeyemi. Built with Next.js, passion, and Lagos energy ⚡
             </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#1A1A24] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#00D4FF] transition-colors group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
