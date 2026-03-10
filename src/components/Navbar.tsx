"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        scrolled 
          ? "glass-nav py-2.5 shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl h-10 md:h-12">
        {/* Brand Logo - Now Bold & Minimal */}
        <Link href="/" className="outline-none flex items-center">
          <Logo />
        </Link>

        {/* --- Navigation Links: Bold & Tighter --- */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Experience", "Projects", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-[13px] font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group"
            >
              {link}
              {/* THE REFERENCE STYLE: Brick-brown underline with offset */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#c2410c] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- Call to Action: Brick-Brown 3D Button --- */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-lg text-white font-black text-[10px] uppercase tracking-widest bg-slate-900 dark:bg-[#c2410c] btn-3d inline-block shadow-lg"
          >
            Contact Me
          </Link>
        </div>

        {/* --- Minimal Mobile Toggle --- */}
        <button className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm">
          <div className="w-5 h-[2px] bg-slate-900 dark:bg-white"></div>
          <div className="w-3.5 h-[2px] bg-[#c2410c] ml-auto mr-1.5"></div>
        </button>
      </div>
    </nav>
  );
}