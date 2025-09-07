import React from "react";

const Milestones = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-anton tracking-wide font-bold">
        Nationwide Impact & Milestones
      </p>
      <p className="mt-4 text-sm">
        Genrobotics, with its flagship product Bandicoot, has made significant
        strides in transforming sanitation practices across India, marking
        important milestones in its journey.
      </p>
      <div>
        <div className="flex flex-col w-full min-h-[540px] max-h-[720px] overflow-hidden flex-shrink-0 bg-[#F2F2F2] rounded-xl mt-12">
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src="/images/home/milestone1.png"
              alt="7 Years of Bandicoot: A Journey of Innovation"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <p className="text-xl font-anton mb-4">7 Years of Bandicoot: A Journey of Innovation</p>
            <p className="text-sm">Celebrating seven years of innovation and impact, Bandicoot's journey was significantly boosted by its launch, recognized and supported at the highest levels, including by the Hon'ble Prime Minister of India, Shri Narendra Modi. This endorsement highlighted the national importance of a technological solution to manual scavenging.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
