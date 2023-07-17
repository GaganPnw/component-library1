import React from "react";
import { render, screen } from "@testing-library/react";

import RadioButton from "./RadioButton";

test("renders RadioButton component", () => {
  render(<RadioButton options={["Option 1", "Option 2", "Option 3"]} />);
  const radioButtonElement = screen.getByText("Option 1");
  expect(radioButtonElement).toBeInTheDocument();
});

test("selects the option when clicked", () => {
  render(<RadioButton options={["Option 1", "Option 2", "Option 3"]} />);
  const radioButtonElement = screen.getByText("Option 2");
  radioButtonElement.click();
  expect(radioButtonElement).toHaveAttribute("checked");
});
