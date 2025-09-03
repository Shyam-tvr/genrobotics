"use client"
import React, { useState } from "react";

const faqData = [
  {
    question: "What types of manholes can Bandicoot clean?",
    answer:
      "Bandicoot is designed to clean various types of manholes, including standard circular manholes, rectangular manholes, and those with different depths and diameters commonly found in urban and industrial settings. Its adaptable robotic arm and versatile attachments allow it to handle diverse waste materials like sludge, silt, and solid debris.",
  },
  {
    question: "How does Bandicoot ensure operator safety?",
    answer:
      "Operator safety is paramount. Bandicoot eliminates the need for human entry into hazardous manholes. The entire operation is controlled remotely from a safe distance. Additionally, the robot is equipped with gas sensors to detect toxic gases and HD cameras for clear visibility, further enhancing safety and operational control.",
  },
  {
    question: "Is training provided for operating Bandicoot?",
    answer:
      "Yes, Genrobotics provides comprehensive training programs for operating and maintaining the Bandicoot robot. We focus on empowering existing sanitation workers by transforming them into skilled robotic operators, ensuring they can efficiently and safely use the technology.",
  },
  {
    question: "What is the cleaning efficiency of Bandicoot compared to manual methods?",
    answer:
      "Bandicoot significantly improves cleaning efficiency. It can clean manholes more thoroughly and in less time compared to manual methods. The robotic arm's precision and the system's ability to handle various types of waste contribute to a more effective and consistent cleaning outcome."
  },
  {
    question: "Can Bandicoot be used in different weather conditions?",
    answer:
      "Bandicoot is designed with an IP68 waterproof rating, making it robust and capable of operating in wet and challenging weather conditions. This ensures its reliability and durability for year-round sanitation operations."
  }
];

const Questions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">
        Frequently Asked Questions
      </p>
      <div className="mt-8 max-w-3xl mx-auto text-left bg-[#d9d9d983] p-4 rounded-xl divide-gray-300 divide-y">
        {faqData.map((item, index) => (
          <div key={index} className="py-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-sm font-medium">{item.question}</p>
              <span className="px-2 shadow-lg rounded-full mx-2">
                {expandedIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
                expandedIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-xs mt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
