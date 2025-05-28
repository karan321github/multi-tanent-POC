import React, { useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import '../styles/global.css';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  debugger;
  const { currentTenant } = useTenant();

  useEffect(() => {
    if (currentTenant) {
      // Update CSS variables when tenant changes
      document.documentElement.style.setProperty('--primary-color', currentTenant.theme.primary);
      document.documentElement.style.setProperty('--secondary-color', currentTenant.theme.secondary);
      document.documentElement.style.setProperty('--background-color', currentTenant.theme.background);
      document.documentElement.style.setProperty('--text-color', currentTenant.theme.text);
      document.documentElement.style.setProperty('--font-primary', currentTenant.theme.font.primary);
      document.documentElement.style.setProperty('--font-secondary', currentTenant.theme.font.secondary);
      document.documentElement.style.setProperty('--border-radius', currentTenant.theme.borderRadius);
    }
  }, [currentTenant]);

  if (!currentTenant) {
    return <div>Loading theme...</div>;
  }

  return <>{children}</>;
}; 