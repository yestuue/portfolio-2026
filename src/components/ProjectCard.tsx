"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col h-full rounded-[2.5rem] bg-white dark:bg-slate-900 
                 border-t border-l border-white dark:border-white/5 
                 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                 overflow-hidden transition-all duration-300"
    >
      {/* Image Container with Inner Bezel */}
      <div className="relative aspect-[16/10] m-3 overflow-hidden rounded-[1.8rem] border border-slate-100 dark:border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8 pt-4 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 border-t border-l border-white/20">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* 3D Tactile Buttons */}
        <div className="mt-auto flex items-center gap-3">
          <Link 
            href={project.link} 
            className="flex-grow flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 dark:bg-sky-500 text-white font-bold text-xs uppercase tracking-widest
                       shadow-[0_4px_0_0_#000] dark:shadow-[0_4px_0_0_#0369a1] 
                       active:translate-y-[4px] active:shadow-none transition-all duration-75"
          >
            Demo <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <Link 
            href={project.github}
            className="p-3.5 rounded-xl border-2 border-slate-100 dark:border-white/5 bg-white dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-50 transition-all active:scale-90"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}