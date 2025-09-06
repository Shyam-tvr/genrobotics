import React from "react";
import Slider from "./Slider";

const AwardsDetails =[
  {
    id: 1,
    image: "/images/home/Forbes.png",
    title: "Forbes 30 Under 30",
    description: "Recognizing our visionary leadership"
  },
  {
    id: 2,
    image: "/images/home/Swachhata.jpg",
    title: "SWACHHATA STARTUP CHALLENGE",
    description: "For innovation in environmental robotics."
  }
]

const Awards = () => {
  return (
    <div className="px-4 py-12 bg-black">
      <p className="text-[#FCD901] text-center text-2xl font-bold">
        Awards & Recognition
      </p>
      <p className="text-sm text-center font-extralight text-white mt-4">
        Discover the tangible difference Genrobotics' solutions
      </p>
      <div className="flex overflow-hidden">
        <Slider>
          {
            AwardsDetails.map((award) => (
              <div key={award.id} className="mx-4 my-8 bg-[#2b2b2b] p-4 rounded-xl">
                <img
                  src={award.image}
                  alt={award.title}
                  className="object-cover w-[300px] h-[150px] rounded-xl"
                />
                <p className="text-sm text-center font-semibold text-white mt-4">
                  {award.title}
                </p>
                <p className="text-xs text-center text-gray-400 mt-2">
                  {award.description}
                </p>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Awards;
