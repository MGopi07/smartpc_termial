import React from "react";
import { Search } from "lucide-react";

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 mt-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={20} className="text-[#a1a1aa]" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Search"
          className="w-full bg-[#1e293b]/60 border border-[#334155]/60 rounded-xl py-3 pl-12 pr-4 text-[#f8fafc] placeholder-[#a1a1aa] focus:outline-none focus:border-[#d4af37]/50 focus:ring-1 focus:ring-[#d4af37]/50 transition-colors"
        />
      </div>
    </div>
  );
};
