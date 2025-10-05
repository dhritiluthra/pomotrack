import "./App.css";
import Header from "./Components/Header";
import PomoDoro from "./Components/PomoDoro";
import PomoInfo from "./Components/PomoInfo";

function App() {
  return (
    <>
      <div className="font-sans">
        <Header />
        <PomoDoro />
        <PomoInfo />
      </div>
    </>
  );
}

export default App;
