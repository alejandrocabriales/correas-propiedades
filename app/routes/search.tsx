import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { SearchHeader } from "../components/layouts/SearchHeader";
import { PropertyService } from "../services/propertyService";
import { PropertyCard } from "../components/cards/PropertyCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Búsqueda de Propiedades - Correa Properties" },
    {
      name: "description",
      content: "Encuentra tu propiedad ideal con nuestros filtros de búsqueda avanzados.",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  
  // Extraer parámetros de búsqueda
  const keyword = url.searchParams.get("keyword") || "";
  const location = url.searchParams.get("location") || undefined;
  const propertyType = url.searchParams.get("propertyType") || undefined;
  const minPrice = url.searchParams.get("minPrice") ? Number(url.searchParams.get("minPrice")) : undefined;
  const maxPrice = url.searchParams.get("maxPrice") ? Number(url.searchParams.get("maxPrice")) : undefined;
  const bedrooms = url.searchParams.get("bedrooms") ? Number(url.searchParams.get("bedrooms")) : undefined;
  const currency = url.searchParams.get("currency") || "USD";
  const sortBy = url.searchParams.get("sortBy") || undefined;
  
  // Buscar propiedades según los criterios
  let properties = await PropertyService.getAllProperties();
  
  // Aplicar filtros si hay parámetros de búsqueda
  if (keyword || location || propertyType || minPrice || maxPrice || bedrooms || currency) {
    properties = await PropertyService.searchProperties({
      location,
      minPrice,
      maxPrice,
      bedrooms,
      currency,
    });
    
    // Filtrar por palabra clave en título o descripción si existe
    if (keyword) {
      properties = properties.filter(property => 
        property.title.toLowerCase().includes(keyword.toLowerCase()) ||
        property.description.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  }
  
  // Ordenar resultados si se especifica
  if (sortBy) {
    switch (sortBy) {
      case "price_desc":
        properties = properties.sort((a, b) => b.price - a.price);
        break;
      case "price_asc":
        properties = properties.sort((a, b) => a.price - b.price);
        break;
      case "recent":
        // Aquí podríamos ordenar por fecha si tuviéramos ese campo
        break;
    }
  }
  
  return json({ properties, keyword, currency });
}

export default function SearchPage() {
  const { properties, keyword, currency } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange] = useState([0, 980000]);
  
  // Valores actuales de los filtros
  const location = searchParams.get("location") || "";
  const propertyType = searchParams.get("propertyType") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const sortBy = searchParams.get("sortBy") || "";
  
  // Función para actualizar los filtros
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newParams = new URLSearchParams();
    
    // Añadir todos los parámetros del formulario
    for (const [key, value] of formData.entries()) {
      if (value) {
        newParams.set(key, value.toString());
      }
    }
    
    // Añadir el rango de precios
    newParams.set("minPrice", priceRange[0].toString());
    newParams.set("maxPrice", priceRange[1].toString());
    
    setSearchParams(newParams);
  };
  
  // Determinar el título y subtítulo basado en los parámetros de búsqueda
  let title = "Búsqueda de Propiedades";
  let subtitle = "Encuentra tu propiedad ideal con nuestros filtros de búsqueda";
  
  if (keyword) {
    title = `Resultados para "${keyword}"`;
    subtitle = `${properties.length} propiedades encontradas`;
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <SearchHeader title={title} subtitle={subtitle} />
      
      {/* Formulario de búsqueda */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-[#8C8680]/20">
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                name="keyword"
                placeholder="Buscar por palabra clave"
                defaultValue={keyword}
                className="w-full px-4 py-3 border-2 border-[#8C8680]/30 bg-white text-[#4F6064] rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4F6064] text-white p-2 rounded-lg hover:bg-[#3D4C50] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="text-sm text-[#4F6064] mb-2">Configuración de filtros</div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <select 
                name="propertyType" 
                defaultValue={propertyType}
                className="appearance-none w-full px-3 py-2 border-2 border-[#8C8680]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] bg-white text-[#4F6064] pr-12 transition-colors"
              >
                <option value="">Tipo de operación</option>
                <option value="sale">Venta</option>
                <option value="rent">Alquiler</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#4F6064]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="bedrooms" 
                defaultValue={bedrooms}
                className="appearance-none w-full px-3 py-2 border-2 border-[#8C8680]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] bg-white text-[#4F6064] pr-12 transition-colors"
              >
                <option value="">Habitaciones</option>
                <option value="1">1 habitación</option>
                <option value="2">2 habitaciones</option>
                <option value="3">3 habitaciones</option>
                <option value="4">4+ habitaciones</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#4F6064]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="location" 
                defaultValue={location}
                className="appearance-none w-full px-3 py-2 border-2 border-[#8C8680]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] bg-white text-[#4F6064] pr-12 transition-colors"
              >
                <option value="">Ubicación</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Canelones">Canelones</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#4F6064]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="currency" 
                defaultValue={currency}
                className="appearance-none w-full px-3 py-2 border-2 border-[#8C8680]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] bg-white text-[#4F6064] pr-12 transition-colors"
              >
                <option value="USD">Dólares (USD)</option>
                <option value="UYU" disabled>Pesos Uruguayos (UYU)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#4F6064]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="sortBy" 
                defaultValue={sortBy}
                className="appearance-none w-full px-3 py-2 border-2 border-[#8C8680]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F6064] focus:border-[#4F6064] bg-white text-[#4F6064] pr-12 transition-colors"
              >
                <option value="">Ordenar por</option>
                <option value="price_desc">Más caros</option>
                <option value="price_asc">Más baratos</option>
                <option value="recent">Más recientes</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#4F6064]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2 text-[#4F6064]">
              <span>0 USD</span>
              <span>980.000 USD</span>
            </div>
            <div className="relative h-2 bg-[#8C8680]/20 rounded-full">
              <div className="absolute h-2 bg-[#4F6064] rounded-full" style={{ left: '0%', width: '100%' }}></div>
              <div className="absolute w-4 h-4 bg-[#4F6064] rounded-full -mt-1 cursor-pointer hover:bg-[#3D4C50] transition-colors border-2 border-white shadow-sm" style={{ left: '0%' }}></div>
              <div className="absolute w-4 h-4 bg-[#4F6064] rounded-full -mt-1 cursor-pointer hover:bg-[#3D4C50] transition-colors border-2 border-white shadow-sm" style={{ left: '100%' }}></div>
            </div>
          </div>
        </form>
      </div>
      
      {/* Resultados de búsqueda */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No se encontraron propiedades</h3>
            <p className="mt-2 text-gray-500">Intenta con otros criterios de búsqueda</p>
          </div>
        )}
      </div>
    </main>
  );
} 