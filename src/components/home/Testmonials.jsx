import React from "react";
import Slider from "./Slider";

const Testmonials = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-anton font-bold tracking-wide">
        Backed by <br />Those Who Lead Change!
      </p>
      <div className="bg-[linear-gradient(90deg,#ffffff,#000000_50%,#ffffff)] h-[1px] w-full mx-auto mt-4"></div>
      <div className="flex overflow-hidden">
        <Slider>
          <div className="bg-[#f3f3f3] w-full rounded-xl flex">
            <img
              src="/images/home/venkaiah.png"
              alt=""
              className="rounded-xl object-cover"
            />
            <div className="p-4">
              <p className="text-[10px]">
                "I am happy about the team for inventing a robot to replace
                Manual Scavenging. As young professionals your commitment to use
                technology for the social good is worth emulation by others.
                Digital technology holds tremendous potential for betterment of
                the people and their lives."
              </p>
              <p className="text-base font-bold mt-4">Shri. Venkaiah Naidu</p>
              <p className="text-[10px]">
                Hon'ble Former Vice President of India
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testmonials;
