import React from "react";
import { NavLink } from "react-router-dom";

function Zonesidebar() {
  const menuItems = [
    { name: "Developer Zone", path: "/Adminpanel/developerzone" },

  ];

  return (
    <div className="w-64 h-screen bg-gray-100 p-4">      <h2 className="font-bold text-xl mb-4">MENU</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive ? "bg-[#00667C] text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Zonesidebar;
