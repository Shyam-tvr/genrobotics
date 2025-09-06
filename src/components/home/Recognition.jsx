import Image from "next/image";
import React from "react";
import Slider from "./Slider";

const sliderContent = [
  {
    image: "/images/home/recognition1.png",
    title: "Supreme Court Judgement",
    description:
      "As per SC Judgement (Writ Petition No. 324/2020), Bandicoot was cited for employing modern technology to eliminate Manual Scavenging.",
  },
  {
    image: "/images/home/recognition1.png",
    title: "Swachh Survekshan Toolkit",
    description:
      "The Government of India recognized Bandicoot as a significant advancement in robotics for sanitation, aligning with the National Policy on Robotics.",
  },
  {
    image: "/images/home/recognition1.png",
    title: "International Recognition",
    description:
      "Bandicoot has gained international recognition for its innovative approach to sanitation, receiving accolades from various global organizations.",
  }
];

const Recognition = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">Recognition & Compliance</p>
      <div className="max-w-4xl mx-auto mt-8">
        <Slider>
          {sliderContent.map((content, index) => (
          <div className="flex overflow-hidden shadow-lg">
              <div>
                  <Image src={content.image} alt="Image 1" width={500} height={300} />
              </div>
              <div>
                  <div className="flex flex-col justify-center h-full">
                      <p className="text-sm font-semibold mb-1">{content.title}</p>
                      <p className="text-xs">{content.description}</p>
                  </div>
              </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recognition;
