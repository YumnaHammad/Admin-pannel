import React, { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function AwsForm({ onClose }) {
  const certInputRef = useRef(null);
  const keyInputRef = useRef(null);

  const handleCertClick = () => {
    certInputRef.current.click();
  };

  const handleKeyClick = () => {
    keyInputRef.current.click();
  };

  const handleCertChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected Certificate File:", file.name);
    }
  };

  const handleKeyChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected Key File:", file.name);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">AWS IoT Core Integration</h2>
        <span className="text-sm border border-gray-300 text-gray-600 px-2 py-1 rounded">
          Not Connected
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <span className="font-bold">1</span> Choose region...
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm">
            <option value="">Select Region</option>
            <option value="us-west-1">US West (us-west-1)</option>
            <option value="eu-central-1">EU Central (eu-central-1)</option>
            <option value="ap-southeast-1">Asia Pacific (ap-southeast-1)</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <span className="font-bold">2</span> Enter domain...
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="e.g. your-iot-domain.amazonaws.com"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <span className="font-bold">3</span> IoT credential provider...
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="e.g. Amazon Cognito"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <span className="font-bold">4</span> User Id
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            placeholder="Enter your user ID"
          />
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-sm">5</span>
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            Copy Policy JSON <FiExternalLink />
          </a>
        </div>

        <div className="flex gap-4 flex-wrap">
          {/* Hidden file inputs */}
          <input
            type="file"
            accept=".crt"
            ref={certInputRef}
            onChange={handleCertChange}
            className="hidden"
          />
          <input
            type="file"
            accept=".key"
            ref={keyInputRef}
            onChange={handleKeyChange}
            className="hidden"
          />

          {/* Visible buttons */}
          <button
            onClick={handleCertClick}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100"
          >
            + Device Certificate (.Crt)
          </button>
          <button
            onClick={handleKeyClick}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100"
          >
            + Private Key File (.Key)
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onClose}
          className="bg-green-100 text-green-700 px-6 py-2 rounded-md text-sm hover:bg-green-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}
