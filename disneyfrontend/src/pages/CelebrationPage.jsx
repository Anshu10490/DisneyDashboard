import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField";

export default function CelebrationPage() {
  return (
    <div
      className="min-h-screen px-4 py-12 text-center"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #fff3cd, #ffeeba, #fff9c4)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#f59e0b",
          textShadow: "0 0 6px #ffeeba"
        }}
      >
        🎉 Celebrate with Disney!
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        From royal coronations to grand festivals — enjoy Disney's most joyous celebrations!
      </p>

      <div className="row justify-content-center">
        {[
          {
            title: "Frozen",
            emoji: "❄️",
            image: "https://i0.wp.com/moviefail.com/wp-content/uploads/2014/03/frozen1.jpg"
          },
          {
            title: "Moana",
            emoji: "🌊",
            image: "https://variety.com/wp-content/uploads/2024/11/moana-2.jpg?w=1000&h=667&crop=1"
          },
          {
            title: "Raya and the Last Dragon",
            emoji: "🐉",
            image: " https://sm.mashable.com/t/mashable_in/photo/default/raya-and-the-last-dragon-review-this-kelly-marie-tran-awkwaf_82eb.1248.jpg"
          },
          {
            title: "Aladdin",
            emoji: "🕌",
            image: "https://i.pinimg.com/736x/14/e1/16/14e1163899de73224c1d9b6844131a6a.jpg"
          },
          {
            title: "Soul",
            emoji: "🎷",
            image: "https://lumiere-a.akamaihd.net/v1/images/au_homepage_soul_hero_m2_e90eaefa.jpeg?region=0,0,750,668"
          },
          {
            title: "Zootopia",
            emoji: "🦊",
            image: "https://lumiere-a.akamaihd.net/v1/images/pp_zootopia_herobanner_mobile_19736_5f8b1119.jpeg?region=0,0,640,480"
          },
          {
            title: "The Princess and the Frog",
            emoji: "🐸",
            image: "https://cdn.abcotvs.com/dip/images/886282_052715-cc-patf-2-img.jpg"
          },
          {
            title: "Wish Dragon",
            emoji: "🎈",
            image: "https://images.squarespace-cdn.com/content/v1/61085cc280adaa0476f29dbe/1628115853230-6IOPZ7Y0LV4207H1CJSF/character_FINAL_lineup_phase2art.jpg"
          },
          {
            title: "Turning Red",
            emoji: "🙋🏻‍♀️",
            image: "https://lumiere-a.akamaihd.net/v1/images/d0fe8c094accb5f217ce0135538c0aba_4096x2209_bff68f8f.jpeg?region=84%2C0%2C3928%2C2209"
          },
            {
                title: "The Greatest Showman",
                emoji: "🎪",
                image: "https://imageio.forbes.com/blogs-images/scottmendelson/files/2017/12/MV5BNzIyODc1OGYtYzljNC00MTc3LWJkNTUtYzZmYjNhYmM4MzQ5XkEyXkFqcGdeQXVyNzk5MTY4MTU@._V1_.jpg?format=jpg&height=600&width=1200&fit=bounds"
            },
            {
                title: "Coco",
                emoji: "🎸",
                image: "https://lumiere-a.akamaihd.net/v1/images/image_57ecff16.jpeg?region=0,0,640,480"
            },
            {
                title: "Encanto",
                emoji: "🏠",
                image: "https://sm.ign.com/t/ign_me/review/e/encanto-re/encanto-review_e29u.1024.jpg"
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
