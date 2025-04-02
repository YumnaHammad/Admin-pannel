import React from "react";

function Fleet() {
  const openFormInNewTab = () => {
    window.open("/Adminpanel/blynk-enterprise-form", "_blank"); // Open in a new tab
  };

  return (
    <div className="flex items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
      <div className="flex flex-col items-center justify-center max-w-md">
        <h1 className="text-2xl font-semibold"> Fleet Management</h1>
        <p className="text-gray-600 mt-2">
       
Monitor fleets of moving assets with automated task management, route optimization, and real-time tracking for efficient operations.
This feature is available with Blynk Enterprise plan.
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

export default Fleet;
