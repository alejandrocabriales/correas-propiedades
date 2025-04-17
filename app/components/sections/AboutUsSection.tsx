import { Link } from "@remix-run/react";

export function AboutUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Sobre nosotros</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Somos una empresa que conecta el mundo inmobiliario y financiero, brindando un servicio excepcional por más de 15 años.
          </p>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#4F6064] text-white rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Propiedades Premium</h3>
            <p className="text-gray-700">
              Ofrecemos una amplia gama de propiedades premium en las ubicaciones más atractivas de Uruguay, desde apartamentos de lujo hasta espaciosas casas familiares.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#4F6064] text-white rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Asesoramiento Experto</h3>
            <p className="text-gray-700">
              Nuestro equipo de profesionales experimentados brinda orientación experta durante todo el proceso, desde la selección de propiedades hasta asuntos financieros y legales.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-[#4F6064] text-white rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Servicio Personalizado</h3>
            <p className="text-gray-700">
              Creemos en brindar un servicio personalizado adaptado a sus necesidades y preferencias específicas, asegurando una experiencia fluida y satisfactoria.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-block bg-[#4F6064] hover:bg-[#3D4C50] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
} 