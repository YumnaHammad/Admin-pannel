import React from "react";

function DemandResponse() {
  const openFormInNewTab = () => {
    window.open("/Adminpanel/blynk-enterprise-form", "_blank"); // Open in a new tab
  };

  return (
    <div className="flex items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
      <div className="flex flex-col items-center justify-center max-w-md">
        <h1 className="text-2xl font-semibold">Demand Response</h1>
        <p className="text-gray-600 mt-2">
          Optimize energy usage by integrating with demand response programs and
          smart grids, reducing peak demand, minimizing waste, and enhancing
          efficiency with real-time data and automation.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          This feature is available with Blynk Enterprise plan.
        </p>
        <button
          className="mt-4 bg-[#00667C] text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700"
          onClick={openFormInNewTab}
        >
          <span className="text-lg">💬</span> Contact Sales
        </button>
      </div>
    </div>
  );
}

export default DemandResponse;
