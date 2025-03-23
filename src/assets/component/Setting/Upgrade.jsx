import React, { useState , useEffect, useRef} from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Info from "./Info";

const Upgrade = ({ onClose }) => {
  const [showHeading, setShowHeading] = useState(true);
  const cardRef = useRef(null);
  const [isYearly, setIsYearly] = useState(false);
  const toggleBilling = () => setIsYearly(!isYearly);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isSettingOpen, setSettingOpen] = useState(false);



const appData = [
    { id : 1, 
      content2: <><h2 className="text-sm font-medium">Blynk.App for iOS and Android</h2><p className="text-sm text-black font-normal">Build UI, connect devices, and remotely monitor them. No-code.</p></>, 
      content3: <div className="flex"><FaCheck className="text-base font-normal " /></div>, 
      content4: <div className="flex"><FaCheck className="text-base  font-normal"/></div> },
    { id : 2, 
      content2: <><p className="text-sm font-normal">Adding multiple pages to a device dashboard</p></>, 
      content3: "", 
      content4: <><p className="text-sm font-normal">20 pages, 7 device Info tabs, 1 welcome page</p></> },
    { id : 3, 
      content2: <><h2 className="font-medium text-sm ">App Widgets</h2></>, 
      content3: <div className="flex  items-end"><p className="font-normal text-sm ">Basic App Widgets</p><IoIosInformationCircle size={17} className="text-[#167655] cursor-pointer font-normal text-sm mx-1"     onClick={() => {
        console.log("Info icon clicked"); // Debugging log
        setIsInfoOpen(true);
      }} /></div>, 
      content4: <div className="flex  items-end"><p className="font-normal text-sm ">PRO Mobile Widgets</p><IoIosInformationCircle size={17} className="text-[#167655] cursor-pointer font-normal text-sm mx-1"  onClick={() => {
        console.log("Info icon clicked"); // Debugging log
        setIsInfoOpen(true);
      }}/></div> },
    { id : 4, 
      content2: <p className="font-normal text-sm ">QR / barcode scanner</p>, 
      content3: "", 
      content4:  <><FaCheck  className="font-medium text-sm "/></> },
    { id : 5, 
      content2: <><h5 className="font-medium text-sm ">Blynk.Console</h5><p className="font-normal text-sm ">Web portal to configure and manage devices, users, data and organizations.</p></>, 
      content3:  <><FaCheck /></>, 
      content4: <><FaCheck /></> },
    { id : 6, 
      content2:  <><h5 className="font-medium text-sm ">Dashboards</h5><p className="font-normal text-sm ">Real-time overview of multiple devices, including different device types, with data aggregation, historical trends, and control</p></>, 
      content3: "", 
      content4: <><p className="font-normal text-sm ">5 dashboards per organization</p></> },
    { id : 7, 
      content2:  <><h5 className="font-medium text-sm ">Web Widgets</h5></>, 
      content3: <div className="flex items-end"><p className="font-normal text-sm ">Basic Web Widgets</p><IoIosInformationCircle size={17} className="text-[rgb(22,118,85)] cursor-pointer mx-1"  onClick={() => {
        console.log("Info icon clicked"); // Debugging log
        setIsInfoOpen(true);
      }}/></div>, 
      content4: <div className="flex  items-end"><p className="font-normal text-sm ">PRO Web Widgets</p><IoIosInformationCircle size={17} className="text-[#167655] cursor-pointer mx-1"  onClick={() => {
        console.log("Info icon clicked"); // Debugging log
        setIsInfoOpen(true);
      }}/></div> },
    { id : 8, 
      content2:  <><p className="font-normal text-sm ">Device dashboard with multiple tabs</p></>, 
      content3: "", 
      content4: <><p className="font-normal text-sm ">3 tabs</p></> },
  ];
