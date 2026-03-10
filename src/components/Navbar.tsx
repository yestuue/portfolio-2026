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
          ? "glass-nav py-3 shadow-xl border-b border-white/5" 
          : "py-6 bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Clean Logo Integration */}
        <Logo />

        {/* Bold White Nav Links */}
        <div className="hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.2em] text-white">
          {["Home", "Services", "About", "Projects", "Blogs"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group transition-all hover:text-sky-400"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Action Zone */}
        <div className="flex items-center gap-5">
          <ThemeToggle />
          
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-xl text-slate-950 font-black text-[11px] uppercase tracking-widest transition-all bg-white hover:bg-sky-400 hover:text-white active:scale-95 inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}