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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImQ5OTdmZTRhYWNkMjNiYjNkMzc3NTFjMTBiM2U2OWI2NzYxYWQ1MTgwYjYyMjUyNTEyNTE2ODA5MDBlM2E3ZjhkNzJlYjJhNzFjODU4YzRlIiwiaWF0IjoxNjA0NTExMTI5LCJuYmYiOjE2MDQ1MTExMjksImV4cCI6MTYwNDUxNDcyOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.rhwAZ_iVwR6WOaHdh-90lxLUiPtBkOB5W-cC_mRhEIbmG03e9tz0YzMi4wVGAqVHRlBfMnwe1jz-VwLKLPgz5VNdtVNio7gyuDJcL240Dymmh5EuA5GLFrQqTYIw7uc9uxMu40CGz3zcPf7o1UgVJiTwNjvvdlX_iUNkGzh7lJCoG-kYDY0lK7LBEr-unA55eyB5D5Lq4c_xJw9MCtD2F1Z4Twd9z0abq1sH22vZYKDpWdpD6dC4nSzFkqxEmxyJ0cWJMex_pfiWnA4bEfsCtzTUcP8rRFyNDV3PIWsKFz9b7FJNC_dry3RgwZIXfk3nGQHU-kaEEg6-LSivLizXfA';

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
