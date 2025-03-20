import { useState } from "react";
import { ChevronDown, Settings, Bell, Megaphone, User } from "lucide-react";
import Setting from "../Setting/Setting";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false); 


  return (
    <div  className="relative">
    <nav className="flex items-center justify-between bg-white p-2  rounded-md border-b shadow-sm">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center text-sm font-medium border px-3 py-1 rounded-lg hover:bg-gray-100"
        >
          My organization - 8847SK <ChevronDown size={16} className="ml-1" />
        </button>
        <Settings size={18} className="text-gray-500 cursor-pointer hover:text-gray-700"  onClick={() => setShowSettings(!showSettings)} />
      </div>

      
      

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4`">
      <div className="flex items-center bg-green-100 text-gray-700 px-3 py-2 rounded-md text-sm">
        Messages used: <span className="font-semibold mx-1">0 of 30k</span>
        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
          <div className="w-0 h-full bg-green-500"></div>
        </div>
      </div>
        <Megaphone size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <Bell size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <Megaphone size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <Bell size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
        <User className="w-6 h-6 text-white bg-orange-400 rounded-full p-1 cursor-pointer" />
      </div>
    </nav>

     {/* Setting Page Rendered Below Navbar */}
     {showSettings && (
      <div className="absolute top-full left-0 w-full bg-white border-t shadow-md">
        <Setting />
      </div>
    )}
    </div>
  );
};

export default Navbar;
