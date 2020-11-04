import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _urlFilter = {
	age: [],
	gender: []
};
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjAzNzIzZDdiOTUwZTg2MWUxN2ViOGRmYzIxOTk3Yzk1YzYzZmI2ZGRhZjU3NjBlOWI4MjRlZDhkODgwN2FiNTUzMzFjZWVlMzQ3YzVkZjcxIiwiaWF0IjoxNjA0NTExMTI2LCJuYmYiOjE2MDQ1MTExMjYsImV4cCI6MTYwNDUxNDcyNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.KJaNQq858ex9eeeNzc9NdN6aydMiMPwNkTyiIjr7NbvTUdWiLrjmqH6iL45-nvr_dIt22poVIzJfEyEiVvL0wzcmIkmHqvRJwON_bRUxcGy0-6odyP1n_dqLMASNYc630tuC9QIB9tOBxRXf5FX9lftbQQs4Qjrsyqu_dO97yb1PPN0tg99UgrzL6nLIF6r0ojjqxSdZIsZUB5H8Ufwuoc4eG02VcLYQMdxKWMAf0Om01Kj3qABPUoMyZ84IyV50H7irEd_uYshQxUOtcTuaedVpxAQgQPiRj1m_Un0wPwDJxbUyc7YILzvnCZPn0I_zL5IRIAEZr4CVTaQ3xoO-Lg';

let _animals = [];

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
		return _animals
			?.filter((element) => {
				return element.photos.length > 0;
			})
			.slice(0, 20);
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
	setUrlFilter(urlFilter) {
		_urlFilter = urlFilter;
	}

	getUrlFilter() {
		return _urlFilter;
	}

	resetFilters() {
		for (let property in _urlFilter) {
			_urlFilter[property] = [];
		}
	}

	resetFilterOnClick(className) {
		const filterArray = document.getElementsByClassName(className);
		for (let index = 0; index < filterArray.length; index++) {
			filterArray[index].checked = false;
		}

		this.resetFilters();
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
			break;
	}
});

export default store;
export { Store };
