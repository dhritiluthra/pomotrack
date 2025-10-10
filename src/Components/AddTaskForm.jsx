import React, { useEffect, useRef, useState } from "react";
import DeleteImg from "../assets/delete_24.svg";
import taskData from "../taskData";
import { use } from "react";
import CounterInput from "./CounterInput";

export default function AddTaskForm({
  setTaskFormStatus,
  taskFormStatus,
  setTaskData,
  editingTaskId,
  setEditingTaskId,
  taskData,
}) {
  const formRef = useRef(null);
  const [newTask, setNewTask] = useState({
    title: "",
    estPomo: 0,
    note: "",
    completed: "",
  });

  useEffect(() => {
    if (editingTaskId) {
      console.log(taskData);
      const taskToEdit = taskData.find((task) => task.id === editingTaskId);

      if (taskToEdit) {
        setNewTask({
          title: taskToEdit.title,
          estPomo: taskToEdit.pomos, // careful: in taskData you used "pomos"
          note: taskToEdit.note,
          completed: taskToEdit.completed,
        });
      }
    }
  }, [editingTaskId, taskData]);

  const handleOnChangeIp = (e, inputId) => {
    setNewTask((prev) => ({
      ...prev,
      [inputId]: e.target.value,
    }));
  };

  useEffect(() => {
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

  const handleSave = () => {
    console.log("Saving task:", newTask);

    if (editingTaskId) {
      const editedTask = {
        id: editingTaskId,
        pomos: newTask.estPomo,
        title: newTask.title,
        note: newTask.note,
        completed: newTask.completed,
      };
      setTaskData((prev) => {
        return prev.map((task) => {
          if (editingTaskId === task.id) {
            return editedTask;
          } else {
            return task;
          }
        });
      });

      setEditingTaskId("");
    } else {
      const newAdded = {
        id: crypto.randomUUID(),
        pomos: newTask.estPomo,
        title: newTask.title,
        note: newTask.note,
        completed: 0,
      };
      setTaskData((prev) => {
        return [...prev, newAdded];
      });
    }

    setTaskFormStatus("");
  };

  const handleDelete = () => {
    setTaskData((prev) => {
      return prev.filter((task) => {
        return task.id != editingTaskId;
      });
    });
    setEditingTaskId("");
    setTaskFormStatus("");
  };
  return (
    <form
      className="mx-auto bg-white rounded-xl shadow-md text-black"
      ref={formRef}
      onSubmit={(e) => e.preventDefault()} // stop page reload
    >
      <div className="p-6 space-y-5">
        {/* Title */}
        <input
          type="text"
          placeholder="What are you working on?"
          className="w-full text-xl italic placeholder-gray-400 focus:outline-none border-none"
          value={newTask.title}
          onChange={(e) => handleOnChangeIp(e, "title")}
        />

        {/* Est Pomodoros */}
        <div>
          <label className="font-semibold block mb-2">Est Pomodoros</label>

          <div className="flex gap-6">
            {editingTaskId && (
              <CounterInput
                value={newTask.completed}
                setNewTask={setNewTask}
                newTaskKey={"completed"}
              />
            )}
            {editingTaskId && <p className="text-xl">/</p>}
            <CounterInput
              value={newTask.estPomo}
              setNewTask={setNewTask}
              newTaskKey={"estPomo"}
            />
          </div>
        </div>

        {/* Notes */}
        <textarea
          placeholder="Add some notes..."
          className="w-full h-20 border border-gray-200 rounded-md bg-gray-50 text-gray-700 placeholder-gray-400 resize-none p-2 focus:outline-none"
          value={newTask.note}
          onChange={(e) => handleOnChangeIp(e, "note")}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center gap-4 bg-gray-100 p-4 rounded-b-xl">
        <div>
          <img
            className={`bg-gray-200 p-1 rounded cursor-pointer ${
              taskFormStatus === "edit" ? "" : "hidden"
            }`}
            src={DeleteImg}
            alt="Delete"
            onClick={handleDelete}
          />
        </div>
        <div className="flex justify-end items-center gap-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 px-5 py-2 rounded-md font-semibold bg-gray-200"
            onClick={() => {
              setTaskFormStatus("");
              setEditingTaskId("");
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
