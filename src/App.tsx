import React from 'react';
import { TenantProvider } from './contexts/TenantContext';
import { ThemeProvider } from './components/ThemeProvider';
import { TenantDemo } from './components/TenantDemo';

function App() {
  return (
    <TenantProvider>
      <ThemeProvider>
        <TenantDemo />
      </ThemeProvider>
    </TenantProvider>
  );
}

export default App; 