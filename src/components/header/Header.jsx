import React from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';
import './Header.css';

function Header() {
	return (
		<header className="header" id="header-test">
			<BurgerButton />
			<Link to="/">
				<img
					className="header__logo"
					src="https://trello-attachments.s3.amazonaws.com/5f9d3d8395a20040a815a80a/768x727/6b9e6b190008963e1377a82e5497b4c1/dogcat2.png"
					alt="logo"
				/>
				<p class="logo-name">PetFinder</p>
			</Link>
			<div className="flex-spacer2"></div>
			<div className="search">
				<span id="search__icon" className="material-icons">
					search
				</span>
				<input id="search__input" type="text" placeholder="Search ..." />
			</div>
			<div className="flex-spacer"></div>
			<DropdownButton id="dropdown-species" title="Select specie">
				<Dropdown.Item
					as={Link}
					to={{ pathname: '/list', search: '?type=dog' }}
					className="species__options"
					id="dropdown-species__dogs"
					onClick={() => {
						requestAnimals('dog');
						store.resetFilterOnClick('inputBox');
					}}
				>
					Dogs
				</Dropdown.Item>
				<Dropdown.Item
					as={Link}
					to={{ pathname: '/list', search: '?type=cat' }}
					id="dropdown-species__cats"
					className="species__options"
					onClick={() => {
						requestAnimals('cat');
						store.resetFilterOnClick('inputBox');
					}}
				>
					Cats
				</Dropdown.Item>
				<Dropdown.Item
					as={Link}
					to={{ pathname: '/list', search: '?type=horse' }}
					id="dropdown-species__horses"
					className="species__options"
					onClick={() => {
						requestAnimals('horse');
						store.resetFilterOnClick('inputBox');
					}}
				>
					Horses
				</Dropdown.Item>
				<Dropdown.Item
					as={Link}
					to={{ pathname: '/list', search: '?type=rabbit' }}
					id="dropdown-species__rabbits"
					className="species__options"
					onClick={() => {
						requestAnimals('rabbit');
						store.resetFilterOnClick('inputBox');
					}}
				>
					Rabbits
				</Dropdown.Item>
				<Dropdown.Item
					as={Link}
					to={{ pathname: '/list', search: '?type=small-furry' }}
					id="dropdown-species__small-animals"
					className="species__options"
					onClick={() => {
						requestAnimals('small-furry');
						store.resetFilterOnClick('inputBox');
					}}
				>
					Small furry animals
				</Dropdown.Item>
			</DropdownButton>
			<div className="flex-spacer"></div>
			<DropdownButton id="dropdown-countries" title="Select country">
				<Dropdown.Item className="countries__options">Mexico</Dropdown.Item>
				<Dropdown.Item className="countries__options">Canada</Dropdown.Item>
				<Dropdown.Item className="countries__options">USA</Dropdown.Item>
			</DropdownButton>
			<Button variant="primary" id="header__login">
				Login
			</Button>
		</header>
	);
}
export default Header;
