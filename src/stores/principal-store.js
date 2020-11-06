import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _urlFilter = {
	type: [],
	age: [],
	gender: []
};
let _animal;
let _token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjQ4Njk3YmUwZjBhNzJlNjkxOGViMzI5Mjk0ZDBkYmI4Mzg3ZWM0ODM0MjJmMDM3NDliNGU4MWE3MmYyYzc3NmE0NmZlNTFlOTg0YTYyNThmIiwiaWF0IjoxNjA0NjUwNzEyLCJuYmYiOjE2MDQ2NTA3MTIsImV4cCI6MTYwNDY1NDMxMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.yo4uxRUPJogXTwVm7LoeiwTB-L9xliDw8CSBIqbYXeYm_jsI4C2Yqbhskh45hIGqbwVLHXaz8lfb6fz_--Gnj7gkLrdwBQfywCzlF9WG1KmEQ4grjfpwfeBX2U3J9HRlQXUVOg5GAEphAfNNMUXfrlExRTF0sJhFXmuxXQ_xd-mpmfgbeCYR1FXE5uRwyDAjfRdTFhxUuKyqxUnuvOuPXjCL_4TIhdPH-FA0nubBm_xj_X7tOFQZ3wA6lYZbXOfKLUVbOFWRujn8OWR3500OECPu3CGantvXd4qUOXE_lWNRBMm5CYxS5KunuQ3EJivkL2zJn0N0CH1S1yeZHtgjLQ';

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
