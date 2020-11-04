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
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImYyOWFmNWYxYTI2ZjM5ODFlNzFlNjYwZGVlNDk3MTI1MDY5ZDNlYmI2MzA0YTU1ODI3MGRjOGM4MWZjNzhkMDU5ZGNkZGZhMDAxZmZmNDVhIiwiaWF0IjoxNjA0NTA3MjQyLCJuYmYiOjE2MDQ1MDcyNDIsImV4cCI6MTYwNDUxMDg0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZcFe78dVVlwzPjr-4R46rw93o_pwdYdUHfhbHdpOuFF3l4eVZt43-KJHSL9zHssQxwhOdhOPOutBeNbEt4tnng97QjWbb73gMKCslQx54pi3kk3kxTaUBNMaSMyyCsWIjLcScMMvBPw47Rq1fFKnLotd0DZK5nIHQpag0wuCFrjhnKUOPnOHkidiZKpvLMeJo5EdxQ1duHAlmffUYP-eDnb-iepCEj5PQWwEjsHT-OrHyTKCCshdStYF0wjEU6_cOjzfIQQKbKTTHM1VTmMiT8zdq_S-MKypaga21CYzkSkZpIF4-XtS6PPdN5Q_EpzrG68rcX2G_bX5bLsjIsIr0Q';

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
			.filter((element) => {
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
