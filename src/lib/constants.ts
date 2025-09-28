export const APP_CONFIG = {
  name: 'Servineo',
  description: 'Plataforma para encontrar servicios de reparación y mantenimiento',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  version: '1.0.0',
};

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    me: '/api/auth/me',
  },
  services: {
    list: '/api/services',
    create: '/api/services',
    update: '/api/services/[id]',
    delete: '/api/services/[id]',
  },
  fixers: {
    list: '/api/fixers',
    profile: '/api/fixers/[id]',
    update: '/api/fixers/[id]',
  },
  jobs: {
    list: '/api/jobs',
    create: '/api/jobs',
    update: '/api/jobs/[id]',
    delete: '/api/jobs/[id]',
  },
};

export const ROUTES = {
  home: '/',
  services: '/services',
  fixers: '/fixers',
  jobs: '/jobs',
  profile: '/profile',
  login: '/login',
  register: '/register',
  about: '/about',
  contact: '/contact',
  help: '/help',
  privacy: '/privacy',
  terms: '/terms',
};

export const SERVICE_CATEGORIES = [
  { id: 'plumbing', name: 'Plomería', icon: '🔧' },
  { id: 'electrical', name: 'Electricidad', icon: '⚡' },
  { id: 'carpentry', name: 'Carpintería', icon: '🔨' },
  { id: 'painting', name: 'Pintura', icon: '🎨' },
  { id: 'cleaning', name: 'Limpieza', icon: '🧹' },
  { id: 'gardening', name: 'Jardinería', icon: '🌱' },
];

export const JOB_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const USER_ROLES = {
  USER: 'user',
  FIXER: 'fixer',
  ADMIN: 'admin',
} as const;
