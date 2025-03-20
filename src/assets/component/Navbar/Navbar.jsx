import { useState, useEffect } from "react";
import { ChevronDown, Settings, Bug, Rocket } from "lucide-react";
import { CgOrganisation } from "react-icons/cg";
import NewsDropdown from "./NewsDropdown";
import * as Tooltip from "@radix-ui/react-tooltip";
import UserDropdown from "./UserDropdown";
import HelpDropdown from "./HelpDropdown";
import { useDeveloperMode } from "../Siderbar/useDeveloperMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { developerMode } = useDeveloperMode();

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

  const TooltipWrapper = ({ children, content }) => (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-white text-black px-3 py-2 rounded-sm text-[14px] shadow-lg z-50" side="bottom" align="center" sideOffset={8}>
            {content}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => setIsOpen(false);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>}
      <nav className="flex items-center justify-between bg-white px-2 py-[5px] rounded-md border-b shadow-sm relative z-50">
        <div className="relative flex items-center">
          <div className="relative">
            <button
              id="toggle-btn"
              onClick={toggleDropdown}
              className={`flex items-center text-[15px] font-medium border-e px-3 py-2 transition ${
                isOpen ? "bg-gray-100 shadow-sm" : "hover:bg-gray-100"
              }`}
            >
              My organization - 8847SK
              <ChevronDown
                size={16}
                className="ml-1 transition-transform"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                onClick={closeDropdown}
              ></div>
            )}
            {isOpen && (
              <div
                id="dropdown-content"
                className="absolute left-0 mt-[-43px] ms-[-10px] w-[500px] bg-white shadow-md rounded-lg p-4 border animate-fadeIn z-50"
              >
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center space-x-4">
                    <span className="bg-gray-200 p-2 rounded-md">
                      <CgOrganisation />
                    </span>
                    <span className="text-gray-900 font-medium text-sm">
                      My organization - 8847SK
                    </span>
                  </div>
                  <button className="py-1 px-2 hover:bg-gray-100 ">
                    <Settings
                      size={20}
                      className="text-[#5A9E87] cursor-pointer hover:text-green-700"
                    />
                  </button>
                </div>
                <hr className="border-gray-300 my-3" />
                <h3 className="font-semibold text-gray-900">
                  Organizations is a PRO feature
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Manage your clients, regional offices, and partners using a
                  multi-level organization structure with editable roles and access
                  permissions.
                </p>
                <button className="mt-3 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium px-4 py-2 rounded-md hover:scale-105 transition duration-200">
                  🚀 Upgrade To PRO
                </button>
              </div>
            )}
          </div>
            {/* Organization Dropdown Toggle */}

            <TooltipWrapper content="Organization Settings">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <Settings size={20} className="text-[#5A9E87] cursor-pointer hover:text-green-700" />
            </button>
          </TooltipWrapper>
        </div>
        <div className="flex items-center">
    
        <TooltipWrapper 
            content={
              <div className="w-[265px] py-1 px-1">
                <p className="text-[15px]">Limit resets every 30 days.</p>
                <p className="text-[15px]">Send unlimited messages with PRO!</p>
                <button className="mt-2 flex w-full items-center justify-center text-[16px] bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium px-2 py-2 rounded-full hover:scale-105 transition">
                  <Rocket size={21} className="me-2 " />
                  Get Unlimited Messages
                </button>
              </div>
            }
          >
            <div className="relative flex items-center bg-[#EBF5E3] text-gray-700 px-2 py-[6px] mx-2 rounded-md text-sm cursor-pointer">
              Messages used: <span className="font-semibold mx-1">0 of 30k</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
                <div className="w-0 h-full bg-green-500"></div>
              </div>
            </div>
          </TooltipWrapper>
      

          {developerMode &&
           <TooltipWrapper content="Lastest News">
           <button>
             <NewsDropdown  />
           </button>
         </TooltipWrapper>  }
          {developerMode && 
          <TooltipWrapper content="Help">
          <button>
          <HelpDropdown />
          </button>
        </TooltipWrapper> }

          {developerMode && (
            <TooltipWrapper content="Report An Issue">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <Bug size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 me-2" />
              </button>
            </TooltipWrapper>
          )}

          <UserDropdown />
        </div>
      </nav>
    </>
  );
};

export default Navbar;