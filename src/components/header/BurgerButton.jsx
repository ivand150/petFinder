import React, { useState, useEffect } from 'react';
import store from '../../stores/principal-store';
import { burgerClick } from '../../actions/actions';

function BurgerButton() {
    const firstMenu = ['Species', 'Contact us', 'Main Page'];
    const [burgerClicked, setBurgerClicked] = useState(false);

    useEffect(() => {
        store.addEventListener(handleChange);

        return () => {
            store.removeEventListener(handleChange);
        };
    });

    function handleChange() {
        setBurgerClicked(!burgerClicked);
        const firstMenu = document.getElementById('burger-firstMenu');
        if (burgerClicked) {
            firstMenu.style.left = '-15px';
        } else {
            firstMenu.style.left = '-300px';
        }
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
                {firstMenu.map((element, index) => {
                    return (
                        <li key={index + 1}>
                            <button
                                className="first-menu-button"
                                id={`first-menu__${element
                                    .replace(' ', '-')
                                    .toLocaleLowerCase()}`}
                            >
                                {element}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BurgerButton;
