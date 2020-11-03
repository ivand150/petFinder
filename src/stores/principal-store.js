import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjA2NDRjZmY1NzVlMDU3MmY1ZjMzMmU2ZTRiNzI4NGQ1YjIwODBmODllZmVmNWY1YjcxZmM1OTZmYWQzNDI4NDNkYzVhZDA0ZGI0ZDdlMjIxIiwiaWF0IjoxNjA0NDM4MjU3LCJuYmYiOjE2MDQ0MzgyNTcsImV4cCI6MTYwNDQ0MTg1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.iyL35tAQl5U56LbJ7jrmqNUGSlRTv2sHfKOcC8N5XvjkmrqMWRyANOMIm140ZY_naW-jYN24lLNX2a4hqDhEEsynQoDXMhdetF7WhSD25w2eN7k7MbbqEyww4AC3tII_oXKKZ4hzB_wIN7ht9ILGY06xIc-bT_dtD8PBkhwEDIBbSKhwK76Zmntaswk91Qs1hWwqCQtGtcSjShl7BZ4wUbogMKkVvFXNTbsj5csvoDyEpiFc4ZOqVn0hD1KzzkvJXaJprpBHatybzMtytMg0ZM76j2RbgqTq1zUySJdXxp-QDnxNhJXy9xT5NjlmQ9PQ9QfuoNr609sVa6jb00kW_A';
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
