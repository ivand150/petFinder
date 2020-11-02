import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
let _animal;
let _token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJEMFZNYzJ3a0tVTEVkNzNtQkpoSWhWazdqaVUxcXgwVWpXbnFuWWZQTmRrdWMxT0VRUiIsImp0aSI6IjQ5NmFhM2VmYmY4ZjNlODE2OTgzOTA4NzdjYTc3ZWYzYjFmMjBiNjM2YTU4Nzk3MTgxYjExMTc4MTAyMWQ2OTcyODdkZjM3OGIxZTUxODgyIiwiaWF0IjoxNjA0MzQwNzk2LCJuYmYiOjE2MDQzNDA3OTYsImV4cCI6MTYwNDM0NDM5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.CWzi9uUTiJf_tuZ7JcHMlx793gPSU3eAJEmNMA6CnO1JY7yXKy47SIHxSiFWPZgIFCLaAUtIBbD77HtLng0d4-8tLJmW4k1ptUN_0IYl78JyySw2It7BkCTEIjhavne6ApNM01OEPihw7eNds-LzJJLOkjMrfWsf4YmOfNZxijRo3uaFZTg8tITgVWzf0pYv43mYriQSkhpRMjyOU2QwAV7x91Cw_ER4hUUuX4IDjO8zY44hQAvVQ8oeHuPh4fbI8G3Pp-jErqdMkBNvG3XHyMjW368bMvxCMip5IihmiqJ02V5TyfSFK1-uuUCFWBz05L5ndbpoZkIQwzR9WPDtmA';
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
