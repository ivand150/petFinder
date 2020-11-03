import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImFhOTZiZDYzZWM5Y2I2MWIzZjI2MTNiMjhjMzQ4NTc3NzhlYzRkZDM5OWUyODY0ZmQyZmE5OTA3MzQ4MzQ5ZTI3MGRiY2M5YTk0ZWE1MWJlIiwiaWF0IjoxNjA0NDAxNjM4LCJuYmYiOjE2MDQ0MDE2MzgsImV4cCI6MTYwNDQwNTIzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lLXuqxMtS-yf01UIcak8mLAP3JO-LfYYQnGE32wfAu42_nV6enHMC9Bq5Ltp1_3Lv6VVKtDURZRD8cnWga73wfZUFspA9vjaFG_B-gisbcB4bP9suunEkZGaoiMsWL4P60THDRG5xt9wW8NiEDOb9e9EABx7uY6bQpdsjDVWKzUZXACbOdbpR6GxeRpbo6DJSIXj3FUf0P6kl-6gavbsOSF1CztI8WZbvppl4X3g6oXgLJlImHYwDec-keIllssVP0XiCoxU97kED0OqGBj0-bPbUmGHr1j7P2f5dhltEp6AsOY8xT2J74pkWsHCTnEQsQV8gSxvPU8Ddp8iO5wJjg';
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
