import React from "react";
import Slider from "../home/Slider";

const Updates = ({updatesContent}) => {
  return (
    <div className="px-4 py-24">
      <p className="text-center text-xl font-bold">RECENT UPDATES</p>
      <div>
        <Slider>
          {updatesContent.map((content, index) => (
            <div
              key={index}
              className="flex flex-col w-full min-h-[540px] max-h-[720px] overflow-hidden flex-shrink-0 bg-[#F2F2F2] rounded-xl"
            >
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-bold mb-4">{content.title}</p>
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Updates;
