import React from 'react'

const Permission = () => {
    const permissionsData = ["View roles and permissions", "Edit roles"];
      const [roles, setRoles] = useState({
        ...permissionsData.reduce((acc, item) => ({ ...acc, [item]: [true, false, false] }), {}),
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
    <div
    key={section}
    className="mt-6 p-4  w-[100%]"
  >
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={() => toggleSection(section)}
    >
      <h2 className="text-lg font-semibold flex items-center">
      {expandedSections[section] ? (
          <FaMinus size={16} className="mr-2" />
        ) : (
          <FaPlus size={16} className="mr-2" />
        )}
        {section}
      </h2>
    </div>
    {expandedSections[section] && (
      <div className="mt-4">
          <table className="w-full border-collapse border border-gray-200">
            <tbody>
            {content.map((role) => (
                <tr className="border-t h-20 hover:bg-gray-50">
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
                          disabled={true} 
                        />
                        <div className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
    isOn ? "bg-[#66AA45]" : "bg-gray-300"
  }`}  disabled={true} >
                          <div
                            className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                              isOn
                                ? "translate-x-3"
                                : "translate-x-0"
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
  )
}

export default Permission