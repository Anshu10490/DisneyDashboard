import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import confetti from "canvas-confetti";
import emailjs from "emailjs-com";

const morals = [
  "Believe in yourself even when others don't. ✨",
  "True love is selfless and kind. ❤",
  "Bravery means doing the right thing even when you're scared. 🦁",
  "Friendship is the greatest treasure. 🤝",
  "Kindness always wins. 🌈",
  "Dreams come true when you chase them. ✨",
  "Never give up on those you love. 💖",
  "Family gives you strength. 👨‍👩‍👧‍👦",
  "Be proud of who you are. 🌟",
  "Even the smallest voice can make a big difference. 🤍",
  "You’re stronger than you think. 💪",
  "Face your fears with courage. 🌷",
  "Let go of the past and embrace the future 🍂",
  "Good always triumphs over evil. ⚔",
  "Be kind to everyone, even strangers. 🕊",
  "Magic lives in belief. ✨",
  "Follow your heart, not the crowd. 💫",
  "Being different is beautiful. 🦋",
  "Adventure is out there! 🗺",
  "Imagination makes everything possible. 🎨",
  "Loyalty builds lifelong friendships. 🐾",
  "Happiness comes from within. ☀",
  "Keep moving forward. 🚀",
  "Hope lights even the darkest paths. 🕯",
  "You define your own destiny. 🎯",
  "Forgiveness is a superpower. 🌻",
  "Speak your truth with love. 🫶🏻",
  "Every day is a chance to be better. 🌅",
  "Help others whenever you can. 🪄",
  "Believe in magic, and it will find you. 🧚",
  "Be true to your word. 📜"
];

function StarField() {
  const stars = new Array(40).fill(0);
  return (
    <div className="falling-stars pointer-events-none">
      {stars.map((_, i) => {
        const left = Math.random() * 100 + "vw";
        const delay = Math.random() * 10 + "s";
        const duration = 6 + Math.random() * 6 + "s";
        const size = Math.random() * 4 + 6 + "px";
        return (
          <div
            key={i}
            className="star"
            style={{
              left,
              animationDelay: delay,
              animationDuration: duration,
              width: size,
              height: size,
              backgroundColor: "gold",
              borderRadius: "50%",
              position: "absolute",
              top: 0
            }}
          ></div>
        );
      })}
    </div>
  );
}

function PixieDustTrail() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .pixie {
        position: absolute;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #fff4fb, #ffb6c1);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.9;
        animation: fadeOut 0.8s ease-out forwards;
      }

      @keyframes fadeOut {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    const sparkle = (e) => {
      const dot = document.createElement("div");
      dot.className = "pixie";
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    };

    window.addEventListener("mousemove", sparkle);
    return () => window.removeEventListener("mousemove", sparkle);
  }, []);

  return null;
}

