import React from 'react'

const Users = ({ setActiveTab })  => {
  return (
        <div className="p-6 bg-white  w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl  font-bold">Users</h2>
        <button className="bg-[#24C48E] text-black px-4 py-2 rounded-md hover:bg-[#6DD8B4] font-bold text-sm"   onClick={() => setActiveTab("Billing")}>
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
      <div className="overflow-x-auto">
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
            <tr className="border-b">
              <td className="p-3">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="p-3 flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-full">
                  HI
                </div>
                <span>Hi (you)</span>
              </td>
              <td className="p-3 text-blue-600 font-medium">Admin</td>
              <td className="p-3 text-gray-600">No lc</td>
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users


