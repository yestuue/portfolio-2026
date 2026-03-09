"use client";

import { Share2, ArrowRight, Clock, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
  const articles = [
    {
      title: "Why Nigerian Web3 Startups Are Leading Africa's Fintech Race in 2026",
      tag: "Web3",
      readTime: "6 min read",
      featured: true,
      desc: "An in-depth analysis of regulatory shifts and unbanked population dynamics driving crypto adoption across the continent."
    },
    {
      title: "How to Build a Production RAG Chatbot in Under a Week",
      tag: "AI Engineering",
      readTime: "8 min read",
    },
    {
      title: "Smart Contract Security: The 5 Vulnerabilities That Cost Millions",
      tag: "Security",
      readTime: "5 min read",
    },
    {
      title: "Full Stack AI Apps: Why Your Next SaaS Needs an LLM Core",
      tag: "Architecture",
      readTime: "7 min read",
    },
    {
      title: "Hiring Blockchain Talent in Nigeria: A Strategic Guide",
      tag: "Hiring",
      readTime: "4 min read",
    }
  ];

  const featured = articles[0];
  const supporting = articles.slice(1);

  return (
    <section id="blogs" className="py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-xs tracking-widest text-sky-600 font-bold uppercase"
            >
              — Technical Insights
            </motion.h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Notes from <br /> the <span className="text-sky-500">Lab</span>.
            </h2>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                <img src="/samuel-photo.png" alt="Samuel Opeyemi" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium text-sm text-slate-500">
                By <span className="text-slate-900 font-bold underline decoration-sky-200 underline-offset-4">Samuel Opeyemi</span> — Blockchain & AI Engineer
              </p>
            </div>
          </div>
          <Link href="#blogs" className="font-bold text-sm text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-2 group">
            View All Notes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Post (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 group relative"
          >
            <Link href="#" className="flex flex-col justify-end bg-slate-900 rounded-[2.5rem] p-8 md:p-12 min-h-[520px] overflow-hidden relative shadow-2xl shadow-sky-900/10">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 blur-[100px] -mr-32 -mt-32 transition-opacity group-hover:opacity-60"></div>
              
              <div className="absolute top-8 left-8 z-20 px-4 py-1.5 bg-sky-500 rounded-full font-bold text-[10px] text-white uppercase tracking-widest">
                {featured.tag}
              </div>
              
              <div className="relative z-20 space-y-6">
                <div className="flex items-center gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3"/> {featured.readTime}</span>
                  <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                    <Share2 className="w-3 h-3"/> Share
                  </span>
                </div>
                <h4 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight transition-colors">
                  {featured.title}
                </h4>
                <p className="text-slate-400 text-lg leading-relaxed line-clamp-2 max-w-xl">
                  {featured.desc}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Supporting Posts (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {supporting.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1"
              >
                <Link href="#" className="h-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 transition-all group flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-[10px] text-sky-600 uppercase tracking-widest">{post.tag}</span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase flex items-center gap-3">
                      {post.readTime}
                      <Share2 className="w-3 h-3 hover:text-sky-500 transition-colors" />
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": featured.title,
            "author": {
              "@type": "Person",
              "name": "Samuel Opeyemi"
            }
          })
        }}
      />
    </section>
  );
}