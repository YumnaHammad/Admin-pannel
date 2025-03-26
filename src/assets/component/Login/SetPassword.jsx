import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconn from "../../img/iconn.png";

const SetPassword = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("tempEmail");

  const handleSetPassword = () => {
    if (!email) {
      alert("No email found. Please sign up again.");
      navigate("/signup");
      return;
    }

    if (password.trim() === "") {
      alert("Password cannot be empty.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.removeItem("tempEmail");
    localStorage.setItem("auth", JSON.stringify(true)); // Store as boolean
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-80">
        <div className="flex justify-center mb-4">
                        <img src={iconn} alt="Logo" className="w-30 h-14" />
                      </div>
        <h2 className="text-[22px] font-bold mb-7 text-left text-gray-800">Set Password</h2>

        <p className="mb-2 text-left text-gray-600">Email: {email || "No email found"}</p>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-3 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSetPassword}
          className="w-full bg-[#00667C] text-white p-2 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SetPassword;
