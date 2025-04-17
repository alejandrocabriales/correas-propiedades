import { Link } from "@remix-run/react";

interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  currency?: string;
  location: string;
  image?: string;
  featured?: boolean;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  agent?: {
    name: string;
    image?: string;
  };
}

export const PropertyCard = ({
  id,
  title,
  description,
  price,
  currency = "USD",
  location,
  image = "/images/placeholder-property.jpg",
  featured = false,
  bedrooms = 4,
  bathrooms = 3,
  area = 270,
  agent,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
      {/* Property Image */}
      <div className="relative block">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 rounded-full flex items-center text-xs shadow-sm">
            <span className="font-bold mr-1 text-yellow-500">★</span>
            <span className="font-medium">SUPER DESTACADO</span>
          </div>
        )}
        {/* Favorite Button */}
        <button 
          className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          1 / 17
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        {/* Agent Info */}
        {agent && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#4F6064] text-sm font-medium">{agent.name}</span>
            {agent.image && (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        )}

        {/* Price and Location */}
        <div className="mb-2">
          <div className="hover:text-[#4F6064]">
            <h2 className="text-xl font-bold text-[#4F6064]">{currency} {price.toLocaleString()}</h2>
            <p className="text-gray-600 text-sm">{title} en {location}</p>
          </div>
        </div>
        
        {/* Property Tag */}
        <div className="mb-3">
          <span className="inline-block bg-[#a359a0] text-white text-xs px-2 py-1 rounded">
            Alquiler Casa En Altos De La Tahona- 4 Dormitorios Y Gran Jardín Con Piscina
          </span>
        </div>

        {/* Property Features */}
        <div className="flex items-center space-x-4 mb-3">
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-500 mr-1"
            >
              <path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path>
              <path d="M5 12V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8"></path>
            </svg>
            <span className="text-gray-700 text-sm">{bedrooms} Dorm.</span>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-500 mr-1"
            >
              <path d="M8 2h8a2 2 0 0 1 2 2v2"></path>
              <path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10H4Z"></path>
              <path d="M2 10h20"></path>
            </svg>
            <span className="text-gray-700 text-sm">{bathrooms} Baños</span>
          </div>
          <div className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-500 mr-1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <span className="text-gray-700 text-sm">{area} m²</span>
          </div>
        </div>

        {/* Property Description */}
        <div className="mb-4">
          <h3 className="font-semibold text-[#4F6064] text-sm mb-1">
            {description}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2">
            Excelente casa en {location} con todas las comodidades! PB: Hall de entrada, toilette, living comedor de buen tamaño con estufa de leña, estar, cocina amplia con espacio para desayunador...
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link 
            to={`/property/${id}`}
            className="flex-1 bg-[#0a8078] hover:bg-[#0a8078]/90 text-white text-center py-1.5 px-3 rounded flex items-center justify-center text-sm transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
