# Guía de Desarrollo - Servineo

## 🚀 Configuración Inicial

### **1. Clonar y Configurar**
```bash
git clone [repository-url]
cd servineo
npm install
```

### **2. Variables de Entorno**
Crear archivo `.env.local`:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/servineo

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API Keys (si es necesario)
GOOGLE_MAPS_API_KEY=your-google-maps-key
```

## 🎯 Orden de Desarrollo del Sprint

### **Fase 1: Layout (COMPLETADO)**
- ✅ Header con navegación
- ✅ SearchBar integrado
- ✅ Footer con enlaces

### **Fase 2: Home Components (EN PROGRESO)**

#### **Sprint 3: Carousel**
```tsx
// Ubicación: src/components/home/Carousel/
// Funcionalidad: Carrusel de imágenes promocionales
// Tecnologías: Framer Motion + Lucide React
```

#### **Sprint 4: Map**
```tsx
// Ubicación: src/components/home/Map/
// Funcionalidad: Mapa interactivo de servicios
// Tecnologías: Google Maps API + React
```

#### **Sprint 5: RecentJobs**
```tsx
// Ubicación: src/components/home/RecentJobs/
// Funcionalidad: Trabajos recientes y testimonios
// Tecnologías: MongoDB + Next.js
```

#### **Sprint 6: ServicesList**
```tsx
// Ubicación: src/components/home/ServicesList/
// Funcionalidad: Lista detallada de servicios
// Tecnologías: MongoDB + Tailwind CSS
```

## 🛠️ Herramientas del Equipo

### **1. Next.js 14.2.0**
- **App Router**: Usar `src/app/` para rutas
- **Server Components**: Por defecto
- **Client Components**: Marcar con `'use client'`

### **2. TypeScript**
```tsx
// Interfaces estándar
interface User {
  id: string;
  name: string;
  email: string;
}

// Props de componentes
interface ComponentProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}
```

### **3. Tailwind CSS 3.4.0**
```tsx
// Clases personalizadas
className="bg-primary-500 text-white hover:bg-primary-600"

// Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### **4. Framer Motion 10.16.0**
```tsx
import { motion } from 'framer-motion';

// Animaciones básicas
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### **5. Lucide React 0.263.1**
```tsx
import { Search, User, MapPin } from 'lucide-react';

// Uso en componentes
<Search className="w-5 h-5 text-gray-500" />
```

## 📁 Estructura de Archivos

### **Componentes**
```
src/components/
├── layout/           # Header, Footer, Navigation
├── home/            # Componentes específicos de Home
│   ├── Carousel/    # Sprint 3
│   ├── Map/         # Sprint 4
│   ├── RecentJobs/  # Sprint 5
│   └── ServicesList/ # Sprint 6
├── ui/              # Componentes base
└── common/          # Componentes comunes
```

### **Cada Componente Debe Tener**
```
ComponentName/
├── ComponentName.tsx    # Componente principal
├── index.ts            # Exportaciones
├── types.ts           # Tipos específicos (opcional)
└── README.md          # Documentación (opcional)
```

## 🔄 Flujo de Trabajo

### **1. Crear Componente**
```bash
# Crear carpeta del componente
mkdir src/components/home/ComponentName

# Crear archivos base
touch src/components/home/ComponentName/ComponentName.tsx
touch src/components/home/ComponentName/index.ts
```

### **2. Estructura del Componente**
```tsx
'use client'; // Solo si necesita interactividad

import React from 'react';
import { motion } from 'framer-motion';
import { IconName } from 'lucide-react';

interface ComponentNameProps {
  // Props tipadas
}

const ComponentName: React.FC<ComponentNameProps> = ({ 
  prop1, 
  prop2 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="tailwind-classes"
    >
      {/* Contenido del componente */}
    </motion.div>
  );
};

export default ComponentName;
```

### **3. Exportar Componente**
```tsx
// index.ts
export { default as ComponentName } from './ComponentName';
```

## 🎨 Convenciones de Diseño

### **Paleta de Colores Servineo**
- **Primary**: `#2B31E0` - Azul principal
- **Secondary**: `#1AA7ED` - Azul secundario  
- **Accent**: `#2BDDE0` - Azul claro
- **Dark**: `#759AE0` - Azul oscuro
- **Purple**: `#5E2BE0` - Púrpura

### **Uso de Colores en Tailwind**
```tsx
// Colores principales
className="bg-servineo-primary text-white"
className="text-servineo-secondary"
className="border-servineo-accent"

// Estados
className="hover:bg-servineo-dark"
className="focus:ring-servineo-primary"
className="active:bg-servineo-purple"
```

### **Espaciado**
- **Padding**: p-4, p-6, p-8
- **Margin**: m-4, m-6, m-8
- **Gap**: gap-4, gap-6, gap-8

### **Tipografía**
- **Títulos**: text-2xl, text-3xl, text-4xl
- **Subtítulos**: text-lg, text-xl
- **Cuerpo**: text-base, text-sm

## 🧪 Testing

### **Ejecutar Tests**
```bash
npm run test
```

### **Linting**
```bash
npm run lint
```

### **Build**
```bash
npm run build
```

## 📝 Notas Importantes

1. **Versiones**: Usar exactamente las versiones especificadas
2. **Commits**: Mensajes descriptivos en español
3. **Branches**: `feature/component-name`
4. **Pull Requests**: Incluir descripción y screenshots
5. **Documentación**: Actualizar README.md de cada componente

## 🚨 Problemas Comunes

### **1. Dependencias**
```bash
# Si hay conflictos
rm -rf node_modules package-lock.json
npm install
```

### **2. TypeScript**
```bash
# Verificar tipos
npx tsc --noEmit
```

### **3. Tailwind**
```bash
# Regenerar CSS
npm run build
```
