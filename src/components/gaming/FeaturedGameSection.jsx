import React from "react";
import * as LucideIcons from "lucide-react";
import { GameCard } from "./GameCard";
import { cn } from "../common/Button";

const FeaturedCard = ({ featured }) => {
  if (!featured) return null;
  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 overflow-hidden flex flex-col w-full shadow-2xl border border-[#f97316]/20",
        "bg-[#111111]"
      )}
    >
      {/* Dynamic Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#f97316] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-[-10%] left-[-20%] w-72 h-72 bg-[#ea580c] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            <div className="text-[#f97316] text-[11px] font-bold tracking-[0.25em] uppercase drop-shadow-sm">
              {featured.badge}
            </div>
          </div>
          <h3 className="text-white text-4xl md:text-5xl font-black leading-tight drop-shadow-lg tracking-tight">
            {featured.title}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#fdba74] to-[#ea580c] rounded-full mt-4"></div>
        </div>
        
        <div className="space-y-3 mt-auto pb-2">
          {featured.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden transform hover:-translate-y-1 transition-transform w-full border border-[#f97316]/20 group flex justify-between items-center hover:border-[#f97316]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:translate-x-full transition-transform duration-1000 -skew-x-12"></div>
              
              <div className="flex flex-col relative z-10">
                <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
                  {stat.label}
                </div>
                <div className="text-white font-black text-[17px] drop-shadow-sm">
                  {stat.value}
                </div>
              </div>
              
              {stat.badge && (
                <div
                  className={cn(
                    "relative z-10 px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase shadow-md backdrop-blur-md border border-white/20",
                    stat.badge === "live"
                      ? "bg-emerald-500/80"
                      : "bg-rose-500/80"
                  )}
                >
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

export const FeaturedGameSection = ({ section, games, onGameClick }) => {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mb-8 mt-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {section.icon ? (
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center border border-white/10 shadow-lg">
              {React.createElement(
                LucideIcons[section.icon] || LucideIcons.Gamepad2,
                { size: 16, className: "text-[#38bdf8]" },
              )}
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
          )}
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide">
            {section.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-slate-300 hover:text-white transition-all text-xs font-bold flex items-center bg-[#111111]/80 hover:bg-[#222222] px-5 py-2.5 rounded-xl border border-white/5 shadow-md backdrop-blur-sm">
            More Live Dealers
            <LucideIcons.ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className="w-full xl:w-[400px] shrink-0 flex">
          <FeaturedCard featured={section.featured} />
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-5">
          {games.slice(0, 12).map((game) => (
            <GameCard key={game.id} game={game} onClick={onGameClick} className="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </div>
  );
};
