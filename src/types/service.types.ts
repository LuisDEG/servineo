export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  icon?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  serviceId: string;
  title: string;
  description: string;
  address: Address;
  urgency: 'low' | 'medium' | 'high';
  budget?: {
    min: number;
    max: number;
  };
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
