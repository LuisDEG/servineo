export interface Job {
  id: string;
  title: string;
  description: string;
  serviceId: string;
  clientId: string;
  fixerId?: string;
  address: Address;
  status: JobStatus;
  urgency: 'low' | 'medium' | 'high';
  budget?: {
    min: number;
    max: number;
  };
  images?: string[];
  scheduledDate?: Date;
  completedDate?: Date;
  rating?: number;
  review?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface JobStatus {
  PENDING: 'pending';
  IN_PROGRESS: 'in_progress';
  COMPLETED: 'completed';
  CANCELLED: 'cancelled';
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

export interface JobApplication {
  id: string;
  jobId: string;
  fixerId: string;
  message: string;
  proposedPrice: number;
  estimatedDuration: number; // in hours
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}
