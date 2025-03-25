import { useState, useEffect } from "react";
import { ChevronDown, Settings, Bug, Rocket } from "lucide-react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CgOrganisation } from "react-icons/cg";
import NewsDropdown from "./NewsDropdown";
import * as Tooltip from "@radix-ui/react-tooltip";
import UserDropdown from "./UserDropdown";
import HelpDropdown from "./HelpDropdown";
import { useDeveloperMode } from "../Siderbar/useDeveloperMode";

import { Link, useNavigate } from "react-router-dom";
import Upgrade from "../Setting/Upgrade";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { developerMode } = useDeveloperMode();
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const navigate = useNavigate();

  // Close dropdown when settings open
  useEffect(() => {
    if (isSettingsOpen) setIsOpen(false);
  }, [isSettingsOpen]);

  // Toggle Settings & Close Dropdown
  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
    setIsOpen(false);
    navigate("/setting");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (!document.getElementById("dropdown-content")?.contains(e.target) && !document.getElementById("toggle-btn")?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>}
      <nav className="flex items-center dark:bg-gray-900 text-gray-700 dark:text-gray-300 justify-between bg-white px-2 py-2 rounded-md shadow-sm relative z-50 mb-1">
        {/* Organization Dropdown */}
        <div className="relative flex items-center">
          <button
            id="toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center text-[15px] font-medium border-e px-3 py-2 transition ${isOpen ? "bg-gray-100 shadow-sm" : "hover:bg-gray-100"}`}
          >
            My organization - 8847SK
            <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
          <TooltipWrapper content="organization Settings">
                  
                  <button className="p-1 hover:bg-gray-100 rounded-full" onClick={handleSettingsClick}>
                    <Settings size={20} className="text-[#5A9E87] cursor-pointer hover:text-green-700" />
                  </button>
                
                </TooltipWrapper>

          {/* Dropdown Content */}
          {isOpen && (
            <div id="dropdown-content" className="absolute left-0 mt-[174px] ms-[-10px] w-[500px] bg-white dark:bg-gray-900  dark:text-white shadow-md rounded-lg p-4 border z-50">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center space-x-4">
                  <span className="bg-gray-200 dark:bg-gray-300 text-[#00667C] p-2 rounded-md">
                    <CgOrganisation />
                  </span>
                  <span className="text-gray-900 font-medium text-sm   dark:text-gray-600">
                    My organization - 8847SK
                  </span>
                </div>
                <TooltipWrapper content="organization Settings">
                  
                  <button className="p-1 hover:bg-gray-100 rounded-full" onClick={handleSettingsClick}>
                    <Settings size={20} className="text-[#00667C] cursor-pointer hover:text-[#00667C]" />
                  </button>
                
                </TooltipWrapper>
              </div>

              <hr className="border-gray-300 my-3" />
              <h3 className="font-semibold text-gray-900   dark:text-gray-600">Organizations is a PRO feature</h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Manage your clients, regional offices, and partners using a multi-level organization structure with editable roles and access permissions.
              </p>
              {/* <button className="mt-3 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-md hover:scale-105 transition">
                🚀 Upgrade To PRO
              </button> */}
              <button className="mt-4 relative overflow-hidden text-white px-2 py-[7px] rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group"onClick={() => setIsUpgradeOpen(true)}
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
          )}
        </div>
         {isUpgradeOpen && <Upgrade onClose={() => setIsUpgradeOpen(false)} />} 

        {/* Navbar Right Icons */}
        <div className="flex items-center">
          

        <TooltipWrapper 
            content={
              <div className="w-[265px] py-2 px-2 ">
                <p className="text-[15px]">Limit resets every 30 days.</p>
                <p className="text-[15px]">Send unlimited messages with PRO!</p>
                <button className="mt-2 flex w-full items-center justify-center text-[16px] bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium px-2 py-2 rounded-full hover:scale-105 transition">
                  <Rocket size={21} className="me-2 " />
                  Get Unlimited Messages
                </button>
              </div>
            }
          >
            <div className="relative flex items-center bg-[#EBF5E3] text-gray-700 dark:bg-gray-500 px-3 py-[6px] mx-2 rounded-md text-sm cursor-pointer   text-lightText ">
              Messages used: <span className="font-semibold mx-1">2 of 30k</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
                <div className="w-0 h-full bg-green-500"></div>
              </div>
            </div>
          </TooltipWrapper>

          {developerMode && (
            <>
              <TooltipWrapper content="Latest News">
  <div>
    <NewsDropdown />
  </div>
</TooltipWrapper>

<TooltipWrapper content="Help">
  <div>
    <HelpDropdown />
  </div>
</TooltipWrapper>

              <TooltipWrapper content="Report An Issue">
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <Bug size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 me-2" />
                </button>
              </TooltipWrapper>
            </>
          )}

          <UserDropdown />
        </div>
      </nav>

      
    </>
  );
};

// Tooltip Wrapper Component
const TooltipWrapper = ({ children, content }) => (
  <Tooltip.Provider delayDuration={200}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="bg-white text-black px-3 py-2 rounded-sm text-[14px] shadow-lg z-50" side="bottom" align="center" sideOffset={12}>
          {content}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export default Navbar;
