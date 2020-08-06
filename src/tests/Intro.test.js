import React from "react";
import { render } from "@testing-library/react";
import Intro from "../components/Intro";

test("component Profile renders", () => {
  const { getByTestId } = render(<Intro />);
  const testId = getByTestId("intro");
  expect(testId).toBeInTheDocument();
});
