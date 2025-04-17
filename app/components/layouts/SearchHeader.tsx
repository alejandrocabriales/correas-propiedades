import { useLocation } from "@remix-run/react";

interface SearchHeaderProps {
  title?: string;
  subtitle?: string;
}

export const SearchHeader = ({ 
  title = "Buscar una propiedad", 
  subtitle = "Elige entre las ofertas más ventajosas" 
}: SearchHeaderProps) => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  
  return (
    <div className={`text-center py-10 ${isSearchPage ? 'pb-6' : ''}`}>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
    </div>
  );
};