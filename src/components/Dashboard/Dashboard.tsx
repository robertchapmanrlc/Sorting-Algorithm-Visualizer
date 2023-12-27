
interface DashboardProps {
  changeBarsSize: (size: number) => void;
  size: number;
  setAlgorithm: (algorithm: number) => void;
}

export default function Dashboard({ changeBarsSize, size, setAlgorithm }: DashboardProps) {
  return (
    <header className="w-full h-36 lg:h-20 px-5 flex flex-col gap-y-4 lg:gap-x-5 lg:flex-row items-center justify-center border-b border-b-primary">
      <div className="flex flex-col gap-y-2 md:gap-x-2 md:flex-row items-start md:items-center justify-center">
        <div className="flex flex-row gap-x-3 items-center justify-center">
          <label
            htmlFor="size"
            className="text-gray-400 text-base md:text-lg mr-4 lg:mr-0"
          >
            Size:
          </label>
          <input
            type="range"
            name="size"
            id="size"
            min={5}
            max={100}
            className="h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            onChange={(e) => changeBarsSize(Number(e.target.value))}
          />
          <h3 className="text-white text-base md:text-lg">{size}</h3>
        </div>
        <div className="flex flex-row gap-x-3 items-center justify-center">
          <label htmlFor="size" className="text-gray-400 text-base md:text-lg">
            Speed:
          </label>
          <input
            type="range"
            name="speed"
            id="speed"
            className="h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <h3 className="text-white text-base md:text-lg">100 ms</h3>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        <button className="text-white text-base md:text-lg bg-primary px-3 py-1 rounded-lg">
          Sort
        </button>
        <button className={`text-gray-400 text-base md:text-lg px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all`} onClick={() => setAlgorithm(0)}>
          Bubble Sort
        </button>
        <button className="text-gray-400 text-base md:text-lg px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all" onClick={() => setAlgorithm(1)}>
          Quick Sort
        </button>
        <button className="text-gray-400 text-base md:text-lg px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all" onClick={() => setAlgorithm(2)}>
          Merge Sort
        </button>
        <button className="text-gray-400 text-base md:text-lg px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all" onClick={() => setAlgorithm(3)}>
          Insertion Sort
        </button>
      </div>
    </header>
  );
}
