import React from "react";
import { render } from "@testing-library/react";
import About from "../components/About";

test("renders the About component", () => {
  const { getByTestId } = render(<About />);
  const testId = getByTestId("about");
  expect(testId).toBeInTheDocument();
});

test("About component screenshot test", () => {
  const { asFragment } = render(<About />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
