import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Render the app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Shows/);
  expect(linkElement).toBeInTheDocument();
});
