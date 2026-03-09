"use client";

import { Mail, Smartphone, Linkedin, Calendar, Send, Rocket, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [time, setTime] = useState<string>("");
  const [budget, setBudget] = useState("5000");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: CONTEXT & PERSONAL TOUCH */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-mono text-xs font-bold text-sky-600 uppercase tracking-widest"
              >
                — Start a Conversation
              </motion.h3>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
                Let's Build <br/> Something <span className="text-sky-500">Real</span>.
              </h2>
              <p className="text-lg text-slate-600 max-w-md">
                Whether you're scaling a Shopify brand or architecting a Web3 protocol, I provide the engineering and strategy to make it happen.
              </p>
            </div>

            {/* Live Location Card */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-100 relative shrink-0">
                <Image src="/samuel-photo.png" alt="Samuel Opeyemi" fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <p className="text-slate-800 font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-500" />
                  Lagos, Nigeria <span className="text-slate-400 font-medium">— {time || "12:00 PM"}</span>
                </p>
                <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Avg. response: Under 2 hours
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
              <Link href="mailto:hello@samuelopeyemi.com" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-200 transition-all shadow-sm">
                <Mail className="w-6 h-6"/>
              </Link>
              <Link href="https://wa.me/2349031796142" target="_blank" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-200 transition-all shadow-sm">
                <Smartphone className="w-6 h-6"/>
              </Link>
              <Link href="https://www.linkedin.com/in/samuel-opeyemii" target="_blank" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm">
                <Linkedin className="w-6 h-6"/>
              </Link>
              <Link href="#" className="flex-1 min-w-[160px] h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 font-bold transition-all gap-2 shadow-lg">
                <Calendar className="w-5 h-5"/> Book Strategy Call
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: THE SMART INQUIRY FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-2xl shadow-slate-200/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-1">Your Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="Samuel Opeyemi" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-1">Email / WhatsApp</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="hello@brand.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-1">Project Focus</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Web3/DeFi', 'AI/LLM', 'Shopify'].map(type => (
                    <label key={type} className="cursor-pointer group">
                      <input type="radio" name="type" className="peer sr-only" defaultChecked={type === 'Shopify'} />
                      <div className="text-center p-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-500 text-xs font-bold peer-checked:bg-sky-500 peer-checked:border-sky-500 peer-checked:text-white transition-all group-hover:border-sky-200">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-1">Budget Estimate</label>
                  <span className="text-sky-600 font-bold">${Number(budget).toLocaleString()}+</span>
                </div>
                <input 
                  type="range" 
                  min="1000" max="25000" step="500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-1">Project Goals</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium resize-none" placeholder="Tell me what you're looking to achieve..." required></textarea>
              </div>

              <button type="submit" className="w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-sky-600 transition-all shadow-lg shadow-slate-200 group">
                Send Inquiry 
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}