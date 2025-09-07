import React from "react";

const Statistics = ({ statisticsData }) => {
  return (
    <div className="px-4 py-12 bg-gradient-to-br from-[#fcda01a9] to-white">
      <p className="text-center text-2xl font-anton font-bold tracking-wide">
        Our Overall Impact Statistics
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
        {statisticsData.map((item, index) => {
          const isLastItem = index === statisticsData.length - 1;
          const isOdd = statisticsData.length % 2 !== 0;

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border border-gray-400 flex flex-col justify-center ${
                isOdd && isLastItem ? "col-span-2 mx-auto w-1/2" : ""
              }`}
            >
              <p className="text-2xl font-bold text-center mt-2 font-bayon tracking-wider">
                {item.value}
              </p>
              <p className="text-center text-sm whitespace-pre-line">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      <p className="uppercase text-center mt-4 text-sm">
        Return on investment (ROI) IN 18 Months
      </p>
      <p className="text-center text-[10px]">under optimum conditions*</p>
    </div>
  );
};

export default Statistics;
