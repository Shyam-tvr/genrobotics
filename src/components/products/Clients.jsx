import Image from 'next/image'
import React from 'react'

const Clients = ({data}) => {
  return (
    <div className="px-4 py-12 bg-[#f6f6f6]">
      <p className="text-center text-2xl font-anton font-bold tracking-wide">
        Our Esteemed Clients
      </p>
      <p className="text-sm mt-4">
        We are privileged to partner with a diverse range of organizations across various sectors, helping them achieve their sanitation and operational goals.
      </p>
      <div
        className="flex gap-8 mt-8 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {data.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center w-[74px] h-[75px]"
          >
            <Image
              src={client.image}
              alt={client.alt}
              width={74}
              height={75}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients