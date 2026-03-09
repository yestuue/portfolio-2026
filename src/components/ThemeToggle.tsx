"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch in Next.js 15
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative p-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 backdrop-blur-xl hover:border-sky-500 transition-all duration-300 shadow-sm hover:shadow-sky-500/10"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-sky-400"
            >
              {/* Shield Base */}
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="opacity-20" />
              {/* Moon Crescent */}
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" stroke="none" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-amber-500"
            >
              {/* Shield Base */}
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="opacity-20" />
              {/* Sun Core */}
              <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
              <path d="M12 8V6m0 12v-2M8 12H6m12 0h-2" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-2xl transition-colors duration-300" />
    </button>
  );
}