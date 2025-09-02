"use client";
import {useState} from "react";


const productDetails = [
  {
    title: "Manhole Cleaning with Waste Management",
    description:
      "A vehicle-integrated robotic system for comprehensive manhole cleaning, on-site waste collection, containment, and transportation in a sealed system.",
    logo: "/images/home/Mobility-logo.png",
    image: "/images/home/Mobility.png",
  },
  {
    title: "For Manhole Cleaning",
    description:
      "The world's first robotic scavenger, Bandicoot, automates manhole cleaning with multi-jointed robotic arms, 360-degree vision, and advanced gas sensing.",
    logo: "/images/home/Bandicoot-logo.png",
    image: "/images/home/Bandicoot.png",
  },
  {
    title: "For Horizontal Confined Space Cleaning",
    description:
      "Engineered for autonomous cleaning and inspection within hazardous industrial confined spaces like tanks, wells, canals, culverts, and closed drains.",
    logo: "/images/home/Wilboar-logo.png",
    image: "/images/home/Wilboar.png",
  },
  {
    title: "Multi-functional Solution",
    description:
      "A versatile robotic system combining waste collection, debris removal, inspection, and high-pressure cleaning in a single unit for diverse urban challenges.",
    logo: "/images/home/Mammoth-logo.png",
    image: "/images/home/Mammoth.png",
  },
  {
    title: "Digital Operations Platform",
    description:
      "Our smart operations management platform digitizes sanitation workflows, providing live GPS tracking, visual confirmation, and automated reports for transparency and accountability.",
    logo: "/images/home/Gcrow-logo.png",
    image: "/images/home/Gcrow.png",
  },
  {
    title: "Need Content",
    description:
      "Need Content Need Content Need Content Need Content Need Content Need Content Need Content Need Content Need Content Need Content Need Content Need ContentNeed Content Need Content",
    logo: "/images/home/Gmamba-logo.png",
    image: "/images/home/Gmamba.png",
  },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, productDetails.length - 1));
  };

  return (
    <div className="py-12">
      <p className="px-4 text-2xl font-bold text-center">
        Our Robotic Product Solutions
      </p>
      <p className="px-4 mt-4">
        Genrobotics' core product lineup consists of advanced robotic systems
        engineered to tackle the most challenging and hazardous cleaning tasks
        in sanitation and confined industrial spaces. Each product is designed
        for unparalleled safety, efficiency, and compliance.
      </p>
      <div className="relative">
        <div className="mt-8 flex gap-8 w-full overflow-hidden px-8 ">
          {productDetails.map((product, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] rounded-xl shadow-md flex flex-col h-full flex-shrink-0 w-full min-h-[700px] max-h-[720px] overflow-hidden mt-12 transition-transform duration-1000 ease-in-out items-center border-2 border-transparent hover:border-[#2B2B2B] relative"
              style={{ transform: `translateX(-${(activeIndex * 110) + 1}%)` }}
            >
              <img
                src={product.image}
                alt={product.title || "Product Image"}
                className="w-full object-contain mb-4"
              />
              <div className="px-6 py-4">
                <img
                  src={product.logo}
                  alt={product.title || "Product Logo"}
                  className="w-full object-contain mb-4"
                />
                <h3 className="text-lg font-extrabold text-center mb-2 text-[#2B2B2B]">
                  {product.title}
                </h3>
                <p>{product.description}</p>
                <button className="absolute bottom-6 right-1/2 transform translate-x-1/2 bg-[#FCD901] text-sm mx-auto mt-8 py-2 px-4 rounded">
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div onClick={handlePrev} >
          <img
            src="/images/home/Arrow-circle.png"
            alt=""
            className="absolute left-1 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <div onClick={handleNext}>
          <img
            src="/images/home/Arrow-circle.png"
            alt=""
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
