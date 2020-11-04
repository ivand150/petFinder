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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImEwNWVkZTZiMGZmODA2MGFjNWU1MjcwODk1ZGEyYWUyNzAzZGJhMzQ3OTQxNDI0ZjViZDI4MDQ1ZTBmMmE2YTZkNzUzZjkxOTlkMTMwNzQ3IiwiaWF0IjoxNjA0NTI1NzUxLCJuYmYiOjE2MDQ1MjU3NTEsImV4cCI6MTYwNDUyOTM1MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Rc7uoP7tgeXxz4rbdprFU6Hlid7PPyz3rRhpTziOXVFbwr4Ikhx4Pt-x5OlLbW42gll_dUrfHiA0BetmKq9hQ59m9HFhVQiD64CkDJRikQ0Q78ze_x7l2FjcJKUUI0hhH-j7izIDXpjs7GTwjjtQ2PW83BvDm2z1hKCN_jqWw_syVsXyf0hmuSff0hT0pcrGUk0g5fcGAShDU2TSDrgG0wM--VzZ427tAnCSIaPIjOksj_w4TeDAU8AxVkXrKnMKXe86Bq2_uCeGo2F9GSkdGQZESIKhymn6Xxy0M1WmLr0W32qR8vhw-BAe9gVcF_TvCDaYjMNeNDICe0b2MU97TQ';

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
