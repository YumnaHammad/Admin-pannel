import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import PropTypes from "prop-types";

const DatastreamTable = ({
  data,
  onEdit,
  onDelete,
  onNew,
  searchTerm,
  onSearch,
  datastreamOptions,
}) => {
  // Filter data based on search term
  const filteredData = data.filter((ds) =>
    ds.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle new datastream selection
  const handleNewDatastream = (option) => {
    if (onNew) {
      onNew(option); // Trigger the parent function to open modal
    } else {
      console.error("onNew function is not provided");
    }
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="overflow-x-auto p-4">
      {/* Table Wrapper */}
      <div className="bg-white shadow rounded-lg">
        <div className="flex justify-between items-center p-4">
          {/* New Datastream Button */}
          <div className="flex gap-4 items-center">
            <button
              onClick={handleDropdownToggle} // Toggle dropdown on button click
              className="flex items-center gap-1 bg-[#00667C] text-white text-sm px-3 py-2 rounded-md shadow hover:bg-[#005a6e]"
            >
              <Plus size={16} /> New Datastream
            </button>

            {/* Conditionally render dropdown options */}
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                {Array.isArray(datastreamOptions) &&
                  datastreamOptions.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNewDatastream(option)} // Call handleNewDatastream on option click
                    >
                      {option}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name..."
            className="border px-3 py-2 rounded-md w-64 text-sm"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
            <th className="px-4 py-2">ID</th>
              <th className="py-2 px-4 border text-gray-600">Type</th>
              <th className="py-2 px-4 border text-gray-600">Name</th>
              <th className="py-2 px-4 border text-gray-600">Alias</th>
              <th className="py-2 px-4 border text-gray-600">Pin</th>
              <th className="py-2 px-4 border text-gray-600">Data Type</th>
              <th className="py-2 px-4 border text-gray-600">Units</th>
              <th className="py-2 px-4 border text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((ds, index) => (
                <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{index + 1}</td>
                  <td className="py-2 px-4 border">{ds.type}</td>
                  <td className="py-2 px-4 border">{ds.name}</td>
                  <td className="py-2 px-4 border">{ds.alias}</td>
                  <td className="py-2 px-4 border">{ds.pin}</td>
                  <td className="py-2 px-4 border">{ds.dataType}</td>
                  <td className="py-2 px-4 border">{ds.units}</td>
                  <td className="py-2 px-4 border flex gap-2">
                    <button onClick={() => onEdit(index)}>
                      <Pencil size={16} className="text-blue-600" />
                    </button>
                    <button onClick={() => onDelete(index)}>
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No datastreams found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Default props in case props are undefined
DatastreamTable.defaultProps = {
  data: [],
  datastreamOptions: [],
};

// Prop type validation
DatastreamTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onNew: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  datastreamOptions: PropTypes.array.isRequired,
};

export default DatastreamTable;
