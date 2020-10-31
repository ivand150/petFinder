import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/action-types";
import store from "../stores/principal-store";

const clientId = "D0VMc2wkKULEd73mBJhIhVk7jiU1qx0UjWnqnYfPNdkuc1OEQR";
const clientSecret = "noTh3ruGSAiD3bWsSNeJsZnKAzvzQqsV7CQzol3P";

async function requestToken() {
  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  debugger;
  //comprobar que devuelve token
  dispatcher.dispatch({
    type: actionTypes.REQUEST_TOKEN,
    payload: data.access_token,
  });
}

async function requestAnimal(animalId) {
  debugger;
  const response = await fetch(
    `https://api.petfinder.com/v2/animals/${animalId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export { requestToken, requestAnimal };
