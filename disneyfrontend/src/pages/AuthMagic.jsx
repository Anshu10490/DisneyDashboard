import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { useAuth } from "../context/AuthContext";

export default function AuthMagic() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useAuth(); // 👈 grab login + state

  const handleLogin = (e) => {
    e.preventDefault();

    // Optional: Basic fake validation (or skip if using real auth)
    if (email === "disney@magic.com" && password === "letmein123") {
      login(); // ✅ Set auth context
    } else {
      alert("Incorrect magic email or password 🧙‍♀️");
    }
  };

  // ⏭️ Redirect after login
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Caveat', cursive",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "4rem",
          borderRadius: "25px",
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
          width: "520px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Princess Sofia', cursive",
            fontSize: "3.2rem",
            marginBottom: "2rem",
            color: "#8e44ad",
            textShadow: "2px 2px #f8c6f8",
          }}
        >
          🏰 Welcome to Disney World
        </h1>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="✨ Magic Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
              style={{
                fontSize: "1.4rem",
                padding: "1rem",
                borderRadius: "15px",
                border: "1px solid #ccc",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="🔮 Magic Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
              style={{
                fontSize: "1.4rem",
                padding: "1rem",
                borderRadius: "15px",
                border: "1px solid #ccc",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: "linear-gradient(to right, #ff66cc, #a29bfe)",
              color: "white",
              fontSize: "1.5rem",
              padding: "0.9rem 2.5rem",
              border: "none",
              borderRadius: "30px",
              fontFamily: "'Caveat', cursive",
              boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "#e84393")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(to right, #ff66cc, #a29bfe)")
            }
          >
            🌟 Enter the Magic
          </button>
        </form>

        <p
          className="mt-4"
          style={{
            fontSize: "1.1rem",
            color: "#6c3483",
            marginTop: "1.8rem",
            fontWeight: "bold",
          }}
        >
          Hint ✨: disney@magic.com / letmein123
        </p>
      </div>
    </div>
  );
}
