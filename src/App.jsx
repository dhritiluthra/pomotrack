import "./App.css";
import Header from "./Components/Header";
import PomoDoro from "./Components/PomoDoro";
import PomoInfo from "./Components/PomoInfo";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <>
      <div className="font-varela">
        <div className="px-4 py-4 mx-auto text-white bg-teal-600 font-varela">
          <Header />
          <PomoDoro />
          <TaskManager />
        </div>
        <PomoInfo />
      </div>
    </>
  );
}

export default App;
