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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjNlNDQyYzAxZDJmMjMxMDU2Mzc5M2NhOTgyOGI3NjA5M2MzM2M0NTZjN2I4NTI5YWJhMDJmMDRhN2U0MzgzYTYyZjdkNjhlNGRlNjNiYWI3IiwiaWF0IjoxNjA0NDkyMjQ0LCJuYmYiOjE2MDQ0OTIyNDQsImV4cCI6MTYwNDQ5NTg0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.KAEvHsB1xCuV-KFFMdAQWLlVDFPuuFufjd4uszrDEnbleRhK0uxncdY5wWa_IHq_wZH6yXvk3FAOp0whvZG6jkbJJSKq39uziOupImaNIAOzSbsVO4jkhF94EtGLTaCmCZdL2ERdj6yAoiOwNjF3pJx6mPZ7QmIlW4ukD_ulLvfHtSvtpM2OV9dAl9slm2Lvhv_WRxsdmsJwhzN_Xzk0WIvej6WIF6zb3M9ffuPx-Ln3XsuEojGsKyvSzy0aj54NuNc3tha0PS91vmuMIGCcpsGanfAMQU8bdOyN_E7Oj9aw1ylVjabk1T3OX2CsufIMfVsk9u16i760_yU9eqg9VQ';

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
			_test = 'break';
			store.emitChange();
			break;
	}
});

export default store;
export { Store };
