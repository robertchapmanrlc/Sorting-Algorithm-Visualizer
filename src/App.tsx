function App() {
  const bars: number[] = Array(16);

  for (let i = 0; i < bars.length; i += 1) {
    bars[i] = i + 1;
  }

  return (
    <>
      <div className="w-full h-full flex flex-col gap-y-10 justify-start items-center">
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
        <ul className="w-full flex flex-row gap-x-1 justify-center items-end">
          {bars.map((height) => (
            <li style={{ height: `${height}rem` }} className="w-4 bg-primary" />
          ))}
        </ul>
        <article className="w-full px-20">
          <h1 className="text-white text-4xl text-center">Algorithm</h1>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            corporis suscipit, quos labore officia inventore praesentium
            distinctio necessitatibus nesciunt ullam ab provident quis vel ea
            amet? Laborum, numquam. Sequi tenetur at natus quibusdam sunt, odit
            corporis animi architecto harum vel?
          </p>
        </article>
      </div>
    </>
  );
}

export default App;
