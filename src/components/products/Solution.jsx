import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <div className="relative">
      <Image
        src="/images/products/solution-bg.png"
        alt="Transform"
        width={500}
        height={300}
        className="h-full w-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center p-4 mt-12 max-w-4xl mx-auto">
        <p className="text-2xl font-anton tracking-wide font-bold">The Complete Solution</p>
        <p className="text-sm mt-4">
          Advanced, vehicle-integrated robotic unit designed to transform
          confined space cleaning and its waste management with efficiency,
          safety, and innovation.{" "}
        </p>
      </div>
    </div>
  );
};

export default Solution;
