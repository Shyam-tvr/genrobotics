import Image from "next/image";
import React from "react";

const Industries = ({ IndustriesData }) => {
  
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">
        Industries We Serve
      </p>
      <div className="grid grid-cols-3 gap-2 mt-8">
        {IndustriesData.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow p-6"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src={industry.image}
                alt={industry.label}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium">{industry.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;

