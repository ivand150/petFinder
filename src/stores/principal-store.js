import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6ImJmYTY3YTdmNGQ5ZjlkMmE2M2M5ODcyOGE3MDk0ZDNlM2NkNmU1MzdhM2UzZDZiZThlZWRlYmMxYTlkZWNiM2Y1OWU5YWI2ZWU5NzMxOGNhIiwiaWF0IjoxNjA0NDI5Nzc0LCJuYmYiOjE2MDQ0Mjk3NzQsImV4cCI6MTYwNDQzMzM3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.eQASANT_dYYXno8DMqx0antEWuvaqGIw8G0DOeC9S7amuoamxRHxEOM980UdzsWwv1S_mSJo2t0w47XcaA4yIMRQ2zfmPI_SSl0e9yPWv3jJlH6_S6rLfECjKW-VZ1913eoeEqEhONoan_DW2as36XJjVyAS4zya3srSuOxjglbO9C1pJl4-c5SrrXi9rGsdA3JCXHFV4wNLgNMtbEKDf1U3UdVzGZcRn3swUgvg7ucwniMZuGlFoBq6EEdbKBdk0Wo-eCOhGOg7T4HbSMMx1Xq0WmDLLfIz1xGh5nQ0hbzIIJJuL_SVU72_0i_wPqkkF8KBywhacObihOq6fBlngg';
let _animals = [];
let _test;

class Store extends EventEmitter {
	setToken(token) {
		_token = token;
	}

	getToken() {
		return _token;
	}

	setAnimal(animal) {
		_animal = animal;
	}

	getAnimal() {
		return _animal;
	}

	setAnimals(animals) {
		_animals = animals;
	}

	getAnimals() {
		return _animals;
	}

	removeLastComma(str) {
		return str.slice(-1) === ',' ? str.slice(0, str.length - 1) : str;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}

	getTestVar() {
		return _test;
	}
}

const store = new Store();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_TOKEN:
			_token = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_ANIMAL:
			_animal = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_ANIMALS:
			_animals = action.payload;
			store.emitChange();
			break;

		default:
			_test = 'break';
			store.emitChange();
			break;
	}
});

export default store;
