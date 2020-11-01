import React from "react";
import "./List.css";

function List() {
  return (
    <>
      <main className="main-list-container">
        <ul className="list-pets">
          <li>
            <div className="pet-card">
              <img
                className="pet-card__image"
                src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9c013b390a4735863ccb17/6ccf02c311640e972469842d9ec378bc/1.jpg"
                alt=""
              />
              <div>
                <div className="pet-card__name">
                  <span className="name__pet-name">Kitty</span>
                </div>
                <div className="pet-card__details">
                  <div className="pet-card__age">
                    <span className="age__pet-age">Adult</span>
                  </div>
                  <div className="pet-card__breed">
                    <span className="breed__pet-breed">Breed</span>
                  </div>
                </div>
              </div>
            </div>
            <link rel="stylesheet" href="" />
          </li>
        </ul>
      </main>
    </>
  );
}

export default List;
