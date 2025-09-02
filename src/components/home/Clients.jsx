import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className="px-4 py-12">
      <p className="text-center text-2xl font-bold">
        Our Esteemed Clients
      </p>
      <p className="text-sm mt-4">
        We are privileged to partner with a diverse range of organizations across various sectors, helping them achieve their sanitation and operational goals.
      </p>
      <div
        className="flex gap-8 mt-8 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        <div className="flex-shrink-0 flex items-center justify-center w-[74px] h-[75px]">
          <Image
            src="/images/home/Client1.png"
            alt="Client 1"
            width={74}
            height={75}
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 flex items-center justify-center w-[70px] h-[60px]">
          <Image
            src="/images/home/Client2.png"
            alt="Client 2"
            width={70}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 flex items-center justify-center w-[100px] h-[60px]">
          <Image
            src="/images/home/Client3.png"
            alt="Client 3"
            width={80}
            height={70}
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 flex items-center justify-center w-[80px] h-[70px]">
          <Image
            src="/images/home/Client4.png"
            alt="Client 4"
            width={80}
            height={70}
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 flex items-center justify-center w-[90px] h-[80px]">
          <Image
            src="/images/home/Client5.png"
            alt="Client 5"
            width={90}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Clients