import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _urlFilter = {
	type: [],
	age: [],
	gender: []
};
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjA1MDQxZTA1ZmM2ZDk1OGYxMmFlZjAzMmYwYTgwNzhiODgxNWZkMzIxZWFkMjFiZjdlYmRmNWZkOGQ1MDg4OWU5YmYzMGVmZDExNWZhZjBjIiwiaWF0IjoxNjA0NTY5ODg4LCJuYmYiOjE2MDQ1Njk4ODgsImV4cCI6MTYwNDU3MzQ4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.EAyuhD3gAw5OB8KXw5O2ZbxYwzbQhMOBa_eDlnH7U1EpfQjLz77AkK_CFbuaw2sOBBCmz6wH2JxHBQhQONMlJVZJeu0mdnRfg_iUjqd-Ie6bcdocKx8x4kSJiQ0TniRgAj5U6axUeQNXtwrZAmyOaO8DegVrUmbWfla9WVb9C-Nls6b9cdrvVWPgiTTjYTiXbwGHkh36bhLP167WJKN-bBRrpESNc-xhqeXXIjiNZyIyk9DlsTNiOGrxw6nK3f2_TFsLm-yRpJ1DJ8vYVG3yh8s8HLAdkqg82qjUxzU8ugV4WIe2vRZRdijpFUyThAncbC3XXdINnxbbpZ1Dqso36g';

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
