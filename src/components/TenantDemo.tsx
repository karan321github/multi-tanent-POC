import React from 'react';
import { useTenant } from '../contexts/TenantContext';
import { tenants } from '../config/tenants';

export const TenantDemo: React.FC = () => {
  const { currentTenant, setCurrentTenant } = useTenant();

  if (!currentTenant) return null;

  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={currentTenant.logo} alt={`${currentTenant.name} logo`} />
        <h1>{currentTenant.name}</h1>
      </header>

      <div className="card">
        <h2>Welcome to {currentTenant.name}</h2>
        <p>This is a demo of our multi-tenant theming system. The current theme uses:</p>
        <ul>
          <li>Primary Color: {currentTenant.theme.primary}</li>
          <li>Font: {currentTenant.theme.font.primary}</li>
          <li>Border Radius: {currentTenant.theme.borderRadius}</li>
        </ul>
      </div>

      <div className="tenant-switcher">
        <h3>Switch Tenant:</h3>
        {Object.values(tenants).map((tenant) => (
          <button
            key={tenant.id}
            onClick={() => setCurrentTenant(tenant)}
            className={`button ${currentTenant.id === tenant.id ? 'active' : ''}`}
          >
            {tenant.name}
          </button>
        ))}
      </div>
    </div>
  );
}; 