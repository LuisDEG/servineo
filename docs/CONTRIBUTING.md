# Guía de Contribución - Servineo

¡Gracias por tu interés en contribuir a Servineo! Esta guía te ayudará a entender cómo puedes contribuir al proyecto.

## 🚀 Cómo Contribuir

### 1. Fork del Repositorio
1. Ve a [servineo-anonimos](https://github.com/servineo-org/servineo-anonimos)
2. Haz clic en "Fork" en la esquina superior derecha
3. Clona tu fork localmente:
```bash
git clone https://github.com/tu-usuario/servineo-anonimos.git
cd servineo-anonimos
```

### 2. Configurar el Entorno de Desarrollo
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en modo desarrollo
npm run dev
```

### 3. Crear una Rama
```bash
# Crear y cambiar a nueva rama
git checkout -b feature/nueva-funcionalidad

# O para bugs
git checkout -b fix/correccion-bug
```

### 4. Hacer Cambios
- Sigue las convenciones de código
- Escribe tests para nuevas funcionalidades
- Actualiza documentación si es necesario
- Asegúrate de que todos los tests pasen

### 5. Commit y Push
```bash
# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: add new search functionality"

# Push a tu fork
git push origin feature/nueva-funcionalidad
```

### 6. Crear Pull Request
1. Ve a tu fork en GitHub
2. Haz clic en "New Pull Request"
3. Selecciona tu rama y la rama `main` del repositorio original
4. Completa el template del PR
5. Asigna revisores si es necesario

## 📝 Convenciones de Código

### Estructura de Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(scope): descripción

Ejemplos:
feat(auth): add OAuth login
fix(ui): resolve button alignment
docs(readme): update installation
test(auth): add login tests
```

### Tipos de Commits
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, etc.)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Cambios en build, dependencias, etc.

### Naming Conventions

#### Archivos y Carpetas
- **Componentes:** PascalCase (`UserProfile.tsx`)
- **Hooks:** camelCase con prefijo `use` (`useAuth.ts`)
- **Utilidades:** camelCase (`formatDate.ts`)
- **Tipos:** PascalCase (`UserType`)
- **Constantes:** UPPER_SNAKE_CASE (`API_ENDPOINTS`)

#### Variables y Funciones
- **Variables:** camelCase (`userName`, `isLoading`)
- **Funciones:** camelCase (`getUserData`, `handleSubmit`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`)

#### Componentes React
```typescript
// ✅ Correcto
interface UserProfileProps {
  user: User;
  onEdit: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit }) => {
  // ...
};

// ❌ Incorrecto
interface userprofileprops {
  user: user;
  onedit: (user: user) => void;
}
```

### Estructura de Componentes
```typescript
// 1. Imports
import React from 'react';
import { Button } from '@/components/ui';

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Event handlers
  const handleClick = () => {
    // ...
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default Component;
```

## 🧪 Testing

### Escribir Tests
```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Ejecutar Tests
```bash
# Todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Tests con coverage
npm run test:coverage

# Tests E2E
npm run test:e2e
```

## 📚 Documentación

### Documentar Componentes
```typescript
/**
 * Button component for user interactions
 * 
 * @param variant - Visual style variant
 * @param size - Size of the button
 * @param isLoading - Loading state
 * @param children - Button content
 */
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
```

### Actualizar README
- Agregar nuevas funcionalidades
- Actualizar instrucciones de instalación
- Documentar nuevas dependencias
- Actualizar screenshots si es necesario

## 🐛 Reportar Bugs

### Template de Bug Report
```markdown
## Descripción
Breve descripción del problema

## Pasos para Reproducir
1. Ve a '...'
2. Haz clic en '...'
3. Scroll hasta '...'
4. Ve el error

## Comportamiento Esperado
Qué debería pasar

## Comportamiento Actual
Qué está pasando

## Screenshots
Si aplica, agrega screenshots

## Ambiente
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 91, Firefox 89]
- Version: [e.g. 1.0.0]

## Información Adicional
Cualquier otra información relevante
```

## ✨ Solicitar Funcionalidades

### Template de Feature Request
```markdown
## ¿Tu solicitud está relacionada con un problema?
Descripción clara del problema

## Describe la solución que te gustaría
Descripción clara de lo que quieres que pase

## Describe alternativas que has considerado
Descripción de soluciones alternativas

## Contexto adicional
Cualquier otro contexto sobre la solicitud
```

## 🔍 Proceso de Code Review

### Antes de Solicitar Review
- [ ] Código compila sin errores
- [ ] Tests pasan
- [ ] Documentación actualizada
- [ ] Commits siguen convenciones
- [ ] No hay console.logs o código comentado

### Durante el Review
- [ ] Código es legible y mantenible
- [ ] Funcionalidad cumple requisitos
- [ ] Tests cubren casos importantes
- [ ] Performance es aceptable
- [ ] Seguridad no está comprometida

### Después del Review
- [ ] Aplicar feedback
- [ ] Resolver conflictos
- [ ] Actualizar tests si es necesario
- [ ] Confirmar que todo funciona

## 🚀 Release Process

### Versionado
Seguimos [Semantic Versioning](https://semver.org/):
- `MAJOR`: Cambios incompatibles
- `MINOR`: Nueva funcionalidad compatible
- `PATCH`: Correcciones compatibles

### Changelog
Mantener `CHANGELOG.md` actualizado con:
- Nuevas funcionalidades
- Cambios en APIs
- Correcciones de bugs
- Breaking changes

## 🤝 Comunicación

### Canales
- **Issues:** Para bugs y feature requests
- **Discussions:** Para preguntas generales
- **Pull Requests:** Para código
- **Slack:** Para comunicación rápida

### Etiquetas
- `bug`: Algo no funciona
- `enhancement`: Nueva funcionalidad
- `documentation`: Mejoras en docs
- `good first issue`: Bueno para principiantes
- `help wanted`: Necesita ayuda
- `priority: high`: Alta prioridad
- `priority: low`: Baja prioridad

## 📞 Contacto

### Preguntas
- **GitHub Issues:** Para bugs y features
- **GitHub Discussions:** Para preguntas
- **Email:** dev@servineo.com
- **Slack:** #servineo-contributors

### Mentores
- **Frontend:** [@mentor-frontend]
- **Backend:** [@mentor-backend]
- **DevOps:** [@mentor-devops]

## 🎉 Reconocimientos

### Contributors
Todos los contribuidores son reconocidos en:
- README.md
- CHANGELOG.md
- GitHub contributors page

### Badges
- **First Contribution:** Tu primer PR
- **Bug Hunter:** Encontrar y reportar bugs
- **Feature Creator:** Implementar nuevas funcionalidades
- **Documentation Hero:** Mejorar documentación

¡Gracias por contribuir a Servineo! 🚀
