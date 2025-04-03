import { useEffect , useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CgOrganisation } from "react-icons/cg";
import { UsersRound } from "lucide-react";
import { LiaUserLockSolid, LiaTagSolid } from "react-icons/lia";
import { PiCreditCard } from "react-icons/pi";
import { RiWebhookFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import "react-phone-input-2/lib/style.css";
import Billing from "../Setting/Tabs/Billing/Billing";
import Users from "./Tabs/Users/Users";
import General from "./Tabs/General/General";
import Tags from "./Tabs/Tags/Tags";
import Webhooks from "./Tabs/Webhook/Webhooks";
import Rolesandpermission from "./Tabs/Rolesandpermission/Rolesandpermission";
import UserAction from "./Tabs/UsersAction/UserAction";

function Setting() {
  const { tab } = useParams(); // Get tab from URL
  const navigate = useNavigate();

  // Default to "general" if tab is not defined
  useEffect(() => {
    if (!tab) {
      navigate("/Adminpanel/setting/general", { replace: true });
      setActiveTab("General");  
    } else {
      const formattedTab = tab
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      setActiveTab(formattedTab);
    }
  }, [tab, navigate]);
  
  
  const [activeTab, setActiveTab] = useState("General");
  // Function to update URL on tab click
  const handleTabClick = (tabName) => {
    const formattedTab = tabName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Adminpanel/setting/${formattedTab}`);
    setActiveTab(tabName); // Update with readable name
  };
  
  return (
    <div className="flex gap-6 h-screen setting-menu w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <aside className="w-80 border-r pr-1 pt-5 pl-2">
        <div className="uppercase text-gray-600 text-sm mb-5 ml-5">
          Organization Settings
        </div>
        <ul className="space-y-1">
          {[
            { name: "General", icon: <CgOrganisation className="mr-3" /> },
            { name: "Users", icon: <UsersRound size={20} className="mr-3" /> },
            { name: "Roles and permissions", icon: <LiaUserLockSolid size={20} className="mr-3" /> },
            { name: "Billing", icon: <PiCreditCard className="mr-3" />, extra: (
                <span className="text-xs bg-[#EBEBEC] px-4 font-semibold py-1 rounded-2xl mr-5 text-gray-600">
                  FREE
                </span>
              ),
            },
            { name: "Tags", icon: <LiaTagSolid size={20} className="mr-3" /> },
            { name: "Webhooks", icon: <RiWebhookFill size={20} className="mr-3" /> },
            { name: "User actions log", icon: <HiOutlineUser size={20} className="mr-3" /> },
          ].map((tabItem) => (
            <li
              key={tabItem.name}
              className={`flex justify-between items-center py-3 rounded-md pl-3 cursor-pointer ${
                tab === tabItem.name.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-gray-200 text-[#00667C] font-semibold"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => handleTabClick(tabItem.name)}
            >
              <div className="flex items-center">{tabItem.icon} {tabItem.name}</div>
              {tabItem.extra}
            </li>
          ))}
        </ul>
      </aside>

      <main className="pr-6 w-full">
  {activeTab === "General" && <General />}
  {activeTab === "Users" && <Users setActiveTab={setActiveTab} />}
  {activeTab.toLowerCase() === "roles and permissions".toLowerCase() && <Rolesandpermission />}

  {activeTab === "Billing" && <Billing />}
  {activeTab === "Tags" && <Tags />}
  {activeTab === "Webhooks" && <Webhooks />}
  {activeTab === "User Actions Log" && (<UserAction/>)}
</main>

    </div>
  );
}

export default Setting;
