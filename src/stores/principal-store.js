import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImFiNmQwZmE5NTZjNDBmYzk2YTkxOThmYjhkZWM1YTMwMjU3MzMzYTJlMzYzZDVjNjM1MDJhMjk4YTg0OTBhMGQxZWQ0MTE4Nzc2ZjViY2MwIiwiaWF0IjoxNjA0MzU0MjE2LCJuYmYiOjE2MDQzNTQyMTYsImV4cCI6MTYwNDM1NzgxNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.SEuTLtSfg7VD5ZZ95XQ9UI0uSVOa2hnf3CrLtUbnXNvlpaiyx1yrTl3V8_tFPj41dMa9aWzMEoMKiUiEZrUTf7lUO3wPG6vvRXnxtNRH-Y97sCDxiekR9wWSZx1VdrFjtNDCtgOFgvcScVaHuLN1EbM9W4vxof8oj11T9Y-JUa9U3y5gbb3ci-tInVmHbsN_PdBj61q3KUZ2eL1rHwZ1DDrEn-WPxPDEYlq5vsXKD4-bgd99NTbQROnFIy5-ADMcB7RQliap_fbVM01GrgG3V-hpxKDd1YqZirx9DtIr1gYYmT_lzr84ySaapHKQbPP6rJ5tTpSwxxESRzXYljxtaw';
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
