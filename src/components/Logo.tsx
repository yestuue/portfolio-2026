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
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
        <Image
          src="/logo-big-sam.png" // Make sure your file is in /public/logo-big-sam.png
          alt="Big Sam Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`font-display text-xl font-black tracking-tighter uppercase ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Big
        </span>
        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.3em] ${
          isDark ? "text-sky-400" : "text-sky-600"
        }`}>
          Sam
        </span>
      </div>
    </Link>
  );
}