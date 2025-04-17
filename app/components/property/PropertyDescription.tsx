import React from "react";

interface PropertyDescriptionProps {
  description: string;
}

export const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="prose">
      <p>{description}</p>
    </div>
  );
};
