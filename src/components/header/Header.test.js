import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import * as actions from '../../actions/actions';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('Header', () => {
	let container;
	beforeEach(() => {
		actions.requestAnimals = jest.fn();
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(
				<BrowserRouter>
					{' '}
					<Header />
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

	test('renders learn react link', () => {
		const linkElement = screen.getByText(/Select country/i);
		expect(linkElement).toBeInTheDocument();
	});

	test('should search text', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		expect(document.getElementById('dropdown-species__dogs').textContent).toBe(
			'Dogs'
		);
	});

	test('should call request animals function on dog selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		let button = document.getElementById('dropdown-species__dogs');
		button.click();
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on cat selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		let button = document.getElementById('dropdown-species__cats');
		button.click();
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on horses selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		let button = document.getElementById('dropdown-species__horses');
		button.click();
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on rabbits selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		let button = document.getElementById('dropdown-species__rabbits');
		button.click();
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on small furries selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		dropdown.click();
		let button = document.getElementById('dropdown-species__small-animals');
		button.click();
		expect(actions.requestAnimals).toHaveBeenCalled();
	});
});
