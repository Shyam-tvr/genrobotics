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
    title: "Robotic Pit Cleaning at BPCL Chembur Refinery",
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
        <div className="flex gap-4 overflow-x-auto w-full max-w-4xl scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {impactData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white w-1/2 rounded-xl shadow flex-shrink-0 overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={150}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs mb-2">{item.title}</p>
                <div className="flex items-center">
                  <button className="text-[#6d6d6d] text-xs flex items-center gap-1">
                    Learn More
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                    </svg>
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
