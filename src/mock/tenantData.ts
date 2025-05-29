import { Tenant } from '../types/tenant';
import { favicons } from '../config/favicons';

interface MockTenantData {
  [key: string]: {
    tenant: Tenant;
    globalCss: string;
  };
}

export const mockTenants: MockTenantData = {
  tenant1: {
    tenant: {
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
      favicon: favicons.blue,
      logo: '/logo-blue.svg',
    },
    globalCss: `
      :root {
        /* These will be overridden by tenant-specific values */
        --primary-color: #1976d2;
        --secondary-color: #424242;
        --background-color: #ffffff;
        --text-color: #000000;
        --font-primary: 'Roboto', sans-serif;
        --font-secondary: 'Open Sans', sans-serif;
        --border-radius: 4px;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: var(--font-primary);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
      }
    `
  },
  tenant2: {
    tenant: {
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
      favicon: favicons.green,
      logo: '/logo-green.svg',
    },
    globalCss: `
      :root {
        /* These will be overridden by tenant-specific values */
        --primary-color: #2e7d32;
        --secondary-color: #37474f;
        --background-color: #f5f5f5;
        --text-color: #212121;
        --font-primary: 'Poppins', sans-serif;
        --font-secondary: 'Lato', sans-serif;
        --border-radius: 8px;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: var(--font-primary);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
      }
    `
  },
  tenant3: {
    tenant: {
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
      favicon: favicons.purple,
      logo: '/logo-purple.svg',
    },
    globalCss: `
      :root {
        /* These will be overridden by tenant-specific values */
        --primary-color: #7b1fa2;
        --secondary-color: #455a64;
        --background-color: #fafafa;
        --text-color: #1a1a1a;
        --font-primary: 'Montserrat', sans-serif;
        --font-secondary: 'Raleway', sans-serif;
        --border-radius: 12px;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: var(--font-primary);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-secondary);
      }
    `
  }
}; 