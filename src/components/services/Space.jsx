import Image from "next/image";
import React from "react";

const Space = () => {
  return (
    <div className="relative">
      <Image
        src="/images/services/ugd-space-bg.png"
        alt="Transform"
        width={500}
        height={500}
        className="h-full w-screen object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center p-4 mt-8 max-w-4xl mx-auto">
        <p className="text-2xl font-bold text-center">Our Integrated Solution: Hardware + G-Crow Platform</p>
        <p className="text-sm text-center mt-4">Creating a Smart, Transparent, and Accountable Ecosystem</p>
        <p className="text-left mt-6 text-sm mx-4">Genrobotics offers a comprehensive service to digitalize your entire UGD workflow. We achieve this by seamlessly integrating our advanced automated cleaning systems (like Bandicoot, Mobility+, and Wilboar) with our powerful G-Crow management platform.This service transforms sanitation management from a reactive, manual process into a proactive, data-driven operation. Municipalities can now monitor, manage, and optimize their entire sanitation network from a single dashboard, ensuring a cleaner and healthier urban environment.</p>
      </div>
    </div>
  );
};

export default Space;
