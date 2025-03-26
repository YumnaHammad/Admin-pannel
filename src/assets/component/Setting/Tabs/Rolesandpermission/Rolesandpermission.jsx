import React from 'react'
import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaToggleOn } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Permission from './FilterSections/Permission';
import RoleUsers from './RoleUsers';
import Devices from './Devices';
import Firmware from './FilterSections/Firmware';
import Templates from './FilterSections/Templates';


const Rolesandpermission = () => {
  
    //   const [permissions, setPermissions] = useState({
    //     viewRoles: [true, false, false],
    //     editRoles: [true, false, false],
     
    //  });
     const [roles, setRoles] = useState({
      "View roles and permissions": [true, false, false],
      "Edit roles": [true, false, false],
      "View users": [true, false, false],
      "Invite new users": [true, false, false],
      "Edit users": [true, false, false],
      "Delete users": [true, false, false],
      "Change user passwords": [true, false, false],
      "Force Logout": [true, false, false],
     "View user actions log": [true, false, false],
    "Transfer users": [true, false, false],
    "Download users list": [true, false, false],
    "Suspend users": [true, false, false],
    "Admin": [true, false, false],
    "Staff": [true, false, false],
    "User": [true, false, false],
    "Billing content...": [true, false, false],
    "Tag management content...": [true, false, false],
    "Webhook settings content...": [true, false, false],
    "User activity log content...": [true, false, false],
    });
      const [expandedSections, setExpandedSections] = useState({ Permissions: false, Users: false }); 
      const toggleSection = (section) => {
        setExpandedSections((prev) => ({
          ...prev,
          [section]: !prev[section],
        }));
      };
    
      const toggleRole = (role, index) => {
        setRoles((prevRoles) => ({
          ...prevRoles,
          [role]: prevRoles[role].map((val, i) => (i === index ? !val : val)),
        }));
      };
      const [searchTerm, setSearchTerm] = useState("");
      
    
      const filterContent = () => {
        const lowerCaseTerm = searchTerm.toLowerCase();
    
        return [
          {
            section: "Permissions",
            content: ["View roles and permissions", "Edit roles"],
          },
          { section: "Users", content: ["View users", "Invite new users", "Edit users", "Delete users", "Change user passwords", "Force Logout", "View user actions log", "Transfer users", "Download users list", "Suspend users"] },
          { section: "Devices", content: ["View devices", "Provision new devices", "Edit devices", "Control devices", "Delete devices", "View device actions log", "Delete device data", "Download reports" ,"View timeline"] },
          { section: "Billing", content: ["Billing content..."] },
          { section: "Tags", content: ["Tag management content..."] },
          { section: "Webhooks", content: ["Webhook settings content..."] },
          {
            section: "User actions log",
            content: ["User activity log content..."],
          },
        ].filter(
          ({ section, content }) =>
            section.toLowerCase().includes(lowerCaseTerm) ||
            content.some((item) => item.toLowerCase().includes(lowerCaseTerm))
        );
      };
  return (
    <div className="p-6 max-w-3xl mx-auto">
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold">Roles and permissions</h1>

      <div className="flex justify-between items-center">
        <button
          className=" relative overflow-hidden text-white px-8 py-2 rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group"
          onClick={() => setIsUpgradeOpen(true)}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
          <span className="relative flex items-center">
            <HiOutlineRocketLaunch
              size={16}
              className="mr-2 text-base font-normal"
            />
            Upgrade to Edit Permissions
          </span>
        </button>
      </div>
    </div>
    
    <div className="flex gap-2 mt-4">
      <div className=" bg-white shadow-md p-4 rounded-md col-4 w-52">
        <h2 className="font-medium text-lg">Actions</h2>
        <div className="flex justify-between text-blue-500 mt-2">
          <button
            onClick={() => setExpanded(false)}
            className="hover:underline text-sm font-medium"
          >
            Collapse all
          </button>
          <button
            onClick={() => setExpanded(true)}
            className="hover:underline text-sm font-medium"
          >
            Expand all
          </button>
        </div>
      </div>
      <div className="bg-[#24C48E] text-black p-4 rounded-md col-3 w-36 font-medium text-lg">
        Admin
        <div className="text-sm font-normal mt-3">1 user</div>
      </div>
      <div className="bg-[#24C48E] text-black p-4 rounded-md col-3 w-36 font-medium text-lg">
        Staff
        <div className="text-sm font-normal mt-3"> 0 users</div>
      </div>
      <div className="bg-[#24C48E] text-black p-4 rounded-md col-3 w-36 font-medium text-lg">
        User
        <div className="text-sm font-normal mt-3">0 users</div>
      </div>
    </div>
    <div className="relative w-full mt-6">
      <CiSearch
        className="absolute left-3 top-5  transform -translate-y-1/2 text-gray-400 "
        size={18}
      />
      <input
        type="text"
        placeholder="Search..."
        className=" p-2 border border-gray-300 rounded-md mb-4 w-80"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
          </div>
         
        <><Permission/></>
      <RoleUsers/>
<Devices/>
<Firmware/>
<Templates/>
  </div>
  )
}

export default Rolesandpermission