import { useState } from "react";
import { BsGear } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
import { User } from "lucide-react";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);

  // Close dropdown when clicking outside
  const closeDropdown = () => setIsOpen(false);

  return (
    <>
     <button onClick={() => setIsOpen(true)}>
          <User className="w-8 h-8 text-white bg-orange-400 rounded-full p-1 cursor-pointer mx-2" />
        </button>
      {/* Overlay to Lighten Background and Close on Click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeDropdown}
        ></div>
      )}

      <div className="relative z-50">
        {/* User Icon Button */}
       

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg p-4">
            {/* User Info */}
            <div className="flex items-center border-b pb-2 mb-2">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                H
              </div>
              <div className="ml-3">
                <p className="font-semibold">Hi</p>
                <p className="text-sm text-gray-500">lookforfare@yahoo.com</p>
              </div>
              <BsGear className="ml-auto text-gray-500 cursor-pointer" />
            </div>

            {/* Locale */}
            <div className="flex justify-between items-center py-2">
              <span>Locale</span>
              <span className="text-gray-700">USA</span>
            </div>

            {/* Developer Mode Toggle */}
            <div className="flex justify-between items-center py-2">
              <span>Developer Mode</span>
              <div
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition cursor-pointer ${
                  developerMode ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => setDeveloperMode(!developerMode)}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                    developerMode ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Billing (Upgrade) */}
            <div className="flex justify-between items-center py-2">
              <span>Billing</span>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                UPGRADE
              </button>
            </div>

            {/* Theme Switcher */}
            <div className="flex justify-between items-center py-2">
              <span>Theme</span>
              <div className="flex gap-2">
                <MdOutlineWbSunny
                  className={`cursor-pointer ${
                    !isDarkMode ? "text-yellow-500" : "text-gray-500"
                  }`}
                  size={20}
                  onClick={() => setIsDarkMode(false)}
                />
                <MdOutlineDarkMode
                  className={`cursor-pointer ${
                    isDarkMode ? "text-blue-500" : "text-gray-500"
                  }`}
                  size={20}
                  onClick={() => setIsDarkMode(true)}
                />
              </div>
            </div>

            {/* Logout Button */}
            <div className="border-t mt-2 pt-2">
              <button className="flex items-center text-red-500 w-full">
                <IoMdLogOut className="mr-2" />
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDropdown;