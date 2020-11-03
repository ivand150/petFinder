import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6ImMwNGY0NzYzMmUxMzJhOTBlNjEzYzEyMjBiZDgwNTljOTI1NGVkYWQzYmM0OTA5YTA3MGU1NDc5ZjUxNTE0ZGZlNTA4MDg5M2Q1YzVhOTcxIiwiaWF0IjoxNjA0Mzk1MzgyLCJuYmYiOjE2MDQzOTUzODIsImV4cCI6MTYwNDM5ODk4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.N1RnkGF2iU3UD6YIQ7oaNzeV2gOLQEgDNG6LIkACd00jtfE--A0Q-G2AWv8EXPoasxrYEgbf9T1Ofanq-4iKKkV2R7i1sH_nDwIu_1mP64CLiisY59hvT-Pq9pxZbcThpPRZv4_mITznN0w9MREUIZNmmXigS9EJPQTVVJNgpYS1Di4VQiM3FF4UICZRJtkNzgDW4Onh_TnxytG5cqqQ_UkXwNbJgYX49UttxSebNi3cW8eF-eOrlK69EDHTHJ4Lp-c_AVsN5ZUquGlyUdd-1oUCzACZ30Aemhm-3Fpn5MwoMRIldIbqALaY7Rdi6-qDJkrPmSaTO-ArxvGVkgPsBg";
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
      _test = "break";
      store.emitChange();
      break;
  }
});

export default store;
