import React from 'react';
import {render } from '@testing-library/react';
import Intro from '../components/Intro';

test('component Profile renders', () => {
  const { getByTestId } = render (
    <Intro />
  );
  const testId = getByTestId("intro");
  expect(testId).toBeInTheDocument();
});

test('Link components are rendered and direct to the correct locations', () => {
  const {queryByTestId} = render(
    <Intro />
  );
  const gitHubTest = queryByTestId("github-link");
  expect(gitHubTest).toBeInTheDocument();
  const emailTest = queryByTestId("email-link");
  expect(emailTest).toBeInTheDocument();
});