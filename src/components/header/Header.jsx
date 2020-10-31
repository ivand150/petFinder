import React from "react";
import BurgerButton from "./BurgerButton";
import "./Header.css";

function Header() {
  const countries = ["Mexico", "Canada", "USA"];
  return (
    <header className="header">
      <BurgerButton />
      <div className="logo">
        <img
          src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5f9d3d8395a20040a815a80a/5c4e9dda49a0f86d10b237adcbb43c78/584eb97de7011_thumb80.jpg"
          alt=""
        />
        <span>PetFinders</span>
      </div>
      <div className="search">
        <span id="search__icon" className="material-icons">
          search
        </span>
        <input id="search__input" type="text" />
      </div>
      <select className="header__dropdown-country">
        {countries &&
          countries.map((option) => {
            return <option key={option}>{option}</option>;
          })}
      </select>
      <div className="flex-spacer"></div>
      <button className="header__login">Login</button>
    </header>
  );
}

export default Header;
