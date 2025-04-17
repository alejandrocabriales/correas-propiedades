import { SearchBar } from "../inputs/SearchBar";
import { PropertyTypeFilter } from "../filters/PropertyTypeFilter";

export function Banner() {
  return (
    <div className="relative min-h-[600px] flex items-center mt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/modern-house-montevideo.jpg"
          alt="Propiedades de lujo en Montevideo - Carolina Correa Inmobiliaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F6064]/80 to-[#8C8680]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-3xl mb-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Carolina Correa - Tu Experta en Propiedades de Lujo en Montevideo
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Con más de 15 años de experiencia en el mercado inmobiliario de lujo, 
            Carolina Correa te ofrece un servicio exclusivo y personalizado para 
            encontrar tu propiedad ideal en Montevideo. Especializada en casas y 
            apartamentos de alta gama, Carolina combina su profundo conocimiento 
            del mercado local con su experiencia internacional en ciudades como 
            Madrid y Barcelona. Nuestro compromiso es brindarte una experiencia 
            única, donde cada detalle cuenta y cada propiedad cuenta una historia.
          </p>
        </div>

        <div className="w-full">
          <PropertyTypeFilter className="mb-4 w-full" />
          <SearchBar className="bg-white p-4 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
