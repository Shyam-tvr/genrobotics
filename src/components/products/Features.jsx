import React from "react";

const Features = ({ featuresDetails, description }) => {
  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">Key Features</h2>
      <p className=" text-sm mx-auto text-center">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
        {featuresDetails.map((feature, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <img
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className="rounded-lg"
            />
            <h3 className="font-bold text-center">{feature.title}</h3>
            <div className="bg-[linear-gradient(90deg,#fcd90100,#000000_50%,#fcd90100)] h-[1px] w-1/2 mx-auto"></div>
            <p className="text-[12px] mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block mt-8 w-1/2">
        View all
      </button>
    </div>
  );
};

export default Features;
