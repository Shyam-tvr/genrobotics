import React from "react";

const Banner = ({bg, title, subTitle, theme}) => {
  return (
    <div
      className="h-screen relative bg-cover bg-bottom pt-24"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="relative flex flex-col items-center">
        <p className={`text-2xl text-center font-bold w-full px-4 ${theme === "dark" ? "text-white" : ""}`}>
          {title}
        </p>
        <p className="w-full px-4 py-4">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
export default Banner;
