import React from 'react';
import { MapPin } from 'lucide-react';
import { useMachine } from '../../context/MachineContext';

export const ShopLocation = () => {
  const { machineData } = useMachine();

  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-winbet-light flex items-center justify-center text-winbet-gold border border-white/10">
        <MapPin size={24} />
      </div>
      <div>
        <div className="font-bold text-lg">{machineData?.shopName || 'Unknown Shop'}</div>
        <div className="text-white/60 text-sm">{machineData?.location || 'Unknown Location'}</div>
      </div>
    </div>
  );
};
