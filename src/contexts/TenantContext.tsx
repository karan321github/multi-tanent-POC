import React, { createContext, useState, useContext, useEffect } from 'react';
import { Tenant, TenantContextType } from '../types/tenant';
import { tenants } from '../config/tenants';

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);

  useEffect(() => {
    // Simulate getting tenant from URL or localStorage
    const tenantId = new URLSearchParams(window.location.search).get('tenant') || localStorage.getItem('tenantId') || 'tenant1';
    const tenant = tenants[tenantId];
    
    if (tenant) {
      setCurrentTenant(tenant);
      localStorage.setItem('tenantId', tenant.id);
      
      // Update favicon for both light and dark modes
      const lightFaviconLink = document.querySelector("link[rel='icon'][media='(prefers-color-scheme: light)']") as HTMLLinkElement || document.createElement('link');
      const darkFaviconLink = document.querySelector("link[rel='icon'][media='(prefers-color-scheme: dark)']") as HTMLLinkElement || document.createElement('link');
      
      [lightFaviconLink, darkFaviconLink].forEach(link => {
        link.type = 'image/svg+xml';
        link.rel = 'icon';
        link.href = tenant.favicon;
      });

      lightFaviconLink.media = '(prefers-color-scheme: light)';
      darkFaviconLink.media = '(prefers-color-scheme: dark)';

      document.head.appendChild(lightFaviconLink);
      document.head.appendChild(darkFaviconLink);
      
      // Update document title
      document.title = `${tenant.name} - Multi-Tenant POC`;
    }
  }, []);

  const updateTenant = (tenant: Tenant) => {
    setCurrentTenant(tenant);
    localStorage.setItem('tenantId', tenant.id);
    
    // Update favicon when tenant changes
    const lightFaviconLink = document.querySelector("link[rel='icon'][media='(prefers-color-scheme: light)']") as HTMLLinkElement;
    const darkFaviconLink = document.querySelector("link[rel='icon'][media='(prefers-color-scheme: dark)']") as HTMLLinkElement;
    
    if (lightFaviconLink && darkFaviconLink) {
      lightFaviconLink.href = tenant.favicon;
      darkFaviconLink.href = tenant.favicon;
    }
  };

  return (
    <TenantContext.Provider value={{ currentTenant, setCurrentTenant: updateTenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}; 