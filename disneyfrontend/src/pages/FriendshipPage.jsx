import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField";

export default function FriendshipPage() {
  return (
    <div
      className="min-h-screen px-4 py-12 text-center"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #dafbe4, #c3f0f5, #ddf3fc)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#1d7874",
          textShadow: "0 0 6px #b0f0ec"
        }}
      >
        🤝 Friendship Magic in Disney
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        These stories celebrate trust, loyalty, and the power of true friends. 🧡
      </p>

      <div className="row justify-content-center">
        {[
          {
            title: "Toy Story",
            emoji: "🤠",
            image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/862/images/dji4Fm0gCDVb9DQQMRvAI8YNnTz.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
          },
          {
            title: "Lilo & Stitch",
            emoji: "🌺",
            image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2025/05/lilo-stitch.jpg"
          },
          {
            title: "The Fox and the Hound",
            emoji: "🦊🐶",
            image: "https://ew.com/thmb/CJnmA-PqjCPZh8dthr5Mur8GfD8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fox-hound-39cb3888f3374bf79a9125f922369705.jpg"
          },
          {
            title: "Monsters, Inc.",
            emoji: "👾",
            image: "https://lumiere-a.akamaihd.net/v1/images/h_monstersinc_mobile_19751_af756177.jpeg?region=0,0,640,480"
          },
          {
            title: "Finding Nemo",
            emoji: "🐠",
            image: "https://www.rollingstone.com/wp-content/uploads/2023/05/Finding-Nemo-Anniversary.jpg?w=1581&h=1054&crop=1"
          },
          {
            title: "Inside Out",
            emoji: "🧠",
            image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25446169/emotion_colorlineup_rliu.concept16.jpg?quality=90&strip=all&crop=0,0,100,100"
          },
          {
            title: "Wreck-It Ralph",
            emoji: "🎮",
            image: "https://www.celjaded.com/wp-content/uploads/2015/02/CelJaded-Wreck-it-Ralph-Review-Banner.jpg"
          },
          {
            title: "Raya and the Last Dragon",
            emoji: "🐉",
            image: "https://thedisinsider.com/wp-content/uploads/2021/03/raya-and-the-last-dragon-movie-5k-si-1280x720-1.jpg"
          },
          {
            title: "The Emperor’s New Groove",
            emoji: "🦙",
            image: "https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__2987-the-emperor-s-new-groove--hi_res-150a6292.jpg/film__2987-the-emperor-s-new-groove--hi_res-150a6292.jpg"
          },
          {
            title: "The Jungle Book",
            emoji: "🐻",
            image: "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6595/1596595-i-f29a7af5c17d"
          },
          {
            title: " DuckTales the Movie: Treasure of the Lost Lamp",
            emoji: "🦆",
            image: "https://decider.com/wp-content/uploads/2020/08/ducktales-treasure-lost-lamp.jpg?quality=75&strip=all"
          },
          {
            title: "The Great Mouse Detective",
            emoji: "🐭",
            image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/9994/images/A0enTetqBfL3UqLPyg0MONLQDXN.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
          },
          {
            title: "Spirit: Stallion of the Cimarron",
            emoji: "🐎",
            image: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ2H2mfoK6XUuDU8BGc66mA3L5u4Ed5a1SZNI2pGTHr7vqsnsyq4ekfyH71vD4wypwYcC39tgrWdOpdUy4_hhw6V1FgO1Niw4Dk9.jpg?r=9f4"
          },
          {
            title: "Buzz Lightyear of Star Command: The Adventure Begins",
            emoji: "🚀",
            image: "https://images.justwatch.com/backdrop/263861621/s640/buzz-lightyear-of-star-command-the-adventure-begins"
          },
          {
            title: "Oliver & Company",
            emoji: "🐱",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiF_kcN7kqiaZka7SjWaWSMC471OP43FQsbclkOtug4dnIS0M-l91JPs6ltwELbaO-2jh42DSmH7N_8II01cgjF7BpwhO9hxXkFoE1aC9f4q6SNrMqVEGFflzezcBZ7cZUbGRxZpdzqLphr/s1212/oliverdodger.jpg"
          },
          {
            title: "Pete’s Dragon",
            emoji: "🐉",
            image: "https://i.scdn.co/image/ab67616d0000b2732ce5b0d2952132d9c9e5e615"
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
          backgroundColor: "#1d7874",
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
