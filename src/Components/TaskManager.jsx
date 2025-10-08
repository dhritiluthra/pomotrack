import React, { useState } from "react";
import tasks from "../taskData";
import SingleTask from "./SingleTask";
import AddTaskForm from "./AddTaskForm";

export default function TaskManager() {
  const [taskFormStatus, setTaskFormStatus] = useState("");

  const handleAddTask = () => {
    setTaskFormStatus("add");
  };

  return (
    <div className="max-w-xl py-4 mx-auto  text-white text-sm">
      <p className="text-lg border-b-2 py-3">Tasks</p>

      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            title={task.title}
            totalPomo={task.title}
            completedPomo={task.title}
            note={task.title}
            setTaskFormStatus={setTaskFormStatus}
          />
        );
      })}

      <button
        className={`w-full my-6 py-5 border-2 border-dashed border-gray-400 rounded-lg ${
          taskFormStatus != "" ? "hidden" : ""
        }`}
        onClick={handleAddTask}
      >
        Add Task
      </button>
      {taskFormStatus != "" ? (
        <AddTaskForm
          setTaskFormStatus={setTaskFormStatus}
          taskFormStatus={taskFormStatus}
        />
      ) : (
        ""
      )}
    </div>
  );
}
