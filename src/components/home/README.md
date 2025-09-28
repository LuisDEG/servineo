# Estructura de Componentes Home

Esta carpeta contiene los componentes específicos de la página principal (Home) de Servineo, organizados según el **orden del Sprint**.

## 🚀 Orden del Sprint

**Secuencia de desarrollo de la Home Page:**

1. **Header** → `src/components/layout/Header/` ✅ **COMPLETADO**
2. **SearchBar** → `src/components/layout/Header/SearchBar.tsx` ✅ **COMPLETADO**  
3. **Carousel** → `src/components/home/Carousel/` 🔄 **PENDIENTE**
4. **Map** → `src/components/home/Map/` 🔄 **PENDIENTE**
5. **RecentJobs** → `src/components/home/RecentJobs/` 🔄 **PENDIENTE**
6. **ServicesList** → `src/components/home/ServicesList/` 🔄 **PENDIENTE**
7. **Footer** → `src/components/layout/Footer/` ✅ **COMPLETADO**

## Estructura de Carpetas

```
src/components/home/
├── Carousel/           # 🔄 Carrusel de imágenes (Sprint 3)
├── Map/                # 🔄 Mapa de servicios (Sprint 4)
├── RecentJobs/         # 🔄 Trabajos recientes (Sprint 5)
├── SearchBar/          # 🔄 Barra de búsqueda específica (Sprint 2)
├── ServicesList/       # 🔄 Lista de servicios (Sprint 6)
├── HeroSection/        # ✅ Sección principal (COMPLETADO)
├── FeaturedServices/  # ✅ Servicios destacados (COMPLETADO)
└── HowItWorks/         # ✅ Cómo funciona (COMPLETADO)
```

## Componentes Creados

### 1. HeroSection
- **Ubicación**: `src/components/home/HeroSection/`
- **Uso**: Sección principal de la página con título y descripción
- **Integración**: Se conecta con el SearchBar del layout

### 2. FeaturedServices
- **Ubicación**: `src/components/home/FeaturedServices/`
- **Uso**: Muestra los servicios más populares
- **Integración**: Lista de servicios destacados

### 3. HowItWorks
- **Ubicación**: `src/components/home/HowItWorks/`
- **Uso**: Explica el proceso de la plataforma
- **Integración**: Pasos del proceso de contratación

## 📋 Estado del Sprint

### ✅ **COMPLETADO**
- **Header**: Componente completo en `layout/Header/`
- **SearchBar**: Componente completo en `layout/Header/SearchBar.tsx`
- **Footer**: Componente completo en `layout/Footer/`

### 🔄 **PENDIENTE** (Orden del Sprint)
- **Carousel**: Carpeta creada, pendiente desarrollo
- **Map**: Carpeta creada, pendiente desarrollo  
- **RecentJobs**: Carpeta creada, pendiente desarrollo
- **ServicesList**: Carpeta creada, pendiente desarrollo

### 📝 **Próximos Pasos**
1. **Sprint 3**: Desarrollar Carousel
2. **Sprint 4**: Desarrollar Map
3. **Sprint 5**: Desarrollar RecentJobs
4. **Sprint 6**: Desarrollar ServicesList

## Convenciones

1. **Cada carpeta debe tener**:
   - Un archivo principal del componente (ej: `HeroSection.tsx`)
   - Un archivo `index.ts` para exportaciones
   - Documentación si es necesario

2. **Nomenclatura**:
   - Componentes en PascalCase
   - Archivos de exportación como `index.ts`
   - Props interfaces con sufijo `Props`

3. **Integración**:
   - Los componentes deben ser modulares y reutilizables
   - Usar TypeScript para tipado
   - Seguir las convenciones de Tailwind CSS del proyecto

## Ejemplo de Integración

```tsx
// En src/components/home/HeroSection/HeroSection.tsx
import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Encuentra el servicio que necesitas",
  subtitle = "Conectamos a personas con servicios de calidad",
  className = ""
}) => {
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-blue-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-xl text-blue-100">{subtitle}</p>
      </div>
    </section>
  );
};
```

## Notas para Desarrolladores

- **NO crear** Header, Footer o Navigation aquí (ya existen en `layout/`)
- Mantener la consistencia con el diseño existente
- Usar los hooks y utilidades del proyecto (`src/hooks/`, `src/utils/`)
- Seguir las convenciones de CSS con Tailwind
- Documentar nuevas funcionalidades importantes
