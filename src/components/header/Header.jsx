import React from 'react';
import BurgerButton from './BurgerButton';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header() {
  const countries = ['Mexico', 'Canada', 'USA'];
  return (
    <header className="header">
      <BurgerButton />
      <img
        className="header__logo"
        src="https://trello-attachments.s3.amazonaws.com/5f9d3d8395a20040a815a80a/768x727/6b9e6b190008963e1377a82e5497b4c1/dogcat2.png"
        alt="logo"
      />
      <div className="search">
        <span id="search__icon" className="material-icons">
          search
        </span>
        <input id="search__input" type="text" />
      </div>
      <div className="flex-spacer"></div>
      <select className="header__dropdown-country">
        {countries &&
          countries.map((option) => {
            return <option key={option}>{option}</option>;
          })}
      </select>
      <Button variant="primary">Login</Button>
    </header>
  );
}
export default Header;
