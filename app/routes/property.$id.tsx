import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Property } from "../types/property";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.property) {
    return [
      { title: "Propiedad no encontrada - Correa Properties" },
      {
        name: "description",
        content: "La propiedad que buscas no está disponible.",
      },
    ];
  }

  return [
    { title: `${data.property.title} - Correa Properties` },
    { name: "description", content: data.property.description },
  ];
};

// Servicio mock para obtener una propiedad por ID
const PropertyService = {
  getPropertyById: async (id: string): Promise<Property | null> => {
    // Aquí normalmente harías una llamada a tu API o base de datos
    // Por ahora, usamos datos mock

    // Simulamos una búsqueda por ID
    const mockProperties: Property[] = [
      {
        id: "1",
        title: "Premium penthouse in central Barcelona with panoramic views",
        description:
          "Espectacular ático con terraza y vistas panorámicas al mar. Acabados de alta calidad y ubicación privilegiada en el centro de Barcelona.",
        price: 850000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 224,
          usable: 190,
          terrace: 34,
        },
        rooms: 5,
        bathrooms: 3,
        garages: 2,
        features: [
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Terraza",
          "Vistas panorámicas",
          "Piscina comunitaria",
          "Seguridad 24h",
          "Domótica",
        ],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Haylie Donin",
          phone: "+34 555 781 731",
          email: "haylie.donin@realestate.es",
          image: "https://randomuser.me/api/portraits/women/12.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 5,
          totalFloors: 5,
        },
      },
      {
        id: "2",
        title: "Elegante villa con jardín y piscina privada",
        description:
          "Impresionante villa con amplio jardín y piscina privada. Diseño moderno y acabados de lujo en una de las mejores zonas residenciales.",
        price: 1250000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 450,
          usable: 320,
          garden: 130,
        },
        rooms: 6,
        bathrooms: 4,
        garages: 3,
        features: [
          "Piscina privada",
          "Jardín",
          "Domótica",
          "Seguridad 24h",
          "Gimnasio",
          "Sauna",
          "Cine en casa",
        ],
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Carlos Rodríguez",
          phone: "+34 623 456 789",
          email: "carlos@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          totalFloors: 2,
        },
      },
      {
        id: "3",
        title: "Apartamento reformado en el centro",
        description:
          "Moderno apartamento completamente reformado en pleno centro. Ideal para inversores.",
        price: 320000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 85,
          usable: 80,
          balcony: 5,
        },
        rooms: 2,
        bathrooms: 1,
        garages: 0,
        features: ["Reformado", "Ascensor", "Aire acondicionado"],
        images: [
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Laura Sánchez",
          phone: "+34 634 567 890",
          email: "laura@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: false,
          floor: 3,
          totalFloors: 6,
        },
        discount: "12%",
      },
      {
        id: "4",
        title: "Dúplex con terraza en zona residencial",
        description:
          "Amplio dúplex con terraza privada en tranquila zona residencial con todos los servicios.",
        price: 395000,
        location: "Canelones",
        type: "sale",
        area: {
          total: 140,
          usable: 120,
          terrace: 20,
        },
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        features: ["Terraza", "Trastero", "Zona comunitaria"],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Miguel Fernández",
          phone: "+34 645 678 901",
          email: "miguel@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          floor: 4,
          totalFloors: 4,
        },
        discount: "8%",
      },
      {
        id: "5",
        title: "Loft industrial renovado",
        description:
          "Espectacular loft de estilo industrial completamente renovado con materiales de primera calidad.",
        price: 275000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 95,
          usable: 95,
        },
        rooms: 1,
        bathrooms: 1,
        garages: 0,
        features: ["Estilo industrial", "Techos altos", "Diáfano"],
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Sofía López",
          phone: "+34 656 789 012",
          email: "sofia@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: false,
          floor: 1,
          totalFloors: 1,
        },
        discount: "20%",
      },
      {
        id: "6",
        title: "Apartamento de lujo en primera línea de playa",
        description:
          "Exclusivo apartamento con vistas directas al mar. Acabados de lujo y acceso directo a la playa. Oportunidad única en una de las mejores zonas costeras.",
        price: 750000,
        location: "Marbella",
        type: "sale",
        area: {
          total: 150,
          usable: 130,
          terrace: 20,
        },
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        features: [
          "Primera línea de playa",
          "Vistas al mar",
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Terraza",
          "Parking privado",
          "Seguridad 24h",
        ],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Antonio García",
          phone: "+34 555 567 890",
          email: "antonio.garcia@correaproperties.es",
          image: "https://randomuser.me/api/portraits/men/89.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 4,
          totalFloors: 6,
        },
      },
      {
        id: "7",
        title: "Chalet moderno con piscina en urbanización exclusiva",
        description:
          "Impresionante chalet con diseño moderno y piscina privada en una de las urbanizaciones más exclusivas de la zona. Perfecto para familias que buscan lujo y privacidad.",
        price: 950000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 350,
          usable: 300,
          garden: 50,
        },
        rooms: 5,
        bathrooms: 4,
        garages: 2,
        features: [
          "Piscina privada",
          "Jardín",
          "Aire acondicionado",
          "Calefacción",
          "Domótica",
          "Seguridad 24h",
          "Parking privado",
          "Zona comunitaria",
        ],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Elena Martínez",
          phone: "+34 555 678 901",
          email: "elena.martinez@correaproperties.es",
          image: "https://randomuser.me/api/portraits/women/91.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 1,
          totalFloors: 2,
        },
      },
      {
        id: "8",
        title: "Dúplex de diseño en zona céntrica",
        description:
          "Elegante dúplex con diseño contemporáneo en una de las zonas más céntricas de la ciudad. Acabados de alta calidad y distribución inteligente.",
        price: 520000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 180,
          usable: 160,
          terrace: 20,
        },
        rooms: 4,
        bathrooms: 3,
        garages: 1,
        features: [
          "Diseño contemporáneo",
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Terraza",
          "Parking privado",
          "Seguridad 24h",
        ],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "David López",
          phone: "+34 555 789 012",
          email: "david.lopez@correaproperties.es",
          image: "https://randomuser.me/api/portraits/men/92.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 3,
          totalFloors: 4,
        },
      },
      {
        id: "9",
        title: "Apartamento con vistas al parque",
        description:
          "Acogedor apartamento con vistas al parque en una zona residencial tranquila. Perfecto para quienes buscan tranquilidad sin renunciar a la comodidad.",
        price: 280000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 90,
          usable: 80,
          balcony: 10,
        },
        rooms: 2,
        bathrooms: 1,
        garages: 0,
        features: [
          "Vistas al parque",
          "Aire acondicionado",
          "Calefacción",
          "Ascensor",
          "Balcón",
          "Seguridad 24h",
        ],
        images: [
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Isabel Torres",
          phone: "+34 555 890 123",
          email: "isabel.torres@correaproperties.es",
          image: "https://randomuser.me/api/portraits/women/93.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: false,
          floor: 5,
          totalFloors: 6,
        },
      },
      {
        id: "10",
        title: "Villa de lujo con piscina y jardín",
        description:
          "Exclusiva villa de lujo con piscina privada y amplio jardín. Diseño moderno y acabados de alta gama en una de las zonas más exclusivas.",
        price: 1500000,
        location: "Marbella",
        type: "sale",
        area: {
          total: 500,
          usable: 400,
          garden: 100,
        },
        rooms: 6,
        bathrooms: 5,
        garages: 3,
        features: [
          "Piscina privada",
          "Jardín",
          "Aire acondicionado",
          "Calefacción",
          "Domótica",
          "Seguridad 24h",
          "Parking privado",
          "Gimnasio",
          "Sauna",
        ],
        images: [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        broker: {
          name: "Javier Ruiz",
          phone: "+34 555 901 234",
          email: "javier.ruiz@correaproperties.es",
          image: "https://randomuser.me/api/portraits/men/94.jpg",
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: true,
          floor: 1,
          totalFloors: 2,
        },
      }
    ];

    // Agregar las ofertas
    const topOffers: Property[] = [
      {
        id: "offer-1",
        title: "Ático de lujo con vistas panorámicas",
        description: "Espectacular ático con terraza y vistas al mar. Acabados de alta calidad y ubicación privilegiada.",
        price: 450000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 120,
          usable: 100,
          terrace: 20
        },
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        features: ["Aire acondicionado", "Calefacción", "Ascensor", "Terraza"],
        images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Ana Martínez",
          phone: "+34 612345678",
          email: "ana@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          floor: 5,
          totalFloors: 5
        },
        discount: "15%"
      },
      {
        id: "offer-8",
        title: "Piso de diseño en barrio histórico",
        description: "Elegante piso completamente reformado con diseño de interiores exclusivo en edificio histórico.",
        price: 365000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 95,
          usable: 90,
          balcony: 5
        },
        rooms: 2,
        bathrooms: 1,
        garages: 0,
        features: ["Diseño exclusivo", "Edificio histórico", "Reformado"],
        images: ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Pablo Ruiz",
          phone: "+34 689012345",
          email: "pablo@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/82.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: false,
          floor: 2,
          totalFloors: 4
        },
        discount: "15%"
      }
    ];

    // Buscar en ambas listas de propiedades
    const allProperties = [...mockProperties, ...topOffers];
    const property = allProperties.find(
      (p) => p.id === id || p.id === `prop-${id}` || `prop-${p.id}` === id
    );

    return property || null;
  },
};

