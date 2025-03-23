import React from 'react'
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Rocket } from "lucide-react";

const Tabs = () => {
    const [permissions, setPermissions] = useState({
        viewRoles: true,
        editRoles: true,
      });
  return (
    <div>
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Roles and permissions</h1>
      
      <div className="flex justify-between items-center mt-4">
        <button className="bg-red-500 text-white flex items-center px-4 py-2 rounded-lg shadow">
          <Rocket size={16} className="mr-2" /> Upgrade to Edit Permissions
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-green-500 text-white p-4 rounded-lg">Admin <br /> 1 user</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Staff <br /> 0 users</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">User <br /> 0 users</div>
      </div>

      <div className="mt-6 border p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Permissions control</h2>
        <div className="mt-4">
          <div className="flex justify-between items-center py-2">
            <span>View roles and permissions</span>
            <Switch
              checked={permissions.viewRoles}
              onChange={(val) => setPermissions({ ...permissions, viewRoles: val })}
              className={`$ {permissions.viewRoles ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable</span>
              <span
                className={`$ {permissions.viewRoles ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Edit roles</span>
            <Switch
              checked={permissions.editRoles}
              onChange={(val) => setPermissions({ ...permissions, editRoles: val })}
              className={`$ {permissions.editRoles ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Enable</span>
              <span
                className={`$ {permissions.editRoles ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tabs