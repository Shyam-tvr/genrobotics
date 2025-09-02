import Image from "next/image";
import React from "react";


const IndustriesData = [
    {
        image: "/images/home/Industry1.png",
        label: "Municipal & Urban Services"
    },
    {
        image: "/images/home/Industry2.png",
        label: "Oil & Gas Industries"
    },
    {
        image: "/images/home/Industry3.png",
        label: "Chemical & Pharmaceutical"
    },
    {
        image: "/images/home/Industry4.png",
        label: "Utilities & Infrastructure"
    },
    {
        image: "/images/home/Industry5.png",
        label: "Disaster Management"
    },
    {
        image: "/images/home/Industry6.png",
        label: "Manufacturing"
    }
]

const Industries = () => {
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

