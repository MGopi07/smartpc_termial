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
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-sans font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(249,115,22,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">
          Cash Out
        </span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={!cashOutResult ? handleClose : undefined}
        num={!cashOutResult ? "4" : undefined}
        title={!cashOutResult ? "Print Cashout Ticket" : "Transfer Complete"}
      >
        {!cashOutResult ? (
          <div className="w-full text-center">
            <div className="w-full bg-[#110b1a] border border-white/5 rounded-xl p-6 mb-5 text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

              <div className="flex justify-center mb-4 relative">
                <div className="absolute inset-0 bg-yellow-500 blur-[20px] rounded-full opacity-40 animate-pulse"></div>
                <div className="h-16 w-16 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 p-[2px] relative z-10 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  <div className="w-full h-full bg-[#1e1332] rounded-full flex items-center justify-center text-yellow-500">
                    <Banknote size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-yellow-500 font-bold text-[15px] mb-1">
                System Cashout
              </h3>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mb-3">
                Amount Available
              </p>
              <div className="text-3xl font-black text-yellow-500">
                N$ {balance.toFixed(2)}
              </div>
            </div>

            <p className="text-white/90 text-[13px] font-medium leading-relaxed mb-5 px-2">
              Do you want to perform a system cashout for{" "}
              <span className="text-yellow-500 font-bold">
                N$ {balance.toFixed(2)}
              </span>
              ?
            </p>

            <div className="w-full space-y-2 mb-4">
              <button
                onClick={handleCashOut}
                className="w-full py-3.5 px-4 bg-gradient-to-b from-[#9333ea] to-[#7e22ce] text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(126,34,206,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] border border-purple-500/50 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Confirm
              </button>
              <button
                onClick={handleClose}
                className="w-full py-3.5 px-4 bg-[#110b1a] text-red-500 font-bold rounded-xl border border-white/5 hover:bg-[#1a1025] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full text-center">
            <div className="flex justify-center mb-5 relative">
              <div className="absolute inset-0 bg-emerald-500 blur-[20px] rounded-full opacity-40 animate-pulse"></div>
              <div className="h-16 w-16 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 p-[2px] relative z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="w-full h-full bg-[#1e1332] rounded-full flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={28} />
                </div>
              </div>
            </div>

            <h2 className="text-[17px] font-bold text-emerald-400 mb-5">
              Transfer Complete
            </h2>

            <div className="w-full bg-[#110b1a] border border-white/5 rounded-xl p-5 mb-5 text-center shadow-inner">
              <div className="inline-block px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 rounded-md text-emerald-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
                Amount Extracted
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                +N$ {cashOutResult.amount.toFixed(2)}
              </div>
              <div className="flex justify-between items-center py-2 mt-2 border-t border-white/5">
                <span className="text-white/40 text-[11px] font-medium">
                  System Balance
                </span>
                <span className="text-emerald-500 text-[11px] font-bold">
                  N$ 0.00
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 px-4 bg-gradient-to-b from-[#9333ea] to-[#7e22ce] text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(126,34,206,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] border border-purple-500/50 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Okay
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
