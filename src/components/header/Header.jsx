import React from 'react';
import BurgerButton from './BurgerButton';
import './Header.css';

function Header() {
    return (
        <header>
            <BurgerButton />
            <input type="text" />
        </header>
    );
}

export default Header;
