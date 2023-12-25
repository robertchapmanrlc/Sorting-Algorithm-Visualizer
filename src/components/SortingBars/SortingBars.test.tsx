import SortingBars from "./SortingBars";
import { render, screen } from "../../utils/test-utils";

const testBars: number[] = Array(16).fill(0);

describe("SortingBars", () => {
  describe("rendering", () => {
    test("bars", () => {
      render(<SortingBars bars={testBars} />);
      const bars = screen.queryAllByRole("listitem");
      expect(bars.length).toBe(16);
    });
  });
});
