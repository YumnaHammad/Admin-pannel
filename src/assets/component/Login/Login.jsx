import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import iconn from "../../img/iconn.png";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      setPopup({ show: true, type: "success", message: "You have successfully logged in." });

      setTimeout(() => {
        setPopup({ show: false, type: "", message: "" });
        navigate("/");
      }, 1500);
    } else {
      setPopup({ show: true, type: "error", message: "Invalid credentials! Please try again." });

      setTimeout(() => {
        setPopup({ show: false, type: "", message: "" });
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Popup Notification */}
      {popup.show && (
        <div
          className={`absolute right-10 top-10 px-4 py-4 shadow-xl border rounded-lg transition-all duration-300 w-[350px] z-[100]
            ${popup.type === "success" ? "bg-white border-gray-300" : "bg-red-100 border-red-400"}`}
          style={{
            opacity: popup.show ? 1 : 0,
            transform: popup.show ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="flex items-center gap-3">
            {popup.type === "success" ? (
              <BsCheckCircle className="text-green-500 text-2xl" />
            ) : (
              <BsExclamationCircle className="text-red-500 text-2xl" />
            )}
            <span
              className={`text-lg font-semibold ${
                popup.type === "success" ? "text-gray-800" : "text-red-700"
              }`}
            >
              {popup.type === "success" ? "Success!" : "Error!"}
            </span>
          </div>
          <p className={`mt-2 text-sm leading-relaxed ${popup.type === "success" ? "text-gray-600" : "text-red-600"}`}>
            {popup.message}
          </p>
        </div>
      )}

      {/* Login Form */}
      <div className="bg-white px-8 py-10 rounded-lg shadow-2xl w-80 transform transition-all duration-300">
        <div className="flex justify-center mb-4">
          <img src={iconn} alt="Logo" className="w-30 h-14" />
        </div>
        <h2 className="text-[22px] font-bold mb-7 text-left text-gray-800">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#00667C] text-white p-3 rounded hover:bg-[#00505f] transition-all duration-300"
        >
          Login
        </button>

        <div className="flex justify-between mt-3 text-sm">
          <button onClick={() => navigate("/signup")} className="text-[#00667C] hover:underline">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
