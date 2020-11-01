import React, { useState, useEffect } from 'react';
import store from '../../stores/principal-store';
import { burgerClick } from '../../actions/actions';
import { Link } from 'react-router-dom';

function BurgerButton() {
    const [burgerClicked, setBurgerClicked] = useState(false);

    useEffect(() => {
        store.addEventListener(handleChange);
        const firstMenu = document.getElementById('burger-firstMenu');
        if (burgerClicked) {
            firstMenu.style.left = '-15px';
        } else {
            firstMenu.style.left = '-300px';
        }

        return () => {
            store.removeEventListener(handleChange);
        };
    }, [burgerClicked]);

    function handleChange() {
        setBurgerClicked(!burgerClicked);
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
                        className="first-menu-button"
                        id="first-menu__species"
                        onClick=""
                    >
                        Species
                    </button>
                </li>
                <li key="2">
                    <Link
                        to=""
                        className="first-menu-button"
                        id="first-menu__contact-us"
                    >
                        Contact us
                    </Link>
                </li>
                <li key="3">
                    <Link
                        to="/"
                        className="first-menu-button"
                        id="first-menu__main-page"
                    >
                        Main Page
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default BurgerButton;
