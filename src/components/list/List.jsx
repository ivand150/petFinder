import React, { useEffect, useState } from "react";
import { requestToken, requestAnimals } from "../../actions/actions";
import store from "./../../stores/principal-store";
import "./List.css";

function List() {
  const [token, setToken] = useState(store.getToken());
  const [animals, setAnimals] = useState(store.getAnimals());

  function handleChange() {
    setToken(store.getToken());
    setAnimals(store.getAnimals());
  }
  useEffect(() => {
    store.addEventListener(handleChange);
    if (!token) {
      requestToken();
    } else if (!animals || animals.length === 0) {
      requestAnimals();
    }
    return () => store.removeEventListener(handleChange);
  }, [token, animals]);

  return (
    <>
      <section className="main-list-container">
        <ul className="list-pets">
          {" "}
          {animals?.map((animal) => {
            return (
              <li>
                <div className="pet-card">
                  <img
                    className="pet-card__image"
                    src={animal.photos[0]?.medium}
                    alt=""
                  />
                  <div>
                    <div className="pet-card__name">
                      <span className="name__pet-name">{animal.name}</span>
                    </div>
                    <div className="pet-card__details">
                      <div className="pet-card__age">
                        <span className="age__pet-age">{animal.age}</span>
                      </div>
                      <div className="pet-card__breed">
                        <span className="breed__pet-breed">
                          {animal.breeds.primary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default List;
