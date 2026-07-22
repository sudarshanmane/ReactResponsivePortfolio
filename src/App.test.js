import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio navigation and featured work", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /engineering meets intelligence/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /ai talent acquisition platform/i }),
  ).toBeInTheDocument();
});
