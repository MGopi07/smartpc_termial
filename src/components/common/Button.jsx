import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-95';
  const variants = {
    primary: 'bg-gradient-to-r from-winbet-gold to-yellow-500 text-winbet-navy shadow-lg shadow-winbet-gold/20 hover:brightness-110 px-8 py-4 text-lg',
    secondary: 'bg-winbet-light text-white border border-white/10 hover:bg-white/10 px-8 py-4 text-lg',
    outline: 'bg-transparent border-2 border-winbet-gold text-winbet-gold hover:bg-winbet-gold/10 px-6 py-3',
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
