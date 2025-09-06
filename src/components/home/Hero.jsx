import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="h-screen relative bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url('/images/home/home-screen.png')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 via-black/50 to-transparent z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <p className="text-[#9D9D9D] text-2xl text-center font-bold w-full px-4">
          Innovating for Safer Cities, Healthier Lives:
        </p>
        <p className="text-white text-2xl text-center font-bold w-full px-4">
          Compliance Driven Robotics for a Cleaner Future
        </p>
        <p className="text-white w-full text-sm px-4 py-8">
          Pioneering intelligent robotic solutions for sanitation, waste
          management, and hazardous confined space operations, ensuring
          compliance with regulations, human safety, and dignity.
        </p>
        <Link className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block" href="#products" scroll={true}>Explore more Solutions</Link>
      </div>
    </div>
  );
};

export default Hero;
