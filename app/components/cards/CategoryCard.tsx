import { Link } from "@remix-run/react";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export function CategoryCard({ title, subtitle, image, link }: CategoryCardProps) {
  return (
    <div className="relative h-80 rounded-lg overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={`${title} en ${subtitle}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/90 mb-4">en {subtitle}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-white hover:text-white/80 transition-colors"
        >
          Ver más
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 