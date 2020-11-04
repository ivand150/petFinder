import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Card from 'react-bootstrap/Card';
import { requestAnimals } from '../../actions/actions';
import ScrollRandomCats from './ScrollRandomCats';

function MainPage() {
	return (
		<main className="principal-page">
			<img
				src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5fa2b00bd4bb186a29e0a965/a8cc9a9e6ff7685d1ab53340b34e3822/pexels-photo-1056251.jpeg"
				alt=""
				className="background-img"
			/>
			<h1 className="main-page-title">PetFinder</h1>
			<div className="find-dog-cat-buttons">
				<Link
					to={{ pathname: '/list', search: '?type=dog' }}
					className="principal-button"
					onClick={() => {
						requestAnimals('dog');
					}}
				>
					Find a Dog
				</Link>
				<Link
					to={{ pathname: '/list', search: '?type=cat' }}
					className="principal-button"
					onClick={() => {
						requestAnimals('cat');
					}}
				>
					Find a Cat
				</Link>
			</div>
			<Link
				to="/list"
				className="principal-button"
				id="other-animals-btn"
				onClick={() => {
					requestAnimals();
				}}
			>
				Find a pet
			</Link>
			<ScrollRandomCats />
			<div className="volunteers-adoption-cards">
				<Card className="main-page-cards">
					<Card.Img
						variant="top"
						src="https://trello-attachments.s3.amazonaws.com/5fa2bd274867f866085bb1d2/626x417/3d2cb6bd2897c3198997d984ea32d081/volunteer.jpg"
						alt="volunteers"
					/>
					<Card.Title>Volunteers wanted!</Card.Title>
					<Card.Text className="cards-text">
						We want to appeal to all those who want to dedicate part of their
						time to abandoned animals. These animals need volunteerism to be
						able to enjoy the walks, caresses and affection.
					</Card.Text>
				</Card>
				<Card className="main-page-cards">
					<Card.Img
						variant="top"
						src="https://trello-attachments.s3.amazonaws.com/5f9bf9da4ef72b5e96d70d02/5fa2bd274867f866085bb1d2/42c318067e3316c6a601362bc92fbd7b/adoption.jpeg"
						alt="adoption"
					/>
					<Card.Title>Adoption</Card.Title>
					<Card.Text className="cards-text">
						Adopting is the most beautiful love that we can give to the pets.
						With this gesture you will receive unconditional love from the
						noblest beings.
					</Card.Text>
				</Card>
			</div>
		</main>
	);
}

export default MainPage;
