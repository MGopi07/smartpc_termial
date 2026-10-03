import React from "react";
import { ShieldCheck } from "lucide-react";
import { useMachine } from "../../context/MachineContext";
import { SmartPCCashOut } from "../cashout/SmartPCCashOut";
import { TerminalCashout } from "../cashout/TerminalCashout";

export const MachineHeader = () => {
  const { machineData, balance } = useMachine();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#0a0a0a] border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] z-30 relative">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {/* Logo Text */}
          <div className="text-[#ea580c] font-sans font-black text-2xl tracking-wider">
            SYSGAME
          </div>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-white/10"></div>

        {/* Machine Info */}
        <div className="flex flex-col justify-center">
          <div className="text-[#e2d8b5] font-sans font-bold tracking-widest text-sm uppercase">
            {machineData?.machineId || "SMART-PC-03"}
          </div>
          <div className="flex items-center gap-2 text-[#22c55e] text-[10px] font-bold mt-0.5 tracking-wider uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
            ONLINE
          </div>
        </div>
      </div>

      {/* Balance and Cash Out Pill Container */}
      <div className="flex items-center p-1.5 bg-[#111111] border border-[#f97316]/40 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_4px_15px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-start justify-center px-8 min-w-[170px]">
          <span className="text-[#f97316] text-[10px] font-black tracking-[0.35em] uppercase mb-1.5 opacity-90 flex items-center gap-2 w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shadow-[0_0_4px_#f97316] animate-pulse shrink-0"></span>
            Balance
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[#f97316] text-sm font-bold opacity-80">
              N$:
            </span>
            <span className="text-2xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffedd5] via-[#fdba74] to-[#c59b27] drop-shadow-[0_0_8px_rgba(253,186,116,0.3)] tracking-wide leading-none">
              {balance.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="shrink-0">
          {machineData?.machineType === "SMART_PC" ? (
            <SmartPCCashOut />
          ) : (
            <TerminalCashout />
          )}
        </div>
      </div>
    </header>
  );
};
