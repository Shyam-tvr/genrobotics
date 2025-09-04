import Image from "next/image";
import React from "react";

const Why = ({ title, subTitle, image, bg, description }) => {
  return (
    <div className="text-center relative">
      {bg && (
        <Image
          src={bg}
          alt="Transform"
          width={500}
          height={300}
          className="h-full w-screen object-cover"
        />
      )}
      <div className={`${bg && "absolute inset-0 flex flex-col items-center"} p-4 mt-12 max-w-4xl mx-auto`}>
        <p className="text-2xl font-bold ">Why {title}?</p>
        <p className="text-sm">{subTitle}</p>
        {image && <img src={image} alt={title} className="rounded-xl mt-6 mx-auto"/>}
        <p className="text-left mt-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Why;
