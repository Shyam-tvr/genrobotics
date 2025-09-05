import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Why from "@/components/products/Why";
import React from "react";
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
import Solution from "@/components/products/Solution";
import Faster from "@/components/products/Faster";
import Upgrade from "@/components/products/Upgrade";

const feature = [
  {
    image: "/images/products/mobility-feature1.png",
    title: "Hydraulic Loading & Unloading",
    description:
      "The Bandicoot robot is seamlessly integrated with the vehicle for quick deployment and retrieval.",
  },
  {
    image: "/images/products/mobility-feature2.png",
    title: "Hydraulic Vehicle Stabilizer",
    description:
      "Ensures the vehicle remains stable on uneven ground during robotic operations",
  },
  {
    image: "/images/products/mobility-feature3.png",
    title: "Detachable Bandicoot Unit",
    description: "Allows for robot deployment in narrow lanes and areas inaccessible to the vehicle.",
  },
  {
    image: "/images/products/mobility-feature4.png",
    title: "Smart Bin Lock System",
    description:
      "Ensures secure and safe containment of collected waste during transit.",
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
    image: "/images/home/Client1.png",
    alt: "Client 1",
  },
  {
    image: "/images/home/Client2.png",
    alt: "Client 2",
  },
  {
    image: "/images/home/Client3.png",
    alt: "Client 3",
  },
  {
    image: "/images/home/Client4.png",
    alt: "Client 4",
  },
  {
    image: "/images/home/Client5.png",
    alt: "Client 5",
  },
];

const faqData = [
  {
    question: "How does Mobility+ improve upon the standard Bandicoot?",
    answer:
      "Mobility+ integrates the Bandicoot robot with a vehicle and automated waste handling systems. This significantly reduces deployment time, simplifies logistics, and allows for immediate on-site waste management, making operations faster and more convenient, especially for widespread cleaning tasks.",
  },
  {
    question: "Is the Bandicoot robot detachable from the Mobility+ vehicle?",
    answer:
      "Yes, a key feature of Mobility+ is the detachable Bandicoot robotic unit. This allows the robot to be deployed independently in narrow lanes or areas where the vehicle cannot access, offering maximum operational flexibility",
  },
  {
    question: "What is the capacity of the integrated waste storage in Mobility+?",
    answer:
      "The waste storage capacity is designed to handle multiple manhole cleanings before needing to be emptied. Specific capacity details can be provided based on the chosen vehicle configuration",
  }
];

const MobilityPlus = () => {
  return (
    <>
      <Banner logo={"/images/products/mobility-logo.png"} bg={"/images/products/mobility-bg.png"} title={"Vehicle Integrated Robotic"} subtitle={"Manhole Cleaning & Waste Management"} />
      <Why title={"Bandicoot-Mobility"} subTitle={"Enhanced Efficiency, Seamless Operations"} bg={"/images/products/mobility-why-bg.png"} description={"Bandicoot Mobility+ takes robotic manhole cleaning to the next level by integrating the powerful Bandicoot robot with a dedicated vehicle and an advanced waste management system. This all-in-one solution streamlines the entire process, from transportation to cleaning and on-site waste disposal. By eliminating the need for separate transportation and manual loading/unloading of the robot and waste, Mobility+ significantly reduces transit times between cleaning locations, enhances operational speed, and improves overall efficiency. It's the perfect solution for municipalities and organizations looking for a comprehensive, mobile, and highly effective sanitation system."}/>
      <Features featuresDetails={feature} description={"Explore the features of Bandicoot Mobility+ that powers faster deployment, precision cleaning, better access, and safer operations."} />
      <Solution />
      <Faster />
      <Upgrade />
      <Working title={"How Bandicoot-Mobility+ Works"} subTitle={"An Integrated and Automated Cleaning Cycle"} description={"Bandicoot Mobility+ streamlines the entire manhole cleaning process through seamless vehicle integration and automation."} data={data} />
      <Industries IndustriesData={IndustriesData} />
      <Statistics statisticsData={statisticsData}/>
      <Updates updatesContent={updatesContent}/>
      <Recognition sliderContent={sliderContent} />
      <MakeInIndia title={"Bandicoot Mobility+ :"} subTitle={"Make in India, for Global Impact"} image={"/images/products/manufacturing-plant.png"} description={"Bandicoot Mobility+ is completely designed and manufactured in India, a testament to the \"Make in India\" initiative. Through Bandicoot, we champion the \"AatmaNirbhar Bharat Abhiyan\" (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging. While rooted in India, the problem of hazardous sanitation work is a global concern. Bandicoot's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."}/>
      <Milestones />
      <Reach />
      <Transform />
      <MissionRoboHole />
      <Clients data={ClientsData} />
      <Questions faqData={faqData} />
      <Form title={"Interested in Bandicoot Mobility+?"} description={"Let us show you how Bandicoot Mobility+ can revolutionize your sanitation operations. Fill out the form below for a demo or to get more information."} />
    </>
  );
};

export default MobilityPlus;
