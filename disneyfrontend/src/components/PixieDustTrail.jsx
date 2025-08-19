import React, { useEffect } from "react";

export default function PixieDustTrail() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .pixie {
        position: absolute;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #fff4fb, #ffb6c1);
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.9;
        animation: fadeOut 0.8s ease-out forwards;
        z-index: 9999;
      }

      @keyframes fadeOut {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    const sparkle = (e) => {
      const dot = document.createElement("div");
      dot.className = "pixie";
      dot.style.left = `${e.pageX}px`;
      dot.style.top = `${e.pageY}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    };

    window.addEventListener("mousemove", sparkle);
    return () => window.removeEventListener("mousemove", sparkle);
  }, []);

  return null;
}
