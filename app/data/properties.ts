export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  image: string;
  featured: boolean;
  bedrooms: number;
  bathrooms: number;
  area: number;
  agent: {
    name: string;
    image: string;
  };
  tags?: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Casa en Altos de La Tahona",
    description: "Alquiler casa en altos de la tahona- 4 dormitorios y gran jardín con piscina",
    price: 3500,
    currency: "USD",
    location: "Canelones",
    image: "/images/modern-house-montevideo.jpg",
    featured: true,
    bedrooms: 4,
    bathrooms: 3,
    area: 270,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Alquiler", "Casa", "Piscina", "Jardín"]
  },
  {
    id: "2",
    title: "Apartamento en Pocitos",
    description: "Hermoso apartamento con vista al mar en Pocitos",
    price: 250000,
    currency: "USD",
    location: "Montevideo",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Venta", "Apartamento", "Vista al mar"]
  },
  {
    id: "3",
    title: "Casa en Carrasco",
    description: "Amplia casa familiar en el corazón de Carrasco",
    price: 450000,
    currency: "USD",
    location: "Montevideo",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Venta", "Casa", "Familiar"]
  },
  {
    id: "4",
    title: "Penthouse en Punta Carretas",
    description: "Lujoso penthouse con terraza panorámica y vista al Río de la Plata",
    price: 580000,
    currency: "USD",
    location: "Montevideo",
    image: "/images/placeholder-property.jpg",
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Venta", "Penthouse", "Terraza", "Vista"]
  },
  {
    id: "5",
    title: "Casa en Punta del Este",
    description: "Espectacular casa de playa a pasos de la Mansa",
    price: 4200,
    currency: "USD",
    location: "Maldonado",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 4,
    bathrooms: 3,
    area: 240,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Alquiler Temporal", "Casa", "Playa"]
  },
  {
    id: "6",
    title: "Apartamento en Cordón",
    description: "Moderno apartamento recientemente renovado cerca de la Universidad",
    price: 180000,
    currency: "USD",
    location: "Montevideo",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Venta", "Apartamento", "Renovado"]
  },
  {
    id: "7",
    title: "Casa en La Barra",
    description: "Hermosa casa con piscina y jardín en La Barra",
    price: 5500,
    currency: "USD",
    location: "Maldonado",
    image: "/images/placeholder-property.jpg",
    featured: true,
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Alquiler Temporal", "Casa", "Piscina", "Jardín"]
  },
  {
    id: "8",
    title: "Apartamento en Ciudad Vieja",
    description: "Encantador apartamento en edificio histórico renovado",
    price: 1200,
    currency: "USD",
    location: "Montevideo",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Alquiler", "Apartamento", "Histórico"]
  },
  {
    id: "9",
    title: "Casa en Parque Miramar",
    description: "Moderna casa con amplio jardín y piscina en zona residencial",
    price: 380000,
    currency: "USD",
    location: "Canelones",
    image: "/images/placeholder-property.jpg",
    featured: false,
    bedrooms: 3,
    bathrooms: 2,
    area: 190,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Venta", "Casa", "Piscina", "Jardín"]
  },
  {
    id: "10",
    title: "Chalet en Punta Ballena",
    description: "Espectacular chalet con vista panorámica al mar y a Casapueblo",
    price: 6800,
    currency: "USD",
    location: "Maldonado",
    image: "/images/placeholder-property.jpg",
    featured: true,
    bedrooms: 6,
    bathrooms: 4,
    area: 380,
    agent: {
      name: "Mercedes Arocena Bienes Raíces",
      image: "/images/placeholder-property.jpg"
    },
    tags: ["Alquiler Temporal", "Chalet", "Vista al mar"]
  }
]; 