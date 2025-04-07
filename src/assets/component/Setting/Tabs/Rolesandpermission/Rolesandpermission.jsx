import React, { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Permission from "./FilterSections/Permission";
import RoleUsers from "./RoleUsers";
import Devices from "./Devices";
import Firmware from "./FilterSections/Firmware";
import Templates from "./FilterSections/Templates";
import Organization from "./FilterSections/Organization";
import UpgradeButton from "@/assets/component/UpgradeButton";

const Rolesandpermission = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    Permissions: false,
    Users: false,
    Devices: false,
    Firmware: false,
    Templates: false,
    Organization: false,
  });

  // Sections Data
  const sections = [
    { name: "Permissions", component: <Permission /> },
    { name: "Users", component: <RoleUsers /> },
    { name: "Devices", component: <Devices /> },
    { name: "Firmware", component: <Firmware /> },
    { name: "Templates", component: <Templates /> },
    { name: "Organization", component: <Organization /> },
  ];

  // Filter sections based on search
  const filteredSections = sections.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle a specific section
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Expand all sections
  const expandAll = () => {
    const updatedSections = Object.keys(expandedSections).reduce((acc, section) => {
      acc[section] = true;
      return acc;
    }, {});
    setExpandedSections(updatedSections);
  };

  // Collapse all sections
  const collapseAll = () => {
    const updatedSections = Object.keys(expandedSections).reduce((acc, section) => {
      acc[section] = false;
      return acc;
    }, {});
    setExpandedSections(updatedSections);
  };

  return (
    <div className="pt-6 px-6 max-w-3xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Roles and permissions</h1>
        <UpgradeButton className="px-8 py-2 mt-4">Upgrade to Edit Permissions</UpgradeButton>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-2 top-0 sticky">
        <div className="bg-white shadow-md p-4 rounded-md w-52">
          <h2 className="font-medium text-lg">Actions</h2>
          <div className="flex justify-between text-blue-500 mt-2">
            <button onClick={collapseAll} className="hover:underline text-sm font-medium">
              Collapse all
            </button>
            <button onClick={expandAll} className="hover:underline text-sm font-medium">
              Expand all
            </button>
          </div>
        </div>
        <div className="bg-[#2BB590] text-black p-4 rounded w-36 font-medium text-lg">
          Admin
          <div className="text-sm font-normal mt-3">1 user</div>
        </div>
        <div className="bg-[#2BB590] text-black p-4 rounded w-36 font-medium text-lg">
          Staff
          <div className="text-sm font-normal mt-3">0 users</div>
        </div>
        <div className="bg-[#2BB590] text-black p-4 rounded w-36 font-medium text-lg">
          User
          <div className="text-sm font-normal mt-3">0 users</div>
        </div>
      </div>
<div className=" max-h-[350px] overflow-y-auto">
      {/* Search Bar */}
      <div className="relative w-full mt-6">
        <CiSearch
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search permissions"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 text-gray-500 shadow-sm focus:ring-1 focus:ring-gray-300 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sections */}
      <div className="mt-4">
      {filteredSections.map(({ name, component }, index) => (
  <div key={index} className="mb-4 border-b pb-2">
    {React.cloneElement(component, { 
      isExpanded: expandedSections[name], 
      toggleSection: () => toggleSection(name)  // Pass toggle function
    })}
  </div>
))}
   </div>
   </div>
    </div>
  );
};

export default Rolesandpermission;
