import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
	test('should render', () => {
		render(<Footer />);
		const linkElement = screen.getByText(/Pet Finder/i);
		expect(linkElement).toBeInTheDocument();
	});
});
