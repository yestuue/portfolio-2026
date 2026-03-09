"use client";

import { useEffect, useState } from "react";
import { GitCommit, Link as LinkIcon, MapPin, Globe, Activity } from "lucide-react";

export default function LiveStatus({ region }: { region: string }) {
  const [time, setTime] = useState<string>("");

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

  const StatusItem = ({ icon: Icon, text, color }: { icon: any, text: string, color: string }) => (
    <div className="flex items-center gap-3 px-12 whitespace-nowrap group">
      <Icon className={`w-3.5 h-3.5 ${color} transition-transform group-hover:scale-125`} />
      {/* Changed to text-white and font-black for maximum visibility */}
      <span className="text-white font-mono text-[10px] tracking-[0.2em] font-black uppercase">
        {text}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-slate-950 border-b border-white/5 py-3 relative z-30 overflow-hidden">
      {/* Edge Fading Mask - Darker for more focus on the white text */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-100" />
      
      <div className="flex animate-marquee hover:[animation-play-state:paused] cursor-default">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center min-w-full">
            {/* Pulsing Status */}
            <div className="flex items-center gap-2.5 px-12 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-sky-400 font-mono text-[10px] font-black uppercase tracking-[0.2em]">
                System Active
              </span>
            </div>

            {/* Dynamic Items - All now featuring bold white text */}
            <StatusItem 
              icon={Globe} 
              color="text-emerald-400" 
              text={`Visitor Region: ${region}`} 
            />

            <StatusItem 
              icon={GitCommit} 
              color="text-sky-500" 
              text="Latest Commit: refactor(ui) to production" 
            />
            
            <StatusItem 
              icon={Activity} 
              color="text-emerald-500" 
              text="Uptime: 99.9%" 
            />

            <StatusItem 
              icon={MapPin} 
              color="text-sky-500" 
              text={`Lagos, NG · ${time || "Syncing..."} WAT`} 
            />
            
            <StatusItem 
              icon={LinkIcon} 
              color="text-amber-400" 
              text="Nodes: Mainnet v2.4.0" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}