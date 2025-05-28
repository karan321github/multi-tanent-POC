export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  font: {
    primary: string;
    secondary: string;
  };
  borderRadius: string;
}

export interface Tenant {
  id: string;
  name: string;
  theme: Theme;
  favicon: string;
  logo: string;
}

export interface TenantContextType {
  currentTenant: Tenant | null;
  setCurrentTenant: (tenant: Tenant) => void;
} 