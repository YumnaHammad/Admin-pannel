import { useState } from "react";
import { X } from "lucide-react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { CiSatellite1 } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { FaFilm } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import LastestNews1 from "../../img/LastestNews1.png";
import LastestNews2 from "../../img/LastestNews2.png";
import LastestNews3 from "../../img/LastestNews3.png";
import LastestNews4 from "../../img/LastestNews4.png";
import LastestNews5 from "../../img/LastestNews5.png";

const newsData = [
  {
    date: "Feb 28, 2025",
    icon: <BiSolidCameraMovie size={25} className="text-[#7B72A4] fill-current"/>,
    title: "Watch Demo: New Dashboards in Action!",
    description: "Learn how you can now segment, aggregate, analyze, and manage data from all devices in a single place.",
    image: LastestNews1,
    buttonText: "Watch now",
  },
  {
    date: "Feb 26, 2025",
    title: "🟢 New Device Connection Status Setting!",
    description: "You can now monitor device connectivity status with enhanced features.",
    image: LastestNews2,
    buttonText: "Watch now",
  },
  {
    date: "Feb 22, 2025",
    icon: <CiSatellite1 size={25} className="text-gray-700 fill-current"/>,
    title: "AI-Powered Alerts for Smart Monitoring!",
    description: "New AI-based alerts provide real-time monitoring for your devices.",
    image: LastestNews3,

    buttonText: "Watch now",
  },
  {
    date: "Feb 20, 2025",
    icon:<BsStars size={25} className="text-yellow-400 fill-current "/>,
    title: "Advanced Data Analytics Now Available!",
    description: "Get deeper insights with new analytics features in your dashboard.",
    image: LastestNews4,
    buttonText: "Watch now",
  },
  {
    date: "Feb 18, 2025",
    buttonText: "Watch now",
    icon:<FaFilm
    size={25}
    className="text-yellow-400 drop-shadow-lg bg-gradient-to-b from-yellow-300 to-yellow-600 p-1 rounded-md"
    
  />,
    title: "Scheduled Maintenance Update",
    description: "Upcoming maintenance for better performance and reliability.",
    image: LastestNews5,
    buttonText: "Watch now",
  },
];

const CustomScrollbar = styled("div")({
  maxHeight: "458px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 #f1f1f1",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "50px",
    transition: "background 0.3s ease",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "50px",
  },
});

const NewsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 hover:bg-gray-100 rounded-full mx-2 relative"
      >
        <IoMegaphoneOutline size={20} className="text-gray-500 cursor-pointer hover:text-gray-700" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {isOpen && (
        <div className="fixed top-16 right-0 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
          <div className="absolute -top-2 ml-[190px] w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

          <div className="flex justify-between items-center pb-2 sticky top-0 bg-white z-10">
            <h2 className="flex text-[23px] font-bold">
              <IoMegaphoneOutline size={23} className="me-[12px] mt-[5px]"/> Latest News
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </button>
          </div>

          <CustomScrollbar>
            {newsData.map((news, index) => (
              <div key={index} className="p-2 rounded-lg shadow-sm">
                <span className="text-sm text-gray-500">{news.date}</span>
                <h3 className="font-bold text-[20px] mt-1 flex items-center">
                  {news.icon && <span className="mr-2 ms-[-4px] text-gray-800">{news.icon}</span>}
                  {news.title}
                </h3>

                <img src={news.image} alt="News" className="w-full rounded-md mt-2" />
                <p className="text-sm text-black font-semibold mt-2">{news.description}</p>
                {news.buttonText && (
                  <button className="mt-3 bg-[#00667C] text-black px-3 py-1 rounded tracking-tight font-bold text-[16px]">
                    {news.buttonText}
                  </button>
                )}
              </div>
            ))}
          </CustomScrollbar>
        </div>
      )}
      </div>
    </>
  );
};

export default NewsDropdown;
