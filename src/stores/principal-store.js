import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6ImRiMTMxMzc0Y2RjZGJjZGE2MDFlODQyZTMzOGQxYzYxNDBhMTNiODYxMjdkNGU0NDYyNGFmYzdkNmU5MDdmZTc3YjgwMzE4ZTJkYmQxMmYzIiwiaWF0IjoxNjA0MzkxMzc1LCJuYmYiOjE2MDQzOTEzNzUsImV4cCI6MTYwNDM5NDk3NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.TcoCALTZsPXasmEAh18fvdRN_tltDOvciFcLluoVZZPbrgfuPPrNbhp_EqdLBlk76SZuDYyj6FvZbzT2EQ96PiarqPti2dcM9Bk_QGQIzkSbPnFzPX9OHqIPDqLLODzJmkJbI4JQQWCUsu_PIWpHPtuOsdvsJ6PXL4WY3zTIY0mWZCuqxwzIqk4SC-IZVLz5j2mqkh4_zeBDZn-P4zU-n3TaOBZSd3hOUcj75gg6wKMWIB4Arw7A6YkQd1I34agtwMmdltDAwwUqo0DwMcfowM294mTb6bEKOL77wu0ZZrAy4AKSdE2YVLqdkEgtKHZp8RgjMQjTnehwMy1TEqLYaQ";
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
