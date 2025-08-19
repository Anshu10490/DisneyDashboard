import React from "react";
import { Link } from "react-router-dom";
import StarField from "../components/StarField";

export default function FamilyPage() {
  return (
    <div
      className="min-h-screen px-4 py-12 text-center"
      style={{
        fontFamily: "'Comic Neue', cursive",
        background: "linear-gradient(135deg, #ffe5b4, #ffcf9f, #ffd8b1)",
        backgroundSize: "500% 500%",
        animation: "barbieGradient 18s ease infinite"
      }}
    >
      <StarField />

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          fontFamily: "'Princess Sofia', cursive",
          color: "#b35a00",
          textShadow: "0 0 6px #ffd8b1"
        }}
      >
        👨‍👩‍👧 Disney's Family Stories
      </h1>

      <p className="mb-4 fs-5" style={{ fontFamily: "'Handlee', cursive" }}>
        Dive into heartfelt adventures where family comes first!
      </p>

      <div className="row justify-content-center">
        {[
          {
            title: "Brother Bear",
            emoji: "🧸",
            image:
              "https://mutantreviewersmovies.com/wp-content/uploads/2014/05/brother-bear.jpg"
          },
          {
            title: "Mary Poppins Returns",
            emoji: "🌸",
            image:
              "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/5626/1375626-i-2cf6632fd816"
          },
          {
            title: "The Incredibles",
            emoji: "💪",
            image:
              "https://compote.slate.com/images/05ed6e06-6d47-46bc-8f8b-3c1e418a7e46.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
          },
          {
            title: "Dumbo",
            emoji: "🐘",
            image:
              "https://cdn.britannica.com/26/175326-050-8E3D0CF1/scene-Dumbo.jpg"
          },
          {
            title: "Christopher Robin",
            emoji: "🎈",
            image:
              "https://cdn.britannica.com/24/213924-050-93FA0392/Television-publicity-still-Owl-Christopher-Robin-Kanga-Tigger-Eeyore-Winnie-the-Pooh-Piglet-1988.jpg"
          },
          {
            title: "101 Dalmatians",
            emoji: "🐾",
            image:
              "https://www.usatoday.com/gcdn/-mm-/44e7b49d73e88b1d981c9cd5164e3c6541350e20/c=0-278-3000-1973/local/-/media/2015/02/04/USATODAY/USATODAY/635586718209374247-XXX-101-DALMATIANS-MOV-JY-1627-70560192.JPG"
          },
          {
            title: "Turning Red",
            emoji: "🐼",
            image:
              "https://sm.mashable.com/mashable_in/article/i/in-turning/in-turning-red-fandom-is-freedom_99qc.jpg"
          },
          {
            title: "The Good Dinosaur",
            emoji: "🦕",
            image:
              "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13080559/The_Good_Dinosaur_Pixar_3.0.0.1448374239.jpeg?quality=90&strip=all&crop=5.0479808076769,0,89.904038384646,100"
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
          backgroundColor: "#ff8c00",
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
