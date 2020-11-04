import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjliNDU1NGRmNDQ4M2UyOWEwN2Y2MWRkZmJlOTEzZGMzZmNlODhiMGMyMTc3YWEzN2ZmMzBmYmQ0Njk4YjdjMTEzZTQwZjEwZGM2Y2MxZTUyIiwiaWF0IjoxNjA0NDg0MDQyLCJuYmYiOjE2MDQ0ODQwNDIsImV4cCI6MTYwNDQ4NzY0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.aGx0BLCTdoDSMzKc2LTlMnlpB26r-rCQps2KXAbd_zGTNDURWr4MAABlKa6BEXqiAyU8MLz53IYgV4Kmd-E4aGiRY2J7aG-zKDfrfsUFK_HP6h_Yb540kLdDhY_IXPNMjN8Y640Rd5mA49yDd96PTw8v-TL8OxZNnGfF_c2MXEFcry2iINqRpk0jPCGTbLwCUbMBKvQ88C6Of-ThVw6l347j4oiN9pYLu2rDsl0pViRGChom0MXG6nJzPaThkBl5GWJT7e3ZQ9SQUwgsD8IBmpdTkyYCxSXxo22ebHIeWpBH-_iGEVvwj-1gP91N4vWwwNQFioXwuCYNg66x4eRzwg';
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
export { Store };
