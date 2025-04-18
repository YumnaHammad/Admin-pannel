import React from 'react'

function WebDashboard() {
  return (
    <div className="mt-[90px] ms-[200px] items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
    <div className="flex flex-col items-center justify-center max-w-md">
      <h1 className="text-2xl font-semibold mt-[100px]">Web Dashboard</h1>
      <p className="text-gray-600 mt-2">
      Datastreams is a way to structure data that regularly flows in and out from device. Use it for sensor data, any telemetry, or actuators.
      </p>
      
      <button
        className="mt-4 bg-[#00667C] text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700"
       
      >
        <span className="text-lg">💬</span> Contact Sales
      </button>
    </div>
  </div>
  )
}

export default WebDashboard
