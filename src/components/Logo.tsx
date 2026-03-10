interface LogoProps {
  scrolled?: boolean;
}

export default function Logo({ scrolled }: LogoProps) {
  return (
    <div className="flex items-center group cursor-pointer select-none relative z-[60]">
      {/* THE BOLD NAME: Toggles color based on scroll state to maintain visibility */}
      <span className={`font-display text-2xl md:text-3xl font-black tracking-tighter transition-all duration-300 group-hover:tracking-tight ${
        scrolled 
          ? "text-white" 
          : "text-slate-900 dark:text-white"
      }`}>
        Big Sam
      </span>
      
      {/* THE SLASH: Always Brick-Brown for brand consistency */}
      <span className="text-2xl md:text-3xl font-black text-[#c2410c] transform rotate-12 inline-block ml-1 group-hover:rotate-0 transition-transform duration-300">
        /
      </span>
    </div>
  );
}