import List from './List'
import { render, screen } from '@testing-library/react'

test('renders learn react link', () => {
    render(<List animals={[
        { name: 'Kitty', photos: [{ medium: '' }], breeds: { primary: '' } }
    ]}
    />);
    const linkElement = screen.getByText(/Kitty/i);
    expect(linkElement).toBeInTheDocument();
});

