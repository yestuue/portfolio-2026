"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  
  // Use resolvedTheme for a better guarantee in Next.js 15
  const currentTheme = resolvedTheme || theme;
  const isDark = mounted && currentTheme === "dark";

  return (
    <div className="flex items-center gap-2 group">
      {/* Dynamic 'S' Icon */}
      <div 
        className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-lg ${
          isDark 
            ? "bg-slate-900 border-white/10 group-hover:border-sky-500/50" 
            : "bg-white border-slate-200 group-hover:border-sky-500/50"
        }`}
      >
        <span 
          className={`font-display text-2xl font-black transition-colors ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}
        >
          S
        </span>
      </div>

      {/* Samuel Opeyemi Text */}
      <span className="font-display font-bold text-lg tracking-tight">
        Samuel <span className={isDark ? "text-slate-400" : "text-slate-500"}>Opeyemi</span>
      </span>
    </div>
  );
}