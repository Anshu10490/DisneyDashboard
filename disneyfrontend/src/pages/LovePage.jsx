import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField"; // star background

export default function LovePage() {
  const loveMovies = [
    {
      title: "Tangled",
      emoji: "✨",
      img: "https://ellethinks.wordpress.com/wp-content/uploads/2020/04/156492-popular-tangled-wallpaper-1920x1200-htc.jpg"
    },
    {
      title: "Beauty and the Beast",
      emoji: "💑",
      img: "https://images.bauerhosting.com/legacy/empire-tmdb/films/10020/images/q8OEC91NiJOpghWI9hXtC27nFX0.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
    },
    {
      title: "Cinderella",
      emoji: "🌹",
      img: "https://images.immediate.co.uk/production/volatile/sites/28/2019/02/disneys-new-cinderella-movie-is-it-better-than-the-original_85936-cf3489d.jpg?quality=90&resize=610,407"
    },
    {
      title: "Enchanted",
      emoji: "💘",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/enchanted-2-sequel-amy-adams.jpg"
    },
    {
      title: "Lady and the Tramp",
      emoji: "💌",
      img: "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1673487615789-AAJQGL1Z6CGYAF391M9H/Art_of_Lady_and_the_Tramp_369.jpg"
    },
    {
      title: "Aladdin",
      emoji: "🕌",
      img: "https://www.hollywoodreporter.com/wp-content/uploads/2018/07/aladdin_still.jpg?w=1296&h=730&crop=1"
    },
    {
      title: "The Princess and the Frog",
      emoji: "🐸",
      img: "https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2010/1/28/1264698571923/The-Princess-And-The-Frog-001.jpg?width=465&dpr=1&s=none&crop=none"
    },
    {
      title: "Frozen",
      emoji: "❄️",
      img: "https://lumiere-a.akamaihd.net/v1/images/pp_frozen_herobanner_20501_185ef872.jpeg"
    },
    {
      title: "Up",
      emoji: "🎈",
      img: "https://d23.com/app/uploads/2019/05/1180-x-600_up-easter-eggs-1.jpg"
    },
    {
      title: "Wall-E",
      emoji: "🤖",
      img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/35cfba9c-4362-4ffd-9718-418343436b1a/Space8.jpg"
    },
    {
      title: "The Little Mermaid II",
      emoji: "🏝️",
      img: "https://ew.com/thmb/yxmC4QOQqk3S4ODCD9J9rlK_X1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/little-mermaid-cartoon-21518-39-2000-7af8322fdb9643cab7cfa74feb1cc831.jpg"
    },
    {
      title: "Atlantis",
      emoji: "🐬",
      img: "https://www.syfy.com/sites/syfy/files/2020/08/atlantis-the-lost-empire.jpg"
    },
    {
      title: "Bambi",
      emoji: "🦌",
      img: "https://wallpapercat.com/w/full/4/6/3/1070501-3840x2160-desktop-4k-bambi-1942-background.jpg"
    },
    {
      title: "Elemental",
      emoji: "🔥💧",
      img: "https://d23.com/app/uploads/2023/06/1180w-600h_062223_Elemental_Characters_00.jpg"
    },
    {
      title: "Luca",
      emoji: "🌊🐟",
      img: "https://sartorialgeek.com/wp-content/uploads/2021/08/Film-Review-Disney-Pixar-Luca.jpeg"
    }
    
    

  ];

  return (
    <div
      className="min-h-screen px-4 py-12 text-center"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #ffd1dc, #ffc4d6, #ffb6c1)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#d6336c",
          textShadow: "0 0 6px #ffc4d6"
        }}
      >
        💖 Love Stories from Disney
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        Celebrate the magic of love in all forms — fairytales, friendships, and families!
      </p>

      <div className="row justify-content-center">
        {loveMovies.map((movie, idx) => (
          <div key={idx} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow rounded-4 border-0 h-100 p-2" style={{ backgroundColor: "#fff0f6" }}>
              <img
                src={movie.img}
                alt={movie.title}
                className="rounded-4 mb-2"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <h5 className="text-dark mt-2">
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
          backgroundColor: "#ff69b4",
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
