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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "py-6 bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-xl text-white transition-transform group-hover:scale-110" style={{ backgroundColor: "var(--color-electric-cyan)" }}>
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Samuel.</span>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {["Home", "Services", "About", "Projects", "Blogs", "Testimonials"].map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative group transition-colors hover:text-[#00D4FF]"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full text-white font-medium text-sm transition-transform hover:scale-105 inline-block"
            style={{ backgroundColor: "var(--color-electric-cyan)" }}
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
}
