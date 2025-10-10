import React, { useState } from "react";
import tasks from "../taskData";
import SingleTask from "./SingleTask";
import AddTaskForm from "./AddTaskForm";

export default function TaskManager() {
  const [taskFormStatus, setTaskFormStatus] = useState("");
  const [taskData, setTaskData] = useState(tasks);
  const [editingTaskId, setEditingTaskId] = useState("");

  const handleAddTask = () => {
    setTaskFormStatus("add");
  };

  return (
    <div className="max-w-xl py-4 mx-auto  text-white text-sm">
      <p className="text-lg border-b-2 py-3">Tasks</p>

      {taskData.map((task) => {
        return (
          <SingleTask
            key={task.id}
            taskId={task.id}
            title={task.title}
            totalPomo={task.pomos}
            completedPomo={task.completed}
            note={task.note}
            setTaskFormStatus={setTaskFormStatus}
            setEditingTaskId={setEditingTaskId}
          />
        );
      })}

      <button
        className={`w-full my-6 py-5 border-2 border-dashed border-gray-400 rounded-lg text-lg ${
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
          setTaskData={setTaskData}
          editingTaskId={editingTaskId}
          setEditingTaskId={setEditingTaskId}
          taskData={taskData}
        />
      ) : (
        ""
      )}
    </div>
  );
}
