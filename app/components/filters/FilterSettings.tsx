import { Select } from "../ui/select";
import { useSearchParams } from "@remix-run/react";

export const FilterSettings = () => {
  const [searchParams] = useSearchParams();
  
  // Get current filter values from URL if they exist
  const propertyType = searchParams.get("propertyType") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const location = searchParams.get("location") || "";
  const currency = searchParams.get("currency") || "USD";
  
  return (
    <div className="mt-4">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Configuración de filtros
      </span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <Select 
          name="propertyType" 
          defaultValue={propertyType}
        >
          <option value="">Tipo de operación</option>
          <option value="sale">Venta</option>
          <option value="rent">Alquiler</option>
        </Select>
        
        <Select 
          name="bedrooms" 
          defaultValue={bedrooms}
        >
          <option value="">Habitaciones</option>
          <option value="1">1 habitación</option>
          <option value="2">2 habitaciones</option>
          <option value="3">3 habitaciones</option>
          <option value="4">4+ habitaciones</option>
        </Select>
        
        <Select 
          name="location" 
          defaultValue={location}
        >
          <option value="">Ubicación</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Madrid">Madrid</option>
          <option value="Canelones">Canelones</option>
        </Select>
        
        <Select 
          name="currency" 
          defaultValue={currency}
        >
          <option value="USD">Dólares (USD)</option>
          <option value="UYU" disabled>Pesos Uruguayos (UYU)</option>
        </Select>
      </div>
    </div>
  );
};