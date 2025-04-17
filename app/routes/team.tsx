import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Nuestro Equipo - Correa Properties" },
    {
      name: "description",
      content: "Conozca a nuestro equipo de profesionales inmobiliarios en Correa Properties.",
    },
  ];
};

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Davis Carder",
    position: "Supervisor Principal",
    image: "/images/team/davis-carder.jpg",
    bio: "Davis tiene más de 10 años de experiencia en el mercado inmobiliario, especializándose en propiedades de lujo y oportunidades de inversión."
  },
  {
    id: "2",
    name: "Maren Press",
    position: "Supervisor Principal",
    image: "/images/team/maren-press.jpg",
    bio: "Maren aporta una gran experiencia en propiedades residenciales y ha ayudado a cientos de familias a encontrar su hogar perfecto."
  },
  {
    id: "3",
    name: "Randy Rosser",
    position: "Supervisor Principal",
    image: "/images/team/randy-rosser.jpg",
    bio: "Con experiencia en finanzas, Randy proporciona valiosos conocimientos sobre inversiones inmobiliarias y tendencias del mercado."
  },
  {
    id: "4",
    name: "Haylie Donin",
    position: "Supervisor Principal",
    image: "/images/team/davis-carder.jpg",
    bio: "Haylie se especializa en propiedades comerciales y tiene un ojo agudo para identificar ubicaciones prometedoras para negocios."
  },
  {
    id: "5",
    name: "Miracle Bator",
    position: "Supervisor Principal",
    image: "/images/team/maren-press.jpg",
    bio: "Miracle es nuestra especialista en alquileres, ayudando a propietarios a encontrar inquilinos confiables y a inquilinos a encontrar hogares cómodos."
  }
];

export default function Team() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#4F6064] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Nuestro Equipo</h1>
          <p className="text-xl max-w-3xl">
            Conozca a nuestro dedicado equipo de profesionales inmobiliarios comprometidos en ayudarle a encontrar su propiedad perfecta.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{member.name}</h3>
                <p className="text-[#4F6064] font-medium mb-4">{member.position}</p>
                {member.bio && (
                  <p className="text-gray-600">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Únase a Nuestro Equipo</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Siempre estamos buscando personas talentosas para unirse a nuestro equipo. Si te apasiona el sector inmobiliario y brindar un servicio excepcional, nos encantaría conocerte.
          </p>
          <a 
            href="mailto:careers@correaproperties.com" 
            className="inline-block bg-[#4F6064] hover:bg-[#3D4C50] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Envíenos su currículum
          </a>
        </div>
      </section>
    </main>
  );
} 