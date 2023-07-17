import React from "react";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

const text = "Lorem ipsum dolor sit amet";

test("renders text component", () => {
  render(<Text text={text} />);
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});

test("renders disabled text component", () => {
  render(<Text text={text} enabled={false} />);
  const textElement = screen.getByText(text);
  expect(textElement).toHaveStyle("opacity: 0.5");
});

test("renders text component with custom font size", () => {
  const fontSize = "18px";
  render(<Text text={text} fontSize={fontSize} />);
  const textElement = screen.getByText(text);
  expect(textElement).toHaveStyle(`font-size: ${fontSize}`);
});

test("renders text component with background color", () => {
  const backgroundColor = "lightblue";
  render(<Text text={text} backgroundColor={backgroundColor} />);
  const textElement = screen.getByText(text);
  expect(textElement).toHaveStyle(`background-color: ${backgroundColor}`);
});
