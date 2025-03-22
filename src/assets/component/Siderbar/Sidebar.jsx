// Sidebar.jsx
import { useState } from "react";
import {
  ChartNoAxesCombined,
  Box,
  Sun,
  UsersRound,
  MapPin,
  Truck,
  Activity,
  ArrowRightToLine,
  ArrowLeftToLine,
} from "lucide-react";
import { CgOrganisation } from "react-icons/cg";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { useDeveloperMode } from "./useDeveloperMode";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);
  const { developerMode } = useDeveloperMode();

  const menuItems = [
    { icon: <ChartNoAxesCombined size={20} className="text-[#56575D]" />, label: "Dashboards" },
    developerMode && { icon: <HiOutlineWrenchScrewdriver className="text-[20px] text-[#56575D]" />, label: "Developer Zone" },
    { separator: true },
    { icon: <Box size={20} className="text-[#56575D]" />, label: "Devices" },
    { icon: <Sun size={20} className="text-[#56575D]" />, label: "Automations" },
    { icon: <UsersRound size={20} className="text-[#56575D]" />, label: "Users" },
    { icon: <CgOrganisation className="text-[20px] text-[#56575D]" />, label: "Organizations" },
    { icon: <MapPin size={20} className="text-[#56575D]" />, label: "Locations" },
    { separator: true },
    { icon: <Activity size={20} className="text-[#56575D]" />, label: "Demand Response" },
    { icon: <Truck size={20} className="text-[#56575D]" />, label: "Fleet Management" },
    { icon: <TbDeviceMobileMessage className="text-[20px] text-[#56575D]" />, label: "In-App Messaging" },
  ].filter(Boolean);

  return (
    <div classname="relative h-screen transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
    <div
      className={`relative h-screen transition-all duration-300 ease-in-out `}
      onMouseEnter={() => setShowCollapseButton(true)}
      onMouseLeave={() => setShowCollapseButton(false)}
    >
      <div className="p-4 font-semibold flex items-center gap-2 transition-all duration-300 ease-in-out">
        <div className="bg-[#24C48E] text-[22px] text-white w-8 h-8 flex items-center justify-center rounded-lg">B</div>
        {!isCollapsed && <span className="text-[20px] font-bold text-[#56575D]">Blynk.Console</span>}
      </div>

      <nav className={`mt-2 transition-all duration-300 ease-in-out ${showCollapseButton ? "pb-[15px] space-y-[8px]" : "pb-[20px] space-y-[11px]"}`}>        
        {menuItems.map((item, index) =>
          item.separator ? (
            <hr key={index} className="my-1 mx-4 border-gray-300" />
          ) : (
            <div key={index} className="group relative flex items-center gap-4 px-2 text-[16px] py-[7px] mx-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-200">
              <div className={`flex-shrink-0 ${isCollapsed && "py-[2px]"}`}>{item.icon}</div>
              {!isCollapsed && <span className="text-[#56575D]">{item.label}</span>}
              {isCollapsed && (
                <span className="absolute left-16 bg-white text-black px-2 rounded-md text-sm opacity-0 group-hover:opacity-100">{item.label}</span>
              )}
            </div>
          )
        )}
      </nav>

      {showCollapseButton && (
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="group relative flex items-center gap-4 px-2 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-200" onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className="flex-shrink-0">
              {isCollapsed ? <ArrowRightToLine className="text-[20px] text-[#56575D]" /> : <ArrowLeftToLine className="text-[20px] text-[#56575D]" />}
            </div>
            {!isCollapsed && <span className="text-[#56575D]">Collapse</span>}
            {isCollapsed && (
              <span className="absolute left-16 bg-white text-black px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100">Expand</span>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
