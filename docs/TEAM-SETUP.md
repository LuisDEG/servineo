# Configuración del Equipo - Servineo

## 📦 Dependencias del Proyecto

### **Dependencias Principales**
```json
{
  "next": "^14.2.0",
  "react": "^18",
  "react-dom": "^18",
  "next-auth": "^4.24.0",
  "mongodb": "^6.5.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.263.1",
  "framer-motion": "^10.16.0"
}
```

### **Dependencias de Desarrollo**
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "14.2.0",
  "postcss": "^8",
  "autoprefixer": "^10"
}
```

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar linting
npm run lint
```

## 🎨 Configuración de Tailwind CSS

### **Versión**: 3.4.0
### **Configuración**: `tailwind.config.js`

```javascript
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        servineo: {
          primary: '#2B31E0',
          secondary: '#1AA7ED',
          accent: '#2BDDE0',
          dark: '#759AE0',
          purple: '#5E2BE0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### **Paleta de Colores Servineo**
- **Primary**: `#2B31E0` - Azul principal
- **Secondary**: `#1AA7ED` - Azul secundario
- **Accent**: `#2BDDE0` - Azul claro
- **Dark**: `#759AE0` - Azul oscuro
- **Purple**: `#5E2BE0` - Púrpura

### **Uso de Colores**
```tsx
// Ejemplos de uso
className="bg-servineo-primary text-white"
className="text-servineo-secondary"
className="border-servineo-accent"
className="hover:bg-servineo-dark"
```

## 🔧 Librerías Específicas del Equipo

### **1. Next.js 14.2.0**
- Framework principal
- App Router habilitado
- Server Components

### **2. Next-Auth 4.24.0**
- Autenticación
- Configuración en `src/lib/auth.ts`

### **3. MongoDB 6.5.0**
- Base de datos
- Configuración en `src/lib/mongodb.ts`

### **4. Lucide React 0.263.1**
- Iconos
- Uso: `import { IconName } from 'lucide-react'`

### **5. Framer Motion 10.16.0**
- Animaciones
- Uso: `import { motion } from 'framer-motion'`

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router (Next.js 14)
├── components/         # Componentes reutilizables
│   ├── layout/         # Header, Footer, Navigation
│   ├── home/           # Componentes específicos de Home
│   ├── ui/             # Componentes base (Button, Input, etc.)
│   └── common/         # Componentes comunes
├── lib/                # Utilidades y configuraciones
├── hooks/              # Custom hooks
├── types/              # Tipos TypeScript
├── utils/              # Funciones utilitarias
└── styles/             # Estilos globales
```

## 🎯 Convenciones del Equipo

### **1. Nomenclatura**
- Componentes: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase con prefijo `use` (`useAuth.ts`)
- Utilidades: camelCase (`formatDate.ts`)
- Tipos: PascalCase con sufijo `Types` (`UserTypes.ts`)

### **2. Estructura de Componentes**
```tsx
// Ejemplo de estructura estándar
import React from 'react';

interface ComponentProps {
  // Props tipadas
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    <div className="tailwind-classes">
      {/* Contenido */}
    </div>
  );
};

export default Component;
```

### **3. Imports**
```tsx
// Orden de imports
import React from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Imports locales
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
```

## 🔄 Orden del Sprint

1. **Header** ✅ (Layout)
2. **SearchBar** ✅ (Layout)
3. **Carousel** 🔄 (Home)
4. **Map** 🔄 (Home)
5. **RecentJobs** 🔄 (Home)
6. **ServicesList** 🔄 (Home)
7. **Footer** ✅ (Layout)

## 📝 Notas Importantes

- **Versiones fijas**: Usar exactamente las versiones especificadas
- **TypeScript**: Configurado con tipos estrictos
- **ESLint**: Configurado con reglas de Next.js
- **Tailwind**: Versión 3.4.0 con configuración personalizada
- **Animaciones**: Framer Motion para transiciones suaves
- **Iconos**: Lucide React para consistencia visual
