import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

const Permission = ({ isExpanded, toggleSection  }) => {
  const permissionsData = ["View roles and permissions", "Edit roles"];
  const [roles, setRoles] = useState(
    permissionsData.reduce((acc, item) => ({ ...acc, [item]: [true, false, false] }), {})
  );

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
        section: "Permissions control",
        content: ["View roles and permissions", "Edit roles"],
      },
    ].filter(
      ({ section, content }) =>
        section.toLowerCase().includes(lowerCaseTerm) ||
        content.some((item) => item.toLowerCase().includes(lowerCaseTerm))
    );
  };


  return (
    <div className="w-[100%]">
      {filterContent().map(({ section, content}, index) => (
        <div key={index} className="p-4 w-[100%]">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleSection}>
            <h2 className="text-black flex items-center text-xl font-semibold">
              {isExpanded ? (
                <FaMinus size={20} className="text-black mr-2 border-2 border-black font-normal" />
              ) : (
                <FaPlus size={20} className="text-black mr-2 border-2 border-black font-normal" />
              )}
              {section}
            </h2>
          </div>
          {isExpanded && (
            <div className="mt-4">
              <table className="w-full border-collapse border border-gray-200">
                <tbody>
                  {content.map((role) => (
                    <tr key={role} className="border-t h-20 hover:bg-gray-50">
                      <td className="p-2 border border-gray-300 w-40 text-center">
                        {role}
                      </td>
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
                              className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
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
          )}
        </div>
      ))}
    </div>
  );
};


export default Permission;
