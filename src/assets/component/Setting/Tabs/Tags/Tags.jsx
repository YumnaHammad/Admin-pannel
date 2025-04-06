import React, { useState, useEffect } from "react";
import { Table } from "./Table";
import AddTag from "./AddTag";
import NoTag from "./NoTag";
const Tags = () => {

  const [refreshKey, setRefreshKey] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];
    setTags(storedTags);
  }, [refreshKey]);

  const handleTagCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <div className="p-8">
    {tags.length === 0 ? (
      <NoTag onTagCreated={handleTagCreated} />
    ) : (
    <div className="w-full p-6">
      <Table key={refreshKey} />
    </div>    )}
    </div>
  );
};

export default Tags;
