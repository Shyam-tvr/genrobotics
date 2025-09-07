import React from "react";
import Image from "next/image";

const HiddenDanger = () => {
  return (
    <div className="px-8 py-12 text-center">
      <div>
        <p className="text-xl font-bold text-[#656565] font-anton tracking-wide">
          The Hidden Dangers of
        </p>
        <p className="text-xl font-bold font-anton tracking-wide">Manual confined space Cleaning</p>
      </div>
      <div className="relative w-full h-64 my-8">
        <Image
          src="/images/home/manhole.png"
          alt="Hidden Danger"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-left text-sm">
        Across the globe, countless cities rely on manual methods to maintain
        their urban drainage systems. This often forces sanitation workers to
        enter confined, hazardous spaces like manholes and sewers. Inside, they
        face life-threatening exposure to toxic gases, deadly pathogens, and the
        constant risk of physical injury. This critical work, essential for
        public health, is too often performed under unsafe and undignified
        conditions.
      </p>
      <p className="text-left mt-4 text-sm">
        This isn't a localized issue; it's a global reality. Workers in numerous
        countries share this dangerous fate, risking their lives daily. The lack
        of safe, modern technology perpetuates a cycle of risk and social
        vulnerability.
      </p>
      <p className="text-left mt-4 text-sm">
        Furthermore, without proper monitoring systems, there is often no
        reliable verification that cleaning has been completed effectively. This
        lack of oversight leaves critical infrastructure unchecked, increasing
        the risk of blockages, sewer overflows, and urban flooding—problems that
        plague cities worldwide.
      </p>
    </div>
  );
};

export default HiddenDanger;
