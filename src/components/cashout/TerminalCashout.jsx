import React, { useState } from 'react';
import { useMachine } from '../../context/MachineContext';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { Receipt } from 'lucide-react';

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
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-serif font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(249,115,22,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">Print Ticket</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={!ticketResult ? handleClose : undefined}>
        {!ticketResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-serif text-[#f97316] tracking-widest uppercase font-bold drop-shadow-md mb-8">
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
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <div className="flex justify-center mb-6 relative">
              <div className="absolute inset-0 bg-[#f97316] blur-[30px] rounded-full opacity-20 animate-pulse"></div>
              <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#fdba74] to-[#ea580c] p-[2px] shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <div className="w-full h-full bg-[#0a0f1a] rounded-full flex items-center justify-center">
                  <Receipt size={44} className="text-[#f97316]" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-serif text-[#ffedd5] tracking-wide uppercase font-bold mb-8">
              Ticket Printed Successfully
            </h2>
            
            <div className="bg-[#0a0f1a] rounded-2xl p-6 mb-8 text-left border border-[#f97316]/30 shadow-inner relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#f97316]/50 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#f97316]/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#f97316]/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#f97316]/50 rounded-br-2xl"></div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-[#f97316]/60 text-xs font-serif uppercase tracking-widest">Amount</span>
                <span className="text-3xl font-mono font-black text-white drop-shadow-md">N$ {ticketResult.amount.toFixed(2)}</span>
              </div>
              <div className="h-px bg-[#f97316]/20 w-full mb-4 border-dashed border-[#f97316]/30"></div>
              <div className="flex justify-between items-center">
                <span className="text-[#f97316]/60 text-xs font-serif uppercase tracking-widest">Ticket Number</span>
                <span className="text-xl font-mono text-[#fdba74] font-bold tracking-widest">{ticketResult.ticketNumber}</span>
              </div>
            </div>
            
            <p className="text-white/50 mb-8 text-[10px] uppercase tracking-[0.15em] leading-relaxed">
              Take this ticket to the cashier<br/>
              or scan it on a Terminal in this shop.
            </p>
            
            <Button 
              onClick={handleClose} 
              className="w-full py-4 text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-bold hover:brightness-110 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              Okay
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
};
