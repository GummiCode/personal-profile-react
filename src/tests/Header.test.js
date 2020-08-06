import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

test("Header component renders", () => {
  const { getByTestId } = render(<Header />);
  const testId = getByTestId("header");
  expect(testId).toBeInTheDocument();
});
