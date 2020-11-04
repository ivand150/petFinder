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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImJlNTEyMGI5NGFhMzFiMzYyOWMxZWUwNDQ2ZTk1NjNiYjcyZTJkM2UzMzBjZmVmYjQ4MWNiODQ1YmFkMThjNWExYjE2N2ExMzczMDVmZjZlIiwiaWF0IjoxNjA0NTA0ODk5LCJuYmYiOjE2MDQ1MDQ4OTksImV4cCI6MTYwNDUwODQ5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.MuZprKQHPgwWHG3yzn9wBDrQLbIGliBSpTArCxu06CHhn3dwfJY7T3_frjNkpn_m5ociMioZCS1aNFgM3WcS4LnBT73ZqLRln0-R-A_6F_MDStXSBpoDkCiisxLrk4dhurh7LphMoAYU0nA4sVoe9MvnpIArfhU86c6sxpthVb5MQHpDOA9RG6gtVNYobgNaURA891ENdLPkZRvSTTVMkRGpRkQSHf7lkoDHyZl5XcL25ALW4BVsDFk8kF9w-9-Kt1fkb4bsUiKJWSn5R0znSDfoEpuUyg4wiXP1iCLihGojtrmZo1a-LzchqTAkDd738wm41wRC-xR9jr9RaBMZ_g';

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
