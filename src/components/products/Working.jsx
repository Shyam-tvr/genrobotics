"use client";
import React, { useState } from "react";

const data = [
  {
    title: "What types of manholes can Bandicoot clean?",
    description:
      "Bandicoot is designed to clean various types of manholes, including standard circular manholes, rectangular manholes, and those with different depths and diameters commonly found in urban and industrial settings. Its adaptable robotic arm and versatile attachments allow it to handle diverse waste materials like sludge, silt, and solid debris.",
  },
  {
    title: "How does Bandicoot ensure operator safety?",
    description:
      "Operator safety is paramount. Bandicoot eliminates the need for human entry into hazardous manholes. The entire operation is controlled remotely from a safe distance. Additionally, the robot is equipped with gas sensors to detect toxic gases and HD cameras for clear visibility, further enhancing safety and operational control.",
  },
  {
    title: "Is training provided for operating Bandicoot?",
    description:
      "Yes, Genrobotics provides comprehensive training programs for operating and maintaining the Bandicoot robot. We focus on empowering existing sanitation workers by transforming them into skilled robotic operators, ensuring they can efficiently and safely use the technology.",
  },
  {
    title:
      "What is the cleaning efficiency of Bandicoot compared to manual methods?",
    description:
      "Bandicoot significantly improves cleaning efficiency. It can clean manholes more thoroughly and in less time compared to manual methods. The robotic arm's precision and the system's ability to handle various types of waste contribute to a more effective and consistent cleaning outcome.",
  },
  {
    title: "Can Bandicoot be used in different weather conditions?",
    description:
      "Bandicoot is designed with an IP68 waterproof rating, making it robust and capable of operating in wet and challenging weather conditions. This ensures its reliability and durability for year-round sanitation operations.",
  },
];

const Working = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">
        How Bandicoot Works?
      </h2>
      <div>
        <p className="text-sm text-center font-bold">
          A Simplified Cleaning Process using Robotics & AI
        </p>
        <p className="mt-4 text-sm">
          The Bandicoot robot simplifies the complex and dangerous task of
          manhole cleaning into a safe and systematic process. The operator
          controls the robot from a safe distance using a user-friendly
          interface.
        </p>
      </div>
      <div className="mt-4 divide-gray-300 divide-y">
        {data.map((item, index) => (
          <div key={index} className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-sm font-bold">
                {index + 1}. {item.title}
              </p>
              <span className="mx-2">
                {expandedIndex === index ? (
                  <>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </>
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                expandedIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-xs mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
