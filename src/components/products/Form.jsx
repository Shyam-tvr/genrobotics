import React from "react";

const Form = () => {
  return (
    <div className="px-4 py-12 bg-gradient-to-br from-[#FCD901] to-white">
      <p className="text-center text-2xl font-bold">Interested in Bandicoot?</p>
      <p className="text-sm my-4">
        Let us show you how Bandicoot can revolutionize your sanitation
        operations. Fill out the form below for a demo or to get more
        information.
      </p>
      <div className="p-4 bg-white rounded-lg shadow-md space-y-4 gap-4">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="bg-[#D9D9D9] p-2 w-full" placeholder="Your Name"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="bg-[#D9D9D9] p-2 w-full" placeholder="your.email@example.com"/>
        </div>
        <div>
            <label htmlFor="organisation">Organisation</label>
            <input type="text" id="organisation" className="bg-[#D9D9D9] p-2 w-full" placeholder="your company/municipality"/>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" className="bg-[#D9D9D9] p-2 w-full" rows={4} placeholder="How can we help you? Any specific question about bandicoot"/>
        </div>
      </div>
    </div>
  );
};

export default Form;
