import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Filters from './Filters';
import store from '../../stores/principal-store';
import * as actions from '../../actions/actions';

jest.mock('../../actions/actions');
jest.spyOn(window.history, 'replaceState');

describe('Filters', () => {
	let container;
	beforeEach(() => {
		window.history.search = '?';
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(<Filters type="dog" />, container);
		});
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have "Apply filters" text', () => {
		expect(container.querySelector('.button-apply').textContent).toBe(
			'Apply filters'
		);
	});

	test('should have the "dog" button checked if type of animal is dog', () => {
		const dogRadioBtn = document.getElementById('radio-dog');

		expect(dogRadioBtn.checked).toBe(true);
	});

	test('should add "cat" to urlString.type', () => {
		const catRadioBtn = document.getElementById('radio-cat');
		catRadioBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(store.getUrlFilter().type).toEqual(['cat']);
	});

	test('should add "young" to urlString.age', () => {
		const youngCheckBtn = document.getElementById('checkboxAge-young');
		youngCheckBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(store.getUrlFilter().age).toEqual(['young']);
	});

	test('should add "male" to urlString.gender', () => {
		const maleCheckBtn = document.getElementById('checkboxGender-male');
		maleCheckBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(store.getUrlFilter().gender).toEqual(['male']);
	});

	test('should remove "male" to urlString.gender if not checked', () => {
		const maleCheckBtn = document.getElementById('checkboxGender-male');
		maleCheckBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		maleCheckBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(store.getUrlFilter().gender).toEqual([]);
	});

	test('should call requestAnimals with apply filter button', () => {
		const applyFiltersBtn = container.querySelector('.button-apply');
		applyFiltersBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(actions.requestAnimals).toHaveBeenCalledTimes(1);
	});

	test('should replace the url with apply filter button', () => {
		const applyFiltersBtn = container.querySelector('.button-apply');
		applyFiltersBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		expect(window.history.replaceState).toHaveBeenCalledTimes(1);
	});
});
