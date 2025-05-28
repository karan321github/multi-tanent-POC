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
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = tenant.favicon;
      document.getElementsByTagName('head')[0].appendChild(link);
      
      // Update document title
      document.title = `${tenant.name} - Multi-Tenant POC`;
    }
  }, []);

  const updateTenant = (tenant: Tenant) => {
    setCurrentTenant(tenant);
    localStorage.setItem('tenantId', tenant.id);
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