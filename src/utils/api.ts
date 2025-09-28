import { ApiResponse, PaginationParams, SearchParams } from '@/types/common.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'An error occurred',
        };
      }

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = new URL(`${this.baseURL}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return this.request<T>(url.pathname + url.search);
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }

  // PATCH request
  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
}

export const apiClient = new ApiClient();

// Helper functions for common API calls
export const api = {
  // Auth endpoints
  auth: {
    login: (credentials: { email: string; password: string }) =>
      apiClient.post('/auth/login', credentials),
    register: (userData: any) =>
      apiClient.post('/auth/register', userData),
    logout: () =>
      apiClient.post('/auth/logout'),
    me: () =>
      apiClient.get('/auth/me'),
  },

  // Services endpoints
  services: {
    list: (params?: SearchParams & PaginationParams) =>
      apiClient.get('/services', params),
    get: (id: string) =>
      apiClient.get(`/services/${id}`),
    create: (data: any) =>
      apiClient.post('/services', data),
    update: (id: string, data: any) =>
      apiClient.put(`/services/${id}`, data),
    delete: (id: string) =>
      apiClient.delete(`/services/${id}`),
  },

  // Fixers endpoints
  fixers: {
    list: (params?: SearchParams & PaginationParams) =>
      apiClient.get('/fixers', params),
    get: (id: string) =>
      apiClient.get(`/fixers/${id}`),
    update: (id: string, data: any) =>
      apiClient.put(`/fixers/${id}`, data),
  },

  // Jobs endpoints
  jobs: {
    list: (params?: SearchParams & PaginationParams) =>
      apiClient.get('/jobs', params),
    get: (id: string) =>
      apiClient.get(`/jobs/${id}`),
    create: (data: any) =>
      apiClient.post('/jobs', data),
    update: (id: string, data: any) =>
      apiClient.put(`/jobs/${id}`, data),
    delete: (id: string) =>
      apiClient.delete(`/jobs/${id}`),
  },
};
