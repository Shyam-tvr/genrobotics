import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Why from "@/components/products/Why";
import React from "react";
import Industries from "@/components/products/Industries";
import Working from "@/components/products/Working";
import Statistics from "@/components/products/Statistics";
import Updates from "@/components/products/Updates";
import Recognition from "@/components/products/Recognition";
import MakeInIndia from "@/components/products/MakeInIndia";
import Milestones from "@/components/products/Milestones";
import Reach from "@/components/products/Reach";
import Transform from "@/components/products/Transform";
import MissionRoboHole from "@/components/products/MissionRoboHole";
import Clients from "@/components/products/Clients";
import Questions from "@/components/products/Questions";
import Form from "@/components/products/Form";

const Bandicoot = () => {
  const logo = "/images/products/bandicoot-logo.png";
  const bg = "/images/products/bandicoot-bg.png";
  const title = "Engineered to clean any type of manhole,";
  const subtitle = "ensuring safety and dignity for sanitation workers.";

  const feature = [
    {
      image: "/images/products/robotic-arm.png",
      title: "Human-Like Robotic Arm",
      description:
        "6 degrees of freedom mimics human movements; can pick objects and shovel.",
    },
    {
      image: "/images/products/robotic-legs.png",
      title: "Robotic Legs",
      description:
        "Provides stability and allows movement inside manholes for thorough cleaning.",
    },
    {
      image: "/images/products/operational-depth.png",
      title: "Operational Depth",
      description:
        "Can operate effectively up to a depth of 12 meters.",
    },
    {
      image: "/images/products/bucket.png",
      title: "Specially Designed Bucket",
      description:
        "Efficiently collects and removes various types of waste from manholes.",
    }
  ];

  const IndustriesData = [
      {
          image: "/images/home/Industry1.png",
          label: "Municipal & Urban Services"
      },
      {
          image: "/images/home/Industry2.png",
          label: "Oil & Gas Industries"
      },
      {
          image: "/images/home/Industry3.png",
          label: "Chemical & Pharmaceutical"
      },
      {
          image: "/images/home/Industry4.png",
          label: "Utilities & Infrastructure"
      },
      {
          image: "/images/home/Industry5.png",
          label: "Disaster Management"
      },
      {
          image: "/images/home/Industry6.png",
          label: "Manufacturing"
      }
  ]

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

  return (
    <>
      <Banner logo={logo} bg={bg} title={title} subtitle={subtitle} />
      <Why />
      <Features featuresDetails={feature} />
      <Industries IndustriesData={IndustriesData} />
      <Working />
      <Statistics />
      <Updates />
      <Recognition sliderContent={sliderContent} />
      <MakeInIndia />
      <Milestones />
      <Reach />
      <Transform />
      <MissionRoboHole />
      <Clients />
      <Questions />
      <Form />
    </>
  );
};

export default Bandicoot;
