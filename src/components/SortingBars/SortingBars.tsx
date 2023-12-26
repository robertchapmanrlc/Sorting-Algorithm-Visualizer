interface SortingBarsProps {
  bars: number[];
}

export default function SortingBars({ bars }: SortingBarsProps) {
  return (
    <ul className="w-full h-80 px-20 flex flex-row gap-x-1 justify-center items-end">
      {bars.map((height, i) => (
        <li key={i} style={{ width: `${100 / bars.length}%`,  height: `${(100 / bars.length) * height}%` }} className="bg-primary" />
      ))}
    </ul>
  );
}
