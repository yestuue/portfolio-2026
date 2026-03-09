"use client";

import Link from "next/link";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowUp, 
  Zap,
  Phone
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      {/* The Deep Blue Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-600/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Bar: Mission & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20 bg-white/5 backdrop-blur-md rounded-full px-8 py-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-950 rounded-sm rotate-45" />
            </div>
            <p className="text-xs font-medium text-slate-300 tracking-tight">
              Your next idea, beautifully designed and flawlessly built.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Youtube, link: "#" },
              { icon: Phone, link: "#" }, // Representing WhatsApp
              { icon: Instagram, link: "#" },
              { icon: Github, link: "https://github.com/yestuue" },
              { icon: Twitter, link: "https://x.com/mrsamuelopeyemi" },
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.link} 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Section: CTA & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Main CTA */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
              Let's make it <br />
              <span className="text-white">happen now</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-sky-500/20">
                <Zap className="w-4 h-4 fill-current" /> Start Now
              </Link>
              <Link href="https://calendly.com" className="flex items-center gap-2 bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all">
                Book a call
              </Link>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Navigate</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Portfolio', 'About', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="group flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                      <span className="text-sky-500">★</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Resources</h4>
              <ul className="space-y-4">
                {['Download CV', 'Website Templates', 'Monthly Newsletter', 'OpicWeb', 'Synq Studio'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                      <span className="text-sky-500">★</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Time */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">All rights reserved.</p>
            <h3 className="text-4xl md:text-6xl font-display font-bold opacity-80">
              © {currentYear} SAMUEL OPEYEMI
            </h3>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Local Time</p>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-sky-500">★</span> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZoneName: 'short' })}
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 bg-sky-500 hover:bg-sky-400 text-white rounded-full flex items-center justify-center transition-all group shadow-2xl shadow-sky-500/20"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}