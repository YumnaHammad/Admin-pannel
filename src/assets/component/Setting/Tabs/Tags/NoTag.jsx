import React, { useState } from "react";
import AddTag from "./AddTag";

const NoTag = () => {
    const [addopen,setAddopen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Tags</h2>
      <p className="text-xl font-semibold mt-4">You don't have any tags yet.</p>
      <p className="text-gray-500 mb-6">Start by creating a first tag.</p>
      <button
        className="bg-green-500 text-white font-medium px-4 py-2 rounded-lg flex items-center hover:bg-green-600 transition"
        onClick={()=>setAddopen(true)}
      >
        <span className="mr-2 text-lg">➕</span> Create a new tag
      </button>
      {addopen && <AddTag onClose={()=>setAddopen(false)}/>}
    </div>

  );
};

export default NoTag;
