import React from "react";

const statisticsData = [
  { label: "Countries", value: 4 },
  { label: "States", value: 22 },
  { label: "Robots Deployed", value: 220 },
  { label: "Workers Trained & Empowered", value: 6000 },
  { label: "Confined Spaces Cleaned Safely", value: 2300000 },
  { label: "Tons of Hazardous Waste Safely Removed", value: 1100000 },
];

const Statistics = () => {
  return (
    <div className="px-4 py-24">
      <p className="text-2xl font-bold text-center">
        Our Overall Impact Statistics
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {statisticsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white px-2 py-4 rounded-lg shadow-md text-center"
          >
            <p className="text-2xl font-bold">{stat.value} +</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block uppercase">
        More About Us
      </button>
    </div>
  );
};

export default Statistics;
