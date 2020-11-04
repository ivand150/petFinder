import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Filters from './Filters';

describe('Filters', () => {
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

	test('should have "Apply filters" text', () => {
		act(() => {
			render(<Filters />, container);
		});

		expect(container.querySelector('.button-apply').textContent).toBe(
			'Apply filters'
		);
	});
});
