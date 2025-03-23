import { useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import { UsersRound } from "lucide-react";
import { LiaUserLockSolid, LiaTagSolid } from "react-icons/lia";
import { PiCreditCard, PiCloudArrowUpLight } from "react-icons/pi";
import { RiWebhookFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Setting/Setting.css";
import { ChevronDown } from "lucide-react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Upgrade from "./Upgrade";
import { FaToggleOn } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "../Setting/Setting.css";
import { CiSearch } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";

function Setting() {
  const [orgName, setOrgName] = useState("My organization - 8847SK");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [countrySelected, setCountrySelected] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handlePhoneChange = (value, data) => {
    setPhone(value);

    if (data?.dialCode) {
      setCountrySelected(true);
    }

    if (value.length > (data?.dialCode?.length || 0)) {
      setError("");
    }
  };

  const validatePhone = () => {
    if (countrySelected && phone.length <= phone.indexOf(" ") + 1) {
      setError("Phone number is required.");
    } else {
      setError("");
    }
  };
  const handleChange = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };
  const [activeTab, setActiveTab] = useState("General");
  const [selectedTimezone, setSelectedTimezone] =
    useState("Qatar (Asia/Qatar)");
  const [isOpen, setIsOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const timezones = [
    "Novokuznetsk (Asia/Novokuznetsk)",
    "Novosibirsk (Asia/Novosibirsk)",
    "Omsk (Asia/Omsk)",
    "Oral (Asia/Oral)",
    "Phnom Penh (Asia/Phnom_Penh)",
    "Pontianak (Asia/Pontianak)",
    "Pyongyang (Asia/Pyongyang)",
    "Qatar (Asia/Qatar)",
  ];
  const initialState = {
    orgName: "My organization - 8847SK",
    description: "",
    phone: "",
    selectedTimezone: "Qatar (Asia/Qatar)",
  };
  const [permissions, setPermissions] = useState({
    viewRoles: [true, false, false],
    editRoles: [true, false, false],
  });
  const [expandedSections, setExpandedSections] = useState({ Permissions: false, Users: false }); 
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };


  const [searchTerm, setSearchTerm] = useState("");
  const [isYearly, setIsYearly] = useState(false);
  const toggleBilling = () => setIsYearly(!isYearly);

  const filterContent = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();

    return [
      {
        section: "Permissions",
        content: ["View roles and permissions", "Edit roles"],
      },
      { section: "Users", content: ["View users", "Invite new users", "Edit users", "Delete users", "Change user passwords", "Force Logout", "View user actions log", "Transfer users", "Download users list", "Suspend users"] },
      { section: "Devices", content: ["Admin", "Staff", "User"] },
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

  const [selectedPlan, setSelectedPlan] = useState(200);
  const plans = [50, 200, 500];
  return (
    <div className="flex gap-6 setting-menu w-full bg-white ">
      <aside className="w-2/4 border-r pr-1 pt-5 pl-2 ">
        <div className="uppercase text-gray-600 text-sm mb-5 ml-5">
          Organization Settings
        </div>
        <ul className="space-y-1">
          {[
            { name: "General", icon: <CgOrganisation className="mr-3" /> },
            { name: "Users", icon: <UsersRound size={20} className="mr-3" /> },
            {
              name: "Roles and permissions",
              icon: <LiaUserLockSolid size={20} className="mr-3" />,
            },
            {
              name: "Billing",
              icon: <PiCreditCard className="mr-3" />,
              extra: (
                <span className="text-xs bg-[#EBEBEC] px-4 font-semibold py-1 rounded-2xl mr-5 text-gray-600">
                  FREE
                </span>
              ),
            },
            { name: "Tags", icon: <LiaTagSolid size={20} className="mr-3" /> },
            {
              name: "Webhooks",
              icon: <RiWebhookFill size={20} className="mr-3" />,
            },
            {
              name: "User actions log",
              icon: <HiOutlineUser size={20} className="mr-3" />,
            },
          ].map((tab) => (
            <li
              key={tab.name}
              className={`flex justify-between items-center py-3 rounded-md pl-3 cursor-pointer ${
                activeTab === tab.name
                  ? "bg-gray-200 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              <div className="flex items-center">
                {tab.icon} {tab.name}
              </div>
              {tab.extra}
            </li>
          ))}
        </ul>
      </aside>
      <main className="pr-6 w-full">
        {activeTab === "General" && (
          <div className="bg-white">
            <nav className="flex justify-between items-center content-center pt-6 pl-6 pb-1">
              <h2 className="font-bold text-2xl">General</h2>
              <div className="flex justify-center gap-4">
                <button
                  className=" px-7 py-2 rounded text-sm/none font-bold bg-[#dbf5ec] text-[#167655] hover:bg-[#E2F7F0] hover:text-[#459177]"
                  onClick={() => {
                    setOrgName(initialState.orgName);
                    setDescription(initialState.description);
                    setPhone(initialState.phone);
                    setSelectedTimezone(initialState.selectedTimezone);
                    setIsChanged(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`px-7 py-2 rounded text-sm/none font-bold ${
                    isChanged
                      ? "bg-[#24c48e] hover:bg-[#91E1C6] text-black"
                      : "bg-[#91E1C6] text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!isChanged}
                >
                  Save
                </button>
              </div>
            </nav>
            <div className="w-full flex justify-between pl-6 overflow-y-auto h-[80vh]">
              <div className="w-2/3 pt-5">
                <div className="relative group mb-5">
                  <label className="text-gray-600 text-xs uppercase">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => handleChange(setOrgName, e.target.value)}
                    className="mt-1 w-full border p-2  hover:border-green-400 focus:outline-none rounded text-gray-600 text-sm"
                  />
                  <p className="absolute text-gray-500 text-base hidden group-hover:block">
                    Use letters, digits, space or '.', '-', '"' characters
                  </p>
                </div>
                <div>
                  <label className="block text-gray-600 text-xs uppercase">
                    Description (Optional)
                  </label>
                  <textarea
                    value={description}
                    maxLength={500}
                    placeholder="Add some description"
                    onChange={(e) =>
                      handleChange(setDescription, e.target.value)
                    }
                    className="mt-1 w-full border p-2 rounded hover:border-green-400 focus:outline-none  resize-none text-gray-600 h-[170px]"
                  />
                  <div className="flex justify-end mt-1">
                    <span className="text-gray-400 text-sm">
                      {description.length} / 500
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 text-xs uppercase mb-1">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={""}
                    value={phone}
                    onChange={(value) => handleChange(setPhone, value)}
                    placeholder="+1(222)333-44-55"
                    inputStyle={{
                      width: "100%",
                      borderRadius: "5px",
                      border: error ? "1px solid red" : "1px solid #ccc",
                      transition: "border 0.2s ease-in-out",
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    dropdownStyle={{
                      zIndex: 10,
                    }}
                    // onFocus={(e) => (e.target.style.border = "1px solid #00c951")}
                    onBlur={validatePhone}
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-1">{error}</p>
                  )}
                  <p className="text-xs text-gray-600 mb-2">
                    By entering my phone number, I consent to receive text
                    updates from Blynk.Console regarding my devices. Data rates
                    may apply. See our regarding my devices. Data rates may
                    apply. See our and Terms and Conditions.
                  </p>
                </div>
                <div className="relative w-80">
                  <label className="text-gray-600 text-xs uppercase">
                    Time zone
                  </label>
                  <div
                    className="border rounded-md p-2 flex justify-between items-center cursor-pointer bg-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-gray-700">{selectedTimezone}</span>
                    <ChevronDown size={18} className="text-gray-500" />
                  </div>
                  {isOpen && (
                    <ul className="absolute mt-1 w-full border rounded-md bg-white shadow-md max-h-40 overflow-auto z-10">
                      {timezones.map((timezone, index) => (
                        <li
                          key={index}
                          className={`p-2 cursor-pointer hover:bg-gray-200 ${
                            selectedTimezone === timezone
                              ? "bg-gray-300 font-bold"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedTimezone(timezone);
                            setIsOpen(false);
                          }}
                        >
                          {timezone}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div>
                <div className="flex justify-end">
                  <div className=" p-5 text-center w-72 ">
                    <h2 className="block text-gray-600 text-xs uppercase mb-1 text-left">
                      logo
                    </h2>
                    <div className="flex flex-col items-center bg-[#FAFAFA] rounded py-3 border-dashed cursor-not-allowed">
                      <div className="text-green-200 text-3xl">
                        <PiCloudArrowUpLight
                          size={48}
                          className="text-[#167655] font-normal"
                        />
                      </div>
                      <p className="text-black font-normal mt-2 text-base">
                        Upgrade to upload organization logo
                      </p>
                      <button
                        className="mt-4 relative overflow-hidden text-white px-8 py-2 rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group"
                        onClick={() => setIsUpgradeOpen(true)}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
                        <span className="relative flex items-center">
                          <HiOutlineRocketLaunch
                            size={20}
                            className="font-medium mr-2"
                          />
                          UPGRADE
                        </span>
                      </button>
                    </div>
                    <p className="text-gray-500 text-base mt-2 text-left">
                      Please clear the cache after the upload to see the change
                      right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isUpgradeOpen && (
              <Upgrade onClose={() => setIsUpgradeOpen(false)} />
            )}
          </div>
        )}
        {activeTab === "Users" && (
          <div>
            <div className="p-6 bg-white  w-full">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl  font-bold">Users</h2>
                <button className="bg-[#24C48E] text-black px-4 py-2 rounded-md hover:bg-[#6DD8B4] font-bold text-sm">
                  + Invite a new user
                </button>
              </div>
              {/* Search Box */}
              <input
                type="text"
                placeholder="Search Users"
                className="w-80 border border-gray-300 rounded-sm px-2 py-2 mb-4 text-sm font-normal"
              />
              <div>
                <p className="mb-3 text-base font-normal">1 User</p>
              </div>
              {/* User Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="p-3 text-left">
                        <input type="checkbox" className="w-4 h-4" />
                      </th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">Location</th>
                      <th className="p-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">
                        <input type="checkbox" className="w-4 h-4" />
                      </td>
                      <td className="p-3 flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-full">
                          HI
                        </div>
                        <span>Hi (you)</span>
                      </td>
                      <td className="p-3 text-blue-600 font-medium">Admin</td>
                      <td className="p-3 text-gray-600">No lc</td>
                      <td className="p-3">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Roles and permissions" && (
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
            <div className="relative w-full my-6">
              <CiSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className=" p-2 border border-gray-300 rounded-md mb-4 w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {filterContent().map(({ section, content }) => (
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
                      )}{" "}
                      {section}
                    </h2>
                  </div>
                  {expandedSections[section] && (
                    <div className="mt-4">
                      {section === "Permissions" && (
                        <table className="w-full border-collapse border border-gray-200">
                          <tbody>
                            {content.includes("View roles and permissions") && (
                              <tr className="border-t h-20 hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 w-40 text-center">
                                  View roles and permissions
                                </td>
                                {permissions.viewRoles.map((isOn, index) => (
                                  <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={isOn}
                                        onChange={() => togglePermission("viewRoles", index)}
                                        disabled={true} 
                                      />
                                      <div className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
                  isOn ? "bg-[#66AA45]" : "bg-gray-300"
                } ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
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
                            )}
                            {content.includes("Edit roles") && (
                              <tr className="border-t hover:bg-gray-50 h-20">
                                <td className="p-2 border border-gray-300 text-center">Edit roles</td>
                                {permissions.editRoles.map((isOn, index) => (
                                  <td key={index} className="p-2 border border-gray-300 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={isOn}
                                        onChange={() =>
                                          togglePermission("editRoles", index)
                                        }
                                        disabled={true} 
                                      />
                                      <div className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
                  isOn ? "bg-[#66AA45]" : "bg-gray-300"
                } ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}>
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
                            )}
                          </tbody>
                        </table>
                      )}
                      {section === "Users" && (
                        <table className="w-full border-collapse border border-gray-200">
                          <tbody>
                            {content.includes("Admin") && (
                              <tr className="border-t h-20 hover:bg-gray-50">
                                <td className="p-2 border border-gray-300 w-40 text-center">Admin</td>
                                {userRoles.admin.map((isOn, index) => (
                                  <td key={index} className="p-2 border border-gray-300 w-32 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" className="sr-only peer" checked={isOn} disabled />
                                      <div
                                        className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
                                          isOn ? "bg-[#66AA45]" : "bg-gray-300"
                                        } ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
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
                            )}
                            {content.includes("Staff") && (
                              <tr className="border-t hover:bg-gray-50 h-20">
                                <td className="p-2 border border-gray-300 text-center">Staff</td>
                                {userRoles.staff.map((isOn, index) => (
                                  <td key={index} className="p-2 border border-gray-300 text-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                      <input type="checkbox" className="sr-only peer" checked={isOn} disabled />
                                      <div
                                        className={`w-8 h-4 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out ${
                                          isOn ? "bg-[#66AA45]" : "bg-gray-300"
                                        } ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
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
                            )}
                          </tbody>
                        </table>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* ;Permissions
            <div className="mt-6 border p-4 rounded-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpanded(!expanded)}
              >
                <h2 className="text-lg font-semibold flex items-center">
                  {expanded ? (
                    <FaMinus size={16} className="mr-2" />
                  ) : (
                    <FaPlus size={16} className="mr-2" />
                  )}{" "}
                  Permissions control
                </h2>
              </div>
              {expanded && (
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead></thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">View roles and permissions</td>
                        <td className="p-2">
                          <FaToggleOn
                            checked={permissions.viewRoles}
                            onChange={(val) =>
                              setPermissions({ ...permissions, viewRoles: val })
                            }
                            className={`$ {permissions.viewRoles ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-11`}
                          >
                            <span className="sr-only">Enable</span>
                            <span
                              className={`$ {permissions.viewRoles ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
                            />
                          </FaToggleOn>
                        </td>
                        <td className="p-2">
                          <FaToggleOn
                            className="bg-gray-300 h-6 w-11 rounded-full"
                            disabled
                          />
                        </td>
                        <td className="p-2">
                          <FaToggleOn
                            className="bg-gray-300 h-6 w-11 rounded-full"
                            disabled
                          />
                        </td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-2">Edit roles</td>
                        <td className="p-2">
                          <FaToggleOn
                            checked={permissions.editRoles}
                            onChange={(val) =>
                              setPermissions({ ...permissions, editRoles: val })
                            }
                            className={`$ {permissions.editRoles ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-11`}
                          >
                            <span className="sr-only">Enable</span>
                            <span
                              className={`$ {permissions.editRoles ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
                            />
                          </FaToggleOn>
                        </td>
                        <td className="p-2">
                          <FaToggleOn
                            className="bg-gray-300 h-6 w-11 rounded-full"
                            disabled
                          />
                        </td>
                        <td className="p-2">
                          <FaToggleOn
                            className="bg-gray-300 h-6 w-11 rounded-full"
                            disabled
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div> */}
            {/* Users   */}
            {/* <div className="mt-6 border p-4 rounded-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedUsers(!expandedUsers)}
              >
                <h2 className="text-lg font-semibold flex items-center">
                  {expandedUsers ? (
                    <FaMinus size={16} className="mr-2" />
                  ) : (
                    <FaPlus size={16} className="mr-2" />
                  )}{" "}
                  Users-
                </h2>
              </div>
              {expandedUsers && (
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Role</th>
                        <th className="p-2">Users</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Admin</td>
                        <td className="p-2">1</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-2">Staff</td>
                        <td className="p-2">0</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">User</td>
                        <td className="p-2">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div> */}
            {/* Devices */}
            {/* <div className="mt-6 border p-4 rounded-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpandedDevices(!expandedDevices)}
              >
                <h2 className="text-lg font-semibold flex items-center">
                  {expandedDevices ? (
                    <FaMinus size={16} className="mr-2" />
                  ) : (
                    <FaPlus size={16} className="mr-2" />
                  )}{" "}
                  Devices
                </h2>
              </div>
              {expandedDevices && (
                <div className="mt-4">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Role</th>
                        <th className="p-2">Users</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Admin</td>
                        <td className="p-2">1</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="p-2">Staff</td>
                        <td className="p-2">0</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">User</td>
                        <td className="p-2">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div> */}
          </div>
        )}
        {activeTab === "Billing" && (
          <div className=" bg-white w-full  pl-6 pt-6">
            <h2 className="text-2xl font-bold">Current Plan</h2>
            <div className="flex justify-between">
              <div className="mt-4">
                <h3 className="text-green-600 text-xl font-bold">Free</h3>
                <p className="text-black">FOR EXPLORATION</p>
                <p className="text-lg font-bold">
                  $0 <span className="text-lg">/month</span>
                </p>
              </div>
              <div className="mt-4 space-x-6 flex">
                <div className="w-24">
                  <div className="text-sm mb-3 ">
                    <span className="uppercase text-gray-500 ">Devices</span>
                  </div>
                  <div className="text-sm mb-3">
                    <span>1 of 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-3"></div>
                  </div>
                </div>
                <div className="w-24">
                  <div className="text-sm mb-3 ">
                    <span className="uppercase  text-gray-500">Users</span>
                  </div>
                  <div className="text-sm mb-3">
                    <span>1 of 1</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="w-24">
                  <div className="text-sm  text-gray-500 mb-3">
                    <span className="uppercase">Templates</span>
                  </div>
                  <div className="text-sm mb-3">
                    <span>1 of 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-3"></div>
                  </div>
                </div>
                <div className="w-24">
                  <div className="text-sm  text-gray-500 mb-3">
                    <span className="uppercase">Messages</span>
                  </div>
                  <div className="text-sm mb-3">
                    <span>1 of 30k</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full w-0"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between">
              <div>
                <h3 className="font-bold text-2xl">
                  Upgrade to unlock more features
                </h3>
                <div className="flex items-end space-x-2 my-4">
                  <span
                    className={`text-xs font-medium cursor-pointer ${
                      !isYearly ? "text-black" : "text-gray-500"
                    }`}
                    onClick={() => setIsYearly(false)}
                  >
                    MONTHLY
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isYearly}
                      onChange={toggleBilling}
                    />
                    <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out peer-checked:bg-[#66AA45]">
                      <div
                        className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                          isYearly ? "translate-x-3" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </label>
                  <span
                    className={`text-xs font-medium cursor-pointer ${
                      isYearly ? "text-black" : "text-gray-500"
                    }`}
                    onClick={() => setIsYearly(true)}
                  >
                    YEARLY
                  </span>
                  <span
                    className={`bg-[#EAF8E3] text-[#66AA68] px-2 py-1 rounded-md text-xs ${
                      isYearly
                        ? "bg-[#EAF8E3] text-[#6EAF4F]"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    Save 20%
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="flex items-center gap-2 px-4 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition text-sm font-semibold h-8"
                  onClick={() => setIsUpgradeOpen(true)}
                >
                  <FaBalanceScale className="w-5 h-5" /> Compare All Plans
                </button>
              </div>
            </div>
            {isUpgradeOpen && (
              <Upgrade onClose={() => setIsUpgradeOpen(false)} />
            )}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-100 rounded-lg">
                <h3 className="text-orange-600  font-black text-3xl">PRO</h3>
                <p className="text-gray-600 font-normal text-sm">
                  FOR PROFESSIONAL IOT DEVELOPMENT
                </p>
                <p className="text-2xl font-bold">
                  $299 <span className="text-sm font-normal">/month</span>
                </p>
                <div className="max-w-md mx-auto bg-gray-100 mt-14">
                  <div className="flex justify-start space-x-4 text-left">
                    {plans.map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                          selectedPlan === plan
                            ? "bg-black text-gray-200"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-left">
                    {selectedPlan} Devices and Users
                  </h2>
                  <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center">
                    <HiOutlineRocketLaunch className="mr-3" /> Upgrade to PRO
                    Now!
                  </button>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔ <span className="font-medium text-sm">Unlimited</span>{" "}
                      messages
                    </li>
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔{" "}
                      <span className="font-medium text-sm">50 templates</span>,
                      multiple devices per template
                    </li>
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔{" "}
                      <span className="font-medium text-sm">
                        200 datastreams
                      </span>{" "}
                      per template
                    </li>
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔{" "}
                      <span className="font-medium text-sm">Multi-tenant</span>{" "}
                      organization management
                    </li>
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔ <span className="font-medium text-sm">Editable</span>{" "}
                      permissions
                    </li>
                    <li
                      className="text-sm font-normal
"
                    >
                      ✔ <span className="font-medium text-sm">6 months</span> of
                      historical data storage
                    </li>
                  </ul>
                  <div className="justify-center flex">
                    <button
                      className="mt-4 px-5  bg-gray-300 text-gray-700 py-2 rounded-lg text-sm"
                      onClick={() => setIsUpgradeOpen(true)}
                    >
                      <PiDotsThreeOutline />
                    </button>
                  </div>
                </div>
                {isUpgradeOpen && (
                  <Upgrade onClose={() => setIsUpgradeOpen(false)} />
                )}
              </div>
              <div className="p-6 bg-black text-white rounded-lg">
                <h3 className="text-3xl font-black text-[#DDDDDD] mb-3">
                  Enterprise
                </h3>
                <p className="text-gray-200 font-normal text-sm mb-4">
                  WHITE-LABEL IOT SOLUTION
                </p>
                <div>
                  <img src="https://static-image.nyc3.cdn.digitaloceanspaces.com/general/billing/IMG_Enterprise_2x_tiny.webp" />
                </div>
                <button className="mt-4 w-full py-2 bg-[#E1E1E1] text-[#262957] rounded-lg font-bold">
                  Contact Sales to Upgrade
                </button>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔{" "}
                    <span className="font-medium text-sm">
                      Custom branded apps
                    </span>
                    published in Apple and Google stores
                  </li>
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔{" "}
                    <span className="font-medium text-sm">Private server</span>
                    on your domain
                  </li>
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔{" "}
                    <span className="font-medium text-sm">
                      Enterprise level
                    </span>
                    data security and SLA
                  </li>
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔{" "}
                    <span className="font-medium text-sm">
                      Reseller and integrator flows
                    </span>
                    for large scale deployments
                  </li>
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔ <span className="font-medium text-sm">App design</span>
                    services
                  </li>
                  <li
                    className="text-sm font-normal
"
                  >
                    ✔ <span className="font-medium text-sm">12 months</span>of
                    historical data storage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Tags" && (
          <div>
            <h2 className="font-bold text-2xl pt-6 pl-6">Tags</h2>
            <div className="pl-6">Tag management content...</div>
          </div>
        )}
        {activeTab === "Webhooks" && (
          <div>
            <h2 className="font-bold text-2xl pt-6 pl-6">Webhooks</h2>
            <div className="pl-6">Webhook settings content...</div>
          </div>
        )}
        {activeTab === "User actions log" && (
          <div>
            <h2 className="font-bold text-2xl pt-6 pl-6">User Actions Log</h2>
            <div className="pl-6">User activity log content...</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Setting;
