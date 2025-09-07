import React from "react";
import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Why from "@/components/products/Why";
import Industries from "@/components/products/Industries";
import MakeInIndia from "@/components/products/MakeInIndia"
import MissionRoboHole from "@/components/products/MissionRoboHole";
import Clients from "@/components/products/Clients";
import Questions from "@/components/products/Questions";
import Form from "@/components/products/Form";
import Spaces from "@/components/products/Spaces";

const feature = [
  {
    image: "/images/products/wilboar-feature1.png",
    title: "Remote Control System",
    description:
      "Safe and precise operation from a distance, keeping workers out of hazardous areas.",
  },
  {
    image: "/images/products/wilboar-feature2.png",
    title: "Customizable End-Effecter",
    description:
      "Adaptable tools including grinding systems and loaders for various tasks.",
  },
  {
    image: "/images/products/wilboar-feature3.png",
    title: "Multi-Terrain Rubberised Track",
    description: "Ensures excellent traction and mobility on various challenging surfaces.",
  },
  {
    image: "/images/products/wilboar-feature4.png",
    title: "Heavy Duty Manoeuvrability",
    description:
      "Robust build allows for powerful and effective movement in difficult terrains.",
  },
];

const IndustriesData = [
  {
    image: "/images/home/Industry1.png",
    label: "Municipal & Urban Services",
  },
  {
    image: "/images/home/Industry2.png",
    label: "Oil & Gas Industries",
  },
  {
    image: "/images/home/Industry3.png",
    label: "Chemical & Pharmaceutical",
  },
  {
    image: "/images/products/distilleries.png",
    label: "Distilleries",
  },
  {
    image: "/images/products/Airport.png",
    label: "Airport",
  },
  {
    image: "/images/products/hotels.png",
    label: "Hotels",
  },
];

const ClientsData = [
  {
    image: "/images/products/client4.png",
    alt: "Client 1",
  },
  {
    image: "/images/home/Client3.png",
    alt: "Client 2",
  },
  {
    image: "/images/products/client6.png",
    alt: "Client 3",
  },
  {
    image: "/images/products/client5.png",
    alt: "Client 4",
  },
];

const faqData = [
  {
    question: "What types of waste can Wilboar handle?",
    answer:
      "Wilboar is primarily designed to remove thick mud, sludge, chemical-laden waste, and other solid debris for industrial purposes. It can handle waste in Oil & Gas tanks, Sewage Treatment Plants (STPs), and large drainage systems.",
  },
  {
    question: "Can Wilboar operate in hazardous, explosion-prone environments?",
    answer:
      "Yes. Wilboar is engineered with safety as a core principle. For environments requiring specific certifications like ATEX (Explosion-Proof), we provide specially customized, compliant models. Please contact our technical team to discuss your specific safety and compliance requirements.",
  },
  {
    question: "How does Wilboar adapt to different types of industrial waste?",
    answer:
      "Wilboar's key strength is its versatility, achieved through a customizable end-effector system. Depending on the job, we can equip it with various tools like heavy-duty grinders for solid waste, loaders for semi-solids, and high-pressure jetting nozzles for dislodging tough sludge. This allows it to handle a wide range of materials effectively.",
  },
  {
    question: "From how far can an operator control Wilboar?",
    answer:
      "Wilboar is operated using a remote control panel. This allows the operator to work from a completely safe distance from the hazardous area. Typically, its operational range is quite long, and the distance can be adjusted by extending the cable length if required.",
  },
  {
    question: "What is the main difference between Bandicoot and Wilboar?",
    answer:
      "The primary difference lies in their application and design. Bandicoot is optimized for vertical confined spaces like manholes in urban areas. In contrast, Wilboar is a heavy-duty robotic rover designed for cleaning larger, horizontal confined spaces such as industrial tanks, canals, drains, and Sewage Treatment Plants (STPs).",
  }
];

const Wilboar = () => {
  return (
    <>
      <Banner logo={"/images/products/wilboar-logo.png"} bg={"/images/products/wilboar-bg.png"} title={"The Ultimate Robotic Rover for cleaning & inspection of large confined spaces"} />
      <Why title={"Wilboar"} subTitle={"Revolutionizing Industrial & Large-Scale Cleaning"} image={"/images/products/wilboar.png"} description={"Confined spaces within sewer wells, canals, storm water drains and STP wells are filled with hazardous waste and debris, posing serious risks to human health and safety. The challenging task of cleaning these environments requires safer solutions that minimize human involvement.Introducing Wilboar, the ideal solution for secure and efficient cleaning of sewer wells, canals, storm water drains and STP wells. Equipped with advanced technology, Wilboar ensures maximum safety by eliminating the need for manual entry and exposure to dangerous substances, revolutionizing the maintenance of these critical infrastructure areas."}/>
      <Features featuresDetails={feature} description={"From stubborn clogs to underground diagnostics, Wilboar handles it all — efficiently."} />
      <Spaces />
      <Industries IndustriesData={IndustriesData} />
      <Clients data={ClientsData} />
      <MakeInIndia title={"Wilboar :"} subTitle={"Make in India, for Global Impact"} image={"/images/products/jkr_3204.png"} description={"Wilboar is completely designed and manufactured in India, a testament to the 'Make in India' initiative. Through Wilboar, we champion the 'AatmaNirbhar Bharat Abhiyan' (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging.While rooted in India, the problem of hazardous sanitation work is a global concern. Wilboar's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."}/>
      <MissionRoboHole />
      <Questions faqData={faqData} />
      <Form title={"Discover the Power of Wilboar?"} description={"Contact us to discover how Wilboar can enhance safety and efficiency in your industrial cleaning operations."} />
    </>
  )
}

export default Wilboar