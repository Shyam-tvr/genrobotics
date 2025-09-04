import React from 'react'
import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Why from "@/components/products/Why";
import MakeInIndia from "@/components/products/MakeInIndia";
import MissionRoboHole from "@/components/products/MissionRoboHole";
import Clients from "@/components/products/Clients";
import Questions from "@/components/products/Questions";
import Form from "@/components/products/Form";

const feature = [
  {
    image: "/images/products/mammoth-feature1.png",
    title: "Automatic Grabber",
    description:
      "A portable automatic grabbing unit removes solid waste like silt and sludge from manholes.",
  },
  {
    image: "/images/products/mammoth-feature2.png",
    title: "Suction Utility",
    description:
      "The suction unit efficiently extracts all loosened debris and wastewater after jetting.",
  },
  {
    image: "/images/products/mammoth-feature3.png",
    title: "Jetting Utility",
    description: "The high-pressure jetting system clears stubborn blockages using strong water jets.",
  },
  {
    image: "/images/products/mammoth-feature4.png",
    title: "Inspection Utility",
    description:
      "Smart monitoring of the entire process via a mobile application for data-driven decisions.",
  },
];

const ClientsData = [
  {
    image: "/images/home/Client3.png",
    alt: "Client 1",
  },
  {
    image: "/images/products/Client1.png",
    alt: "Client 2",
  },
  {
    image: "/images/products/Client2.png",
    alt: "Client 3",
  },
  {
    image: "/images/products/Client3.png",
    alt: "Client 4",
  }
];

const faqData = [
  {
    question: "What is G Mammoth 4-in-1 and what are its main functions?",
    answer:
      "G Mammoth is a versatile, all-in-one system designed for comprehensive urban and industrial maintenance. It integrates four key functions into a single unit: Automatic Grabbing for solid waste, High-Pressure Jetting to clear blockages, Powerful Suction to remove slurry, and a smart Inspection system for real-time monitoring.",
  },
  {
    question: "What makes the G Mammoth solution unique?",
    answer:
      "G Mammoth's uniqueness lies in its multi-functionality. Instead of requiring separate machines for different tasks (like a jetting truck, a suction machine, and a grabber), G Mammoth combines these capabilities. This significantly reduces operational costs, simplifies logistics, and improves the overall efficiency of sanitation and maintenance work.",
  },
  {
    question: "Who can benefit most from using G Mammoth?",
    answer:
      "G Mammoth is ideal for organizations that handle a wide variety of maintenance challenges. This includes Municipal Corporations, Smart City authorities, Public Works Departments, and large industrial estates that need a single, flexible solution for cleaning drains, manholes, and other confined spaces.",
  },
  {
    question: "How does technology enhance G Mammoth's operations?",
    answer:
      "G Mammoth leverages technology for smarter operations. It can be integrated with the G-Crow platform, which provides real-time GPS tracking, performance monitoring, and automated report generation. This data-driven approach allows for better planning, increased accountability, and proactive maintenance of infrastructure."
  }
];

const Mammoth = () => {
  return (
    <>
      <Banner logo={"/images/products/gmammoth-logo.png"} bg={"/images/products/mammoth-bg.png"} title={"The All-in-One Automated Solution For Comprehensive Urban Sanitation and Maintenance."}/>
      <Why title={"G Mammoth"} subTitle={"One Machine, Four Powerful Solutions"} image={"/images/products/mammoth.png"} description={"Urban maintenance demands versatility. Cities face diverse challenges, from blocked drains and accumulated waste to the need for regular inspection and cleaning of public infrastructure. Traditionally, this required multiple machines and teams, leading to high costs and logistical complexities.G Mammoth 4-in-1 is engineered to be the single answer to these multifaceted problems. By integrating four critical functions into one robust automated system, G Mammoth offers unparalleled efficiency, reduces operational costs, and minimizes the need for multiple pieces of equipment. It is the ultimate tool for modern urban management, ensuring cities are cleaner, safer, and more efficient."}/>
      <Features featuresDetails={feature} description={"From stubborn clogs to underground diagnostics, G Mammoth 4 in 1 handles it all — efficiently. Dive into the features that simplify sewer management and elevate safety standards."} />
      <Clients data={ClientsData} />
      <MakeInIndia title={"G Mammoth :"} subTitle={"Make in India, for Global Impact"} image={"/images/products/img_2575.png"} description={"G Mammoth is completely designed and manufactured in India, a testament to the 'Make in India' initiative. Through G Mammoth, we champion the 'AatmaNirbhar Bharat Abhiyan' (Self-Reliant India campaign), empowering the nation with indigenous robotic technologies to eliminate manual scavenging. While rooted in India, the problem of hazardous sanitation work is a global concern. G Mammoth's innovative solution holds a global perspective, offering a proven and adaptable technology that can be deployed worldwide to transform sanitation practices, protect workers, and improve public health in any nation facing similar challenges."}/>
      <MissionRoboHole />
      <Questions faqData={faqData} />
      <Form title={"Discover the Power of G Mammoth?"} description={"Learn how the G Mammoth 4-in-1 can consolidate your urban maintenance operations. Contact us for specifications and a live demo."} />
    </>
  )
}

export default Mammoth