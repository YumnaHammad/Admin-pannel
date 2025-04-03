import React from 'react'
import { useState } from "react";
import { FaBalanceScale } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Upgrade from "../../Upgrade";
const Billing = () => {
    const [selectedPlan, setSelectedPlan] = useState(200);
    const [isYearly, setIsYearly] = useState(false);
     const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
    const plans = [50, 200, 500];
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
    const toggleBilling = () => setIsYearly(!isYearly);
  return (
    <div className=" bg-white w-full  pl-6 pt-6">
    <h2 className="text-2xl font-bold">Current Plan</h2>
    <div className="flex justify-between">
      <div className="mt-4">
        <h3 className="text-green-600 text-xl font-bold">Free</h3>
        <p className="text-black">FOR EXPLORATION</p>
        <p className="text-lg font-bold">
          $0 <span className="text-lg">/month</span>
        </p>
      </div>
      <div className="mt-4 space-x-6 flex">
        <div className="w-24">
          <div className="text-sm mb-3 ">
            <span className="uppercase text-gray-500 ">Devices</span>
          </div>
          <div className="text-sm mb-3">
            <span>1 of 10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full w-3"></div>
          </div>
        </div>
        <div className="w-24">
          <div className="text-sm mb-3 ">
            <span className="uppercase  text-gray-500">Users</span>
          </div>
          <div className="text-sm mb-3">
            <span>1 of 1</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-orange-500 h-1.5 rounded-full w-full"></div>
          </div>
        </div>
        <div className="w-24">
          <div className="text-sm  text-gray-500 mb-3">
            <span className="uppercase">Templates</span>
          </div>
          <div className="text-sm mb-3">
            <span>1 of 10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full w-3"></div>
          </div>
        </div>
        <div className="w-24">
          <div className="text-sm  text-gray-500 mb-3">
            <span className="uppercase">Messages</span>
          </div>
          <div className="text-sm mb-3">
            <span>1 of 30k</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-orange-500 h-1.5 rounded-full w-0"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 border-t pt-4 flex justify-between">
      <div>
        <h3 className="font-bold text-2xl">
          Upgrade to unlock more features
        </h3>
        <div className="flex items-end space-x-2 my-4">
          <span
            className={`text-xs font-medium cursor-pointer ${
              !isYearly ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsYearly(false)}
          >
            MONTHLY
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={toggleBilling}
            />
            <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out peer-checked:bg-[#66AA45]">
              <div
                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                  isYearly ? "translate-x-3" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
          <span
            className={`text-xs font-medium cursor-pointer ${
              isYearly ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setIsYearly(true)}
          >
            YEARLY
          </span>
          <span
            className={`bg-[#EAF8E3] text-[#66AA68] px-2 py-1 rounded-md text-xs ${
              isYearly
                ? "bg-[#EAF8E3] text-[#6EAF4F]"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            Save 20%
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex items-center gap-2 px-4 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition text-sm font-semibold h-8"
          onClick={() => setIsUpgradeOpen(true)}
        >
          <FaBalanceScale className="w-5 h-5" /> Compare All Plans
        </button>
      </div>
    </div>
    {isUpgradeOpen && (
      <Upgrade onClose={() => setIsUpgradeOpen(false)} />
    )}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 bg-gray-100 rounded-lg">
        <h3 className="text-orange-600  font-black text-3xl">PRO</h3>
        <p className="text-gray-600 font-normal text-sm">
          FOR PROFESSIONAL IOT DEVELOPMENT
        </p>
        <p className="text-2xl font-bold">
          $299 <span className="text-sm font-normal">/month</span>
        </p>
        <div className="max-w-md mx-auto bg-gray-100 mt-14">
          <div className="flex justify-start space-x-4 text-left">
            {plans.map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedPlan === plan
                    ? "bg-black text-gray-200"
                    : "bg-gray-200 text-black"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
          <h2 className="mt-4 text-lg font-semibold text-left">
            {selectedPlan} Devices and Users
          </h2>
          <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center">
            <HiOutlineRocketLaunch className="mr-3" /> Upgrade to PRO
            Now!
          </button>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li
              className="text-sm font-normal
"
            >
              ✔ <span className="font-medium text-sm">Unlimited</span>{" "}
              messages
            </li>
            <li
              className="text-sm font-normal
"
            >
              ✔{" "}
              <span className="font-medium text-sm">50 templates</span>,
              multiple devices per template
            </li>
            <li
              className="text-sm font-normal
"
            >
              ✔{" "}
              <span className="font-medium text-sm">
                200 datastreams
              </span>{" "}
              per template
            </li>
            <li
              className="text-sm font-normal
"
            >
              ✔{" "}
              <span className="font-medium text-sm">Multi-tenant</span>{" "}
              organization management
            </li>
            <li
              className="text-sm font-normal
"
            >
              ✔ <span className="font-medium text-sm">Editable</span>{" "}
              permissions
            </li>
            <li
              className="text-sm font-normal
"
            >
              ✔ <span className="font-medium text-sm">6 months</span> of
              historical data storage
            </li>
          </ul>
          <div className="justify-center flex">
            <button
              className="mt-4 px-5  bg-gray-300 text-gray-700 py-2 rounded-lg text-sm"
              onClick={() => setIsUpgradeOpen(true)}
            >
              <PiDotsThreeOutline />
            </button>
          </div>
        </div>
        {isUpgradeOpen && (
          <Upgrade onClose={() => setIsUpgradeOpen(false)} />
        )}
      </div>
      <div className="p-6 bg-black text-white rounded-lg">
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
  )
}

export default Billing
