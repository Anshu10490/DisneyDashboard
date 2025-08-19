import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import backgroundVideo from "../assets/backgroundVideo.mp4";

export default function MagicPortal() {
  const { isNight } = useTheme();
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/movies/search?title=${encodeURIComponent(query)}`
      );
      setMovie(res.data);
    } catch (err) {
      alert("Movie not found!");
      setMovie(null);
    }
  };

  const getYouTubeEmbed = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return null;
  };

  return (
    <div
      className="position-relative text-center d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover", zIndex: -1 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 👑 Title */}
      <h1
  className="display-4 mt-4"
  style={{
    color: "#c2185b", // Dark pink (Barbie shade)
    fontFamily: "'Princess Sofia', cursive",
    textShadow: `
      0 0 5px #ff69b4,
      0 0 10px #ff1493,
      0 0 20px #ba55d3,
      0 0 30px #ff69b4
    `,
  }}
>
  🪄 CineQuest Portal 
</h1>


      {/* 🔍 Search */}
      <div
        className="input-group mt-4 mb-3"
        style={{
          maxWidth: "400px",
          boxShadow: "0 0 15px 5px rgba(255, 105, 180, 0.6)",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            color: "#c2185b", // Dark pink text
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            fontWeight: "600",
            border: "2px solid #ffb6c1",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        />
        <button
          className="btn btn-pink"
          style={{
            background: "#ff69b4",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* 🎬 Movie Trailer */}
      {movie && (
        <div className="mt-4" style={{ color: "#fff" }}>
          <h2 style={{ textShadow: "0 0 5px #ff69b4" }}>{movie.title}</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>{movie.description}</p>
          {getYouTubeEmbed(movie.trailer_url) ? (
            <iframe
              width="500"
              height="300"
              className="rounded-4 shadow-lg mt-3"
              style={{ border: "2px solid pink" }}
              src={getYouTubeEmbed(movie.trailer_url)}
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          ) : (
            <video
              controls
              width="500"
              className="rounded-4 shadow-lg mt-3"
              style={{ border: "2px solid pink" }}
            >
              <source src={movie.trailer_url} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
