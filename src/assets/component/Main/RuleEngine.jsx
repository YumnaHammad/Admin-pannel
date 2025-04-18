import React from 'react';
const openFormInNewTab = () => {
    window.open("/Adminpanel/blynk-enterprise-form", "_blank"); // Open in a new tab
  };

function RuleEngine() {
  return (
    <div className="mt-[90px] ms-[200px] items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
    <div className="flex flex-col items-center justify-center max-w-md">
      <h1 className="text-3xl font-semibold mt-[100px]">Rule Engine</h1>
      <p className="text-gray-600 mt-2">
      Define custom logic and create complex rules to control device behavior at scale, automating actions based on conditions and triggers.

      </p>
      <p className='text-gray-500 text-sm mt-2'>
      This feature is available with Blynk Enterprise plan.
      </p>
      <button
        className="mt-4 bg-[#00667C] text-white px-6 py-1 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700"
        onClick={openFormInNewTab}
      >
        <span className="text-lg">💬</span> Contact Sales
      </button>
    </div>
  </div>
  )
}

export default RuleEngine
