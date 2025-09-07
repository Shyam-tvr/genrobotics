import React from "react";

const Challenges = () => {
  return (
    <div className="px-4 py-12 bg-[url('/images/home/challenges-bg.png')]">
      <p className="text-center text-2xl font-anton font-bold tracking-wide">
        A Global Challenge, <br /> A Global Solution
      </p>
      <p className="mt-6 text-sm">
        The challenges of aging infrastructure, hazardous sanitation work, and
        urban flooding are not unique to India — they are pressing global issues
        affecting cities across continents. From Asia to Africa, from Latin
        America to parts of Europe, millions still face unsafe sanitation
        conditions and the growing threat of climate-induced urban flooding.{" "}
        <br />
        By replacing manual labor in life-threatening environments with robotics
        and smart management systems, Genrobotics is redefining the future of
        urban sanitation. The result — a smarter, safer, and more sustainable
        city, where technology protects both public health and human dignity.
      </p>
      <img
        src="/images/home/MAP.png"
        alt="Challenges"
        className="mt-8 mx-auto"
      />
    </div>
  );
};

export default Challenges;
