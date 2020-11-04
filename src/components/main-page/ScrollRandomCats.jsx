import React, { useEffect, useState } from 'react';
import './ScrollRandomCats.css';
import { requestToken, requestAnimals } from '../../actions/actions';
import store from './../../stores/principal-store';
import Card from 'react-bootstrap/Card';

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
			<section className="scroll-cats">
				<ul className="scrollable">
					{animals?.map((animal) => {
						return (
							<li>
								<Card style={{ width: '100%' }}>
									<Card.Body>
										<Card.Img
											className="horisontal-images"
											variant="top"
											src={animal.photos[0]?.medium}
										/>
										<Card.Title>{animal.name}</Card.Title>
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
