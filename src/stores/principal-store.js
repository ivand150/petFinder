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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6ImNlOWU4YzczZTVlYmQ3YzI4OGExOWYyZGI5NGYxYzJhMjU2ZjAzYjkzZWEzMWRmODA1OWNlNDg4MWM1NDFiOTUyNzg5Mzc3ODRkNjQ4MzJjIiwiaWF0IjoxNjA0NTIyOTg3LCJuYmYiOjE2MDQ1MjI5ODcsImV4cCI6MTYwNDUyNjU4Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.nPrlezswKtaQHnxFv2O-m_M-gtuqb6EkLxtVEli_vhVkuxK8KhUOm49nNoT4AOZX8B5AXE4ztn_c_MX0MIbJAEudJHMKk0zfQ_W5uvD6hsg5qQKuOIl0q12-5rrie672VMc9LdxcEGAItTwmms7MpJfF3dfrZahTWioSq2lIAkP8_RxbmhbAnX2RYoHrU8bQimrwsjAoxgmCPr4S2m3aerqu1187fTSTXLl5DldhiDdtdJgKf29FSFithkusLqNwXVDlChL4tinlBmqPzU_AB1P7YxCd524uJ1u3GdLgLWUt4WbJVpiFxtavTJZcYX-fs7W7NUngKHVChLeqSCeSLw';

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
