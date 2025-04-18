import React, { useEffect, useRef } from "react";
import { Cog } from 'lucide-react';
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
const Menu = ({ onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-sm font-medium"
    >
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
      <Cog size={16} /> Edit Dashboard
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 text-gray-400 opacity-60 cursor-not-allowed">
  <HiOutlineDocumentDuplicate /> Duplicate Dashboard
</button>

      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
      <MdManageAccounts /> Manage Access
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
      <PiHouseFill /> Set as Homepage
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-red-100 text-red-600 flex items-center gap-2">
      <AiOutlineDelete /> Delete Dashboard
      </button>
    </div>
  );
};

export default Menu;
