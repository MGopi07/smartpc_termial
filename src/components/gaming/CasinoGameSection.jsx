import React, { useRef } from "react";
import * as LucideIcons from "lucide-react";
import { GameCard } from "./GameCard";

export const CasinoGameSection = ({ section, games, onGameClick }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mb-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {section.icon ? (
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
              {React.createElement(LucideIcons[section.icon] || LucideIcons.Diamond, { size: 16, className: "text-[#f59e0b]" })}
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
          )}
          <h2 className="text-xl md:text-2xl font-black text-white tracking-wide">{section.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center bg-[#141c2c] px-3 py-1.5 rounded-lg border border-white/5">
            View all <LucideIcons.ChevronRight size={14} className="ml-1" />
          </button>
          <div className="flex gap-1 ml-2">
            <button 
              onClick={() => scroll("left")}
              className="bg-[#141c2c] hover:bg-[#1e293b] text-slate-300 transition-colors p-1.5 rounded-lg flex items-center justify-center border border-white/5 shadow-sm"
            >
              <LucideIcons.ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="bg-[#141c2c] hover:bg-[#1e293b] text-slate-300 transition-colors p-1.5 rounded-lg flex items-center justify-center border border-white/5 shadow-sm"
            >
              <LucideIcons.ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 md:gap-4 pb-4 pt-4 -mt-4 scrollbar-hide no-scrollbar snap-x snap-mandatory"
      >
        {games.map((game) => (
          <div 
            key={game.id} 
            className="snap-start shrink-0 w-[calc((100%-12px)/2)] md:w-[calc((100%-36px)/4)] lg:w-[calc((100%-96px)/7)]"
          >
            {/* Using aspect-square to make the cards significantly taller for Casino Games */}
            <GameCard game={game} onClick={onGameClick} className="aspect-square shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};
