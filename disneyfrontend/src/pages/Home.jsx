import React, { useEffect, useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const { isNight } = useTheme();
  const navigate = useNavigate();

  const [webHighlights, setWebHighlights] = useState([]);

  const allImages = Array.from({ length: 46 }, (_, i) => `Hp${i + 1}.jpg`);
  const getRandomImages = (images, count) => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const images = getRandomImages(allImages, 12);

  useEffect(() => {
    async function fetchDisneyBlog() {
      try {
        // Using a public RSS-to-JSON converter
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            'https://disneyparksblog.com/feed/'
          )}`
        );
        const data = await res.json();
        if (data.items?.length) {
          setWebHighlights(data.items.slice(0, 8).map(item => ({
            title: item.title,
            url: item.link,
            source: { name: "Disney Parks Blog" }
          })));
        } else {
          throw new Error("No items");
        }
      } catch (err) {
        console.error("RSS fetch failed:", err);
        setWebHighlights([
          { title: "Magic Kingdom celebrates 50 years 🎉", url: "#", source: { name: "Disney News" } },
          { title: "Disney+ hits record subscribers 📺", url: "#", source: { name: "Streaming World" } },
          { title: "Disney announces new animated movie!", url: "#", source: { name: "Disney Studios" } },
        ]);
      }
    }
    fetchDisneyBlog();
  }, []);

  if (!isLoggedIn) return <Navigate to="/" />;

  return (
    <div className={`min-vh-100 py-5 ${isNight ? 'night-bg' : 'day-bg'} px-3`}>
      {/* Heading */}
      <h1 className="text-center mb-5 fw-bold" style={{
        fontSize: "2.7rem",
        background: "linear-gradient(90deg, #ff00cc, #3333ff, #00ccff, #33cc33, #ffcc00, #ff6600, #ff0000)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "'Princess Sofia', cursive",
        letterSpacing: "2px",
      }}>✨ Welcome to Disney World ✨</h1>

      {/* Images Section */}
      <div className="container mb-5">
        <h2 className="text-center mb-4 fw-bold" style={{
          fontSize: "2rem",
          color: isNight ? "#ffccf9" : "#ff4da6",
          textShadow: "0px 0px 8px rgba(255,105,180,0.6)",
          fontFamily: "'Caveat', cursive",
        }}>🍉 Enchanted Memories</h2>
        <div className="row">
          {images.map((img, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card border-0 rounded-4 shadow-lg h-100" style={{
                backgroundColor: isNight ? "#2a2749" : "#fff0f8",
                border: `2px dashed ${isNight ? "#ffb6ea" : "#ff69b4"}`,
                overflow: "hidden",
              }}>
                <img src={`/images/${img}`} alt={`Disney ${index}`} className="card-img-top" style={{
                  height: "200px",
                  objectFit: "cover",
                  transition: "transform 0.4s ease-in-out",
                  cursor: "pointer",
                }} onMouseOver={e => e.target.style.transform = "scale(1.08)"}
                   onMouseOut={e => e.target.style.transform = "scale(1)"} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disney Highlights Section */}
      <div className="container mb-5">
        <div className="p-4 rounded-4 shadow-lg" style={{
          background: isNight ? "#2e294e" : "#fffaf0",
          borderLeft: "6px solid #ffcc00",
        }}>
          <h2 className="text-center fw-bold mb-4" style={{
            fontSize: "2rem",
            color: isNight ? "#ffd700" : "#ff6600",
            textShadow: "0 0 8px rgba(255,215,0,0.7)",
            fontFamily: "'Caveat', cursive",
          }}>🌟 Disney Highlights 🌟</h2>
          <div className="d-flex flex-column gap-3">
            {webHighlights.map((item, index) => (
              <div key={index} className="rounded-3 p-3 shadow-sm hover:shadow-lg transition" style={{
                background: isNight ? "#40376e" : "#fff",
                borderLeft: "5px solid #a78bfa",
              }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer"
                   className="text-decoration-none" style={{
                     color: isNight ? "#f5e6ff" : "#333",
                     fontWeight: "600",
                     fontSize: "1.1rem",
                     display: "block",
                     transition: "color 0.3s ease",
                   }}
                   onMouseOver={e => e.target.style.color = "#ff69b4"}
                   onMouseOut={e => e.target.style.color = isNight ? "#f5e6ff" : "#333"}>
                  ✨ {item.title}
                </a>
                <p className="small text-muted mb-0">{item.source.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-4">
        <button onClick={() => navigate("/magic-portal")} className="btn px-5 py-2" style={{
          backgroundColor: "#ff69b4",
          color: "white",
          borderRadius: "30px",
          fontSize: "1.2rem",
          fontFamily: "'Caveat', cursive",
          boxShadow: "0 0 15px #ff69b4, 0 0 30px #ffb6ea",
        }}>Let’s Go! 🧚‍♀️</button>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 pt-4 pb-3" style={{
        color: isNight ? "#e0d9ff" : "#5e437f",
        fontSize: "0.9rem",
      }}>
        <hr style={{ borderTop: "1px solid #aaa" }} />
        <p>© 2025 <strong style={{ color: "#A020F0", textShadow: "0 0 4px #dda0dd" }}>DisneyWorld Project</strong>. All rights reserved.<br />Made with 💜 and fairy dust ✨ by Anshu.</p>
      </footer>
    </div>
  );
}
