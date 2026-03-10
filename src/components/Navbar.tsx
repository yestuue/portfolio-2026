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
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 flex items-center ${
        scrolled 
          ? "glass-nav py-2 shadow-md top-0" 
          : "py-6 bg-transparent top-[44px]" 
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-7xl h-10 md:h-12">
        {/* Pass scrolled prop to Logo so it knows to turn white */}
        <Link href="/" className="outline-none flex items-center">
          <Logo scrolled={scrolled} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Experience", "Projects", "Contact"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-[13px] font-black uppercase tracking-widest transition-colors group ${
                scrolled 
                  ? "text-white hover:text-white/80" 
                  : "text-slate-900 dark:text-white hover:text-[#c2410c]"
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
      </div>
    </nav>
  );
}