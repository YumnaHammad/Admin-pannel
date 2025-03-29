import React from 'react'
import { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Permission from './FilterSections/Permission';
import RoleUsers from './RoleUsers';
import Devices from './Devices';
import Firmware from './FilterSections/Firmware';
import Templates from './FilterSections/Templates';
import Organization from './FilterSections/Organization';


const Rolesandpermission = () => {
    
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
            { section: "Permissions", component: <Permission /> },
            { section: "Users", component: <RoleUsers /> },
            { section: "Devices", component: <Devices /> },
            { section: "Firmware", component: <Firmware /> },
            { section: "Templates", component: <Templates /> },
            { section: "Organization", component: <Organization /> }
          ].filter(({ section }) => section.toLowerCase().includes(lowerCaseTerm));
        };

        const [expandedSections, setExpandedSections] = useState({
          Permissions: false,
          Users: false,
          Devices: false,
          Firmware: false,
          Templates: false,
          Organization: false,
        });

        const toggleSection = (section) => {
          setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section], // Toggle specific section
          }));
        };

        const expandAll = () => {
          const updatedSections = Object.keys(expandedSections).reduce((acc, section) => {
            acc[section] = true;
            return acc;
          }, {});
          setExpandedSections(updatedSections);
        };
        const collapseAll = () => {
          const updatedSections = Object.keys(expandedSections).reduce((acc, section) => {
            acc[section] = false;
            return acc;
          }, {});
          setExpandedSections(updatedSections);
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
           onClick={collapseAll}
            className="hover:underline text-sm font-medium"
          >
            Collapse all
          </button>
          <button
          onClick={expandAll}
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
    <div className="mt-4">
        {filterContent().map(({ section, component }, index) => (
          <div key={index} className="mb-4">
            <div>{component}</div>
          </div>
        ))}
      </div>   
  </div>
  )
}

export default Rolesandpermission