import { useState } from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";
export default function Create_Webhook({ onClose }) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isError, setIsError] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [webhookURL, setWebhookURL] = useState("");
  const [requestType, setRequestType] = useState("GET");
  const [webhookName, setWebhookName] = useState("");
  const [failureReceivers, setFailureReceivers] = useState(["Yumna"]);
  const [failureThreshold, setFailureThreshold] = useState(10);
  const handleChange = (e) => {
    setSelectedEvent(e.target.value);
    setIsError(false); // Reset error state when user selects a valid option
  };

  const handleBlur = () => {
    if (!selectedEvent) {
      setIsError(true);
    }
  };
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[70%] h-[500px] overflow-y-scroll ">
        <div className="px-6 pt-6">
        <h2 className="text-2xl text-gray-900 font-semibold">Create New Webhook</h2>
        
        <div className="mt-4">
          <label className="text-gray-700 font-normal text-xs">WEBHOOK TRIGGER EVENT</label>
          <select 
            className={`w-full mt-2 p-2 ring-1 rounded-lg focus:ring-1 ${
              isError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-200 "
            }`}  
            value={selectedEvent} 
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option className="font-normal text-xs text-gray-200" value="">Choose event...</option>
            <option className="font-normal text-xs "  value="event1">Device Sends Data To Datastream</option>
            <option className="font-normal text-xs "  value="event2">Template Datastream update</option>
            <option className="font-normal text-xs "  value="event3">Device event</option>
            <option className="font-normal text-xs "  value="event4">Template event</option>
            <option className="font-normal text-xs "  value="event5">Device deleted</option>
          </select>
          <p className={`mt-1 text-sm font-normal ${isError ? "text-red-500" : "text-gray-500"}`}>
          {isError ? "Select a system event that will trigger webhook." : "Select a system event that will trigger webhook."}</p>
        </div>
        </div>
        {selectedEvent && (
      <div className="px-6 pt-3 mid-section">
      <div className=" grid grid-cols-2 gap-4 w-full">
          <div className="Template uppercase font-normal w-full text-xs text-gray-700">Webhook name
            <label className="text-gray-700 font-semibold text-sm"></label>
            <input 
            type="text" 
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
            value={webhookName} 
            placeholder=""
          />
            {!selectedTemplate && <p className="text-red-500 text-sm">Field is required</p>}
          </div>
         </div>
      <div className="mt-4 WebhookUrl">
          <label className="text-gray-700 font-semibold text-sm">WEBHOOK URL</label>
          <input 
            type="text" 
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
            value={webhookURL} 
            onChange={(e) => setWebhookURL(e.target.value)}
            placeholder="URL"
          />
          {!webhookURL && <p className="text-red-500 text-sm">Field is required</p>}
        </div>

        <div className="mt-4 Request">
          <label className="text-gray-700 font-semibold text-sm">REQUEST TYPE</label>
          <div className="flex gap-2 mt-2">
            {["GET", "POST", "PUT", "DELETE"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 border rounded-lg ${requestType === type ? "bg-gray-300" : "bg-gray-100"}`}
                onClick={() => setRequestType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 QueryParameters">
          <label className="text-gray-700 font-semibold text-sm">QUERY PARAMETERS (OPTIONAL)</label>
          <div className="flex gap-2 mt-2">
            <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Key" />
            <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Value" />
          </div>
        </div>
        <div className="mt-4 AuthorizedMethod">
          <label className="text-gray-700 font-semibold text-sm">AUTHORIZATION METHOD (OPTIONAL)</label>
          <div className="flex gap-2 mt-2">
            {["Basic Auth", "OAuth 2.0", "None"].map((authType) => (
              <button
                key={authType}
                className="px-4 py-2 border rounded-lg bg-gray-100"
              >
                {authType}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 HTTO-header">
          <label className="text-gray-700 font-semibold text-sm">HTTP HEADERS (OPTIONAL)</label>
          <div className="flex gap-2 mt-2">
            <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Key" />
            <input type="text" className="w-1/2 p-2 border border-gray-300 rounded-lg" placeholder="Value" />
          </div>
        </div>
        <div className="mt-4 Failure">
          <label className="text-gray-700 font-semibold text-sm">FAILURE RECEIVERS (OPTIONAL)</label>
          <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" value={failureReceivers.join(", ")} readOnly />
        </div>
        <div className="mt-4 Email">
          <label className="text-gray-700 font-semibold text-sm">SEND FAILURE EMAIL AFTER X FAILURE/S</label>
          <input type="number" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" value={failureThreshold} onChange={(e) => setFailureThreshold(e.target.value)} />
        </div>
      </div> )}  
        <div className={`flex justify-between sticky bg-gray-100 p-6 footer bottom-0 ${selectedEvent?`mt-0`:`mt-60`}`}>
          <button className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-lg flex items-center gap-2 hover:bg-green-200">
          <FaScrewdriverWrench /> Test webhook
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300" onClick={onClose}>Cancel</button>
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600">Create Webhook</button>
          </div>
        </div>
      </div>
    </div>
  );
}
