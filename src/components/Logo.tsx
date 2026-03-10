export default function Logo() {
  return (
    <div className="flex items-center group cursor-pointer select-none">
      {/* THE BOLD NAME: Max weight for a 'Trusted' engineering stamp look */}
      <span className="font-display text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white transition-all group-hover:tracking-tight">
        Big Sam
      </span>
      
      {/* THE SLASH: Thick, Brick-Brown, and Tilted */}
      <span className="text-2xl md:text-3xl font-black text-[#c2410c] dark:text-[#c2410c] transform rotate-12 inline-block ml-1 group-hover:rotate-0 transition-transform duration-300">
        /
      </span>
    </div>
  );
}