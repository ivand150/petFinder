import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImQ3YjYwMjc0ZmNkOTAwMDQ3YWI2YjQ4Yjk4YjFiMjhmYTMwNTk1OTMxNTYxNWZmZjdhZTgxMzlkYzM1NjEwNzcwNWI0M2QxYjhhYjQ0MWM0IiwiaWF0IjoxNjA0MzkyMjk1LCJuYmYiOjE2MDQzOTIyOTUsImV4cCI6MTYwNDM5NTg5NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.RQpzfiru0RRD-ZZuiWiIfWENK03hUUED3z4zmfoD66Ik2PXUOctgc-5bBjTAZSL0ZJ44512mQ3aGCjo0QRrK7AN_U5GP1bxgqXWbpWC3HW7W8rsO-qsZFplDVZ8kYDEowKZWVNeyq790bOGS4DGlDSx56Nkf3DSseI5SDaNBUa1CuAkt3KA62aGm9Z1VjqlghIr4qtIt_ifvydDYONeDlC_ChyBdxft1cVJ4vF8AnkXHQRc2h2Cw80B-GT5UfbdDNpijuvpKCdE1CZs9EYb393UWrBcksIdkFzfcC5jUjC9_4h-WXvm8-Augv0pXJgT-B4EpacOLDa0sof6DgmeFZg';
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
