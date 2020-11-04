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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjdmMjg0ZWJjNjcxOTVmZTRiNDdmNDc3MmJjNDFlNmViOGVhNDIyZTUwNDk4NWY4OTljMDEzYTNlNWEwMzRkNTk0ZDU5ZTU1NjkzMjQwM2Q0IiwiaWF0IjoxNjA0NTAzMDIzLCJuYmYiOjE2MDQ1MDMwMjMsImV4cCI6MTYwNDUwNjYyMywic3ViIjoiIiwic2NvcGVzIjpbXX0.jPlG8-rxpecyLpcIVldTd13VhPLdUWEM_xH-TSiq8Oj2v7dNtU9211o9nVnNt85Oe6POAt-P60PlOWY76QM_c_yK7HeJuS-g4VbcI1EjjoGLVFBd6D_MZD9vHEE8vm6XuxVlTU1yj2u4652exz7nkwhCpV7XezHQXkxcANg5yUMkKfbnPEkY2TNv2Eusg9b6nINur_QsV0kk2Kkq6chjhB37L4KPazMc56oHYreSmlxzG_WSYO87V4LDN307UxT6l_0HYqzeWeiSJnOQOVWMjyDcMdfdc60z3gvAIq3F46JrOQ3Qp6GK86AHFSK-kuy-7nj2y7cZThQkfZsbxiqYOA';

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
