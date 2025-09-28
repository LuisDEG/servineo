export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  address?: Address;
  role: 'user' | 'fixer' | 'admin';
  isVerified: boolean;
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

export interface FixerProfile extends UserProfile {
  services: string[];
  experience: number; // years
  rating: number;
  totalJobs: number;
  bio?: string;
  certifications?: string[];
  availability: {
    monday: TimeSlot[];
    tuesday: TimeSlot[];
    wednesday: TimeSlot[];
    thursday: TimeSlot[];
    friday: TimeSlot[];
    saturday: TimeSlot[];
    sunday: TimeSlot[];
  };
}

export interface TimeSlot {
  start: string; // HH:MM format
  end: string; // HH:MM format
}
