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
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 flex items-center ${
        scrolled 
          ? "glass-nav py-2 shadow-md top-0 text-white" // Force white text here
          : "py-6 bg-transparent top-[44px] text-slate-900 dark:text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl h-10 md:h-12">
        {/* Brand Logo */}
        <Link href="/" className="outline-none flex items-center">
          {/* Logo will now inherit white color from nav when scrolled */}
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Experience", "Projects", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-[13px] font-black uppercase tracking-widest transition-colors group ${
                scrolled ? "text-white/90 hover:text-white" : "text-slate-900 dark:text-white hover:text-[#c2410c]"
              }`}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 group-hover:w-full w-0 ${
                scrolled ? "bg-white" : "bg-[#c2410c]"
              }`}></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-lg text-white font-black text-[10px] uppercase tracking-widest bg-[#c2410c] shadow-[0_4px_0_0_#9a3412] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#9a3412] active:translate-y-[4px] active:shadow-none transition-all"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
          <div className={`w-5 h-[2px] ${scrolled ? "bg-white" : "bg-slate-950 dark:bg-white"}`}></div>
          <div className="w-3.5 h-[2px] bg-[#c2410c] ml-auto mr-1.5"></div>
        </button>
      </div>
    </nav>
  );
}