import { properties, Property } from "../data/properties";

/**
 * Servicio para manejar los datos de propiedades
 * En el futuro, esto podría ser reemplazado por llamadas a una API real
 */
export const PropertyService = {
  /**
   * Obtiene todas las propiedades
   */
  getAllProperties: async (): Promise<Property[]> => {
    // Simulamos una llamada a API con un pequeño retraso
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(properties);
      }, 300);
    });
  },

  /**
   * Obtiene una propiedad por su ID
   */
  getPropertyById: async (id: string): Promise<Property | undefined> => {
    // Simulamos una llamada a API con un pequeño retraso
    return new Promise((resolve) => {
      setTimeout(() => {
        const property = properties.find(p => p.id === id);
        resolve(property);
      }, 300);
    });
  },

  /**
   * Obtiene propiedades destacadas
   */
  getFeaturedProperties: async (): Promise<Property[]> => {
    // Simulamos una llamada a API con un pequeño retraso
    return new Promise((resolve) => {
      setTimeout(() => {
        const featured = properties.filter(p => p.featured);
        resolve(featured);
      }, 300);
    });
  },

  /**
   * Busca propiedades según criterios
   */
  searchProperties: async (criteria: {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    tags?: string[];
    currency?: string;
  }): Promise<Property[]> => {
    // Simulamos una llamada a API con un pequeño retraso
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...properties];

        if (criteria.location) {
          filtered = filtered.filter(p => 
            p.location.toLowerCase().includes(criteria.location!.toLowerCase())
          );
        }

        if (criteria.minPrice !== undefined) {
          filtered = filtered.filter(p => p.price >= criteria.minPrice!);
        }

        if (criteria.maxPrice !== undefined) {
          filtered = filtered.filter(p => p.price <= criteria.maxPrice!);
        }

        if (criteria.bedrooms !== undefined) {
          filtered = filtered.filter(p => p.bedrooms >= criteria.bedrooms!);
        }

        if (criteria.bathrooms !== undefined) {
          filtered = filtered.filter(p => p.bathrooms >= criteria.bathrooms!);
        }

        if (criteria.tags && criteria.tags.length > 0) {
          filtered = filtered.filter(p => 
            p.tags && criteria.tags!.some(tag => p.tags!.includes(tag))
          );
        }

        if (criteria.currency) {
          filtered = filtered.filter(p => p.currency === criteria.currency);
        }

        resolve(filtered);
      }, 300);
    });
  }
}; 