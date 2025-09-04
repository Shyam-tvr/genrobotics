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

  const data = [
    {
      title: "What types of manholes can Bandicoot clean?",
      description:
        "Bandicoot is designed to clean various types of manholes, including standard circular manholes, rectangular manholes, and those with different depths and diameters commonly found in urban and industrial settings. Its adaptable robotic arm and versatile attachments allow it to handle diverse waste materials like sludge, silt, and solid debris.",
    },
    {
      title: "How does Bandicoot ensure operator safety?",
      description:
        "Operator safety is paramount. Bandicoot eliminates the need for human entry into hazardous manholes. The entire operation is controlled remotely from a safe distance. Additionally, the robot is equipped with gas sensors to detect toxic gases and HD cameras for clear visibility, further enhancing safety and operational control.",
    },
    {
      title: "Is training provided for operating Bandicoot?",
      description:
        "Yes, Genrobotics provides comprehensive training programs for operating and maintaining the Bandicoot robot. We focus on empowering existing sanitation workers by transforming them into skilled robotic operators, ensuring they can efficiently and safely use the technology.",
    },
    {
      title:
        "What is the cleaning efficiency of Bandicoot compared to manual methods?",
      description:
        "Bandicoot significantly improves cleaning efficiency. It can clean manholes more thoroughly and in less time compared to manual methods. The robotic arm's precision and the system's ability to handle various types of waste contribute to a more effective and consistent cleaning outcome.",
    },
    {
      title: "Can Bandicoot be used in different weather conditions?",
      description:
        "Bandicoot is designed with an IP68 waterproof rating, making it robust and capable of operating in wet and challenging weather conditions. This ensures its reliability and durability for year-round sanitation operations.",
    },
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
      value: "90%",
      label: "Reduction in\nOperational Costs",
    }
  ];

  const updatesContent = [
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
    question: "What types of manholes can Bandicoot clean?",
    answer:
      "Bandicoot is designed to clean various types of manholes, including standard circular manholes, rectangular manholes, and those with different depths and diameters commonly found in urban and industrial settings. Its adaptable robotic arm and versatile attachments allow it to handle diverse waste materials like sludge, silt, and solid debris.",
  },
  {
    question: "How does Bandicoot ensure operator safety?",
    answer:
      "Operator safety is paramount. Bandicoot eliminates the need for human entry into hazardous manholes. The entire operation is controlled remotely from a safe distance. Additionally, the robot is equipped with gas sensors to detect toxic gases and HD cameras for clear visibility, further enhancing safety and operational control.",
  },
  {
    question: "Is training provided for operating Bandicoot?",
    answer:
      "Yes, Genrobotics provides comprehensive training programs for operating and maintaining the Bandicoot robot. We focus on empowering existing sanitation workers by transforming them into skilled robotic operators, ensuring they can efficiently and safely use the technology.",
  },
  {
    question: "What is the cleaning efficiency of Bandicoot compared to manual methods?",
    answer:
      "Bandicoot significantly improves cleaning efficiency. It can clean manholes more thoroughly and in less time compared to manual methods. The robotic arm's precision and the system's ability to handle various types of waste contribute to a more effective and consistent cleaning outcome."
  },
  {
    question: "Can Bandicoot be used in different weather conditions?",
    answer:
      "Bandicoot is designed with an IP68 waterproof rating, making it robust and capable of operating in wet and challenging weather conditions. This ensures its reliability and durability for year-round sanitation operations."
  }
];

  return (
    <>
      <Banner logo={"/images/products/bandicoot-logo.png"} bg={"/images/products/bandicoot-bg.png"} title={"Engineered to clean any type of manhole,"} subtitle={"ensuring safety and dignity for sanitation workers."} />
      <Why title={"Bandicoot"} subTitle={"A Leap Towards Safer & Smarter Sanitation"} image={"/images/products/bandicoot.png"} description={"Manual scavenging, a hazardous and inhumane practice, has been a long-standing issue in many parts of the world. Workers are exposed to toxic gases, harmful pathogens, and risk their lives every day. Bandicoot was developed to address this critical problem by completely eliminating the need for human entry into manholes. Our robotic solution offers a comprehensive approach to manhole cleaning, from inspection and removal of waste to ensuring the safety of the operator. It's not just a machine; it's a commitment to social change, worker dignity, and a cleaner environment."}/>
      <Features featuresDetails={feature} description={"Engineered for precision and safety, Bandicoot redefines manhole cleaning. Discover the smart features that make it powerful, efficient, and human-friendly."}/>
      <Industries IndustriesData={IndustriesData} />
      <Working title={"How Bandicoot Works?"} subTitle={"A Simplified Cleaning Process using Robotics & AI"} description={"The Bandicoot robot simplifies the complex and dangerous task of manhole cleaning into a safe and systematic process. The operator controls the robot from a safe distance using a user-friendly interface."} data={data} />
      <Statistics statisticsData={statisticsData} />
      <Updates updatesContent={updatesContent} />
      <Recognition sliderContent={sliderContent} />
      <MakeInIndia title={"Bandicoot 2.0:"} subTitle={"Make in India, for Global Impact"} image={"/images/products/manufacturing-plant.png"} description={"Bandicoot 2.0 is completely designed and manufactured in India, a testament to the \"Make in India\" initiative. Through Bandicoot, we champion the \"AatmaNirbhar Bharat Abhiyan\" (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging. While rooted in India, the problem of hazardous sanitation work is a global concern. Bandicoot's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."}/>
      <Milestones />
      <Reach />
      <Transform />
      <MissionRoboHole />
      <Clients data={ClientsData} />
      <Questions faqData={faqData} />
      <Form title={"Interested in Bandicoot?"} description={"Let us show you how Bandicoot can revolutionize your sanitation operations. Fill out the form below for a demo or to get more information."} />
    </>
  );
};

export default Bandicoot;
