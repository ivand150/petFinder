import React from 'react';
import { Link } from 'react-router-dom';
import { requestAnimals } from '../../actions/actions';

function BurgerButton() {
  let burgerClicked = false;

  function burgerClick() {
    burgerClicked = !burgerClicked;
    const firstMenu = document.getElementById('burger-firstMenu');
    const secondMenu = document.getElementById('burger-secondMenu');
    if (burgerClicked) {
      firstMenu.style.left = '-15px'; 
    } else {
      firstMenu.style.left = '-300px';
      secondMenu.style.left = '-300px';
    }
  }

  function speciesClick() {
    const secondMenu = document.getElementById('burger-secondMenu');
    secondMenu.style.left = '-15px';
  }

  return (
    <div id="burger-container">
      <button
        id="burger-button"
        className="material-icons"
        onClick={() => {
          burgerClick();
        }}
      >
        menu
      </button>
      <ul id="burger-firstMenu" className="burger__menu">
        <li key="1">
          <button
            className="menu-button"
            id="first-menu__species"
            onClick={() => {
              speciesClick();
            }}
          >
            Species
          </button>
        </li>
        <li key="2">
          <Link to="" className="menu-button" id='menu-button__Contact' onClick={() => {
            const firstMenu = document.getElementById('burger-firstMenu');
            const secondMenu = document.getElementById('burger-secondMenu');
            firstMenu.style.left = '-300px';
            secondMenu.style.left = '-300px';
          }}>
            Contact us
          </Link>
        </li>
        <li key="3">
          <Link to="/" className="menu-button" id='menu-button__Main' onClick={() => {
            const firstMenu = document.getElementById('burger-firstMenu');
            const secondMenu = document.getElementById('burger-secondMenu');
            firstMenu.style.left = '-300px';
            secondMenu.style.left = '-300px';
          }}>
            Main Page
          </Link>
        </li>
      </ul>
      <ul id="burger-secondMenu" className="burger__menu">
        <li key="1">
          <Link
            id="secondMenu__dogs"
            to={{ pathname: '/list', search: '?type=dog' }}
            className="menu-button"
            onClick={() => {
              requestAnimals('dog');
              const firstMenu = document.getElementById('burger-firstMenu');
              const secondMenu = document.getElementById('burger-secondMenu');
              firstMenu.style.left = '-300px';
              secondMenu.style.left = '-300px';
            }}
          >
            Dogs
          </Link>
        </li>
        <li key="2">
          <Link
            id="secondMenu__cats"
            to={{ pathname: '/list', search: '?type=cat' }}
            className="menu-button"
            onClick={() => {
              requestAnimals('cat');
              const firstMenu = document.getElementById('burger-firstMenu');
              const secondMenu = document.getElementById('burger-secondMenu');
              firstMenu.style.left = '-300px';
              secondMenu.style.left = '-300px';
            }}
          >
            Cats
          </Link>
        </li>
        <li key="3">
          <Link
            id="secondMenu__horses"
            to={{ pathname: '/list', search: '?type=horse' }}
            className="menu-button"
            onClick={() => {
              requestAnimals('horse');
              const firstMenu = document.getElementById('burger-firstMenu');
              const secondMenu = document.getElementById('burger-secondMenu');
              firstMenu.style.left = '-300px';
              secondMenu.style.left = '-300px';
            }}
          >
            Horses
          </Link>
        </li>
        <li key="4">
          <Link
            id="secondMenu__rabbits"
            to={{ pathname: '/list', search: '?type=rabbit' }}
            className="menu-button"
            onClick={() => {
              requestAnimals('rabbit');
              const firstMenu = document.getElementById('burger-firstMenu');
              const secondMenu = document.getElementById('burger-secondMenu');
              firstMenu.style.left = '-300px';
              secondMenu.style.left = '-300px';
            }}
          >
            Rabbits
          </Link>
        </li>
        <li key="5">
          <Link
            id="secondMenu__small-animals"
            to={{ pathname: '/list', search: '?type=small-furry' }}
            className="menu-button"
            onClick={() => {
              requestAnimals('small-furry');
              const firstMenu = document.getElementById('burger-firstMenu');
              const secondMenu = document.getElementById('burger-secondMenu');
              firstMenu.style.left = '-300px';
              secondMenu.style.left = '-300px';
            }}
          >
            Small furry animals
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default BurgerButton;
