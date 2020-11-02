import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Route>
        <Header />
      </Route>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Mexico/i);
  expect(linkElement).toBeInTheDocument();
});
