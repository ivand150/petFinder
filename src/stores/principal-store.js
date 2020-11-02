import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjMwMWVlM2M2MmU5ZWEyNTEwZGM1YzYxYzQzNDhiZmJhOTJlY2EyYmY2YjQ0Nzc3OTc2OTlkZTMwMjM2ODQ2Mzk4ZWNhZTNlM2MzYTJmZGFlIiwiaWF0IjoxNjA0MzEwOTkzLCJuYmYiOjE2MDQzMTA5OTMsImV4cCI6MTYwNDMxNDU5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.OdjxEqzl9hIIsGGpX8x4Yn7QxRjEH5LHoR1eYRweb5zw8AyoTG30C3-AndAWkWi87OCY7l29rZwG8aICUtc24HPbjf9N_4TCer6Q0_50IoytrRyWfwvTXfbQofkHVldoJX-rz0VH0SCpWwZv5yvh42cpCX_L3GZqahaKZVKI8xoJ2I2AEpBagPM8LP2HOKRVSzxbEg28BfKKIWvVDgiqouDx_1V2A9lHiJX9Cs8xoIGSa5-Y0Txs1bTtxnN2CKnu64VsLgKUUCL8R5wObRbY2IKUhf2ER_eety31UVd5-uNzlfN3zPWfueR3fY15U_sBqiATvRMG8a7eMsYPcnQFrA";
let _animals = [];

class Store extends EventEmitter {
  getToken() {
    return _token;
  }

  getAnimal() {
    return _animal;
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
