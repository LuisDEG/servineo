export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SearchParams {
  query?: string;
  category?: string;
  location?: string;
  radius?: number;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  availability?: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  address: string;
  coordinates: Coordinates;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
