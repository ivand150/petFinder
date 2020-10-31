import React from "react";
import "./../header/header.css";

function Header() {
  const countries = ["Mexico", "Canada", "USA"];
  return (
    <header className="header">
      <select className="header__dropdown-country">
        {countries &&
          countries.map((option) => {
            return <option key={option}>{option}</option>;
          })}
      </select>
      <button className="header__login">Login</button>
    </header>
  );
}

export default Header;
