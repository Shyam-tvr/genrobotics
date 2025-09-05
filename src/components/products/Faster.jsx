import React from "react";

const data = [
  {
    image: "/images/products/faster-operation.png",
    title: "Faster Operations",
    description:
      "Reduced setup and transit times mean more manholes cleaned per day, significantly boosting productivity.",
  },
  {
    image: "/images/products/simple.png",
    title: "Simplified Logistics",
    description:
      "All-in-one unit eliminates the complexities of transporting separate equipment and managing waste handling manually.",
  },
  {
    image: "/images/products/detachable.png",
    title: "Enhanced Convenience",
    description:
      "Automated systems for loading, unloading, and waste dumping make the entire operation highly convenient for the crew.",
  },
];

const Faster = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold text-center">
        Faster | Simple | Convenient 
      </p>
      <div className="flex overflow-x-scroll mt-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow shrink-0 w-42 m-2 overflow-hidden">
              <img
                src={item.image}
                alt={`item ${index + 1}`}
              />
              <div className="p-4">
                <h3 className="font-bold text-center text-sm">{item.title}</h3>
                <div className="bg-[linear-gradient(90deg,#fcd90100,#000000_50%,#fcd90100)] h-[1px] w-1/2 mx-auto"></div>
                <p className="text-[12px] mt-4">{item.description}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faster;
