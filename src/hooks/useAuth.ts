'use client';

import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'fixer' | 'admin';
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      try {
        // This would typically check for a token in localStorage/cookies
        // and validate it with your backend
        const token = localStorage.getItem('auth_token');
        
        if (token) {
          // Validate token with backend
          // const response = await fetch('/api/auth/me', {
          //   headers: { Authorization: `Bearer ${token}` }
          // });
          // const user = await response.json();
          
          // For now, simulate a user
          setAuthState({
            user: {
              id: '1',
              name: 'Usuario Demo',
              email: 'demo@servineo.com',
              role: 'user',
            },
            isLoading: false,
            isAuthenticated: true,
          });
        } else {
          setAuthState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulate login API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      
      // For demo purposes
      const token = 'demo-token';
      localStorage.setItem('auth_token', token);
      
      setAuthState({
        user: {
          id: '1',
          name: 'Usuario Demo',
          email,
          role: 'user',
        },
        isLoading: false,
        isAuthenticated: true,
      });
      
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Login failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
};
