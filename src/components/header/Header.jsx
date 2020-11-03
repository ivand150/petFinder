import React from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { requestAnimals } from '../../actions/actions';
import './Header.css';

function Header() {
  return (
    <header className="header" id="header-test">
      <BurgerButton />
      <div className="flex-spacer"></div>
      <Link to="/">
        <img
          className="header__logo"
          src="https://trello-attachments.s3.amazonaws.com/5f9d3d8395a20040a815a80a/768x727/6b9e6b190008963e1377a82e5497b4c1/dogcat2.png"
          alt="logo"
        />
      </Link>
      <div className="flex-spacer2"></div>
      <div className="search">
        <span id="search__icon" className="material-icons">
          search
        </span>
        <input id="search__input" type="text" placeholder="Search ..." />
      </div>
      <div className="flex-spacer"></div>
      <Dropdown id="dropdown-species" title="Select specie">
        <Dropdown.Toggle
          className="header__dropdown-species"
          id="dropdown-species__title"
        >
          Select specie
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            id="dropdown-species__dogs"
            className="species__options menu-button"
            to={{ pathname: '/list', search: '?type=dog' }}
            onClick={() => {
              requestAnimals('dog');
            }}
          >
            Dogs
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            className="species__options menu-button"
            id="dropdown-species__cats"
            to={{ pathname: '/list', search: '?type=cat' }}
            onClick={() => {
              requestAnimals('cat');
            }}
          >
            Cats
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            className="species__options menu-button"
            id="dropdown-species__horses"
            to={{ pathname: '/list', search: '?type=horse' }}
            onClick={() => {
              requestAnimals('horse');
            }}
          >
            Horses
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            className="species__options menu-button"
            id="dropdown-species__rabbits"
            to={{ pathname: '/list', search: '?type=rabbit' }}
            onClick={() => {
              requestAnimals('rabbit');
            }}
          >
            Rabbits
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            className="species__options menu-button"
            id="dropdown-species__small-animals"
            to={{ pathname: '/list', search: '?type=small-furry' }}
            onClick={() => {
              requestAnimals('small-furry');
            }}
          >
            Small furry animals
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="flex-spacer"></div>
      <Dropdown>
        <Dropdown.Toggle className="header__dropdown-country">
          Select country
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="countries__options">Mexico</Dropdown.Item>
          <Dropdown.Item className="countries__options">Canada</Dropdown.Item>
          <Dropdown.Item className="countries__options">USA</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="primary" id="header__login">
        Login
      </Button>
    </header>
  );
}
export default Header;
