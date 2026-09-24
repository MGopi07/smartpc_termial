import React from 'react';
import { X } from 'lucide-react';
import { cn } from './Button';

export const Modal = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={cn("glass-card w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200", className)}>
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors z-50"
          >
            <X size={24} />
          </button>
        )}
        {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
        {children}
      </div>
    </div>
  );
};
