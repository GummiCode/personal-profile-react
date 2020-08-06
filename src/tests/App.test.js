import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders a text element of the App component", () => {
  const { getByTestId } = render(<App />);
  const testId = getByTestId("app");
  expect(testId).toBeInTheDocument();
});