const cloudData = [
  { id : 1, 
    row2content1: <><h2 className="text-sm font-medium">Blynk.Cloud</h2><p className="text-sm text-black font-normal">Secure cloud server ready to connect your devices.</p></>, 
    row2content2: <div className="flex"><FaCheck className="text-base font-normal " /></div>, 
    row2content3: <div className="flex"><FaCheck className="text-base  font-normal"/></div> },
  { id : 2, 
    row2content1: <><p className="text-sm font-normal">Datastream limit per template</p></>, 
    row2content2: <><p className="text-sm font-normal">20</p></>, 
    row2content3: <><p className="text-sm font-normal">200</p></> },
  { id : 3, 
    row2content1: <><h2 className="font-medium text-sm ">Messages monthly</h2></>, 
    row2content2: <><p className="font-normal text-sm ">30,000</p></>, 
    row2content3: <><p className="font-normal text-sm ">Unlimited</p></> },
  { id : 4, 
    row2content1: <p className="font-normal text-sm ">Historical data storage</p>, 
    row2content2: <p>1 week</p>, 
    row2content3:  <p>6 months</p> },
  { id : 5, 
    row2content1: <><p className="font-normal text-sm ">Action log</p></>, 
    row2content2:  "", 
    row2content3: <><FaCheck /></> },
  { id : 6, 
    row2content1:  <><p className="font-normal text-sm ">Data export to CSV</p></>, 
    row2content2: "", 
    row2content3: <><FaCheck /></> },
  { id : 7, 
    row2content1:  <><p className="font-medium text-sm ">Data imports</p></>, 
    row2content2: "", 
    row2content3: <><FaCheck /></> },
];
const Conectivitydata = [
  { id : 1, 
    content1: <><h2 className="text-sm font-medium">Blynk.Edgent</h2><p className="text-sm text-black font-normal">Open-source hardware libraries to connect any device to Blynk.Cloud using WiFi, Ethernet, or cellular (2G, 3G, LTE, etc) connection.</p></>, 
    content2: <div className="flex"><FaCheck className="text-base font-normal " /></div>, 
    content3: <div className="flex"><FaCheck className="text-base  font-normal"/></div> },
  { id : 2, 
    content1: <><h2 className="text-sm font-medium">Blynk.Inject</h2><p className="text-sm text-black font-normal">Connect devices to local WiFi network directly from Blynk app.</p></>, 
    content2: <div className="flex"><FaCheck className="text-base font-normal " /></div>, 
    content3: <div className="flex"><FaCheck className="text-base font-normal " /></div> },
  { id : 3, 
    content1: <><h2 className="font-medium text-sm ">MQTT support</h2></>, 
    content2: <div className="flex"><FaCheck className="text-base font-normal " /></div>, 
    content3: <div className="flex"><FaCheck className="text-base font-normal " /></div>},
  { id : 4, 
    content1: <><h2 className="font-medium text-sm ">LoRaWAN support</h2></>, 
    content2:<div className="flex"><FaCheck className="text-base font-normal " /></div>, 
    content3:  <div className="flex"><FaCheck className="text-base font-normal " /></div> },
];
const DeviceManagData = [
    { id : 1, 
      content1: <><h2 className="text-sm font-medium">Devices included in the plan</h2><p className="text-sm text-black font-normal">Device is a microcontroller with unique Auth Token (for example single ESP32)</p></>, 
      content2: <><p>10</p></>, 
      content3: <><p>50, 200, 500</p></> },
    { id : 2, 
      content1: <><p className="text-sm font-normal">Add more devices</p></>, 
      content2: "", 
      content3: <><p className="text-sm font-normal">Upgrade to higher tier</p></> },
    { id : 3, 
      content1: <><h2 className="text-sm font-medium">Device templates included</h2><p className="text-sm text-black font-normal">Template is a set of configurations inherited by devices of a similar type</p></>, 
      content2: <><p className="font-normal text-sm ">10</p></>, 
      content3: <><p className="font-normal text-sm ">50</p></> },
    { id : 4, 
      content1: <p className="font-normal text-sm ">Devices per template</p>, 
      content2: <p>1</p>, 
      content3:  <p>Multiple</p> },
    { id : 5, 
      content1: <><p className="font-normal text-sm ">Static token management</p></>, 
      content2:  "", 
      content3: <><FaCheck /></> },
    { id : 6, 
      content1: <><h2 className="text-sm font-medium">Blynk.Air</h2><p className="text-sm text-black font-normal">Update supported devices over-the-air</p></>, 
      content2: <><FaCheck /></>, 
      content3: <><FaCheck /></> },
    { id : 7, 
      content1:  <><p className="font-medium text-sm ">Blynk.Air shipments (OTA campaigns)</p></>, 
      content2: <><p className="font-medium text-sm ">2</p></>, 
      content3: <><p className="font-medium text-sm ">25</p></> },
];
const UserOrganizaton = [
  { id : 1, 
    content1: <><p className="text-sm text-black font-normal">Users included in plan</p></>, 
    content2: <><p>1</p></>, 
    content3: <div className="flex  items-end"><p className="font-normal text-sm ">50-500</p><IoIosInformationCircle size={17} className="text-[#167655] cursor-pointer font-normal text-sm mx-1"    onClick={() => {
      console.log("Info icon clicked"); 
      setIsInfoOpen(true);
    }}/></div>},
  { id : 2, 
    content1: <><p className="text-sm font-normal">Role and permission management</p></>, 
    content2: <><p className="text-sm font-normal">Predefined roles and permissions</p></> , 
    content3: <><p className="text-sm font-normal">3 roles with customizable permissions</p></> },
  { id : 3, 
    content1: <><p className="font-normal text-sm ">Create and manage sub-organizations</p></>, 
    content2:  "", 
    content3: <><FaCheck /></> },
];
const AutomationsData = [
  { id : 1, 
    content1: <><h2 className="text-sm font-medium">Automations per organization</h2><p className="text-sm text-black font-normal">Automation is a scenario where the device automatically performs one or more actions based on a condition</p></>, 
    content2: <><p>5</p></>, 
    content3: <><p>50</p></> },
  { id : 2, 
    content1: <><h2 className="text-sm font-medium">Actions per automation</h2><p className="text-sm text-black font-normal">In-app notifications, emails, SMS, controlling a device, etc.</p></>, 
    content2: <><p>10</p></>, 
    content3: <><p className="font-normal text-sm ">50</p></> },
];
const SupportData = [
  {
    id: 1,
content1 : <><p>Technical support</p></>,
content2 : <><p>Forum only</p></>,
content3 : <><p>Ticketing system with 1-3 business days reply</p></>,
  }
];
const SecurityData = [
  {id : 1,
    content1 : <><p>Encrypted communication between Cloud, apps and devices (for supported hardware)</p></>,
    content2 : <div className="flex"><FaCheck className="text-base font-normal " /></div>,
    content3 : <div className="flex"><FaCheck className="text-base font-normal " /></div>,
  },
  {id : 2,
    content1 : <><p>Built-in user verification over email</p></>,
    content2 : <div className="flex"><FaCheck className="text-base font-normal " /></div>,
    content3 : <div className="flex"><FaCheck className="text-base font-normal " /></div>,
  },
  {id : 3,
    content1 : <><p>Device access controls</p></>,
    content2 : "",
    content3 : <div className="flex"><FaCheck className="text-base font-normal " /></div>
  },
];

