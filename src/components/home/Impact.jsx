import Image from "next/image";
import React from "react";

const Impact = () => {
  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">
        Our Impact and Case Studies
      </h2>
      <p className="py-2 text-sm  max-w-2xl mx-auto">
        Discover the tangible difference Genrobotics' solutions have made across
        industries, communities, and for the environment. Our case studies
        highlight real-world challenges met with innovative robotic solutions.
      </p>
      <div className="flex justify-center mt-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6 max-w-xl w-full">
          <div className="flex-shrink-0">
            <Image
              src=""
              alt="Impact Image"
              width={200}
              height={150}
              className="rounded object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm font-semibold mb-4">
              Bandicoot Mobility+ at Ahmedabad Airport
            </p>
            <div className="flex items-center">
              <button className="font-medium hover:underline flex items-center">
                Learn More
                <img
                  src="/images/home/Arrow.png"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
