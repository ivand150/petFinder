import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjY2ZTI1MTNkMDRmZTYwODBmM2ZhZDhjODNmMjQ5ZjE2Y2E0Y2U5MTMyNmZiY2ZiOWIxYTI0MjFlYjZkMWYxOTBmMzBiMGUwNmJjMDdmZDU3IiwiaWF0IjoxNjA0Mzk3OTczLCJuYmYiOjE2MDQzOTc5NzMsImV4cCI6MTYwNDQwMTU3Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.J6UN9za_IMI7f8EEuqX3d1xnYsAnVhH59-8axi6OESSMYo-tIXFzvDKJPcmJwXyH5m4TQGNtg1XbwOxGKb_ju1_TVDbqQGu1C2qziPJqHzP9hoP4VeFw211vQOFYSIJIDgwVYzEHUyoc15WUmqfm6wYw-Mw4rBkE9P8_Ah-Cal50NEdEBisPWx5Sg4Ab55dwOE7o5-AUHa1Rt1J7OLs0SBrU2wt4ZsPQKdhC-amogacvFjZ4eNkmaTInomSl_LS3Rybi3TC4BRWXzytxaYOv4coXcnLxCCK4CYtJ0Onic29hAUnzv5PhuOt7K9qjqrN_6dlKSWkt31cBt-ggjYXW8w";
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
