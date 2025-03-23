import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import bylnktour1 from "../../../img/blynktour1.png";
import bylnktour2 from "../../../img/blynktour2.png";
import bylnktour3 from "../../../img/blynktour3.png";
import blynktour4 from "../../../img/blynktour4.png";
import blynktour6 from "../../../img/blynktour6.png";

const steps = [
  {
    Mtitle:"Welcome",
    title: "Hi Blynker!",
    titleClass: "text-left font-bold text-[20px]",
    content:
      " You've just joined the community of more than 1,000,000 developers building amazing IoT products and projects",
    contentClass: " text-left py-3 mt-3",
    content2:
      "With Blynk you can connect your devices to the Internet and create mobile and web dashboards to control your devices from anywhere in the world.",
      contentClass2: " text-left  py-5",
      content3:"Let's save your learning time with a few quick steps.",
      contentClass3:"text-left pt-2 pb-10",
      image: bylnktour1,
      
  },
  {
    Mtitle:"Platform",
    title: "Platform",
    contentClass:"text-left py-3 mt-3",
      titleClass2:"text-left ",
      contentClass2:"text-left py-3 mt-3",
    titleClass:"text-left font-bold text-[20px]",
    content: "Blynk platform consists of four main components that work seamlessly together",
    title2:"Blynk library:",

    title3:"Blynk.Console:",
    content3:"web application where you can configure, connect, oversee your devices, analyze sensor data, update firmware OTA, and manage how other users and organizations access their devices.",
    titleClass3:"text-left ",
    contentClass3:"text-left py-3 mt-3",

    title4:"Blynk.Apps:",
    content4:"mobile apps for iOS and Android where you can build UI for you devices with no coding, and share it with other users.",
    titleClass4:"text-left ",
    contentClass4:"text-left py-3 mt-3",

    title5:"Blynk.Cloud:",
    content5:"server that securely sends data between your devices and apps.",
    titleClass5:"text-left ",
    contentClass5:"text-left py-3 mt-3",
    image: bylnktour2,
    content2: "enables device communication with Blynk.Cloud. Blynk.Edgent includes this library, dynamic WiFi provisioning, and OTA updates and is recommended for supported hardware at all times.",
  },
  {
    Mtitle:"Modes",
    title: "Developer Mode and User Mode",
    contentClass:"text-left py-3 mt-3",
    
  titleClass:"text-left font-bold text-[20px]",
    content: "Blynk operates in 2 modes:",
    image: bylnktour3,

    title2:"Developer Mode ",
    content2:"(which you are currently using), allows you to configure how devices should work.",
    titleClass2:"text-left ",
    contentClass2:"text-left py-3 mt-3",

    title3:"User Mode",
    content3:"allows to monitor and control the devices, but doesn't allow to modify any configurations.",
    titleClass3:"text-left ",
    contentClass3:"text-left py-3 mt-3",
    contentClass4:"text-left py-3 mt-3",
    content4:"You can switch the Developer Mode on/off in User Profile section of the main menu",

  

  },
  {
    Mtitle:"Devices",
    content: "Let's learn the key concepts of Blynk Platform.",
    contentClass:"text-left py-3 mb-4",
    image: blynktour4,
    title2:"Device",
    titleClass2: "text-left font-bold text-[24px] mt-2 ",
    contentClass4:"text-left py-3 mt-3",
    content4:"Your device can connect to the cloud using WiFi, Ethernet, Сellular, LoRaWAN, or Satellite.",
    contentClass3:"text-left py-3 mt-3",
 
    content3:"A device is usually a microcontroller (MCU) like TI CC3220, ESP32, Seeed Wio Terminal, Arduino, etc. You can attach sensors and actuators to an MCU and monitor or control them with Blynk.",
    content5:"The data is transferred through:",
    contentClass5:"text-left ",
list:"list-disc pl-5 text-gray-700 space-y-1",
    list1:" Blynk protocol (via Blynk.Edgent or Blynk library)",
list2:"MQTT",
list3:"HTTP(s)",

   
   
    
  },
  {
    Mtitle:"Template",
    title: "Device Template",

    content2:"Each template consists of:",
    content: "Device configurations are stored in something we call Device Template. Multiple individual devices can be created from the same template (product), making it easy to manage them all from one place.",
    image: blynktour4,

    contentClass:"text-left py-3 mt-3",
    titleClass2:"text-left ",
    contentClass2:"text-left mt-2",
  titleClass:"text-left font-bold text-[20px]",
  list:"list-disc pl-5 ",
    list1:"Datastreams - channels to transfer data from/to device",
list2:"Mobile app UI",
list3:"Web dashboard UI",
list4:"Connection Lifecycle settings",
list5:"Metadata settings",
list6:"Events & Notifications",
content6:"Updating a template will update all devices that were made from it.",
contentClass6:"text-left py-3 mt-3",
    
  },
  {
    Mtitle:"Features",
    title: "With Blynk you can:",
    titleClass:"text-left font-bold text-[23px] ",
    list:"list-disc pl-5 py-5 ",
    list1:"Visualize data from your device in app or web",

list2:"Control your device from app or web",
list3:"Set up automations and notifications",
list4:"Update device firmware Over-The-Air",
list5:"Provision Wi-Fi credentials to devices with no code",
list6:"Share your device with other users",
list7:"Manage roles and permissions",
list8:"Manage organizations",
    image: blynktour6,
    content6:"and more...",
    contentClass6:" py-5",
    content7:"Now if you have your device handy, let’s start with getting it online!",
    contentClass7:"py-5",


  },
];

