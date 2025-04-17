import { Link } from "@remix-run/react";

export function HeroSection() {
  return (
    <section className="relative bg-[#0F172A] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Encuentra tu hogar perfecto en Uruguay
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Descubre propiedades exclusivas en las mejores ubicaciones. Nuestro equipo de expertos te ayudará a encontrar la propiedad ideal para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/properties" 
              className="bg-[#4F6064] hover:bg-[#3D4C50] text-white font-medium px-8 py-3 rounded transition-colors text-center"
            >
              Ver propiedades
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-[#0F172A] font-medium px-8 py-3 rounded transition-colors text-center"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 