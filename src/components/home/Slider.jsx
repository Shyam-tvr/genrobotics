"use client";
import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = React.Children.toArray(children);
  const timeoutRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    if (!isPaused && slides.length > 1) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((val) => (val >= slides.length - 1 ? 0 : val + 1));
      }, 5000);
    }
    return clearTimer;
  }, [activeIndex, isPaused, slides.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div>
      <div
        className="relative w-full p-0 gap-4 flex justify-start items-center flex-row flex-nowrap overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {
          slides.map((slide, index) => (
            <div key={index} className={'flex-shrink-0 w-full overflow-hidden mt-12 transition-transform duration-1000 ease-in-out flex items-center justify-center'} style={{ transform: `translateX(-${activeIndex * 105}%)` }}>
              {slide}
            </div>
          ))
        }
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-gray-800" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
