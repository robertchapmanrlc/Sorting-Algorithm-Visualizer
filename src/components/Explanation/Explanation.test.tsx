import Explanation from "./Explanation";
import { render, screen } from "../../utils/test-utils";

describe("Explanation", () => {
  describe("rendering", () => {
    test("heading", () => {
      render(<Explanation />);
      const heading = screen.getByRole("heading");
      expect(heading).toBeVisible();
    });
  });
});
