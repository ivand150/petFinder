import { screen } from '@testing-library/react';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Details from './Details';

describe.only('details', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render details', () => {
		act(() => {
			render(
				<Details
					animal={{
						name: 'ozzy',
						description: 'test',
						breeds: { primary: '' },
						tags: ['1', '2']
					}}
				/>,
				container
			);
		});
		console.log(container.textContent);
		expect(container.querySelector('#donating').textContent).toBe('Donate!');
		expect(container.querySelector('#animal__name').textContent).toBe('ozzy');
	});
});

test('renders learn react link', () => {
	render(
		<Details
			animal={{
				description: 'test',
				breeds: { primary: '' },
				tags: ['1', '2']
			}}
		/>
	);
	const linkElement = screen.getByText(/test/i);
	expect(linkElement).toBeInTheDocument();
});
