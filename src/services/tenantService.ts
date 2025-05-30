import { Tenant } from '../types/tenant';
import { mockTenants } from '../mock/tenantData';

interface TenantResponse {
  tenant: Tenant;
  globalCss: string;
}

export const tenantService = {
  async getTenantConfig(tenantId: string): Promise<TenantResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const tenantData = mockTenants[tenantId];
    if (!tenantData) {
      throw new Error(`Tenant ${tenantId} not found`);
    }
    
    return tenantData;
  },

  async loadGlobalCss(cssUrl: string): Promise<string> {
    // This method is now unused since we're getting CSS from mock data
    // but keeping it for future real API implementation
    const response = await fetch(cssUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch global CSS');
    }
    return response.text();
  }
}; 