useEffect(() => {
  const handleScroll = () => {
     if (cardRef.current?.scrollTop > 10) {
        setShowHeading(false);
      } else {
        setShowHeading(true);
      }
  };

  const card = cardRef.current;
  if (card) {
    card.addEventListener("scroll", handleScroll);
  }

  return () => {
    if (card) {
      card.removeEventListener("scroll", handleScroll);
    }
  };
}, []);

useEffect(() => {
  console.log("isInfoOpen changed:", isInfoOpen);
}, [isInfoOpen]);

  return (
    <>
    {isOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] ">
         <button
            onClick={onClose}
       className="absolute top-4 right-12 bg-[#E4F5EE] hover:text-black text-green-700 rounded-lg p-2 z-20"
     >
       <IoClose />
     </button>
     <div className="bg-white rounded-lg shadow-lg w-[93%] relative flex flex-col h-[80vh]">
   <div  ref={cardRef} className="overflow-y-auto max-h-[80vh] w-full">
       {/* Header (Fixed inside card) */}
       <nav className="bg-white w-[93%] pl-4 pr-4 pt-4 z-10 border-b fixed  transition-all duration-300      top-0 overflow-auto">
       {showHeading && ( <h2 className="text-2xl font-bold">All Plans</h2>)}
       {showHeading && ( <p className="text-gray-600 font-medium text-sm">Compare and choose what works best for your project</p>)}
<div className="grid grid-cols-3 gap-8 mt-4 mb-1 border-none">
   <div className="flex items-end space-x-2 my-4">
         <span className={`text-xs font-medium cursor-pointer ${!isYearly ? "text-black" : "text-gray-500"}`}   onClick={() => setIsYearly(false)}>MONTHLY</span>
         <label className="relative inline-flex items-center cursor-pointer">
           <input type="checkbox" className="sr-only peer"    checked={isYearly}
             onChange={toggleBilling} />
           <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out peer-checked:bg-[#66AA45]">
             <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${isYearly ? "translate-x-3" : "translate-x-0"}`}></div>
           </div>
         </label>
         <span className={`text-xs font-medium cursor-pointer ${isYearly ? "text-black" : "text-gray-500"}`}  onClick={() => setIsYearly(true)}>YEARLY</span>
         <span className="bg-[#EAF8E3] text-[#66AA68] px-2 py-1 rounded-md text-xs">Save 20%</span>
       </div>
       <div className="flex justify-between items-start my-4 ">
         {/* Free Plan */}
         <div className="text-left">
           <h3 className="text-[#24c48f] font-bold text-xl mb-2 ">Free</h3>
           <p className="text-black text-xs font-normal">FOR EXPLORATION</p>
           <p className="text-black text-xs font-normal mt-2 mb-9">$0/month</p>
           <p className="text-black text-xs font-medium ">10 Devices and 1 User</p>
         </div>
         </div>
         {/* Pro Plan */}
         <div className="text-left ">
           <h3 className="text-[#E27627] font-black text-xl mb-3">PRO</h3>
           <p className="text-black text-xs font-normal">FOR PROFESSIONAL IOT DEVELOPMENT</p>
           <p className="text-black text-xs font-normal">${isYearly ? "79" : "99"}/month</p>
           <div className="flex  gap-2 my-2 items-start">
             <button className="bg-black text-white px-4 py-1 rounded-full text-xs font-medium">50</button>
             <button className="bg-gray-300 text-black px-4 py-1 rounded-full text-xs font-medium">200</button>
             <button className="bg-gray-300 text-black px-4 py-1 rounded-full text-xs font-medium">500</button>
           </div>
           <p className="text-black text-xs font-medium">50 Devices and Users</p>
         </div>
</div>
       </nav>

       {/* Scrollable Content */}
       <div className="flex-1 mt-[190px]">
         <div className=" max-h-[400px]">
           <table className="w-full border-collapse border border-gray-300">
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border py-3 px-6 text-left text-lg font-medium">Apps</th>
               </tr>
             </thead>
             <tbody>
               {appData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content2}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content3}</td>
                   <td className=" border-b-2 py-3">{user.content4}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border py-3 text-left text-lg font-medium px-6">Cloud</th>
               </tr>
             </thead>
             <tbody>
               {cloudData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className="border-b-2 py-3 px-6 w-[45%]">{user.row2content1}</td>
                   <td className="border-b-2 w-[30%] px-3 py-3">{user.row2content2}</td>
                   <td className="border-b-2 py-3 ">{user.row2content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 px-6 text-left text-lg font-medium">Connectivity management</th>
               </tr>
             </thead>
             <tbody>
               {Conectivitydata.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-b-2 py-3">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 text-left text-lg font-medium">Device management</th>
               </tr>
             </thead>
             <tbody>
               {DeviceManagData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-b-2 py-3">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 px-6 text-left text-lg font-medium">User/Organization management</th>
               </tr>
             </thead>
             <tbody>
               {UserOrganizaton.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-b-2 py-3">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 px-6 text-left text-lg font-medium">Automations</th>
               </tr>
             </thead>
             <tbody>
               {AutomationsData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-b-2 py-3">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 px-6 text-left text-lg font-medium">Support and Services</th>
               </tr>
             </thead>
             <tbody>
               {SupportData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-none border-b-1 py-3 px-1border-b-2 ">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
             <thead>
               <tr className="bg-[#FAFAFA] text-black">
               <th colSpan="4" className="border p-3 text-left text-lg font-medium px-6">Security</th>
               </tr>
             </thead>
             <tbody>
               {SecurityData.map((user) => (
                 <tr key={user.id} className="hover:bg-gray-100">
                   <td className=" border-b-2 py-3 px-6 w-[45%]">{user.content1}</td>
                   <td className=" border-b-2 w-[30%] py-3">{user.content2}</td>
                   <td className="border-b-2 py-3">{user.content3}</td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
       {isInfoOpen && console.log("Rendering Info Component")} 
       {isInfoOpen && <Info onClose={() => setIsInfoOpen(false)} />}

       {/* Upgrade Button (Fixed inside card at bottom) */}
       <div className="footer p-4 text-center fixed w-[93%] bottom-0 flex justify-end items-center bg-white overflow-auto pl-4 pr-4 pt-4 z-10 border-b">
         <p className="text-base font-medium text-gray-600 mr-24">Your current plan</p>
         <button className="mt-4 relative overflow-hidden text-white px-8 py-2 rounded-lg flex items-center text-sm font-medium transition-transform duration-200 ease-out group">
                         <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
                         <span className="relative flex items-center">
                           <HiOutlineRocketLaunch
                             size={20}
                             className="font-medium mr-2"
                           />
                           Upgrade to PRO Now!
                         </span>
                       </button>
       </div>
       </div>
     </div>
   </div>
    )}
    </>
  );
};

export default Upgrade;
