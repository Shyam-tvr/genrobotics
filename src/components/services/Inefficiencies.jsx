import Image from "next/image";
import React from "react";

const Inefficiencies = () => {
  return (
    <div className="px-8 py-12">
      <p className="text-xl font-bold  text-center">The Inefficiencies of Traditional UGD Management</p>
      <p className="text-sm mt-2  text-center">Moving from Reactive to Proactive</p>
      <Image src="/images/services/confined-space-cleaning.png" alt="confined-space-cleaning" width={300} height={200} className="my-4 rounded-xl"/>
      <p className="text-sm mt-2">Traditional management of Underground Drainage (UGD) systems relies heavily on manual record-keeping, guesswork, and reactive maintenance. This often leads to significant inefficiencies:</p>
      <ul className="my-4 list-disc pl-2 space-y-2">
        <li className="text-sm"><span className="font-semibold">Lack of Real-time Data:</span>Without live monitoring, authorities are often unaware of blockages or overflows until they become critical public issues.</li>
        <li className="text-sm"><span className="font-semibold">Inefficient Resource Allocation:</span> Field teams are dispatched without precise information, leading to wasted time, fuel, and manpower.</li>
        <li className="text-sm"><span className="font-semibold">No Accountability:</span> It is difficult to track if cleaning tasks were completed, their duration, and the performance of the crew.</li>
        <li className="text-sm"><span className="font-semibold">Delayed Response Times:</span> Citizen complaints often get lost in bureaucratic processes, leading to public dissatisfaction and health hazards.</li>
      </ul>
    </div>
  );
};

export default Inefficiencies;
