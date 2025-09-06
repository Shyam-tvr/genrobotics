import Link from "next/link";
import React from "react";

const Banner = ({ logo, bg, title, subtitle }) => {
  return (
    <div
      className={`h-screen relative bg-cover ${
        title !== "Revolutionizing Sanitation Management" ? "bg-center" : ""
      } pt-24 px-4`}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      {
        subtitle && <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/60 via-black/50 to-transparent z-10"></div>
      }
      <div className="relative z-20 flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="mx-auto" />

        <p
          className={`text-2xl font-bold w-full px-4 mt-4 ${
            subtitle ? "text-[#9d9d9d]" : "text-white"
          }`}
        >
          {title}
        </p>

        {subtitle && (
          <p className="text-2xl font-bold text-white w-full px-4 mt-2">
            {subtitle}
          </p>
        )}
        <Link className="bg-[#FCD901] text-sm py-2 px-4 rounded mt-8" href="#form" scroll={true}>Request a Demo</Link>
      </div>
    </div>
  );
};

export default Banner;
