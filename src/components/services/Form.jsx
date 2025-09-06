import React from "react";

const Form = ({ title, description }) => {
  return (
    <div id="form" className="px-4 py-12 bg-gradient-to-br from-[#FCD901] to-white">
      <p className="text-center text-2xl font-bold">{title}?</p>
      <p className="text-sm my-4">{description}</p>
      <div className="p-4 bg-white rounded-lg shadow-md space-y-4 gap-4">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="bg-[#F2F2F2] p-2 w-full rounded-lg mt-1 text-sm" placeholder="Your Name"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="bg-[#F2F2F2] p-2 w-full rounded-lg mt-1 text-sm" placeholder="your.email@example.com"/>
        </div>
        <div>
            <label htmlFor="organisation">Organisation</label>
            <input type="text" id="organisation" className="bg-[#F2F2F2] p-2 w-full rounded-lg mt-1 text-sm" placeholder="your company/municipality"/>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" className="bg-[#F2F2F2] p-2 w-full rounded-lg mt-1 text-sm" rows={4} placeholder="How can we help you? Any specific question about bandicoot"/>
        </div>
      </div>
    </div>
  );
};

export default Form;
