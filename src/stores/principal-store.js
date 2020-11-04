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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjM4YTc0Mjg3ZmFiM2I4MmU2YmE1MjYxMjg0MzFkNGFjZmZkYmVhMjg5Nzk2YzEyMmViNTI4OWQ4OGFjYTdjNTQ1MmQ5ZjE5MzcwYzk1ZGY4IiwiaWF0IjoxNjA0NTI4NzMyLCJuYmYiOjE2MDQ1Mjg3MzIsImV4cCI6MTYwNDUzMjMzMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.YYxvP0jgh5eVesxTaIEIjRUkQqxPUlMXYYoRHr1Mx7IAozSo1ziC8-SirCKZ7lmBarZ3upDHoPWh0G_iLkavw9kWOcwBn6UDl0-HIv6KWIVNhWzoJX8QU4L8JX6XUXS2zpILMgayFXtkPQ8CQL6idzuVg5pqZ1mqTSp1c2E-_34utTzGynQ7i9yUK40j-PWV77V4lxbTune2UWyio5hSRC9FP2uMEYXSBkRGLPXRhUKQfnKlhosLt5RwJ-dJoT0BQSiD5QiYFvK9gy0rgn-1CIlt474pIB2UyHwqh78USSqdsBvobHAZFglIZkYmqsTOsj_2tpDCnoMsb-KEaQ8wjw';

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
