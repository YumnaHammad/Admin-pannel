import { useState } from "react";

import { CgOrganisation } from "react-icons/cg";
import { UsersRound } from "lucide-react";
import { LiaUserLockSolid, LiaTagSolid } from "react-icons/lia";
import { PiCreditCard } from "react-icons/pi";
import { RiWebhookFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import "react-phone-input-2/lib/style.css";
import Rolesandpermission from "./Tabs/Rolesandpermission/Rolesandpermission"
import Billing from "../Setting/Tabs/Billing";
import Users from "./Tabs/Users";
import General from "./Tabs/General";

function Setting() {

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="flex gap-6 h-screen setting-menu w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <aside className="w-80 border-r pr-1 pt-5 pl-2 ">
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
              className={`flex justify-between items-center py-3 rounded-md pl-3 cursor-pointer dark:bg-gray-900 text-gray-700 dark:text-gray-300 ${
                activeTab === tab.name
                  ? "bg-gray-200 text-[#00667C] font-semibold"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              <div className="flex items-center dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                {tab.icon} {tab.name}
              </div>
              {tab.extra}
            </li>
          ))}
        </ul>
      </aside>
      <main className="pr-6 w-full">
        {activeTab === "General" && (<><General/></>)}
        {activeTab === "Users" && <Users setActiveTab={setActiveTab} />}
        {activeTab === "Roles and permissions" && (<><Rolesandpermission/></>)}
        {activeTab === "Billing" && (<><Billing/></>)}
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
