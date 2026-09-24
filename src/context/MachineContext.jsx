import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_SHOP, MOCK_MACHINES } from '../data/machineData';

const MachineContext = createContext(undefined);

export const MachineProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [machineData, setMachineData] = useState({
    machineType: null,
    machineId: null,
    shopName: null,
    location: null,
  });
  const [balance, setBalance] = useState(0);

  // Load from local storage on mount
  useEffect(() => {
    const storedConfig = localStorage.getItem('winbet_machine_config');
    if (storedConfig) {
      const config = JSON.parse(storedConfig);
      setMachineData(config);
      setIsRegistered(true);
      // For prototype, restore initial balance or keep 0
      setBalance(config.machineType === 'SMART_PC' ? MOCK_MACHINES.SMART_PC.startingBalance : MOCK_MACHINES.TERMINAL.startingBalance);
    }
  }, []);

  const registerMachine = (setupCode, type) => {
    // Validate setup code
    if (setupCode !== 'WB-SHOP-4821') {
      return { success: false, error: 'Invalid Setup Code' };
    }

    const mockMachine = type === 'SMART_PC' ? MOCK_MACHINES.SMART_PC : MOCK_MACHINES.TERMINAL;
    const config = {
      machineType: mockMachine.type,
      machineId: mockMachine.machineId,
      shopName: MOCK_SHOP.shopName,
      location: MOCK_SHOP.location,
    };

    localStorage.setItem('winbet_machine_config', JSON.stringify(config));
    setMachineData(config);
    setIsRegistered(true);
    setBalance(mockMachine.startingBalance);

    return { success: true };
  };

  const cashOut = () => {
    if (machineData.machineType !== 'SMART_PC') {
      return { success: false, error: 'Cash out not supported on this machine type' };
    }
    const amount = balance;
    setBalance(0);
    return { success: true, amount };
  };

  const printTicket = () => {
    if (machineData.machineType !== 'TERMINAL') {
      return { success: false, error: 'Print ticket not supported on this machine type' };
    }
    const amount = balance;
    setBalance(0);
    // Generate mock ticket number
    const ticketNumber = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;
    return { success: true, amount, ticketNumber };
  };

  const simulateHardwareDeposit = (amount) => {
    if (machineData.machineType === 'TERMINAL') {
      setBalance(prev => prev + amount);
    }
  };

  const unregisterMachine = () => {
    localStorage.removeItem('winbet_machine_config');
    setIsRegistered(false);
    setMachineData({
      machineType: null,
      machineId: null,
      shopName: null,
      location: null,
    });
    setBalance(0);
  };

  return (
    <MachineContext.Provider
      value={{
        isRegistered,
        machineData,
        balance,
        registerMachine,
        cashOut,
        printTicket,
        simulateHardwareDeposit,
        unregisterMachine
      }}
    >
      {children}
    </MachineContext.Provider>
  );
};

export const useMachine = () => {
  const context = useContext(MachineContext);
  if (context === undefined) {
    throw new Error('useMachine must be used within a MachineProvider');
  }
  return context;
};
