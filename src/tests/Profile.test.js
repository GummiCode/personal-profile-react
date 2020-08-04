import React from 'react';
import {render } from '@testing-library/react';
import Profile from '../components/Profile';

test('component Profile renders', () => {
  const { getByTestId } = render (
    <Profile />
  );
  const testId = getByTestId("profile");
  expect(testId).toBeInTheDocument();
});

test('Link components are rendered and direct to the correct locations', () => {
  const {queryByTestId} = render(
    <Profile />
  );
  const gitHubTest = queryByTestId("github-link");
  expect(gitHubTest).toBeInTheDocument();
  const emailTest = queryByTestId("email-link");
  expect(emailTest).toBeInTheDocument();
});