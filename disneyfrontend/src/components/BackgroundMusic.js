import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsBlocked(true); // autoplay blocked
        });
      }
    }

    document.addEventListener("visibilitychange", () => {
      if (
        document.visibilityState === "visible" &&
        audioRef.current?.paused
      ) {
        audioRef.current.play().catch(() => setIsBlocked(true));
      }
    });
  }, []);

  const handleManualPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsBlocked(false));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/soft-bg.mp3"
        loop
        autoPlay
        hidden
      />
      {isBlocked && (
        <button
          onClick={handleManualPlay}
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#ff69b4",
            color: "white",
            border: "none",
            fontFamily: "'Caveat', cursive",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          🎵 Click to Enable Music
        </button>
      )}
    </>
  );
}
