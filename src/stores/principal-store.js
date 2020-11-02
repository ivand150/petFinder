import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6Ijg5MzczMzhmZmYwMDc4ZmViYmQyM2NkNjFkNDkyOTQ2MTBjMzBkYTU5MmUxZjQ0OGI1ZGVhODZkYWE4Nzk0NWZkMmEwYjgxODYzZjQyZTZiIiwiaWF0IjoxNjA0MzQ0OTM0LCJuYmYiOjE2MDQzNDQ5MzQsImV4cCI6MTYwNDM0ODUzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.zaT46-I7fnjkKrKQVR0K5tMnMT1UC2VHWLFyRrSIk0q-aVbk2-1F84vY274WBYoUTaIda7FUTwLv9Eu2RNCuF7U5ecuFKQSO-tvqDjBVHRbtsK07liZkIPYD8eUTyKddXvDoHpHu-Io8aH36cb9RijYH_CSuV89v17yCM-ArVbQL-1mTejv9a53T1-Vv2hqd3GgKBHvcx7gsmdUOvJ3LPZMbT2RekIXO9hb_0NZeXTGkbz8vPM3xe2QJee0hVrpAIwZxnI5FUb_Jywih953x1WvRaFTe5-jVLi5jeJ_KaPzwf2pLWSqjvztwLaCQkIgoTB1zxEkSpfjfblEMW2SulQ";
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
