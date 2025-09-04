import React from 'react'
import Features from "@/components/products/Features";
import Banner from "@/components/products/Banner";
import Questions from "@/components/products/Questions";
import Form from "@/components/products/Form";
import Image from 'next/image';
import Services from '@/components/products/Services';
import Accountability from '@/components/products/Accountability';

const feature = [
  {
    icon: "/images/products/gcrow-feature1.png",
    title: "Complaint Registration & Resolution",
    description:
      "Swiftly register manhole complaints and track their resolution status in real-time, ensuring rapid response to citizen needs and enhancing satisfaction.",
  },
  {
    icon: "/images/products/gcrow-feature2.png",
    title: "Real-time GPS Tracking",
    description:
      "Monitor the live location of your entire robotic fleet and field operators. Use geo-fencing to manage work zones and improve team coordination.",
  },
  {
    icon: "/images/products/gcrow-feature3.png",
    title: "Asset Management",
    description: "Maintain a complete inventory of your sanitation assets. Track usage, schedule maintenance, and optimize the lifecycle of your robotic fleet.",
  },
  {
    icon: "/images/products/gcrow-feature4.png",
    title: "HR Management & Accountability",
    description:
      "Track operator activities and performance to ensure accountability. Manage teams, schedules, and work logs efficiently from a central dashboard.",
  },
];

const faqData = [
  {
    question: "Can G Crow integrate with our existing robotic fleet?",
    answer:
      "Yes, G Crow is designed to seamlessly integrate with most of the robotic systems, ensuring minimal disruption to your current operations.",
  },
  {
    question: "How secure is our operational data on G Crow?",
    answer:
      "G Crow employs enterprise-grade encryption and multi-layered security protocols to ensure your operational data remains fully protected and confidential.",
  },
  {
    question: "Is the platform easy for our field operators to use?",
    answer:
      "Absolutely. G Crow features an intuitive interface with simplified workflows, making it easy for field operators to adapt quickly with minimal training.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We offer comprehensive onboarding, training modules, and 24/7 customer support to ensure smooth platform adoption and continued assistance.",
  }
];

const page = () => {
  return (
    <>
      <Banner logo={"/images/products/gcrow-logo.png"} bg={"/images/products/gcrow-bg.png"} title={"Revolutionizing Sanitation Management"} />
      <Accountability />
      <Features featuresDetails={feature} description={"From dashboards to drains, G Crow gives sanitation a digital command center."} />
      <Image src="/images/products/gcrow.png" alt="G-crow" width={350} height={400} className='mx-auto'/>
      <Services />
      <Questions faqData={faqData} />
      <Form title={"Ready to Revolutionize Your Operations"} description={"Fill out the form below to see G Crow in action. Our team will contact you shortly to schedule a live, personalized demo."} />
    </>
  )
}

export default page