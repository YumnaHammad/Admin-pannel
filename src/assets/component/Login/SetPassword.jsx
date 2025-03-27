import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.removeItem("tempEmail");
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white py-10 px-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-7 text-left">Set Password</h2>
        <p className="mb-2 text-left text-gray-600">Email: {email}</p>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-2 mb-3 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSetPassword} className="w-full bg-[#00667C] text-white p-2 rounded">Create Account</button>
      </div>
    </div>
  );
};

export default SetPassword;
