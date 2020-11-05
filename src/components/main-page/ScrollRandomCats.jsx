import React, { useEffect, useState } from 'react';
import './ScrollRandomCats.css';
import { requestToken, requestAnimals } from '../../actions/actions';
import store from './../../stores/principal-store';
import Card from 'react-bootstrap/Card';
import { requestAnimal } from './../../actions/actions';
import { Link } from 'react-router-dom';

function ScrollRandomCats() {
	const [token, setToken] = useState(store.getToken());
	const [animals, setAnimals] = useState(store.getAnimals());

	function handleChange() {
		setToken(store.getToken());
		setAnimals(store.getAnimals());
	}

	useEffect(() => {
		store.addEventListener(handleChange);
		if (!token) {
			requestToken();
		} else if (!animals || animals.length === 0) {
			requestAnimals('cat');
		}

		return () => store.removeEventListener(handleChange);
	}, [token, animals]);

	return (
		<>
			<div className="cats-tittle">
				<p className="cats-tittle__text">Cats available for adoption</p>
			</div>
			<section className="scroll-cats">
				<ul className="scrollable">
					{animals?.map((animal) => {
						return (
							<li className="cat-card d-flex justify-content-center">
								<Card
									id="cat-card-btn"
									style={{ width: '100vw' }}
									as={Link}
									to={`/details/${animal.id}`}
									onClick={() => requestAnimal(animal.id)}
								>
									<Card.Body>
										<Card.Img
											className="horisontal-images"
											variant="top"
											src={animal.photos[0]?.medium}
										/>
										<Card.Title className="card-cat-tittle">
											{animal.name}
										</Card.Title>
									</Card.Body>
								</Card>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}

export default ScrollRandomCats;
