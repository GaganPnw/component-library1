import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders Button component", () => {
  render(<Button text="Click me" />);
  // Add your assertion here
});

test("checks that the component is visible", () => {
  const { getByText } = render(<Button text="Click me" />);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("checks that the background color changes when disabled", () => {
  const { getByText } = render(<Button text="Click me" enabled={false} />);
  const buttonElement = getByText("Click me");
  expect(buttonElement).toHaveStyle("opacity: 0.5");
});
