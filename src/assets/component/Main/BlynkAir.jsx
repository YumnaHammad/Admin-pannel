import React from 'react';
import { Plus} from "lucide-react";


function BlynkAir() {
  return (
    <div className="mt-[90px] ms-[200px] items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
    <div className="flex flex-col items-center justify-center max-w-md">
      <h1 className="text-3xl font-semibold mt-[100px]">Ship new firmware <br/>updates Over-The-Air</h1>
      <p className="text-gray-600 mt-2">
      Here you can remotely update millions of your devices with new firmware and track shipment progress
      </p>
      
      <button
          className="flex items-center gap-1 mt-3 bg-[#00667C] text-white text-xs px-3 py-2 rounded-md shadow hover:bg-[#00657c71]"
          onClick={() => setShowModal(true)}
        >
          <Plus size={14} /> New Shipping
        </button>
    </div>
  </div>
  )
}

export default BlynkAir
