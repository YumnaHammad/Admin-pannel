import React, { useState } from "react";
import { Trash2, Pencil, Plus } from "lucide-react";
import PropTypes from "prop-types";
const MetadataTable = ({
    data,
    onDelete,
    onEdit,
    onNewMetadataClick,
    showDropdown,
    metadataOptions,
    onMetadataOptionClick,
  }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNewDatastream = (option) => {
    console.log(`New datastream selected: ${option}`);
    setDropdownOpen(false); // Close the dropdown after selecting an option
  };

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="mt  bg-white px-4 py-6 shadow-md">
      <div className="flex justify-between items-center p-4">
      <div className="relative">
  <button
    onClick={onNewMetadataClick}
    className="flex items-center gap-1 bg-[#00667C] text-white text-sm px-3 py-2 rounded-md shadow hover:bg-[#005a6e]"
  >
    <Plus size={14} /> New Metadata
  </button>

  {showDropdown && (
    <div className="absolute mt-2 w-60 bg-white rounded-md shadow-lg z-10">
      {metadataOptions.map((option) => (
        <div
          key={option}
          className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
          onClick={() => onMetadataOptionClick(option)}
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

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-50">
  <tr>
    <th className="px-4 py-2">ID</th>
    <th className="px-4 py-2">Type</th>
    <th className="px-4 py-2">Name</th>
    <th className="px-4 py-2">Value</th>
    <th className="px-4 py-2">Editable</th>
    <th className="px-4 py-2">Actions</th>
  </tr>
</thead>
<tbody className="divide-y divide-gray-100">
  {filteredData.map((item, index) => (
    <tr key={index} className="hover:bg-gray-50">
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">{item.type}</td>
      <td className="px-4 py-2">{item.name}</td>
      <td className="px-4 py-2">{item.value}</td>
      <td className="px-4 py-2">{item.editable ? "Yes" : "No"}</td>
      <td className="px-4 py-2">
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(item, index)}
            className="text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(index)}
            className="text-red-600 hover:text-red-800"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

MetadataTable.propTypes = {
    data: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onNewMetadataClick: PropTypes.func.isRequired,
    showDropdown: PropTypes.bool.isRequired,
    metadataOptions: PropTypes.array.isRequired,
    onMetadataOptionClick: PropTypes.func.isRequired,
  };
  
export default MetadataTable;
