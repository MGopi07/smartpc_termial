import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMachine } from "../context/MachineContext";
import { Crown } from "lucide-react"; // Let's use a crown instead of W if they like it, or just W.

export const RegisterModal = ({ isOpen, onClose, machineType }) => {
  const [portal, setPortal] = useState("Winbet");
  const [token, setToken] = useState("WB-SHOP-4821");
  const [error, setError] = useState("");
  const { registerMachine } = useMachine();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const machineName = machineType === "SMART_PC" ? "Smart PC" : "Terminal";

  const handleRegister = () => {
    const result = registerMachine(token, machineType);
    if (result.success) {
      navigate("/registration-success");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      {/* Retained the same rounded-3xl layout but applied theme colors */}
      <div className="w-full max-w-[480px] bg-[#1c1c1c] border border-[#f97316]/20 rounded-3xl p-6 relative shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 rounded bg-gradient-to-br from-[#fdba74] to-[#ea580c] flex items-center justify-center text-black font-black italic text-xs shadow-[0_0_10px_rgba(249,115,22,0.3)]">
              SYS
            </div>
            <span className="text-white font-bold italic text-sm tracking-wider">
              GAME
            </span>
            <span className="text-[#f97316]/60 text-sm ml-1">
              · Machine Setup
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-[#f97316]/80 hover:text-[#f97316] font-medium shadow-sm border border-[#f97316]/10"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-[28px] font-bold text-[#ffedd5] leading-tight">
            Register {machineName}
          </h2>
          <p className="text-white/70 text-sm mt-1">
            Enter the portal and registration token for {machineName}.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-4">
          <div>
            <label className="block text-[#f97316] text-[10px] font-bold tracking-widest mb-1.5 uppercase">
              Portal
            </label>
            <input
              type="text"
              value={portal}
              onChange={(e) => setPortal(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/50 transition-all shadow-inner"
            />
          </div>

          <div>
            <label className="block text-[#f97316] text-[10px] font-bold tracking-widest mb-1.5 uppercase">
              Registration Token
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#f97316]/20 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316]/50 transition-all shadow-inner"
            />
          </div>
        </div>

        <p className="text-white/50 text-xs mb-8">
          Shop name and machine name appear after Register (from the existing
          API).
        </p>

        {error && <p className="text-red-400/90 text-sm mb-4">{error}</p>}

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-transparent border border-[#f97316]/30 text-[#e6dec3] font-semibold rounded-xl hover:bg-[#f97316]/20 hover:border-[#f97316] hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300 shadow-sm"
          >
            Close
          </button>
          <button
            onClick={handleRegister}
            className="px-8 py-2.5 bg-gradient-to-b from-[#fdba74] to-[#ea580c] text-[#03120c] font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_14px_rgba(249,115,22,0.3)]"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
