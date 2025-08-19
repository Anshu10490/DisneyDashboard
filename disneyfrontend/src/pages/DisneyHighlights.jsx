import { useEffect, useState } from "react";

export default function DisneyHighlights() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      const query = "latest Disney news movies characters";
      const res = await fetch(`https://api.duckduckgo.com/?q=${query}&format=json`);
      const data = await res.json();
      setHighlights(data.RelatedTopics.slice(0, 5));
    };
    fetchHighlights();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">📰 Disney Highlights</h2>
      <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
        {highlights.length > 0 ? (
          highlights.map((item, idx) => (
            <li key={idx}>
              {item.Text ? item.Text : "No content"}{" "}
              {item.FirstURL && (
                <a href={item.FirstURL} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  Read
                </a>
              )}
            </li>
          ))
        ) : (
          <p>Loading highlights...</p>
        )}
      </ul>
    </div>
  );
}
