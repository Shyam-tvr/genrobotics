import Image from "next/image";
import React from "react";

const Transform = () => {
  return (
    <div className="relative">
      <Image
        src="/images/home/transform.png"
        alt="Transform"
        width={500}
        height={300}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center p-4 mt-24">
        <span className="text-[#FCD901] text-2xl text-center font-bold drop-shadow-lg">
          Transforming Sanitation with Advanced Robotics & AI
        </span>
        <div className="bg-[linear-gradient(90deg,#fcd90100,#fcda01d1_50%,#fcd90100)] h-[2px] w-1/2 mx-auto mt-4"></div>
        <p className="text-white mt-4 font-thin">
          To address these critical challenges, Genrobotics, India’s leading
          robotics company, has developed revolutionary robotic technologies
          dedicated to transforming sanitation. With a strong focus on safety,
          dignity, and efficiency, Genrobotics builds smart, human-assistive
          robots designed specifically for confined and hazardous environments.
          These innovations go beyond eliminating manual entry; they streamline
          the entire sanitation process, ensuring a safer, cleaner, and more
          dignified future.
        </p>
      </div>
    </div>
  );
};

export default Transform;
