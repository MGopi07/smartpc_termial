import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "../common/Button";

export const GameCard = ({ game, onClick, className }) => {
  const Icon = LucideIcons[game.icon] || LucideIcons.Gamepad2;

  return (
    <div
      onClick={() => onClick(game)}
      className={cn(
        "game-card relative group aspect-[16/10] w-full rounded-lg cursor-pointer transition-transform duration-300 ease-out overflow-hidden shadow-sm hover:shadow-xl bg-[#1e293b]",
        className,
      )}
    >
      {game.image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url("${game.image}")` }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <LucideIcons.Play
                className="text-white fill-white ml-1"
                size={20}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-3 bg-[#1b2336] border border-white/5">
          <Icon
            size={36}
            className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
            strokeWidth={1.5}
          />
          <div className="text-center">
            <h3 className="text-white font-bold text-sm leading-tight mb-1">
              {game.title}
            </h3>
            <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">
              {game.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
