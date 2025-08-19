// src/components/StarField.jsx
import React from "react";
import "../index.css"; // Make sure your star animations are here

export default function StarField() {
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
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              top: 0,
            }}
          ></div>
        );
      })}
    </div>
  );
}
