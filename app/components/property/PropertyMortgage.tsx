import React from "react";

interface PropertyMortgageProps {
  price: number;
}

export const PropertyMortgage: React.FC<PropertyMortgageProps> = ({
  price,
}) => {
  // Dummy calculation for the mortgage - replace with actual logic if needed
  const monthlyPayment = (price * 0.005).toFixed(2);

  return (
    <div className="bg-[#F8F8F8] p-4 rounded-lg">
      <p className="text-gray-600">
        Hipoteca desde:{" "}
        <span className="font-semibold">{monthlyPayment} USD/ mes</span>
      </p>
      <button className="mt-2 bg-[#4F6064] hover:bg-[#3D4C50] text-white font-bold py-2 px-4 rounded">
        Solicitar hipoteca
      </button>
    </div>
  );
};
