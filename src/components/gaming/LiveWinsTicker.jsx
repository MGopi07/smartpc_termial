import React from "react";
import { Radio } from "lucide-react";

const WINS = [
  { name: "Faith W.", game: "Keno", amount: "19,372" },
  { name: "Ben H.", game: "Plinko", amount: "27,238" },
  { name: "Mary J.", game: "Plinko", amount: "12,957" },
  { name: "Victor B.", game: "Slots", amount: "4,500" },
  { name: "Sarah T.", game: "Crash", amount: "89,100" },
  { name: "Mike R.", game: "Roulette", amount: "12,450" },
];

export const LiveWinsTicker = () => {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mb-4">
      <div className="bg-[#141c2c] rounded-xl flex items-center overflow-hidden border border-white/5 shadow-md">
        {/* Live Badge */}
        <div className="flex-shrink-0 bg-[#ef4444] text-white px-4 py-2.5 flex items-center gap-2 font-bold text-xs tracking-wider z-10 m-1.5 rounded-lg shadow-sm">
          <Radio size={16} className="animate-pulse" />
          LIVE WINS
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative flex items-center h-full">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#141c2c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#141c2c] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content */}
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center py-2">
            {[...WINS, ...WINS, ...WINS].map((win, idx) => (
              <div key={idx} className="flex items-center mx-6 text-[13px]">
                <span className="text-white font-bold mr-1.5">{win.name}</span>
                <span className="text-slate-400 mr-2">won on {win.game}</span>
                <span className="text-[#f9d976] font-bold drop-shadow-[0_0_8px_rgba(249,217,118,0.2)]">
                  +N$ {win.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};
