import { Link } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";

export function Header() {
  const [theme, setTheme] = useTheme();
  console.log(theme);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 z-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[#a359a0] dark:text-[#a359a0]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/top-offers"
              className="text-gray-800 dark:text-gray-200 hover:text-[#a359a0] dark:hover:text-[#a359a0] font-medium text-sm transition-colors"
            >
              Mejores ofertas
            </Link>
            <Link
              to="/search"
              className="text-gray-800 dark:text-gray-200 hover:text-[#a359a0] dark:hover:text-[#a359a0] font-medium text-sm transition-colors"
            >
              Buscar propiedades
            </Link>

            <Link
              to="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-[#a359a0] dark:hover:text-[#a359a0] font-medium text-sm transition-colors"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/team"
              className="text-gray-800 dark:text-gray-200 hover:text-[#a359a0] dark:hover:text-[#a359a0] font-medium text-sm transition-colors"
            >
              Nuestro equipo
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() =>
                setTheme((prev) =>
                  prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
                )
              }
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label={
                theme === Theme.LIGHT
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === Theme.LIGHT ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-[#0a8078] hover:bg-[#0a8078] text-white text-sm font-medium px-6 py-2 rounded"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
