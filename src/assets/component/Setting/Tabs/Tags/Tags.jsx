import React, { useState } from "react";
import { Table } from "./Table";

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
      <div><Table/></div>
    </div>
  );
};

export default Tags;
