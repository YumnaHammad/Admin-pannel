import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import EventTable from "./EventTable";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const EventNotification = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [tags, setTags] = useState([]);
  const [eventList, setEventList] = useState([]);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("Info");
  const [eventLimit, setEventLimit] = useState(1);
  const [timeInterval, setTimeInterval] = useState("1 minute");
  const [showDevicePage, setShowDevicePage] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [pushNotification, setPushNotification] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const [exposeToAutomations, setExposeToAutomations] = useState(false);
  const [triggerCondition, setTriggerCondition] = useState("");
  const [actionToPerform, setActionToPerform] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("General");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("eventList")) || [];
    setEventList(storedEvents);
  }, []);

 

  const handleManageTags = () => {
    navigate("/Adminpanel/setting/tags");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = document.querySelector(".dropdown");
      if (dropdownElement && !dropdownElement.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCreate = () => {
    const newEvent = {
      name: eventName,
      description: description,
      type: eventType,
      limit: eventLimit,
      interval: timeInterval,
      devicePage: showDevicePage,
      homeScreen: showHomeScreen,
      tag: selectedTag,
      push: pushNotification,
      email: emailAlert,
      message: notificationMessage,
      exposedToAutomations: exposeToAutomations,
      triggerCondition: triggerCondition,
      actionToPerform: actionToPerform,
    };

    const updatedEventList = [...eventList, newEvent];
    setEventList(updatedEventList);

    // ✅ Save immediately to localStorage!
    localStorage.setItem("eventList", JSON.stringify(updatedEventList));

    // Reset form
    setEventName("");
    setDescription("");
    setEventType("Info");
    setEventLimit(1);
    setTimeInterval("1 minute");
    setShowDevicePage(false);
    setShowHomeScreen(false);
    setSelectedTag("");
    setPushNotification(false);
    setEmailAlert(false);
    setNotificationMessage("");
    setExposeToAutomations(false);
    setTriggerCondition("");
    setActionToPerform("");

    setShowForm(false);
  };



  const handleDelete = (indexToDelete) => {
    const updatedEventList = eventList.filter(
      (_, idx) => idx !== indexToDelete
    );
    setEventList(updatedEventList);

    // ✅ Save updated list to localStorage
    localStorage.setItem("eventList", JSON.stringify(updatedEventList));
  };

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
    setDropdownOpen(false);
  };

  return (
    <div className="px-6 bg-white rounded w-[900px]">
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Plus size={16} /> Add Event
        </button>
      </div>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded mb-4 w-full"
      />

      <EventTable
        data={eventList.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onDelete={handleDelete}
      />

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg w-full max-w-xl p-6">
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>

            {/* Tabs */}
            <div className="flex border-b mb-4">
              {[
                "General",
                "Notifications",
                "Settings",
                "Expose to Automations",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-green-500 text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "General" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Event Name</label>
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Enter event name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="w-full border px-3 py-2 rounded"
  placeholder="Enter event description"
/>
                </div>
             

<select
  value={eventType}
  onChange={(e) => setEventType(e.target.value)}
  className="w-full border px-3 py-2 rounded"
>
  <option>Info</option>
  <option>Warning</option>
  <option>Alert</option>
  <option>Custom</option>
</select>

              </div>
            )}

            {activeTab === "Notifications" && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="push" />
                  <label htmlFor="push" className="text-sm">
                    Enable push notification
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="email" />
                  <label htmlFor="email" className="text-sm">
                    Enable email alert
                  </label>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Notification Message
                  </label>
                  <textarea
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Enter message to send"
                  ></textarea>
                </div>
              </div>
            )}

            {activeTab === "Settings" && (
              <div className="space-y-5">
                <div className="flex items-center space-x-2">
                  <span>Every</span>
                  <input
                    type="number"
                    value={eventLimit}
                    onChange={(e) => setEventLimit(Number(e.target.value))}
                    className="border px-2 py-1 rounded w-16"
                  />
                  <span>message will trigger the event</span>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Event will be sent to user only once per
                  </label>
                  <select
                    value={timeInterval}
                    onChange={(e) => setTimeInterval(e.target.value)}
                    className="w-40 border px-2 py-1 rounded"
                  >
                    <option>1 minute</option>
                    <option>5 minutes</option>
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>3 hours</option>
                  </select>
                </div>

                <div>
                  <p className="font-semibold">
                    Show in Notifications & Events section:
                  </p>
                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Device page (app and console)
                      </span>
                      <button
                        onClick={() => setShowDevicePage(!showDevicePage)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
                          showDevicePage ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out ${
                            showDevicePage ? "translate-x-6" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Home screen (app only)
                      </span>
                      <button
                        onClick={() => setShowHomeScreen(!showHomeScreen)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
                          showHomeScreen ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out ${
                            showHomeScreen ? "translate-x-6" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative dropdown">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="border rounded px-3 py-1 text-sm flex items-center gap-2 w-48"
                  >
                    <Plus size={14} />
                    {selectedTag || "Select tag"}
                    <ChevronDown size={14} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow z-10 max-h-60 overflow-y-auto">
                     <ul className="py-1">
  {tags.length > 0 ? (
    tags.map((tag, index) => (
      <li
        key={index}
        onClick={() => handleSelectTag(tag)}
        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      >
        {tag}
      </li>
    ))
  ) : (
    <li className="px-4 py-2 text-sm text-gray-500">No tags available</li>
  )}
  <li
    className="border-t mt-1 px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 cursor-pointer"
    onClick={handleManageTags}
  >
    Manage tags...
  </li>
</ul>

                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Expose to Automations" && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="expose" />
                  <label htmlFor="expose" className="text-sm">
                    Expose this event to automations
                  </label>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Trigger Condition
                  </label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="e.g., temperature > 30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Action to Perform
                  </label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="e.g., Send alert or activate cooling"
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventNotification;
