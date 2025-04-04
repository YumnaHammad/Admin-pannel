import React, { useState } from "react";
import { Table } from "./Table";
import AddTag from "./AddTag";
import NoTag from "./NoTag";
const Tags = () => {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [tags, setTags] = useState([]);


  return (
    <div className="p-8">
    {tags.length === 0 ? (
      <NoTag/>
    ) : (
    <div className="w-full p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <button
          className="bg-green-300 text-black font-bold px-6 rounded-md hover:bg-green-400 transition h-9"
          onClick={() => setShowAddModal(true)}
        >
          <span className="text-lg">+</span>
          <span>Add Tag</span>
        </button>
      </div>

      {/* Table component with refreshKey */}
      <Table key={refreshKey} />

      {showAddModal && (
        <AddTag
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            setRefreshKey((prev) => prev + 1); // Refresh Table
          }}
        />
      )}
    </div>    )}
    </div>
  );
};

export default Tags;
