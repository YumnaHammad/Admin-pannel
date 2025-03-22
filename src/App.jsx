import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/component/Navbar/Navbar";
import Sidebar from "./assets/component/Siderbar/Sidebar";
import Main from "./assets/component/Main/Main";
import Setting from "./assets/component/Setting/Setting"; // Import Setting component

function App() {
  return (
    <Router>
      <div className="flex bg-lightBg dark:bg-darkBg h-screen text-lightText dark:text-darkText">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="my-2 me-2">
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/setting" element={<Setting/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
