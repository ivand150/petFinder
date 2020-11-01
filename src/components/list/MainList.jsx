import React, { useEffect, useState } from "react";
import { requestToken, requestAnimals } from "../../actions/actions";
import store from "./../../stores/principal-store";
import "./MainList.css";
import Filters from "./Filters";
import List from "./List";

function MainList({ match }) {
  const [token, setToken] = useState(store.getToken());
  const [animals, setAnimals] = useState(store.getAnimals());
  const type = match.params.type;
  const breed = match.params.breed;
  const gender = match.params.gender;
  const age = match.params.age;

  function handleChange() {
    setToken(store.getToken());
    setAnimals(store.getAnimals());
  }
  useEffect(() => {
    store.addEventListener(handleChange);
    if (!token) {
      requestToken();
    } else if (!animals || animals.length === 0) {
      requestAnimals(type, breed, gender, age);
    }
    return () => store.removeEventListener(handleChange);
  }, [token, animals, type, breed, gender, age]);

  return (
    <main>
      <Filters />
      <List animals={animals} />
    </main>
  );
}

export default MainList;
