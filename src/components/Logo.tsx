export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* 1. The Dynamic Icon Box */}
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white transition-all group-hover:rotate-6 bg-sky-500 shadow-lg shadow-sky-500/20">
        S
      </div>

      {/* 2. Samuel Opeyemi Text */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-bold tracking-tight text-slate-900">
          Samuel
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-sky-600">
          Opeyemi
        </span>
      </div>
    </div>
  );
}