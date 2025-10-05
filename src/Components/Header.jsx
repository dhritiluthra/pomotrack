import React from "react";
import ReportImg from "../assets/report.svg";
import MainLogo from "../assets/pomo-track-logo-fill-24.svg";
import SettingsImg from "../assets/settings-18.svg";

export default function Header() {
  return (
    <div className="max-w-4xl px-4 pb-4 mx-auto flex justify-between text-white border-b border-b-black/20">
      <div className="flex gap-1 items-center">
        <img src={MainLogo} alt="PomoTrack" />
        <span className="text-xl font-semibold">Pomotrack</span>
      </div>
      <button className="flex items-center justify-center px-2 py-1 rounded-md gap-2 bg-gray-300/20">
        <img src={ReportImg} alt="Report" className="text-white" />
        <span className="text-sm">Report</span>
      </button>
    </div>
  );
}
