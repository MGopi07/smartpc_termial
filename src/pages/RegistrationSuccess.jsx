import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Monitor,
  CreditCard,
  Crown,
  ArrowRight,
  MapPin,
  Store,
} from "lucide-react";
import { useMachine } from "../context/MachineContext";

export const RegistrationSuccess = () => {
  const { machineData, isRegistered } = useMachine();
  const navigate = useNavigate();

  useEffect(() => {
    // If no machine data is found, redirect back to registration
    if (!isRegistered) {
      navigate("/");
    }
  }, [isRegistered, navigate]);

  if (!isRegistered || !machineData) return null;

  const isSmartPC = machineData.machineType === "SMART_PC";

  return (
    <div className="flex h-screen w-full bg-[#1a0c2e] text-white font-sans overflow-hidden relative selection:bg-yellow-500/30">
      {/* Luxury Casino Background Effect (Same as Registration) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft emerald and gold ambient glows with pulsing animation */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2d1552] blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#33114a] blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[20%] right-[30%] w-[20vw] h-[20vw] rounded-full bg-yellow-600/10 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Subtle Felt/Diamond Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0Z' fill='%23d4af37' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="flex w-full h-full justify-center items-center p-4 sm:p-8 z-10 relative">
        <div className="w-full max-w-[540px] relative">
          {/* Header */}
          <div
            className="flex flex-col items-center mb-4 relative z-20 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <Crown
              size={32}
              className="text-[#d4af37] mb-2 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
            />
            <h1 className="text-3xl md:text-4xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#fff6d6] via-[#d4af37] to-[#aa8c2c] drop-shadow-sm font-semibold text-center uppercase">
              Success
            </h1>
          </div>

          {/* Luxury Glass Form Card */}
          <div
            className="bg-[#110820]/70 backdrop-blur-xl border border-[#d4af37]/20 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] relative animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "0.3s" }}
          >
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#d4af37]/50 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#d4af37]/50 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#d4af37]/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#d4af37]/50 rounded-br-2xl" />

            <div className="flex flex-col items-center">
              {/* Checkmark Animation */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-[20px] opacity-20 animate-pulse" />
                <div className="relative bg-gradient-to-b from-[#f9d976] via-[#d4af37] to-[#aa8c2c] p-[2px] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <div className="bg-[#1a0c2e] p-3 rounded-full">
                    <CheckCircle2
                      size={30}
                      className="text-[#d4af37]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-[#fff6d6] mb-6 text-center uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Registration Complete
              </h2>

              {/* Machine Details Card */}
              <div className="w-full bg-[#0a0512] border border-[#d4af37]/30 rounded-xl overflow-hidden mb-6 shadow-inner">
                <div className="p-4 border-b border-[#d4af37]/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.5)] animate-pulse" />
                  <span className="text-[#e6dec3] font-serif uppercase tracking-widest text-sm">
                    Machine Online
                  </span>
                </div>

                <div className="p-3 space-y-3">
                  {/* Machine ID */}
                  <div className="flex justify-between items-center border-b border-[#d4af37]/10 pb-3">
                    <span className="text-[#d4af37]/60 text-xs font-serif uppercase tracking-widest">
                      Machine ID
                    </span>
                    <span className="text-[#fff6d6] font-mono tracking-widest font-bold">
                      {machineData.machineId}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="flex justify-between items-center border-b border-[#d4af37]/10 pb-3">
                    <span className="text-[#d4af37]/60 text-xs font-serif uppercase tracking-widest">
                      Type
                    </span>
                    <span className="text-[#fff6d6] font-mono tracking-widest flex items-center gap-2">
                      {isSmartPC ? (
                        <Monitor size={16} className="text-[#d4af37]" />
                      ) : (
                        <CreditCard size={16} className="text-[#d4af37]" />
                      )}
                      {isSmartPC ? "SMART PC" : "TERMINAL"}
                    </span>
                  </div>

                  {/* Shop */}
                  <div className="flex justify-between items-center border-b border-[#d4af37]/10 pb-3">
                    <span className="text-[#d4af37]/60 text-xs font-serif uppercase tracking-widest">
                      Shop
                    </span>
                    <span className="text-[#fff6d6] font-serif tracking-widest flex items-center gap-2">
                      <Store size={14} className="text-[#d4af37]/70" />
                      {machineData.shopName}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#d4af37]/60 text-xs font-serif uppercase tracking-widest">
                      Location
                    </span>
                    <span className="text-[#fff6d6]/70 font-sans text-xs flex items-center gap-1">
                      <MapPin size={12} className="text-[#d4af37]/50" />
                      {machineData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <div
                className="w-full animate-fade-in-up"
                style={{ opacity: 0, animationDelay: "0.6s" }}
              >
                <button
                  onClick={() => navigate("/gaming")}
                  className="w-full relative group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-[0.98]"
                >
                  {/* Base Border */}
                  <div className="absolute inset-0 border border-[#d4af37]/40 rounded-2xl transition-all duration-500 group-hover:border-transparent" />

                  {/* Fill Background that fades in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#aa8c2c] via-[#f9d976] to-[#aa8c2c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Button Content */}
                  <div className="relative w-full py-4 flex justify-center items-center gap-3 z-10">
                    <span className="text-[#d4af37] group-hover:text-[#03120c] font-serif font-bold text-lg md:text-xl tracking-[0.2em] transition-colors duration-500">
                      Enter Platform
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-[#d4af37] group-hover:text-[#03120c] transition-colors duration-500 group-hover:translate-x-1"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
