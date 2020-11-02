import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjVjZjQ4ZmFhMmJmNDFmMGI5N2RlYTcwODliYWY3ZGMzOWFhNDhiYjc2NWEwNGRkNGY1ZjFlYTgzOTc3ZWEzZmZmZDg4MTRjNzBkZjk4NjQ3IiwiaWF0IjoxNjA0MzA1MTg0LCJuYmYiOjE2MDQzMDUxODQsImV4cCI6MTYwNDMwODc4NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Mdb8B-Vqpkd9_L5JLct51L1-b1Dq7bnX6on8lDFwnBioGMESR51k6TGmxzvixkSuLC0BXqt8doxZOR9xPSotV-KlWTZGroxXjvBDYWCqsAeluBpXEhCAGnwShrp0V_YEZkvB0asjy2UoN3L6tYV0ut91O9aaIEz-fb3zW8Ab-7e6L_U5aRmsDzrfc0BdRqAAHOA62BiTuwRrCJ1bbCANJpmddqN8LsSS6vnUseeMPjDnqusPk8QzB5hYFSRqlpQJOoOf9Uve3Zp3e8VAWDLpENJRIJRuFzvWhiAkkKcryV6BfZU_iqktROnTnpIyI-1H9yIczBt9c1nLtuHbuS5LBw'
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
    debugger;
    return _animals;
  }

  removeLastComma(str) {
    return str.slice(-1) === "," ? str.slice(0, str.length - 1) : str;
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
