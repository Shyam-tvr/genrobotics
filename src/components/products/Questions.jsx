"use client"
import React, { useState } from "react";

const Questions = ({faqData}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold font-anton tracking-wide">
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
