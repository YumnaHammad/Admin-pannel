import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import { LifeBuoy, Compass, Rocket, BookOpen, Users, Globe, MessageCircle } from "lucide-react";
import BlynkStepForm from "./Help/BlynkStepForm";
import Upgrade from "../Setting/Upgrade";
import Quickstart from "./Help/Quickstart";

const HelpDropdown = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const closeDropdown = () => setIsHelpOpen(false);

  const handleSettingsClick = () => {
    closeDropdown(); // Close dropdown before navigation
    navigate("/Adminpanel/setting/billing");
  };

  return (
    <>
      {/* Help Button */}
      <button
        id="help-btn"
        className="p-1 hover:bg-gray-100 rounded-full me-2"
        onClick={() => setIsHelpOpen(!isHelpOpen)}
      >
        <LifeBuoy size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 mx-2" />
      </button>

      {/* Overlay to close dropdown when clicked outside */}
      {isHelpOpen && <div className="fixed inset-0 z-40" onClick={closeDropdown}></div>}

      <div className="relative z-50">
        {/* Dropdown Menu */}
        {isHelpOpen && (
          <div className="fixed top-16 right-[105px] w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 px-1">
            <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

            {/* Dropdown List */}
            <ul className="text-[15px] text-gray-700">
              {[
                { icon: Compass, label: "Blynk Tour", action: () => setIsTourOpen(true) },
                { icon: Rocket, label: "Quickstart", action: () => setIsStartOpen(true) },
                { icon: BookOpen, label: "Documentation" },
                { icon: Users, label: "Community" },
                { icon: Globe, label: "Official Website" },
                { icon: MessageCircle, label: "Contact Support", action: handleSettingsClick, upgrade: true }, // Runs handleSettingsClick
              ].map(({ icon, label, action, upgrade }, i) => (
                <li
                  key={i}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={action ? action : undefined}
                >
                  {React.createElement(icon, {
                    size: label === "Contact Support" ? 24 : 18,
                    className: `mr-2 ${label === "Contact Support" ? "text-gray-700 mr-3" : ""}`,
                  })}

                  {label}

                  {upgrade && (
                    <button
                      className="relative text-white px-2 py-[2px] rounded-full flex text-[10px] items-center transition-transform duration-200 ease-out group"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents dropdown from closing when clicking the button
                        setIsUpgradeOpen(true);
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c] rounded-full"></span>
                      <span className="relative flex items-center rounded-full px-2 py-1">
                        UPGRADE
                      </span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Modals */}
      <BlynkStepForm isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
      <Quickstart isOpen={isStartOpen} onClose={() => setIsStartOpen(false)} />
      {isUpgradeOpen && <Upgrade onClose={() => setIsUpgradeOpen(false)} />}
    </>
  );
};

export default HelpDropdown;
