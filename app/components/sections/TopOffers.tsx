import { useState } from "react";
import { Link } from "@remix-run/react";
import { CategoryCard } from "../cards/CategoryCard";

// Datos de categorías
const categories = [
  {
    id: "1",
    title: "Alquiler",
    subtitle: "de Apartamentos",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=alquiler&property=apartamento"
  },
  {
    id: "2",
    title: "Venta",
    subtitle: "de Casas",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=venta&property=casa"
  },
  {
    id: "3",
    title: "Alquiler",
    subtitle: "en Pocitos",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=alquiler&location=pocitos"
  },
  {
    id: "4",
    title: "Venta",
    subtitle: "en Pocitos",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=venta&location=pocitos"
  },
  {
    id: "5",
    title: "Venta",
    subtitle: "en Carrasco",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=venta&location=carrasco"
  },
  {
    id: "6",
    title: "Alojamientos",
    subtitle: "en Punta del Este",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=alojamiento&location=punta-del-este"
  },
  {
    id: "7",
    title: "Alquiler",
    subtitle: "en Montevideo",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=alquiler&location=montevideo"
  },
  {
    id: "8",
    title: "Venta",
    subtitle: "en Montevideo",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=venta&location=montevideo"
  },
  {
    id: "9",
    title: "Venta",
    subtitle: "en Canelones",
    image: "/images/categories/alquiler-apartamentos.jpg",
    link: "/search?type=venta&location=canelones"
  }
];

export function TopOffers() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Obtener las categorías para la página actual
  const displayedCategories = categories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-3">Top offers</h2>
            <p className="text-gray-600 max-w-2xl">
              Fulfill your career dreams, enjoy all the achievements of the
              city center and luxury housing to the fullest.
            </p>
          </div>
          <Link 
            to="/search" 
            className="border border-[#4F6064] text-[#4F6064] hover:bg-[#4F6064] hover:text-white px-6 py-2 rounded transition-colors"
          >
            Show all offers
          </Link>
        </div>

        <div className="h-px bg-gray-200 w-full mb-8"></div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCategories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                subtitle={category.subtitle}
                image={category.image}
                link={category.link}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevPage}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-600 hover:text-[#4F6064] focus:outline-none"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            onClick={nextPage}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-600 hover:text-[#4F6064] focus:outline-none"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 