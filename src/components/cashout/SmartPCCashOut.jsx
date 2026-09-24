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
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#aa8c2c] via-[#f9d976] to-[#aa8c2c] text-[#110820] font-serif font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(212,175,55,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">
          Cash Out
        </span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={!cashOutResult ? handleClose : undefined}
        className="!bg-[#050510] border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(0,255,255,0.15)] !rounded-none"
      >
        {!cashOutResult ? (
          <div className="flex flex-col items-center text-center pt-4 relative px-2">
            <div className="w-20 h-20 bg-[#050510] border border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center mb-6 relative transform rotate-45">
              <div className="transform -rotate-45">
                <Banknote
                  size={36}
                  className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                />
              </div>
            </div>

            <h2 className="text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 tracking-[0.1em] uppercase font-mono filter drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">
              System Cashout
            </h2>

            <p className="text-cyan-200/60 mb-8 font-mono text-[10px] tracking-widest uppercase">
              Initializing Withdrawal Sequence...
            </p>

            <div className="w-full bg-[#050510] border-l-4 border-r-4 border-cyan-500 p-6 mb-8 relative overflow-hidden group shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:translate-x-full transition-transform duration-700 -skew-x-12"></div>

              <div className="text-cyan-400/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 font-mono relative z-10">
                Available Amount
              </div>
              <div className="text-5xl font-black text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] font-mono tracking-tight relative z-10">
                N$ {balance.toFixed(2)}
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="flex-1 py-4 text-xs font-mono tracking-[0.2em] uppercase border border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-300 transition-all !rounded-none shadow-[0_0_15px_rgba(217,70,239,0.1)]"
              >
                Abort
              </Button>
              <Button
                onClick={handleCashOut}
                className="flex-1 py-4 text-xs font-mono tracking-[0.2em] uppercase bg-cyan-500 text-black border-transparent hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all !rounded-none"
              >
                COnfirm
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 pt-4 relative px-2">
            <div className="w-20 h-20 border border-green-400 bg-green-500/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(74,222,128,0.4)] relative transform rotate-45">
              <div className="transform -rotate-45">
                <CheckCircle2
                  size={40}
                  className="text-green-400 relative z-10 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                />
              </div>
            </div>

            <h2 className="text-3xl font-black text-green-400 mb-2 tracking-[0.1em] uppercase font-mono drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]">
              Transfer Complete
            </h2>
            <p className="text-green-400/60 font-mono tracking-[0.2em] uppercase text-[10px] mb-8">
              Funds successfully extracted
            </p>

            <div className="w-full border-l-4 border-green-400 bg-green-500/5 p-6 mb-8 relative">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(74,222,128,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

              <div className="text-green-400/60 text-[10px] font-mono uppercase tracking-[0.2em] mb-2 relative z-10">
                Amount Extracted
              </div>
              <div className="text-4xl font-black text-green-300 mb-6 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)] font-mono relative z-10">
                N$ {cashOutResult.amount.toFixed(2)}
              </div>

              <div className="h-px w-full bg-green-400/20 mb-6 relative z-10"></div>

              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider relative z-10">
                <div className="text-green-400/40">System Balance</div>
                <div className="text-green-400/80 font-bold">N$ 0.00</div>
              </div>
            </div>

            <Button
              onClick={handleClose}
              className="w-full py-4 text-xs font-mono tracking-[0.2em] uppercase border border-green-400/50 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black transition-all !rounded-none shadow-[0_0_15px_rgba(74,222,128,0.2)]"
            >
              Return to Lobby
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};
