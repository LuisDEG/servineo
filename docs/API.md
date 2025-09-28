# API Documentation - Servineo

Esta documentación describe la API REST de Servineo para la comunicación entre frontend y backend.

## 🌐 Base URL

- **Development:** `http://localhost:3000/api`
- **Staging:** `https://servineo-staging.vercel.app/api`
- **Production:** `https://servineo.com/api`

## 🔐 Autenticación

### Headers Requeridos
```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Obtener Token
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "user@example.com",
      "role": "user"
    }
  }
}
```

## 👤 Usuarios

### Obtener Perfil de Usuario
```http
GET /api/users/me
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "phone": "+1234567890",
    "address": {
      "street": "123 Main St",
      "city": "Madrid",
      "state": "Madrid",
      "zipCode": "28001",
      "country": "Spain",
      "coordinates": {
        "latitude": 40.4168,
        "longitude": -3.7038
      }
    },
    "role": "user",
    "isVerified": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### Actualizar Perfil
```http
PUT /api/users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Doe Updated",
  "phone": "+1234567890",
  "address": {
    "street": "456 New St",
    "city": "Barcelona",
    "state": "Barcelona",
    "zipCode": "08001",
    "country": "Spain"
  }
}
```

### Registrar Usuario
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "role": "user"
}
```

## 🔧 Servicios

### Listar Servicios
```http
GET /api/services?category=plumbing&limit=10&page=1
```

**Query Parameters:**
- `category` (string): Filtrar por categoría
- `limit` (number): Número de resultados (default: 20)
- `page` (number): Página (default: 1)
- `search` (string): Búsqueda por nombre

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "service_id",
      "name": "Reparación de grifos",
      "description": "Reparación y mantenimiento de grifos",
      "category": {
        "id": "plumbing",
        "name": "Plomería",
        "icon": "🔧",
        "color": "#3B82F6"
      },
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Obtener Servicio
```http
GET /api/services/{id}
```

### Crear Servicio (Admin)
```http
POST /api/services
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nuevo Servicio",
  "description": "Descripción del servicio",
  "categoryId": "plumbing",
  "isActive": true
}
```

## 👷 Fixers

### Listar Fixers
```http
GET /api/fixers?services=plumbing,electrical&location=Madrid&radius=25
```

**Query Parameters:**
- `services` (string[]): Servicios ofrecidos
- `location` (string): Ubicación para búsqueda
- `radius` (number): Radio en km (default: 25)
- `rating` (number): Rating mínimo
- `availability` (boolean): Solo fixers disponibles

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "fixer_id",
      "name": "Carlos Mendoza",
      "email": "carlos@example.com",
      "phone": "+1234567890",
      "address": {
        "street": "123 Main St",
        "city": "Madrid",
        "state": "Madrid",
        "zipCode": "28001",
        "country": "Spain",
        "coordinates": {
          "latitude": 40.4168,
          "longitude": -3.7038
        }
      },
      "services": ["plumbing", "electrical"],
      "experience": 5,
      "rating": 4.8,
      "totalJobs": 127,
      "bio": "Especialista en plomería y electricidad",
      "certifications": ["Certificación Eléctrica"],
      "availability": {
        "monday": [{"start": "09:00", "end": "17:00"}],
        "tuesday": [{"start": "09:00", "end": "17:00"}]
      },
      "isVerified": true,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Obtener Perfil de Fixer
```http
GET /api/fixers/{id}
```

### Actualizar Perfil de Fixer
```http
PUT /api/fixers/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "services": ["plumbing", "electrical", "carpentry"],
  "bio": "Nueva biografía",
  "availability": {
    "monday": [{"start": "08:00", "end": "18:00"}]
  }
}
```

## 💼 Trabajos (Jobs)

### Listar Trabajos
```http
GET /api/jobs?status=pending&clientId=user_id&fixerId=fixer_id
```

**Query Parameters:**
- `status` (string): Estado del trabajo
- `clientId` (string): ID del cliente
- `fixerId` (string): ID del fixer
- `serviceId` (string): ID del servicio
- `location` (string): Ubicación
- `radius` (number): Radio en km

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "job_id",
      "title": "Reparación de grifo",
      "description": "Grifo que gotea en la cocina",
      "serviceId": "service_id",
      "clientId": "client_id",
      "fixerId": "fixer_id",
      "address": {
        "street": "Calle Mayor 123",
        "city": "Madrid",
        "state": "Madrid",
        "zipCode": "28001",
        "country": "Spain",
        "coordinates": {
          "latitude": 40.4168,
          "longitude": -3.7038
        }
      },
      "status": "pending",
      "urgency": "medium",
      "budget": {
        "min": 50,
        "max": 100
      },
      "images": ["https://example.com/image1.jpg"],
      "scheduledDate": "2024-01-15T10:00:00Z",
      "completedDate": null,
      "rating": null,
      "review": null,
      "createdAt": "2024-01-10T00:00:00Z",
      "updatedAt": "2024-01-10T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 50,
    "totalPages": 3,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Crear Trabajo
```http
POST /api/jobs
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Reparación de grifo",
  "description": "Grifo que gotea constantemente",
  "serviceId": "service_id",
  "address": {
    "street": "Calle Mayor 123",
    "city": "Madrid",
    "state": "Madrid",
    "zipCode": "28001",
    "country": "Spain",
    "coordinates": {
      "latitude": 40.4168,
      "longitude": -3.7038
    }
  },
  "urgency": "medium",
  "budget": {
    "min": 50,
    "max": 100
  },
  "images": ["https://example.com/image1.jpg"],
  "scheduledDate": "2024-01-15T10:00:00Z"
}
```

