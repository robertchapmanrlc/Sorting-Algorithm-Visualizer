function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center">
        <header className="w-full h-20 flex flex-row gap-x-5 justify-center items-center border-b border-b-primary">
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
      </div>
    </>
  );
}

export default App;
