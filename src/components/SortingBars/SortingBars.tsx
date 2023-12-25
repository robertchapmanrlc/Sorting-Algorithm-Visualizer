interface SortingBarsProps {
  bars: number[];
}

export default function SortingBars({ bars }: SortingBarsProps) {
  return (
    <ul className="w-full flex flex-row gap-x-1 justify-center items-end">
      {bars.map((height, i) => (
        <li key={i} style={{ height: `${height}rem` }} className="w-4 bg-primary" />
      ))}
    </ul>
  );
}
