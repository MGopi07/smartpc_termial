import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMachine } from '../context/MachineContext';

export const SmartPCPreview = () => {
  const { registerMachine } = useMachine();
  const navigate = useNavigate();

  useEffect(() => {
    registerMachine('WB-SHOP-4821', 'SMART_PC');
    navigate('/gaming');
  }, [registerMachine, navigate]);

  return <div>Loading Smart PC Preview...</div>;
};

export const TerminalPreview = () => {
  const { registerMachine } = useMachine();
  const navigate = useNavigate();

  useEffect(() => {
    registerMachine('WB-SHOP-4821', 'TERMINAL');
    navigate('/gaming');
  }, [registerMachine, navigate]);

  return <div>Loading Terminal Preview...</div>;
};
