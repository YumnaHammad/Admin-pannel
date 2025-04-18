import React, { useState } from "react";
import "./Connection.css";
import { Info, Wifi, Clock, Power, Plus, ChevronDown } from "lucide-react";

const Connection = () => {
  const [onlineName, setOnlineName] = useState("Online");
  const [offlineName, setOfflineName] = useState("Offline");
  const [waitTime, setWaitTime] = useState(1);
  const [waitUnit, setWaitUnit] = useState("Minutes");
  const [activeTabOnline, setActiveTabOnline] = useState("General");
  const [activeTabOffline, setActiveTabOffline] = useState("General");
  const [pushEnabled, setPushEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [showInactiveCard, setShowInactiveCard] = useState(true);
  const [customStatuses, setCustomStatuses] = useState([]);
  const [inactiveName, setInactiveName] = useState("InActive");

  const handleAddCustomStatus = () => {
    if (customStatuses.length < 2) {
      const newStatus = {
        id: `Custom${customStatuses.length + 1}`,
        name: "",
      };
      setCustomStatuses([...customStatuses, newStatus]);
    }
  };

  const StatusCard = ({
    status,
    dotClass,
    activeTab,
    setActiveTab,
    name,
    setName,
    logReports,
    setLogReports,
    eventLimit,
    setEventLimit,
    timeInterval,
    setTimeInterval,
    showDelete,
    onDelete,
  }) => {
    return (
      <>
        <div className="status-card mt-[40px] shadow-xl ring-1 ring-gray-200">
          <div className="status-header">
            <span className={`dot ${dotClass}`}></span>
            <h3>{status}</h3>
          </div>

          <div className="tabs">
            {["General", "Notifications", "Settings"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="status-header justify-between flex items-center">
            <div className="flex items-center gap-2">
              <span className={`dot ${dotClass}`}></span>
              <h3>{status}</h3>
            </div>
            {showDelete && (
              <button
                onClick={onDelete}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>

          {/* General Tab */}
          {activeTab === "General" && (
            <div className="tab-content">
              <label className="label">STATUS NAME</label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder={`Enter name for ${status}`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                />

                <Wifi className="icon" />
                <div className={`status-color ${dotClass}`}></div>
              </div>

              {/* Extra input only for custom statuses */}
              {status !== "Online" && status !== "Offline" && (
                <div className="mt-4">
                  <label className="label">Status description</label>
                  <input
                    type="text"
                    placeholder="Enter description"
                    className="input w-full"
                  />
                </div>
              )}

              <div className="toggle-group">
                <label>
                  <input
                    type="checkbox"
                    checked={logReports}
                    onChange={(e) => setLogReports(e.target.checked)}
                  />{" "}
                  Log when device reports any data
                </label>
                <p className="hint">
                  Especially useful for devices that periodically send data but
                  aren’t continuously connected to Blynk Cloud.
                </p>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "Notifications" && (
            <div className="space-y-4">
              {/* Push Notification Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable push notification</span>
                <button
                  onClick={() => setPushEnabled(!pushEnabled)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    pushEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      pushEnabled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Email Alert Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable email alert</span>
                <button
                  onClick={() => setEmailEnabled(!emailEnabled)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    emailEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      emailEnabled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Notification Message Textarea */}
              <div>
                <label className="text-sm font-medium">
                  Notification Message
                </label>
                <textarea
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter message to send"
                ></textarea>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "Settings" && (
            <div className="space-y-5">
              {/* Push Notification Toggle */}
              <div className="flex items-center">
                <button
                  onClick={() => setPushEnabled(!pushEnabled)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    pushEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      pushEnabled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-sm ms-4">
                  Show event in Notifications section of mobile app
                </span>
              </div>

              {/* Email Alert Toggle */}
              <div className="flex items-center">
              <button
                  onClick={() => setEmailEnabled(!emailEnabled)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    emailEnabled ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      emailEnabled ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-sm ms-4">
                  Show on Device Timeline in web Console and mobile app
                </span>
              </div>

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
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="connection-container">

      <p className="description">
        Set up how status of device changes based on the time elapsed from last
        connection to server or latest data transfer.
      </p>

      <div className="alert-box">
        <Info size={18} className="info-icon" />
        <p>
          Please be aware that there might be a delay between the moment a
          device loses its connection and when the server recognizes it as
          disconnected.{" "}
          <a href="#" className="link">
            How it works?
          </a>
        </p>
      </div>

      {/* ONLINE STATUS */}
      <StatusCard
        status="Online"
        dotClass="online"
        activeTab={activeTabOnline}
        setActiveTab={setActiveTabOnline}
        name={onlineName}
        setName={setOnlineName}
      />

      <div className="px-10">
        <div className="wait-time">
          <Clock className="icon" />
          <label>Wait</label>
          <input
            type="number"
            value={waitTime}
            onChange={(e) => setWaitTime(Number(e.target.value))}
            className="input small"
          />
          <select
            value={waitUnit}
            onChange={(e) => setWaitUnit(e.target.value)}
            className="input select"
          >
            <option value="Seconds">Seconds</option>
            <option value="Minutes">Minutes</option>
            <option value="Hours">Hours</option>
          </select>
        </div>

        <div className="wait-group">
          <Power className="icon" />
          <span>Disconnected from server</span>
        </div>
      </div>

      <StatusCard
        status="Offline"
        dotClass="offline"
        activeTab={activeTabOffline}
        setActiveTab={setActiveTabOffline}
        name={offlineName}
        setName={setOfflineName}
        // ...other props
      />

      {showInactiveCard && (
        <>
          <div className="px-10">
            <div className="wait-time">
              <Clock className="icon" />
              <label>Wait</label>
              <input
                type="number"
                value={waitTime}
                onChange={(e) => setWaitTime(Number(e.target.value))}
                className="input small"
              />
              <select
                value={waitUnit}
                onChange={(e) => setWaitUnit(e.target.value)}
                className="input select"
              >
                <option value="Seconds">Seconds</option>
                <option value="Minutes">Minutes</option>
                <option value="Hours">Hours</option>
              </select>
            </div>

            <div className="wait-group">
              <Power className="icon" />
              <span>Disconnected from server</span>
            </div>
          </div>

          <StatusCard
            status="InActive"
            dotClass="offline"
            activeTab={activeTabOffline}
            setActiveTab={setActiveTabOffline}
            name={inactiveName}
            setName={setInactiveName}
            showDelete={true}
            onDelete={() => setShowInactiveCard(false)}
          />
        </>
      )}

      {customStatuses.map((statusName, index) => (
        <StatusCard
          key={statusName}
          status={statusName}
          dotClass="offline"
          activeTab={activeTabOffline}
          setActiveTab={setActiveTabOffline}
          name={statusName}
          setName={() => {}}
          showDelete={true}
          onDelete={() =>
            setCustomStatuses((prev) =>
              prev.filter((name) => name !== statusName)
            )
          }
        />
      ))}

      {customStatuses.length < 2 && (
        <div className="px-10 mt-6">
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1  font-medium hover:underline"
            onClick={() => {
              if (customStatuses.length < 2) {
                const newStatus = `Custom${customStatuses.length + 1}`;
                setCustomStatuses([...customStatuses, newStatus]);
              }
            }}
          >
            <Plus size={18} />
            Add Status
          </button>
        </div>
      )}
    </div>
  );
};

export default Connection;
