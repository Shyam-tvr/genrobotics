import Image from "next/image";
import React from "react";
import Slider from "../home/Slider";

const Recognition = ({ sliderContent }) => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">Recognition & Compliance</p>
      <div className="max-w-4xl mx-auto mt-4">
        <Slider>
          {sliderContent.map((content, index) => (
            <div className="flex overflow-hidden shadow-lg">
              <div>
                <Image
                  src={content.image}
                  alt="Image 1"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <div className="flex flex-col justify-center h-full">
                  <p className="text-sm font-semibold mb-1">{content.title}</p>
                  <p className="text-[12px]">{content.description}</p>
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
