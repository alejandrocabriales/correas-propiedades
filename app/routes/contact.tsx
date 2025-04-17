import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contacto - Correa Properties" },
    {
      name: "description",
      content: "Contáctanos para más información sobre nuestros servicios inmobiliarios y oportunidades laborales.",
    },
  ];
};

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0a8078] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl">
            Estamos aquí para ayudarte. Ya sea que busques información sobre propiedades o quieras formar parte de nuestro equipo, 
            completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Form method="post" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a8078] focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a8078] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a8078] focus:border-transparent"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a8078] focus:border-transparent"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="venta">Venta de propiedad</option>
                      <option value="alquiler">Alquiler de propiedad</option>
                      <option value="tasacion">Tasación de propiedad</option>
                      <option value="trabajo">Oportunidad laboral</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a8078] focus:border-transparent"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#0a8078] border-gray-300 rounded focus:ring-[#0a8078]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-700">
                      Acepto el procesamiento de mis datos personales según la política de privacidad
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#a359a0] text-white py-3 px-6 rounded-lg hover:bg-[#8a4a87] transition-colors font-medium"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a8078] mb-12 text-center">Oportunidades Laborales</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Asesor/a Inmobiliario</h3>
                <p className="text-gray-700 mb-4">
                  Buscamos profesionales con experiencia en el sector inmobiliario para unirse a nuestro equipo. 
                  Responsabilidades incluyen asesoramiento a clientes, gestión de propiedades y seguimiento de operaciones.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Experiencia mínima de 2 años en el sector</li>
                  <li>Excelentes habilidades de comunicación</li>
                  <li>Disponibilidad para trabajar en equipo</li>
                  <li>Conocimiento del mercado inmobiliario uruguayo</li>
                </ul>
                <p className="text-sm text-gray-500">Enviar CV a: rrhh@correaproperties.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Asistente Administrativo/a</h3>
                <p className="text-gray-700 mb-4">
                  Posición ideal para personas organizadas y proactivas. Responsabilidades incluyen gestión documental, 
                  atención al cliente y apoyo en tareas administrativas.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Experiencia en gestión administrativa</li>
                  <li>Manejo de herramientas informáticas</li>
                  <li>Excelente atención al cliente</li>
                  <li>Capacidad de trabajo en equipo</li>
                </ul>
                <p className="text-sm text-gray-500">Enviar CV a: rrhh@correaproperties.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Marketing Digital</h3>
                <p className="text-gray-700 mb-4">
                  Buscamos un/a profesional creativo/a para gestionar nuestras estrategias digitales y presencia en redes sociales.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Experiencia en marketing digital</li>
                  <li>Manejo de redes sociales</li>
                  <li>Conocimiento de SEO y SEM</li>
                  <li>Creatividad y capacidad de análisis</li>
                </ul>
                <p className="text-sm text-gray-500">Enviar CV a: rrhh@correaproperties.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a8078] mb-12 text-center">Información de contacto</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Teléfono</h3>
                <p className="text-gray-700">+598 XX XXX XXX</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Email</h3>
                <p className="text-gray-700">info@correaproperties.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#0a8078] text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a8078] mb-2">Dirección</h3>
                <p className="text-gray-700">Montevideo, Uruguay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 