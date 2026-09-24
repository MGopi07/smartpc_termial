import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MachineProvider } from './context/MachineContext';
import { Registration } from './pages/Registration';
import { RegistrationSuccess } from './pages/RegistrationSuccess';
import { Gaming } from './pages/Gaming';
import { SmartPCPreview, TerminalPreview } from './pages/Previews';
import { PageContainer } from './components/layout/PageContainer';

function App() {
  return (
    <MachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PageContainer><Registration /></PageContainer>} />
          <Route path="/registration-success" element={<PageContainer><RegistrationSuccess /></PageContainer>} />
          <Route path="/gaming" element={<Gaming />} />
          
          {/* Dev Routes */}
          {import.meta.env.DEV && (
            <>
              <Route path="/smart-pc" element={<SmartPCPreview />} />
              <Route path="/terminal" element={<TerminalPreview />} />
            </>
          )}
        </Routes>
      </Router>
    </MachineProvider>
  );
}

export default App;
