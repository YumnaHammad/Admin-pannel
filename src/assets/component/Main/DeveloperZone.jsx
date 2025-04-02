import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FileCode, // My Templates
  Layers, // Blueprints
  KeyRound, // Static Tokens
  Settings2, // Rule Engine
  PlugZap, // OAuth 2.0
  Network, // Webhooks
  Database,
  Send // Integrations
} from "lucide-react";

function DeveloperZone() {
  const { tab } = useParams();
  const navigate = useNavigate();

  // Default to "my-templates" if no tab is specified
  useEffect(() => {
    if (!tab) navigate("/Adminpanel/developerzone/my-templates", { replace: true });
  }, [tab, navigate]);

  const handleTabClick = (tabName) => {
    const formattedTab = tabName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Adminpanel/developerzone/${formattedTab}`);
  };

  return (
    <div className="flex gap-6 h-screen w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Sidebar */}
      <aside className="w-80 border-r pr-1 pt-5 pl-2">
        <div className="uppercase text-gray-600 text-sm mb-5 ml-5">
          Developer Zone
        </div>
        <ul className="space-y-1">
          {[
            { name: "My Templates", icon: <FileCode size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Blueprints", icon: <Layers size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Blynk.Air (OTA)", icon: <Send size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Static Tokens", icon: <KeyRound size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Rule Engine", icon: <Settings2 size={17} className="mr-3 text-[#00667C]" /> },
            { name: "OAuth 2.0", icon: <PlugZap size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Webhooks", icon: <Network size={17} className="mr-3 text-[#00667C]" /> },
            { name: "Integrations", icon: <Database size={17} className="mr-3 text-[#00667C]" /> },
          ].map((tabItem) => (
            <li
              key={tabItem.name}
              className={`flex items-center py-3 rounded-md pl-3 cursor-pointer ${
                tab === tabItem.name.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-gray-200 text-[#00667C] font-semibold"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
              onClick={() => handleTabClick(tabItem.name)}
            >
              <div className="flex items-center">{tabItem.icon} {tabItem.name}</div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="pr-6 w-full">
        {tab === "my-templates" && <h2 className="text-2xl font-bold pt-6">My Templates</h2>}
        {tab === "blueprints" && <h2 className="text-2xl font-bold pt-6">Blueprints</h2>}
        {tab === "Blynk.Air (OTA)" && <h2 className="text-2xl font-bold pt-6">Blynk.Air (OTA)</h2>}
        {tab === "static-tokens" && <h2 className="text-2xl font-bold pt-6">Static Tokens</h2>}
        {tab === "rule-engine" && <h2 className="text-2xl font-bold pt-6">Rule Engine</h2>}
        {tab === "oauth-2-0" && <h2 className="text-2xl font-bold pt-6">OAuth 2.0</h2>}
        {tab === "webhooks" && <h2 className="text-2xl font-bold pt-6">Webhooks</h2>}
        {tab === "integrations" && <h2 className="text-2xl font-bold pt-6">Integrations</h2>}
      </main>
    </div>
  );
}

export default DeveloperZone;
