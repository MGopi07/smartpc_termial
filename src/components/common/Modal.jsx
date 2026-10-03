import React from 'react';
import { X } from 'lucide-react';
import { cn } from './Button';

export const Modal = ({ isOpen, onClose, num, title, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className={cn(
          "w-full max-w-[440px] bg-[#0a0a0a] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-[#f97316]/30 flex flex-col relative",
          className
        )}
      >
        {/* Header */}
        {(title || onClose) && (
          <div className="flex justify-center items-center py-5 relative">
            <div className="flex items-center gap-2">
              {num && (
                <div className="w-6 h-6 rounded-full bg-[#f97316]/20 flex items-center justify-center text-[#f97316] text-[11px] font-bold border border-[#f97316]/30">
                  {num}
                </div>
              )}
              {title && (
                <span className={num ? "text-[#fdba74] text-sm font-bold tracking-widest uppercase" : "text-red-500 text-sm font-bold tracking-widest uppercase"}>
                  {title}
                </span>
              )}
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="absolute right-5 w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#f97316] shadow-sm border border-[#f97316]/20 hover:text-[#fdba74] active:scale-95 transition-all z-10"
              >
                <X size={14} strokeWidth={3} />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 pb-6 flex flex-col items-center text-center relative z-0">
          {children}
        </div>
      </div>
    </div>
  );
};
