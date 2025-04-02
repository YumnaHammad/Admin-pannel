import {useState} from "react";
import React from "react";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Upgrade from "../Setting/Upgrade";

function Organ() {
    const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  return (
    <div className="flex items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
      <div className="flex flex-col items-center justify-center max-w-md">
        <h1 className="text-3xl font-semibold">Organizations</h1>
        <p className="text-gray-600 mt-2">
  
Manage your clients, regional offices and partners using a multi-level organization structure with editable roles and access permissions.

        </p>
        <p className="text-gray-500 text-sm mt-2">
        This feature is available with Blynk PRO plan.
        </p>
       <button className="mt-4 relative overflow-hidden text-white px-4 py-[9px] rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group"onClick={() => setIsUpgradeOpen(true)}
                                     >
                                       <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
                                       <span className="relative flex items-center">
                                         <HiOutlineRocketLaunch
                                           size={20}
                                           className="font-medium mr-1"
                                         />
                                         UPGRADE To PRO
                                       </span>
                                     </button>
      </div>
      {isUpgradeOpen && <Upgrade onClose={() => setIsUpgradeOpen(false)} />} 
    </div>
  );
}

export default Organ;
