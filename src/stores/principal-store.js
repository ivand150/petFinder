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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjY5MTcyYjg0YzJiODZmYTc2ODJkYzQzODdlYjYzYThjYjdlZTczMTNhNzA3MWIyZWE2NDliZTM1MGRlMDI5ZWI5N2E2MmMwOTgzYzA2YTJjIiwiaWF0IjoxNjA0NTE2NjU0LCJuYmYiOjE2MDQ1MTY2NTQsImV4cCI6MTYwNDUyMDI1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.w-tiVZR0-6LVjnmGQa6yrAoRnine5kplGLn6mhRzSZUbVyu8QVpz79VqKEAJcE-xn2Yjcliaiam8yzS1d9Ah9v7dEUy261CaxBYVLhFJC2soBu943Gy0ZmcrMdYWdQFZkvuuCxurgOJoSgN-fYmTtCUn4gkOQQ-Wt9beltjM59AGzDQdaUrNfamaKSjv4AdNqL8K0k__tCItqjmZr42spgoJJ5ziVrfbjr8I5CCKe0Mr-AgEN3whXvfbqcv6gtGNShgCmNSk0jnsjABDeqGukWQGnvNtx8L08uLAvqJYjKrzcUBsC2XsQbJLtAWdalELPgTobdNPCmgchwFli_B0ZA';

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
