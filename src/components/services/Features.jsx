import React from "react";
const featuresDetails = [
  {
    icon: "/images/services/ugd-feature1.png",
    title: "Enhanced Efficiency",
    description:
      "Optimize resource allocation, reduce fuel costs, and increase the number of tasks completed daily.",
  },
  {
    icon: "/images/services/ugd-feature2.png",
    title: "Complete Transparency",
    description:
      "Gain a clear, real-time view of all field activities, from task assignment to completion.",
  },
  {
    icon: "/images/services/ugd-feature3.png",
    title: "Improved Worker Safety",
    description: "Maintain a complete inventory of your sanitation assets. Track usage, schedule maintenance, and optimize the lifecycle of your robotic fleet.",
  },
  {
    icon: "/images/services/ugd-feature4.png",
    title: "Data-Driven Maintenance",
    description:
      "Shift from reactive repairs to proactive, predictive maintenance based on real-world data and AI insights.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">Key Benefits of a Digitalized Ecosystem</h2>
      <p className=" text-sm mx-auto text-center"></p>
      <div className="grid grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
        {featuresDetails.map((feature, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            {feature.image ? (
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="rounded-lg"
              />
            ) : (
              <>
                <div className="w-fit mx-auto rounded-lg ">
                  <img src={feature.icon} alt="" />
                </div>
              </>
            )}

            <h3 className="font-bold text-center text-sm mt-4">{feature.title}</h3>
            <div className="bg-[linear-gradient(90deg,#fcd90100,#000000_50%,#fcd90100)] h-[1px] w-1/2 mx-auto"></div>
            <p className="text-xs mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block mt-8 w-1/2">
        View all
      </button>
    </div>
  );
};

export default Features;
