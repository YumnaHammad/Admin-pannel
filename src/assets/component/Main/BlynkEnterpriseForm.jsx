import React from "react";
import iconn from "../../img/iconn.png"

export default function BlynkEnterpriseForm() {
  return (
    <div className="flex flex-col md:flex-row  min-h-screen bg-white px-6 py-12">
      {/* Left Side - Form Section */}
      <div className=" w-1/2 px-14">
      <img src={iconn} className="mb-8 mt-10 h-[70px]"/>
        <h1 className="text-3xl font-bold text-gray-900">
          Talk to Sales About the Blynk <br />
          <span className="font-extrabold">Enterprise Solution</span>
        </h1>
       

        {/* Form Fields */}
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div>
            <label className="block text-md font-medium text-gray-700">Work Email *</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">Full Name *</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">Company Name *</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">HQ Country *</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option>British Virgin Islands</option>
              <option>United States</option>
              <option>Canada</option>
            </select>
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">Company Size *</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
            </select>
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">Industry *</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option>Water Solutions</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-md font-medium text-gray-700">Share a bit about your project *</label>
            <textarea className="w-full border border-gray-300 p-2 rounded-md h-24"></textarea>
          </div>
          <div className="md:col-span-2  mt-4">
    <button type="submit" className="bg-[#00667C] text-white px-6 py-2 rounded-[10px] shadow-lg hover:bg-blue-700">
      Submit
    </button>
  </div>
        </form>
      </div>

      {/* Right Side - Image & Features */}
      <div className="w-1/2  px-14 py-5 flex flex-col items-center">
      <div className="px-6 pt-6 pb-20  bg-black text-white rounded-[10px]">
        <h3 className="text-3xl font-black text-[#DDDDDD] mb-3">
          Enterprise
        </h3>
        <p className="text-gray-200 font-normal text-sm mb-4">
          WHITE-LABEL IOT SOLUTION
        </p>
        <div>
          <img src="https://static-image.nyc3.cdn.digitaloceanspaces.com/general/billing/IMG_Enterprise_2x_tiny.webp" />
        </div>
        <button className="mt-4 w-full py-2 bg-[#E1E1E1] text-[#262957] rounded-lg font-bold">
          Contact Sales to Upgrade
        </button>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li
            className="text-sm font-normal
"
          >
            ✔{" "}
            <span className="font-medium text-sm">
              Custom branded apps
            </span>
            published in Apple and Google stores
          </li>
          <li
            className="text-sm font-normal
"
          >
            ✔{" "}
            <span className="font-medium text-sm">Private server</span>
            on your domain
          </li>
          <li
            className="text-sm font-normal
"
          >
            ✔{" "}
            <span className="font-medium text-sm">
              Enterprise level
            </span>
            data security and SLA
          </li>
          <li
            className="text-sm font-normal
"
          >
            ✔{" "}
            <span className="font-medium text-sm">
              Reseller and integrator flows
            </span>
            for large scale deployments
          </li>
          <li
            className="text-sm font-normal
"
          >
            ✔ <span className="font-medium text-sm">App design</span>
            services
          </li>
          <li
            className="text-sm font-normal
"
          >
            ✔ <span className="font-medium text-sm">12 months</span>of
            historical data storage
          </li>
        </ul>
      </div>
        
      </div>
    </div>
  );
}
