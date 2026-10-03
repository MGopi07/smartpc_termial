import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Monitor, CreditCard, Shield, Crown } from "lucide-react";
import { useMachine } from "../context/MachineContext";
import { cn } from "../components/common/Button";
import { RegisterModal } from "../components/RegisterModal";

export const Registration = () => {
  const [machineType, setMachineType] = useState("SMART_PC");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { registerMachine } = useMachine();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="flex h-screen w-full bg-black text-white font-sans overflow-hidden relative selection:bg-[#f97316]/30">
      {/* Luxury Casino Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft emerald and gold ambient glows with pulsing animation */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neutral-900 blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-black blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[20%] right-[30%] w-[20vw] h-[20vw] rounded-full bg-[#f97316]/5 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Subtle Felt/Diamond Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0Z' fill='%23f97316' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="flex w-full h-full justify-center items-center p-4 sm:p-8 z-10 relative">
        <div className="w-full max-w-[540px] relative">
          {/* Logo Header (Fades in first) */}
          <div
            className="flex flex-col items-center mb-5 relative z-20 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <Crown
              size={32}
              className="text-[#f97316] mb-2 drop-shadow-[0_2px_10px_rgba(249,115,22,0.4)]"
            />
            <h1 className="text-4xl md:text-5xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#ffedd5] via-[#f97316] to-[#ea580c] drop-shadow-sm font-semibold text-center uppercase">
              Registration  
            </h1>
            {/* <div className="flex items-center gap-4 mt-4 w-full px-8 opacity-70">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f97316]/40" />
              <span className="text-[#f97316] text-xs font-serif tracking-[0.3em] uppercase">Registration</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f97316]/40" />
            </div> */}
          </div>

          {/* Luxury Glass Form Card (Fades in second) */}
          <div
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#f97316]/20 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] relative animate-fade-in-up"
            style={{ opacity: 0, animationDelay: "0.3s" }}
          >
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#f97316]/50 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#f97316]/50 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#f97316]/50 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#f97316]/50 rounded-br-2xl" />

            <form onSubmit={handleRegister} className="space-y-6">
              {/* Authentication Code Removed */}

              {/* Machine Type Selection */}
              <div
                className="animate-fade-in-up"
                style={{ opacity: 0, animationDelay: "0.5s" }}
              >
                <label className="block text-[#e6dec3] font-serif text-sm tracking-widest uppercase mb-4 text-center">
                  Select Machine Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MachineSelectCard
                    title="Smart PC"
                    type="SMART_PC"
                    icon={<Monitor size={28} strokeWidth={1.5} />}
                    selected={machineType === "SMART_PC"}
                    onClick={() => setMachineType("SMART_PC")}
                  />

                  <MachineSelectCard
                    title="Terminal"
                    type="TERMINAL"
                    icon={<CreditCard size={28} strokeWidth={1.5} />}
                    selected={machineType === "TERMINAL"}
                    onClick={() => setMachineType("TERMINAL")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div
                className="animate-fade-in-up"
                style={{ opacity: 0, animationDelay: "0.6s" }}
              >
                <button
                  type="submit"
                  className="w-full relative group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] active:scale-[0.98]"
                >
                  {/* Base Border */}
                  <div className="absolute inset-0 border border-[#f97316]/40 rounded-2xl transition-all duration-500 group-hover:border-transparent" />

                  {/* Fill Background that fades in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] via-[#fdba74] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Button Content */}
                  <div className="relative w-full py-4 flex justify-center items-center z-10">
                    <span className="text-[#f97316] group-hover:text-[#03120c] font-serif font-bold text-sm tracking-[0.2em] uppercase transition-colors duration-500">
                      Authenticate
                    </span>
                  </div>
                </button>
              </div>

              <div
                className="flex items-center justify-center gap-2 text-white/70 text-xs font-serif tracking-widest mt-6 animate-fade-in-up"
                style={{ opacity: 0, animationDelay: "0.7s" }}
              >
                <Shield size={14} />
                <span>SECURE CONNECTION</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <RegisterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        machineType={machineType}
      />
    </div>
  );
};

// Sub-components

const MachineSelectCard = ({ title, icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-500 rounded-xl overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f97316]/10",
      )}
    >
      {/* Outer Border/Background */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 z-0",
          selected
            ? "bg-[#0a0a0a]"
            : "border border-[#f97316]/20 bg-black/50 group-hover:border-[#f97316]/40 group-hover:bg-[#f97316]/5",
        )}
      >
        {selected && (
          <>
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#f97316_360deg)] opacity-80" />
            <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-[11px] shadow-[inset_0_0_20px_rgba(249,115,22,0.15)]" />
          </>
        )}
      </div>

      {/* Icon Area */}
      <div
        className={cn(
          "mb-4 transition-all duration-500 z-10",
          selected
            ? "text-[#fdba74] drop-shadow-[0_0_15px_rgba(253,186,116,0.5)] scale-110"
            : "text-[#f97316]/60 group-hover:text-[#f97316]",
        )}
      >
        {icon}
      </div>

      {/* Text Content */}
      <div className="text-center z-10">
        <h3
          className={cn(
            "text-sm md:text-base font-serif tracking-widest uppercase transition-colors",
            selected ? "text-[#ffedd5] font-bold" : "text-[#e6dec3]/70",
          )}
        >
          {title}
        </h3>
      </div>

      {/* Selected Indicator Dot */}
      {selected && (
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#fdba74] shadow-[0_0_8px_#fdba74] animate-pulse" />
      )}
    </div>
  );
};
