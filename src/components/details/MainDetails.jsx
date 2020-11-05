import React, { useEffect, useState } from 'react';
import './MainDetails.css';
import Details from './Details';
import SliderDetail from './SliderDetail';
import store from '../../stores/principal-store';
import {
	requestToken,
	requestAnimal,
	requestAnimals
} from '../../actions/actions';

function MainDetails({ match }) {
	const [token, setToken] = useState(store.getToken());
	const [animal, setAnimal] = useState(store.getAnimal());
	const [animals, setAnimals] = useState(store.getAnimals());
	const animalId = match.params.animalId;

	useEffect(() => {
		store.addEventListener(handleChange);
		if (!token) {
			requestToken();
		} else if (!animal) {
			requestAnimal(animalId);
		} else if (animal && animals.length < 1) {
			const animalType = animal.type;
			requestAnimals(animalType);
		}

		return () => {
			store.removeEventListener(handleChange);
		};
	}, [token, animal, animalId, animals]);

	function handleChange() {
		setToken(store.getToken());
		setAnimal(store.getAnimal());
		setAnimals(store.getAnimals());
	}

	return (
		<main className="minvw">
			<SliderDetail animal={animal} />
			<Details animal={animal} />
		</main>
	);
}

export default MainDetails;
