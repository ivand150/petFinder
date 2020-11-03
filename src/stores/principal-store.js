import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjZhZGI1NTZmNzkxZGMzMTQ1Y2UwOTE3MGVjNTc4ZGIyZjI5Nzg3NDE5YjA2ZTdiNmIxN2ZlODA2YzQ2NWU2OWRhMTljNzcxZDE2ZWZkMDM2IiwiaWF0IjoxNjA0NDIyMzc3LCJuYmYiOjE2MDQ0MjIzNzcsImV4cCI6MTYwNDQyNTk3Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.iEF61b3MkXOgY3EWgXllZ-t-WMMfU2BfEgNZiqGaLptuGeEXwfAeN9wYoTeCxlvO0NSTnSr78TGjCEGQi0wg0nNkvmUjGR3nHUDUcfw2FBPoanG_4-hSJs-vLQhL7nPs9nSh4eoIltT9rA29n5OQM_k9I4Gi-jPzA2MgOUXGp--7u_TeEVh-fDq2mppVZyUIE96A27Ob3HOyDEBCeM0ODJAwHMMJzXbRUE6-uKq0uocLeNahPM2lIVrBcaQTeZOAt5vwNgeDVMOBt_Ki_fAsHDPtDKZ3fXbDgEY_wxonUNP8CoP747Aksr9DqcAfB_wh0qC3WgjJ9oBvbnakEjJS4Q';
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
