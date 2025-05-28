# Multi-Tenant Theming POC

This project demonstrates a production-ready implementation of dynamic CSS theming and favicon switching in a multi-tenant React application.

## Features

- Dynamic theme switching based on tenant context
- Tenant-specific styling (colors, fonts, layouts)
- Dynamic favicon updates
- Persistent tenant selection (localStorage)
- URL-based tenant switching
- Scalable theme configuration
- TypeScript support
- Styled-components for dynamic styling
- Performance optimized

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Build the project:
```bash
npm run build
```

## Usage

### Switching Tenants

You can switch between tenants in two ways:

1. Using the UI buttons in the demo
2. Using URL parameters: `/?tenant=tenant1`, `/?tenant=tenant2`, or `/?tenant=tenant3`

### Adding New Tenants

1. Add new tenant configuration in `src/config/tenants.ts`
2. Add tenant assets (logo, favicon) in the `public` directory
3. Update theme properties as needed

### Theme Configuration

Each tenant can customize:

- Primary and secondary colors
- Background color
- Text color
- Font families
- Border radius
- Logo
- Favicon

## Project Structure

```
src/
  ├── components/
  │   ├── ThemeProvider.tsx    # Styled-components theme provider
  │   └── TenantDemo.tsx       # Demo component
  ├── contexts/
  │   └── TenantContext.tsx    # Tenant state management
  ├── config/
  │   └── tenants.ts          # Tenant configurations
  ├── types/
  │   └── tenant.ts           # TypeScript definitions
  └── App.tsx                 # Main application
```

## Best Practices Implemented

1. **Performance**
   - Lazy loading of assets
   - Efficient theme switching without page reload
   - Optimized styled-components usage

2. **Maintainability**
   - TypeScript for type safety
   - Modular component structure
   - Clear separation of concerns

3. **Scalability**
   - Easy tenant addition
   - Configurable theming system
   - Extensible component architecture

4. **Security**
   - Tenant isolation
   - Safe asset loading
   - XSS prevention

## License

MIT 