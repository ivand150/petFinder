import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjkzNjMwNmRlODJmY2RkZWEwOGQ3OWZkNjZlODk3N2FkYzk4ZGI0NjE5NmU4Zjg1ZDdhNjMwNzYxZTYzMTI3MjJlM2Q1NGE0YTkxYzgwNzI2IiwiaWF0IjoxNjA0MzA1MzE3LCJuYmYiOjE2MDQzMDUzMTcsImV4cCI6MTYwNDMwODkxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.AT1NoVlHL0R0pFP-FOqAUltD0QLoFHgfW02auMrhHUkg83YdyK_JIaNdUyukp8KYz7XBfNuJPBtWvT2MizLSzyeQPJMQPluJSYl0e3dMTthvKKyo_trxsl9SJyg9ghwNIZtxmCrDPCI9R9eGod7Vulki1A2ZvIGcIktTnGI23aEXbd5gwtg2IMUPQPDXK0m-PK8kIQaEQDdOuI-CMH476DxMyUNIkWpqHfh1WuZ4_cZPI_krLSWZhq_phvuPTBSz8jRhQYU9vImByqb4NH7E5UwikP877IQZ-DyZlMDVLN9HHO_1ZH1eVsOHiE1fwIn6dSkB6YfQenv7ZUtJxQjtrA';
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
