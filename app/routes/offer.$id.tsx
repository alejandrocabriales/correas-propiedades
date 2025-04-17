import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Property } from "../types/property";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.property) {
    return [
      { title: "Oferta no encontrada - Correa Properties" },
      {
        name: "description",
        content: "La oferta que buscas no está disponible.",
      },
    ];
  }

  return [
    { title: `${data.property.title} - Oferta Especial - Correa Properties` },
    { name: "description", content: data.property.description },
  ];
};

// Servicio mock para obtener una oferta por ID
const OfferService = {
  getOfferById: async (id: string): Promise<Property | null> => {
    const mockOffers: Property[] = [
      {
        id: "offer-1",
        title: "Oferta Exclusiva: Ático de lujo en zona premium",
        description:
          "¡Oferta única! Ático de lujo con vistas panorámicas y terraza privada. Ubicación privilegiada en una de las zonas más exclusivas de la ciudad.",
        price: 850000,
        originalPrice: 950000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 200,
          usable: 170,
          terrace: 30,
        },
        rooms: 4,
        bathrooms: 3,
        garages: 2,
        features: [
          "Vistas panorámicas",
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Terraza privada",
          "Piscina comunitaria",
          "Seguridad 24h",
          "Parking privado",
        ],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "María López",
          phone: "+34 555 111 222",
          email: "maria.lopez@correaproperties.es",
          image: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 8,
          totalFloors: 8,
        },
        offerDetails: {
          discount: "11%",
          validUntil: "2024-07-15",
          specialConditions: "Financiación especial y reformas incluidas"
        }
      },
      {
        id: "offer-2",
        title: "Oferta Especial: Apartamento de lujo en primera línea de playa",
        description:
          "¡Oferta exclusiva! Apartamento de lujo con vistas directas al mar. Ubicación privilegiada y acabados de alta calidad. Oferta limitada por tiempo.",
        price: 650000,
        originalPrice: 750000,
        location: "Marbella",
        type: "sale",
        area: {
          total: 180,
          usable: 150,
          terrace: 30,
        },
        rooms: 4,
        bathrooms: 2,
        garages: 1,
        features: [
          "Vistas al mar",
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Terraza",
          "Piscina comunitaria",
          "Seguridad 24h",
          "Parking privado",
        ],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Carlos Martínez",
          phone: "+34 555 123 456",
          email: "carlos.martinez@correaproperties.es",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 3,
          totalFloors: 5,
        },
        offerDetails: {
          discount: "13%",
          validUntil: "2024-06-30",
          specialConditions: "Financiación especial disponible"
        }
      },
      {
        id: "offer-3",
        title: "Oferta Flash: Villa con piscina privada",
        description:
          "¡Oferta por tiempo limitado! Villa de lujo con piscina privada y jardín. Oportunidad única en una de las zonas más exclusivas.",
        price: 950000,
        originalPrice: 1100000,
        location: "Sotogrande",
        type: "sale",
        area: {
          total: 350,
          usable: 280,
          garden: 70,
        },
        rooms: 5,
        bathrooms: 3,
        garages: 2,
        features: [
          "Piscina privada",
          "Jardín",
          "Aire acondicionado",
          "Calefacción",
          "Cocina equipada",
          "Seguridad 24h",
          "Parking privado",
          "Domótica",
        ],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Ana García",
          phone: "+34 555 789 012",
          email: "ana.garcia@correaproperties.es",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 1,
          totalFloors: 1,
        },
        offerDetails: {
          discount: "14%",
          validUntil: "2024-05-31",
          specialConditions: "Posibilidad de financiación a medida"
        }
      },
      {
        id: "offer-10",
        title: "Oferta Flash: Villa de lujo con piscina infinita",
        description:
          "¡Oferta por tiempo limitado! Villa de lujo con piscina infinita y vistas al mar. Oportunidad única en una de las zonas más exclusivas de la costa.",
        price: 1200000,
        originalPrice: 1350000,
        location: "Marbella",
        type: "sale",
        area: {
          total: 450,
          usable: 350,
          garden: 100,
        },
        rooms: 6,
        bathrooms: 4,
        garages: 3,
        features: [
          "Piscina infinita",
          "Jardín privado",
          "Aire acondicionado",
          "Calefacción",
          "Cocina equipada",
          "Seguridad 24h",
          "Parking privado",
          "Domótica",
          "Vistas al mar",
        ],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Juan García",
          phone: "+34 555 999 888",
          email: "juan.garcia@correaproperties.es",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 1,
          totalFloors: 1,
        },
        offerDetails: {
          discount: "11%",
          validUntil: "2024-08-31",
          specialConditions: "Incluye mobiliario de diseño y sistema de domótica"
        }
      }
    ];

    return mockOffers.find(offer => offer.id === id) || null;
  }
};

export async function loader({ params }: LoaderFunctionArgs) {
  const offerId = params.id;

  if (!offerId) {
    throw new Response("ID de oferta no proporcionado", { status: 400 });
  }

  const property = await OfferService.getOfferById(offerId);

  if (!property) {
    throw new Response("Oferta no encontrada", { status: 404 });
  }

  return json({ property });
}

export default function OfferDetailPage() {
  const { property } = useLoaderData<typeof loader>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevImage}
              className="bg-white/80 p-2 rounded-full hover:bg-white"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="bg-white/80 p-2 rounded-full hover:bg-white"
            >
              →
            </button>
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">¡Oferta Especial!</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Precio original:</p>
                <p className="line-through text-gray-500">€{property.originalPrice?.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Precio oferta:</p>
                <p className="text-2xl font-bold text-[#a359a0]">€{property.price.toLocaleString()}</p>
              </div>
            </div>
            <p className="mt-2 text-yellow-800">
              <strong>Descuento:</strong> {property.offerDetails?.discount}
            </p>
            <p className="text-yellow-800">
              <strong>Válido hasta:</strong> {property.offerDetails?.validUntil}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Ubicación</p>
              <p className="font-semibold">{property.location}</p>
            </div>
            <div>
              <p className="text-gray-600">Superficie</p>
              <p className="font-semibold">{property.area.total}m²</p>
            </div>
            <div>
              <p className="text-gray-600">Habitaciones</p>
              <p className="font-semibold">{property.rooms}</p>
            </div>
            <div>
              <p className="text-gray-600">Baños</p>
              <p className="font-semibold">{property.bathrooms}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Características</h2>
            <ul className="grid grid-cols-2 gap-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Contacto</h2>
            <div className="flex items-center mb-4">
              <img
                src={property.broker.image}
                alt={property.broker.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{property.broker.name}</p>
                <p className="text-gray-600">{property.broker.phone}</p>
              </div>
            </div>
            <a
              href={`mailto:${property.broker.email}`}
              className="block w-full text-center bg-[#0a8078] text-white py-2 px-4 rounded-lg hover:bg-[#0a8078]"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 