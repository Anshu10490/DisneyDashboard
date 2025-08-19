import { useState, useEffect } from "react";

export default function UserActivityTracker() {
  const [activities, setActivities] = useState(() => {
    const stored = localStorage.getItem("disney-activities");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");

  const addActivity = () => {
    const updated = [...activities, { id: Date.now(), name: input }];
    setActivities(updated);
    localStorage.setItem("disney-activities", JSON.stringify(updated));
    setInput("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">📋 Your Disney Activity</h2>
      <div className="flex gap-2 mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your action..."
          className="border rounded-md px-2 py-1 w-full"
        />
        <button
          onClick={addActivity}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
        >
          Add
        </button>
      </div>
      <ul className="list-decimal pl-5 mt-3 text-sm space-y-1 max-h-40 overflow-y-auto">
        {activities.length ? (
          activities.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <p className="text-gray-600 mt-2">No activity yet.</p>
        )}
      </ul>
    </div>
  );
}
