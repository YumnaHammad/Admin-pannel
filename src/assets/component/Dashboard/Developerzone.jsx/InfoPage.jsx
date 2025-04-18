import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import {
  Home,
  Radar,
  List,
  Wifi,
  Settings,
  Bell,
  BookOpen,
  Menu,
  X,
  MoreHorizontal,
  Copy,
  Edit2,
  Check,
  FileCode,
  LayoutDashboard,
  Sun,
  Smartphone,
  Mic,
  Videotape,
} from "lucide-react";

import Upgrade from "../../Setting/Upgrade";
import { PiCloudArrowUpLight } from "react-icons/pi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Datastreams from "./Datastreams";
import AutomataTemplates from "./AutomataTemplates";
import WebDashboard from "./WebDashboard";
import Metadata from "./Metadata";
import Connection from "./Connection";
import EventNotification from "./EventNotification";
import UserGuide from "./UserGuide";
import MobileDashboard from "./MobileDashboard";
import VoiceAssistant from "./VoiceAssistant";
import Assets from "./Assets";

export default function InfoPage() {
  const [selected, setSelected] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true);

  const { tab } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const fields = location.state?.fields || [];
  const nameField = fields.find((field) => field.label === "Name");
  const templateName = nameField?.value || localStorage.getItem("templateName");
  const hardwareField = fields.find((f) => f.label === "Hardware")?.value;
  const connectionField = fields.find(
    (f) => f.label === "Connection Type"
  )?.value;
  const firmwareCode = `#define NEXYOS_TEMPLATE_ID \"TMPL6uKawextz\"\n#define NEXYOS_TEMPLATE_NAME \"${templateName}\"`;

  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem("templates");
    return saved ? JSON.parse(saved) : [];
  });
  const [showNewDeviceForm, setShowNewDeviceForm] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [devices, setDevices] = useState([]); // To show the created device
  
  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Datastreams", icon: Radar },
    { name: "Web Dashboard", icon: LayoutDashboard },
    { name: "Automation Templates", icon: Sun },
    { name: "Metadata", icon: List },
    { name: "Connection Lifecycle", icon: Wifi },
    { name: "Events & Notifications", icon: Bell },
    { name: "User Guides", icon: BookOpen },
    { name: "Mobile Dashboard", icon: Smartphone },
    { name: "Voice Assistants", icon: Mic },
    { name: "Assets", icon: Videotape },
  ];

  useEffect(() => {
    if (!tab)
      navigate(`/Adminpanel/developerzone/my-templates/info/home`, {
        replace: true,
      });
  }, [tab, navigate]);

  const handleTabClick = (tabName) => {
    const formattedTab = tabName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Adminpanel/developerzone/my-templates/info/${formattedTab}`);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(firmwareCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDelete = () => {
    const updated = templates.filter((t) => t.name !== templateName);
    localStorage.setItem("templates", JSON.stringify(updated));
    setTemplates(updated);
    navigate("/Adminpanel/developerzone/my-templates");
  };

  const handleDuplicate = () => {
    const current = templates.find((t) => t.name === templateName);
    if (!current) return;

    const copy = { ...current, name: `${current.name} Copy` };
    const updated = [...templates, copy];
    localStorage.setItem("templates", JSON.stringify(updated));
    setTemplates(updated);

    localStorage.setItem("templateName", copy.name);
    navigate("/Adminpanel/developerzone/my-templates/info/home", {
      state: {
        fields: [
          { label: "Name", value: copy.name },
          { label: "Hardware", value: copy.hardware },
          { label: "Connection Type", value: copy.connection },
          { label: "Description", value: copy.description },
        ],
      },
    });
  };

  const handleSave = () => {
    setSaved(true);
    setIsEditMode(false);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden rounded-[5px]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "w-17" : "w-59"
        } bg-white pb-2 ps-2 pe-2 border-e-[1px] pt-3 overflow-auto justify-between items-center`}
      >
        <div className="px-4 py-2">
          <div className="flex items-center justify-between sm:justify-start sm:gap-4">
            <Link
              className="text-gray-600 hover:text-gray-800"
              to="/Adminpanel/developerzone/my-templates/"
            >
              <X size={20} />
            </Link>
            <button
              onClick={() => setShowMenuBtn((prev) => !prev)}
              className="text-gray-600 hover:text-gray-800 sm:hidden"
            >
              Collapse
            </button>
          </div>
          {showMenuBtn && (
            <div className="sm:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-800"
              >
                <Menu size={20} />
              </button>
            </div>
          )}
          <div className="hidden sm:flex justify-end sm:mt-0">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-800"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        <h2
          className={`text-lg ms-2 mt-[-20px] font-bold uppercase ${
            isCollapsed ? "hidden" : ""
          }`}
        >
          {templateName || ".."}
        </h2>
        <ul className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 ${
                tab === item.name.toLowerCase().replace(/\s+/g, "-")
                  ? "bg-gray-100"
                  : ""
              }`}
              onClick={() => handleTabClick(item.name)}
            >
              <item.icon className="w-8 h-5 mr-3" />
              <span className={isCollapsed ? "hidden" : ""}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Header + Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FileCode /> {templateName || ".."}
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#00657c23] text-gray-700 p-2 rounded-lg"
            >
              <MoreHorizontal size={18} />
            </button>

            {isOpen && (
              <div className="absolute right-4 top-[113px] w-32 bg-gray-100 shadow-md rounded-lg z-10">
                {!isEditMode && (
                  <button
                    onClick={() => setIsEditMode(true)}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    <Edit2 size={16} className="mr-2" /> Edit
                  </button>
                )}
                <button
                  onClick={handleDuplicate}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  <Copy size={16} className="mr-2" /> Duplicate
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <Edit2 size={16} className="mr-2 rotate-45" /> Delete
                </button>
              </div>
            )}

            {isEditMode && (
              <>
                <Link to="/Adminpanel/developerzone/my-templates/">
                  <button className="bg-[#00657c23] text-gray-700 font-semibold px-4 py-2 rounded-lg">
                    Cancel
                  </button>
                </Link>
                <button
                  onClick={handleSave}
                  className="bg-[#00667C] text-white font-semibold px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>

        {saved && (
          <div className="fixed top-5 right-5 bg-green-100 text-green-800 px-4 py-2 rounded shadow-lg z-50">
            ✅ Changes Saved!
          </div>
        )}

        {tab === "home" && (
          <>
            <h2 className="text-2xl font-bold mt-5 px-4">Home</h2>
            <div className="flex flex-1 p-6 justify-between">
              <div className="flex-1">
                <p className="mt-12 text-[20px] mb-5 font-semibold">
                  What’s next?
                </p>
                <ul className="mt-2 space-y-3">
                  {[
                    {
                      label: "Configure template",
                      action: () => setShowSettings(true),
                    },
                    {
                      label: "Set Up Datastreams",
                      action: () =>
                        navigate(
                          "/Adminpanel/developerzone/my-templates/info/datastreams"
                        ),
                    },
                    {
                      label: "Set up the Web Dashboard",
                      action: () =>
                        navigate(
                          "/Adminpanel/developerzone/my-templates/info/web-dashboard"
                        ),
                    },
                    // {
                    //   label: "Add first Device",
                    //   action: () =>
                    //     alert("You can implement device setup later."),
                    // },
                    { label: "Add first Device", action: () => setShowNewDeviceForm(true) },

                  ].map((task) => (
                    <li
                      key={task.label}
                      className="flex items-center space-x-2"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span
                        className="text-blue-600 cursor-pointer text-[16px]"
                        onClick={task.action}
                      >
                        {task.label}
                      </span>
                    </li>
                  ))}
                </ul>
                {showNewDeviceForm && (
  <div className="p-4 border rounded-md bg-white shadow mt-4 w-full max-w-md">
    <h2 className="text-xl font-semibold mb-2">New Device</h2>
    <input
      type="text"
      placeholder="New Device"
      value={newDeviceName}
      onChange={(e) => setNewDeviceName(e.target.value)}
      className="border p-2 w-full rounded mb-3"
      maxLength={50}
    />
    <div className="flex justify-end space-x-2">
      <button
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => setShowNewDeviceForm(false)}
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => {
          if (newDeviceName.trim() === "") return;
          setDevices([...devices, newDeviceName]);
          setShowNewDeviceForm(false);
          setNewDeviceName("");
        }}
      >
        Create
      </button>
    </div>
  </div>
)}
{devices.length > 0 && (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Devices</h3>
    <ul className="mt-2 border rounded p-2 bg-gray-50">
      {devices.map((device, index) => (
        <li key={index} className="py-1 px-2 rounded bg-white shadow mb-2">
          {device}
        </li>
      ))}
    </ul>
  </div>
)}

              </div>
              <div className="border-s-[1px] px-4 w-[370px] overflow-auto rounded-lg mt-12">
                <h3 className="font-semibold text-[22px] pt-3 flex items-center space-x-2">
                  <Settings
                    size={20}
                    className="text-gray-600 cursor-pointer"
                    onClick={() => setShowSettings(true)}
                  />
                  <span>Template settings</span>
                </h3>
                <p className="text-sm text-gray-600 pb-3">
                  Hardware: {hardwareField}, Connection: {connectionField}
                </p>
                <h3 className="mt-4 font-semibold text-[22px] flex items-center space-x-2">
                  <button onClick={handleCopy} className="cursor-pointer">
                    {copied ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Copy size={20} className="text-gray-600" />
                    )}
                  </button>
                  <span>Firmware configuration</span>
                </h3>
                <p className="text-sm text-gray-600 pb-3">
                  Template ID and Name should be declared at the top of the
                  firmware code.
                </p>
                <div className="bg-gray-900 text-white p-3 mt-2 rounded-lg text-sm relative">
                  <pre>{firmwareCode}</pre>
                </div>
              </div>
            </div>
            {showSettings && (
              <div className="fixed top-0 z-[999] right-0 h-full w-[500px] bg-white shadow-lg p-6 transition-transform transform translate-x-0 overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Settings</h2>
                <p className="text-gray-600 text-sm">
                  TEMPLATE IMAGE (OPTIONAL)
                </p>
                <div className="flex justify-end">
                  <div className=" m-2 text-center border ">
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
                    <p className="text-gray-500 text-base mt-2 text-left p-2">
                      Please clear the cache after the upload to see the change
                      right away.
                    </p>
                  </div>
                </div>
                {isUpgradeOpen && (
                  <Upgrade onClose={() => setIsUpgradeOpen(false)} />
                )}

                {/* Name Input */}
                <div className="mt-4">
                  <label className="text-sm font-semibold">NAME</label>
                  <input
                    type="text"
                    className="border w-full p-2 rounded-lg mt-1"
                    placeholder="Enter name"
                  />
                </div>

                {/* Hardware & Connection Type */}
                <div className="mt-4 flex justify-between">
                  <div>
                    <label className="text-sm font-semibold">HARDWARE</label>
                    <select className="border p-2 rounded-lg mt-1">
                      <option>ESP32</option>
                      <option>ESP8266</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold">
                      CONNECTION TYPE
                    </label>
                    <select className="border p-2 rounded-lg mt-1">
                      <option>WiFi</option>
                      <option>Ethernet</option>
                    </select>
                  </div>
                </div>

                {/* Template Description */}
                <div className="mt-4">
                  <label className="text-sm font-semibold">
                    TEMPLATE DESCRIPTION (OPTIONAL)
                  </label>
                  <textarea
                    className="border w-full p-2 rounded-lg mt-1"
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <div className="mt-2">
                  <label className="text-sm font-semibold">
                    Hotspot Prefix
                  </label>
                  <input
                    type="text"
                    className="border w-full p-2 rounded-lg mt-1"
                    placeholder="Hotspot Prefix"
                  />
                </div>
                {/* Close Button */}
                <button
                  className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg"
                  onClick={() => setShowSettings(false)}
                >
                  Close
                </button>
              </div>
            )}
          </>
        )}

        {/* Other Tabs */}
        {tab === "datastreams" && (
          <>
            <h2 className="font-bold text-2xl m-5">Data Streams</h2>
            <Datastreams />
          </>
        )}
        {tab === "web-dashboard" && (
          <>
            <h2 className="font-bold text-2xl m-5">Web Dashboard </h2>
            <WebDashboard />
          </>
        )}
        {tab === "automation-templates" && (
          <>
            <h2 className="font-bold text-2xl m-5">Automata Templates</h2>
            <AutomataTemplates />
          </>
        )}
        {tab === "metadata" && (
          <>
            <h2 className="font-bold text-2xl m-5">Metadata</h2>
            <Metadata />
          </>
        )}
        {tab === "connection-lifecycle" && (
          <>
            <h2 className="font-bold text-2xl m-5">Connection Lifecycle</h2>
            <Connection />
          </>
        )}
        {tab === "events-&-notifications" && (
          <>
            <h2 className="font-bold text-2xl m-5">Event Notification</h2>
            <EventNotification />
          </>
        )}
        {tab === "user-guides" && (
          <>
            <h2 className="font-bold text-2xl m-5">User Guide</h2>
            <UserGuide />
          </>
        )}
        {tab === "mobile-dashboard" && (
          <>
            <h2 className="font-bold text-2xl m-5">Mobile Dashboard</h2>
            <MobileDashboard />
          </>
        )}
        {tab === "voice-assistants" && (
          <>
            <h2 className="font-bold text-2xl m-5">Voice Assistant</h2>
            <VoiceAssistant />
          </>
        )}
        {tab === "assets" && (
          <>
            <h2 className="font-bold text-2xl m-5">Assets</h2>
            <Assets />
          </>
        )}
      </div>
    </div>
  );
}
