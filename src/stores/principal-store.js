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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjhhNTFkMzkwZTU0MzJhYjEzNTQzMmNmYzliNmY5YzkyZTk3NTE5ZjNjNDZhZDI0MGI4YmU4M2I3NWQ3MjBjNjkxYTdmYzNmYjk2ZDQ1ZjI5IiwiaWF0IjoxNjA0NTg0NTE2LCJuYmYiOjE2MDQ1ODQ1MTYsImV4cCI6MTYwNDU4ODExNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.d95HGUjmyF_-a2ITOEND-5QVO6xotk5mizQceL3sCVJvFAvmpGC_pLy9b6enWJOf0m645MI58hnHOYZ9OToEnw7EgQsZ-wD0AcQTIgRPeoA20AdLrNgwpSrgOAaNo1GQnD3D3H3IMvTijmqv8itvDTV_24hOeF2IK8aJu9gvMJR-8TgfQqNICmevQuT6xfXNkRoGPdAwjicBpAKuE8KSwcny3TplC9hQAjlsMHZtJxJrvSE6alIbVpYLpYEziqaev6ZtHfoAF_-8jfxOrAY-Cmh4fXWfghGWmBNrLYjA3v3rBxeB5fAR3gBPOanZ2nfSljn_JAap-plpke5UG_bWjQ'

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
