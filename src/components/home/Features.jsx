import Image from "next/image";
import React from "react";

const featureList = [
  {
    image: "/images/home/Feature1.png",
    title: "AI-Powered Innovation",
    description: "Leading the industry with cutting-edge AI and robotics research and development.",
  },
  {
    image: "/images/home/Feature2.png",
    title: "Patented Technology",
    description: "Proprietary and patented solutions ensuring superior performance and reliability.",
  },
  {
    image: "/images/home/Feature3.png",
    title: "Global Social Impact",
    description: "Committed to eliminating manual scavenging and creating safer working conditions worldwide.",
  },
  {
    image: "/images/home/Feature4.png",
    title: "Sustainability Focus",
    description: "Dedicated to developing eco-friendly and energy-efficient robotic solutions for a cleaner planet.",
  },
  {
    image: "/images/home/Feature5.png",
    title: "Proven Reliability",
    description: "Our robots are built for robust performance in the most challenging environments.",
  },
  {
    image: "/images/home/Feature6.png",
    title: "Expert Support",
    description: "Comprehensive support and training to ensure seamless integration and operation.",
  },
];

const Features = () => {
  return (
    <div className="px-4 py-16">
      <p className="text-center text-2xl font-bold">Why Choose Genrobotics?</p>
      <div className="mt-12 grid grid-cols-2 gap-4">
        {
          featureList.map((feature, index) => (
            <div key={index}>
              <div className="p-4 shadow-lg rounded-lg">
                <Image
                  src={feature.image}
                  width={50}
                  height={50}
                  alt={`Feature ${index + 1}`}
                  className="h-14 w-14"
                />
                <div>
                  <p className="font-bold my-2 text-sm">{feature.title}</p>
                </div>
              <p className="text-xs">{feature.description}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Features;
