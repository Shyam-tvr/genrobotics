import React from "react";

const Banner = ({ logo, bg, title, subtitle }) => {
  return (
    <div 
      className={`h-screen bg-cover ${title !== "Revolutionizing Sanitation Management" && "bg-center"} pt-24 px-4`}
      style={{
        backgroundImage: `url('${bg}')`
      }}
    >
      <img src={logo} alt="" className="mx-auto" />
      <p className={`text-2xl text-center font-bold w-full px-4 mt-4 ${subtitle ? "text-[#9d9d9d]" : ""}`}>
        {title}
      </p>
      <p className="text-center w-full px-4 text-2xl font-bold text-white">
        {subtitle}
      </p>
      <button className="bg-[#FCD901] text-sm mx-auto py-2 px-4 rounded block mt-8">
        Explore more Solutions
      </button>
    </div>
  );
};

export default Banner;
