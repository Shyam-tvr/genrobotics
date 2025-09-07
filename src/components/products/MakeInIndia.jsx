import React from "react";

const MakeInIndia = ({title, subTitle, image, description}) => {
  return (
    <div className="m-4 p-4 bg-gradient-to-br from-[#ff88009c] via-white to-[#59b90081] rounded-xl shadow-lg">
      <h2 className="text-xl font-anton mb-4 text-center">
        {title} <br /> {subTitle}
      </h2>
      <img
        src={image}
        alt="Make in India"
        className="rounded-xl"
      />
      <p className="mt-4 text-sm text-justify">
        {description}
      </p>
      <div className="flex justify-center items-center my-8">
        <img
          src="/images/products/bharath.png"
          alt="Make in India"
          className="rounded-xl"
        />
        <div className="border-l border-gray-400 h-16 mx-4"></div>
        <img
          src="/images/products/make-in-india.png"
          alt="Make in India"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default MakeInIndia;
