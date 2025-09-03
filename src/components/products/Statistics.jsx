import React from "react";

const Statistics = () => {
  return (
    <div className="px-4 py-12 bg-gradient-to-br from-[#FCD901] from-[-25%] to-white to-90%">
      <p className="text-center text-2xl font-bold">
        Our Overall Impact Statistics
      </p>
      <div>
        <div className="flex w-full justify-around gap-4 mt-8">
          <div className="w-1/2 p-4 rounded-lg border border-gray-400">
            <p className="text-xl font-semibold text-center mt-2">100%</p>
            <p className="text-center text-sm">Robotic Manhole Cleaning</p>
          </div>
          <div className="w-1/2 p-4 rounded-lg border border-gray-400">
            <p className="text-xl font-semibold text-center mt-2">100%</p>
            <p className="text-center text-sm">
              Elimination of Manual Scavenging
            </p>
          </div>
        </div>
        <div className="flex w-full justify-around gap-4 mt-4">
          <div className="w-1/2 p-4 rounded-lg border border-gray-400">
            <p className="text-xl font-semibold text-center mt-2">62%</p>
            <p className="text-center text-sm">Reduction in Operation Cost</p>
          </div>
        </div>
      </div>
      <p className="uppercase text-center mt-4 text-sm">Return on investment (ROI) IN 18 Months</p>
      <p className="text-center text-[10px]">under optimum conditions*</p>
    </div>
  );
};

export default Statistics;
