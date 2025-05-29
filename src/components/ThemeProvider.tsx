import React, { useEffect } from 'react';
import { useTenant } from '../contexts/TenantContext';
import { mockTenants } from '../mock/tenantData';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentTenant } = useTenant();

  useEffect(() => {
    if (!currentTenant) return;

    // Inject Global CSS
    const styleId = 'dynamic-tenant-style';
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();

    const tenantData = mockTenants[currentTenant.id];
    if (tenantData) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = tenantData.globalCss;
      document.head.appendChild(style);
    }

    // Update favicon
    const faviconId = 'dynamic-favicon';
    let faviconEl = document.getElementById(faviconId) as HTMLLinkElement;

    if (!faviconEl) {
      faviconEl = document.createElement('link');
      faviconEl.id = faviconId;
      faviconEl.rel = 'icon';
      document.head.appendChild(faviconEl);
    }

    faviconEl.href = currentTenant.favicon;
  }, [currentTenant]);

  if (!currentTenant) {
    return <div>Loading theme...</div>;
  }

  return <>{children}</>;
};
