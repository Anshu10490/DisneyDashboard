import { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;

          const apiKey = "3aa79e5ef18f42c486e965c4a759edcrfghhhfghgggggggggggggnm÷"; // 🔐 Replace this with your actual API key
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

          const res = await fetch(url);
          if (!res.ok) throw new Error("Failed to fetch weather data");

          const data = await res.json();
          setWeather(data);
        } catch (err) {
          setError(err.message);
        }
      },
      (err) => {
        setError("Permission denied for geolocation.");
      }
    );
  }, []);

  if (error) {
    return <p className="text-red-600">⚠️ {error}</p>;
  }

  return weather ? (
    <div className="p-4 bg-white rounded-xl shadow-md w-64 text-center">
      <h2 className="text-xl font-semibold mb-2">📍 Your Weather</h2>
      <p className="text-sm text-gray-700">{weather.name}</p>
      <p className="text-3xl font-bold">{weather.main.temp}°C</p>
      <p className="capitalize text-gray-600">{weather.weather[0].description}</p>
    </div>
  ) : (
    <p>Loading weather...</p>
  );
}
