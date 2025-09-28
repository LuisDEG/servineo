# Guía de Deployment - Servineo

Esta guía cubre el proceso de deployment de Servineo desde desarrollo hasta producción.

## 🚀 Ambientes

### Development
- **URL:** `http://localhost:3000`
- **Base de datos:** MongoDB local o Atlas (dev)
- **Variables:** `.env.local`

### Staging
- **URL:** `servineo-staging.vercel.app`
- **Base de datos:** MongoDB Atlas (staging)
- **Variables:** Vercel Environment Variables

### Production
- **URL:** `servineo.com`
- **Base de datos:** MongoDB Atlas (production)
- **Variables:** Vercel Environment Variables

## 📋 Prerequisitos

### Herramientas Necesarias
- Node.js 18+ 
- npm o yarn
- Git
- Cuenta de Vercel
- Cuenta de MongoDB Atlas

### Variables de Entorno
```bash
# Base de datos
MONGODB_URI=mongodb+srv://...
MONGODB_DB=servineo

# Autenticación
NEXTAUTH_URL=https://servineo.com
NEXTAUTH_SECRET=your-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Maps API
GOOGLE_MAPS_API_KEY=your-maps-key

# App
NEXT_PUBLIC_APP_URL=https://servineo.com
NEXT_PUBLIC_APP_NAME=Servineo
```

## 🛠️ Configuración Inicial

### 1. Clonar Repositorio
```bash
git clone https://github.com/servineo-org/servineo-anonimos.git
cd servineo-anonimos
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp .env.example .env.local

# Editar variables
nano .env.local
```

### 4. Configurar Base de Datos
```bash
# Conectar a MongoDB Atlas
# Crear cluster
# Obtener connection string
# Configurar MONGODB_URI
```

## 🚀 Deployment a Vercel

### 1. Conectar Repositorio
1. Ir a [Vercel Dashboard](https://vercel.com/dashboard)
2. Hacer clic en "New Project"
3. Importar repositorio de GitHub
4. Configurar proyecto

### 2. Configurar Variables de Entorno
En Vercel Dashboard:
1. Ir a Settings → Environment Variables
2. Agregar todas las variables necesarias
3. Configurar para cada ambiente (Development, Preview, Production)

### 3. Configurar Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 4. Deploy Automático
- **Push a `main`:** Deploy a producción
- **Push a otras ramas:** Deploy a preview
- **Pull Requests:** Deploy a preview automático

## 🔧 Configuración de Base de Datos

### MongoDB Atlas Setup
1. **Crear Cluster**
   - Seleccionar región
   - Configurar tier (M0 para desarrollo)
   - Configurar acceso

2. **Configurar Usuario**
   ```bash
   Username: servineo-user
   Password: [generar password seguro]
   ```

3. **Configurar Network Access**
   - Agregar IP 0.0.0.0/0 (para desarrollo)
   - Para producción, agregar IPs específicas

4. **Obtener Connection String**
   ```
   mongodb+srv://servineo-user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Configurar Colecciones
```javascript
// Colecciones necesarias
- users
- services
- jobs
- fixers
- reviews
- notifications
```

## 🌐 Configuración de Dominio

### 1. Configurar DNS
```bash
# Añadir registros DNS
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 2. Configurar en Vercel
1. Ir a Settings → Domains
2. Agregar dominio personalizado
3. Configurar SSL automático

### 3. Verificar SSL
```bash
# Verificar certificado
curl -I https://servineo.com
```

## 📊 Monitoreo y Analytics

### 1. Vercel Analytics
```typescript
// next.config.js
module.exports = {
  analytics: {
    id: 'your-analytics-id',
  },
}
```

### 2. Speed Insights
```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 3. Error Tracking (Futuro)
```typescript
// Configurar Sentry
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

## 🔒 Seguridad

### 1. Variables de Entorno
- Nunca commitear `.env.local`
- Usar Vercel Environment Variables
- Rotar secrets regularmente

### 2. HTTPS
- SSL automático en Vercel
- Redirigir HTTP a HTTPS
- Configurar HSTS headers

### 3. CORS
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://servineo.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};
```

## 🚀 CI/CD Pipeline

### 1. GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run test
```

### 2. Pre-commit Hooks
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## 📈 Performance

### 1. Optimizaciones de Build
```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components'],
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
};
```

### 2. Bundle Analysis
```bash
# Analizar bundle
npm run build
npm run analyze
```

### 3. Lighthouse CI
```yaml
# lighthouse-ci.yml
lighthouse:
  ci:
    collect:
      url: ['https://servineo.com']
    assert:
      assertions:
        'categories:performance': ['error', { minScore: 0.9 }]
        'categories:accessibility': ['error', { minScore: 0.9 }]
```

## 🔄 Rollback Strategy

### 1. Vercel Rollback
```bash
# Rollback a versión anterior
vercel rollback [deployment-url]
```

### 2. Database Rollback
```bash
# Restaurar backup de base de datos
mongorestore --uri="mongodb+srv://..." --db=servineo backup/
```

### 3. Feature Flags
```typescript
// Usar feature flags para rollback rápido
const useNewFeature = process.env.NEXT_PUBLIC_NEW_FEATURE === 'true';
```

## 📋 Checklist de Deployment

### Pre-deployment
- [ ] Tests pasan
- [ ] Build exitoso
- [ ] Variables de entorno configuradas
- [ ] Base de datos migrada
- [ ] SSL configurado
- [ ] Dominio configurado

### Post-deployment
- [ ] Verificar funcionalidad básica
- [ ] Verificar autenticación
- [ ] Verificar base de datos
- [ ] Verificar performance
- [ ] Verificar analytics
- [ ] Notificar al equipo

## 🚨 Troubleshooting

### Problemas Comunes

#### Build Fails
```bash
# Verificar logs
vercel logs [deployment-url]

# Soluciones comunes
npm install --legacy-peer-deps
rm -rf node_modules package-lock.json
npm install
```

#### Database Connection
```bash
# Verificar connection string
# Verificar network access en MongoDB Atlas
# Verificar variables de entorno
```

#### SSL Issues
```bash
# Verificar DNS propagation
nslookup servineo.com

# Verificar certificado
openssl s_client -connect servineo.com:443
```

### Logs y Debugging
```bash
# Ver logs de Vercel
vercel logs [deployment-url]

# Ver logs de MongoDB Atlas
# Ir a Monitoring → Logs
```

## 📞 Soporte

### Contacto
- **Email:** devops@servineo.com
- **Slack:** #servineo-deployment
- **GitHub:** Issues con label `deployment`

### Documentación Adicional
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [MongoDB Atlas](https://docs.atlas.mongodb.com)

## 🎯 Próximos Pasos

### Mejoras Futuras
- [ ] CDN para assets estáticos
- [ ] Edge functions para performance
- [ ] Multi-region deployment
- [ ] Automated testing en staging
- [ ] Blue-green deployment
- [ ] Database sharding
- [ ] Caching strategy
- [ ] Monitoring avanzado
