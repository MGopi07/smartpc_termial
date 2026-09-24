import React from "react";
import * as LucideIcons from "lucide-react";
import { GameCard } from "./GameCard";
import { cn } from "../common/Button";

const CrashFeaturedCard = ({ featured }) => {
  if (!featured) return null;
  return (
    <div className={cn("relative h-full rounded-3xl p-8 overflow-hidden flex flex-col min-h-[420px] shadow-2xl border border-white/10", "bg-gradient-to-br from-[#ef4444] via-[#dc2626] to-[#991b1b]")}>
      {/* Dynamic Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      
      {/* Decorative plane image */}
      <div className="absolute left-[-30px] bottom-5 w-[280px] h-[280px] opacity-100 pointer-events-none z-10 transform -rotate-12">
         <img 
            src="/images/red-plane-white.jpg" 
            alt="Crash Game Plane" 
            className="w-full h-full object-cover object-center mix-blend-multiply drop-shadow-2xl" 
            style={{ WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)' }} 
          />
      </div>

      <div className="relative z-20 flex-1 flex flex-col">
        {/* Top Right Badge */}
        <div className="absolute top-0 right-0 transform rotate-12 origin-top-right drop-shadow-xl z-20">
          <span className="text-[#facc15] font-black text-4xl md:text-5xl italic drop-shadow-md" style={{ WebkitTextStroke: '1px #b45309' }}>
            {featured.topRightBadge || "x100"}
          </span>
        </div>
      
        <div className="mb-6 w-full text-left relative z-20">
          <div className="text-white/90 text-[10px] font-bold tracking-[0.2em] mb-2 uppercase drop-shadow-sm">
            {featured.badge}
          </div>
          <h3 className="text-white text-3xl md:text-4xl font-black leading-tight drop-shadow-md">
            {featured.title}
          </h3>
        </div>
        
        <div className="space-y-2 mt-auto w-full z-20 flex flex-col items-end">
          {featured.stats.map((stat, idx) => (
            <div key={idx} className="bg-red-200/90 backdrop-blur-md rounded-xl p-3 shadow-lg relative overflow-hidden transform hover:scale-[1.02] transition-transform w-[85%] md:w-[80%] border border-white/20">
              <div className="text-slate-900 font-black text-[15px]">{stat.value}</div>
              <div className="text-slate-700 text-[9px] uppercase font-bold mt-0.5 tracking-wider">{stat.label}</div>
              {stat.badge && (
                <div className={cn("absolute right-2 top-2 px-1.5 py-0.5 rounded text-[9px] font-bold text-white uppercase shadow-sm", stat.badge === 'live' ? 'bg-emerald-500' : 'bg-rose-500')}>
                  {stat.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CrashGameSection = ({ section, games, onGameClick }) => {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {section.icon ? (
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
              {React.createElement(LucideIcons[section.icon] || LucideIcons.Rocket, { size: 24, className: "text-[#ef4444]" })}
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
          )}
          <h2 className="text-xl md:text-2xl font-black text-white tracking-wide">{section.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-slate-300 hover:text-white transition-colors text-xs font-bold flex items-center bg-transparent px-2 py-1 rounded-lg">
            More {section.title} 
            <LucideIcons.ChevronRight size={14} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-[320px] shrink-0">
          <CrashFeaturedCard featured={section.featured} />
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4">
          {games.slice(0, 12).map((game) => (
            <GameCard key={game.id} game={game} onClick={onGameClick} className="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </div>
  );
};
