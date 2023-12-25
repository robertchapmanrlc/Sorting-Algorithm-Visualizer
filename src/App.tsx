import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import Explanation from "./components/Explanation/Explanation";
import SortingBars from "./components/SortingBars/SortingBars";

function App() {
  const [bars, setBars] = useState(Array(16).fill(0));

  useEffect(() => {
    let barsCopy = [...bars];
    for (let i = 0; i < bars.length; i += 1) {
      barsCopy[i] = i + 1;
    }
    setBars([...barsCopy]);
  });

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
