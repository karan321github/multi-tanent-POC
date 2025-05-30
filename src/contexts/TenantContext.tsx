import React, { createContext, useState, useContext, useEffect } from 'react';
import { Tenant, TenantContextType } from '../types/tenant';
import { tenantService } from '../services/tenantService';

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTenant = async (tenantId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch tenant configuration from API
      const { tenant, globalCss } = await tenantService.getTenantConfig(tenantId);
      
      // Inject global CSS
      const styleElement = document.createElement('style');
      styleElement.textContent = globalCss;
      document.head.appendChild(styleElement);
      
      // Update favicon
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
      
      setCurrentTenant(tenant);
      localStorage.setItem('tenantId', tenantId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tenant configuration');
      console.error('Error loading tenant:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const tenantId = new URLSearchParams(window.location.search).get('tenant') || localStorage.getItem('tenantId') || 'tenant1';
    loadTenant(tenantId);
  }, []);

  const updateTenant = async (tenantId: string) => {
    await loadTenant(tenantId);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading tenant configuration...</div>;
  }

  return (
    <TenantContext.Provider value={{ currentTenant, setCurrentTenant: (tenant) => updateTenant(tenant.id) }}>
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