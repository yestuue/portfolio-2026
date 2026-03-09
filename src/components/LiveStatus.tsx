"use client";

import { useEffect, useState } from "react";
import { Activity, GitCommit, Link as LinkIcon, MapPin } from "lucide-react";

export default function LiveStatus() {
  const [time, setTime] = useState<string>("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Initial Setting
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
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    };

    updateTime();
    // Refresh every 60 seconds
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050508] border-b border-gray-800 py-3 relative z-20">
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono font-medium transition-opacity duration-1000 ${pulse ? 'opacity-70' : 'opacity-100'}`}>
          
          {/* Item 1 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span>Live Apps: 3 Deployed | All Systems Operational</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <GitCommit className="w-4 h-4 text-[#00D4FF]" />
            <span className="truncate">Last Commit: 2h ago — refactor(auth): simplify</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center space-x-2 text-gray-400">
            <LinkIcon className="w-4 h-4 text-[#FFB347]" />
            <span className="truncate">Latest Contract: 0x8f...A1b2 on Mainnet</span>
          </div>

          {/* Item 4 */}
          <div className="flex items-center space-x-2 text-gray-400 lg:justify-end">
            <MapPin className="w-4 h-4 text-[#00D4FF]" />
            <span>
              Samuel Opeyemi · Lagos 🇳🇬 · <span className="text-white">{time || "Syncing..."} WAT</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
