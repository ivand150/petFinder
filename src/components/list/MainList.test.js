import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import store from '../../stores/principal-store';
import MainList from './MainList';
import { BrowserRouter } from 'react-router-dom';
import * as actions from './../../actions/actions';

describe('main list', () => {
	let container;
	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			render(
				<BrowserRouter>
					<MainList />
				</BrowserRouter>,
				container
			);
		});
	});
	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
		store.setToken(null);
		store.setAnimal(null);
		store.setAnimals([]);
	});
	test('should render', () => {
		const mainElement = document.getElementsByTagName('main');
		expect(mainElement.length).toBe(1);
	});
	test('should call requestAnimals', () => {
		actions.requestAnimals = jest.fn();
		store.setToken('hola');
		store.setAnimals();
		act(() => {
			store.emitChange();
		});
		expect(actions.requestAnimals).toHaveBeenCalled();
	});

	test('should request token', () => {
		actions.requestToken = jest.fn();
		store.setToken();
		act(() => {
			store.emitChange();
		});
		expect(actions.requestToken).toHaveBeenCalled();
	});
});
