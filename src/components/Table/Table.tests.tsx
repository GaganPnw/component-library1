import React from "react";
import { render } from "@testing-library/react";
import Table from "../components/Table";

test("renders the table component", () => {
  const { getByRole } = render(
    <Table
      data={[
        ["Cell 1", "Cell 2"],
        ["Cell 3", "Cell 4"],
      ]}
      rowBackground="#f2f2f2"
      disabled={false}
    />
  );

  const tableElement = getByRole("table");
  expect(tableElement).toBeInTheDocument();
});

test("changes the background color when disabled", () => {
  const { getByRole } = render(
    <Table
      data={[
        ["Cell 1", "Cell 2"],
        ["Cell 3", "Cell 4"],
      ]}
      rowBackground="#f2f2f2"
      disabled={true}
    />
  );

  const tableElement = getByRole("table");
  expect(tableElement).toHaveStyle("background-color: #f2f2f2");
  expect(tableElement).toHaveStyle("opacity: 0.5");
  expect(tableElement).toHaveStyle("pointer-events: none");
});
