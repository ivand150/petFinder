import React from 'react';
import MainDetails from './MainDetails';
import store from '../../stores/principal-store';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import * as action from '../../actions/actions';

describe('main details', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		const match = { params: { animaldId: 15 } };
		act(() => {
			render(
				<BrowserRouter>
					<MainDetails match={match} />
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

	test('should request token', () => {
		action.requestToken = jest.fn();
		store.setToken();
		act(() => {
			store.emitChange();
		});
		expect(action.requestToken).toHaveBeenCalled();
	});

	test('should request animal', () => {
		action.requestAnimal = jest.fn();
		store.setToken('hola');
		act(() => {
			store.emitChange();
		});
		expect(action.requestAnimal).toHaveBeenCalled();
	});

	test('should request animals', () => {
		const animal = { type: 'cat', breeds: { primary: 'dog' }, tags: [] };
		action.requestAnimals = jest.fn();
		store.setToken('hola');
		store.setAnimal(animal);
		store.setAnimals([]);
		act(() => {
			store.emitChange();
		});
		expect(action.requestAnimals).toHaveBeenCalled();
	});
});
