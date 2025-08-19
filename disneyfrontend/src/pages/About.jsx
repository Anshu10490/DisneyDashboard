import React from "react";
import PixieDustTrail from "../components/PixieDustTrail";

export default function About() {
  return (
    <div
      className="min-h-screen w-full py-12 px-4 d-flex align-items-center justify-content-center position-relative"
      style={{
        background: "radial-gradient(circle at top left, #ffe6f0, #f9d6ff, #e4ccff)",
        color: "#5D3A00",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <PixieDustTrail />

      {/* ✨ Magical Stars Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      <div
        className="container bg-white bg-opacity-75 rounded-4 p-5 shadow-lg border border-light position-relative"
        style={{ maxWidth: "900px", zIndex: 1 }}
      >
        {/* Title */}
        <h1
          className="display-4 fw-bold text-center mb-5 text-pink"
          style={{
            fontFamily: "'Princess Sofia', cursive",
            color: "#C71585",
            textShadow:
              "0 0 10px #FF69B4, 0 0 20px #BA55D3, 0 0 30px violet",
            borderBottom: "3px dashed #dda0dd",
            paddingBottom: "15px",
          }}
        >
          ✨ About DisneyWorld ✨
        </h1>

        {/* Intro */}
        <p className="fs-5 text-dark text-justify mb-5">
          <strong>DisneyWorld</strong> is a mystical movieverse that brings fairytales, magic, and timeless
          Disney nostalgia into your world. Explore a portal where memories glow, characters inspire,
          and every story whispers a dream. Whether it’s soaring with Aladdin or standing tall like Moana,
          this world reminds you — magic is real, and it starts with a story. ✨📽️
        </p>

        <div className="row g-4 mb-5">
          {/* Features */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border border-pink rounded-4">
              <div className="card-body bg-light-pink rounded-4">
                <h5 className="card-title text-pink-800 fw-bold mb-3">
                  🎀 What You’ll Find
                </h5>
                <ul className="list-unstyled text-pink-900">
                  <li>👑 Princess fairytales</li>
                  <li>🔎 Magical movie trailers</li>
                  <li>🌟 Sparkling stories & morals</li>
                  <li>🖼️ Fan art & dream galleries</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stack */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border border-warning rounded-4">
              <div className="card-body bg-warning-subtle rounded-4">
                <h5 className="card-title fw-bold mb-3"
                  style={{ color: "#a45ee5", textShadow: "0 0 5px #d3aaff" }}>
                  ⚙️ Magic Stack
                </h5>
                <ul className="list-unstyled" style={{ color: "#8b5cf6" }}>
                  <li>✨ ReactJS (Frontend)</li>
                  <li>🎨 Tailwind + Bootstrap</li>
                  <li>🔮 Node.js + MySQL (Backend)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white bg-opacity-50 p-4 mb-4 rounded-3 shadow-sm">
          <h4 className="fw-bold text-purple">👩🏻‍💻 About Me</h4>
          <p className="text-dark">
  I’m <strong style={{ color: "#D36ED6", textShadow: "0 0 5px #FFB6C1" }}>
    Anshu Kumari (Raya)
  </strong>, a CSE student at
  Chandigarh University. I blend storytelling and frontend magic to bring joyful,
  delightful digital dreams to life. UI + Fantasy = Pure ✨ Magic.
</p>

          <p>
            💌 Find me on:
            <a
              href="https://www.linkedin.com/in/anshu-kumari-5a001824a/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none fw-bold text-primary ms-1"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Contributor */}
        <div className="bg-white bg-opacity-50 p-4 mb-4 rounded-3 shadow-sm">
          <h4 className="fw-bold text-purple">💫 Contributor</h4>
          <p className="text-dark">
            Thanks to <strong className="text-purple-900">Oushnik Banerjee</strong> — the code wizard
            whose logic, laughter, and late-night bug hunts shaped this portal.
          </p>
          <p>
            💌 Connect with me:
            <a
              href="https://www.linkedin.com/in/oushnik-banerjee-58b0a524a/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none fw-bold text-primary ms-1"
            >
              LinkedIn
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <small className="text-muted fst-italic">
            ✨ This is a fan-made tribute. Disney characters belong to The Walt Disney Company.
          </small>
          <footer className="mt-2 text-secondary small">
            © 2025 DisneyWorld by Anshu. Powered by magic & mocha ☕
          </footer>
        </div>
      </div>
    </div>
  );
}
