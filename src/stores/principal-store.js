import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjBhOTNkNWMxNTZlMzVlNzIwZjczZmJmNGU1MDVhODZjNjY4OTNjNjJlNTI2ZjExY2FmYjViNzVmNTEzMWUxMWUzNzYzZDg5OWVjZjNiZjg0IiwiaWF0IjoxNjA0Mzk0Nzk3LCJuYmYiOjE2MDQzOTQ3OTcsImV4cCI6MTYwNDM5ODM5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.se772Ph371Q4spcPnDx0HligGlQldbihrHtdhkHykWC9h1M28YpMD8ejJwcYowebw54fItfp6uzoXDnO2Y96FyX45wnKD29stBByD96je66uxXLCOrqlGPwKFuzHXwQErU9qFyKyD6Zd6VP2vBreLGJqeqfHHoQkANs4VntLL3EO9XF9k8lIAKQIxe0z88huIJ8ZaHQndff1gZdHt_wNkuHVptwkj-fMbJKGqMwamRX0GVy9jjrwubUMdzebefkd_Sojdt7B_ZjmQiD9x3rRcmRbX96RCmY3VB7uFoCgEa3TGXj4CY8q0qPG0ePO4cEdxfX4vF3Kb7lrmnO0dFLzwA';
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
