import React from "react";
import Slider from "./Slider";

const sliderContent = [
  {
    image: "/images/home/Milestone1.png",
    title: "Bandicoot 2.0 Launched in the presence of Hon'ble Prime Minister",
    description:
      "A powerful validation of our mission, Bandicoot 2.0 was launched in the presence of Hon'ble Prime Minister Shri Narendra Modi and UN Secretary-General António Guterres at the Mahatma Gandhi International Sanitation Convention in 2018. This marked a national endorsement of using indigenous technology for the Swachh Bharat Mission.",
  },
  {
    image: "/images/home/Milestone2.png",
    title: "Uttar Pradesh: A New Era of Worker Safety",
    description:
      "UP Chief Minister Shri Yogi Adityanath launched Bandicoot for the end of manual scavenging. This milestone reflects the government’s commitment to worker safety and dignity by replacing hazardous manual methods with robotic technology.",
  },
  {
    image: "/images/home/Milestone3.png",
    title: "Kerala’s Pioneering Commitment: Statewide Deployment",
    description:
      "Hon’ble Chief Minister of Kerala, Shri Pinarayi Vijayan, inaugurated Bandicoot Robot in February 2018, marking the beginning of a new era in sanitation. He also signed a landmark MOU for the statewide deployment of Bandicoot robots, reaffirming Kerala’s commitment to eradicating manual scavenging and restoring safety and dignity for sanitation workers.",
  },
];

const Milestones = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">
        Milestones & Endorsements
      </p>
      <p className="mt-4 text-sm">
        Leading the charge against manual scavenging, Genrobotics has earned the
        trust of national and state leaders who have launched our solutions
        across India, marking a unified commitment to safety and dignity.
      </p>
      <div>
        <Slider>
          {sliderContent.map((content, index) => (
            <div
              key={index}
              className="flex flex-col w-full min-h-[540px] max-h-[720px] overflow-hidden flex-shrink-0 bg-[#F2F2F2] rounded-xl mt-12"
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
                <p className="text-sm">{content.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Milestones;
