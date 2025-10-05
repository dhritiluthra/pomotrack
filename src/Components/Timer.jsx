import { useState, useEffect } from "react";
import SkipNextImg from "../assets/skip-next-24.svg";

export default function Timer({
  activeTab,
  time,
  setActiveTab,
  setCount,
  count,
}) {
  const [secondsLeft, setSecondsLeft] = useState(time); // time in seconds
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart) return;
    if (secondsLeft === 0) {
      if (activeTab == "pomodoro") {
        setCount((prev) => ({ ...prev, focusCount: prev.focusCount + 1 }));
        if (count.focusCount % 4 === 0) {
          setActiveTab("long");
        } else {
          setActiveTab("short");
        }
      } else if (activeTab == "short") {
        setCount((prev) => ({ ...prev, breakCount: prev.breakCount + 1 }));
        setActiveTab("pomodoro");
      } else {
        setCount((prev) => ({ ...prev, breakCount: prev.breakCount + 1 }));
        setActiveTab("pomodoro");
      }
    }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [isStart, secondsLeft]);

  // convert seconds into MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="text-center">
      <h1 className="text-8xl font-semibold py-4">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </h1>

      <div className="flex justify-center items-center py-8">
        <button
          className="rounded bg-white text-teal-700 px-20 py-3 text-2xl font-semibold shadow-md"
          onClick={() => setIsStart((prev) => !prev)}
        >
          {isStart ? "PAUSE" : "START"}
        </button>

        <button
          className={`absolute right-12 ${isStart ? "" : "hidden"}`}
          onClick={() => {
            setSecondsLeft(0);
          }}
        >
          <img src={SkipNextImg} alt="Skip Next" />
        </button>
      </div>
    </div>
  );
}