export async function loader({ params }: LoaderFunctionArgs) {
  const propertyId = params.id;

  if (!propertyId) {
    throw new Response("ID de propiedad no proporcionado", { status: 400 });
  }

  const property = await PropertyService.getPropertyById(propertyId);

  if (!property) {
    throw new Response("Propiedad no encontrada", { status: 404 });
  }

  return json({ property });
}

export default function PropertyDetailPage() {
  const { property } = useLoaderData<typeof loader>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  // Función para navegar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  // Función para navegar a la imagen siguiente
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  // Calcular la cuota hipotecaria mensual (ejemplo simplificado)
  const calculateMortgage = () => {
    const interestRate = 0.03; // 3% anual
    const years = 30;
    const loanAmount = property.price * 0.8; // 80% del precio

    const monthlyRate = interestRate / 12;
    const payments = years * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (loanAmount * x * monthlyRate) / (x - 1);

    return monthly.toFixed(2);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to="/"
          className="text-[#0a8078] hover:text-[#0a8078] flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Volver a resultados
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna izquierda: Imágenes y detalles */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {property.title}
          </h1>

          {/* Iconos de tipo, superficie y ubicación */}
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0a8078]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">
                {property.type === "sale" ? "Piso" : "Apartamento"}
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0a8078]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">
                {property.area.total}m²
              </span>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0a8078]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">{property.location}</span>
            </div>
          </div>

          {/* Hipoteca simplificada (estilo del diseño) */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm mb-1">Mortgage since:</p>
              <p className="text-xl font-bold">{calculateMortgage()} USD/month</p>
            </div>
            <button className="mt-3 md:mt-0 bg-[#0a8078] text-white px-4 py-2 rounded-lg hover:bg-[#0a8078] transition">
              Get a mortgage
            </button>
          </div>

          {/* Carrusel de imágenes */}
          <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[400px]">
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0a8078]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#0a8078]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Indicador de imágenes */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex
                        ? "bg-[#0a8078]"
                        : "bg-white bg-opacity-60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex overflow-x-auto py-2 bg-white">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-16 mx-1 rounded overflow-hidden ${
                    index === currentImageIndex ? "ring-2 ring-[#0a8078]" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Características principales */}
          <div className="flex flex-wrap justify-between mb-8 bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#0a8078] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-500">Tipo</p>
                <p className="font-semibold">
                  {property.type === "sale" ? "Piso" : "Apartamento"}
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#0a8078] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-500">Superficie</p>
                <p className="font-semibold">{property.area.total} m²</p>
              </div>
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#0a8078] mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-semibold">{property.location}</p>
              </div>
            </div>
          </div>

          {/* Detalles de la propiedad */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Características
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Número de habitaciones: {property.rooms}</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  Planta: {property.characteristics.floor || "Planta baja"}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                <span>Superficie habitable: {property.area.usable} m²</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Baños: {property.bathrooms}</span>
              </div>

              {property.area.terrace && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0a8078] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <span>Terraza: {property.area.terrace} m²</span>
                </div>
              )}

              {property.area.garden && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0a8078] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Jardín: {property.area.garden} m²</span>
                </div>
              )}

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span>Garajes: {property.garages}</span>
              </div>
            </div>

            {/* Información del edificio */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Información del edificio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>
                  Plantas del edificio: {property.characteristics.totalFloors}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Año de construcción:{" "}
                  {new Date().getFullYear() - Math.floor(Math.random() * 30)}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>
                  Aislamiento:{" "}
                  {property.characteristics.insulated ? "Sí" : "No"}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  Balcón: {property.characteristics.hasBalcony ? "Sí" : "No"}
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0a8078] mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span>
                  Terraza: {property.characteristics.hasTerrace ? "Sí" : "No"}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Descripción
            </h3>
            <p className="text-gray-700 mb-6">{property.description}</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Características adicionales
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {property.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-[#0a8078]/10 text-[#0a8078] px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Calculadora hipotecaria */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Calculadora hipotecaria
              </h2>
              <span className="text-sm text-gray-500">Desde:</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 mb-1">Cuota mensual estimada:</p>
                <p className="text-3xl font-bold text-[#0a8078]">
                  {calculateMortgage()} USD/mes
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Basado en un 80% de financiación a 30 años con un interés del
                  3%
                </p>
              </div>
              <button className="bg-[#0a8078] text-white px-6 py-3 rounded-lg hover:bg-[#0a8078] transition font-medium">
                Solicitar hipoteca
              </button>
            </div>
          </div>

          {/* Ubicación */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ubicación
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa no disponible</p>
            </div>
          </div>
        </div>

        {/* Columna derecha: Contacto y agente */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {property.price.toLocaleString()} USD
              </h2>
              <p className="text-gray-600">
                {property.type === "sale" ? "En venta" : "En alquiler"}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contactar con el agente
              </h3>
              <div className="flex items-center mb-4">
                <img
                  src={property.broker.image}
                  alt={property.broker.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {property.broker.name}
                  </h4>
                  <p className="text-gray-600">{property.broker.phone}</p>
                  <p className="text-gray-600">{property.broker.email}</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="w-full bg-[#0a8078] text-white py-2 rounded-lg hover:bg-[#0a8078] transition mb-2"
              >
                Contactar
              </button>
              <a
                href={`tel:${property.broker.phone}`}
                className="w-full block text-center border border-[#0a8078] text-[#0a8078] py-2 rounded-lg hover:bg-[#0a8078]/10 transition"
              >
                Llamar
              </a>
            </div>

            {showContactForm && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Enviar mensaje
                </h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a8078]"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a8078]"
                      placeholder="Tu teléfono"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a8078]"
                      placeholder="Tu email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a8078]"
                      placeholder="Estoy interesado en esta propiedad..."
                    ></textarea>
                  </div>

                  <div className="mb-4 flex items-start">
                    <input type="checkbox" id="privacy" className="mt-1 mr-2" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Acepto el procesamiento de mis datos personales
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a8078] text-white py-2 rounded-lg hover:bg-[#0a8078] transition"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
