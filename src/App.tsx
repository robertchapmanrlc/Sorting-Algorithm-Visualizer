import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard";
import Explanation from "./components/Explanation/Explanation";
import SortingBars from "./components/SortingBars/SortingBars";

import { algorithms } from "./lib/algoritm-descriptions";
import { BubbleSort, InsertionSort, MergeSort, QuickSort, shuffle } from "./utils/methods";

function App() {
  const [bars, setBars] = useState(Array(50).fill(0));
  const [algorithm, setAlgorithm] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    let barsCopy = [...bars];
    for (let i = 0; i < bars.length; i += 1) {
      barsCopy[i] = i + 1;
    }
    shuffle(barsCopy);
    setBars([...barsCopy]);
    setAlgorithm(algorithms[0].name);
    setDescription(algorithms[0].description);
  }, []);

  const changeBarsSize = (newSize: number) => {
    let barsCopy = Array(newSize).fill(0);
    for (let i = 0; i < newSize; i += 1) {
      barsCopy[i] = i + 1;
    }
    shuffle(barsCopy);
    setBars([...barsCopy]);
  }

  const changeAlgorithm = (alg: number) => {
    setAlgorithm(algorithms[alg].name);
    setDescription(algorithms[alg].description);
  }

  const sortBars = () => {
    let barsCopy = [...bars];
    if (algorithm == 'Bubble Sort') {
      BubbleSort(barsCopy);
      setBars([...barsCopy]);
    } else if (algorithm == 'Quick Sort') {
      barsCopy = QuickSort(barsCopy, 0, barsCopy.length - 1);
      setBars([...barsCopy]);
    } else if (algorithm == 'Merge Sort') {
      MergeSort(barsCopy, 0, barsCopy.length - 1);
      setBars([...barsCopy]);
    } else if (algorithm == 'Insertion Sort') {
      InsertionSort(barsCopy);
      setBars([...barsCopy]);
    }
  }

  return (
    <>
      <div className="w-full h-full flex flex-col gap-y-10 pb-5 justify-start items-center overflow-y-auto">
        <Dashboard changeBarsSize={changeBarsSize} size={bars.length} setAlgorithm={changeAlgorithm} algorithm={algorithm} sortBars={sortBars} />
        <SortingBars bars={bars} />
        <Explanation algorithm={algorithm} description={description} />
      </div>
    </>
  );
}

export default App;
