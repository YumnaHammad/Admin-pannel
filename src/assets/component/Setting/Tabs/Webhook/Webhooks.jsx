import { useState } from "react";
import Create_Webhook from "./Create_Webhook";

export default function Webhooks() {
  const[isopen,setIsopen]=useState(false);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Webhooks</h1>
          <p className="text-gray-600 mt-2 max-w-md text-base font-normal">
            Webhooks let you connect Blynk events to other services on the Internet. Start by creating your
            first one. Full documentation can be found <a href="#" className="text-blue-500">here</a>.
          </p>
          <div className="flex justify-center">
          <button className="flex items-center gap-1 mt-3 bg-[#00667C] text-white text-xs px-3 py-2 rounded-md shadow hover:bg-[#00657c71]" onClick={() =>setIsopen(true)}>
            <span className="text-xl">+</span> Create Webhook
          </button>
          </div>
        </div>
        {isopen && <Create_Webhook onClose={() => setIsopen(false)} />}


      </div>
    );
  }
  