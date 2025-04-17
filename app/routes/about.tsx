import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Quiénes somos - Correa Properties" },
    {
      name: "description",
      content: "Conoce más sobre Correa Properties, nuestra misión, visión y valores.",
    },
  ];
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0a8078] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Quiénes somos</h1>
          <p className="text-xl max-w-3xl">
            En Correa Properties, nos dedicamos a transformar el mercado inmobiliario con un enfoque moderno, 
            transparente y personalizado. Nuestro equipo de profesionales está comprometido con brindar el 
            mejor servicio a nuestros clientes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a8078] mb-6">Misión</h2>
            <p className="text-gray-700 text-lg">
              Nuestra misión es revolucionar el mercado inmobiliario con un enfoque moderno, transparente y 
              personalizado. Nos comprometemos a ofrecer un servicio excepcional, basado en la honestidad, 
              la innovación y la atención al detalle, para ayudar a nuestros clientes a encontrar su hogar 
              ideal o realizar inversiones inmobiliarias exitosas.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a8078] mb-6">Visión</h2>
            <p className="text-gray-700 text-lg">
              Aspiramos a ser la inmobiliaria líder en Uruguay, reconocida por nuestra excelencia en el 
              servicio, innovación tecnológica y compromiso con la satisfacción del cliente. Buscamos 
              transformar la experiencia inmobiliaria, haciendo que cada transacción sea transparente, 
              eficiente y gratificante.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a8078] mb-12 text-center">Nuestros Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Transparencia</h3>
                <p className="text-gray-700">
                  Operamos con total transparencia en todas nuestras transacciones, proporcionando información 
                  clara y honesta a nuestros clientes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Compromiso</h3>
                <p className="text-gray-700">
                  Nos comprometemos a superar las expectativas de nuestros clientes, trabajando con 
                  dedicación y profesionalismo en cada proyecto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Cercanía</h3>
                <p className="text-gray-700">
                  Mantenemos una relación cercana con nuestros clientes, entendiendo sus necesidades y 
                  ofreciendo soluciones personalizadas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Innovación</h3>
                <p className="text-gray-700">
                  Adoptamos las últimas tecnologías y tendencias del mercado para ofrecer un servicio 
                  innovador y eficiente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Pasión</h3>
                <p className="text-gray-700">
                  Trabajamos con pasión y entusiasmo, disfrutando de cada proyecto y celebrando los 
                  éxitos de nuestros clientes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Confianza</h3>
                <p className="text-gray-700">
                  Construimos relaciones basadas en la confianza mutua, siendo honestos y éticos en 
                  todas nuestras operaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a8078] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para encontrar tu propiedad ideal?</h2>
            <p className="text-xl mb-8">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a encontrar la propiedad perfecta.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#0a8078] hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 