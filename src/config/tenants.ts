import { Tenant } from '../types/tenant';

export const tenants: Record<string, Tenant> = {
  tenant1: {
    id: 'tenant1',
    name: 'Blue Corp',
    theme: {
      primary: '#1976d2',
      secondary: '#424242',
      background: '#ffffff',
      text: '#000000',
      font: {
        primary: "'Roboto', sans-serif",
        secondary: "'Open Sans', sans-serif",
      },
      borderRadius: '4px',
    },
    favicon: '/favicon-blue.svg',
    logo: '/logo-blue.svg',
  },
  tenant2: {
    id: 'tenant2',
    name: 'Green Inc',
    theme: {
      primary: '#2e7d32',
      secondary: '#37474f',
      background: '#f5f5f5',
      text: '#212121',
      font: {
        primary: "'Poppins', sans-serif",
        secondary: "'Lato', sans-serif",
      },
      borderRadius: '8px',
    },
    favicon: '/favicon-green.svg',
    logo: '/logo-green.svg',
  },
  tenant3: {
    id: 'tenant3',
    name: 'Purple Co',
    theme: {
      primary: '#7b1fa2',
      secondary: '#455a64',
      background: '#fafafa',
      text: '#1a1a1a',
      font: {
        primary: "'Montserrat', sans-serif",
        secondary: "'Raleway', sans-serif",
      },
      borderRadius: '12px',
    },
    favicon: '/favicon-purple.svg',
    logo: '/logo-purple.svg',
  },
}; 