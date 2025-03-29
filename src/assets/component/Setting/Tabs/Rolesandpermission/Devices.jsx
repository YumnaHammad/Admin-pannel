import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Devices = () => {
  const DevicesData = [
    "View devices",
    "Provision new devices",
    "Edit devices",
    "Control devices",
    "Delete devices",
    "View device actions log",
    "Delete device data",
    "Download reports",
    "View timeline",
    "Device data import",
  ];

  const OrganizationData = [
    "View devices",
    "Add new devices using web app",
    "Edit devices",
    "Control devices",
    "Delete devices",
    "View device actions log",
    "Delete data from device",
    "Download reports",
    "Download Devices list",
    "Device data import",
    "View custom segments",
    "Edit custom segments"
  ];
  const  AuthTokensData = [
    "Edit AuthTokens",
    "Manage static tokens",
  ];
  const  TransfersData = [
    "Transfer devices",
  ];
  const [roles, setRoles] = useState(() => {
    const initialState = {};
  
    [...DevicesData, ...OrganizationData, ...AuthTokensData, ...TransfersData].forEach((item) => {
      initialState[item] = [false, false, false];
    });
  
    return initialState;
  });
  

  const [expandedSections, setExpandedSections] = useState({ Devices: false });
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleRole = (role, index) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [role]: prevRoles[role]?.map((val, i) => (i === index ? !val : val)) || [false, false, false],
    }));
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filterContent = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return [
      {
        section: "Devices",
        content: DevicesData,
      },
    ].filter(
      ({ section, content }) =>
        section.toLowerCase().includes(lowerCaseTerm) ||
        content.some((item) => item.toLowerCase().includes(lowerCaseTerm))
    );
  };

  return (
    <div className="w-[100%]">
      {filterContent().map(({ section, content }) => (
        <div key={section} className="p-4 w-[100%]">
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={() => toggleSection(section)}
          >
            <h2 className="text-black flex items-center text-xl font-semibold">
              {expandedSections[section] ? (
                <FaMinus size={20} className="text-black mr-2 border-2 border-black font-normal" />
              ) : (
                <FaPlus size={20} className="text-black mr-2 border-2 border-black font-normal" />
              )}
              {section}
            </h2>
          </div>
          {expandedSections[section] && (
            <>
            <div className="mt-4">
              <h2 className="font-medium text-lg text-black mb-7">Owned Devices</h2>
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                  {content.map((role) => (
                    <tr key={role} className="border-t h-20 hover:bg-gray-50">
                      <td className="p-2 border border-gray-300 w-40 text-center">{role}</td>
                      {roles[role]?.map((isOn, index) => (
                        <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={isOn}
                              onChange={() => toggleRole(role, index)}
                            disabled
                            />
                            <div
                              className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out cursor-not-allowed${
                                isOn ? "bg-[#66AA45]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                  isOn ? "translate-x-3" : "translate-x-0"
                                }`}
                              ></div>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
       
            <div className="mt-4">
              <h2 className="font-medium text-lg text-black mb-7">Organization Devices</h2>
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                {OrganizationData.map((role) => (
                    <tr key={role} className="border-t h-20 hover:bg-gray-50">
                      <td className="p-2 border border-gray-300 w-40 text-center">{role}</td>
                      {roles[role]?.map((isOn, index) => (
                        <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={isOn}
                              onChange={() => toggleRole(role, index)}
                              disabled
                            />
                            <div
                              className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out cursor-not-allowed ${
                                isOn ? "bg-[#66AA45]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                  isOn ? "translate-x-3" : "translate-x-0"
                                }`}
                              ></div>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-lg text-black mb-7">AuthTokens</h2>
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                {AuthTokensData.map((role) => (
                    <tr key={role} className="border-t h-20 hover:bg-gray-50">
                      <td className="p-2 border border-gray-300 w-40 text-center">{role}</td>
                      {roles[role]?.map((isOn, index) => (
                        <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={isOn}
                              onChange={() => toggleRole(role, index)}
                              disabled
                            />
                            <div
                              className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out cursor-not-allowed ${
                                isOn ? "bg-[#66AA45]" : "bg-gray-300"
                              }`}
                            >
                              <div
                                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                  isOn ? "translate-x-3" : "translate-x-0"
                                }`}
                              ></div>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-lg text-black mb-7">Transfers</h2>
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                {AuthTokensData.map((role) => (
                    <tr key={role} className="border-t h-20 hover:bg-gray-50">
                      <td className="p-2 border border-gray-300 w-40 text-center">{role}</td>
                      {roles[role]?.map((isOn, index) => (
                        <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={isOn}
                              onChange={() => toggleRole(role, index)}
                              disabled={true}
                            />
                            <div
                              className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out cursor-not-allowed ${
                                isOn ? "bg-[#66AA45]" : "bg-gray-300"}
                              }`}
                            >
                              <div
                                className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                                  isOn ? "translate-x-3" : "translate-x-0"
                                }`}
                              ></div>
                            </div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </>  )}
        </div>
      ))}
    </div>
  );
};

export default Devices;
