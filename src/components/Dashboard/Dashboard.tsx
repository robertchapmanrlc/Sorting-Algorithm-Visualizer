export default function Dashboard() {
  return (
    <header className="w-full h-20 flex flex-row gap-x-3 justify-center items-center border-b border-b-primary">
      <div className="flex flex-row items-center gap-x-2 mr-2">
        <label htmlFor="size" className="text-gray-400 text-xl">
          Size:
        </label>
        <input
          type="range"
          name="size"
          id="size"
          className="h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <h3 className="text-white text-xl">50</h3>
        <label htmlFor="size" className="text-gray-400 text-xl">
          Speed:
        </label>
        <input
          type="range"
          name="speed"
          id="speed"
          className="h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <h3 className="text-white text-xl">100 ms</h3>
      </div>
      <button className="text-white text-xl bg-primary px-3 py-1 rounded-lg">
        Sort
      </button>
      <button className="text-gray-400 text-xl px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all">
        Bubble Sort
      </button>
      <button className="text-gray-400 text-xl px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all">
        Quick Sort
      </button>
      <button className="text-gray-400 text-xl px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all">
        Merge Sort
      </button>
      <button className="text-gray-400 text-xl px-3 py-1 rounded-lg hover:text-white hover:bg-secondary/25 transition-all">
        Insertion Sort
      </button>
    </header>
  );
}
