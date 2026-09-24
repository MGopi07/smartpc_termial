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
        className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#aa8c2c] via-[#f9d976] to-[#aa8c2c] text-[#110820] font-serif font-bold hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(212,175,55,0.3)]"
      >
        <span className="text-sm tracking-[0.2em] uppercase drop-shadow-sm">Print Ticket</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={!ticketResult ? handleClose : undefined}>
        {!ticketResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Print Cashout Ticket</h2>
            <div className="mb-8">
              <div className="text-white/60 mb-2">Amount</div>
              <div className="text-5xl font-black text-winbet-gold">N$ {balance.toFixed(2)}</div>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={handleClose} className="flex-1">Cancel</Button>
              <Button onClick={handlePrint} className="flex-1">Print Ticket</Button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-winbet-gold/20 flex items-center justify-center">
                <Receipt size={40} className="text-winbet-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8">Ticket Printed Successfully</h2>
            
            <div className="bg-white/5 rounded-xl p-6 mb-8 text-left border border-white/10 border-dashed">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white/60">Amount</span>
                <span className="text-3xl font-black text-white">N$ {ticketResult.amount.toFixed(2)}</span>
              </div>
              <div className="h-px bg-white/10 w-full mb-4 border-dashed"></div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Ticket Number</span>
                <span className="text-xl font-mono text-winbet-gold font-bold">{ticketResult.ticketNumber}</span>
              </div>
            </div>
            
            <p className="text-white/60 mb-8 text-sm">
              Take this ticket to the cashier<br/>
              or scan it on a Terminal in this shop.
            </p>
            
            <Button onClick={handleClose} className="w-full">Back to Games</Button>
          </div>
        )}
      </Modal>
    </>
  );
};
