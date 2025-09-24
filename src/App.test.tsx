import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/MHS Global Associates is a modern organization/i);
  expect(heading).toBeInTheDocument();
});
