import React from "react";
import tasks from "../taskData";
import SingleTask from "./SingleTask";
import AddTaskView from "./AddTaskView";

export default function TaskManager() {
  return (
    <div className="max-w-xl py-4 mx-auto  text-white text-sm">
      <p className="font-semibold text-md border-b-2 py-3">Tasks</p>

      {tasks.map((task) => {
        return (
          <SingleTask
            title={task.title}
            totalPomo={task.title}
            completedPomo={task.title}
            note={task.title}
          />
        );
      })}
      <button className="w-full my-6 py-5 border-2 border-dashed border-gray-400 rounded-lg">
        Add Task
      </button>

      <AddTaskView />
    </div>
  );
}
