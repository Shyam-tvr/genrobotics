"use client";
import React, { useState } from "react";

const Working = ({ title, subTitle, description, data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f6f6f6] px-4 py-8">
      <h2 className="text-2xl font-bold py-4 text-center">{title}</h2>
      <div>
        <p className="text-sm text-center font-bold">{subTitle}</p>
        <p className="mt-4 text-sm">{description}</p>
      </div>
      {data && data.length > 0 && (
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
      )}
    </div>
  );
};

export default Working;
