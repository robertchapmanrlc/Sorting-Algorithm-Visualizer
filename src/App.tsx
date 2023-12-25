import Dashboard from "./components/Dashboard/Dashboard";
import Explanation from "./components/Explanation/Explanation";
import SortingBars from "./components/SortingBars/SortingBars";

function App() {
  const bars: number[] = Array(16);

  for (let i = 0; i < bars.length; i += 1) {
    bars[i] = i + 1;
  }

  return (
    <>
      <div className="w-full h-full flex flex-col gap-y-10 justify-start items-center">
        <Dashboard />
        <SortingBars bars={bars}/>
        <Explanation />
      </div>
    </>
  );
}

export default App;
