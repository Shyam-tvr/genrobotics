import Image from "next/image";
import React from "react";

const modelDetails = [
  {
    id: 1,
    image: "/images/home/Model1.png",
    title: "Solution Deployment with Operator Training",
    description: "In this model, we provide you with our cutting-edge robotic products and conduct comprehensive training for your existing employees. This empowers your team to proficiently operate and manage the robotic solutions in-house, ensuring local ownership, operational autonomy, and compliance.",
  },
  {
    id: 2,
    image: "/images/home/Model2.png",
    title: "Solution Deployment with Full Operations & Maintenance",
    description: "We offer our robotic solutions with end-to-end Operation & Maintenance support for clients who prefer a hands-off approach. From deployment to daily operation and maintenance, our expert team ensures smooth, compliant service—so you can focus on your core priorities while we handle the rest.",
  },
  {
    id: 3,
    image: "/images/home/Model3.png",
    title: "Solution Rental with Full Operations & Maintenance",
    description: "For maximum flexibility, we offer our advanced robotic solutions on a rental basis, ideal for clients seeking short-term or project-specific deployments. This model includes full operational and maintenance support from our expert team, enabling clients to leverage our advanced technology without the need for long-term capital investment.",
  },
  {
    id: 4,
    image: "/images/home/Model4.png",
    title: "Emergency Response Units for Sanitation Accidents and Floods",
    description: "We offer our robotic solutions with end-to-end Operation & Maintenance support for clients who prefer a hands-off approach. From deployment to daily operation and maintenance, our expert team ensures smooth, compliant service—so you can focus on your core priorities while we handle the rest.",
  }
];

const Models = () => {
  return (
    <div className="px-4 py-24">
      <p className="text-center text-2xl font-bold">
        Our Flexible Engagement Models
      </p>
      <p className="mt-12">
        Genrobotics offers adaptable engagement models to suit your operational
        needs, ensuring you receive the maximum benefit from our advanced
        robotic solutions and achieve regulatory compliance seamlessly.
      </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            modelDetails.map((model,index)=>(
              <div key={index} className="relative p-4 bg-[#D9D9D9] rounded-lg">
                  <div className="flex items-end gap-4 my-4">
                      <Image
                          src={model.image}
                          width={150}
                          height={200}
                          alt={`Model ${index + 1}`}
                      />
                      <div>
                          <p className=" text-[#6D6D6D] text-4xl font-extrabold opacity-40 text-right mr-4 ">Model {index + 1}</p>
                          <p className="text-lg font-semibold">{model.title}</p>
                      </div>
                  </div>
                  <p>{model.description}</p>
                  <div className="flex items-center mt-4">
                      <button>Learn More</button>
                      <img src="/images/home/Arrow.png" alt="Arrow" />
                  </div>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default Models;
