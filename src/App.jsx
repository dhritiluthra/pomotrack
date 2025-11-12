import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import PomoDoro from "./Components/PomoDoro";
import PomoInfo from "./Components/PomoInfo";
import TaskManager from "./Components/TaskManager";
import tasks from "./taskData";

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [taskData, setTaskData] = useState(tasks);
  return (
    <>
      <div className="font-varela">
        <div className="px-4 py-4 mx-auto text-white bg-teal-600 font-varela">
          <Header />
          <PomoDoro selectedTaskId={selectedTaskId} taskData={taskData} />
          <TaskManager
            setSelectedTaskId={setSelectedTaskId}
            selectedTaskId={selectedTaskId}
            taskData={taskData}
            setTaskData={setTaskData}
          />
        </div>
        <PomoInfo />
      </div>
    </>
  );
}

export default App;
