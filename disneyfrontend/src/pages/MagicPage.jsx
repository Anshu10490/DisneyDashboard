import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField";

export default function MagicPage() {
  return (
    <div
      className="min-h-screen px-4 py-12 text-center"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #d0f0fd, #e0c3fc, #f9f0ff)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#8a2be2",
          textShadow: "0 0 6px #e0c3fc"
        }}
      >
        🧺 Magical Disney Adventures
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        Enter a world of enchantment, spells, talking animals, and fairy godmothers! ✨
      </p>

      <div className="row justify-content-center">
        {[
          {
            title: "Encanto",
            emoji: "🏠",
            image: "https://livewire.thewire.in/wp-content/uploads/2022/03/g_encanto_1_21512_9af56359.jpeg"
          },
          {
            title: "Frozen II",
            emoji: "🌀",
            image: "https://images.moviesanywhere.com/62b4c7ed71a8431a4bbee9a38aebb2df/b3f61187-1c5a-4404-8cc2-37acd4a6648f.jpg?w=2560&r=16x9"
          },
          {
            title: "Coco",
            emoji: "🎸",
            image: "https://imageio.forbes.com/blogs-images/robcain/files/2017/11/Coco.jpeg?format=jpg&height=600&width=1200&fit=bounds"
          },
          {
            title: "Onward",
            emoji: "🌈",
            image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/d2fdd971-b38f-45f8-b6b8-84ee4ea73998/ONWARD_4C_TEASER_1SHEET_ART_LAYERS.jpg"
          },
          {
            title: "The Sorcerer's Apprentice",
            emoji: "🧙",
            image: "https://ntvb.tmsimg.com/assets/p7947752_v_h10_aa.jpg?w=1280&h=720"
          },
          {
            title: "Tinker Bell",
            emoji: "🧚",
            image: "https://i.ytimg.com/vi/z-jrTk-nqpQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDm46b-f7tGkYQLhwsJ1T1mRQuxPg"
          },
          {
            title: "The Nutcracker and the Four Realms",
            emoji: "🎁",
            image: "https://www.rogerebert.com/wp-content/uploads/2024/07/The-Nutcracker-and-the-Four-Realms.jpg"
          },
          {
            title: "Alice in Wonderland",
            emoji: "🐇",
            image: "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/e8/b2c8ac80121c162d862acef252dd3201_1280x720.jpg?t=1641807036"
          }
        ].map((movie, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <div className="card shadow border-0 h-100">
              <img
                src={movie.image}
                alt={movie.title}
                className="card-img-top rounded-top"
                style={{ height: "260px", objectFit: "cover" }}
              />
              <div className="card-body bg-white">
                <h5 className="card-title">
                  {movie.emoji} {movie.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/explore"
        className="btn mt-5"
        style={{
          backgroundColor: "#8a2be2",
          color: "white",
          fontFamily: "'Caveat', cursive",
          fontSize: "1.2rem"
        }}
      >
        ⬅️ Back to Explore
      </Link>
    </div>
  );
}
