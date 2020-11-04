import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import ScrollRandomCats from './ScrollRandomCats';

function MainPage() {
	return (
		<main>
			<Link
				to={{ pathname: '/list', search: '?type=dog' }}
				className="principal-button"
			>
				Find a Dog
			</Link>
			<Link
				to={{ pathname: '/list', search: '?type=cat' }}
				className="principal-button"
			>
				Find a Cat
			</Link>
			<ScrollRandomCats />
		</main>
	);
}

export default MainPage;
