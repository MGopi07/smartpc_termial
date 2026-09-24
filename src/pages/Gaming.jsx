import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMachine } from '../context/MachineContext';
import { GamingLobby } from '../components/gaming/GamingLobby';
import { PageContainer } from '../components/layout/PageContainer';

export const Gaming = () => {
  const { isRegistered, machineData } = useMachine();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegistered) {
      navigate('/');
    }
  }, [isRegistered, navigate]);

  if (!isRegistered || !machineData) return null;

  return (
    <PageContainer>
      <GamingLobby />
    </PageContainer>
  );
};
