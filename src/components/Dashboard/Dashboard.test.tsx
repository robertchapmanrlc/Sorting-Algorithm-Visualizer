import Dashboard from "./Dashboard";
import { render, screen } from "../../utils/test-utils";

describe("Dashboard", () => {
  describe("rendering", () => {
    test("two range sliders", () => {
      render(<Dashboard changeBarsSize={vi.fn()} size={0} />);
      const sliders = screen.queryAllByRole("slider");
      expect(sliders.length).toBe(2);
    });

    test("buttons", () => {
      render(<Dashboard changeBarsSize={vi.fn()} size={0} />);
      const buttons = screen.queryAllByRole("button");
      expect(buttons.length).toBe(5);
    });
  });
});
