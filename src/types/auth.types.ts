export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'fixer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  user: User;
  expires: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: 'user' | 'fixer';
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}
