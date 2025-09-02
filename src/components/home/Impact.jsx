import Image from "next/image";
import React from "react";

const impactData = [
  {
    image: "/images/home/impact1.png",
    title: "Bandicoot Mobility+ at Ahmedabad Airport",
    link: "#",
  },
  {
    image: "/images/home/impact2.png",
    title: "Bandicoot in Disaster Management",
    link: "#",
  },
];

const Impact = () => {
  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">
        Our Impact and Case Studies
      </h2>
      <p className="py-2 text-sm max-w-2xl mx-auto text-center">
        Discover the tangible difference Genrobotics' solutions have made across
        industries, communities, and for the environment. Our case studies
        highlight real-world challenges met with innovative robotic solutions.
      </p>
      <div className="flex justify-center mt-8">
        <div className="flex gap-4 overflow-x-auto py-2 w-full max-w-4xl scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {impactData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center gap-6 min-w-[320px] flex-shrink-0"
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="rounded object-cover"
                />
              </div>
              <div className="flex flex-col justify-between h-full items-center">
                <p className="text-sm font-semibold mb-4 text-center">
                  {item.title}
                </p>
                <div className="flex items-center">
                  <button className="font-medium hover:underline flex items-center">
                    Learn More
                    <img
                      src="/images/home/Arrow.png"
                      alt="Arrow"
                      className="ml-2 w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
