import React from "react";

interface PropertyFeaturesProps {
  type: string;
  area: number;
  location: string;
  rooms?: number;
}

export const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({
  type,
  area,
  location,
  rooms,
}) => {
  return (
    <div className="flex items-center gap-4 justify-between bg-[#F8F8F8] p-4 rounded-lg">
      {/* Placeholder icons - replace with better ones if available */}
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <span>{type}</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <span>{area} m²</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <span>{location}</span>
      </div>
      {rooms && (
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <span>{rooms} Habitaciones</span>
        </div>
      )}
    </div>
  );
};
