import React from "react";
import "./Filters.css";

function Filters() {
  const age = ["Age", "Any", "Young", "Baby"];
  const breed = ["Breed", "Cats breed", "Dogs breed"];
  const gender = ["Gender", "Female", "Male"];

  return (
    <>
      <section className="filter-container">
        <select id="filter-age" className="filter">
          {age &&
            age.map((option) => {
              return <option key={option}>{option}</option>;
            })}
        </select>

        <select id="filter-breed" className="filter">
          {breed &&
            breed.map((option) => {
              return <option key={option}>{option}</option>;
            })}
        </select>

        <select id="filter-gender" className="filter">
          {gender &&
            gender.map((option) => {
              return <option key={option}>{option}</option>;
            })}
        </select>
      </section>
    </>
  );
}

export default Filters;