export default function Explore() {
  const [moral, setMoral] = useState("");
  const [showPopper, setShowPopper] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * morals.length);
    setMoral(morals[random]);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.time.value = new Date().toLocaleString();
    const duration = 2000;
    const end = Date.now() + duration;

    // EmailJS form submission
    emailjs
      .sendForm(
        "service_zrrgxdy",   // ✅ replace with your Service ID
        "template_ybglhr6",  // ✅ replace with your Template ID
        e.target,
        "7-Ws1iHrEEUEfYOEa"  // ✅ replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setShowPopper(true);
          setTimeout(() => setShowPopper(false), 2500);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );

    // Confetti celebration
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#c9b6ff", "#ffe1f0"]
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#c9b6ff", "#ffe1f0"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    e.target.reset(); // clear form after submit
  };

  return (
    <div
      className="relative min-h-screen px-4 py-5 container"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background:
          "linear-gradient(135deg, #ffe1f0, #ffcae9, #f7bfff, #ddbaff, #c9b6ff, #e0c4ff, #ffb6ea)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />
      <PixieDustTrail />

      <div className="card p-4 shadow-lg rounded-4 mb-4 text-center bg-white/70 border-0">
        <h1
          className="text-4xl font-bold mb-0"
          style={{
            fontFamily: "'Princess Sofia', cursive",
            textShadow: "0 0 8px #f7bfff, 0 0 16px #ddbaff",
            color: "#a0528f"
          }}
        >
          Explore Disney Magic ✨
        </h1>
      </div>

      {/* Movie suggestions */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow-lg rounded-4 h-100 bg-white/70 border-0">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Princess Sofia', cursive", color: "#A0528F" }}
            >
              🍿 Movie Suggestions
            </h2>
            <ul className="list-unstyled mt-3 text-start ps-3 movie-links">
              <li><Link to="/love" className="magic-link">💖 Love</Link></li>
              <li><Link to="/friendship" className="magic-link">🤝 Friendship</Link></li>
              <li><Link to="/bravery" className="magic-link">🦁 Bravery</Link></li>
              <li><Link to="/celebration" className="magic-link">🎉 Celebration</Link></li>
              <li><Link to="/magic" className="magic-link">🧚🏻 Magic</Link></li>
              <li><Link to="/family" className="magic-link">🧑‍🧑‍🧒‍🧒 Family Bonds</Link></li>
            </ul>
          </div>
        </div>

        {/* Heroes */}
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow-lg rounded-4 h-100 bg-white/70 border-0">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Princess Sofia', cursive", color: "#A0528F" }}
            >
              ⭐ Know the Heroes
            </h2>
            <ul className="list-unstyled mt-3 text-start ps-3" style={{ color: "black" }}>
              <li className="hero-card" style={{ "--heroColor": "#ff69b4" }}>
                <strong>Ariel</strong>: Chase dreams and voice your truth. 🐚
              </li>
              <li className="hero-card" style={{ "--heroColor": "#f4a261" }}>
                <strong>Simba</strong>: Reclaim your destiny with courage. 🦁
              </li>
              <li className="hero-card" style={{ "--heroColor": "#87ceeb" }}>
                <strong>Elsa</strong>: Embrace self-acceptance. ❄
              </li>
              <li className="hero-card" style={{ "--heroColor": "#e63946" }}>
                <strong>Mulan</strong>: Honor comes from the heart. ⚔
              </li>
              <li className="hero-card" style={{ "--heroColor": "#ffdd57" }}>
                <strong>Rapunzel</strong>: Shine even in towers. 🌷
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Moral + Suggestions */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow-lg rounded-4 h-100 border-0 text-center moral-card">
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Princess Sofia', cursive",
                color: "#A0522D",
                textShadow: "0 0 6px #ffd9ec, 0 0 12px #ffd6f5"
              }}
            >
              A Wish to Remember
            </h2>
            <h3
              onClick={() => {
                const random = Math.floor(Math.random() * morals.length);
                setMoral(morals[random]);
              }}
              className="text-lg italic mt-3"
              style={{
                fontFamily: "'Handlee', cursive",
                padding: "20px",
                color: "#d1006f",
                fontWeight: "bold",
                textShadow: "0 0 4px #ffb3da, 0 0 10px #ff69b4, 0 0 16px #d1006f",
                animation: "moralGlow 4s ease-in-out infinite",
                cursor: "pointer"
              }}
            >
              ✨ {moral} ✨
            </h3>
          </div>
        </div>

        {/* Suggestion form */}
        <div className="col-md-6 mb-3">
          <div className="card p-4 shadow-lg rounded-4 h-100 bg-white/80 border-0">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Princess Sofia', cursive", color: "#A0528F" }}
            >
              📩 Any Suggestions?
            </h2>
            <form onSubmit={handleFormSubmit} className="mt-3">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="form-control mb-3"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="form-control mb-3"
    required
  />
  <textarea
    name="message"
    placeholder="Your Suggestion"
    className="form-control mb-3"
    required
  ></textarea>
  <input type="hidden" name="time" /> {/* Hidden field for time */}
  <button
    type="submit"
    className="btn w-100"
    style={{
      backgroundColor: "#ff69b4",
      color: "white",
      fontFamily: "'Caveat', cursive",
      fontSize: "1.2rem"
    }}
  >
    Send ✨
  </button>
</form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-5">
        <p
          style={{
            fontSize: "0.95rem",
            fontFamily: "'Comic Neue', cursive",
            color: "black"
          }}
        >
          ©️ 2025 <strong style={{ color: "#BA55D3" }}>DisneyWorld Project</strong>. Made
          with 💜 and fairy dust ✨ by Anshu.
        </p>
      </div>

      {/* Toast */}
      {showPopper && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
          <div
            className="toast show align-items-center text-white bg-purple border-0 shadow-lg"
            role="alert"
            style={{
              background: "linear-gradient(to right, #ffb6ea, #c9b6ff)",
              color: "#4B0082",
              fontFamily: "'Comic Neue', cursive",
              fontWeight: "bold",
              borderRadius: "12px",
              animation: "popSlide 0.4s ease-out"
            }}
          >
            <div className="d-flex px-3 py-2">
              <div>🎉 Thank you for your magical suggestion!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}