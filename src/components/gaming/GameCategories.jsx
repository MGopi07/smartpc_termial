import React from "react";
import { CATEGORIES } from "../../data/games";
import { cn } from "../common/Button";
import * as LucideIcons from "lucide-react";

const CATEGORY_ICONS = {
  'All Games': 'LayoutGrid',
  'Spribe': 'Rocket',
  'Turbo': 'Zap',
  'Crash Game': 'TrendingUp',
  'Slots': 'Cherry',
  'Casino': 'Diamond',
  'Table Games': 'BookOpen',
  'Live Games': 'Video',
  'Virtual Sports': 'Trophy',
  'Lottery': 'Ticket',
  'Hot Games': 'Flame',
  'Mini Games': 'Package'
};

export const GameCategories = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 pt-4 scrollbar-hide no-scrollbar w-full px-4 max-w-[1800px] mx-auto xl:justify-center">
      {CATEGORIES.map((category) => {
        const IconName = CATEGORY_ICONS[category] || 'Gamepad2';
        const Icon = LucideIcons[IconName];

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "flex flex-col items-center justify-center p-2 min-w-[90px] md:min-w-[100px] h-[85px] md:h-[95px] rounded-xl transition-colors duration-200 border shadow-sm",
              activeCategory === category
                ? "bg-[#1a1a1a] border-[#f97316]/40"
                : "bg-[#111111] border-[#111111] opacity-80 hover:opacity-100 hover:border-[#333333]"
            )}
          >
            <Icon 
              size={26} 
              className={cn(
                "mb-2 transition-colors duration-200 drop-shadow-sm",
                activeCategory === category ? "text-[#fdba74]" : "text-[#f97316]/60"
              )}
              strokeWidth={2}
            />
            <span className={cn(
              "text-[11px] md:text-[12px] font-bold whitespace-nowrap transition-colors duration-200",
              activeCategory === category ? "text-white" : "text-slate-400"
            )}>
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
};
