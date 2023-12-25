import App from "./App";
import { render, screen } from "./utils/test-utils";

test("Renders heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeVisible();
});
