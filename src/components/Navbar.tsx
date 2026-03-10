"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-nav py-3 shadow-lg border-b border-slate-200/50 dark:border-white/5" 
          : "py-6 bg-transparent"
      }`}
      style={{ 
        height: scrolled ? "70px" : "var(--nav-height)",
        marginTop: scrolled ? "0" : "40px" 
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Updated Brand Logo */}
        <Logo />

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[12px] uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
          {["Home", "Services", "About", "Projects", "Blogs"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group transition-colors hover:text-sky-600 dark:hover:text-sky-400"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-2xl text-white font-black text-[11px] uppercase tracking-widest transition-all hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-500/20 bg-slate-950 dark:bg-white dark:text-slate-950 active:scale-95 inline-block"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50">
            <div className="w-5 h-0.5 bg-slate-900 dark:bg-white"></div>
            <div className="w-3 h-0.5 bg-slate-900 dark:bg-white ml-auto mr-2.5"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}