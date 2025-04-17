import { Link } from "@remix-run/react";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Davis Carder",
    position: "Super duper position",
    image: "/images/team/davis-carder.jpg"
  },
  {
    id: "2",
    name: "Maren Press",
    position: "Super duper position",
    image: "/images/team/maren-press.jpg"
  },
  {
    id: "3",
    name: "Randy Rosser",
    position: "Super duper position",
    image: "/images/team/randy-rosser.jpg"
  },
  {
    id: "4",
    name: "Haylie Donin",
    position: "Super duper position",
    image: "/images/team/davis-carder.jpg"
  },
  {
    id: "5",
    name: "Miracle Bator",
    position: "Super duper position",
    image: "/images/team/maren-press.jpg"
  }
];

export function TeamSection() {
  // Mostrar solo los primeros 3 miembros del equipo en la sección principal
  const displayedMembers = teamMembers.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to providing exceptional service and expertise in the real estate market.
          </p>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayedMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">{member.name}</h3>
                <p className="text-[#4F6064] mb-4">{member.position}</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4F6064]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4F6064]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4F6064]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/team" 
            className="inline-block bg-[#4F6064] hover:bg-[#3D4C50] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            View all team members
          </Link>
        </div>
      </div>
    </section>
  );
} 