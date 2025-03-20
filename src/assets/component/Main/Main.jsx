import React from 'react'
import Setting from '../Setting/Setting'
import Users from '../Setting/Users/Users'
import Upgrade from '../Setting/Upgrade'

import Info from '../Setting/Info'
function Main() {
  return (
    <div>
      <div className=" flex items-center justify-between bg-white px-4 shadow-sm border-b my-2 rounded-md"> 
          {/* <Users></Users> */}
          {/* <Upgrade></Upgrade> */}
          <Setting></Setting>
         {/* <Info/> */}
        </div>
    </div>
  )
}

export default Main
