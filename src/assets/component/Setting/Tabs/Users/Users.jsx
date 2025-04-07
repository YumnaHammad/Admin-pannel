import React, { useEffect, useState } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Users =  ({ setActiveTab })  => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [tableRows, setTableRows] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) {
      setLoggedInUser(storedUser.name);
    }

    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];
    if (storedUser?.name) {
      const userTags = storedTags.filter(
        (tag) => tag.owner === storedUser.name
      );
      setTableRows(userTags);
    }
  }, []);
  
  return (
    <div className="p-6 bg-white w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <button className="bg-[#24C48E] text-black px-4 py-2 rounded-md hover:bg-[#6DD8B4] font-bold text-sm"  onClick={() => navigate("/Adminpanel/setting/billing")}>
          + Invite a new user
        </button>
      </div>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search Users"
        className="w-80 border border-gray-300 rounded-sm px-2 py-2 mb-4 text-sm font-normal"
      />
      <div>
        <p className='mb-3 text-base font-normal'>1 User</p>
      </div>
      {/* User Table */}
      <div className="overflow-x-auto relative">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-3 flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-full">
                    {row.owner?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span>{row.owner === loggedInUser ? `${row.owner} (you)` : row.owner}</span>
                </td>
                <td className="p-3 text-blue-600 font-medium">Admin</td>
                <td className="p-3 text-gray-600">{row.location || "No lc"}</td>
                <td className="p-3 relative">
                  <div
                    className="group dropdown-actions"
                    onMouseEnter={() => setHoveredRowId(row.id)}
                    onMouseLeave={() => setHoveredRowId(null)}
                  >
                    <button className="bg-green-100 p-2 rounded-md">
                      <HiOutlineDotsHorizontal size={18} />
                    </button>
                    {hoveredRowId === row.id && (
                      <div className="absolute right-0 top-10 w-32 bg-white rounded-md shadow-lg z-10">
                        <ul className="text-sm text-gray-700 py-1">
                          <li
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSelectedRow(row);
                              setIsTagOpen(true);
                            }}
                          >
                            Edit
                          </li>
                          <li
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                            onClick={() => handleDeleteConfirm(row)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;
