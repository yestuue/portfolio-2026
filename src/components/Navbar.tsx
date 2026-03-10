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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-nav py-2.5 shadow-sm" // Minimal padding when scrolled
          : "py-4 bg-transparent"        // Minimal padding at top
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl">
        {/* Brand Logo */}
        <Link href="/" className="group outline-none">
          <Logo />
        </Link>

        {/* --- Navigation Links --- */}
        <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {["Home", "Services", "About", "Projects", "Blogs"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative transition-colors hover:text-sky-600 dark:hover:text-sky-400 group"
            >
              {link}
              {/* Tight animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- Call to Action: Now with 3D Tactile Feel --- */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-xl text-white font-black text-[10px] uppercase tracking-widest bg-slate-900 dark:bg-sky-500 btn-3d inline-block"
          >
            Contact Me
          </Link>
        </div>

        {/* --- Minimal Mobile Menu Toggle --- */}
        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10">
          <div className="w-5 h-[1.5px] bg-slate-900 dark:bg-white"></div>
          <div className="w-3 h-[1.5px] bg-slate-900 dark:bg-white ml-auto mr-2.5"></div>
        </button>
      </div>
    </nav>
  );
}