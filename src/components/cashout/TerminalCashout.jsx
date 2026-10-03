import React, { useState } from "react";
import { useMachine } from "../../context/MachineContext";
import { Button } from "../common/Button";
import { Modal } from "../common/Modal";
import { Receipt } from "lucide-react";

export const TerminalCashout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketResult, setTicketResult] = useState(null);
  const { balance, printTicket } = useMachine();

  const handlePrint = () => {
    const result = printTicket();
    if (result.success) {
      setTicketResult(result);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTicketResult(null);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        disabled={balance <= 0}
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-sans font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(249,115,22,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">
          Print Ticket
        </span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={!ticketResult ? handleClose : undefined}
      >
        {!ticketResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-sans text-[#f97316] tracking-widest uppercase font-bold drop-shadow-md mb-8">
              Print Cashout Ticket
            </h2>
            <div className="mb-10 bg-[#0a0f1a] rounded-2xl p-8 border border-[#f97316]/20 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent"></div>
              <div className="text-[#f97316]/60 text-xs tracking-widest uppercase mb-3">
                Amount Available
              </div>
              <div className="text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffedd5] to-[#f97316]">
                N$ {balance.toFixed(2)}
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                onClick={handleClose}
                className="flex-1 py-4 text-sm tracking-widest uppercase border border-white/10 hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePrint}
                className="flex-1 py-4 text-sm tracking-widest uppercase bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Print Ticket
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-full text-center relative pt-8 pb-4">
            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#ea580c]/10 blur-[40px] pointer-events-none rounded-full"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="h-20 w-20 rounded-full border-[1.5px] border-[#ea580c] flex items-center justify-center">
                <Receipt size={32} className="text-[#ea580c]" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-[#ffedd5] mb-8 uppercase tracking-widest leading-tight">
              Ticket Printed<br />Successfully
            </h2>
            
            <div className="w-full bg-[#0d1017] border border-[#ea580c]/30 rounded-2xl p-6 mb-8 text-left shadow-inner">
              <div className="flex justify-between items-center mb-5">
                <span className="text-[#ea580c]/70 text-[10px] font-bold tracking-[0.15em] uppercase">Amount</span>
                <span className="text-2xl font-mono font-bold text-white tracking-widest">N$ {ticketResult.amount.toFixed(2)}</span>
              </div>
              <div className="h-px bg-white/5 w-full mb-5"></div>
              <div className="flex justify-between items-center">
                <span className="text-[#ea580c]/70 text-[10px] font-bold tracking-[0.15em] uppercase">Ticket Number</span>
                <span className="text-sm font-mono font-bold text-[#fdba74] tracking-widest uppercase">{ticketResult.ticketNumber}</span>
              </div>
            </div>
            
            <p className="text-white/40 mb-8 text-[9px] uppercase tracking-[0.15em] leading-loose px-2">
              Take this ticket to the cashier<br />or scan it on a terminal in this shop.
            </p>
            
            <button
              onClick={handleClose}
              className="w-full py-4 px-4 bg-gradient-to-b from-[#f97316] to-[#c2410c] text-black font-bold tracking-widest rounded-xl hover:brightness-110 active:scale-[0.98] transition-all uppercase text-sm"
            >
              Okay
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};
