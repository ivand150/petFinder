import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImI0ZTY2MGUxMWYwNzBkNmQxYjQwOTliMDAxMTExZDBmMzRmNzJmYjM1MGM4MzljOGFiYjdiYjcyN2Q2Y2EwZWY5MjZlZWZmMjI2ODlmNDBjIiwiaWF0IjoxNjA0MzkzNjkwLCJuYmYiOjE2MDQzOTM2OTAsImV4cCI6MTYwNDM5NzI5MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.saIqEiOzQ4uFbMwv1jj8N1xF-aX6-IuRUpag-B4Kq_zJL9efv-dwX2UtyqzVIiUgPNmp8Zta7zpASOhXQjg5EjPpbLCdLRA48rtPjmW4ZydjKWQkJ6UAlJyQYEkPihwNu5Ntl7p83jm9retjhd6VkKrhLCoBdzuytFLJ4ytJHVgUWnukyaIbPYyjd1joiJplSZWCx-DTIoMQ5eeKyrng1fbDpzv5tMiZ1vu43znj5yFoxWmRef7uCkfrprlna-KIkcWS9-blUPlRlYc4-m-8HK7yZB4YN6xf9-stqHpNUv1_lSGrcu5tVuGgCbqBa3GLEpmqvLbGOsjANur5zCQceg';
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
