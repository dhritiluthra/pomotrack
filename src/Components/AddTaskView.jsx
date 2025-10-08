import React from "react";

export default function AddTaskView() {
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md text-black">
      <div className="p-6 space-y-5">
        {/* Input: Task name */}
        <input
          type="text"
          placeholder="What are you working on?"
          className="w-full text-xl italic placeholder-gray-400 focus:outline-none border-none"
        />

        {/* Est. Pomodoros */}
        <div>
          <label className="font-semibold block mb-2">Est Pomodoros</label>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center border rounded-md px-3 py-1 text-lg font-medium">
              2
            </div>
            <div className="flex gap-4">
              <button className="border rounded-t-md px-2  bg-gray-100 hover:bg-gray-200">
                ▲
              </button>
              <button className="border rounded-b-md px-2  bg-gray-100 hover:bg-gray-200">
                ▼
              </button>
            </div>
          </div>
        </div>

        {/* Notes */}
        <textarea
          placeholder="Add some notes..."
          className="w-full h-20 border border-gray-200 rounded-md bg-gray-50 text-gray-700 placeholder-gray-400 resize-none p-2 focus:outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-4 bg-gray-100 p-4 rounded-b-xl">
        <button className="text-gray-500 hover:text-gray-700">Cancel</button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-md font-semibold">
          Save
        </button>
      </div>
    </div>
  );
}
