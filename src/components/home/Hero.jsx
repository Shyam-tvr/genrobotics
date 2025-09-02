import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-[url('/images/home/home-screen.png')] bg-cover bg-center pt-12">
      <p className="text-[#9D9D9D] text-xl sm:text-3xl text-center font-bold w-full px-4">
        Innovating for Safer Cities, Healthier Lives:
      </p>
      <p className="text-white text-xl sm:text-3xl text-center font-bold w-full px-4">
        Compliance Driven Robotics for a Cleaner Future
      </p>
      <p className="text-white w-full xs:text-sm px-4 py-8">
        Pioneering intelligent robotic solutions for sanitation, waste management, and hazardous confined space operations, ensuring compliance with regulations, human safety, and dignity.
      </p>
      <button className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block">
        Explore more Solutions
      </button>
    </div>
  );
};

export default Hero;
