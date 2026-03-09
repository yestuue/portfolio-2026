"use client";

import { Mail, Smartphone, Linkedin, Calendar, Send, Rocket, Globe, CheckCircle2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; // Make sure to run: npm install @emailjs/browser

export default function Contact() {
  const [time, setTime] = useState<string>("");
  const [budget, setBudget] = useState("5000");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    // Replace placeholders with your actual keys from EmailJS
    emailjs.sendForm(
      'service_47mbkc1',   // Your Service ID
      'YOUR_TEMPLATE_ID',  // Your Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY'    // Your Public Key
    )
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Email Error:', error);
      alert("System busy. Please reach out via WhatsApp!");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/20 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-mono text-[10px] tracking-[0.3em] text-sky-600 font-bold uppercase"
              >
                — Start a Conversation
              </motion.h3>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[0.9]">
                Let's Build <br/> Something <span className="text-sky-500">Real</span>.
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md pt-2">
                Whether you're scaling a Shopify brand, launching a mobile app, or architecting a Web3 protocol, I provide the engineering and strategy to make it happen.
              </p>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50 relative shrink-0">
                <Image src="/samuel-photo.png" alt="Samuel Opeyemi" fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <p className="text-slate-800 font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-500" />
                  Lagos, Nigeria <span className="text-slate-400 font-medium">— {time || "12:00 PM"} WAT</span>
                </p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active & Available
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="mailto:hello@samuelopeyemi.com" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-all">
                <Mail className="w-6 h-6"/>
              </Link>
              <Link href="https://wa.me/2349031796142" target="_blank" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-500 transition-all">
                <Smartphone className="w-6 h-6"/>
              </Link>
              <Link href="https://www.linkedin.com/in/samuel-opeyemii" target="_blank" className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 transition-all">
                <Linkedin className="w-6 h-6"/>
              </Link>
              <Link href="#" className="flex-1 min-w-[200px] h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-sky-600 font-bold transition-all gap-3 shadow-xl uppercase text-xs tracking-widest">
                <Calendar className="w-4 h-4"/> Book Strategy Call
              </Link>
            </div>
          </div>

          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
                >
                  <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                        <input name="user_name" type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="Samuel Opeyemi" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Method</label>
                        <input name="user_contact" type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium" placeholder="Email or WhatsApp" required />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-1">Project Focus</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Mobile App', 'Web3/DeFi', 'AI/LLM', 'Shopify'].map(type => (
                          <label key={type} className="cursor-pointer group">
                            <input type="radio" name="project_type" value={type} className="peer sr-only" defaultChecked={type === 'Mobile App'} />
                            <div className="text-center py-3 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase peer-checked:bg-sky-500 peer-checked:border-sky-500 peer-checked:text-white transition-all group-hover:border-sky-200">
                              {type}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-1">Budget Estimate</label>
                        <span className="text-sky-600 font-mono font-bold text-sm">${Number(budget).toLocaleString()}+</span>
                      </div>
                      <input 
                        name="project_budget"
                        type="range" min="1000" max="25000" step="500" value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest ml-1">The Problem</label>
                      <textarea name="message" rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white transition-all font-medium resize-none" placeholder="Tell me about your vision..." required></textarea>
                    </div>

                    <button disabled={isSending} type="submit" className="w-full py-5 rounded-2xl bg-slate-900 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-sky-600 transition-all shadow-xl group active:scale-95 disabled:opacity-50">
                      {isSending ? "Syncing..." : "Send Project Brief"}
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-[2.5rem] p-12 border border-sky-100 shadow-2xl flex flex-col items-center text-center justify-center h-full min-h-[600px]"
                >
                  <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">Project Brief Received.</h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-xs mb-10">
                    Your requirements have been successfully logged. I'll review the technical scope and get back to you within 2 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="flex items-center gap-2 text-xs font-bold font-mono text-slate-400 hover:text-sky-500 transition-colors uppercase tracking-widest group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Go Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}