import React from 'react';
import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Upgrade from "./Setting/Upgrade";
const UpgradeButton = ({className,children}) => {
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  return (
    <>
    <div>
       <button
                  className={`relative overflow-hidden text-white  ${className} rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group`}
                  onClick={() => setIsUpgradeOpen(true)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
                  <span className="relative flex items-center">
                    <HiOutlineRocketLaunch
                      size={20}
                      className="font-medium mr-2"
                    />
                   {children}
                  </span>
                </button>
    </div>
      {isUpgradeOpen && <Upgrade onClose={() => setIsUpgradeOpen(false)} />}
    </>
  )
}

export default UpgradeButton
