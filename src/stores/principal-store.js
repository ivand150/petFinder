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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjhmZWNkZDVhYjc0OGI1ODI4MTZlMjFkYTJiY2I5ZDhiZmU2OTFjNWNmNmUwYjU1ODQ1NWNkNWIxZjIxNDA4NTFlYjIzZWJkYWM5OTRlMzkxIiwiaWF0IjoxNjA0NTYyNjQzLCJuYmYiOjE2MDQ1NjI2NDMsImV4cCI6MTYwNDU2NjI0Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.B4XmqkM0WBhlYejZlgLySXXmGHFC8z-20BLr4Eftpy2IXqsY7vMbIE9Cv5qrcRHVfQDay5jpTJfmDLKsqHpr_1gJAtbxyIPUX6jvIwSXshb-teUL1YNwy6xEfGAJw7ZTfJCmof-_zB59SfNlcuPg9vn9zP1wAkB8FoXSMZXbk0pn3_xWjC1eS3g-3W5XoGDL-7Vzk1OSKjsGoVFcmYu_AmhdAfnC3HKWS4X2P3wfPx4gv8Q7FVjEWNpm9Pwjx1RbRMxWdaGxY7heV8X5gwp81rkzWQuMCoxlmSZfvdEa48GUCMrIzC-13OwGJ-7Wc5LaPSRM0fz6j55UMyVmdkf5pQ'

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
