import React, { useState } from 'react';
import { 
  X, RefreshCcw, ScanLine, Ban, AlertTriangle, Printer, Receipt, 
  Store, Check, RotateCcw, AlertCircle, Banknote, ShieldAlert
} from 'lucide-react';

const ThemeModal = ({ isOpen, onClose, num, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-[440px] bg-[#0a0a0a] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[#f97316]/30 flex flex-col relative">
        
        {/* Header */}
        <div className="flex justify-center items-center py-5 relative">
          <div className="flex items-center gap-2">
            {num && (
              <div className="w-6 h-6 rounded-full bg-[#f97316]/20 flex items-center justify-center text-[#f97316] text-[11px] font-bold border border-[#f97316]/30">
                {num}
              </div>
            )}
            <span className={num ? "text-[#fdba74] text-sm font-bold tracking-widest uppercase" : "text-red-500 text-sm font-bold tracking-widest uppercase"}>
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-5 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#f97316] shadow-sm border border-[#f97316]/20 hover:text-[#fdba74] active:scale-95 transition-all"
          >
            <X size={14} strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex flex-col items-center text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

const PrimaryButton = ({ children, onClick, icon: Icon }) => (
  <button 
    onClick={onClick}
    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] text-[#110820] font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

const RedButton = ({ children, onClick, icon: Icon }) => (
  <button 
    onClick={onClick}
    className="w-full py-3.5 px-4 bg-gradient-to-b from-red-500 to-red-700 text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(220,38,38,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] border border-red-400/50 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

const DarkButton = ({ children, onClick, icon: Icon }) => (
  <button 
    onClick={onClick}
    className="w-full py-3.5 px-4 bg-transparent text-white/70 font-bold rounded-xl border border-white/10 hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
  >
    {Icon && <Icon size={18} />}
    {children}
  </button>
);

const IconWrapper = ({ colorClass, bgClass, glowClass, children }) => (
  <div className="flex justify-center mb-5 relative">
    <div className={`absolute inset-0 ${glowClass} blur-[20px] rounded-full opacity-30 animate-pulse`}></div>
    <div className={`h-16 w-16 rounded-full bg-gradient-to-b ${bgClass} p-[2px] relative z-10 shadow-lg`}>
      <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center">
        <div className={`${colorClass}`}>{children}</div>
      </div>
    </div>
  </div>
);

const InnerPanel = ({ children }) => (
  <div className="w-full bg-[#161616] border border-[#f97316]/20 rounded-xl p-4 mb-5 text-left shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
    {children}
  </div>
);

const KeyValue = ({ label, value, valueColor = "text-white" }) => (
  <div className="flex justify-between items-center py-1.5">
    <span className="text-[#f97316]/60 text-[10px] font-bold tracking-[0.1em] uppercase">{label}</span>
    <span className={`${valueColor} text-[11px] font-bold`}>{value}</span>
  </div>
);

export const PopupShowcase = () => {
  const [activePopup, setActivePopup] = useState(null);

  const close = () => setActivePopup(null);

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 text-white overflow-y-auto font-sans relative">
      {/* Background accents */}
      <div className="absolute top-0 left-[20%] w-[40vw] h-[40vw] rounded-full bg-[#f97316]/5 blur-[120px] pointer-events-none" />

      <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffedd5] to-[#f97316] mb-2 uppercase tracking-widest relative z-10">
        System Theme Popups
      </h1>
      <p className="text-white/50 mb-10 text-sm max-w-2xl relative z-10">
        Click to view the 7 reference popups adapted to our signature orange and dark theme.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
        <button onClick={() => setActivePopup(1)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">01</span>
          Shop Balance Alert
        </button>
        <button onClick={() => setActivePopup(2)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">08</span>
          Bill Acceptor
        </button>
        <button onClick={() => setActivePopup(3)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">09</span>
          Scanner Alert
        </button>
        <button onClick={() => setActivePopup(4)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">10</span>
          Invalid Ticket
        </button>
        <button onClick={() => setActivePopup(5)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">11</span>
          Printer Alert
        </button>
        <button onClick={() => setActivePopup(6)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">07</span>
          Print Failure
        </button>
        <button onClick={() => setActivePopup(7)} className="p-5 bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl hover:border-[#f97316]/50 hover:bg-[#161616] transition-colors text-left group">
          <span className="text-xs text-[#f97316] font-bold block mb-1 group-hover:text-[#fdba74]">04</span>
          Print Cashout Ticket
        </button>
      </div>

      {/* 1. Shop Balance Alert */}
      <ThemeModal isOpen={activePopup === 1} onClose={close} title="Shop Balance Alert">
        <IconWrapper glowClass="bg-red-500" bgClass="from-red-400 to-red-600" colorClass="text-red-500">
          <Store size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-red-500 mb-2 uppercase tracking-wide">Shop Balance Too Low</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-4 px-2">
          Shop balance is lower than the requested note or ticket amount.
          <br /><span className="text-[#fdba74] font-bold mt-1 block">Please contact the shop cashier.</span>
        </p>
        <InnerPanel>
          <KeyValue label="Machine Credits:" value="Unchanged" />
          <div className="flex justify-between items-center py-1 mt-1">
            <span className="text-[#f97316]/60 text-[10px] font-bold tracking-[0.1em] uppercase">Rule:</span>
            <span className="text-[#fdba74] text-[11px] font-bold flex items-center gap-1">
              <ShieldAlert size={12} /> Shop Balance ≥ Required
            </span>
          </div>
        </InnerPanel>
        <RedButton onClick={close} icon={Check}>Understood</RedButton>
      </ThemeModal>

      {/* 2. Bill Acceptor */}
      <ThemeModal isOpen={activePopup === 2} onClose={close} num="08" title="Bill Acceptor">
        <IconWrapper glowClass="bg-[#f97316]" bgClass="from-[#fdba74] to-[#ea580c]" colorClass="text-[#f97316]">
          <Banknote size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-[#fdba74] mb-2 uppercase tracking-wide">Cash Not Accepted</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-5 px-2">
          The bill acceptor could not accept the note. Please smooth the bill and re-insert, try another note, or see the cashier.
        </p>
        <InnerPanel>
          <KeyValue label="Machine Credits:" value="Unchanged" />
          <KeyValue label="Acceptor Status:" value="Ready for retry" valueColor="text-[#fdba74]" />
        </InnerPanel>
        <div className="w-full space-y-3">
          <PrimaryButton onClick={close} icon={RefreshCcw}>Try Again</PrimaryButton>
          <DarkButton onClick={close} icon={X}>Close</DarkButton>
        </div>
      </ThemeModal>

      {/* 3. Scanner Alert */}
      <ThemeModal isOpen={activePopup === 3} onClose={close} num="09" title="Scanner Alert">
        <IconWrapper glowClass="bg-cyan-500" bgClass="from-cyan-400 to-cyan-600" colorClass="text-cyan-400">
          <ScanLine size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-cyan-400 mb-2 uppercase tracking-wide">Scan Again</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-5 px-2">
          The barcode scanner was waking up or the barcode was only partially read. Please re-scan your ticket barcode.
        </p>
        <InnerPanel>
          <KeyValue label="Machine Credits:" value="Unchanged" />
          <KeyValue label="Scanner Device:" value="Ready for scan" valueColor="text-cyan-400" />
        </InnerPanel>
        <PrimaryButton onClick={close} icon={ScanLine}>Scan Ticket Again</PrimaryButton>
      </ThemeModal>

      {/* 4. Invalid Ticket */}
      <ThemeModal isOpen={activePopup === 4} onClose={close} num="10" title="Invalid Ticket">
        <IconWrapper glowClass="bg-red-500" bgClass="from-red-400 to-red-600" colorClass="text-red-500">
          <Ban size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-red-500 mb-2 uppercase tracking-wide">Ticket Not Accepted</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-5 px-2">
          The scanned ticket is invalid, already redeemed, expired, or belongs to another shop.
        </p>
        <InnerPanel>
          <KeyValue label="Machine Credits:" value="Unchanged" />
          <KeyValue label="Validation Result:" value="REJECTED / USED" valueColor="text-red-500" />
        </InnerPanel>
        <PrimaryButton onClick={close} icon={Check}>Close</PrimaryButton>
      </ThemeModal>

      {/* 5. Printer Alert */}
      <ThemeModal isOpen={activePopup === 5} onClose={close} num="11" title="Printer Alert">
        <IconWrapper glowClass="bg-[#f97316]" bgClass="from-[#fdba74] to-[#ea580c]" colorClass="text-[#f97316]">
          <AlertTriangle size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-[#fdba74] mb-2 uppercase tracking-wide">Printer Required</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-5 px-2">
          Receipt printer is not connected or out of paper. No ticket was created.<br />
          <span className="font-bold text-white mt-1 block">Credits stay on this Terminal.</span>
        </p>
        <InnerPanel>
          <KeyValue label="Terminal Credits:" value="Safe on Machine" valueColor="text-emerald-500" />
          <KeyValue label="Action:" value="Connect printer & retry" valueColor="text-[#fdba74]" />
        </InnerPanel>
        <PrimaryButton onClick={close} icon={Check}>OK</PrimaryButton>
      </ThemeModal>

      {/* 6. Print Failure */}
      <ThemeModal isOpen={activePopup === 6} onClose={close} num="07" title="Print Failure">
        <IconWrapper glowClass="bg-red-500" bgClass="from-red-400 to-red-600" colorClass="text-red-500">
          <Printer size={28} />
        </IconWrapper>
        <h2 className="text-[17px] font-bold text-red-500 mb-2 uppercase tracking-wide">Cash-out Cancelled</h2>
        <p className="text-white/80 text-[13px] leading-relaxed mb-5 px-2">
          Ticket was issued on server, but paper printing failed on the receipt printer.
        </p>
        <div className="w-full bg-[#161616] border border-[#f97316]/20 rounded-xl p-5 mb-5 text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
          <div className="inline-block px-3 py-1 bg-emerald-900/40 border border-emerald-500/30 rounded-md text-emerald-500 text-[10px] font-bold tracking-widest mb-3 uppercase">
            FUNDS RESTORED
          </div>
          <div className="text-3xl font-black text-emerald-400 mb-2">+N$ 400.00</div>
          <div className="text-[#f97316]/60 text-[10px] uppercase tracking-wider">Credits have been returned to this Terminal session.</div>
        </div>
        <PrimaryButton onClick={close} icon={RotateCcw}>Back to Games</PrimaryButton>
      </ThemeModal>

      {/* 7. Print Cashout Ticket */}
      <ThemeModal isOpen={activePopup === 7} onClose={close} num="4" title="Print Cashout Ticket">
        <div className="w-full bg-[#161616] border border-[#f97316]/20 rounded-xl p-6 mb-5 text-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent"></div>
          
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#fdba74] to-[#ea580c] p-[2px] shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center text-[#f97316]">
                <Receipt size={20} />
              </div>
            </div>
          </div>
          <h3 className="text-[#fdba74] font-bold text-[15px] mb-1 uppercase tracking-wider">Print Voucher</h3>
          <p className="text-[#f97316]/60 text-[10px] tracking-widest uppercase mb-3">Voucher Cashout Amount</p>
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffedd5] to-[#f97316]">N$ 400.00</div>
        </div>

        <p className="text-white/90 text-[13px] font-medium leading-relaxed mb-5 px-2">
          Do you want to print a cashout ticket for <span className="text-[#fdba74] font-bold">N$ 400.00</span>?
        </p>

        <div className="w-full space-y-3 mb-4">
          <PrimaryButton onClick={close} icon={Printer}>Print Ticket</PrimaryButton>
          <DarkButton onClick={close} icon={X}>Cancel</DarkButton>
        </div>

        <div className="flex items-center justify-center gap-2 text-[#f97316]/60 text-[10px] uppercase tracking-widest">
          <Printer size={12} />
          <span>Ticket voucher will be printed by the terminal receipt printer.</span>
        </div>
      </ThemeModal>

    </div>
  );
};
