import React from 'react'
import Footer from './Footer';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils'
import { screen } from '@testing-library/react';

describe('Footer', () => {
<<<<<<< HEAD
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
=======
	test('should render', () => {
		render(<Footer />);
		const linkElement = screen.getByText(/Pet Finder/i);
		expect(linkElement).toBeInTheDocument();
	});
>>>>>>> d5aceb369296c2447bf27c98fd8cd5e3e8e360ef
});

