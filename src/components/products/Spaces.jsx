import Image from 'next/image'
import React from 'react'

const data = [
  {
    image:"/images/products/tank.png",
    label:"Tanks"
  },
  {
    image:"/images/products/canal.png",
    label:"Canals"
  },
  {
    image:"/images/products/drainage.png",
    label:"Drainage"
  },
  {
    image:"/images/products/stp.png",
    label:"STP Wells"
  }
]

const Spaces = () => {
  return (
    <div className="px-4 py-12">
      <h2 className="text-2xl font-bold py-4 text-center">Application Across Different Horizontal Confined Spaces</h2>
      <div className="grid grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
        {
          data.map((item,index)=>(
          <div key={index} className='relative'>
            <Image src={item.image} alt={item.label} width={190} height={250}/>
            <p className='absolute inset-0 p-4'>{item.label} </p>
          </div>
          ))
        }

      </div>
    </div>
  )
}

export default Spaces