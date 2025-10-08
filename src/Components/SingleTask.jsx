import React from "react";
import MoreBtn from "../assets/more_vert_24.svg";
import MainLogo from "../assets/pomo-track-logo-fill-24.svg";

export default function SingleTask({ title, totalPomo, completedPomo, note }) {
  return (
    <div className="py-5 my-4 bg-white rounded-lg px-2  text-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img src={MainLogo} alt="" />
          <p className="text-lg font-medium">This is the title.</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-gray-400">
            {2}/{3}
          </div>
          <img
            className="bg-gray-200 p-1 rounded cursor-pointer"
            src={MoreBtn}
            alt="More"
          />
        </div>
      </div>
      <p className="bg-yellow-50 rounded-lg p-2 my-2 ml-8 shadow">
        This is the notes
      </p>
    </div>
  );
}
