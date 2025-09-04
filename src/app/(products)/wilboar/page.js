import React from "react";
import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Why from "@/components/products/Why";
import Industries from "@/components/products/Industries";
import Working from "@/components/products/Working";
import Statistics from "@/components/products/Statistics";
import Updates from "@/components/products/Updates";
import Recognition from "@/components/home/Recognition";
import MakeInIndia from "@/components/products/MakeInIndia";
import Milestones from "@/components/products/Milestones";
import Reach from "@/components/products/Reach";
import Transform from "@/components/products/Transform";
import MissionRoboHole from "@/components/products/MissionRoboHole";
import Clients from "@/components/products/Clients";
import Questions from "@/components/products/Questions";
import Form from "@/components/products/Form";

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

const data = [
    {
      title: "Vehicle Positioning & Robot Deployment",
      description:
        "The Mobility+ vehicle is positioned near the manhole. The integrated system allows for easy and quick deployment of the Bandicoot robotic unit.",
    },
    {
      title: "Robotics Unit Operation",
      description:
        "The Bandicoot robot (Robotics Unit) is lowered into the manhole. Its robotic legs expand for stability and movement.",
    },
    {
      title: "Inspection & Cleaning",
      description:
        "HD cameras and gas sensors facilitate inspection. The robotic arm, with its bucket/grabber, efficiently collects waste.",
    },
    {
      title:
        "Automated Waste Transfer",
      description:
        "Collected waste is lifted by the robot and automatically transferred to the vehicle's integrated storage chamber via the dumper system.",
    },
    {
      title: "Waste Containment & Transportation",
      description:
        "Waste is securely contained within the vehicle for hygienic transportation to disposal sites.",
    },
    {
      title: "Remote Operation & Safety",
      description:
        "The entire operation, including robot control and waste dumping, is managed remotely, ensuring zero human entry and maximum operator safety.",
    },
    {
      title: "Detachable for Narrow Areas",
      description:
        "If needed, the core Bandicoot robot can be detached from the vehicle for use in narrow lanes or areas inaccessible to the vehicle itself, offering operational flexibility.",
    }
  ];

const sliderContent = [
  {
    image: "/images/home/recognition1.png",
    title: "Supreme Court Judgement",
    description:
      "As per SC Judgement (Writ Petition No. 324/2020), Bandicoot was cited for employing modern technology to eliminate Manual Scavenging.",
  },
  {
    image: "/images/home/recognition1.png",
    title: "Swachh Survekshan Toolkit",
    description:
      "The Government of India recognized Bandicoot as a significant advancement in robotics for sanitation, aligning with the National Policy on Robotics.",
  },
  {
    image: "/images/home/recognition1.png",
    title: "International Recognition",
    description:
      "Bandicoot has gained international recognition for its innovative approach to sanitation, receiving accolades from various global organizations.",
  },
];

const statisticsData = [
  {
    value: "100%",
    label: "Robotic\nManhole Cleaning",
  },
  {
    value: "100%",
    label: "Elimination of Manual Scavenging",
  },
  {
    value: "100%",
    label: "Robotic Waste Handling",
  },
  {
    value: "75%",
    label: "Reduction in Operation Cost",
  },
];

const updatesContent = [
  {
    image: "/images/products/mobility-update1.png",
    title: "Gujarat’s Clean Revolution Begins with 11 Bandicoot Mobility+",
    description:
      "With the deployment of 11 Bandicoot Mobility Plus robots, Gujarat signals a powerful shift in urban sanitation. Led by the Gujarat Urban Development Mission (GUDM), this initiative aims to eliminate manual scavenging and modernize manhole cleaning with precision, safety, and dignity. Each of the 11 robots now operational across key municipalities represents not just advanced technology, but a promise — a promise of cleaner cities and safer futures.",
  },
  {
    image: "/images/products/mobility-update2.png",
    title: "Chennai Deploys 3 Bandicoot Mobility+ Robots",
    description:
      "Chennai strengthens its commitment to smart sanitation with the launch of 3 Bandicoot Mobility+ Robots, inaugurated by Minister K.N. Nehru and Mayor Priya Rajan. This milestone builds on Tamil Nadu’s leadership in deploying Bandicoot technology, already active in over 15 cities across the state, advancing the cause of sustainable, human-friendly sanitation.",
  },
  {
    image: "/images/products/mobility-update3.png",
    title: "Chhatrapati Sambhajinagar Adopts 2 Bandicoot Mobility+ Units",
    description:
      "Formerly known as Aurangabad, Chhatrapati Sambhajinagar marks a key milestone in its sanitation transformation with the deployment of 2 Bandicoot Mobility+ Robots. The launch was graced by Commissioner Shri G. Srikanth IAS, City Engineer Shri Anirudh Dehankar, and Executive Engineer Shri Amol Kulkarni, signaling a powerful beginning toward safer, more connected, and accessible sanitation infrastructure.",
  },
];

const ClientsData = [
  {
    image: "/images/products/Client4.png",
    alt: "Client 1",
  },
  {
    image: "/images/home/Client3.png",
    alt: "Client 2",
  },
  {
    image: "/images/products/Client6.png",
    alt: "Client 3",
  },
  {
    image: "/images/products/Client5.png",
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