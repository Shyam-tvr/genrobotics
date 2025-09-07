import React from "react";

const Accountability = () => {
  return (
    <div className="px-4 py-12 bg-[#f6f6f6]">
      <p className="text-center text-2xl font-anton font-bold tracking-wide">
        From Uncertainty to Accountability: The Digital Transformation
      </p>
      <div className="mt-6">
        <div className="mx-2 my-4 py-8 px-4 bg-[#d9d9d936] rounded-xl">
          <p className="text-center font-anton tracking-wide text-sm">
            The Old Way: Operational Blindspots
          </p>
          <div className="bg-[linear-gradient(90deg,#fcd90100,#000000_50%,#fcd90100)] h-[1px] mx-auto my-2"></div>
          <p className="my-6 text-xs">
            Without a digital system, managers grapple with uncertainty. Manual
            logs are prone to errors, schedules are inefficient, and proving
            compliance is a constant challenge. This lack of real-time
            visibility leads to wasted resources and potential public health
            risks.
          </p>
          <ul className="list-disc pl-6 text-xs">
            <li>Unreliable paper-based tracking</li>
            <li>No real-time verification of completed work</li>
            <li>Difficulty in managing and deploying teams effectively</li>
            <li>Major hurdles in generating compliance reports</li>
          </ul>
        </div>
        <div className="mx-2 my-4 py-8 px-4 bg-gradient-to-br from-[#fcda0169] to-whit rounded-xl">
          <p className="text-center font-anton tracking-wide">
            The G Crow Way: Absolute Clarity
          </p>
          <div className="bg-[linear-gradient(90deg,#fcd90100,#000000_50%,#fcd90100)] h-[1px] mx-auto my-2"></div>
          <p className="my-6 text-xs">
            G Crow replaces guesswork with certainty. It provides a single
            source of truth for all sanitation activities. Every task is
            tracked, verified with visual evidence, and logged automatically,
            creating a transparent, efficient, and fully accountable operation
            from the ground up.
          </p>
          <ul className="list-disc pl-6 text-xs">
            <li>Live dashboard with GPS tracking</li>
            <li>Timestamped photo evidence for every job</li>
            <li>Optimized scheduling and resource management</li>
            <li>Automated, audit-ready compliance reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accountability;
