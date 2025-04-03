import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Home, Database, Layout, Settings, Bell, BookOpen, Link } from "lucide-react";

export default function InfoPage() {
  const [selected, setSelected] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);  // State for sidebar collapse
  const { tab } = useParams();  // Get the current tab from the URL
  const location = useLocation();  // Access passed state from the previous page
  const navigate = useNavigate();
  const { name, description, hardware, connection } = location.state || {};  // Destructure the template data

  const menuItems = [
    { name: "Home", icon: Home  },
    { name: "Datastreams", icon: Database },
    { name: "Web Dashboard", icon: Layout },
    { name: "Automation Templates", icon: Settings },
    { name: "Metadata", icon: Link },
    { name: "Connection Lifecycle", icon: Settings },
    { name: "Events & Notifications", icon: Bell },
    { name: "User Guides", icon: BookOpen },
  ];

  // Default to the first menu item if tab is not specified
  useEffect(() => {
    if (!tab) navigate(`/Adminpanel/developerzone/my-templates/info/home`, { replace: true });
  }, [tab, navigate]);

  const handleTabClick = (tabName) => {
    const formattedTab = tabName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Adminpanel/developerzone/my-templates/info/${formattedTab}`);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);  // Toggle the collapse state
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'w-17' : 'w-59'} bg-white shadow-md pb-2 ps-2 pe-2 border-e-[1px] pt-3 overflow-auto justify-between items-center`}>
        <div className="flex justify-between items-center">
          <h2 className={`text-lg font-bold ps-2 ${isCollapsed ? 'hidden' : ''}`}>Blynk</h2> 
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800 justify-between items-center">
            {isCollapsed ? '>' : '<'} {/* Collapse Button */}
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 ${tab === item.name.toLowerCase().replace(/\s+/g, "-") ? "bg-gray-100" : ""}`}
              onClick={() => handleTabClick(item.name)}
            >
              <item.icon className="w-8 h-5 mr-3" />
              <span className={isCollapsed ? 'hidden' : ''}>{item.name}</span> {/* Hide name if collapsed */}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto bg-white">
        {tab === "home" && (
          <>
          <div className="flex">
            <h1 className="text-2xl font-bold">Template Details</h1>
            <div className="mt-6">
              <p className="text-lg font-semibold">Template Name: <span className="font-normal">{name}</span></p>
              <p className="text-lg font-semibold mt-4">Description: <span className="font-normal">{description}</span></p>
              <p className="text-lg font-semibold mt-4">Hardware: <span className="font-normal">{hardware}</span></p>
              <p className="text-lg font-semibold mt-4">Connection: <span className="font-normal">{connection}</span></p>
            </div>
            <p className="mt-4 font-semibold">What’s next?</p>
            <ul className="mt-2 space-y-2">
              {[
                "Configure template",
                "Set Up Datastreams",
                "Set up the Web Dashboard",
                "Add first Device",
              ].map((task) => (
                <li key={task} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-blue-600 cursor-pointer">{task}</span>
                </li>
              ))}
            </ul>

              {/* Right Panel */}
      <div className="w-72 bg-white shadow-md p-4 overflow-auto">
        <h3 className="font-semibold">Template settings</h3>
        <p className="text-sm text-gray-600">Hardware: {hardware}, Connection: {connection}</p>

        <h3 className="mt-4 font-semibold">Firmware configuration</h3>
        <p className="text-sm text-gray-600">Template ID and Name should be declared at the top of the firmware code.</p>

        <div className="bg-gray-900 text-white p-3 mt-2 rounded-lg text-sm">
          <pre>
            #define BLYNK_TEMPLATE_ID "TMPL6uKawextz"<br />
            #define BLYNK_TEMPLATE_NAME "{name}"
          </pre>
        </div>
      </div>
      </div>
          </>
        )}

        {tab === "datastreams" && <h2 className="text-2xl font-bold">Datastreams</h2>}
        {tab === "web-dashboard" && <h2 className="text-2xl font-bold">Web Dashboard</h2>}
        {tab === "automation-templates" && <h2 className="text-2xl font-bold">Automation Templates</h2>}
        {tab === "metadata" && <h2 className="text-2xl font-bold">Metadata</h2>}
        {tab === "connection-lifecycle" && <h2 className="text-2xl font-bold">Connection Lifecycle</h2>}
        {tab === "events-notifications" && <h2 className="text-2xl font-bold">Events & Notifications</h2>}
        {tab === "user-guides" && <h2 className="text-2xl font-bold">User Guides</h2>}
      </div>

    
    </div>
  );
}
