import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import MetadataTable from "./MetadataTable";

const metadataOptions = [
  "List",
  "Device Reference",
  "Switch",
  "Coordinates",
  "Cost",
  "Time",
  "Contact",
  "Time Range",
  "Unit",
  "Number",
  "Text",
  "Table",
  "IMEI",
  "Timezone",
  "ICCID",
  "Location",
  "Device EUI",
  "Join EUI",
  "Firmware Update Control",
  "Application Key",
];

const Metadata = () => {
  const [metadataList, setMetadataList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    editable: false,
    type: "",
    description: "",
    includeInProvisioning: false,
    isRequired: false,
    excludeFromRecent: false,
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("metadataList");
    if (saved) {
      try {
        setMetadataList(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse metadataList from localStorage", error);
      }
    }
  }, []);
  
  useEffect(() => {
    // Avoid setting metadataList to localStorage if it is empty or invalid
    if (metadataList.length > 0) {
      localStorage.setItem("metadataList", JSON.stringify(metadataList));
    }
  }, [metadataList]);
  

  const handleDropdownClick = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
    setFormData({
      name: option,
      value: "",
      editable: false,
      type: option,
      description: "",
      includeInProvisioning: false,
      isRequired: false,
      excludeFromRecent: false,
    });
    setEditingIndex(null);
    setShowDropdown(false);
    setShowAdvanced(false);
  };

  const handleSave = () => {
    const updatedList = [...metadataList];
    if (editingIndex !== null) {
      updatedList[editingIndex] = formData;
    } else {
      updatedList.push(formData);
    }
    setMetadataList(updatedList);
    setModalOpen(false);
  };

  const handleEdit = (item, index) => {
    setFormData(item);
    setSelectedOption(item.type);
    setEditingIndex(index);
    setModalOpen(true);
    setShowAdvanced(item.includeInProvisioning);
  };

  const handleDelete = (index) => {
    const updatedList = metadataList.filter((_, i) => i !== index);
    setMetadataList(updatedList);
    localStorage.setItem("metadataList", JSON.stringify(updatedList)); // Update localStorage
  };
  

  return (
    <>
      {metadataList.length === 0 ? (
        <div className="mt-[90px] px-[250px] bg-white rounded-[5px] text-center">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold">Metadata</h1>
            <p className="text-gray-600 mt-2 mb-4">
              Metadata provides context about your device or its configuration.
              Use it for labeling, grouping, or additional reference.
            </p>
            <div className="relative mb-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 bg-[#00667C] text-white text-xs px-3 py-1.5 rounded-md shadow hover:bg-[#00657c71]"
              >
                <Plus size={14} /> New Metadata
              </button>
              {showDropdown && (
                <div className="absolute top-10 left-0 w-60 bg-white rounded-md shadow-lg z-10">
                  {metadataOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleDropdownClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <MetadataTable
  data={metadataList}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onNewMetadataClick={() => setShowDropdown(!showDropdown)}
  showDropdown={showDropdown}
  metadataOptions={metadataOptions}
  onMetadataOptionClick={handleDropdownClick}
/>

      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-6 relative">
            <h2 className="text-xl font-bold mb-4">{selectedOption} Metadata</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input
                  className="w-full mt-1 p-2 border rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Value</label>
                <input
                  className="w-full mt-1 p-2 border rounded"
                  value={formData.value}
                  onChange={(e) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.editable}
                  onChange={(e) =>
                    setFormData({ ...formData, editable: e.target.checked })
                  }
                />
                <span className="text-sm">Editable by end-users</span>
              </div>
              <div>
                <button
                  className="text-blue-600 text-sm"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                >
                  {showAdvanced ? "- Advanced Settings" : "+ Advanced Settings"}
                </button>
              </div>
              {showAdvanced && (
                <div className="space-y-3 border rounded-md p-4 bg-gray-50">
                  <div>
                    <label className="text-sm font-semibold">
                      Short Description
                    </label>
                    <input
                      className="w-full mt-1 p-2 border rounded"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.includeInProvisioning}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          includeInProvisioning: e.target.checked,
                        })
                      }
                    />
                    <span className="text-sm">
                      Include in mobile app provisioning
                    </span>
                  </div>
                  {formData.includeInProvisioning && (
                    <>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.isRequired}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              isRequired: e.target.checked,
                            })
                          }
                        />
                        <span className="text-sm">This is a required field</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.excludeFromRecent}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              excludeFromRecent: e.target.checked,
                            })
                          }
                        />
                        <span className="text-sm">
                          Exclude from "Recently used profile"
                        </span>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm"
              >
                {editingIndex !== null ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Metadata;
