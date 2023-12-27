import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("App", () => {
  describe("behavior", () => {
    test("click on algorithm button should change explanation heading", async () => {
      render(<App />);
      const mergeSortBtn = screen.getAllByRole('button')[3];
      const explanationHeading = screen.getByRole('heading', { level: 1 });
      await userEvent.click(mergeSortBtn);
      expect(explanationHeading).toHaveTextContent("Merge Sort");
    });
  });
});
