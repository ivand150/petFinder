import React from "react";
import "./Filters.css";

function Filters() {
  const age = ["Age", "any", "young", "baby"];
  const breed = ["Breed", "cats breed", "dogs breed"];
  const gender = ["Gender", "femail", "male"];

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
