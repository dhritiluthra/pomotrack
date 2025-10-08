import React, { useEffect, useRef } from "react";
import DeleteImg from "../assets/delete_24.svg";

export default function AddTaskForm({ setTaskFormStatus, taskFormStatus }) {
  const formRef = useRef(null);

  useEffect(() => {
    //attaching global event listener to document after render
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setTaskFormStatus(""); // close form if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      className=" mx-auto bg-white rounded-xl shadow-md text-black"
      ref={formRef}
    >
      <div className="p-6 space-y-5">
        <input
          type="text"
          placeholder="What are you working on?"
          className="w-full text-xl italic placeholder-gray-400 focus:outline-none border-none"
        />

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

        <textarea
          placeholder="Add some notes..."
          className="w-full h-20 border border-gray-200 rounded-md bg-gray-50 text-gray-700 placeholder-gray-400 resize-none p-2 focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center gap-4 bg-gray-100 p-4 rounded-b-xl">
        <div>
          <img
            className={`bg-gray-200 p-1 rounded cursor-pointer ${
              taskFormStatus == "edit" ? "" : "hidden"
            }`}
            src={DeleteImg}
            alt="Delete"
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <button
            className="text-gray-500 hover:text-gray-700 px-5 py-2 rounded-md font-semibold bg-gray-200"
            type="button"
            onClick={() => {
              setTaskFormStatus("");
            }}
          >
            Cancel
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-semibold">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
