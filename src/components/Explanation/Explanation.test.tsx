import Explanation from "./Explanation";
import { render, screen } from "../../utils/test-utils";

describe("Explanation", () => {
  describe("rendering", () => {
    test("heading displays algorithm", () => {
      render(<Explanation algorithm="Bubble Sort" />);
      const heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent("Bubble Sort");
    });
  });
});
