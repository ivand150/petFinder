import React from "react";

import "./List.css";

function List({ animals }) {
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
