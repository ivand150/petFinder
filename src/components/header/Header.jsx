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
			<DropdownButton id="dropdown-species" title="Select specie">
				<Dropdown.Item className="species__options">
					<Link
						id="dropdown-species__dogs"
						to={{ pathname: '/list', search: '?type=dog' }}
						className="menu-button"
						style={{ textDecoration: 'none' }}
						onClick={() => {
							requestAnimals('dog');
						}}
					>
						Dogs
					</Link>
				</Dropdown.Item>
				<Dropdown.Item className="species__options">
					<Link
						id="dropdown-species__cats"
						to={{ pathname: '/list', search: '?type=cat' }}
						className="menu-button"
						style={{ textDecoration: 'none' }}
						onClick={() => {
							requestAnimals('cat');
						}}
					>
						Cats
					</Link>
				</Dropdown.Item>
				<Dropdown.Item className="species__options">
					<Link
						id="dropdown-species__horses"
						to={{ pathname: '/list', search: '?type=horse' }}
						className="menu-button"
						style={{ textDecoration: 'none' }}
						onClick={() => {
							requestAnimals('horse');
						}}
					>
						Horses
					</Link>
				</Dropdown.Item>
				<Dropdown.Item className="species__options">
					<Link
						id="dropdown-species__rabbits"
						to={{ pathname: '/list', search: '?type=rabbit' }}
						className="menu-button"
						style={{ textDecoration: 'none' }}
						onClick={() => {
							requestAnimals('rabbit');
						}}
					>
						Rabbits
					</Link>
				</Dropdown.Item>
				<Dropdown.Item className="species__options">
					<Link
						id="dropdown-species__small-animals"
						to={{ pathname: '/list', search: '?type=small-furry' }}
						className="menu-button"
						style={{ textDecoration: 'none' }}
						onClick={() => {
							requestAnimals('small-furry');
						}}
					>
						Small furry animals
					</Link>
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
