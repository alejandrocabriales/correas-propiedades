import { useState } from "react";

interface PropertyTypeFilterProps {
  className?: string;
}

export const PropertyTypeFilter = ({ className }: PropertyTypeFilterProps) => {
  const [selectedType, setSelectedType] = useState<string>("venta");

  const filterOptions = [
    { id: "venta", label: "Venta" },
    { id: "alquiler", label: "Alquiler" },
    { id: "alquiler-temporal", label: "Alquiler Temporal" },
  ];

  return (
    <div className={`w-full bg-[#4F6064] bg-opacity-70 rounded-full overflow-hidden ${className}`}>
      <div className="flex">
        {filterOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => setSelectedType(option.id)}
            className={`flex-1 py-3 px-6 text-center transition-all duration-200 ${
              selectedType === option.id
                ? "bg-white text-[#4F6064] font-medium"
                : "text-white hover:bg-white hover:bg-opacity-10"
            } ${index !== 0 ? "border-l border-gray-600" : ""}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 