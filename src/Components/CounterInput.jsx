import React from "react";

export default function CounterInput({
  setNewTask = { setNewTask },
  newTaskKey = { newTaskKey },
  value = { value },
}) {
  const handleIncrement = () => {
    setNewTask((prev) => ({ ...prev, [newTaskKey]: prev[newTaskKey] + 1 }));
  };

  const handleDecrement = () => {
    setNewTask((prev) => ({
      ...prev,
      [newTaskKey]: prev[newTaskKey] > 0 ? prev[newTaskKey] - 1 : 0,
    }));
  };
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center justify-center border rounded-md px-3 py-1 text-lg font-medium">
        {value}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleIncrement}
          className="border rounded p-2 bg-gray-100 hover:bg-gray-200"
        >
          ▲
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="border rounded p-2 bg-gray-100 hover:bg-gray-200"
        >
          ▼
        </button>
      </div>
    </div>
  );
}
