import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dropdown from "./Dropdown";

const options = ["Option 1", "Option 2", "Option 3"];

test("renders dropdown component", () => {
  render(<Dropdown options={options} />);
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toBeInTheDocument();
});

test("renders options in dropdown", () => {
  render(<Dropdown options={options} />);
  const dropdownElement = screen.getByRole("combobox");
  userEvent.click(dropdownElement);
  options.forEach((option) => {
    expect(screen.getByText(option)).toBeInTheDocument();
  });
});

test("handles option change", () => {
  const mockOnChange = jest.fn();
  render(<Dropdown options={options} onChange={mockOnChange} />);
  const dropdownElement = screen.getByRole("combobox");
  userEvent.selectOptions(dropdownElement, options[1]);
  expect(mockOnChange).toHaveBeenCalledWith(options[1]);
});
