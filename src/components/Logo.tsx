"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = resolvedTheme || theme;
  const isDark = mounted && currentTheme === "dark";

  return (
    <Link href="/" className="flex items-center gap-3 group outline-none relative">
      {/* Dynamic Logo Container */}
      <div 
        className={`relative w-11 h-11 rounded-2xl border transition-all duration-500 shadow-lg flex items-center justify-center overflow-hidden ${
          isDark 
            ? "bg-slate-900 border-white/10 group-hover:border-sky-500/50" 
            : "bg-white border-slate-200 group-hover:border-sky-500/50"
        }`}
      >
        <Image
          src="/logo-big-sam.png" 
          alt="Big Sam Logo"
          fill
          className={`object-contain p-1.5 transition-transform duration-500 group-hover:scale-110 ${
            isDark ? "brightness-110" : "brightness-100"
          }`}
          priority
        />
        
        {/* The Live Status Pulse Dot */}
        <div className="absolute top-1 right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-display text-xl font-black tracking-tighter uppercase transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Big
          </span>
        </div>
        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
          isDark ? "text-sky-400" : "text-sky-600"
        }`}>
          Sam
        </span>
      </div>
    </Link>
  );
}