import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";

const CHANGE = "CHANGE";
let _animal;
let _token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwd0NobVB0UjdWd0hHbkNEQVF0WGVUWEt3ZlZyWjNvVHhXQU5Nc3dERG1Tc1FqN05HdSIsImp0aSI6IjlmY2JhMzhiNzYwZTJhNWFjNGFjNGM1YWIxMzQ3N2YwNTk4OTI1YzAwYjk5NzA3ZWMzOGU4MjEwNDVkOWJhYTA0OTFjMTIzYTc0ZTY5YmJlIiwiaWF0IjoxNjA0Mzg2NTE0LCJuYmYiOjE2MDQzODY1MTQsImV4cCI6MTYwNDM5MDExNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.CY9btQxYFas83oBadYBdelVPcSp3nF-jaGFG7lpRpLDJqTWTVNv_KBpaYU_PUSA3QeOJ3pGOuCtVWO3QJhXFC0vc1No6bStXh5pwp0KhVblpz-yKbFEVqSKVx60ekYfGWQMml9yQT5DuDcOf50wXSe0DM0nlTBhVxpYYrjDu5fTfKz0ip7_WCeChRzJEtznF_KTg9TaYuTE_1lW69oZA3GFGDt2V1LbN3pHP1EE0hLxQyUKHQcrdx8KFdGZgC8twj1uhZN4ctCpFglq839OziBCR-v3YOZTGAt-L16FPhrKbb0qBo3PWp0GwxYgj5yY9yfQBXlLrL4ApzVjHcbemsQ";
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
