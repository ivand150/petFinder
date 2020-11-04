import MainPage from './MainPage';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('MainPage', () => {
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

	test('should render', () => {
		act(() => {
			render(
				<BrowserRouter>
					<MainPage />
				</BrowserRouter>,
				container
			);
		});
		expect(container.querySelector('.principal-button').textContent).toBe(
			'Find a Dog'
		);
	});
});
