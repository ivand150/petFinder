import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import store from '../stores/principal-store';

const clientId = 'D0VMc2wkKULEd73mBJhIhVk7jiU1qx0UjWnqnYfPNdkuc1OEQR';
const clientSecret = 'noTh3ruGSAiD3bWsSNeJsZnKAzvzQqsV7CQzol3P';

async function requestToken() {
  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();

  dispatcher.dispatch({
    type: actionTypes.REQUEST_TOKEN,
    payload: data.access_token,
  });
}

async function requestAnimal(animalId) {
  const response = await fetch(
    `https://api.petfinder.com/v2/animals/${animalId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.getToken()}`,
      },
    }
  );
  const animal = await response.json();

  dispatcher.dispatch({
    type: actionTypes.REQUEST_ANIMAL,
    payload: animal.animal,
  });
}

function burgerClick() {
  dispatcher.dispatch({
    type: actionTypes.BURGER_CLIC,
  });
}

async function requestAnimals(type = '', breed = '') {
  const response = await fetch(
    `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.getToken()}`,
      },
    }
  );
  const animals = await response.json();

  dispatcher.dispatch({
    type: actionTypes.REQUEST_ANIMALS,
    payload: animals.animals
  })
}

export { requestToken, requestAnimal, burgerClick, requestAnimals };
