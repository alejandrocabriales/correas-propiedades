import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Property } from "../types/property";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ofertas Destacadas - Correa Properties" },
    {
      name: "description",
      content: "Descubre nuestras mejores ofertas en propiedades con descuentos exclusivos.",
    },
  ];
};

// Servicio mock para ofertas destacadas
const TopOffersService = {
  getTopOffers: async (): Promise<Property[]> => {
    // Datos mock de propiedades en oferta
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
        id: "offer-2",
        title: "Chalet con piscina en zona exclusiva",
        description: "Impresionante chalet con jardín privado y piscina. Perfecto para familias que buscan tranquilidad.",
        price: 680000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 250,
          usable: 200,
          garden: 150
        },
        rooms: 4,
        bathrooms: 3,
        garages: 2,
        features: ["Piscina", "Jardín", "Alarma", "Chimenea"],
        images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Carlos Rodríguez",
          phone: "+34 623456789",
          email: "carlos@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          totalFloors: 2
        },
        discount: "10%"
      },
      {
        id: "offer-3",
        title: "Apartamento reformado en el centro",
        description: "Moderno apartamento completamente reformado en pleno centro. Ideal para inversores.",
        price: 320000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 85,
          usable: 80,
          balcony: 5
        },
        rooms: 2,
        bathrooms: 1,
        garages: 0,
        features: ["Reformado", "Ascensor", "Aire acondicionado"],
        images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Laura Sánchez",
          phone: "+34 634567890",
          email: "laura@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: false,
          floor: 3,
          totalFloors: 6
        },
        discount: "12%"
      },
      {
        id: "offer-4",
        title: "Dúplex con terraza en zona residencial",
        description: "Amplio dúplex con terraza privada en tranquila zona residencial con todos los servicios.",
        price: 395000,
        location: "Canelones",
        type: "sale",
        area: {
          total: 140,
          usable: 120,
          terrace: 20
        },
        rooms: 3,
        bathrooms: 2,
        garages: 1,
        features: ["Terraza", "Trastero", "Zona comunitaria"],
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Miguel Fernández",
          phone: "+34 645678901",
          email: "miguel@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/42.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          floor: 4,
          totalFloors: 4
        },
        discount: "8%"
      },
      {
        id: "offer-5",
        title: "Loft industrial renovado",
        description: "Espectacular loft de estilo industrial completamente renovado con materiales de primera calidad.",
        price: 275000,
        location: "Madrid",
        type: "sale",
        area: {
          total: 95,
          usable: 95
        },
        rooms: 1,
        bathrooms: 1,
        garages: 0,
        features: ["Estilo industrial", "Techos altos", "Diáfano"],
        images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Sofía López",
          phone: "+34 656789012",
          email: "sofia@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/52.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: false,
          floor: 1,
          totalFloors: 1
        },
        discount: "20%"
      },
      {
        id: "offer-6",
        title: "Casa adosada con jardín privado",
        description: "Moderna casa adosada con jardín privado y garaje para dos coches en urbanización con piscina comunitaria.",
        price: 420000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 180,
          usable: 150,
          garden: 30
        },
        rooms: 4,
        bathrooms: 2,
        garages: 2,
        features: ["Jardín", "Piscina comunitaria", "Zona infantil"],
        images: ["https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Javier Martín",
          phone: "+34 667890123",
          email: "javier@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: false,
          totalFloors: 2
        },
        discount: "7%"
      },
      {
        id: "offer-7",
        title: "Apartamento de lujo frente al mar",
        description: "Exclusivo apartamento con vistas directas al mar. Acceso directo a la playa y todas las comodidades.",
        price: 520000,
        location: "Canelones",
        type: "sale",
        area: {
          total: 110,
          usable: 95,
          terrace: 15
        },
        rooms: 2,
        bathrooms: 2,
        garages: 1,
        features: ["Primera línea de playa", "Vistas al mar", "Piscina"],
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Elena Gómez",
          phone: "+34 678901234",
          email: "elena@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/72.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          floor: 2,
          totalFloors: 4
        },
        discount: "18%"
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
      },
      {
        id: "offer-9",
        title: "Villa de lujo con vistas a la montaña",
        description: "Impresionante villa con vistas panorámicas a la montaña, piscina infinita y jardín paisajístico.",
        price: 780000,
        location: "Barcelona",
        type: "sale",
        area: {
          total: 320,
          usable: 250,
          garden: 500
        },
        rooms: 5,
        bathrooms: 4,
        garages: 3,
        features: ["Piscina infinita", "Vistas a la montaña", "Jardín paisajístico", "Domótica"],
        images: ["https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Isabel Torres",
          phone: "+34 690123456",
          email: "isabel@correaproperties.com",
          image: "https://randomuser.me/api/portraits/women/92.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: false,
          hasTerrace: true,
          totalFloors: 2
        },
        discount: "10%"
      },
      {
        id: "offer-10",
        title: "Apartamento moderno en zona financiera",
        description: "Moderno apartamento con acabados de alta gama en el corazón del distrito financiero.",
        price: 295000,
        location: "Canelones",
        type: "sale",
        area: {
          total: 75,
          usable: 70,
          balcony: 5
        },
        rooms: 1,
        bathrooms: 1,
        garages: 1,
        features: ["Zona financiera", "Acabados de lujo", "Seguridad 24h"],
        images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        broker: {
          name: "Daniel Navarro",
          phone: "+34 601234567",
          email: "daniel@correaproperties.com",
          image: "https://randomuser.me/api/portraits/men/92.jpg"
        },
        characteristics: {
          insulated: true,
          hasBalcony: true,
          hasTerrace: false,
          floor: 10,
          totalFloors: 20
        },
        discount: "25%"
      }
    ];
    
    return topOffers;
  }
};

export async function loader() {
  const topOffers = await TopOffersService.getTopOffers();
  return json({ topOffers });
}

export default function TopOffersPage() {
  const { topOffers } = useLoaderData<typeof loader>();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ofertas Destacadas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Propiedades seleccionadas con los mejores descuentos disponibles por tiempo limitado
        </p>
      </div>

      {/* Filtro de ofertas */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">
              {topOffers.length} propiedades con descuento
            </h2>
            <p className="text-gray-600">
              Ofertas exclusivas con hasta un 25% de descuento
            </p>
          </div>
          <div className="relative">
            <select 
              className="appearance-none w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 pr-12"
            >
              <option value="discount_high">Mayor descuento</option>
              <option value="price_low">Precio más bajo</option>
              <option value="price_high">Precio más alto</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Listado de ofertas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topOffers.length > 0 ? (
          topOffers.map((property) => (
            <div key={property.id} className="relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-[#a359a0] text-white px-3 py-1 rounded-full font-bold">
                {property.discount} DESCUENTO
              </div>
              <Link to={`/offer/${property.id}`} className="block">
                <div className="relative h-48">
                  <img 
                    src={property.images[0]} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-[#0a8078]">USD {property.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">{property.location}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm mb-4">
                    <span>{property.rooms} hab.</span>
                    <span>{property.bathrooms} baños</span>
                    <span>{property.area.total} m²</span>
                  </div>
                  <button className="w-full bg-[#0a8078] text-white py-2 rounded-lg hover:bg-[#0a8078] transition">
                    Ver detalles
                  </button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center py-12 col-span-3">
            <h3 className="text-xl font-medium text-gray-700">No hay ofertas disponibles actualmente</h3>
            <p className="mt-2 text-gray-500">Vuelve a consultar próximamente para nuevas ofertas</p>
          </div>
        )}
      </div>
    </main>
  );
} 