import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import * as actions from '../../actions/actions';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import * as authActions from '../../actions/auth-actions';
import authStore from '../../stores/auth-store';

jest.mock('../../actions/auth-actions');

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

	test('should call singInWithGoogle', () => {
		const loginButton = document.getElementById('header__login');
		act(() => {
			loginButton.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});
		expect(authActions.singInWithGoogle).toHaveBeenCalledTimes(1);
	});

	test('should call singOut if user', () => {
		authStore.setUser('user');
		authStore.emitChange();
		const logoutButton = document.getElementById('header__logout');
		act(() => {
			logoutButton.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});
		expect(authActions.signOut).toHaveBeenCalledTimes(1);
	});
});