export default function BlynkTour({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
 
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 select-text ">
      <div className="w-[1200px]  bg-white rounded-lg shadow-lg p-7 h-[500px] overflow-hidden flex flex-col ">
        <h2 className="text-2xl font-bold mb-6 text-left text-gray-800">
          Blynk Tour
        </h2>

        {/* Stepper */}
        <div className="flex justify-between items-center border-b pb-2 mb-4 relative">
          {steps.map((_, index) => (
            <div key={index} className="relative flex items-center">
              {index > 0 && (
                <div
                  className={`absolute -left-[97px] w-[90px] h-[2px] mt-1 ${
                    index <= step ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold transition-all duration-300 ${
                  index === step
                    ? "bg-green-500 scale-110"
                    : index < step
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                {index < step ? <CheckCircle size={18} /> : index + 1}
              </div>
              <span className="hidden sm:block ml-2 text-gray-600">
                {steps[index].Mtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex  space-x-6 flex-grow overflow-auto p-2 custom-scrollbar mt-1 text-left ">
          <div className="w-1/2 h-full text-left  ">
            <h3 className={` ${steps[step].titleClass}`}>
              {steps[step].title}
            </h3>
            <p className={`  ${steps[step].contentClass}`}>
              {steps[step].content}
            </p>
            <p className={` ${steps[step].contentClass2}`}><span
            
            className={`font-semibold text-[18px] ${steps[step].titleClass2}`}>
  {steps[step].title2} </span> {steps[step].content2}
</p>

<p className={` ${steps[step].contentClass3}`}><span
            
            className={`font-semibold text-[18px] ${steps[step].titleClass3}`}>
  {steps[step].title3} </span> {steps[step].content3}
</p>

<p className={` ${steps[step].contentClass4}`}><span
            
            className={`font-semibold text-[18px] ${steps[step].titleClass4}`}>
  {steps[step].title4} </span> {steps[step].content4}
</p>

<p className={` ${steps[step].contentClass3}`}><span
            
            className={`font-semibold text-[18px] ${steps[step].titleClass5}`}>
  {steps[step].title5} </span> {steps[step].content5}
</p>
<ul className={` ${steps[step].list}`}>
    <li>{steps[step].list1}</li>
    <li>{steps[step].list2}</li>
    <li>{steps[step].list3}</li>
    <li>{steps[step].list4}</li>
    <li>{steps[step].list5}</li>
    <li>{steps[step].list6}</li>
    <li>{steps[step].list7}</li>
    <li>{steps[step].list8}</li>
</ul>
<p className={` ${steps[step].contentClass6}`}> {steps[step].content6}
</p>
<p className={` ${steps[step].contentClass7}`}> {steps[step].content7}
</p>
         
          </div>
          <img
            src={steps[step].image}
            alt={steps[step].title}
            className={`w-1/2 rounded-lg shadow-lg bg-gray-200 ${steps[step].imgClass}`}
          />
        </div>

        {/* Navigation */}
    
    <div>
      {/* Main Step Form */}
      <div className="mt-6 flex justify-between items-center">
        {/* Back Button (Appears from Step 1 onwards) */}
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-md flex items-center shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>
        )}

        <div className="flex-1"></div>

        {/* Step 0: Skip and Let's Go Buttons */}
        {step === 0 ? (
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-100 hover:bg-green-200 transition-all duration-300 text-green-700 rounded-md flex items-center shadow-sm"
            >
              Skip
            </button>
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white rounded-md flex items-center shadow-md"
            >
              Let’s go! <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        ) : step >= 1 && step <= 6 ? (
          // Steps 2 to 6: Show Cancel + Next/Finish Buttons
          <div className="flex space-x-4">
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-700 rounded-md flex items-center shadow-sm"
            >
              Cancel
            </button>
            {/* Change Next to Finish on Last Step */}
            {step === steps.length - 1 ? (
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white rounded-md flex items-center shadow-md"
              >
                Finish <CheckCircle className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white rounded-md flex items-center shadow-md"
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        ) : (
          // Default Next Button for Steps 1 and others
          <button
            onClick={() => setStep(step + 1)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white rounded-md flex items-center shadow-md"
          >
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        )}
      </div>

      {/* Modal (Final Message) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h2 className="text-xl font-semibold">What’s next?</h2>
            <div className="mt-4 p-4 bg-blue-100 rounded-md">
              <h3 className="font-semibold">🚀 Explore Blueprints</h3>
              <p className="text-sm text-gray-700">
                Ready-to-use projects with step-by-step guides.
              </p>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded-md">
              <h3 className="font-semibold">Quickstart</h3>
              <p className="text-sm text-gray-700">
                We’ve prepared a quick and easy way to connect your first device.
              </p>
            </div>
            {/* Close Form on "Have a look around first" */}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            >
              Have a look around first →
            </button>
          </div>
        </div>
      )}
    </div>

      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #b0b0b0, #d0d0d0);
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #909090, #b0b0b0);
        }
      `}</style>
    </div>
  );
}
