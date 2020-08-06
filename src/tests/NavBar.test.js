import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("NavBar component renders", () => {
  const { getByTestId } = render(<NavBar />);
  const testId = getByTestId("nav-bar");
  expect(testId).toBeInTheDocument();
});
