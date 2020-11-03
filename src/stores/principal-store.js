import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImE2YjU3NDc0YjlmY2I1ODMwNDFiNThiY2FmNDE2MjhkNzZjMjZiMmI0Yzg3YmU2NzQzMDFkZjU3ZjI4ZmIzNjZkMzMwYTA4MmQwYjg3ODM3IiwiaWF0IjoxNjA0NDI1OTU5LCJuYmYiOjE2MDQ0MjU5NTksImV4cCI6MTYwNDQyOTU1OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.RIHZnw8oPrEyzyBJJ0pxfhnED5B17WRN28lnLGppD1pTSzZbELMLdwTRIKXpCgVvB_6QgAt1irvmt1bhEXbChYZ8ifs-cBVV4CfIhc5LBv8AnVcP9JcOv4hWMo1Dj34Hyb_zXHxxefqmVISthvJh1n0x3gzfJPftciTPvTtKJgyJEuFzmjv9EE26q1GqkGogYmfLBrSTJSHA31opswIyRhfZU6bUMTKW-0vHGZz_W5lTiV4NaHYvQYyTOTzSbE6n5UM-f3AT8Nv-lYYsp5LC9Vkv1onT1dLyPPmVxOOmLpUpE-cPx_gO2Tdtc0LbpI-RVrlskOWGJlzwmKAlhqhmHg';
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
