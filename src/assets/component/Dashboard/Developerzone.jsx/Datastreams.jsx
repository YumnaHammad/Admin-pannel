import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import DatastreamTable from "./DatastreamTable"; // Import your DatastreamTable component

function Datastreams() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [datastreams, setDatastreams] = useState([]); // State to store datastreams
  const [formData, setFormData] = useState({
    name: "",
    alias: "",
    pin: "V0",
    dataType: "Integer",
    units: "None",
  });

  const datastreamOptions = [
    "Virtual Pin",
    "Enum",
    "Location",
    "Digital Pin",
    "Analog Pin",
  ];

  // Load datastreams from localStorage when the component mounts
  useEffect(() => {
    const storedDatastreams = JSON.parse(localStorage.getItem("datastreams"));
    if (storedDatastreams) {
      setDatastreams(storedDatastreams);
    }
  }, []);

  // Save datastreams to localStorage whenever they change
  useEffect(() => {
    if (datastreams.length > 0) {
      localStorage.setItem("datastreams", JSON.stringify(datastreams));
    }
  }, [datastreams]);

  const openModal = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
    setEditingIndex(null);
    setFormData({
      name: "",
      alias: "",
      pin: "V0",
      dataType: "Integer",
      units: "None",
    });
    setShowDropdown(false); // Close the dropdown after selection
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOption(null);
    setEditingIndex(null);
  };

  const handleCreate = () => {
    const newDatastream = { ...formData, type: selectedOption };

    if (editingIndex !== null) {
      const updated = [...datastreams];
      updated[editingIndex] = newDatastream;
      setDatastreams(updated);
    } else {
      setDatastreams((prev) => [...prev, newDatastream]);
    }
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (action, index) => {
    if (action === "edit") {
      const item = datastreams[index];
      setFormData(item);
      setSelectedOption(item.type);
      setEditingIndex(index);
      setModalOpen(true);
    } else if (action === "search") {
      setSearchTerm(index); // index will be the search string in this case
    }
  };

  const handleDelete = (index) => {
    // Delete the datastream and update the state
    const updatedDatastreams = datastreams.filter((_, i) => i !== index);
    setDatastreams(updatedDatastreams);

    // Save the updated datastreams to localStorage
    localStorage.setItem("datastreams", JSON.stringify(updatedDatastreams));
  };

  const handleNewDatastream = (option) => {
    openModal(option);
  };

  return (
    <>
      {datastreams.length === 0 ? (
        <div className=" px-[250px] bg-white rounded-[5px] text-center">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold">Datastreams</h1>
            <p className="text-gray-600 mt-2 mb-4">
              Datastreams is a way to structure data that regularly flows in
              and out from devices. Use it for sensor data, telemetry, or
              actuators.
            </p>

            <div className="relative mb-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 bg-[#00667C] text-white text-xs px-3 py-1.5 rounded-md shadow hover:bg-[#00657c71]"
              >
                <Plus size={14} /> New Datastream
              </button>

              {showDropdown && (
                <div className="absolute top-10 left-0 w-40 bg-white rounded-md shadow-lg z-10">
                  {datastreamOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      onClick={() => handleNewDatastream(option)} // Open modal for selection
                    >
                      {option}
                      {option === "Location" && (
                        <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-md ml-2">
                          UPGRADE
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <DatastreamTable
          data={datastreams}
          onEdit={(index) => handleEdit("edit", index)}
          onDelete={handleDelete}
          onSearch={setSearchTerm}
          searchTerm={searchTerm}
          onNew={handleNewDatastream} // Pass handleNewDatastream function
          datastreamOptions={datastreamOptions} // Pass the options to the table
        />
      )}

      {/* Modal for creating/editing datastream */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-6 relative">
            <h2 className="text-xl font-bold mb-4">
              {selectedOption} Datastream
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input
                  name="name"
                  className="border rounded-md w-full p-2 mt-1"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Alias</label>
                <input
                  name="alias"
                  className="border rounded-md w-full p-2 mt-1"
                  placeholder="Enter alias"
                  value={formData.alias}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Pin</label>
                <select
                  name="pin"
                  className="border rounded-md w-full p-2 mt-1"
                  value={formData.pin}
                  onChange={handleInputChange}
                >
                  <option>V0</option>
                  <option>V1</option>
                  <option>V2</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Data Type</label>
                <select
                  name="dataType"
                  className="border rounded-md w-full p-2 mt-1"
                  value={formData.dataType}
                  onChange={handleInputChange}
                >
                  <option>Integer</option>
                  <option>Float</option>
                  <option>String</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Units</label>
                <select
                  name="units"
                  className="border rounded-md w-full p-2 mt-1"
                  value={formData.units}
                  onChange={handleInputChange}
                >
                  <option>None</option>
                  <option>°C</option>
                  <option>%</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
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
}

export default Datastreams;
