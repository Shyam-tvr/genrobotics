import Image from "next/image";
import React from "react";

const Upgrade = () => {
  return (
    <div className="py-12">
      <div className="p-4">
        <p className="text-center text-2xl font-bold">Upgrade Your Bandicoot to Mobility+</p>
        <p className="text-sm mt-4">
          Current Bandicoot users can now elevate their sanitation operations by
          upgrading to the Bandicoot Mobility+. This advanced vehicle-integrated
          model fully automates manhole cleaning and waste management, offering
          unparalleled efficiency and convenience. Benef
          deployment, integrated waste handling, and the ability to cover more
          ground with ease. Make the smart move to Mobility+ and experience the
          next generation of robotic sanitation solutions.
        </p>
      </div>
      <Image src="/images/products/upgrade-bg.png" alt="upgrade-bg" width={350} height={400} className='mx-auto'/>
    </div>
  );
};

export default Upgrade;
