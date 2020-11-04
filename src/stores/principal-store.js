import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjAzMmU5ZGM0MjU4MWQyMmQzODk4MWVjNTVkNDdlMzlhNjE0YjY0Yjc5MWM4ZTAyOTJjZmUyZjQwODZhZTZhMGU1ZjgyMTA0ZDhiMDRhMDk2IiwiaWF0IjoxNjA0NDc2NzMzLCJuYmYiOjE2MDQ0NzY3MzMsImV4cCI6MTYwNDQ4MDMzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.JvMzSYPvp5TzKIc6ghPVDDsZhjx88VEZLletRfcOaqqgmS0SIMxg3z0d0WlUBErmcFhzElFLkY_vw8_UqURYzo2qg8I5AOq_EPRcXMjUpoieMBn0SM7afzQBeEWr8ZeD9mIJrpfYjZgA8YfWeWnznihOBx_QHduFMcKvYxFfPImR8pV_T5zJV6e8aGqlc7zoyqKP8_FJ51_ByYwqw6FFfBeaBujz8MtBUWgYjkcaVsCL3ArxCxfd6pz7fBeZGuCT6xSYe4tmGAfS9QEHX7_CR9DiPS8_trmeHTc_JciFun94Z_Ova2egMi3NUKsfr91Te-rkyxzB4IJ67knXkmiTyg';
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
