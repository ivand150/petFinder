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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjlhYTc0OTUwYWI1NWI2NTFjNTllMmIxYjUzNmI4NmUzNjgyMjNmNTQ1YTYyYzUxNmI0ZjRiNjZlMTMxYTVlMzQ4ZWJmYzUxN2ViYmZhZjNmIiwiaWF0IjoxNjA0NTA3Mjg4LCJuYmYiOjE2MDQ1MDcyODgsImV4cCI6MTYwNDUxMDg4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.m8tOfbSDl20FN7r3e-TPHbjPzxXlSggh06E9CNwa3eBMD_HYZvFauTewBPZbEPxPWMGu9nAKxBjuScbV0c70SzPNyDLLFhxO-jwR9pN41MlnWAn-0vJ93asGTsFtTKoakQi8Fkw7n4xHs5hZj4bgRR6l8i76o17X40rMLevYmdoNMl3UF2vSTP5qwb56BrGqWkxh48mGCbQQvectb17W6O251b2EGMnftrpKrc27b5MZah6UIJNPlOva9J-3By0LyGI0pIr0VIIghEI2OijpI-UTrm2LB9IFZi7McjW4IjAMWmMVOwuQIIaQN7Pjy5ki2ehGq8A1TsYbeRDoLbvz-g';

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
			.filter((element) => {
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
