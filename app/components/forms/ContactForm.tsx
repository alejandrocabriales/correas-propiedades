import { useState } from "react";

interface ContactFormProps {
  propertyId: string;
  propertyTitle: string;
}

export const ContactForm = ({ propertyId, propertyTitle }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: `Hola, estoy interesado/a en la propiedad "${propertyTitle}" (ID: ${propertyId}). Por favor contáctenme con más información.`,
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", { ...formData, propertyId, propertyTitle });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#F8F8F8] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900">Contáctanos</h2>
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Número de teléfono
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Tu mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          required
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
          Acepto el procesamiento de datos personales
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#4F6064] py-3 px-4 text-white font-semibold rounded-md hover:bg-[#3D4C50] focus:outline-none focus:ring-2 focus:ring-[#8C8680] focus:ring-offset-2 transition-colors"
      >
        Enviar mensaje
      </button>
    </form>
  );
}; 