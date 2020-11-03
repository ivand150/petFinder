import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjkwMTFhZTVhYzg1MDMwYjg5M2Q1ZDE3NjA0NGQwMDdjNzAyM2VlY2U2YjU1MGNkYWQ5MGM3ZjkwZGI2OGJiYmIyY2E4NmViNWIzOWZiYmYyIiwiaWF0IjoxNjA0NDIzMDE3LCJuYmYiOjE2MDQ0MjMwMTcsImV4cCI6MTYwNDQyNjYxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.iXjqJAyI7uz0cnGOCzueP302h2gzfiMYXn2oAFU8EOBWNTpRdgxq0TseYLNAj3w4Pa5LMJf4CQvEDL_otVT9MEG5IHhBISxKtod5L2N409MGFPVDjc4A_mnNHi_N7vMxth0FsXhb0HU6aE_fZ2BZTZaAZi0JGJTAQAZx_mNw2RdnPYJ3wcaTGzd3f49UgGB6TavaNOYuSPDNf5hUJMCp0kliy8wZKBS_pqWYx6jFqkFKKIGGCALKKS66RVPPkOKBWsySVyaX_0W7ThXTow2x2XKa6aCqS1a-gHZC_SXXAetLPYtXulnvTGM8SsqHlIQa35tDJY6LvV-1YZL0YqrmtA";

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

	getTestVar() {
		return _test;
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
