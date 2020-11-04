import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImM2ZmRmNGVkM2EzYWJiNDMzNjRlODQxMTBjOTFlZjBkZGYzNGE0YTdlOTAxOGY4MDhmNzgxZTM3ZGRiZGRjZmQ0NzdmZTcxNjkzMTg5NWQzIiwiaWF0IjoxNjA0NDM2MDYzLCJuYmYiOjE2MDQ0MzYwNjMsImV4cCI6MTYwNDQzOTY2Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.Ck72mlNQEeHqOirQ1l_tpWzUfPyQb6zTcVuSlG9R0DeJ9M8jP03EDXOc6QzsY7CUd9AcTe0sZ1OayAAChGyUXm9rRxSxMczx58hd_xac1YnQKHB1a_eJ1fGclEEDQzQpe-HFu3a1t0RuUu64xmVMqfREhH41vWSkcGFcxSdlTqYBGwORJwKnzmea8HpBch54Ic06dEv3hjQDqstyMVdSDl5w9VWYcw647Y_o4RZF4e8nidZSQNAWCmdVo30dDp0DSzGljQLa4sYSRiVAqtDE5QV36u0Bp9Lxxz-Jh4MJBGo0vOiXC-OiTu_MGARU8z3qtt3PKNt4PO3_VWKqMFaEBQ';

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
export { Store };
