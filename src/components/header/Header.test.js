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

	test('should search text', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(document.getElementById('dropdown-species__dogs').textContent).toBe(
			'Dogs'
		);
	});

	test('should call request animals function on dog selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		let button = document.getElementById('dropdown-species__dogs');
		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on cat selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		let button = document.getElementById('dropdown-species__cats');
		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on horses selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		let button = document.getElementById('dropdown-species__horses');
		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on rabbits selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		let button = document.getElementById('dropdown-species__rabbits');
		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should call request animals function on small furries selection', () => {
		let dropdown = document.getElementById('dropdown-species');
		act(() => {
			dropdown.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});
		let button = document.getElementById('dropdown-species__small-animals');
		act(() => {
			button.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});
});
