import React from "react";

const MakeInIndia = () => {
  return (
    <div className="m-4 p-4 bg-gradient-to-br from-[#ff88009c] via-white to-[#59b90081] rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">
        Bandicoot 2.0: <br /> Make in India, for Global Impact
      </h2>
      <img
        src="/images/products/manufacturing-plant.png"
        alt="Make in India"
        className="rounded-xl"
      />
      <p className="mt-4 text-justify">
        Bandicoot 2.0 is completely designed and manufactured in India, a
        testament to the "Make in India" initiative. Through Bandicoot, we
        champion the "AatmaNirbhar Bharat Abhiyan" (Self-Reliant India
        campaign), empowering the nation with indigenous robotic technologies to
        eliminate manual scavenging.
        <br />
        While rooted in India, the problem of hazardous sanitation work is a
        global concern. Bandicoot's innovative solution holds a global
        perspective, offering a proven and adaptable technology that can be
        deployed worldwide to transform sanitation practices, protect workers,
        and improve public health in any nation facing similar challenges.
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
