import React from 'react'

const data = [
    {
        id:"01",
        title:"Assessment and Planning",
        description:"We begin by assessing your current infrastructure, challenges, and goals. Based on this, we create a tailored digitalisation plan."
    },
    {
        id:"02",
        title:"Deployment and Integration",
        description:"We deploy the necessary automated hardware and fully integrate it with the G-Crow platform. Comprehensive training is provided to your team."
    },
    {
        id:"03",
        title:"Optimization and Support",
        description:"We provide ongoing support and use data analytics to continuously optimize your operations for maximum efficiency and impact."
    }
]

const Scroll = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">
        Our Implementation Roadmap
      </p>
      <div className="flex overflow-x-scroll mt-4">
        {
            data.map((item, index)=>(
                <div key={index} className="bg-white border-l shrink-0 w-42 m-2 overflow-hidden px-2">
                    <p className='text-[#D8A400] text-3xl'>{item.id}</p>
                    <h3 className="font-bold  text-sm">{item.title}</h3>
                    <p className="text-[12px] my-2">{item.description}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Scroll