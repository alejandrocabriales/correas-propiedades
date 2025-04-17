export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  location: string;
  type: string;
  area: {
    total: number;
    usable: number;
    terrace?: number;
    balcony?: number;
    garden?: number;
  };
  rooms: number;
  bathrooms: number;
  garages: number;
  features: string[];
  images: string[];
  broker: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  characteristics: {
    insulated: boolean;
    hasBalcony: boolean;
    hasTerrace: boolean;
    floor?: number;
    totalFloors?: number;
  };
  discount?: string;
  offerDetails?: {
    discount: string;
    validUntil: string;
    specialConditions: string;
  };
}

export interface PropertySummary {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  featured: boolean;
} 