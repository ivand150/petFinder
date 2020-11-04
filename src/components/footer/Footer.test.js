import React from 'react'
import Footer from './Footer';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/react';

describe('Footer', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
  });


  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should have PetFinder', () => {
    act(() => {
      render(<Footer />, container)
    })

    expect(container.querySelector('.logo-name').textContent).toBe('PetFinder')

  });

  test.skip('should render', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Contact Us/i);
    expect(linkElement).toBeInTheDocument();
  });
});

