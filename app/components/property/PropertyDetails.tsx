interface PropertyDetailsProps {
  title: string;
  price: number;
  location: string;
  description: string;
  characteristics: {
    type: string;
    area: number;
    rooms: number;
    bathrooms: number;
    garages: number;
    features: string[];
  };
  broker: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const PropertyDetails = ({
  title,
  price,
  location,
  description,
  characteristics,
  broker,
}: PropertyDetailsProps) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex items-center gap-4">
          <p className="text-2xl font-semibold text-green-600">USD {price.toLocaleString()}</p>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Main Characteristics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[#F8F8F8] rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-500">Tipo</p>
          <p className="font-semibold">{characteristics.type}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Área</p>
          <p className="font-semibold">{characteristics.area} m²</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Habitaciones</p>
          <p className="font-semibold">{characteristics.rooms}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Baños</p>
          <p className="font-semibold">{characteristics.bathrooms}</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Descripción</h2>
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Características</h2>
        <ul className="grid grid-cols-2 gap-2">
          {characteristics.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Broker Contact */}
      <div className="border-t pt-6">
        <div className="flex items-center gap-4">
          <img src={broker.image} alt={broker.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold text-lg">{broker.name}</h3>
            <p className="text-gray-600">{broker.phone}</p>
            <p className="text-gray-600">{broker.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 