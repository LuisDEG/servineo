# Referencia de Colores - Servineo

## 🎨 Paleta de Colores Oficial

### **Colores Principales**

| Color | Código | Uso | Ejemplo |
|-------|--------|-----|---------|
| **Primary** | `#2B31E0` | Botones principales, enlaces | `bg-servineo-primary` |
| **Secondary** | `#1AA7ED` | Botones secundarios, acentos | `bg-servineo-secondary` |
| **Accent** | `#2BDDE0` | Textos destacados, highlights | `text-servineo-accent` |
| **Dark** | `#759AE0` | Hover states, bordes | `hover:bg-servineo-dark` |
| **Purple** | `#5E2BE0` | Elementos especiales | `bg-servineo-purple` |

## 🎯 Uso por Componente

### **Header**
```tsx
// Logo y navegación
className="text-servineo-primary"

// Botones de usuario
className="bg-servineo-primary hover:bg-servineo-dark"
```

### **Hero Section**
```tsx
// Fondo gradiente
className="bg-gradient-to-r from-servineo-primary to-servineo-secondary"

// Texto destacado
className="text-servineo-accent"
```

### **Botones**
```tsx
// Botón primario
className="bg-servineo-primary text-white hover:bg-servineo-dark"

// Botón secundario
className="bg-servineo-secondary text-white hover:bg-servineo-accent"

// Botón outline
className="border-2 border-servineo-primary text-servineo-primary hover:bg-servineo-primary hover:text-white"
```

### **Cards y Contenedores**
```tsx
// Card con hover
className="bg-white border-2 border-transparent hover:border-servineo-primary"

// Badge o etiqueta
className="bg-servineo-accent text-servineo-primary"
```

### **Formularios**
```tsx
// Input focus
className="focus:ring-servineo-primary focus:border-servineo-primary"

// Label
className="text-servineo-primary"
```

## 🔄 Estados Interactivos

### **Hover States**
```tsx
// Botones
className="hover:bg-servineo-dark"
className="hover:border-servineo-primary"

// Enlaces
className="hover:text-servineo-secondary"
```

### **Focus States**
```tsx
// Inputs
className="focus:ring-servineo-primary"
className="focus:border-servineo-primary"

// Botones
className="focus:ring-2 focus:ring-servineo-primary"
```

### **Active States**
```tsx
// Botones activos
className="active:bg-servineo-purple"
className="active:scale-95"
```

## 📱 Responsive Design

### **Gradientes**
```tsx
// Gradiente principal
className="bg-gradient-to-r from-servineo-primary to-servineo-secondary"

// Gradiente vertical
className="bg-gradient-to-b from-servineo-primary to-servineo-dark"
```

### **Sombras**
```tsx
// Sombra con color
className="shadow-lg shadow-servineo-primary/20"

// Sombra hover
className="hover:shadow-xl hover:shadow-servineo-primary/30"
```

## 🎨 Combinaciones Recomendadas

### **Esquema Principal**
```tsx
// Fondo: Blanco
// Primario: servineo-primary
// Secundario: servineo-secondary
// Acento: servineo-accent
```

### **Esquema Oscuro**
```tsx
// Fondo: servineo-dark
// Texto: Blanco
// Acentos: servineo-accent
```

### **Esquema de Éxito**
```tsx
// Fondo: servineo-accent
// Texto: servineo-primary
// Bordes: servineo-primary
```

## 🚫 Colores a Evitar

- **No usar** colores genéricos como `blue-500`, `red-500`
- **No usar** colores que no estén en la paleta oficial
- **No usar** colores con muy poco contraste
- **No usar** más de 3 colores por componente

## ✅ Mejores Prácticas

1. **Consistencia**: Usar siempre la paleta oficial
2. **Contraste**: Asegurar legibilidad
3. **Jerarquía**: Usar colores para crear jerarquía visual
4. **Accesibilidad**: Verificar contraste mínimo 4.5:1
5. **Responsive**: Probar en diferentes dispositivos

## 🔧 Herramientas

### **Verificar Contraste**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Oracle](https://colororacle.org/)

### **Generar Paleta**
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

## 📝 Notas de Desarrollo

- **Siempre usar** las clases de Tailwind con `servineo-`
- **Documentar** cualquier color personalizado
- **Probar** en modo claro y oscuro
- **Validar** accesibilidad con herramientas
