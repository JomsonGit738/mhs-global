import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Our Global Network/i });
  expect(heading).toBeInTheDocument();
});
