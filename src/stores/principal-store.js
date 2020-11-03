import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6ImJiOGEzZDAzMDkzZDg1YjE0MTEyMGZkOGFiMzcwNjliYzk3ZTczYmE3YzQ1ODBiNzMwNTFmNjdlZDBhYWE5ZDdmMmNiZWQzNzVmZTY3MmViIiwiaWF0IjoxNjA0Mzg4NTgzLCJuYmYiOjE2MDQzODg1ODMsImV4cCI6MTYwNDM5MjE4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.t2PRBYnm_aXAx_AYObL5HcGXX1Yhq2eRqJzixGBpy3Xzlp2bUTvNhZDTM6E3f0S_cOQPDYBpRme6MeBKAFmvO1x_JcqCCFFkqC7fxQ-pX0GOwgc5YXHCR9tQOz9lAu7dZO1i9Fn3LpHzlwU7A6kfUz2tRrzzRbIyMJ0JrNUI-7jg6b6ZTbfrJDrVzUVy5QT8bCAVVkCWLVnJ8Xgisw9fYSjUO3pmpUAmUezBgDHWvfML0xBIGyw8QGwCsyq11biMUwyRZy0FuxqIJ8T4CiIR-JhlxvR2mz-IbL4COtwc6ggzs6r8FPBLRmVc9jv3QfN_OBTKnPbPQXV06cIEmZFHEg';
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
