import { useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import { UsersRound } from "lucide-react";
import { LiaUserLockSolid } from "react-icons/lia";
import { PiCreditCard } from "react-icons/pi";
import { LiaTagSolid } from "react-icons/lia";
import { RiWebhookFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Setting/Setting.css";
import { ChevronDown } from "lucide-react";
import { PiCloudArrowUpLight } from "react-icons/pi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Upgrade from "./Upgrade";

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

  return (
    <div className="flex gap-6 setting-menu w-full bg-white">
      <aside className="w-2/4 border-r pr-1 pt-5 pl-2 ">
        <div className="uppercase text-gray-600 text-sm mb-5 ml-5">
          Organization Settings
        </div>
        <ul className="space-y-1">
        {[
            { name: "General", icon: <CgOrganisation className="mr-3" /> },
            { name: "Users", icon: <UsersRound size={20} className="mr-3" /> },
            { name: "Roles and permissions", icon: <LiaUserLockSolid size={20} className="mr-3" /> },
            { name: "Billing", icon: <PiCreditCard className="mr-3" />, extra: <span className="text-xs bg-[#EBEBEC] px-4 font-semibold py-1 rounded-2xl mr-5 text-gray-600">FREE</span> },
            { name: "Tags", icon: <LiaTagSolid size={20} className="mr-3" /> },
            { name: "Webhooks", icon: <RiWebhookFill size={20} className="mr-3" /> },
            { name: "User actions log", icon: <HiOutlineUser size={20} className="mr-3" /> },
          ].map((tab) => (
            <li
              key={tab.name}
              className={`flex justify-between items-center py-3 rounded-md pl-3 cursor-pointer ${activeTab === tab.name ? "bg-gray-200 text-green-700 font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-black"}`}
              onClick={() => handleTabClick(tab.name)}
            >
              <div className="flex items-center">{tab.icon} {tab.name}</div>
              {tab.extra}
            </li>
          ))}
        </ul>
      </aside>
      <main  className="pr-6 w-full">
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
              onChange={(e) => handleChange(setDescription, e.target.value)}
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
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            <p className="text-xs text-gray-600 mb-2">
              By entering my phone number, I consent to receive text updates
              from Blynk.Console regarding my devices. Data rates may apply. See
              our regarding my devices. Data rates may apply. See our and Terms
              and Conditions.
            </p>
          </div>
          <div className="relative w-80">
            <label className="text-gray-600 text-xs uppercase">Time zone</label>
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
                <p className="text-black font-normal mt-2 text-base" >
                  Upgrade to upload organization logo
                </p>
                <button className="mt-4 relative overflow-hidden text-white px-8 py-2 rounded-full flex items-center text-sm font-medium transition-transform duration-200 ease-out group"onClick={() => setIsUpgradeOpen(true)}
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
                Please clear the cache after the upload to see the change right
                away.
              </p>
            </div>
          </div>
        </div>
        </div>
        {isUpgradeOpen && <Upgrade onClose={() => setIsUpgradeOpen(false)} />} 
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
    <p className='mb-3 text-base font-normal'>1 User</p>
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
          <div>
            <h2 className="font-bold text-2xl pt-6 pl-6">Roles and Permissions</h2>
            <div className="pl-6">Roles and permissions content...</div>
          </div>
        )}
        {activeTab === "Billing" && (
          <div>
            <h2 className="font-bold text-2xl pt-6 pl-6">Billing</h2>
            <div className="pl-6">Billing content...</div>
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