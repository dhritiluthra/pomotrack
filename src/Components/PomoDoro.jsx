import React, { useState } from "react";
import Timer from "./Timer";

export default function PomoDoro() {
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [count, setCount] = useState({
    focusCount: 1,
    breakCount: 1,
  });

  const tabs = [
    { id: "pomodoro", label: "Pomodoro" },
    { id: "short", label: "Short Break" },
    { id: "long", label: "Long Break" },
  ];
  const durations = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  };
  return (
    <>
      <div className="my-8 mx-auto max-w-xl bg-gray-300/20 relative rounded-lg">
        <ul className="flex gap-4 justify-center my-4 px-4 py-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 rounded ${
                  activeTab === tab.id ? "bg-teal-600 font-semibold" : ""
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4">
          <Timer
            key={activeTab} // force remount to reset state completely  // force re-mount to reset time
            activeTab={activeTab}
            time={durations[activeTab]}
            setActiveTab={setActiveTab}
            setCount={setCount}
            count={count}
          />
        </div>
      </div>
      <div className="my-8 mx-auto max-w-2xl">
        {activeTab != "pomodoro" ? (
          <>
            <p className="text-center">#{count.breakCount}</p>
            <p className="text-center">Time for a break!</p>
          </>
        ) : (
          <>
            <p className="text-center">#{count.focusCount}</p>
            <p className="text-center">Time to focus!</p>
          </>
        )}
      </div>
    </>
  );
}
