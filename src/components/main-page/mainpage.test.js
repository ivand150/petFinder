import MainPage from './MainPage';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as action from './../../actions/actions'

describe('MainPage', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(
				<BrowserRouter>
					<MainPage />
				</BrowserRouter>,
				container
			);
		});
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should render', () => {
		expect(container.querySelector('.principal-button').textContent).toBe(
			'Find a Dog'
		);
	});

	['dog', 'cat', 'other', 'adopted'].forEach((element) =>
		test(`should call requestAnimals when click button find ${element}`, () => {
			let button = document.getElementById(`${element}-animals-btn`)
			action.requestAnimals = jest.fn()
			button.click()
			expect(action.requestAnimals).toHaveBeenCalledTimes(1)
		})
	)

});
