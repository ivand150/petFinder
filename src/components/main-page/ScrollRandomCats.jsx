import React, { useEffect, useState } from 'react';
import './ScrollRandomCats.css';
import { requestToken, requestAnimals } from '../../actions/actions';
import store from './../../stores/principal-store';

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
				<span className="scroll-cats__title">Cats</span>
				<ul className="scrollable">
					{animals?.map((animal) => {
						return (
							<li>
								<img
									src={animal.photos[0]?.medium}
									alt=""
									className="horisontal-images"
								/>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
}

export default ScrollRandomCats;
