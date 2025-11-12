import React from "react";
import MoreBtn from "../assets/more_vert_24.svg";
import MainLogo from "../assets/pomo-track-logo-fill-24.svg";

export default function SingleTask({
  taskId,
  title,
  totalPomo,
  completedPomo,
  note,
  setTaskFormStatus,
  setEditingTaskId,
  setSelectedTaskId,
}) {
  return (
    <div
      className="py-5 my-4 bg-white rounded-lg px-2  text-black outline "
      onClick={() => {
        setSelectedTaskId(taskId);
        console.log(taskId);
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img src={MainLogo} alt="" />
          <p className="text-lg font-medium">{title}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-gray-400">
            {completedPomo}/{totalPomo}
          </div>
          <img
            className="bg-gray-200 p-1 rounded cursor-pointer"
            src={MoreBtn}
            alt="More"
            onClick={() => {
              console.log("setEditingTaskId");
              setEditingTaskId(taskId);
              setTaskFormStatus("edit");
            }}
          />
        </div>
      </div>
      {note && (
        <p className="bg-yellow-50 rounded-lg p-2 my-2 ml-8 shadow">{note}</p>
      )}
    </div>
  );
}
