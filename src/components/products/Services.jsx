import React from "react";

const serviceList = [
  {
    title: "Radical Transparency",
    description: "",
    link: "",
  },
  {
    title: "Peak Efficiency",
    description:
      "Optimize routes, reduce idle time, and automate reporting to significantly boost productivity.",
    link: "",
  },
  {},
];

const Services = () => {
  return (
    <div className="bg-black bg-[url('/images/layout/footer-bg.png')] bg-cover px-4 py-8 text-gray-400">
      <p className="text-center text-2xl font-anton tracking-wide font-bold text-[#FCD901]">
        Our Services
      </p>
      <p className="mt-4 font-thin text-sm">
        Genrobotics provides comprehensive services to help organizations and
        government bodies implement advanced robotic solutions for urban
        sanitation and confined space management, ensuring compliance and
        operational excellence.
      </p>
      <div className="my-12 px-4">
        <p className="text-[#FCD901]">Radical Transparency</p>
        <p className="mt-2 text-sm">
          Build trust with stakeholders through verifiable, real-time data on
          all sanitation operations.
        </p>
        <div className="flex items-center mt-4">
          <button className="mr-2 text-sm">Learn More</button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
          </svg>
        </div>
      </div>
      <div className="my-12 px-4">
        <p className="text-[#FCD901]">Peak Efficiency</p>
        <p className="mt-2 text-sm ">
          Optimize routes, reduce idle time, and automate reporting to
          significantly boost productivity.
        </p>
        <div className="flex items-center mt-4 text-sm">
          <button className="mr-2 text-sm">Learn More</button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
          </svg>
        </div>
      </div>
      <div className="my-12 px-4">
        <p className="text-[#FCD901]">Assured Compliance</p>
        <p className="mt-2 text-sm ">
          Maintain a complete digital record of all activities, ensuring you are
          always ready for audits and regulatory checks.
        </p>
        <div className="flex items-center mt-4">
          <button className="mr-2 text-sm">Learn More</button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
          </svg>
        </div>
      </div>
      <div className="my-12 px-4">
        <p className="text-[#FCD901]">Smarter Decisions</p>
        <p className="mt-2 text-sm ">
          Leverage powerful analytics to make informed decisions about resource allocation and maintenance schedules.
        </p>
        <div className="flex items-center mt-4">
          <button className="mr-2">Learn More</button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;
