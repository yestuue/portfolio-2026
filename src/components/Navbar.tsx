"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
          ? "glass-nav py-3 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
      style={{ 
        height: scrolled ? "70px" : "var(--nav-height)",
        marginTop: scrolled ? "0" : "40px" // This pushes it below your LiveStatus marquee when not scrolled
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white transition-all group-hover:rotate-6 bg-sky-500 shadow-lg shadow-sky-500/20">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-slate-900">
            Samuel<span className="text-sky-500">.</span>
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[13px] uppercase tracking-wider text-slate-500">
          {["Home", "Services", "About", "Projects", "Blogs"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group transition-colors hover:text-sky-600"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-7 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/30 bg-slate-900 active:scale-95 inline-block"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile menu toggle placeholder */}
        <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
          <div className="w-full h-0.5 bg-slate-900"></div>
          <div className="w-3/4 h-0.5 bg-slate-900 ml-auto"></div>
        </button>
      </div>
    </nav>
  );
}