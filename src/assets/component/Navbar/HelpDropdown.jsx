import { useState } from "react";
import { LifeBuoy, Compass, Rocket, BookOpen, Users, Globe, MessageCircle } from "lucide-react";

const HelpDropdown = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Close dropdown when clicking outside
  const closeDropdown = () => setIsHelpOpen(false);

  return (
    <>
       {/* Help Button */}
       <button
          id="help-btn"
          className="p-1 hover:bg-gray-100 rounded-full me-2"
          onClick={() => setIsHelpOpen(true)}
        >
          <LifeBuoy size={20} className="text-gray-500 cursor-pointer hover:text-gray-700 mx-2" />
        </button>
      {/* Overlay to Lighten Background and Disable All Clicks */}
      {isHelpOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={closeDropdown}
        ></div>
      )}

      <div className="relative z-50">
     

        {/* Dropdown Menu */}
        {isHelpOpen && (
          <div
            id="help-dropdown"
            className="fixed top-16 right-[105px] w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 px-1"
          >
            {/* Dropdown Arrow */}
            <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

            {/* Dropdown List */}
            <ul className="text-[15px] text-gray-700">
              {[
                { icon: Compass, label: "Blynk Tour" },
                { icon: Rocket, label: "Quickstart" },
                { icon: BookOpen, label: "Documentation" },
                { icon: Users, label: "Community" },
                { icon: Globe, label: "Official Website" },
                { icon: MessageCircle, label: "Contact Support", upgrade: true },
              ].map(({ icon: Icon, label, upgrade }, i) => (
                <li key={i} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Icon
                    size={label === "Contact Support" ? 24 : 18}
                    className={`mr-2 ${label === "Contact Support" ? "text-gray-700 mr-3" : ""}`}
                  />
                  {label}
                  {upgrade && (
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                      Upgrade
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default HelpDropdown;
