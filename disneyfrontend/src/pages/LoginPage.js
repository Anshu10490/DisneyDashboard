import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Gmail:", email);
    console.log("Password:", password);
    login(); // you can pass email, password if needed
    navigate("/home"); // After login, go to Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Welcome to Disney World ✨</h2>

        <input
          type="text"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded text-black"
        />

        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded text-black"
        />

        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
