import React, { useState } from "react";
import { useMachine } from "../../context/MachineContext";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import { Banknote, CheckCircle2 } from "lucide-react";

export const SmartPCCashOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cashOutResult, setCashOutResult] = useState(null);
  const { balance, cashOut } = useMachine();

  const handleCashOut = () => {
    const result = cashOut();
    if (result.success) {
      setCashOutResult(result);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCashOutResult(null);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        disabled={balance <= 0}
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-serif font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(249,115,22,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">
          Cash Out
        </span>
      </button>

          <Modal
            isOpen={isModalOpen}
            onClose={!cashOutResult ? handleClose : undefined}
            className="!bg-[#0a0a0a] border border-[#f97316]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] !rounded-3xl p-8"
          >
          {!cashOutResult ? (
            <div className="flex flex-col items-center text-center pt-2 relative">
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-[#f97316] blur-[20px] rounded-full opacity-10 animate-pulse"></div>
                <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#fdba74] to-[#ea580c] p-[2px] shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center">
                    <Banknote size={44} className="text-[#f97316]" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-[#f97316] tracking-widest uppercase font-bold drop-shadow-md mb-8">
                System Cashout
              </h2>

              <div className="w-full mb-10 bg-[#161616] rounded-2xl p-8 border border-[#f97316]/20 relative overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]">
                {/* Glowing orb behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-[#f97316]/10 blur-[40px] rounded-full pointer-events-none"></div>
                
                {/* Top highlight line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f97316]/80 to-transparent"></div>
                
                <div className="text-[#e6dec3]/70 text-[11px] font-sans font-bold tracking-[0.3em] uppercase mb-4 relative z-10">
                  Available Amount
                </div>
                <div className="text-4xl md:text-5xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#ffedd5] to-[#f97316] tracking-tight relative z-10 flex items-baseline justify-center gap-2 drop-shadow-lg">
                  <span className="text-2xl md:text-3xl text-[#f97316] bg-none bg-clip-border text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#ea580c]">N$</span>
                  {balance.toFixed(2)}
                </div>
              </div>

              <div className="flex gap-4 w-full">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="flex-1 py-4 text-sm tracking-widest uppercase border border-white/10 bg-transparent hover:bg-white/5 rounded-2xl"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCashOut}
                  className="flex-1 py-4 text-sm tracking-widest uppercase bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(249,115,22,0.4)] rounded-2xl"
                >
                  Confirm
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 pt-2 relative">
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-emerald-500 blur-[20px] rounded-full opacity-10 animate-pulse"></div>
                <div className="h-24 w-24 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-600 p-[2px] shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center">
                    <CheckCircle2 size={44} className="text-emerald-400" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-sans text-white tracking-widest uppercase font-black mb-8 drop-shadow-md">
                Transfer Complete
              </h2>

              <div className="w-full bg-[#161616] rounded-2xl p-6 mb-8 text-left border border-emerald-500/20 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-emerald-500/5 blur-[40px] rounded-full pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-5 relative z-10">
                  <span className="text-emerald-400/60 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">Amount Extracted</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl text-emerald-400 font-sans font-bold">N$</span>
                    <span className="text-3xl font-sans font-black text-white tracking-tight drop-shadow-md">{cashOutResult.amount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="h-px w-full mb-5 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent relative z-10"></div>

                <div className="flex justify-between items-center relative z-10">
                  <span className="text-emerald-400/60 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">System Balance</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm text-emerald-500/70 font-sans font-bold">N$</span>
                    <span className="text-xl font-sans font-black text-emerald-500 tracking-tight">0.00</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-4 text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-emerald-500 to-emerald-600 text-[#03120c] font-black hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-2xl border border-emerald-400/50"
              >
                Okay
              </button>
            </div>
          )}
        </Modal>
    </>
  );
};