### Actualizar Trabajo
```http
PUT /api/jobs/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "in_progress",
  "fixerId": "fixer_id",
  "scheduledDate": "2024-01-16T10:00:00Z"
}
```

### Aplicar a Trabajo (Fixer)
```http
POST /api/jobs/{id}/apply
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "Interesado en este trabajo",
  "proposedPrice": 75,
  "estimatedDuration": 2
}
```

### Completar Trabajo
```http
POST /api/jobs/{id}/complete
Authorization: Bearer <token>
Content-Type: application/json

{
  "images": ["https://example.com/after1.jpg"],
  "notes": "Trabajo completado exitosamente"
}
```

### Calificar Trabajo
```http
POST /api/jobs/{id}/rate
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "review": "Excelente trabajo, muy profesional"
}
```

## 🔍 Búsqueda

### Búsqueda Global
```http
GET /api/search?q=plomeria&location=Madrid&radius=25
```

**Query Parameters:**
- `q` (string): Término de búsqueda
- `location` (string): Ubicación
- `radius` (number): Radio en km
- `category` (string): Categoría
- `type` (string): Tipo (services, fixers, jobs)

**Response:**
```json
{
  "success": true,
  "data": {
    "services": [...],
    "fixers": [...],
    "jobs": [...]
  },
  "total": 150
}
```

### Búsqueda por Ubicación
```http
GET /api/search/location?lat=40.4168&lng=-3.7038&radius=25
```

## 📊 Analytics

### Métricas de Usuario
```http
GET /api/analytics/user
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalJobs": 10,
    "completedJobs": 8,
    "averageRating": 4.5,
    "totalSpent": 500,
    "favoriteServices": ["plumbing", "electrical"]
  }
}
```

### Métricas de Fixer
```http
GET /api/analytics/fixer
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalJobs": 50,
    "completedJobs": 45,
    "averageRating": 4.8,
    "totalEarnings": 2500,
    "responseTime": "2h",
    "completionRate": 0.9
  }
}
```

## 🔔 Notificaciones

### Listar Notificaciones
```http
GET /api/notifications?unread=true
Authorization: Bearer <token>
```

### Marcar como Leída
```http
PUT /api/notifications/{id}/read
Authorization: Bearer <token>
```

### Marcar Todas como Leídas
```http
PUT /api/notifications/read-all
Authorization: Bearer <token>
```

## 🗺️ Mapas

### Obtener Fixers Cercanos
```http
GET /api/map/fixers?lat=40.4168&lng=-3.7038&radius=25&services=plumbing
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "fixer_id",
      "name": "Carlos Mendoza",
      "coordinates": {
        "latitude": 40.4168,
        "longitude": -3.7038
      },
      "services": ["plumbing"],
      "rating": 4.8,
      "distance": 2.5
    }
  ]
}
```

## 📱 PWA

### Service Worker
```http
GET /sw.js
```

### Manifest
```http
GET /manifest.json
```

## 🚨 Códigos de Error

### HTTP Status Codes
- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Unprocessable Entity
- `500` - Internal Server Error

### Error Response Format
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "validation error"
  }
}
```

### Códigos de Error Comunes
- `VALIDATION_ERROR` - Error de validación
- `AUTHENTICATION_REQUIRED` - Autenticación requerida
- `INSUFFICIENT_PERMISSIONS` - Permisos insuficientes
- `RESOURCE_NOT_FOUND` - Recurso no encontrado
- `DUPLICATE_RESOURCE` - Recurso duplicado
- `RATE_LIMIT_EXCEEDED` - Límite de rate excedido

## 🔄 Rate Limiting

### Límites
- **Autenticación:** 5 requests/min
- **API General:** 100 requests/min
- **Búsqueda:** 20 requests/min
- **Upload:** 10 requests/min

### Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## 📝 Ejemplos de Uso

### Flujo Completo de Trabajo
```javascript
// 1. Cliente crea trabajo
const job = await fetch('/api/jobs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Reparación de grifo',
    description: 'Grifo que gotea',
    serviceId: 'plumbing_service',
    address: { /* address data */ },
    urgency: 'medium',
    budget: { min: 50, max: 100 }
  })
});

// 2. Fixer aplica al trabajo
const application = await fetch('/api/jobs/job_id/apply', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + fixerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Interesado en este trabajo',
    proposedPrice: 75,
    estimatedDuration: 2
  })
});

// 3. Cliente acepta aplicación
const accept = await fetch('/api/jobs/job_id/accept', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fixerId: 'fixer_id'
  })
});

// 4. Fixer completa trabajo
const complete = await fetch('/api/jobs/job_id/complete', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + fixerToken,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    images: ['https://example.com/after.jpg'],
    notes: 'Trabajo completado'
  })
});

// 5. Cliente califica
const rate = await fetch('/api/jobs/job_id/rate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    rating: 5,
    review: 'Excelente trabajo'
  })
});
```

## 🔧 SDK y Librerías

### JavaScript/TypeScript
```bash
npm install servineo-sdk
```

```javascript
import { ServineoClient } from 'servineo-sdk';

const client = new ServineoClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://servineo.com/api'
});

// Usar cliente
const jobs = await client.jobs.list();
const fixers = await client.fixers.search({ location: 'Madrid' });
```

## 📞 Soporte

### Contacto
- **Email:** api@servineo.com
- **Documentación:** https://docs.servineo.com
- **Status Page:** https://status.servineo.com

### Changelog
- **v1.0.0** - API inicial
- **v1.1.0** - Agregado búsqueda por ubicación
- **v1.2.0** - Agregado sistema de notificaciones
