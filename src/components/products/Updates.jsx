import React from "react";
import Slider from "../home/Slider";

const sliderContent = [
  {
    image: "/images/products/bandicoot-update1.png",
    title: "Gujarat's Vision for Progress: 9 Bandicoot Robots in Action",
    description:
      "Gujarat is taking a significant step in urban sanitation with the deployment of Bandicoot robots.Chief Minister Bhupendrabhai Patel inaugurated the Bandicoot Robot's deployment as part of development projects by Surat Municipal Corporation. So far, 20 + Bandicoot robots have been launched across the state, reflecting Gujarat's proactive approach in adopting robotic solutions for safe and efficient sanitation.",
  },
  {
    image: "/images/products/bandicoot-update2.png",
    title: "Indore Leads with 5 Bandicoot Robots",
    description:
      " India’s cleanest city for five consecutive years has now taken a futuristic leap in sanitation. With CSR support from BPCL, five Bandicoot Robots were launched on Gandhi Jayanti, eliminating human entry into manholes. The initiative was led by Hon’ble Commissioner Shri. Harshika Singh (IAS) and senior officials, reinforcing Indore’s unwavering commitment to innovation, safety, and human dignity.",
  },
  {
    image: "/images/products/bandicoot-update3.png",
    title: "New Town Kolkata Adopts 3 Bandicoots for Modern Sanitation",
    description:
      "The Town Kolkata Development Authority (NKDA) introduced 3 Bandicoot Robots in a landmark launch attended by Shri. Debashish Sen IAS, Chairman NKDA, and Shri. Prashanta Barai, CEO NKDA. This milestone reflects Kolkata’s strong commitment to safe, human-centric sanitation solutions.",
  },
];

const Updates = () => {
  return (
    <div className="px-4 py-24">
      <p className="text-center text-xl font-bold">RECENT UPDATES</p>
      <div>
        <Slider>
          {sliderContent.map((content, index) => (
            <div
              key={index}
              className="flex flex-col w-full min-h-[540px] max-h-[720px] overflow-hidden flex-shrink-0 bg-[#F2F2F2] rounded-xl"
            >
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-bold mb-4">{content.title}</p>
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Updates;
