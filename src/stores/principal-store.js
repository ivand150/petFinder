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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjAyMjQwZWFhZGFiMmUwOWViODI1YTZhYTBiZDdjMTI1OGYwMWEzMmJkZDkyMjBkZGQ0ZGQ3YTVkMjM1MGZmNzM3ZGQyY2E4ZjZmNmI5NTlkIiwiaWF0IjoxNjA0NTkyNjU1LCJuYmYiOjE2MDQ1OTI2NTUsImV4cCI6MTYwNDU5NjI1NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.WW1CxTLBTQC-eAOaXN2obP0wVmCCi-3s-xqPBM8xUyunEtpDgAroiPSbKPdNVPscjYLLQTdK_NmLNyDOlIloOh1IrmwvVXQSvmKAyZ6jrZKVs4XJewD26VhggFtKZBFqOyg5ti6qCmWHqHezwX-mKqH-cxhPKo8R3cEO8xBCc0XCCqiz4BRCDQCNyDLszPIi4RmwZZQPJxgYQnvjlSfxRsP9j6JIBamYongT_UYaJ2koaPclPfoT-2PCFOUwDyEp0Nc5Trc8oMbDGJAPIeNR3DD0WPi8wKFknxsEz9f3Ao9UZl0TWZFo4fdrCQImW6BT9xzE_r_JxrqFdrOp2lLQaQ';

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
