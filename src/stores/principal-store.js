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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjYwODZiNGE2YWM5MDcwZGMwZmUwNjEyMDFkZjdmMGE3NDkzMDIzZTE5ZjBmNmNlMThkNTJlMjBlOGQyZDU0NWE0Yzk2MmQzODE0N2VhNjgxIiwiaWF0IjoxNjA0NTE0OTE1LCJuYmYiOjE2MDQ1MTQ5MTUsImV4cCI6MTYwNDUxODUxNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.p95WzRYvxVRKMUMDfiZ7jCJXcV9KT_MFf_r3NLWzQR-i7wxqv_nOvUP3LOZoxU-ME5QdGYqDiWoHmooTr57WlRUZKO0uNfiJ2-0BNTSqR911CGKAjYZWsxf2y6JZdlaDYv67z-k2NbnECNHTe75eIfHh7RwwN6_uVn-FghKkfIPeeSTTEjaWNEj2-3w-DkzKWrRCsQopSicfe6frwc2wxi7gU1isuAzOZ8pgl48TSIbbU_X5E2kKUI4qFiHNwsT8kmTAg0FEvNodfYxRlT0sD5xW74s0Mp3w3Q21KgaXMhAIA4d0h42XMD5qcIGp82KNSdjlDSTfbPIst3AoWqMvtA';

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
