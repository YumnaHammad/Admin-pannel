import React from "react";

function Inapp() {
  const openFormInNewTab = () => {
    window.open("/Adminpanel/blynk-enterprise-form", "_blank"); // Open in a new tab
  };

  return (
    <div className="flex items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
      <div className="flex flex-col  justify-center max-w-sm">
        <h1 className="text-2xl font-semibold items-start text-start">In-App Messaging</h1>
        <p className="text-gray-600 mt-2 items-start text-start">

        Engage users with in-app messaging and push notifications, enabling real-time communication, seamless updates, and built-in marketing opportunities—all within your app.
        </p>
        <p className="text-gray-500 text-sm mt-2 items-start text-start">
          This feature is available with Blynk Enterprise plan.
        </p>
        <button
          className="mt-4 bg-[#00667C] text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 w-[200px]"
          onClick={openFormInNewTab}
        >
          <span className="text-lg">💬</span> Contact Sales
        </button>
      </div>
      
    </div>
  );
}

export default Inapp;
