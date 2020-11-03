import React from 'react';
import './Filters.css';
import { requestAnimals } from '../../actions/actions';
import store from '../../stores/principal-store';

function Filters({ type }) {
	const object = {
		age: ['any', 'young', 'baby'],
		breed: ['Cats breed', 'Dogs breed'],
		gender: ['female', 'male']
	};

	let urlString = {
		age: '',
		breed: '',
		gender: ''
	};

	function updateUrlObject(event, animalProperty, urlObject) {
		urlObject[animalProperty] = event.target.checked
			? urlObject[animalProperty] + `${event.target.value},`
			: urlObject[animalProperty].replace(`${event.target.value},`, '');
	}

	function applyFilters(urlObject, type) {
		for (const property in urlObject) {
			urlObject[property] = store.removeLastComma(urlObject[property]);
		}
		console.log('Aply filters clic');
		requestAnimals(type, urlObject.breed, urlObject.gender, urlObject.age);
		window.history.replaceState(
			null,
			'',
			`/list?type=${type}&breed=${urlObject.breed}&age=${urlObject.age}&gender=${urlObject.gender}`
		);
	}

	return (
		<>
			<section className="filter-container">
				<div className="horizontal-container">
					<div id="filter-age" className="filter">
						{object.age &&
							object.age.map((option) => {
								return (
									<label>
										<input
											type="checkbox"
											key={option}
											value={option}
											onChange={(event) => {
												updateUrlObject(event, 'age', urlString);
											}}
										/>
										{option}
									</label>
								);
							})}
					</div>

					<div id="filter-breed" className="filter">
						{object.breed &&
							object.breed.map((option) => {
								return (
									<label>
										<input type="checkbox" key={option} value={option} />
										{option}
									</label>
								);
							})}
					</div>

					<div id="filter-gender" className="filter">
						{object.gender &&
							object.gender.map((option) => {
								return (
									<label>
										<input
											type="checkbox"
											key={option}
											value={option}
											onChange={(event) => {
												updateUrlObject(event, 'gender', urlString);
											}}
										/>
										{option}
									</label>
								);
							})}
					</div>
				</div>
				<button
					className="button-apply"
					onClick={() => {
						applyFilters(urlString, type);
					}}
				>
					Aply filters
				</button>
			</section>
		</>
	);
}

export default Filters;
