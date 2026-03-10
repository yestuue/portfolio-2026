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
    <Link href="/" className="flex items-center gap-3 group outline-none">
      <div 
        className={`relative w-11 h-11 rounded-xl border transition-all duration-500 flex items-center justify-center overflow-hidden ${
          isDark 
            ? "bg-slate-900 border-white/10 group-hover:border-sky-500/50" 
            : "bg-white border-slate-200 group-hover:border-sky-500/50"
        }`}
      >
        <Image
          src="/logo-big-sam.png" 
          alt="Big Sam"
          fill
          className={`object-contain p-1.5 transition-transform duration-500 group-hover:scale-110 ${
            isDark ? "brightness-125" : "brightness-100"
          }`}
          priority
        />
        {/* Availability Pulse */}
        <div className="absolute top-1 right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-black tracking-tighter uppercase text-white">
          Big
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400">
          Sam
        </span>
      </div>
    </Link>
  );
}