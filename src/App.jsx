import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MachineProvider } from './context/MachineContext';
import { Registration } from './pages/Registration';
import { RegistrationSuccess } from './pages/RegistrationSuccess';
import { Gaming } from './pages/Gaming';
import { SmartPCPreview, TerminalPreview } from './pages/Previews';
import { PopupShowcase } from './pages/PopupShowcase';
import { PageContainer } from './components/layout/PageContainer';

function App() {
  return (
    <MachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/gaming" element={<Gaming />} />
          
          {/* Dev Routes */}
          {import.meta.env.DEV && (
            <>
              <Route path="/smart-pc" element={<SmartPCPreview />} />
              <Route path="/terminal" element={<TerminalPreview />} />
              <Route path="/popups" element={<PopupShowcase />} />
            </>
          )}
        </Routes>
      </Router>
    </MachineProvider>
  );
}

export default App;
