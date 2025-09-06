import Banner from '@/components/services/Banner'
import FAQ from '@/components/services/FAQ'
import Features from '@/components/services/Features'
import Form from '@/components/services/Form'
import Inefficiencies from '@/components/services/Inefficiencies'
import Scroll from '@/components/services/Scroll'
import Space from '@/components/services/Space'
import React from 'react'

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
      <Banner bg="/images/services/ugd-bg.png" title="The Complete Digitalisation of UGD Operations" subTitle="Integrating Advanced Hardware and Intelligent Software for a Smarter, Safer Sanitation Ecosystem." theme="dark"/>
      <Inefficiencies />
      <Space />
      <Scroll />
      <Features />
      <FAQ faqData={faqData}/>
      <Form title="Modernize Your Sanitation Infrastructure" description="Let us help you build a smarter, more responsive, and efficient sanitation system for your city."/>
    </>
  )
}

export default page