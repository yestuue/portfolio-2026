"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        scrolled 
          ? "glass-nav py-1.5 shadow-sm" // Extremely tight padding for minimal footprint
          : "py-3 bg-transparent"        // Reduced from py-4/py-6 to kill dead space
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl h-10 md:h-12">
        {/* Brand Logo */}
        <Link href="/" className="group outline-none flex items-center">
          <Logo />
        </Link>

        {/* --- Navigation Links --- */}
        <div className="hidden md:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          {["Home", "Services", "About", "Projects", "Blogs"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative transition-colors hover:text-sky-600 dark:hover:text-sky-400 group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- Call to Action: Tight 3D Button --- */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-5 py-2 rounded-lg text-white font-black text-[9px] uppercase tracking-widest bg-slate-900 dark:bg-sky-500 btn-3d inline-block"
          >
            Contact Me
          </Link>
        </div>

        {/* --- Minimal Mobile Toggle --- */}
        <button className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
          <div className="w-4 h-[1.5px] bg-slate-900 dark:bg-white"></div>
          <div className="w-2.5 h-[1.5px] bg-slate-900 dark:bg-white ml-auto mr-2"></div>
        </button>
      </div>
    </nav>
  );
}