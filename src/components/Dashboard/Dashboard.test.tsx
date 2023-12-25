import Dashboard from "./Dashboard";
import { render, screen } from "../../utils/test-utils";

describe("Dashboard", () => {
  describe("rendering", () => {
    test("two range sliders", () => {
      render(<Dashboard />);
      const sliders = screen.queryAllByRole("slider");
      expect(sliders.length).toBe(2);
    });

    test("buttons", () => {
      render(<Dashboard />);
      const buttons = screen.queryAllByRole("button");
      expect(buttons.length).toBe(5);
    });
  });
});
