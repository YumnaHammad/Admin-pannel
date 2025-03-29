import React, { useState } from "react";

const Tags = () => {
  const [search, setSearch] = useState("");
  const tags = [
    { id: 8017, name: "Yumna", color: "bg-red-500", owner: "Yumna (you)" },
    { id: 8020, name: "ui", color: "bg-blue-500", owner: "Yumna (you)" },
  ];

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full p-6">
        <div></div>
      <h2 className="text-2xl font-bold mb-4">Tags</h2>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search tag"
          className="border p-2 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Id</th>
            <th className="border p-2 text-left">Tag Name</th>
            <th className="border p-2 text-left">Color</th>
            <th className="border p-2 text-left">Owner</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTags.map((tag) => (
            <tr key={tag.id} className="border">
              <td className="border p-2">{tag.id}</td>
              <td className="border p-2 font-bold">{tag.name}</td>
              <td className="border p-2">
                <span className={`inline-block w-6 h-6 rounded ${tag.color}`}></span>
              </td>
              <td className="border p-2">{tag.owner}</td>
              <td className="border p-2 text-gray-400">—</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div></div>
    </div>
  );
};

export default Tags;
