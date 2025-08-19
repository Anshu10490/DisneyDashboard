import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField";

export default function BraveryPage() {
  const braveryMovies = [
    {
      title: "Mulan",
      emoji: "⚔️",
      img: "https://lumiere-a.akamaihd.net/v1/images/2024_hb_disneyprincess_mulan_mobile_3497_36a691ee.jpeg?region=0%2C0%2C1024%2C768"
    },
    {
      title: "Brave",
      emoji: "🏹",
      img: "https://static01.nyt.com/images/2012/06/17/arts/17BRAVE1_SPAN/17BRAVE1-superJumbo.jpg"
    },
    {
      title: "The Lion King",
      emoji: "🦁",
      img: "https://m.media-amazon.com/images/M/MV5BNTQxNzU4NTY2OF5BMl5BanBnXkFtZTcwNzQ2NTI3Ng@@._V1_.jpg"
    },
    {
      title: "Hercules",
      emoji: "💪",
      img: "https://www.intofilm.org/intofilm-production/scaledcropped/3000x1688https%3A/intofilm-buckets-production-305862963141-resources.s3.eu-west-1.amazonaws.com/intofilm-production/uploads/Hercules-image-1-Disney.jpg/Hercules-image-1-Disney.jpg"
    },
    {
      title: "Moana",
      emoji: "🌊",
      img: "https://th-thumbnailer.cdn-si-edu.com/Ice7ekfhoyzD8LJirBMoPlMi4KY=/1024x576/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ec/4d/ec4d7a4d-f8ec-477b-a919-b8e4c3d8baec/moana-disney-still-new.jpg"
    },
    {
      title: "Frozen II",
      emoji: "❄️",
      img: "https://d23.com/app/uploads/2019/11/1180w-600h_111819_meet-the-frozen-2-characters-780x440-1574117145.jpg"
    },
    {
        title: "Big Hero 6",
        emoji: "🦸🏻",
        img: "https://lumiere-a.akamaihd.net/v1/images/h_bighero6_mobile_19753_ca3aa46f.jpeg?region=0,0,640,480"
      },
      {
        title: "Ratatouille",
        emoji: "🧀",
        img: "https://static01.nyt.com/images/2007/06/28/arts/29rat600.1.jpg"
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        emoji: "🕷️",
        img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/57a69630-2633-4be8-8e33-3621465219ca/compose?aspectRatio=1.78&format=webp&width=1200"
      }
  ];

  return (
    <div
      className="min-h-screen px-4 py-12 text-center font-bold"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#d97706",
          textShadow: "0 0 6px #ffe6b3"
        }}
      >
        🦁 Bravery in Disney Legends
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        Heroes rise with courage, even when the odds are against them.
      </p>

      <div className="row justify-content-center">
        {braveryMovies.map((movie, idx) => (
          <div key={idx} className="col-md-4 col-sm-6 mb-4">
            <div
              className="card shadow rounded-4 border-0 h-100 p-2"
              style={{ backgroundColor: "#fff9f0" }}
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="rounded-4 mb-2 font-bold"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <h5 className="text-dark mt-2 font-bold">
                {movie.emoji} {movie.title}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/explore"
        className="btn mt-4"
        style={{
          backgroundColor: "#f59e0b",
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
